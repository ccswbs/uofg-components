import { ReactElement, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import { Button } from '../button/button.tsx';
import { Modal } from '../modal/modal.tsx';
import { EmbeddedVideoContext } from './embedded-video-context';
import { EmbeddedVideoModalButton } from './embedded-video-modal-button';

function getYouTubeVideoID(url: URL) {
  if (!(url instanceof URL)) {
    return null;
  }

  if (url.searchParams.has('v')) {
    return url.searchParams.get('v');
  }

  const path = url.pathname.split('/')?.filter(token => token !== '');

  switch (path?.[0]) {
    case 'v':
    case 'embed':
    case 'watch':
    case 'e':
    case 'shorts':
    case 'live':
      return path?.[1] ?? null;
    case 'oembed':
      return getYouTubeVideoID(new URL(decodeURIComponent(url.searchParams.get('url') ?? '')));
    case 'attribution_link':
      // TODO: Handle attribution links
      return null;
    default:
      return path?.[0] ?? null;
  }
}

function getVimeoVideoID(url: URL) {
  const path = url.pathname.split('/')?.filter(token => token !== '');
  return path?.[0] ?? null;
}

function getVideoInfo(url: string) {
  let type = null;
  let id = null;

  try {
    const parsed = new URL(url);

    // Determine where the remote video is hosted (i.e., YouTube or Vimeo)
    if (parsed?.hostname.includes('youtube') || parsed?.hostname.includes('youtu.be')) {
      type = 'youtube';
      id = getYouTubeVideoID(parsed);
    } else if (parsed?.hostname.includes('vimeo')) {
      type = 'vimeo';
      id = getVimeoVideoID(parsed);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    // Do nothing
  }

  return { type: type, id: id };
}

type VideoProps = {
  /** The URL of the video to embed. */
  src: string;
  /** The title of the video. */
  title?: string;
  /** The URL to a human readable transcript of the video. */
  transcript?: string;
  /** Additional classes to apply to the video container. */
  className?: string;
};
function Video({ src, title, transcript, className }: VideoProps) {
  const { id, type } = getVideoInfo(src);

  const video = tv({
    slots: {
      base: twMerge('tw:flex tw:flex-col', className),
      iframe: 'tw:w-full tw:h-full tw:aspect-video',
      transcriptButton: 'tw:p-3 tw:w-full',
    },
  });

  const { base, iframe, transcriptButton } = video();

  return (
    <div className={base()}>
      {type === 'youtube' && id && (
        <iframe
          className={iframe()}
          allowFullScreen
          src={`https://www.youtube.com/embed/${id}`}
          title={title ?? `YouTube Embedded Video Player`}
        />
      )}

      {type === 'vimeo' && id && (
        <iframe
          className={iframe()}
          allowFullScreen
          src={`https://player.vimeo.com/video/${id}`}
          title={title ?? `Vimeo Embedded Video Player`}
        />
      )}

      {transcript && (
        <Button as="a" color="red" className={transcriptButton()} href={transcript} download={true}>
          Download Transcript
        </Button>
      )}
    </div>
  );
}

type EmbeddedVideoProps = VideoProps & {
  /** If passed the video will render as a modal, with the button being used to open the video. */
  children?: ReactElement<typeof EmbeddedVideoModalButton>;
};

/**
 * The EmbeddedVideo component is used for embedding videos from YouTube and Vimeo. It can be used to render a video
 * directly or as a modal.
 */
export function EmbeddedVideo({ src, title, transcript, className, children }: EmbeddedVideoProps) {
  const [modalOpen, setModalOpen] = useState(false);

  if (children) {
    const embeddedVideo = tv({
      slots: {
        container:
          'tw:bg-dark-grey-bg tw:flex tw:w-screen tw:max-w-6xl tw:lg:max-w-7xl tw:flex-col tw:gap-4 tw:p-4 tw:text-dark-grey-contrast',
        video: 'tw:w-full',
        title: 'tw:text-xl tw:font-bold',
      },
    });

    const { container, video, title: titleClasses } = embeddedVideo();

    return (
      <>
        <EmbeddedVideoContext.Provider value={{ modalOpen, setModalOpen }}>{children}</EmbeddedVideoContext.Provider>
        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
          <div className={`uofg-embedded-video-container ${container()}`}>
            <span className={`uofg-embedded-video-title ${titleClasses()}`}>{title}</span>
            <Video
              src={src}
              title={title}
              transcript={transcript}
              className={`uofg-embedded-video ${twMerge(video(), className)}`}
            />
          </div>
        </Modal>
      </>
    );
  }

  return <Video src={src} title={title} transcript={transcript} className={`uofg-embedded-video ${className}`} />;
}

EmbeddedVideo.displayName = 'EmbeddedVideo';

export { EmbeddedVideoModalButton };

import { PropsWithChildren, useState, createContext, useContext, ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';
import { Button } from './button.tsx';
import { Modal } from './modal.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@awesome.me/kit-7993323d0c/icons/classic/solid';
import { ButtonProps } from './button.tsx';
import { tv } from 'tailwind-variants';

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
  src: string;
  title?: string;
  transcript?: string;
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

export type EmbeddedVideoContextType = {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
};
const EmbeddedVideoContext = createContext<EmbeddedVideoContextType | null>(null);

type EmbeddedVideoModalButtonProps = PropsWithChildren<{
  type: 'play-button' | ButtonProps['color'];
  className?: string;
}>;
export function EmbeddedVideoModalButton({ type, children, className }: EmbeddedVideoModalButtonProps) {
  const context = useContext(EmbeddedVideoContext);

  if (type === 'play-button') {
    const button = twMerge(
      'tw:flex tw:aspect-square tw:w-24 tw:items-center tw:justify-center tw:rounded-full tw:bg-black/30 tw:text-4xl tw:text-white tw:transition-colors tw:hover:bg-red/30 tw:focus:bg-red/30',
      className,
    );

    return (
      <button type="button" className={button} onClick={() => context?.setModalOpen(true)}>
        <FontAwesomeIcon icon={faPlay} />
        <span className="sr-only">Show Video</span>
      </button>
    );
  }

  return (
    <Button type="button" color={type} className={className} onClick={() => context?.setModalOpen(true)}>
      {children}
    </Button>
  );
}

type EmbeddedVideoProps<> = VideoProps & {
  modalButton?: ReactElement<typeof EmbeddedVideoModalButton>;
};
export function EmbeddedVideo({ src, title, transcript, className, modalButton }: EmbeddedVideoProps) {
  const [modalOpen, setModalOpen] = useState(false);

  if (modalButton) {
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
        <EmbeddedVideoContext.Provider value={{ modalOpen, setModalOpen }}>{modalButton}</EmbeddedVideoContext.Provider>
        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
          <div className={container()}>
            <span className={titleClasses()}>{title}</span>
            <Video src={src} title={title} transcript={transcript} className={twMerge(video(), className)} />
          </div>
        </Modal>
      </>
    );
  }

  return <Video src={src} title={title} transcript={transcript} className={`uofg-embedded-video ${className}`} />;
}

EmbeddedVideo.displayName = 'EmbeddedVideo';

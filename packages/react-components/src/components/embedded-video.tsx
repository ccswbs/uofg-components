import { ReactNode, useState } from 'react';
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

type EmbeddedVideoProps = VideoProps & {
  modal?: {
    button?: ReactNode;
    type: 'play-button' | ButtonProps['color'];
    className?: string;
  };
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

export function EmbeddedVideo({ src, title, transcript, className, modal }: EmbeddedVideoProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const embeddedVideo = tv({
    slots: {
      container:
        'tw:bg-dark-grey-bg tw:flex tw:w-screen tw:max-w-6xl tw:lg:max-w-7xl tw:flex-col tw:gap-4 tw:p-4 tw:text-dark-grey-contrast',
      video: twMerge('tw:w-full', className),
      title: 'tw:text-xl tw:font-bold',
      button: modal?.className,
    },
    variants: {
      type: {
        'play-button': {
          button: twMerge(
            'tw:flex tw:aspect-square tw:w-24 tw:items-center tw:justify-center tw:rounded-full tw:bg-black/30 tw:text-4xl tw:text-white tw:transition-colors tw:hover:bg-red/30 tw:focus:bg-red/30',
            modal?.className,
          ),
        },
        'red': {},
        'yellow': {},
        'green': {},
        'blue': {},
        'light-grey': {},
        'dark-grey': {},
        'black': {},
        'white': {},
      },
    },
  });

  const { container, video, title: titleClasses, button } = embeddedVideo({ type: modal?.type });

  return modal ?
      <>
        {modal.type === 'play-button' ?
          <button className={button()} onClick={() => setModalOpen(true)}>
            <FontAwesomeIcon icon={faPlay} />
            <span className="sr-only">Show Video</span>
          </button>
        : <Button color={modal.type} onClick={() => setModalOpen(true)} className={button()}>
            {modal.button}
          </Button>
        }

        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
          <div className={container()}>
            <span className={titleClasses()}>{title}</span>

            <Video src={src} title={title} transcript={transcript} className={video()} />
          </div>
        </Modal>
      </>
    : <Video src={src} title={title} transcript={transcript} className={className} />;
}

EmbeddedVideo.displayName = 'EmbeddedVideo';

import './index.css';
import { bezier, clamp, lerp, mod } from './utils/math-utils';
import { toTitleCase } from './utils/string-utils';
import { useDismissible } from './utils/use-dismissible';
import { useResizeObserver } from './utils/use-resize-observer';
import { useWindowSize } from './utils/use-window-size';

// Utils
export { bezier, clamp, lerp, mod, toTitleCase, useDismissible, useResizeObserver, useWindowSize };

// Components
export { Cookies, resetCookieBanner, isCookieBannerDismissed } from './components/cookies/cookies';
export { Modal } from './components/modal/modal';

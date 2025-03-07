import styles from '../styles/tailwind.css?inline';

let stylesheet: CSSStyleSheet | null = null;

if (typeof CSSStyleSheet === 'function') {
  stylesheet = new CSSStyleSheet();
  stylesheet.replaceSync(styles);
}

export default function attachTailwind(root: ShadowRoot | null) {
  if (!root || !(root instanceof ShadowRoot)) {
    console.warn('Cannot attach Tailwind styles to a non shadow root');
    return;
  }

  if (stylesheet) {
    root.adoptedStyleSheets = [stylesheet];
    return;
  }

  // If the browser doesn't support CSSStyleSheet, we need to use a fallback,
  // but we need to check if the styles are already attached to avoid duplicates
  if (root.querySelector('#uofg-web-components-tailwind')) {
    console.warn('Tailwind styles already attached to this shadow root');
    return;
  }

  // Fallback for browsers that don't support CSSStyleSheet
  const style = document.createElement('style');
  style.id = 'uofg-web-components-tailwind';
  style.innerHTML = styles;
  root.prepend(style);
}

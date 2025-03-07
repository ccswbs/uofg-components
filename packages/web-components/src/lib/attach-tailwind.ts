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
    root.adoptedStyleSheets = [...root.adoptedStyleSheets, stylesheet];
  } else {
    const style = document.createElement('style');
    style.innerHTML = styles;
    root.prepend(style);
  }
}

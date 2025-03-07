import { type Action } from 'svelte/action';

interface Attributes {
  onfocusoutside: (e: CustomEvent) => void;
  onfocusinside: (e: CustomEvent) => void;
}

const focusWithin: Action<HTMLElement, undefined, Attributes> = node => {
  const focusOutside = function (e: FocusEvent) {
    if (!node.contains(e.relatedTarget as Node)) {
      node.dispatchEvent(new CustomEvent('focusoutside', { bubbles: false, detail: e }));
    }
  };

  const focusInside = function (e: FocusEvent) {
    if (!node.contains(e.relatedTarget as Node)) {
      node.dispatchEvent(new CustomEvent('focusinside', { bubbles: false, detail: e }));
    }
  };

  node.addEventListener('focusin', focusInside);
  node.addEventListener('focusout', focusOutside);

  return {
    destroy() {
      node.removeEventListener('focusin', focusInside);
      node.removeEventListener('focusout', focusOutside);
    },
  };
};

export default focusWithin;

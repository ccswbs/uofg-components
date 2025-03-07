export const getAllFocusableElements = (container: Element) => {
  const query =
    'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [contenteditable], audio[controls], video[controls], details, summary, [tabindex]:not([tabindex="-1"])';

  return Array.from(container.querySelectorAll(query));
};

export default getAllFocusableElements;

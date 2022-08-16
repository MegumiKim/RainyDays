export function createElement(
  tagname,
  classes,
  innerHTML,
  children,
  src,
  altText
) {
  const element = document.createElement(tagname);
  element.classList.add(classes);

  if (innerHTML) {
    element.innerHTML = innerHTML;
  }

  if (Array.isArray(children) && children.length) {
    element.append(...children);
  }

  if (src) {
    element.src = src;
  }

  if (altText) {
    element.altText = altText;
  }
  return element;
}

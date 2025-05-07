// src/utils/createElement.js
export function createElement(type, props = {}, ...children) {
    return {
      type,
      props: {
        ...props,
        children: children.flat().map(child =>
          typeof child === 'object'
            ? child
            : createElement('TEXT_ELEMENT', { nodeValue: child })
        ),
      },
    };
  }
  
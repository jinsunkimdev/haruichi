// src/utils/render.js
export function render(vdom, container) {
    const { type, props } = vdom;
    const dom =
      type === 'TEXT_ELEMENT'
        ? document.createTextNode(props.nodeValue)
        : document.createElement(type);
  
    // props 설정
    for (const [name, value] of Object.entries(props)) {
      if (name !== 'children') {
        dom[name] = value;
      }
    }
  
    // 자식들 재귀 렌더링
    props.children.forEach(child => render(child, dom));
  
    container.appendChild(dom);
  }
  
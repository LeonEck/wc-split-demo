import html from './my-component.html';
import css from './my-component.scss';

const template = document.createElement('template');
template.innerHTML = `<style>${css}</style>${html}`;

class MyComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('my-component', MyComponent);

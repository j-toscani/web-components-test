class AltHeadline extends HTMLElement {
    constructor() {
      // Always call super first in constructor
      const self = super();

      // Create a shadow root
      const shadow = this.attachShadow({mode: 'open'});
  
      // Create spans
      const wrapper = document.createElement('span');
      wrapper.setAttribute('class', 'huge-headline');
  
      // Create some CSS to apply to the shadow dom
      const style = document.createElement('style');
      console.log(style.isConnected);
        
      wrapper.textContent = self.innerHTML;

      style.textContent = `
        .huge-headline {
            opacity:0.2;

            font-size:40px;
            transition: opacity 0.3s ease-out;
            height: fit-content;
            transform-origin: 0 0;
        }

        .huge-headline:hover {
            opacity: 1;
        }
      `;
  
      // Attach the created elements to the shadow dom
      shadow.appendChild(style);
      console.log(style.isConnected);
      shadow.appendChild(wrapper);
    }
  }

  customElements.define('huge-headline', AltHeadline);
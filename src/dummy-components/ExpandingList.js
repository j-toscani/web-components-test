export default class ExpandingList extends HTMLElement {
    constructor() {
      // Always call super first in constructor
      const self = super();

      // Create a shadow root
      const shadow = this.attachShadow({mode: 'open'});
  
      const items = self.querySelectorAll("li");

      const wrapper = document.createElement("div");
      wrapper.setAttribute("class", "list-wrapper");
      const display = document.createElement("label");
      display.setAttribute("class", "list-display");

      const text = this.getAttribute('data-display');
      display.textContent = text || "Display";

      const dropdown = document.createElement("div");
      dropdown.setAttribute("class", "list-dropdown");

      items.forEach(item => {
          item.setAttribute("class", "list-element")
          dropdown.appendChild(item)
        })
      wrapper.appendChild(display);
      wrapper.appendChild(dropdown);

      const style = document.createElement('style');
      console.log(style.isConnected);

      style.textContent = `
        .list-wrapper {
            position: relative;
        }
        .list-element {
            list-style: none;
            padding: 0.5rem 0.75rem;
        }
        .list-element:hover {
            background: #ddd;
        }

        .list-display {
            padding: 0.5rem 0.75rem;
            display: block;
            border: 1px solid #ddd;
        }

        .list-dropdown {
            width: calc(100% - 2px);
            position: absolute;
            top: 100%;
            left:0;
            
            border: 1px solid #ddd;
            transform: scaleY(0);
            opacity:0;
            transform-origin: top;

            transition: transform 0.3s ease-out, opacity 0.3s ease-out;
        }

        .list-wrapper:hover > .list-dropdown {
            transform: scaleY(1);
            opacity: 1;
        }
      `;
  
      // Attach the created elements to the shadow dom
      shadow.appendChild(style);
      console.log(style.isConnected);
      shadow.appendChild(wrapper);
    }
  }
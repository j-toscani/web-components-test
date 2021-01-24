export default class ExpandingList extends HTMLElement {

    set listItems(val) {
      this.renderElements(val);
    }

    get listItems() {
      return this.querySelectorAll("li");
    }

    constructor() {
      // Always call super first in constructor
      const self = super();

      // Create a shadow root

      const wrapper = document.createElement("div");
      wrapper.setAttribute("class", "list-wrapper");
      const display = document.createElement("label");
      display.setAttribute("class", "list-display");

      const text = this.getAttribute('data-display');
      display.textContent = text || "Display";

      const dropdown = document.createElement("div");
      dropdown.setAttribute("class", "list-dropdown");

      this.createListItems();

      wrapper.appendChild(display);
      wrapper.appendChild(dropdown);

      const style = document.createElement('style');

      style.textContent = `
        .list-wrapper {
            position: relative;
        }

        .list-dropdown {
            width: calc(100% - 2px);
            position: absolute;
            top: 100%;
            left:0;
            
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
      this.appendChild(wrapper);
    }
    setItems(array) {
      this.items = array;
      this.createListItems();
    }
    createListItems() {
      if (!this.items) {
        return;
      }

      const items = this.querySelectorAll("li");

      this.items.forEach((item, index) => {
        if (index < items.length) {
          items[index].textContent = item;
        } else {
          const element = document.createElement("li");
          element.textContent = item;
          const dropdown = this.querySelector(".list-dropdown")
          dropdown.appendChild(element)
        }
      })
    }
  }
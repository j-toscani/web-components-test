export default class Select extends HTMLElement {
  get elements() {
    const children = [];
    for(let child in this.dropdown.childNodes) {
        if(this.dropdown.childNodes[child].nodeType === 1) {
            children.push(child);
        }
    }
    return children;
  }

  set elements(val) {
    if(Array.isArray(val)) {
      val.forEach((element) => {
        element.addEventListener("click", this.onClick)
        this.dropdown.appendChild(element)
      })
    }
  }

  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.stylesheet = document.createElement("link");
    this.stylesheet.setAttribute("rel", "stylesheet");
    this.stylesheet.setAttribute("href", "/src/components/select.css");

    this.display = document.createElement("div");
    this.display.setAttribute("class", "list-display");

    this.display.textContent = "Display";

    this.dropdown = document.createElement("ul");
    this.dropdown.setAttribute("class", "list-dropdown");

    this.wrapper = document.createElement('div');
    this.wrapper.setAttribute("class", "list-wrapper");

    this.wrapper.appendChild(this.stylesheet);
    this.wrapper.appendChild(this.display);
    this.wrapper.appendChild(this.dropdown);
    this.shadowRoot.append(this.wrapper);

  }

  connectedCallback() {
    this.elements.forEach(element => element.addEventListener("click", this.onClick))
  }
  onClick = (event) => {
    this.display.textContent = event.target.textContent
    this.wrapper.setAttribute("value", event.target.textContent);
  };
  
  disconnectedCallback() {
    if (this.elements && this.elements.length > 0) {
      this.elements.forEach(element => element.removeEventListener("click", this.onClick))
    }
  }
}

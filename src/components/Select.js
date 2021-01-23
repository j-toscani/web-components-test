class Select extends HTMLElement {
  get elements() {
    return this.dropdown.querySelectorAll('li');
  }

  set elements(val) {
    this.data = val;

    if (!Array.isArray(val)) {
      console.error("`elements` needs to be an Array");
      return;
    }

    const list = val.map((element, index) => {
      const li = document.createElement("li");
      li.setAttribute("class", "list-element");

      if (this.dspValueGetter) {
        li.textContent = this.dspValueGetter(element);
      } else {
        li.textContent = element;
      }

      if(this.createDataKey) {
        li.setAttribute("key", this.createDataKey);
      } else {
        li.setAttribute("key", index);
      }

      return li;
    });

    list.forEach((li) => {
      display.appendChild(li);
    });
  }

  get value() {
      return this.data.find((entry) => this.keyGetter(entry) === this.chosen);
  }

  set value(key) {
      return this.data.find((entry) => this.keyGetter(entry) === key);
  }

  constructor(options = {}) {
    super();

    // Set default value for options Object
    const { data = [], dspValueGetter = (value) => value, keyGetter = null } = options;

    this.attachShadow({ mode: "open" });

    this.stylesheet = document.createElement("link");
    this.stylesheet.setAttribute("rel", "stylesheet");
    this.stylesheet.setAttribute("href", "select.css");

    this.data = data;
    this.chosen = null;

    this.dspValueGetter = dspValueGetter;
    this.keyGetter = keyGetter;

    this.elements = this.data;

    this.display = document.createElement("div");
    this.display.setAttribute("class", "list-display");

    this.dropdown = document.createElement("ul");
    this.dropdown.setAttribute("class", "list-dropdown");

    this.dropdown.setAttribute("class", "list-wrapper");

    this.shadowRoot.append(this.display);
    this.shadowRoot.append(this.dropdown);

    this.display.textContent = this.dspValueGetter(this.value);
  }

  connectedCallback() {
    this.elements.forEach(element => element.addEventListener("click", this.onClick))
  }
  onClick(event) {
        this.chosen = event.target.getAttribute("key");
        this.display.textContent = this.dspValueGetter(this.value);
  }
  disconnectedCallback() {
    this.elements.forEach(element => element.removeEventListener("click", this.onClick))
  }
}

export default class SVGBars extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    const self = super();

    // Create a shadow root
    this.attachShadow({ mode: "open" });

    this.stylesheet = document.createElement("link");
    this.stylesheet.setAttribute("rel", "stylesheet");
    this.stylesheet.setAttribute("href", "/src/components/svgbars.css");

    this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.svg.setAttributeNS(null, "width", "100%");
    this.svg.setAttributeNS(null, "height", "100%");

    const wrapper = document.createElement('div');
    // Attach the created elements to the shadow dom
    wrapper.appendChild(this.stylesheet);
    wrapper.appendChild(this.svg);
    this.shadowRoot.appendChild(wrapper);
  }
  rect = (height, width, y) => {
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttributeNS(null, "width", width);
    rect.setAttributeNS(null, "height", height);
    rect.setAttributeNS(null, "y", y);

    return rect;
  };
  text = (y, x, _text) => {
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttributeNS(null, "x", x);
    text.setAttributeNS(null, "y", y);
    text.setAttributeNS(null, "dy", '0.35em');

    text.textContent = _text;
    return text;
  };
  g = () => {
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    return g
  };
  chart = (entries = [10,20,55,30,110]) => {
    const barHeight = 20;
    let y = 0;
    let gap = 5;

    const elements = entries.map(entry => {
      const bar = this.bar(entry, barHeight, y)
      y += barHeight + gap;
      return bar
    })

    elements.forEach(element => this.svg.appendChild(element));

  }
  bar = (entry, barHeight, y) => {
    const rect = this.rect(barHeight, entry, y);
    const text = this.text(y + barHeight / 2, entry + barHeight / 2, entry);
    const g = this.g();

      g.appendChild(rect);
      g.appendChild(text);
      g.classList.add('bar');

      return g;
  }
}

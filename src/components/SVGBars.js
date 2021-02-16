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
  createRect = (height, width, y) => {
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttributeNS(null, "width", width);
    rect.setAttributeNS(null, "height", height);
    rect.setAttributeNS(null, "y", y);

    return rect;
  };
  createText = (y, x, _text) => {
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttributeNS(null, "x", x);
    text.setAttributeNS(null, "y", y);
    text.setAttributeNS(null, "dy", '0.35em');

    text.textContent = _text;
    return text;
  };
  createGroup = () => {
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    return g
  };
  createBarChart = (entries = [10,20,55,30,110], options = {gap = 5}) => {
    const barHeight = 20;
    let y = 0;

    const elements = entries.map(entry => {
      const bar = this.createBar(entry, barHeight, y)
      y += barHeight + gap;
      return bar
    })

    elements.forEach(element => this.svg.appendChild(element));

  };
  createLine = (points, options = {width: 3, step: 20}) => {
    const {step, width} = options;
    const polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");

    let x = 0;
    const coordinates = points.map((point) => { 
      const coordinate = `${x}, ${point} `;
      x += step; 
      return coordinate
    }).join(" ");

    polyline.setAttributeNS(null, "points", coordinates);
    polyline.setAttributeNS(null, "width", width);

    return polyline;
  }
  createBar = (entry, barHeight, y) => {
    const rect = this.createRect(barHeight, entry, y);
    const text = this.createText(y + barHeight / 2, entry + barHeight / 2, entry);
    const g = this.createGroup();

      g.appendChild(rect);
      g.appendChild(text);
      g.classList.add('bar');

      return g;
  }
}

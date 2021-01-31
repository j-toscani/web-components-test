export default class SVGRect extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    const self = super();

    // Create a shadow root

    // SVG

    this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.svg.setAttributeNS(null, "width", "100%");
    this.svg.setAttributeNS(null, "height", "100%");

    // Attach the created elements to the shadow dom
    self.appendChild(this.svg);
  }
  rect = (height, width, fill) => {
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttributeNS(null, "width", width);
    rect.setAttributeNS(null, "height", height);
    rect.setAttributeNS(null, "fill", fill);
    this.svg.appendChild(rect);
  };
}

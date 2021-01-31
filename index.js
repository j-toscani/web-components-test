"use strict"
import FadingHeadline from './src/dummy-components/FadingHeadline.js';
import Select from './src/components/Select.js';
import SVGRect from './src/dummy-components/SVGRect.js';

customElements.define('wc-select', Select);
customElements.define('svg-rect', SVGRect);
customElements.define('fading-h1', FadingHeadline);

const select = document.querySelector("wc-select");
const svg = document.querySelector("svg-rect").rect(100,100,'blue');

select.elements = [1,2,3,4,5].map(element => {
    const li = document.createElement('li')
    li.textContent = element;
    return li
});

console.log(select)
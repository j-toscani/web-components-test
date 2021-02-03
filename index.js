"use strict"
import FadingHeadline from './src/dummy-components/FadingHeadline.js';
import Select from './src/components/Select.js';
import SVGBars from './src/components/SVGBars.js';

customElements.define('wc-select', Select);
customElements.define('svg-rect', SVGBars);
customElements.define('fading-h1', FadingHeadline);

const select = document.querySelector("wc-select");
const svg = document.querySelector("svg-rect").chart([20,20,45,14,125]);

select.elements = [1,2,3,4,5].map(element => {
    const li = document.createElement('li')
    li.textContent = element;
    return li
});

console.log(select)
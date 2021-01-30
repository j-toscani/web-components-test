"use strict"
import FadingHeadline from './src/dummy-components/FadingHeadline.js';
import Select from './src/components/Select.js';

customElements.define('wc-select', Select);
customElements.define('fading-h1', FadingHeadline);

const select = document.querySelector("wc-select");

select.elements = [1,2,3,4,5].map(element => {
    const li = document.createElement('li')
    li.textContent = element;
    return li
});

console.log(select)
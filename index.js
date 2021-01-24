"use strict"
import FadingHeadline from './src/dummy-components/FadingHeadline.js';
import Select from './src/components/Select.js';

customElements.define('wc-select', Select);
customElements.define('fading-h1', FadingHeadline);

const button = document.querySelector("button")
const list = document.querySelector("wc-select")

list.elements = [1,2,3];


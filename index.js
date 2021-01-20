"use strict"
import FadingHeadline from './components/FadingHeadline.js';
import ExpandingList from './components/ExpandingList.js';

customElements.define('fading-h1', FadingHeadline);
customElements.define('ul-expanding', ExpandingList);

const select = document.querySelector("ul-expanding");
const button = document.querySelector(".clear-button");
button.addEventListener("click", () => {
    select.clearDisplay()
})
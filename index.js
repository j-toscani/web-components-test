"use strict"
import FadingHeadline from './components/FadingHeadline.js';
import DynamicList from './components/DynamicList.js';

customElements.define('fading-h1', FadingHeadline);
customElements.define('ul-dynamic', DynamicList);

const button = document.querySelector("button")
const list = document.querySelector("ul-dynamic")

button.addEventListener("click", () => {
    let items = [1];

    if (Array.isArray(list.items)) {
        items = [...list.items];
        items.push(list.items.length + 1)
    }

    list.setItems(items);
})
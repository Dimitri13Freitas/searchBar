import { SearchOnKeyDown } from './searchScript.js';

const searchBar = new SearchOnKeyDown('#input', '.container div', 'h1');

searchBar.anima('.container div','anima');

searchBar.focusOnLoad();
searchBar.init();

// this.animElement = document.querySelectorAll(`${this.animTarget}[style*="opacity: 1;"]`)  

// const x = document.querySelector('.container');


// x.removeAttribute('data-penis');

// console.log(x)


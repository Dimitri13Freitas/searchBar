import { Search } from './searchScript.js';

const searchBar = new Search('input', 'container', 'h1', 'div');
searchBar.init();
searchBar.focusOnLoad();
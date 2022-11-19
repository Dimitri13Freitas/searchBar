import { SearchOnChange, SearchOnKeyDown } from './searchScript.js';

const searchBar = new SearchOnKeyDown('input', 'container', 'h1', 'div');
searchBar.init()
searchBar.focusOnLoad();

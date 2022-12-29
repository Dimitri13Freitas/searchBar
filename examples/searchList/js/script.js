import { SearchOnKeyDown } from './searchScript.js';

const searchBar = new SearchOnKeyDown('#input', '.lista li');

searchBar.loadEffect('.loadElement');
searchBar.anima('anima');

searchBar.focusOnLoad();
searchBar.init();

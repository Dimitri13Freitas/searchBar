import { SearchOnKeyDown } from './searchScript.js';

const searchBarItems = new SearchOnKeyDown('#input', '.lista li');

searchBarItems.focusOnLoad();
searchBarItems.init();

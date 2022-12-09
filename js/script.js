import { SearchOnChange } from './searchScript.js';

const searchBarItems = new SearchOnChange('#input', '#container', 'div', 'h1');

searchBarItems.init();
searchBarItems.focusOnLoad();

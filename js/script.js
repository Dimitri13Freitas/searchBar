import { SearchOnKeyDown } from './searchScript.js';

const searchBarItems = new SearchOnKeyDown('#input', '#container', 'li');

searchBarItems.animContainer();

searchBarItems.init();
searchBarItems.focusOnLoad();
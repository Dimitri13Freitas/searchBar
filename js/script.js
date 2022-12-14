import { SearchOnKeyDown } from './searchScript.js';


const searchBarItems = new SearchOnKeyDown('#input', '#container', 'div', 'h1');

searchBarItems.anime('div', 'anima')

searchBarItems.focusOnLoad();
searchBarItems.init();


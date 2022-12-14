import { SearchOnKeyDown } from './searchScript.js';


const searchBarItems = new SearchOnKeyDown('#input', '#container', '.container div', 'h1');

// searchBarItems.anime('.container div','anima');
// searchBarItems.anime('anima');

searchBarItems.focusOnLoad();
searchBarItems.init();


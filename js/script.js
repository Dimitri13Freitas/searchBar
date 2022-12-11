import { SearchOnKeyDown } from './searchScript.js';

// new SearchOnKeyDown(input, container, item, topic);

const searchBarItems = new SearchOnKeyDown('#input', '#container', 'div', 'h1');

searchBarItems.animContainer(333, 444, 666);

searchBarItems.init();
searchBarItems.focusOnLoad();
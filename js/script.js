import { SearchOnChange, SearchOnKeyDown } from './searchScript.js';

const searchBarItems = new SearchOnKeyDown('#inputItems', '#containerItems', 'div', 'h1');
// const searchBarList = new SearchOnKeyDown('#inputList', '#containerList', 'li');
searchBarItems.init();
searchBarItems.focusOnLoad();

// searchBarList.init();
// searchBarList.focusOnLoad();
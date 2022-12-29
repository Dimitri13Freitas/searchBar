import { SearchOnChange } from './searchScript.js';

const searchBar = new SearchOnChange('#input', '.container div', 'h1');

searchBar.anima('anima');

searchBar.load('.load','Carregando...');

searchBar.focusOnLoad();
searchBar.init();

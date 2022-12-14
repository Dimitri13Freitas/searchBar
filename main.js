/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _searchScript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchScript.js */ \"./js/searchScript.js\");\n\n\n\nconst searchBarItems = new _searchScript_js__WEBPACK_IMPORTED_MODULE_0__.SearchOnKeyDown('#input', '#container', '.container div', 'h1');\n\n// searchBarItems.anime('.container div','anima');\n// searchBarItems.anime('anima');\n\nsearchBarItems.focusOnLoad();\nsearchBarItems.init();\n\n\n\n//# sourceURL=webpack://searchpage/./js/script.js?");

/***/ }),

/***/ "./js/searchScript.js":
/*!****************************!*\
  !*** ./js/searchScript.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SearchOnChange\": () => (/* binding */ SearchOnChange),\n/* harmony export */   \"SearchOnKeyDown\": () => (/* binding */ SearchOnKeyDown)\n/* harmony export */ });\nclass SearchOnChange {\n  constructor(input, container, item, topic) {\n    this.input = document.querySelector(input);\n    this.items = document.querySelectorAll(item);\n    this.topicElement = topic ? topic : item;\n    this.switch = item === this.topicElement ? true : false;\n  }\n  addEventsInput() {\n    this.input.addEventListener('change', this.handleEvent);\n    this.input.addEventListener('keyup', this.inputEmpty);\n  }\n  inputEmpty() {\n    if(this.input.value === '') {\n      this.items.forEach(e => {\n        e.style.display = 'block';\n      })\n    }\n  }\n  handleEvent() {\n    const inputValue = this.input.value;\n    this.items.forEach(e => {\n      const topic = this.switch ? e.innerText : e.querySelector(this.topicElement).innerText;\n      if(this.changeString(topic) === this.changeString(inputValue)) {\n\n      } else {\n        e.style.display = 'none';\n      }\n    });\n  }\n  changeString(str) {\n    return str.toLowerCase().normalize('NFD').replace(/[^a-zA-Z\\s]/g, '');\n  }\n  bind() {\n    this.handleEvent = this.handleEvent.bind(this);\n    this.inputEmpty = this.inputEmpty.bind(this);\n    this.changeString = this.changeString.bind(this);\n  }\n  init() {\n    this.bind();\n    this.addEventsInput();\n  }\n  focusOnLoad() {\n    window.onload = () => this.input.focus();\n  }\n  anime(animClass) {\n    this.animElement = [];\n    // this.animElement = document.querySelectorAll(animElement);\n    // this.animElement.forEach(e => e.style.opacity = 0);\n    \n    this.animClass = animClass;\n  }\n  animeFunc() {\n    this.animElement.forEach(e => e.style.opacity = 0);\n    this.animElement.forEach((e, i) => {\n      this.animElement[0].classList.add(this.animClass);\n      this.animElement[0].style.opacity = 1;\n      if(this.animElement.length > 1) {\n        e.addEventListener('animationend', () => {\n          e.classList.remove(this.animClass);\n          if(i != this.animElement.length - 1) {\n            e.nextElementSibling.classList.add(this.animClass);\n            e.nextElementSibling.style.opacity = 1;\n          }\n        })\n      }\n    })\n  }\n}\n\nclass SearchOnKeyDown extends SearchOnChange {\n  addEventsInput() {\n    this.input.addEventListener('keyup', (e) => {\n      this.handleEvent();\n      this.inputEmpty(e);\n    });\n  }\n  inputEmpty(e) {\n    if(e.keyCode === 8) {\n      this.items.forEach(e => {\n        e.style.display = 'block';\n      })\n      this.handleEvent();\n    }\n  }\n\n  handleEvent() {\n    let inputValue = this.input.value;\n    inputValue = this.changeString(inputValue);\n    this.items.forEach(e => {\n      let topic = this.switch ? e.innerText : e.querySelector(this.topicElement).innerText;\n      topic = this.changeString(topic);\n      topic = topic.slice(0,inputValue.length);\n      if(topic === inputValue) {\n        if(this.animClass) {\n          this.animElement.push(e);\n          if(this.animElement.length === 5) {\n            this.animeFunc();\n          }\n        }\n      } else {\n        e.style.display = 'none';\n      }\n    })\n  }\n}\n\n//# sourceURL=webpack://searchpage/./js/searchScript.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;
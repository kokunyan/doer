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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ \"./src/modules/UI.js\");\n\n\n_modules_UI__WEBPACK_IMPORTED_MODULE_0__.UI.addButtons();\n\n//# sourceURL=webpack://doer/./src/index.js?");

/***/ }),

/***/ "./src/modules/Note.js":
/*!*****************************!*\
  !*** ./src/modules/Note.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Note)\n/* harmony export */ });\nclass Note {\n    \n    text;\n    startDate;\n    dueDate;\n    priority;\n    done = false;\n\n    constructor(name) {\n        this.name = name;\n    }\n    \n    getName = () => {\n        return this.name;\n    }\n\n    setName = (newName) => {\n        this.name = newName;\n    }\n\n    getText = () => {\n        return this.text;\n    }\n\n    setText = (newText) => {\n        this.text = newText;\n    }\n\n    setDone = () => {\n        this.done = true;\n    }\n\n    setUndone = () => {\n        this.done = false;\n    }\n}\n\n//# sourceURL=webpack://doer/./src/modules/Note.js?");

/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n    noteList = [];\n\n    constructor (name) {\n        this.name = name;\n    }\n\n    setName = (name) => {\n        this.name = name;\n    }\n\n    getName = () => {\n        return this.name;\n    }\n}\n\n//# sourceURL=webpack://doer/./src/modules/Project.js?");

/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Storage\": () => (/* binding */ Storage)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n/* harmony import */ var _Note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Note */ \"./src/modules/Note.js\");\n\n\n\nconst Storage = (() => {\n\n    let projectList = [];\n\n    function saveToLocalStorage() {\n        localStorage.setItem('projectList', JSON.stringify(projectList));\n    }\n    \n    function getFromLocalStorage() {\n        return JSON.parse(localStorage.getItem('projectList'));\n    }\n    \n    function findProject(projectName) {\n        return projectList.find((element) => element.name === projectName);\n    }\n\n    function findNote(projectName, noteName) {\n        return findProject(projectName).noteList.find((element) => element.name === noteName);\n    }\n\n    function addProject(name) {\n        const project = new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name);\n        projectList.push(project);\n        saveToLocalStorage();\n    }\n\n    function deleteProject(projectName) {\n        projectList.splice(projectList.indexOf(findProject(projectName)), 1);\n        saveToLocalStorage();\n    }\n\n    function addNote(projectName, noteName) {\n        const note = new _Note__WEBPACK_IMPORTED_MODULE_1__[\"default\"](noteName);\n        findProject(projectName).noteList.push(note);\n        saveToLocalStorage();\n    }\n    \n    function deleteNote(projectName, noteName) {\n        const project = findProject(projectName);\n        project.noteList.splice(project.noteList.indexOf(findNote(projectName, noteName)), 1);\n        saveToLocalStorage();\n    }\n\n    return {\n        addProject,\n        addNote,\n        findProject,\n        findNote,\n        deleteProject,\n        deleteNote\n    }\n})();\n\n//# sourceURL=webpack://doer/./src/modules/Storage.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UI\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage */ \"./src/modules/Storage.js\");\n\n\nconst UI = (() => {\n\n    // Add note/project buttons\n    \n    function addButtons() {\n        const projectBtn = document.querySelector('#addProject');\n        const noteBtn = document.querySelector('#addNote');\n        const deleteProjectBtn = document.querySelector('#deleteProject');\n        const deleteNoteBtn = document.querySelector('#deleteNote');\n    \n        projectBtn.addEventListener('click', () => {\n            let result = prompt('Name the Project');\n            _Storage__WEBPACK_IMPORTED_MODULE_0__.Storage.addProject(result);\n        })\n    \n        noteBtn.addEventListener('click', () => {\n            let result = prompt('Add a note to the...');\n            _Storage__WEBPACK_IMPORTED_MODULE_0__.Storage.addNote(result, prompt('Name the Note'));\n        })\n        \n        deleteProjectBtn.addEventListener('click', () => {\n            let result = prompt('Delete project...');\n            _Storage__WEBPACK_IMPORTED_MODULE_0__.Storage.deleteProject(result);\n        })\n    \n        deleteNoteBtn.addEventListener('click', () => {\n            let projectName = prompt('In project...');\n            let noteName = prompt('Note...')\n            _Storage__WEBPACK_IMPORTED_MODULE_0__.Storage.deleteNote(projectName, noteName);\n        })    \n    }\n\n    return {\n        addButtons\n      };\n})()\n\n//# sourceURL=webpack://doer/./src/modules/UI.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
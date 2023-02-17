/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/index.js":
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/assets/scss/styles.scss */ \"./src/assets/scss/styles.scss\");\n\n\n/* Menu */\nconst $menu = document.querySelector('.menu');\nif ($menu) {\n  const $menuOpen = $menu.querySelector('.menu__open');\n  $menuOpen.addEventListener('click', () => {\n    $menu.classList.add('menu--active');\n    document.body.classList.add('body--lock');\n  });\n  const $menuClose = $menu.querySelector('.menu__close');\n  $menuClose.addEventListener('click', () => {\n    $menu.classList.remove('menu--active');\n    document.body.classList.remove('body--lock');\n  });\n}\n\n/* Dropdown */\nconst $dropdowns = document.querySelectorAll('.dropdown');\n$dropdowns.forEach($filter => {\n  const $btn = $filter.querySelector('.dropdown__btn');\n  $btn.addEventListener('click', () => $filter.classList.toggle('dropdown--active'));\n});\nwindow.addEventListener('click', e => {\n  const $activeDropdown = document.querySelector('.dropdown--active');\n  const isInner = e.target.closest('.dropdown') && !e.target.classList.contains('dropdown');\n  if (!$activeDropdown || isInner) {\n    return;\n  }\n  $activeDropdown.classList.remove('dropdown--active');\n});\n\n/* Header */\nconst $header = document.querySelector('.header');\nif ($header) {\n  window.addEventListener('scroll', () => {\n    const height = $header.offsetHeight + 20;\n    if (window.scrollY > height && !$header.classList.contains('header--fixed')) {\n      $header.classList.add('header--fixed');\n    } else if (window.scrollY <= height && $header.classList.contains('header--fixed')) {\n      $header.classList.remove('header--fixed');\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL2pzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXJ0LXdlYnBhY2svLi9zcmMvYXNzZXRzL2pzL2luZGV4LmpzP2U0YjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAL2Fzc2V0cy9zY3NzL3N0eWxlcy5zY3NzJztcblxuLyogTWVudSAqL1xuY29uc3QgJG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpO1xuaWYgKCRtZW51KSB7XG4gIGNvbnN0ICRtZW51T3BlbiA9ICRtZW51LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19vcGVuJyk7XG4gICRtZW51T3Blbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAkbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51LS1hY3RpdmUnKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2JvZHktLWxvY2snKTtcbiAgfSk7XG5cbiAgY29uc3QgJG1lbnVDbG9zZSA9ICRtZW51LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19jbG9zZScpO1xuICAkbWVudUNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICRtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtLWFjdGl2ZScpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnYm9keS0tbG9jaycpO1xuICB9KTtcbn1cblxuLyogRHJvcGRvd24gKi9cbmNvbnN0ICRkcm9wZG93bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24nKTtcbiRkcm9wZG93bnMuZm9yRWFjaCgkZmlsdGVyID0+IHtcbiAgY29uc3QgJGJ0biA9ICRmaWx0ZXIucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duX19idG4nKTtcbiAgJGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+ICRmaWx0ZXIuY2xhc3NMaXN0LnRvZ2dsZSgnZHJvcGRvd24tLWFjdGl2ZScpKTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBjb25zdCAkYWN0aXZlRHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24tLWFjdGl2ZScpO1xuICBjb25zdCBpc0lubmVyID0gZS50YXJnZXQuY2xvc2VzdCgnLmRyb3Bkb3duJykgJiYgIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZHJvcGRvd24nKTtcbiAgaWYgKCEkYWN0aXZlRHJvcGRvd24gfHwgaXNJbm5lcikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gICRhY3RpdmVEcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wZG93bi0tYWN0aXZlJyk7XG59KTtcblxuLyogSGVhZGVyICovXG5jb25zdCAkaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuaWYgKCRoZWFkZXIpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICBjb25zdCBoZWlnaHQgPSAkaGVhZGVyLm9mZnNldEhlaWdodCArIDIwO1xuICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IGhlaWdodCAmJiAhJGhlYWRlci5jbGFzc0xpc3QuY29udGFpbnMoJ2hlYWRlci0tZml4ZWQnKSkge1xuICAgICAgJGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItLWZpeGVkJyk7XG4gICAgfSBlbHNlIGlmICh3aW5kb3cuc2Nyb2xsWSA8PSBoZWlnaHQgJiYgJGhlYWRlci5jbGFzc0xpc3QuY29udGFpbnMoJ2hlYWRlci0tZml4ZWQnKSkge1xuICAgICAgJGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXItLWZpeGVkJyk7XG4gICAgfVxuICB9KTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/js/index.js\n");

/***/ }),

/***/ "./src/assets/scss/styles.scss":
/*!*************************************!*\
  !*** ./src/assets/scss/styles.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3Njc3Mvc3R5bGVzLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhcnQtd2VicGFjay8uL3NyYy9hc3NldHMvc2Nzcy9zdHlsZXMuc2Nzcz85ODBkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scss/styles.scss\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/js/index.js");
/******/ 	
/******/ })()
;
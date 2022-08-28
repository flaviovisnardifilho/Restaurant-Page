/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHome)
/* harmony export */ });
// import Image from '../assets/img/pexels-pratik-gupta-2995188.jpg'

function loadHome() {
  const content = document.querySelector('#content');

  const tabcontent = document.createElement('div');
  tabcontent.classList.add('tabcontent');
  tabcontent.id = 'home';

  const openImage = document.createElement('img');
  openImage.src = '../src/assets/img/smoothie-clipart-md.png';
  
  openImage.alt = 'Green smoothie';
  openImage.height = '350';
  tabcontent.appendChild(openImage);

  const pAttribution = document.createElement('p');
  pAttribution.classList.add('interior-attribution');
  pAttribution.textContent = 'Clipart by ';
  const aAttribution = document.createElement('a');
  aAttribution.href =
    'https://creazilla.com/nodes/1795339-smoothie-clipart';
  aAttribution.textContent = 'Creazilla';
  pAttribution.appendChild(aAttribution);
  tabcontent.appendChild(pAttribution);

  const footerText = document.createElement('h3');
  footerText.textContent = 'Come and taste our insanely delicious smoothies!';
  tabcontent.appendChild(footerText);

  content.appendChild(tabcontent);
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5tYWluLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7O0FBRWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9ob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gaW1wb3J0IEltYWdlIGZyb20gJy4uL2Fzc2V0cy9pbWcvcGV4ZWxzLXByYXRpay1ndXB0YS0yOTk1MTg4LmpwZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gIGNvbnN0IHRhYmNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFiY29udGVudC5jbGFzc0xpc3QuYWRkKCd0YWJjb250ZW50Jyk7XG4gIHRhYmNvbnRlbnQuaWQgPSAnaG9tZSc7XG5cbiAgY29uc3Qgb3BlbkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIG9wZW5JbWFnZS5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9pbWcvc21vb3RoaWUtY2xpcGFydC1tZC5wbmcnO1xuICBcbiAgb3BlbkltYWdlLmFsdCA9ICdHcmVlbiBzbW9vdGhpZSc7XG4gIG9wZW5JbWFnZS5oZWlnaHQgPSAnMzUwJztcbiAgdGFiY29udGVudC5hcHBlbmRDaGlsZChvcGVuSW1hZ2UpO1xuXG4gIGNvbnN0IHBBdHRyaWJ1dGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcEF0dHJpYnV0aW9uLmNsYXNzTGlzdC5hZGQoJ2ludGVyaW9yLWF0dHJpYnV0aW9uJyk7XG4gIHBBdHRyaWJ1dGlvbi50ZXh0Q29udGVudCA9ICdDbGlwYXJ0IGJ5ICc7XG4gIGNvbnN0IGFBdHRyaWJ1dGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgYUF0dHJpYnV0aW9uLmhyZWYgPVxuICAgICdodHRwczovL2NyZWF6aWxsYS5jb20vbm9kZXMvMTc5NTMzOS1zbW9vdGhpZS1jbGlwYXJ0JztcbiAgYUF0dHJpYnV0aW9uLnRleHRDb250ZW50ID0gJ0NyZWF6aWxsYSc7XG4gIHBBdHRyaWJ1dGlvbi5hcHBlbmRDaGlsZChhQXR0cmlidXRpb24pO1xuICB0YWJjb250ZW50LmFwcGVuZENoaWxkKHBBdHRyaWJ1dGlvbik7XG5cbiAgY29uc3QgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGZvb3RlclRleHQudGV4dENvbnRlbnQgPSAnQ29tZSBhbmQgdGFzdGUgb3VyIGluc2FuZWx5IGRlbGljaW91cyBzbW9vdGhpZXMhJztcbiAgdGFiY29udGVudC5hcHBlbmRDaGlsZChmb290ZXJUZXh0KTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKHRhYmNvbnRlbnQpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
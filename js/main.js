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

/***/ "./src/js/index.js":
/*!********************************!*\
  !*** ./src/js/index.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/scss/styles.scss */ \"./src/scss/styles.scss\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n/* Menu */\nconst $menu = document.querySelector('.menu');\nif ($menu) {\n  const $menuOpen = $menu.querySelector('.menu__open');\n  $menuOpen.addEventListener('click', () => {\n    $menu.classList.add('menu--active');\n    document.body.classList.add('body--lock');\n  });\n  const $menuClose = $menu.querySelector('.menu__close');\n  $menuClose.addEventListener('click', () => {\n    $menu.classList.remove('menu--active');\n    document.body.classList.remove('body--lock');\n  });\n}\n\n/* Dropdown */\nconst $dropdowns = document.querySelectorAll('.dropdown');\n$dropdowns.forEach($filter => {\n  const $btn = $filter.querySelector('.dropdown__btn');\n  $btn.addEventListener('click', () => $filter.classList.toggle('dropdown--active'));\n});\nwindow.addEventListener('click', e => {\n  const $activeDropdown = document.querySelector('.dropdown--active');\n  const isInner = e.target.closest('.dropdown') && !e.target.classList.contains('dropdown');\n  if (!$activeDropdown || isInner) {\n    return;\n  }\n  $activeDropdown.classList.remove('dropdown--active');\n});\n\n/* Header */\nconst $header = document.querySelector('.header');\nif ($header) {\n  window.addEventListener('scroll', () => {\n    const height = $header.offsetHeight + 20;\n    if (window.scrollY > height && !$header.classList.contains('header--fixed')) {\n      $header.classList.add('header--fixed');\n    } else if (window.scrollY <= height && $header.classList.contains('header--fixed')) {\n      $header.classList.remove('header--fixed');\n    }\n  });\n}\n\n/* Shave.js */\n!function (e, t) {\n  \"object\" == typeof exports && \"undefined\" != \"object\" ? module.exports = t() : \"function\" == typeof define && __webpack_require__.amdO ? define(t) : (e = \"undefined\" != typeof globalThis ? globalThis : e || self).shave = t();\n}(undefined, function () {\n  \"use strict\";\n\n  function q(e, t) {\n    var n = \"function\" == typeof Symbol && e[Symbol.iterator];\n    if (!n) return e;\n    var o,\n      r,\n      i = n.call(e),\n      a = [];\n    try {\n      for (; (void 0 === t || 0 < t--) && !(o = i.next()).done;) a.push(o.value);\n    } catch (e) {\n      r = {\n        error: e\n      };\n    } finally {\n      try {\n        o && !o.done && (n = i.return) && n.call(i);\n      } finally {\n        if (r) throw r.error;\n      }\n    }\n    return a;\n  }\n  function T(e, t, n) {\n    if (n || 2 === arguments.length) for (var o, r = 0, i = t.length; r < i; r++) !o && r in t || ((o = o || Array.prototype.slice.call(t, 0, r))[r] = t[r]);\n    return e.concat(o || Array.prototype.slice.call(t));\n  }\n  return function (e, t, n) {\n    if (void 0 === n && (n = {}), void 0 === t || isNaN(t)) throw Error(\"maxHeight is required\");\n    var o = \"string\" == typeof (e = e) ? T([], q(document.querySelectorAll(e)), !1) : \"length\" in e ? T([], q(e), !1) : [e];\n    if (o.length) for (var r = void 0 === (e = n.character) ? \"…\" : e, i = void 0 === (e = n.classname) ? \"js-shave\" : e, e = void 0 === (e = n.spaces) || e, a = n.charclassname, l = void 0 === a ? \"js-shave-char\" : a, c = void 0 === (a = n.link) ? {} : a, s = \"boolean\" != typeof e || e, f = c && \"{}\" !== JSON.stringify(c) && c.href, d = f ? \"a\" : \"span\", h = 0; h < o.length; h += 1) {\n      var u = o[h],\n        v = u.style,\n        y = u.querySelector(\".\" + i),\n        m = void 0 === u.textContent ? \"innerText\" : \"textContent\",\n        y = (y && (u.removeChild(u.querySelector(\".\" + l)), u[m] = u[m]), u[m]),\n        p = s ? y.split(\" \") : y;\n      if (!(p.length < 2)) {\n        var y = v.height,\n          g = (v.height = \"auto\", v.maxHeight);\n        if (v.maxHeight = \"none\", !(u.offsetHeight <= t)) {\n          var x,\n            b = f && c.textContent ? c.textContent : r,\n            j = document.createElement(d),\n            C = {\n              className: l,\n              textContent: b\n            };\n          for (x in C) j[x] = C[x], j.textContent = r;\n          if (f) for (var A in c) j[A] = c[A];\n          for (var E, H = p.length - 1, S = 0; S < H;) E = S + H + 1 >> 1, u[m] = s ? p.slice(0, E).join(\" \") : p.slice(0, E), u.insertAdjacentElement(\"beforeend\", j), u.offsetHeight > t ? H = E - 1 : S = E;\n          u[m] = s ? p.slice(0, H).join(\" \") : p.slice(0, H), u.insertAdjacentElement(\"beforeend\", j);\n          var b = s ? \" \".concat(p.slice(H).join(\" \")) : p.slice(H),\n            b = document.createTextNode(b),\n            N = document.createElement(\"span\");\n          N.classList.add(i), N.style.display = \"none\", N.appendChild(b), u.insertAdjacentElement(\"beforeend\", N);\n        }\n        v.height = y, v.maxHeight = g;\n      }\n    }\n  };\n});\nshave('.news-item__text', 80);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL2pzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhcnQtd2VicGFjay8uL3NyYy9hc3NldHMvanMvaW5kZXguanM/ZTRiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ0AvYXNzZXRzL3Njc3Mvc3R5bGVzLnNjc3MnO1xuXG4vKiBNZW51ICovXG5jb25zdCAkbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jyk7XG5pZiAoJG1lbnUpIHtcbiAgY29uc3QgJG1lbnVPcGVuID0gJG1lbnUucXVlcnlTZWxlY3RvcignLm1lbnVfX29wZW4nKTtcbiAgJG1lbnVPcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICRtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUtLWFjdGl2ZScpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnYm9keS0tbG9jaycpO1xuICB9KTtcblxuICBjb25zdCAkbWVudUNsb3NlID0gJG1lbnUucXVlcnlTZWxlY3RvcignLm1lbnVfX2Nsb3NlJyk7XG4gICRtZW51Q2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgJG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS0tYWN0aXZlJyk7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdib2R5LS1sb2NrJyk7XG4gIH0pO1xufVxuXG4vKiBEcm9wZG93biAqL1xuY29uc3QgJGRyb3Bkb3ducyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bicpO1xuJGRyb3Bkb3ducy5mb3JFYWNoKCRmaWx0ZXIgPT4ge1xuICBjb25zdCAkYnRuID0gJGZpbHRlci5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd25fX2J0bicpO1xuICAkYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gJGZpbHRlci5jbGFzc0xpc3QudG9nZ2xlKCdkcm9wZG93bi0tYWN0aXZlJykpO1xufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGNvbnN0ICRhY3RpdmVEcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bi0tYWN0aXZlJyk7XG4gIGNvbnN0IGlzSW5uZXIgPSBlLnRhcmdldC5jbG9zZXN0KCcuZHJvcGRvd24nKSAmJiAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkcm9wZG93bicpO1xuICBpZiAoISRhY3RpdmVEcm9wZG93biB8fCBpc0lubmVyKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgJGFjdGl2ZURyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3Bkb3duLS1hY3RpdmUnKTtcbn0pO1xuXG4vKiBIZWFkZXIgKi9cbmNvbnN0ICRoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG5pZiAoJGhlYWRlcikge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgIGNvbnN0IGhlaWdodCA9ICRoZWFkZXIub2Zmc2V0SGVpZ2h0ICsgMjA7XG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gaGVpZ2h0ICYmICEkaGVhZGVyLmNsYXNzTGlzdC5jb250YWlucygnaGVhZGVyLS1maXhlZCcpKSB7XG4gICAgICAkaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci0tZml4ZWQnKTtcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5zY3JvbGxZIDw9IGhlaWdodCAmJiAkaGVhZGVyLmNsYXNzTGlzdC5jb250YWlucygnaGVhZGVyLS1maXhlZCcpKSB7XG4gICAgICAkaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlci0tZml4ZWQnKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKiBTaGF2ZS5qcyAqL1xuIWZ1bmN0aW9uIChlLCB0KSB7IFwib2JqZWN0XCIgPT0gdHlwZW9mIGV4cG9ydHMgJiYgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgbW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgPSB0KCkgOiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGRlZmluZSAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKHQpIDogKGUgPSBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBnbG9iYWxUaGlzID8gZ2xvYmFsVGhpcyA6IGUgfHwgc2VsZikuc2hhdmUgPSB0KCkgfSh0aGlzLCBmdW5jdGlvbiAoKSB7IFwidXNlIHN0cmljdFwiOyBmdW5jdGlvbiBxKGUsIHQpIHsgdmFyIG4gPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBlW1N5bWJvbC5pdGVyYXRvcl07IGlmICghbikgcmV0dXJuIGU7IHZhciBvLCByLCBpID0gbi5jYWxsKGUpLCBhID0gW107IHRyeSB7IGZvciAoOyAodm9pZCAwID09PSB0IHx8IDAgPCB0LS0pICYmICEobyA9IGkubmV4dCgpKS5kb25lOylhLnB1c2goby52YWx1ZSkgfSBjYXRjaCAoZSkgeyByID0geyBlcnJvcjogZSB9IH0gZmluYWxseSB7IHRyeSB7IG8gJiYgIW8uZG9uZSAmJiAobiA9IGkucmV0dXJuKSAmJiBuLmNhbGwoaSkgfSBmaW5hbGx5IHsgaWYgKHIpIHRocm93IHIuZXJyb3IgfSB9IHJldHVybiBhIH0gZnVuY3Rpb24gVChlLCB0LCBuKSB7IGlmIChuIHx8IDIgPT09IGFyZ3VtZW50cy5sZW5ndGgpIGZvciAodmFyIG8sIHIgPSAwLCBpID0gdC5sZW5ndGg7IHIgPCBpOyByKyspIW8gJiYgciBpbiB0IHx8ICgobyA9IG8gfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodCwgMCwgcikpW3JdID0gdFtyXSk7IHJldHVybiBlLmNvbmNhdChvIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHQpKSB9IHJldHVybiBmdW5jdGlvbiAoZSwgdCwgbikgeyBpZiAodm9pZCAwID09PSBuICYmIChuID0ge30pLCB2b2lkIDAgPT09IHQgfHwgaXNOYU4odCkpIHRocm93IEVycm9yKFwibWF4SGVpZ2h0IGlzIHJlcXVpcmVkXCIpOyB2YXIgbyA9IFwic3RyaW5nXCIgPT0gdHlwZW9mIChlID0gZSkgPyBUKFtdLCBxKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZSkpLCAhMSkgOiBcImxlbmd0aFwiIGluIGUgPyBUKFtdLCBxKGUpLCAhMSkgOiBbZV07IGlmIChvLmxlbmd0aCkgZm9yICh2YXIgciA9IHZvaWQgMCA9PT0gKGUgPSBuLmNoYXJhY3RlcikgPyBcIuKAplwiIDogZSwgaSA9IHZvaWQgMCA9PT0gKGUgPSBuLmNsYXNzbmFtZSkgPyBcImpzLXNoYXZlXCIgOiBlLCBlID0gdm9pZCAwID09PSAoZSA9IG4uc3BhY2VzKSB8fCBlLCBhID0gbi5jaGFyY2xhc3NuYW1lLCBsID0gdm9pZCAwID09PSBhID8gXCJqcy1zaGF2ZS1jaGFyXCIgOiBhLCBjID0gdm9pZCAwID09PSAoYSA9IG4ubGluaykgPyB7fSA6IGEsIHMgPSBcImJvb2xlYW5cIiAhPSB0eXBlb2YgZSB8fCBlLCBmID0gYyAmJiBcInt9XCIgIT09IEpTT04uc3RyaW5naWZ5KGMpICYmIGMuaHJlZiwgZCA9IGYgPyBcImFcIiA6IFwic3BhblwiLCBoID0gMDsgaCA8IG8ubGVuZ3RoOyBoICs9IDEpIHsgdmFyIHUgPSBvW2hdLCB2ID0gdS5zdHlsZSwgeSA9IHUucXVlcnlTZWxlY3RvcihcIi5cIiArIGkpLCBtID0gdm9pZCAwID09PSB1LnRleHRDb250ZW50ID8gXCJpbm5lclRleHRcIiA6IFwidGV4dENvbnRlbnRcIiwgeSA9ICh5ICYmICh1LnJlbW92ZUNoaWxkKHUucXVlcnlTZWxlY3RvcihcIi5cIiArIGwpKSwgdVttXSA9IHVbbV0pLCB1W21dKSwgcCA9IHMgPyB5LnNwbGl0KFwiIFwiKSA6IHk7IGlmICghKHAubGVuZ3RoIDwgMikpIHsgdmFyIHkgPSB2LmhlaWdodCwgZyA9ICh2LmhlaWdodCA9IFwiYXV0b1wiLCB2Lm1heEhlaWdodCk7IGlmICh2Lm1heEhlaWdodCA9IFwibm9uZVwiLCAhKHUub2Zmc2V0SGVpZ2h0IDw9IHQpKSB7IHZhciB4LCBiID0gZiAmJiBjLnRleHRDb250ZW50ID8gYy50ZXh0Q29udGVudCA6IHIsIGogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGQpLCBDID0geyBjbGFzc05hbWU6IGwsIHRleHRDb250ZW50OiBiIH07IGZvciAoeCBpbiBDKSBqW3hdID0gQ1t4XSwgai50ZXh0Q29udGVudCA9IHI7IGlmIChmKSBmb3IgKHZhciBBIGluIGMpIGpbQV0gPSBjW0FdOyBmb3IgKHZhciBFLCBIID0gcC5sZW5ndGggLSAxLCBTID0gMDsgUyA8IEg7KUUgPSBTICsgSCArIDEgPj4gMSwgdVttXSA9IHMgPyBwLnNsaWNlKDAsIEUpLmpvaW4oXCIgXCIpIDogcC5zbGljZSgwLCBFKSwgdS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgaiksIHUub2Zmc2V0SGVpZ2h0ID4gdCA/IEggPSBFIC0gMSA6IFMgPSBFOyB1W21dID0gcyA/IHAuc2xpY2UoMCwgSCkuam9pbihcIiBcIikgOiBwLnNsaWNlKDAsIEgpLCB1Lmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWVuZFwiLCBqKTsgdmFyIGIgPSBzID8gXCIgXCIuY29uY2F0KHAuc2xpY2UoSCkuam9pbihcIiBcIikpIDogcC5zbGljZShIKSwgYiA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGIpLCBOID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7IE4uY2xhc3NMaXN0LmFkZChpKSwgTi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIsIE4uYXBwZW5kQ2hpbGQoYiksIHUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIE4pIH0gdi5oZWlnaHQgPSB5LCB2Lm1heEhlaWdodCA9IGcgfSB9IH0gfSk7XG5cbnNoYXZlKCcubmV3cy1pdGVtX190ZXh0JywgODApIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ }),

/***/ "./src/scss/styles.scss":
/*!*************************************!*\
  !*** ./src/scss/styles.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3Njc3Mvc3R5bGVzLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhcnQtd2VicGFjay8uL3NyYy9hc3NldHMvc2Nzcy9zdHlsZXMuc2Nzcz85ODBkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scss/styles.scss\n");

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;
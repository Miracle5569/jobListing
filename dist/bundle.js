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

/***/ "./Скрипты/main.js":
/*!*************************!*\
  !*** ./Скрипты/main.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _html_vacancyGenerateHtml_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Генерация-html/vacancyGenerateHtml.js */ \"./Скрипты/Генерация-html/vacancyGenerateHtml.js\");\n/* harmony import */ var _setFilters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Скрипты/Классы/Класс_фильтров/setFilters.js */ \"./Скрипты/Классы/Класс_фильтров/setFilters.js\");\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.json */ \"./data.json\");\n\r\n\r\n\r\n\r\nlet html = document.querySelector(\"#vacancy\");\r\n\r\nhtml.innerHTML = (0,_html_vacancyGenerateHtml_js__WEBPACK_IMPORTED_MODULE_0__.renderVacancyHtml)(_data_json__WEBPACK_IMPORTED_MODULE_2__);\r\nhtml = new _setFilters_js__WEBPACK_IMPORTED_MODULE_1__.Filters();\r\n\n\n//# sourceURL=webpack://static-job-listings-master/./%D0%A1%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D1%8B/main.js?");

/***/ }),

/***/ "./Скрипты/Генерация-html/vacancyGenerateHtml.js":
/*!*******************************************************!*\
  !*** ./Скрипты/Генерация-html/vacancyGenerateHtml.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderVacancyHtml\": () => (/* binding */ renderVacancyHtml)\n/* harmony export */ });\n/* harmony import */ var _classStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Классы/Класс_статусов/classStatus */ \"./Скрипты/Классы/Класс_статусов/classStatus.js\");\n/* harmony import */ var _fillFilterTags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Функции/Конвертация-тегов/fillFilterTags */ \"./Скрипты/Функции/Конвертация-тегов/fillFilterTags.js\");\n/* harmony import */ var _greenLineVacancy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Функции/Зеленая-линия-вакансии/greenLineVacancy */ \"./Скрипты/Функции/Зеленая-линия-вакансии/greenLineVacancy.js\");\n\r\n\r\n\r\n\r\nconst status = new _classStatus__WEBPACK_IMPORTED_MODULE_0__.setStatus();\r\n\r\nfunction renderVacancyHtml(jsonData) {\r\n  let vacancyBlocks = jsonData\r\n    .map((element) => {\r\n      return `\r\n        <div class=\"vacancy vacancy__properties\">\r\n          ${(0,_greenLineVacancy__WEBPACK_IMPORTED_MODULE_2__.greenLineVacancy)(element.featured)}\r\n            <div class=\"vacancy__info\">\r\n                <div class=\"vacancy__info-logo\">\r\n                    <img src=\"${element.logo}\" alt=\"account\" />\r\n                </div>\r\n                <div class=\"vacancy__info-content\">\r\n                    <div class=\"vacancy__info-title\">\r\n                        <span class=\"vacancy__info-company\">${\r\n                          element.company\r\n                        }</span>\r\n                        <div class=\"vacancy__info-status\">\r\n                            ${status.statusNew(element.new)}\r\n                            ${status.statusFeatured(element.featured)}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"vacancy__info-name\">${element.position}</div>\r\n                    <ul class=\"vacancy__info-tags\">\r\n                        <li class=\"vacancy__info-tagsItem\">${\r\n                          element.postedAt\r\n                        }</li>\r\n                        <li class=\"vacancy__info-tagsDot\"></li>\r\n                        <li class=\"vacancy__info-tagsItem\">${\r\n                          element.contract\r\n                        }</li>\r\n                        <li class=\"vacancy__info-tagsDot\"></li>\r\n                        <li class=\"vacancy__info-tagsItem\">${\r\n                          element.location\r\n                        }</li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"vacancy__filters\">\r\n              <ul class=\"vacancy__filters-items\">\r\n                 ${(0,_fillFilterTags__WEBPACK_IMPORTED_MODULE_1__.fillFilterTags)(element)}\r\n              </ul>\r\n            </div>\r\n        </div>\r\n    `;\r\n    })\r\n    .join(\"\");\r\n  return vacancyBlocks;\r\n}\r\n\n\n//# sourceURL=webpack://static-job-listings-master/./%D0%A1%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D1%8B/%D0%93%D0%B5%D0%BD%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F-html/vacancyGenerateHtml.js?");

/***/ }),

/***/ "./Скрипты/Классы/Класс_статусов/classStatus.js":
/*!******************************************************!*\
  !*** ./Скрипты/Классы/Класс_статусов/classStatus.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setStatus\": () => (/* binding */ setStatus)\n/* harmony export */ });\nclass setStatus {\r\n  statusNew(statusNew) {\r\n    if (!statusNew) return ``;\r\n    return `<span class=\"vacancy__info-statusNew\">NEW!</span>`;\r\n  }\r\n\r\n  statusFeatured(statusFeatured) {\r\n    if (!statusFeatured) return ``;\r\n    return `<span class=\"vacancy__info-statusFeatured\">FEATURED</span>`;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://static-job-listings-master/./%D0%A1%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D1%8B/%D0%9A%D0%BB%D0%B0%D1%81%D1%81%D1%8B/%D0%9A%D0%BB%D0%B0%D1%81%D1%81_%D1%81%D1%82%D0%B0%D1%82%D1%83%D1%81%D0%BE%D0%B2/classStatus.js?");

/***/ }),

/***/ "./Скрипты/Классы/Класс_фильтров/setFilters.js":
/*!*****************************************************!*\
  !*** ./Скрипты/Классы/Класс_фильтров/setFilters.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Filters\": () => (/* binding */ Filters)\n/* harmony export */ });\nclass Filters {\r\n  constructor() {\r\n    this.showFilter = document.querySelector(\"#filter\");\r\n    this.clearBtn = document.querySelector(\".main-page__filtersElements-clear\");\r\n    this.showFilterMainBlock = document.querySelector(\r\n      \".main-page__filtersElements_display_default_hide_block\"\r\n    );\r\n    this.vacancyBlocks = document.querySelectorAll(\".vacancy\");\r\n\r\n    this.#searchFilter();\r\n  }\r\n\r\n  #searchFilter() {\r\n    const filters = document.querySelectorAll(\".vacancy__filters-items\");\r\n    const filtersArr = new Set();\r\n\r\n    filters.forEach((element) => {\r\n      element.addEventListener(\"click\", (event) => {\r\n        filtersArr.add(event.target.dataset.id);\r\n        this.#showSettingFilters(filtersArr);\r\n        this.#preRenderHtmlWithFilters(filtersArr);\r\n      });\r\n    });\r\n\r\n    this.#closeSingleFilter(filtersArr);\r\n    this.#clearFilter(filtersArr);\r\n  }\r\n\r\n  #showSettingFilters(filtersArr) {\r\n    this.showFilterMainBlock.style.setProperty(\"display\", \"flex\");\r\n\r\n    if (filtersArr.size === 0) {\r\n      return this.showFilterMainBlock.style.setProperty(\"display\", \"none\");\r\n    }\r\n\r\n    this.showFilter.innerHTML = [...filtersArr]\r\n      .map((element) => {\r\n        return `\r\n        <li class=\"main-page__filtersElements-item\">\r\n        ${element}\r\n        <span class=\"main-page__filtersElements-itemClose\" data-value=\"${element}\"><i class=\"fa-solid fa-xmark\"></i></span>\r\n        </li>\r\n      `;\r\n      })\r\n      .join(\"\");\r\n\r\n    this.#closeSingleFilter(filtersArr);\r\n  }\r\n\r\n  #closeSingleFilter(arr) {\r\n    const closingFilters = document.querySelectorAll(\r\n      \".main-page__filtersElements-itemClose\"\r\n    );\r\n\r\n    closingFilters.forEach((item) => {\r\n      item.addEventListener(\"click\", () => {\r\n        arr.delete(item.getAttribute(\"data-value\"));\r\n        this.#showSettingFilters(arr);\r\n        this.#preRenderHtmlWithFilters(arr);\r\n      });\r\n    });\r\n  }\r\n\r\n  #clearFilter(filtersArr) {\r\n    this.clearBtn.addEventListener(\"click\", () => {\r\n      filtersArr.clear();\r\n      this.showFilter.innerHTML = [...filtersArr];\r\n      this.showFilterMainBlock.style.setProperty(\"display\", \"none\");\r\n\r\n      this.#preRenderHtmlWithFilters(filtersArr);\r\n    });\r\n  }\r\n\r\n  #preRenderHtmlWithFilters(filterArr) {\r\n    const vacancies = Array.from(document.querySelectorAll(\".vacancy\"));\r\n    const filteredVacancies = vacancies.filter((vacancy) => {\r\n      const vacancyTags = Array.from(\r\n        vacancy.querySelectorAll(\".vacancy__filters-items\")\r\n      );\r\n\r\n      for (let el of vacancyTags) {\r\n        return [...filterArr].every((element) =>\r\n          el.textContent.includes(element)\r\n        );\r\n      }\r\n    });\r\n    vacancies.forEach((vacancy) => (vacancy.style.display = \"none\"));\r\n    filteredVacancies.forEach((vacancy) => (vacancy.style.display = \"flex\"));\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://static-job-listings-master/./%D0%A1%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D1%8B/%D0%9A%D0%BB%D0%B0%D1%81%D1%81%D1%8B/%D0%9A%D0%BB%D0%B0%D1%81%D1%81_%D1%84%D0%B8%D0%BB%D1%8C%D1%82%D1%80%D0%BE%D0%B2/setFilters.js?");

/***/ }),

/***/ "./Скрипты/Функции/Зеленая-линия-вакансии/greenLineVacancy.js":
/*!********************************************************************!*\
  !*** ./Скрипты/Функции/Зеленая-линия-вакансии/greenLineVacancy.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"greenLineVacancy\": () => (/* binding */ greenLineVacancy)\n/* harmony export */ });\nfunction greenLineVacancy(featured) {\r\n  if (!featured) return ``;\r\n  return `<div class=\"vacancy__green-line\"></div>`;\r\n}\r\n\n\n//# sourceURL=webpack://static-job-listings-master/./%D0%A1%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D1%8B/%D0%A4%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8/%D0%97%D0%B5%D0%BB%D0%B5%D0%BD%D0%B0%D1%8F-%D0%BB%D0%B8%D0%BD%D0%B8%D1%8F-%D0%B2%D0%B0%D0%BA%D0%B0%D0%BD%D1%81%D0%B8%D0%B8/greenLineVacancy.js?");

/***/ }),

/***/ "./Скрипты/Функции/Конвертация-тегов/fillFilterTags.js":
/*!*************************************************************!*\
  !*** ./Скрипты/Функции/Конвертация-тегов/fillFilterTags.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fillFilterTags\": () => (/* binding */ fillFilterTags)\n/* harmony export */ });\nconst fillFilterTags = (vacancyBlock) => {\r\n  const filterTags = [\r\n    vacancyBlock.role,\r\n    vacancyBlock.level,\r\n    ...vacancyBlock.languages,\r\n    ...vacancyBlock.tools,\r\n  ];\r\n\r\n  return filterTags\r\n    .map((element) => {\r\n      return `\r\n        <li class=\"vacancy__filters-item\" data-id=\"${element}\">${element}</li>\r\n    `;\r\n    })\r\n    .join(\"\");\r\n};\r\n\n\n//# sourceURL=webpack://static-job-listings-master/./%D0%A1%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D1%8B/%D0%A4%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8/%D0%9A%D0%BE%D0%BD%D0%B2%D0%B5%D1%80%D1%82%D0%B0%D1%86%D0%B8%D1%8F-%D1%82%D0%B5%D0%B3%D0%BE%D0%B2/fillFilterTags.js?");

/***/ }),

/***/ "./data.json":
/*!*******************!*\
  !*** ./data.json ***!
  \*******************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"id\":1,\"company\":\"Photosnap\",\"logo\":\"./Скрипты/images/photosnap.svg\",\"new\":true,\"featured\":true,\"position\":\"Senior Frontend Developer\",\"role\":\"Frontend\",\"level\":\"Senior\",\"postedAt\":\"1d ago\",\"contract\":\"Full Time\",\"location\":\"USA Only\",\"languages\":[\"HTML\",\"CSS\",\"JavaScript\"],\"tools\":[]},{\"id\":2,\"company\":\"Manage\",\"logo\":\"./Скрипты/images/manage.svg\",\"new\":true,\"featured\":true,\"position\":\"Fullstack Developer\",\"role\":\"Fullstack\",\"level\":\"Midweight\",\"postedAt\":\"1d ago\",\"contract\":\"Part Time\",\"location\":\"Remote\",\"languages\":[\"Python\"],\"tools\":[\"React\"]},{\"id\":3,\"company\":\"Account\",\"logo\":\"./Скрипты/images/account.svg\",\"new\":true,\"featured\":false,\"position\":\"Junior Frontend Developer\",\"role\":\"Frontend\",\"level\":\"Junior\",\"postedAt\":\"2d ago\",\"contract\":\"Part Time\",\"location\":\"USA Only\",\"languages\":[\"JavaScript\"],\"tools\":[\"React\",\"Sass\"]},{\"id\":4,\"company\":\"MyHome\",\"logo\":\"./Скрипты/images/myhome.svg\",\"new\":false,\"featured\":false,\"position\":\"Junior Frontend Developer\",\"role\":\"Frontend\",\"level\":\"Junior\",\"postedAt\":\"5d ago\",\"contract\":\"Contract\",\"location\":\"USA Only\",\"languages\":[\"CSS\",\"JavaScript\"],\"tools\":[]},{\"id\":5,\"company\":\"Loop Studios\",\"logo\":\"./Скрипты/images/loop-studios.svg\",\"new\":false,\"featured\":false,\"position\":\"Software Engineer\",\"role\":\"Fullstack\",\"level\":\"Midweight\",\"postedAt\":\"1w ago\",\"contract\":\"Full Time\",\"location\":\"Worldwide\",\"languages\":[\"JavaScript\"],\"tools\":[\"Ruby\",\"Sass\"]},{\"id\":6,\"company\":\"FaceIt\",\"logo\":\"./Скрипты/images/faceit.svg\",\"new\":false,\"featured\":false,\"position\":\"Junior Backend Developer\",\"role\":\"Backend\",\"level\":\"Junior\",\"postedAt\":\"2w ago\",\"contract\":\"Full Time\",\"location\":\"UK Only\",\"languages\":[\"Ruby\"],\"tools\":[\"RoR\"]},{\"id\":7,\"company\":\"Shortly\",\"logo\":\"./Скрипты/images/shortly.svg\",\"new\":false,\"featured\":false,\"position\":\"Junior Developer\",\"role\":\"Frontend\",\"level\":\"Junior\",\"postedAt\":\"2w ago\",\"contract\":\"Full Time\",\"location\":\"Worldwide\",\"languages\":[\"HTML\",\"JavaScript\"],\"tools\":[\"Sass\"]},{\"id\":8,\"company\":\"Insure\",\"logo\":\"./Скрипты/images/insure.svg\",\"new\":false,\"featured\":false,\"position\":\"Junior Frontend Developer\",\"role\":\"Frontend\",\"level\":\"Junior\",\"postedAt\":\"2w ago\",\"contract\":\"Full Time\",\"location\":\"USA Only\",\"languages\":[\"JavaScript\"],\"tools\":[\"Vue\",\"Sass\"]},{\"id\":9,\"company\":\"Eyecam Co.\",\"logo\":\"./Скрипты/images/eyecam-co.svg\",\"new\":false,\"featured\":false,\"position\":\"Full Stack Engineer\",\"role\":\"Fullstack\",\"level\":\"Midweight\",\"postedAt\":\"3w ago\",\"contract\":\"Full Time\",\"location\":\"Worldwide\",\"languages\":[\"JavaScript\",\"Python\"],\"tools\":[\"Django\"]},{\"id\":10,\"company\":\"The Air Filter Company\",\"logo\":\"./Скрипты/images/the-air-filter-company.svg\",\"new\":false,\"featured\":false,\"position\":\"Front-end Dev\",\"role\":\"Frontend\",\"level\":\"Junior\",\"postedAt\":\"1mo ago\",\"contract\":\"Part Time\",\"location\":\"Worldwide\",\"languages\":[\"JavaScript\"],\"tools\":[\"React\",\"Sass\"]}]');\n\n//# sourceURL=webpack://static-job-listings-master/./data.json?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./Скрипты/main.js");
/******/ 	
/******/ })()
;
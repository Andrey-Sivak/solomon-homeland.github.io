/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/js/main.js":
/*!************************!*\
  !*** ./app/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ \"./app/js/slider.js\");\n/* harmony import */ var _slider_example_invest_plan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider-example-invest-plan */ \"./app/js/slider-example-invest-plan.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./app/js/menu.js\");\n/* harmony import */ var _mobile_ivest_programms_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobile-ivest-programms.js */ \"./app/js/mobile-ivest-programms.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal */ \"./app/js/modal.js\");\n/* harmony import */ var _to_top_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./to-top-button */ \"./app/js/to-top-button.js\");\n\n\n\n\n\n\nwindow.addEventListener('load', function () {\n  /* mobile menu */\n  (function () {\n    const mobMenu = new _menu_js__WEBPACK_IMPORTED_MODULE_2__[\"MobMenu\"]({\n      btn: 'menu-burger',\n      menuContent: 'header_menu'\n    });\n    mobMenu.init();\n  })();\n  /* to top button */\n\n\n  (function () {\n    const toTopBtn = new _to_top_button__WEBPACK_IMPORTED_MODULE_5__[\"ToTopButton\"]({\n      buttonSelector: '.toTopBtn'\n    });\n    toTopBtn.init();\n  })();\n  /* modal window */\n\n\n  (function () {\n    const modal = new _modal__WEBPACK_IMPORTED_MODULE_4__[\"Modal\"]();\n    let buttons = document.getElementsByClassName('button');\n    buttons = Array.prototype.slice.call(buttons);\n    buttons = buttons.filter(button => {\n      return !button.classList.contains('toTopBtn');\n    });\n\n    for (const btn of buttons) {\n      btn.addEventListener('click', e => {\n        e.preventDefault();\n        modal.init();\n      });\n    }\n  })();\n  /* gallery page show more info about deal */\n\n\n  (function () {\n    const dealsList = document.getElementsByClassName('deal');\n\n    if (!dealsList[0]) {\n      return;\n    }\n\n    const dealsListArr = [];\n\n    for (let i = 0; i < dealsList.length; i++) {\n      dealsListArr.push(dealsList[i]);\n    }\n\n    dealsListArr.forEach(function (item) {\n      item.addEventListener('click', function (e) {\n        e.preventDefault();\n        const showMoreBtn = item.getElementsByClassName('deal_more-btn')[0];\n\n        if (e.target === showMoreBtn) {\n          const showContent = item.getElementsByClassName('deal_more')[0];\n\n          if (showContent.classList.contains('deal_more-active')) {\n            showContent.classList.remove('deal_more-active');\n            showMoreBtn.classList.remove('deal_more-btn-active');\n          } else {\n            showContent.classList.add('deal_more-active');\n            showMoreBtn.classList.add('deal_more-btn-active');\n          }\n        }\n      });\n    });\n  })();\n  /* house sliders */\n\n\n  (function () {\n    const slidersWrap = document.getElementsByClassName('deal_slider-wrap');\n\n    for (let k = 0; k < slidersWrap.length; k++) {\n      const wrapName = `#slider${k + 1}`;\n      const prev = `#prev${k + 1}`;\n      const next = `#next${k + 1}`;\n      const slider = new _slider__WEBPACK_IMPORTED_MODULE_0__[\"Slider\"]({\n        wrap: wrapName,\n        autoplay: false,\n        dots: false,\n        nextArrow: next,\n        prevArrow: prev\n      });\n      slider.init();\n    }\n  })();\n  /* index page. invest programs mobile version */\n\n\n  (function () {\n    const wrap = document.getElementsByClassName('programs')[0];\n\n    if (!wrap) {\n      return;\n    }\n\n    const programs = new _mobile_ivest_programms_js__WEBPACK_IMPORTED_MODULE_3__[\"Programs\"]({\n      items: '.program',\n      className: 'program-active'\n    });\n    programs.init();\n  })();\n  /* business plan page. slider */\n\n\n  (function () {\n    const sliderWrap = document.getElementsByClassName('business-plan-examples')[0];\n\n    if (!sliderWrap) {\n      return;\n    }\n\n    const slider = new _slider_example_invest_plan__WEBPACK_IMPORTED_MODULE_1__[\"SliderInvestPlan\"]({\n      wrap: '.business-plan-examples',\n      autoplay: false,\n      dots: false,\n      nextArrow: '.business-plan-examples_rt-arrow',\n      prevArrow: '.business-plan-examples_lt-arrow'\n    });\n    slider.init();\n  })();\n});\n\n//# sourceURL=webpack:///./app/js/main.js?");

/***/ }),

/***/ "./app/js/menu.js":
/*!************************!*\
  !*** ./app/js/menu.js ***!
  \************************/
/*! exports provided: MobMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MobMenu\", function() { return MobMenu; });\nclass MobMenu {\n  constructor(options) {\n    this.btn = document.getElementById(options.btn);\n    this.menuContent = document.getElementById(options.menuContent);\n  }\n\n  toggleMenu() {\n    const self = this;\n    this.btn.addEventListener('click', function () {\n      this.classList.toggle('active');\n\n      if (this.classList.contains('active')) {\n        self.menuContent.classList.add('header_menu-active');\n      } else {\n        self.menuContent.classList.remove('header_menu-active');\n      }\n    });\n  }\n\n  init() {\n    this.toggleMenu();\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./app/js/menu.js?");

/***/ }),

/***/ "./app/js/mobile-ivest-programms.js":
/*!******************************************!*\
  !*** ./app/js/mobile-ivest-programms.js ***!
  \******************************************/
/*! exports provided: Programs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Programs\", function() { return Programs; });\n\n\nclass Programs {\n  constructor(options) {\n    this.programItems = document.querySelectorAll(options.items);\n    this.activeClassName = options.className;\n    this.programItemsArr = [];\n  }\n\n  createItemsArr() {\n    for (let i = 0; i < this.programItems.length; i++) {\n      this.programItemsArr.push(this.programItems[i]);\n    }\n  }\n\n  switchProgramItems() {\n    const self = this;\n    this.programItemsArr.forEach(function (item) {\n      const target = item.getElementsByClassName('program_caption')[0];\n      target.addEventListener('click', function (e) {\n        if (item.classList.contains(self.activeClassName)) {\n          item.classList.remove(self.activeClassName);\n        } else {\n          item.classList.add(self.activeClassName);\n        }\n      });\n    });\n  }\n\n  init() {\n    this.createItemsArr();\n    this.switchProgramItems();\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./app/js/mobile-ivest-programms.js?");

/***/ }),

/***/ "./app/js/modal.js":
/*!*************************!*\
  !*** ./app/js/modal.js ***!
  \*************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Modal\", function() { return Modal; });\n\n\nclass Modal {\n  constructor(options) {\n    this.modal = 0;\n    this.ANIMATION_SPEED = 350;\n    this.closing = false;\n    this.body = document.body;\n  }\n\n  createModal() {\n    this.modal = document.createElement('div');\n    this.modal.classList.add('modal');\n    this.modal.dataset.close = 'true';\n    this.modal.insertAdjacentHTML('afterBegin', `<div class=\"modal-window\">\n                  <span class=\"modal_close\" id=\"modal-close\" data-close=\"true\">&times;</span>\n                  <div class=\"modal_body\">\n                    <p class=\"modal_caption\">Чтобы заказать звонок, впишите Ваше имя и телефон:</p>\n                    <form action=\"#\" class=\"modal_form\" id=\"modal-form\">\n                      <div class=\"modal_input-wrap\">\n                        <input type=\"text\" id=\"modal-name\" name=\"name\" class=\"modal_name modal_input\" placeholder=\"Ваше имя:\">\n                        <label for=\"modal-name\" class=\"modal_input-label\">Ваше имя:</label>\n                      </div>\n                      <div class=\"modal_input-wrap\">\n                        <input type=\"text\" name=\"phone\" id=\"modal-phone\" class=\"modal_phone modal_input\" placeholder=\"Телефон:*\">\n                        <label for=\"modal-phone\" class=\"modal_input-label\">Телефон:*</label>\n                      </div>\n                      <div class=\"modal_submit-wrap\">\n                        <button type=\"submit\" class=\"callback-buttons_button button modal_btn\">Заказать звонок</button>\n                        <div class=\"modal_checkbox-wrap\">\n                          <label for=\"modal-checkbox\" class=\"modal_checkbox-label\">\n                            <input type=\"checkbox\" name=\"modal-checkbox\" id=\"modal-checkbox\" class=\"modal_checkbox\" checked=\"checked\">\n                            <p>Даю согласие на обработку моих персональных данных и согласен(а) с политикой Конфиденциальности*.</p>\n                          </label>\n                        </div>\n                      </div>\n                    </form> \n                  </div>\n                </div>`);\n    document.body.appendChild(this.modal);\n    return this.modal;\n  }\n\n  sendFormData() {\n    const modalForm = document.getElementById('modal-form');\n    const self = this;\n    modalForm.addEventListener('submit', function (e) {\n      e.preventDefault();\n      const formData = new FormData(this);\n      fetch('../../form.php', {\n        method: 'post',\n        body: formData\n      }).then(response => {\n        return response.text();\n      }).catch(er => {\n        console.log(er);\n      });\n      self.close();\n    });\n  }\n\n  listeners() {\n    this.modal.addEventListener('click', e => {\n      if (e.target.dataset.close) {\n        this.close();\n      }\n    });\n  }\n\n  open() {\n    this.createModal();\n    setTimeout(() => {\n      if (!this.closing) {\n        this.modal.classList.add('open');\n      }\n\n      this.body.classList.add('body-forbiddence-scroll');\n    }, 10);\n    this.listeners();\n  }\n\n  close() {\n    this.closing = true;\n    this.modal.classList.remove('open');\n    this.modal.classList.add('modal-hide');\n    setTimeout(() => {\n      this.modal.classList.remove('modal-hide');\n      this.destroy();\n      this.closing = false;\n    }, this.ANIMATION_SPEED);\n    this.body.classList.remove('body-forbiddence-scroll');\n  }\n\n  destroy() {\n    this.modal.parentNode.removeChild(this.modal);\n    this.modal.removeEventListener('click', e => {\n      if (e.target.dataset.close) {\n        this.close();\n      }\n    });\n  }\n\n  init() {\n    this.open();\n    this.sendFormData();\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./app/js/modal.js?");

/***/ }),

/***/ "./app/js/slider-example-invest-plan.js":
/*!**********************************************!*\
  !*** ./app/js/slider-example-invest-plan.js ***!
  \**********************************************/
/*! exports provided: SliderInvestPlan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SliderInvestPlan\", function() { return SliderInvestPlan; });\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ \"./app/js/slider.js\");\n\n\n\n\nclass SliderInvestPlan extends _slider__WEBPACK_IMPORTED_MODULE_0__[\"Slider\"] {\n  constructor(options) {\n    super(options);\n    this.itemWidth = 0;\n    this.sidesWidth = 0;\n    this.leftOffset = 0;\n    this.offset = 0;\n  }\n\n  prevSlide() {\n    if (!this.isAnimationEnd) {\n      return;\n    }\n\n    this.isAnimationEnd = false;\n    --this.position;\n\n    if (this.position <= 0) {\n      const helpNode = this.selectors.wrap.children[1].cloneNode(true);\n      helpNode.classList.add('help-slider-node');\n\n      if (!this.selectors.wrap.getElementsByClassName('help-slider-node')[0]) {\n        this.selectors.wrap.appendChild(helpNode);\n      }\n    }\n\n    if (this.position < 0) {\n      this.selectors.wrap.classList.add('s-notransition');\n      this.offset = this.itemWidth * this.maxPosition + this.leftOffset;\n      this.selectors.wrap.style['transform'] = `translateX(-${this.offset}px)`;\n      this.position = this.maxPosition - 1;\n    }\n\n    this.offset -= this.itemWidth;\n    setTimeout(() => {\n      this.selectors.wrap.classList.remove('s-notransition');\n      this.selectors.wrap.style['transform'] = `translateX(-${this.offset}px)`;\n    }, 10);\n    this.selectors.wrap.addEventListener('transitionend', () => {\n      this.isAnimationEnd = true;\n    });\n    super.switchDotsList();\n  }\n\n  nextSlide() {\n    if (!this.isAnimationEnd) {\n      return;\n    }\n\n    this.isAnimationEnd = false;\n\n    if (this.position === 0) {\n      this.offset = this.itemWidth + this.leftOffset;\n    } else {\n      this.offset += this.itemWidth;\n    }\n\n    if (this.position < this.maxPosition) {\n      ++this.position;\n    }\n\n    if (this.position === this.maxPosition - 1) {\n      const helpNode = this.selectors.wrap.children[1].cloneNode(true);\n      helpNode.classList.add('help-slider-node');\n\n      if (!this.selectors.wrap.getElementsByClassName('help-slider-node')[0]) {\n        this.selectors.wrap.appendChild(helpNode);\n      }\n    }\n\n    this.selectors.wrap.classList.remove('s-notransition');\n    this.selectors.wrap.style['transform'] = `translateX(-${this.offset}px)`;\n    this.selectors.wrap.addEventListener('transitionend', () => {\n      if (this.position >= this.maxPosition) {\n        this.selectors.wrap.style['transform'] = `translateX(-${this.leftOffset}px)`;\n        this.selectors.wrap.classList.add('s-notransition');\n        this.position = 0;\n      }\n\n      this.isAnimationEnd = true;\n    });\n  }\n\n  itemPosition() {\n    this.itemWidth = this.selectors.slides[1].clientWidth;\n    this.sidesWidth = (this.selectors.wrap.parentElement.clientWidth - this.itemWidth) / 2;\n    this.leftOffset = this.itemWidth - this.sidesWidth;\n    this.selectors.wrap.style.transform = `translateX(-${this.leftOffset}px)`;\n  }\n\n  build() {\n    super.build();\n    window.addEventListener('resize', e => {\n      this.itemPosition();\n    });\n  }\n\n  init() {\n    this.itemPosition();\n    super.init();\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./app/js/slider-example-invest-plan.js?");

/***/ }),

/***/ "./app/js/slider.js":
/*!**************************!*\
  !*** ./app/js/slider.js ***!
  \**************************/
/*! exports provided: Slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Slider\", function() { return Slider; });\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer */ \"./app/js/timer.js\");\n\n\n\n\nclass Slider {\n  constructor(options) {\n    this.isAnimationEnd = true;\n    this.selectors = {\n      wrap: document.querySelector(options.wrap),\n      slides: document.querySelector(options.wrap).children,\n      prevArrow: document.querySelector(options.prevArrow),\n      nextArrow: document.querySelector(options.nextArrow),\n      dotsWrap: document.getElementById('dots')\n    };\n    this.default = {\n      'autoplay': true,\n      'autoplayDelay': 3000,\n      'touch': true,\n      'pauseOnFocus': true,\n      'pauseOnHover': true,\n      'dots': false\n    };\n    this.settings = Object.assign(this.default, options);\n    this.position = 0;\n    this.maxPosition = this.selectors.slides.length;\n    this.timer;\n    this.nextSlide = this.nextSlide.bind(this);\n    this.startTouchPosition = this.startTouchPosition.bind(this);\n    this.touchMoveTo = this.touchMoveTo.bind(this);\n    this.touchCoordinates = {\n      'xDown': 0,\n      'yDown': 0,\n      'xUp': 0,\n      'yUp': 0,\n      'xDiff': 0,\n      'yDiff': 0\n    };\n  }\n\n  prevSlide() {\n    if (!this.isAnimationEnd) {\n      return;\n    }\n\n    this.isAnimationEnd = false;\n    --this.position;\n\n    if (this.position < 0) {\n      this.selectors.wrap.classList.add('s-notransition');\n      this.selectors.wrap.style['transform'] = `translateX(-${this.maxPosition}00%)`;\n      this.position = this.maxPosition - 1;\n    }\n\n    setTimeout(() => {\n      this.selectors.wrap.classList.remove('s-notransition');\n      this.selectors.wrap.style['transform'] = `translateX(-${this.position}00%)`;\n    }, 10);\n    this.selectors.wrap.addEventListener('transitionend', () => {\n      this.isAnimationEnd = true;\n    });\n    this.switchDotsList();\n  }\n\n  nextSlide() {\n    if (!this.isAnimationEnd) {\n      return;\n    }\n\n    this.isAnimationEnd = false;\n\n    if (this.position < this.maxPosition) {\n      ++this.position;\n    }\n\n    this.selectors.wrap.classList.remove('s-notransition');\n    this.selectors.wrap.style['transform'] = `translateX(-${this.position}00%)`;\n    this.selectors.wrap.addEventListener('transitionend', () => {\n      if (this.position >= this.maxPosition) {\n        this.selectors.wrap.style['transform'] = 'translateX(0)';\n        this.selectors.wrap.classList.add('s-notransition');\n        this.position = 0;\n      }\n\n      this.isAnimationEnd = true;\n    });\n    this.switchDotsList();\n  }\n\n  startTouchPosition(e) {\n    this.touchCoordinates['xDown'] = e.touches[0].clientX;\n    this.touchCoordinates['yDown'] = e.touches[0].clientY;\n  }\n\n  touchMoveTo(e) {\n    if (!this.touchCoordinates['xDown'] || !this.touchCoordinates['yDown']) {\n      return;\n    }\n\n    this.touchCoordinates['xUp'] = e.touches[0].clientX;\n    this.touchCoordinates['yUp'] = e.touches[0].clientY;\n    this.touchCoordinates['xDiff'] = this.touchCoordinates['xDown'] - this.touchCoordinates['xUp'];\n    this.touchCoordinates['yDiff'] = this.touchCoordinates['yDown'] - this.touchCoordinates['yUp'];\n\n    if (Math.abs(this.touchCoordinates['xDiff']) > Math.abs(this.touchCoordinates['yDiff'])) {\n      if (this.touchCoordinates['xDiff'] > 0) {\n        this.nextSlide();\n      } else {\n        this.prevSlide();\n      }\n    }\n\n    this.touchCoordinates['xDown'] = 0;\n    this.touchCoordinates['yDown'] = 0;\n  } // create switch arrows\n\n\n  createArrows() {\n    if (!this.selectors.prevArrow || !this.selectors.nextArrow) {\n      const prevArr = document.createElement('a');\n      prevArr.className = 'prev';\n      prevArr.setAttribute('id', 'prev');\n      prevArr.innerHTML = '&#10094;';\n      this.selectors.prevArrow = prevArr;\n      const nextArr = document.createElement('a');\n      nextArr.className = 'next';\n      nextArr.setAttribute('id', 'next');\n      nextArr.innerHTML = '&#10095;';\n      this.selectors.nextArrow = nextArr;\n      this.selectors.wrap.append(this.selectors.nextArrow, this.selectors.prevArrow);\n    }\n  }\n\n  showSwitchDots() {\n    if (this.settings.dots) {\n      for (let i = 0, len = this.selectors.wrap.children.length; i < len; i++) {\n        const dot = document.createElement('span');\n        dot.className = 'dot';\n        dot.dataset.number = i;\n        this.selectors.dotsWrap.appendChild(dot);\n        dot.addEventListener('click', () => {\n          if (i > this.position) {\n            let j = i;\n\n            while (j > this.position) {\n              this.position = j - 1;\n              this.nextSlide();\n              j--;\n            }\n          }\n\n          if (i < this.position) {\n            let j = i;\n\n            while (j < this.position) {\n              this.position = j + 1;\n              this.prevSlide();\n              j++;\n            }\n          }\n        });\n      }\n    }\n  }\n\n  addDataAttributeToSlides() {\n    for (let i = 0, len = this.selectors.wrap.children.length; i < len; i++) {\n      this.selectors.wrap.children[i].dataset.slide = i;\n    }\n\n    this.switchDotsList();\n  }\n\n  switchDotsList() {\n    if (!this.settings.dots) {\n      return;\n    }\n\n    for (let i = 0, len = this.selectors.dotsWrap.children.length; i < len; i++) {\n      if (this.selectors.dotsWrap.children[i].dataset !== this.position) {\n        this.selectors.dotsWrap.children[i].classList.remove('active');\n      }\n    }\n\n    if (this.position >= this.maxPosition) {\n      this.selectors.dotsWrap.children[0].classList.add('active');\n    } else {\n      this.selectors.dotsWrap.children[this.position].classList.add('active');\n    }\n  }\n\n  build() {\n    if (this.settings.autoplay === true) {\n      this.timer = new _timer__WEBPACK_IMPORTED_MODULE_0__[\"Timer\"](this.nextSlide, this.settings.autoplayDelay);\n      this.timer.begin();\n    }\n\n    this.selectors.prevArrow.addEventListener('click', e => {\n      e.preventDefault();\n      this.prevSlide();\n    });\n    this.selectors.nextArrow.addEventListener('click', e => {\n      e.preventDefault();\n      this.nextSlide();\n    });\n\n    if (this.settings.autoplay && this.settings.pauseOnHover) {\n      this.selectors.wrap.addEventListener('mouseenter', () => {\n        this.timer.pause();\n      });\n      this.selectors.wrap.addEventListener('mouseleave', () => {\n        this.timer.become();\n      });\n    }\n\n    if (this.settings.touch) {\n      this.selectors.wrap.addEventListener('touchstart', this.startTouchPosition, false);\n      this.selectors.wrap.addEventListener('touchmove', this.touchMoveTo, false);\n    }\n  }\n\n  init() {\n    this.showSwitchDots();\n    this.addDataAttributeToSlides();\n    this.selectors.wrap.appendChild(this.selectors.wrap.children[0].cloneNode(true));\n    this.build();\n    this.createArrows();\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./app/js/slider.js?");

/***/ }),

/***/ "./app/js/timer.js":
/*!*************************!*\
  !*** ./app/js/timer.js ***!
  \*************************/
/*! exports provided: Timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Timer\", function() { return Timer; });\n\n\nclass Timer {\n  constructor(callback, delay) {\n    this.timerId;\n    this.start;\n    this.callback = callback;\n    this.delay = delay;\n    this.remaining = this.delay;\n    this.resume = this.resume.bind(this);\n    this.pause = this.pause.bind(this);\n    this.become = this.become.bind(this);\n    this.begin = this.begin.bind(this);\n  }\n\n  resume() {\n    this.start = new Date();\n    this.timerId = setTimeout(() => {\n      this.resume();\n      this.callback();\n    }, this.remaining);\n  }\n\n  pause() {\n    clearTimeout(this.timerId);\n    this.remaining -= new Date() - this.start;\n  }\n\n  become() {\n    clearTimeout(this.timerId);\n    this.remaining = this.delay;\n    this.resume();\n  }\n\n  begin() {\n    this.resume();\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./app/js/timer.js?");

/***/ }),

/***/ "./app/js/to-top-button.js":
/*!*********************************!*\
  !*** ./app/js/to-top-button.js ***!
  \*********************************/
/*! exports provided: ToTopButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToTopButton\", function() { return ToTopButton; });\n\n\nclass ToTopButton {\n  constructor(options) {\n    this.scroll = document.documentElement.scrollTop;\n    this.SCROLL_TO_SHOW_BTN = 300;\n    this.btn = document.querySelector(options.buttonSelector);\n  }\n\n  showBtn() {\n    window.addEventListener('scroll', e => {\n      this.scroll = document.documentElement.scrollTop;\n\n      if (this.scroll >= this.SCROLL_TO_SHOW_BTN) {\n        this.btn.classList.add('show');\n      }\n\n      if (this.scroll <= this.SCROLL_TO_SHOW_BTN) {\n        this.btn.classList.remove('show');\n      }\n    });\n  }\n\n  toTop() {\n    this.btn.addEventListener('click', e => {\n      e.preventDefault();\n      window.scrollTo({\n        top: 0,\n        behavior: 'smooth'\n      });\n    });\n  }\n\n  init() {\n    this.showBtn();\n    this.toTop();\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./app/js/to-top-button.js?");

/***/ })

/******/ });
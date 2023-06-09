/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/data-controls":
/*!**************************************!*\
  !*** external ["wp","dataControls"] ***!
  \**************************************/
/***/ (function(module) {

module.exports = window["wp"]["dataControls"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data-controls */ "@wordpress/data-controls");
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);







(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("invizo-woo-products/products", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Invizo Products List", "invizo-woo-products"),
  icon: "products",
  category: "widgets",
  attributes: {
    numProducts: {
      type: "number",
      default: 5
    },
    itemsPerRow: {
      type: "string",
      default: "3"
    },
    sortOrder: {
      type: "string",
      default: "asc"
    },
    sortType: {
      type: "string",
      default: "price"
    }
  },
  edit: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.withSelect)((select, props) => {
    const {
      sortOrder,
      numProducts,
      itemsPerRow,
      sortType
    } = props.attributes;
    return {
      products: select("core").getEntityRecords("postType", "product", {
        per_page: numProducts,
        orderby: "price",
        // price is not a valid params
        order: sortOrder,
        items_per_row: itemsPerRow,
        _embed: true,
        image: true
      })
    };
  })(_ref => {
    let {
      products,
      attributes,
      setAttributes
    } = _ref;
    const {
      sortOrder,
      numProducts,
      itemsPerRow,
      sortType
    } = attributes;
    if (!products) {
      return "Loading products...";
    }
    if (products.length === 0) {
      return "No products found.";
    }
    const options = [{
      value: "asc",
      label: "ASC"
    }, {
      value: "desc",
      label: "DESC"
    }];
    const perRowOptions = [{
      value: "1",
      label: "One Item"
    }, {
      value: "2",
      label: "Two Items"
    }, {
      value: "3",
      label: "Three Items"
    }, {
      value: "4",
      label: "Four Items"
    }];
    const sortTypeOptions = [{
      value: "price",
      label: "Price"
    }, {
      value: "title",
      label: "Title"
    }];
    return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: "editor",
      className: "invizo-woo-products-sort-row"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "invizo-heading"
    }, "Products List"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: "editor",
      className: "invizo-woo-products-sort-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: "Items Per Row",
      value: itemsPerRow,
      options: perRowOptions,
      onChange: value => setAttributes({
        itemsPerRow: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: "Sort order",
      value: sortOrder,
      options: options,
      onChange: value => setAttributes({
        sortOrder: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: "Sort type",
      value: sortType,
      options: sortTypeOptions,
      onChange: value => setAttributes({
        sortType: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: "Number of products",
      value: numProducts,
      options: [{
        value: 5,
        label: "5"
      }, {
        value: 10,
        label: "10"
      }, {
        value: 20,
        label: "20"
      }, {
        value: 50,
        label: "50"
      }],
      onChange: value => setAttributes({
        numProducts: parseInt(value)
      })
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      key: "products",
      className: `products invizo-lists invizo-column-${itemsPerRow}`
    }, products.map(product => {
      const imageSize = "medium";
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
        key: product.id,
        className: "product invizo-list-item"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        href: product.link
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: product.featured_media ? product._embedded["wp:featuredmedia"][0].media_details.sizes[imageSize].source_url : "placeholder-image-url",
        alt: product.name
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        href: product.link
      }, product.name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, product.title.rendered), product.price && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "invizo-price"
      }, product.on_sale ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: "product-price product-price--sale"
      }, product.sale_price), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: "product-price product-price--regular"
      }, product.regular_price)) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, product.price)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        className: "button button-primary",
        href: `/shop?add-to-cart=${product.id}`
      }, "Add to Cart"));
    }))];
  }),
  save: () => null
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map
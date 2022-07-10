(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JG": () => (/* binding */ siteDescription),
/* harmony export */   "aD": () => (/* binding */ siteName),
/* harmony export */   "or": () => (/* binding */ siteUrl)
/* harmony export */ });
const siteName = "Solutions Checker";
const siteDescription = "Find solution for coding, HTML, CSS, JAVASCRIPT, MYSQL, PHP, PYTHON,... quickly.";
const siteUrl = "https://solutionschecker.com";


/***/ }),

/***/ 6350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/highlight.js/styles/vs2015.css
var vs2015 = __webpack_require__(8046);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(6641);
// EXTERNAL MODULE: ./constants/seo.js
var seo = __webpack_require__(1040);
;// CONCATENATED MODULE: ./seo.config.js

const SEOConfig = {
    titleTemplate: `%s | ${seo/* siteName */.aD}`,
    defaultTile: seo/* siteName */.aD,
    description: seo/* siteDescription */.JG,
    openGraph: {
        type: "website",
        url: "https://solutionschecker.com",
        siteName: seo/* siteName */.aD
    },
    twitter: {
        handle: "@solutionschecker.com",
        site: "@solutionschecker.com",
        cardType: "summary_large_image"
    }
};
/* harmony default export */ const seo_config = (SEOConfig);

;// CONCATENATED MODULE: ./pages/_app.js







// import GlobalStyle from '../components/Utils/globalstyles'
const theme = {
    colors: {
        primary: "#111",
        secondary: "#0070f3"
    }
};
function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_styled_components_.ThemeProvider, {
            theme: theme,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_.DefaultSeo, {
                    ...seo_config
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            ]
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 8046:
/***/ (() => {



/***/ }),

/***/ 6641:
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6350));
module.exports = __webpack_exports__;

})();
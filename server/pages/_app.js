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
/* harmony export */   "Ym": () => (/* binding */ siteKeyword),
/* harmony export */   "aD": () => (/* binding */ siteName),
/* harmony export */   "j1": () => (/* binding */ logoPath),
/* harmony export */   "or": () => (/* binding */ siteUrl)
/* harmony export */ });
/* unused harmony export siteHostName */
const siteName = "Solution Checker";
const siteDescription = "Find the solution to any question. We focus on finding the fastest possible solution for users. Main topics like coding, learning.";
const siteUrl = "https://solutionschecker.com";
const logoPath = "/logo-second.png";
const siteKeyword = "solutions checker, solution checker, how to, solution for, check for solution, resolve question, what is, what solution for, find solution";
const siteHostName = "solutionschecker.com";


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
        siteName: seo/* siteName */.aD,
        images: [
            {
                url: `${seo/* siteUrl */.or}/solutions-checker-banner.png`,
                alt: `${seo/* siteDescription */.JG} - solutionschecker.com`
            }, 
        ]
    },
    twitter: {
        handle: "@solutionschecker.com",
        site: "@solutionschecker.com",
        cardType: "summary_large_image"
    }
};
/* harmony default export */ const seo_config = (SEOConfig);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./pages/_app.js








// import GlobalStyle from '../components/Utils/globalstyles'
function MyApp({ Component , pageProps  }) {
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        if (document && window) {
            document.querySelectorAll("a").forEach((el)=>{
                if (el.href.indexOf(seo/* siteUrl */.or) < 0) {
                    el.rel = "nofollow noreferrer";
                    el.target = "__blank";
                }
            });
        }
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (document && window) {
            document.querySelectorAll("a").forEach((el)=>{
                if (el.href.indexOf(seo/* siteUrl */.or) < 0) {
                    el.rel = "nofollow noreferrer";
                    el.target = "__blank";
                }
            });
        }
    }, [
        router.pathname
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_.DefaultSeo, {
                canonical: router.pathName,
                ...seo_config
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
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

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

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
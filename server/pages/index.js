(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
// EXTERNAL MODULE: ./lib/api/requester.js
var requester = __webpack_require__(1408);
;// CONCATENATED MODULE: external "showdown"
const external_showdown_namespaceObject = require("showdown");
var external_showdown_default = /*#__PURE__*/__webpack_require__.n(external_showdown_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./node_modules/highlight.js/styles/vs2015.css
var vs2015 = __webpack_require__(8046);
// EXTERNAL MODULE: ./components/Utils/sharedstyles.js
var sharedstyles = __webpack_require__(4379);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "html-entities"
var external_html_entities_ = __webpack_require__(9816);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/Layout/index.js + 1 modules
var Layout = __webpack_require__(2724);
// EXTERNAL MODULE: external "react-topbar-progress-indicator"
var external_react_topbar_progress_indicator_ = __webpack_require__(7521);
var external_react_topbar_progress_indicator_default = /*#__PURE__*/__webpack_require__.n(external_react_topbar_progress_indicator_);
;// CONCATENATED MODULE: ./pages/index.js













const converter = new (external_showdown_default()).Converter();
const HomePageStyles = external_styled_components_default().div.withConfig({
    componentId: "sc-730e21cb-0"
})`

 

  pre{
    overflow: auto;
  }

`;
function Home({ data , page  }) {
    var ref;
    const { 0: isRender , 1: setIsRender  } = (0,external_react_.useState)(false);
    const { 0: answerPreviewWidth , 1: setAnswerPreviewWidth  } = (0,external_react_.useState)("869.25");
    const { 0: answerPreviewHeight , 1: setAnswerPreviewHeight  } = (0,external_react_.useState)(100);
    const router = (0,router_.useRouter)();
    const query = router.query;
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "inner-content",
            children: [
                data && page <= 1 ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: `pagination-buttons previous bg-stone-500 cursor-not-allowed  hover:bg-stone-500 text-white font-bold py-2 px-4 rounded`,
                    children: "Previous"
                }) : /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: `/questions?page=${page - 1}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: `pagination-buttons previous bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`,
                        children: "Previous"
                    })
                }),
                data ? (ref = data.rows) === null || ref === void 0 ? void 0 : ref.map(({ slug , title , tags , answer  }, index)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(sharedstyles/* QuestionStyled */.$, {
                            className: "question my-5",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex items-center justify-center",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "rounded-xl border p-5 shadow-md w-9/12 bg-white",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex w-full items-center justify-between border-b pb-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "flex items-center space-x-3",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "text-lg font-bold text-slate-700",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: `/questions/${slug}`,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: title
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "flex flex-wrap h-auto justify-end items-center space-x-8",
                                                    children: tags.map((el, index)=>{
                                                        return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: `/questions/tag/${el.slug}`,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "rounded-2xl border bg-neutral-100 px-3 py-1 text-sm font-semibold",
                                                                children: el.name
                                                            })
                                                        }, index);
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "mt-4 mb-6",
                                            style: {
                                                height: 100,
                                                overflow: "auto"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    className: "font-semibold",
                                                    children: "Solution 1:"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "text-sm bg-green-100 text-neutral-600",
                                                    dangerouslySetInnerHTML: {
                                                        __html: (0,external_html_entities_.decode)(answer[0])
                                                    }
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "flex items-center justify-between text-slate-500",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "flex space-x-4 md:space-x-8",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "flex cursor-pointer items-center transition hover:text-slate-600",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                className: "mr-1.5 h-5 w-5",
                                                                fill: "none",
                                                                viewBox: "0 0 24 24",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    d: "M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: "4"
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        }, index)
                    });
                }) : /*#__PURE__*/ jsx_runtime_.jsx((external_react_topbar_progress_indicator_default()), {}),
                data && page * 10 - data.count >= 0 ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: `pagination-buttons next bg-stone-500 cursor-not-allowed  hover:bg-stone-500 text-white font-bold py-2 px-4 rounded`,
                    children: "Next"
                }) : /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: `/questions?page=${page + 1}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: `pagination-buttons next bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`,
                        children: "Next"
                    })
                })
            ]
        })
    });
};
const getStaticProps = async (ctx)=>{
    var ref;
    let page = 1;
    if (ctx === null || ctx === void 0 ? void 0 : (ref = ctx.query) === null || ref === void 0 ? void 0 : ref.page) {
        page = Number(ctx.query.page);
    }
    const queryParms = new URLSearchParams("");
    queryParms.append("page", page);
    const data = await requester/* default.getSync */.ZP.getSync(`/questions?${queryParms.toString()}`);
    return {
        props: {
            data: data,
            page: page
        }
    };
};


/***/ }),

/***/ 8046:
/***/ (() => {



/***/ }),

/***/ 9816:
/***/ ((module) => {

"use strict";
module.exports = require("html-entities");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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

/***/ 7521:
/***/ ((module) => {

"use strict";
module.exports = require("react-topbar-progress-indicator");

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
var __webpack_exports__ = __webpack_require__.X(0, [952,664,408,394], () => (__webpack_exec__(5798)));
module.exports = __webpack_exports__;

})();
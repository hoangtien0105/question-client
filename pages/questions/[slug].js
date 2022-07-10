"use strict";
(() => {
var exports = {};
exports.id = 159;
exports.ids = [159];
exports.modules = {

/***/ 9713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports getOptions, getOptionsAsync, arrayChunks, debounce, thousandify, useWindowDimensions */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
const getOptions = (data)=>data.map(({ id , code , hospitalName , branchId , name  })=>({
            value: String(id) || code || branchId,
            text: name || hospitalName
        }));
const getOptionsAsync = async (promise)=>{
    try {
        const response = await promise;
        const data = await response.json();
        return getOptions(data.docs || data);
    } catch  {
        return [];
    }
};
const arrayChunks = (array, chunk_size)=>Array(Math.ceil(array.length / chunk_size)).fill().map((_, index)=>index * chunk_size).map((begin)=>array.slice(begin, begin + chunk_size));
const debounce = (func, wait)=>{
    let timeout;
    return function(...args) {
        const context = this;
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(()=>{
            timeout = null;
            func.apply(context, args);
        }, wait);
    };
};
const thousandify = (number, separator = ".")=>{
    if (!number && number !== 0) return;
    return number === null || number === void 0 ? void 0 : number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
};

function getWindowDimensions() {
    const { innerWidth: width , innerHeight: height  } = window;
    return {
        width,
        height
    };
}
function useWindowDimensions() {
    const { 0: windowDimensions , 1: setWindowDimensions  } = useState(getWindowDimensions());
    useEffect(()=>{
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener("resize", handleResize);
        return ()=>window.removeEventListener("resize", handleResize);
    }, []);
    return windowDimensions;
}


/***/ }),

/***/ 2081:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuestionPost),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2724);
/* harmony import */ var components_Utils_sharedstyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4379);
/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9816);
/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html_entities__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lib_api_requester__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1408);
/* harmony import */ var lib_hook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9040);
/* harmony import */ var lib_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9713);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4417);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_topbar_progress_indicator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7521);
/* harmony import */ var react_topbar_progress_indicator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_topbar_progress_indicator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9755);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_hook__WEBPACK_IMPORTED_MODULE_5__]);
lib_hook__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














const QuestionHeader = styled_components__WEBPACK_IMPORTED_MODULE_13___default().div.withConfig({
    componentId: "sc-c4b0431a-0"
})`
  code{
    padding: 5px;
    color: hsl(210deg 8% 15%);
    background-color: hsl(210deg 8% 90%);
    border-radius: 3px;
  }
`;
const Comment = styled_components__WEBPACK_IMPORTED_MODULE_13___default()(react_spring__WEBPACK_IMPORTED_MODULE_10__.animated.div).withConfig({
    componentId: "sc-c4b0431a-1"
})`
   .comment-item{
    .comment-body{
      .d-inline-flex.ai-center{
        text-align: right;
      }
      .comment-date{
        float: right;
      }
    }
   }
`;
const Solution = styled_components__WEBPACK_IMPORTED_MODULE_13___default().div.withConfig({
    componentId: "sc-c4b0431a-2"
})`
    

`;
function QuestionPost({ data  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const [commentStyles, api] = (0,react_spring__WEBPACK_IMPORTED_MODULE_10__.useSpring)(()=>({
            config: {
                frequency: 200
            }
        }));
    const { 0: isShowMoreComment , 1: setIsShowMoreComment  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: data ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Utils_sharedstyles__WEBPACK_IMPORTED_MODULE_2__/* .QuestionStyled */ .$, {
            className: "question my-5",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(QuestionHeader, {
                    className: "flex question-header items-center justify-center",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "rounded-xl border p-5 shadow-md w-9/12 bg-white",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex w-full items-center justify-between border-b pb-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex items-center space-x-3",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-lg font-bold text-slate-700",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                href: `/questions/${data.slug}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    children: data.title
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex flex-wrap h-auto justify-end items-center space-x-8",
                                        children: data.tags.map((el, index)=>{
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                href: `/questions/tag/${el.slug}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "rounded-2xl border bg-neutral-100 px-3 py-1 text-sm font-semibold",
                                                    children: el.name
                                                })
                                            }, index);
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "question-content mt-5",
                                dangerouslySetInnerHTML: {
                                    __html: (0,html_entities__WEBPACK_IMPORTED_MODULE_3__.decode)(data.content)
                                }
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Solution, {
                    children: data.answer.map((ans, index)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex mt-5 answer items-center justify-center py-5",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "rounded-xl border p-10 shadow-md w-9/12 bg-white",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                        className: "text-4xl font-semibold mb-5",
                                        children: `Solution ${index + 1}`
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: " items-center justify-between",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: " space-x-4 md:space-x-8",
                                            dangerouslySetInnerHTML: {
                                                __html: (0,html_entities__WEBPACK_IMPORTED_MODULE_3__.decode)(ans)
                                            }
                                        })
                                    })
                                ]
                            })
                        }, index);
                    })
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_topbar_progress_indicator__WEBPACK_IMPORTED_MODULE_11___default()), {})
    });
};
const getStaticProps = async (ctx)=>{
    try {
        const post = await lib_api_requester__WEBPACK_IMPORTED_MODULE_4__/* ["default"].getSync */ .ZP.getSync(`/questions/${ctx.params.slug}`);
        if (!post) {
            return {
                notFound: true
            };
        }
        return {
            props: {
                data: post
            },
            revalidate: 10
        };
    } catch (err) {
        return {
            props: {},
            revalidate: 10
        };
    }
};
async function getStaticPaths() {
    const allQuestions = await lib_api_requester__WEBPACK_IMPORTED_MODULE_4__/* ["default"].getSync */ .ZP.getSync(`/getallquestionsforseo`);
    const paths = allQuestions.map((question)=>{
        return {
            params: {
                slug: question.slug
            }
        };
    });
    return {
        paths,
        fallback: true
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9816:
/***/ ((module) => {

module.exports = require("html-entities");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 4417:
/***/ ((module) => {

module.exports = require("react-spring");

/***/ }),

/***/ 7521:
/***/ ((module) => {

module.exports = require("react-topbar-progress-indicator");

/***/ }),

/***/ 9755:
/***/ ((module) => {

module.exports = require("react-use");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,408,394,40], () => (__webpack_exec__(2081)));
module.exports = __webpack_exports__;

})();
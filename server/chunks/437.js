exports.id = 437;
exports.ids = [437];
exports.modules = {

/***/ 3437:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PostLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_api_requester__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1408);
/* harmony import */ var showdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5165);
/* harmony import */ var showdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(showdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var highlight_js_styles_vs2015_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8046);
/* harmony import */ var highlight_js_styles_vs2015_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(highlight_js_styles_vs2015_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_Common_SolutionPopup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7953);
/* harmony import */ var _TagsSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1304);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Common_SolutionPopup__WEBPACK_IMPORTED_MODULE_8__]);
components_Common_SolutionPopup__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const converter = new (showdown__WEBPACK_IMPORTED_MODULE_3___default().Converter)();
function PostLayout({ slug , title , tags , answers  }) {
    const { 0: isShowSolution , 1: setIsShowSolution  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "question my-5",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex items-center justify-center",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "rounded-xl border p-5 shadow-md post-layout-inner bg-white",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex w-full items-center justify-between border-b pb-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex items-center space-x-3",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-lg font-bold text-slate-700",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            href: `/questions/${slug}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                children: title
                                            })
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "tags-wrap h-max space-x-8",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TagsSection__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    data: tags
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex items-center justify-between text-slate-500",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex space-x-4 md:space-x-8",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            onClick: ()=>{
                                                setIsShowSolution(true);
                                            },
                                            className: `btn bg-stone-500 cursor-pointer  hover:bg-stone-500 text-white font-bold py-2 px-4 rounded`,
                                            children: "Show Solution"
                                        })
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            isShowSolution && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Common_SolutionPopup__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                tags: tags,
                onClose: ()=>{
                    setIsShowSolution(false);
                },
                answers: answers
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7953:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SolutionPopup)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9040);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SolutionSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3090);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_hook__WEBPACK_IMPORTED_MODULE_2__]);
lib_hook__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function SolutionPopup({ answers , onClose , tags  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Modal, {
        footer: null,
        width: "90%",
        visible: true,
        onCancel: onClose,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative bg-white rounded-lg shadow dark:bg-gray-700",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "text-xl font-medium text-gray-900 dark:text-white",
                        children: "Solution"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "p-1 md:p-6 space-y-6",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SolutionSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        keywords: tags,
                        answers: answers
                    })
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8046:
/***/ (() => {



/***/ })

};
;
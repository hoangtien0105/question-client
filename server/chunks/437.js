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

/***/ 9040:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony exports useSlideResponsive, useMergeState, useQuestions, useQuestionsByTag, usePagination, useAnswerByQuestionId */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5941);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_requester__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1408);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);
swr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const MEDIA = {
    LG: "LG",
    MD: "MD",
    SM: "SM"
};
const safeNumberSlides = (expectNumber, images)=>expectNumber <= images.length ? expectNumber : images.length;
const useSlideResponsive = (images = [], md = 762, sm = 600)=>{
    const imageLength = images.length;
    const mediaRef = useRef();
    const { 0: settings , 1: setSettings  } = useState({
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: safeNumberSlides(3, images),
        slidesToScroll: safeNumberSlides(3, images)
    });
    const setLg = ()=>{
        mediaRef.current = MEDIA.LG;
        imageLength >= 3 && setSettings((currentSetting)=>({
                ...currentSetting,
                slidesToShow: safeNumberSlides(3, images),
                slidesToScroll: safeNumberSlides(3, images)
            }));
    };
    const setMd = ()=>{
        mediaRef.current = MEDIA.MD;
        imageLength >= 3 && setSettings((currentSetting)=>({
                ...currentSetting,
                slidesToShow: safeNumberSlides(2, images),
                slidesToScroll: safeNumberSlides(2, images)
            }));
    };
    const setSm = ()=>{
        mediaRef.current = MEDIA.SM;
        imageLength >= 2 && setSettings((currentSetting)=>({
                ...currentSetting,
                slidesToShow: 1,
                slidesToScroll: 1
            }));
    };
    useEffect(()=>{
        const mediaQueryMd = window.matchMedia(`(max-width: ${md}px)`);
        const onMdChange = (e)=>{
            if (e.matches) {
                setMd();
            } else {
                setLg();
            }
        };
        mediaQueryMd.addListener(onMdChange);
        onMdChange(mediaQueryMd);
        const mediaQuerySm = window.matchMedia(`(max-width: ${sm}px)`);
        const onSmChange = (e)=>{
            if (e.matches) {
                setSm();
            } else {
                mediaRef.current === MEDIA.MD ? setMd() : setLg();
            }
        };
        mediaQuerySm.addListener(onSmChange);
        onSmChange(mediaQuerySm);
        return ()=>{
            mediaQueryMd.removeListener(onMdChange);
            mediaQuerySm.removeListener(onSmChange);
        };
    }, []);
    const shouldShowNavigation = mediaRef.current === MEDIA.LG && imageLength > 3 || mediaRef.current === MEDIA.MD && imageLength > 2 || mediaRef.current === MEDIA.SM && imageLength > 1;
    return [
        settings,
        shouldShowNavigation
    ];
};
/**
 *
 * @param {*} queries
 * const queries = {
 *    xs: '(max-width: 320px)',
 *    md: '(max-width: 720px)',
 *    lg: '(max-width: 1024px)',
 * }
 * @returns
 */ const useMergeState = (initialState)=>{
    const { 0: state , 1: setState  } = useState(initialState);
    const setMergedState = (newState)=>setState((prevState)=>({
                ...prevState,
                ...newState
            }));
    return [
        state,
        setMergedState
    ];
};
const fetcher = (...args)=>fetch(...args).then((res)=>res.json());
const swrConfig = {
    revalidateOnFocus: false
};
const useQuestions = (query)=>{
    const queryParms = new URLSearchParams("");
    if (query === null || query === void 0 ? void 0 : query.page) {
        queryParms.append("page", query === null || query === void 0 ? void 0 : query.page);
    }
    const { data , error  } = useSWR(`${getBaseURL()}/questions?${queryParms.toString()}`, fetcher);
    return {
        data,
        error
    };
};
const useQuestionsByTag = (tag, query)=>{
    const queryParms = new URLSearchParams("");
    if ((query === null || query === void 0 ? void 0 : query.page) && (query === null || query === void 0 ? void 0 : query.pageSize)) {
        queryParms.append("pagination[page]", query === null || query === void 0 ? void 0 : query.page);
        queryParms.append("pagination[pageSize]", query === null || query === void 0 ? void 0 : query.pageSize);
    }
    const { data , error  } = useSWR(`${getBaseURL()}/questions/tag/${tag}?${queryParms.toString()}`, fetcher);
    return {
        data,
        error
    };
};
const usePagination = (initialState)=>{
    const { 0: pageSize , 1: setPageSize  } = useState(initialState === null || initialState === void 0 ? void 0 : initialState.pageSize);
    const { 0: page , 1: setPage  } = useState(initialState === null || initialState === void 0 ? void 0 : initialState.page);
    return {
        pageSize,
        setPageSize,
        page,
        setPage
    };
};
const useAnswerByQuestionId = (id)=>{
    const { data , error  } = useSWR(`${getBaseURL()}/answer/question/${id}`, fetcher);
    return {
        data,
        error
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8046:
/***/ (() => {



/***/ })

};
;
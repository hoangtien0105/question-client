"use strict";
exports.id = 108;
exports.ids = [108];
exports.modules = {

/***/ 3090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SolutionSection)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "html-entities"
var external_html_entities_ = __webpack_require__(9816);
;// CONCATENATED MODULE: ./components/Common/SolutionPagination.js


function SolutionPagination({ hrefs , marginTop ="10px" , width  }) {
    const onPagination = (ev)=>{
        if (document) {
            document.querySelector(ev.target.getAttribute("data-id")).scrollIntoView({
                behavior: "smooth"
            });
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "flex pagination-solution flex-col justify-end",
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            className: "inline-flex -space-x-px overflow-auto",
            children: (hrefs === null || hrefs === void 0 ? void 0 : hrefs.length) && hrefs.map((href, index)=>{
                return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "pagination-solution-item",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        "data-id": href,
                        onClick: onPagination,
                        className: "cursor-pointer py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
                        children: index + 1
                    })
                }, index);
            })
        })
    });
};

// EXTERNAL MODULE: ./components/Common/TagsSection.js
var TagsSection = __webpack_require__(1304);
;// CONCATENATED MODULE: ./components/Common/SolutionSection.js





function SolutionSection({ answers , keywords  }) {
    const hrefs = answers.map((ans, index)=>{
        return `#solution${index + 1}`;
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "solution-section",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SolutionPagination, {
                hrefs: hrefs
            }),
            answers.map((ans, index)=>{
                return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    id: `solution${index + 1}`,
                    className: "flex mt-5 answer items-center justify-center py-5",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "rounded-xl solution-inner border md:px-10 md:py-10 px-2 py-10 shadow-md bg-white",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: "text-4xl font-semibold mb-5",
                                        children: `Solution ${index + 1}`
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(TagsSection/* default */.Z, {
                                        data: keywords
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: " items-center justify-between",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: " space-x-4 md:space-x-8",
                                    dangerouslySetInnerHTML: {
                                        __html: (0,external_html_entities_.decode)(ans)
                                    }
                                })
                            })
                        ]
                    })
                }, index);
            })
        ]
    });
};


/***/ }),

/***/ 1304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TagsSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function TagsSection({ data  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "tags-wrap h-max space-x-8",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "tags",
            children: (data === null || data === void 0 ? void 0 : data.length) ? data === null || data === void 0 ? void 0 : data.map((el, index)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: `/questions/tag/${el.slug}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "rounded-2xl border bg-neutral-100 px-3 py-1 text-sm font-semibold whitespace-nowrap",
                        children: el.name
                    })
                }, index);
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
        })
    });
};


/***/ }),

/***/ 2724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./constants/seo.js
var seo = __webpack_require__(1040);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(6641);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Layout/Header.js





function Header() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_.LogoJsonLd, {
                logo: "/logo.svg",
                url: seo/* siteUrl */.or
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: "bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-wrap justify-between items-center mx-auto max-w-screen-xl",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: seo/* logoPath */.j1,
                                        className: "mr-3 h-6 sm:h-9",
                                        alt: "Solution Checker Logo"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: "self-center text-xl font-semibold whitespace-nowrap dark:text-white",
                                        children: "Solution Checker"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex items-center lg:order-2",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                "data-collapse-toggle": "mobile-menu-2",
                                type: "button",
                                className: "inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
                                "aria-controls": "mobile-menu-2",
                                "aria-expanded": "false",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "sr-only",
                                        children: "Open main menu"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        className: "w-6 h-6",
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            fillRule: "evenodd",
                                            d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                                            clipRule: "evenodd"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        className: "hidden w-6 h-6",
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            fillRule: "evenodd",
                                            d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                                            clipRule: "evenodd"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1",
                            id: "mobile-menu-2",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700",
                                                "aria-current": "page",
                                                children: "Home"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/questions?tab=news",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700",
                                                children: "Questions"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/post?tab=news",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700",
                                                children: "Post"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700",
                                                children: "Coding"
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/Layout/index.js




function Layout({ children  }) {
    const onBackTop = ()=>{
        if (document) {
            if (document.querySelector(".ant-modal")) {
                document.querySelector(".ant-modal").scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            } else {
                document.querySelector("html").scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "wrapper",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "main-content",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "cursor-pointer text-lg p-2",
                style: {
                    position: "fixed",
                    bottom: "20px",
                    left: "20px",
                    background: "#000",
                    zIndex: "2000",
                    color: "white"
                },
                onClick: onBackTop,
                children: "Go go top"
            })
        ]
    });
};


/***/ }),

/***/ 1040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JG": () => (/* binding */ siteDescription),
/* harmony export */   "aD": () => (/* binding */ siteName),
/* harmony export */   "j1": () => (/* binding */ logoPath),
/* harmony export */   "or": () => (/* binding */ siteUrl)
/* harmony export */ });
const siteName = "Solutions Checker";
const siteDescription = "Find solution for coding, HTML, CSS, JAVASCRIPT, MYSQL, PHP, PYTHON,... quickly.";
const siteUrl = "https://solutionschecker.com";
const logoPath = "/logo-second.png";


/***/ }),

/***/ 9040:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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

/***/ })

};
;
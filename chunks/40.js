"use strict";
exports.id = 40;
exports.ids = [40];
exports.modules = {

/***/ 9040:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony exports useSlideResponsive, useBreakpoint, useMergeState, useQuestions, useQuestionsByTag, usePagination */
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
 */ const useBreakpoint = (queries)=>{
    const { 0: queryMatch , 1: setQueryMatch  } = useState(null);
    useEffect(()=>{
        const mediaQueryLists = {};
        const keys = Object.keys(queries);
        // To check whether event listener is attached or not
        let isAttached = false;
        const handleQueryListener = ()=>{
            const updatedMatches = keys.reduce((acc, media)=>{
                acc[media] = !!(mediaQueryLists[media] && mediaQueryLists[media].matches);
                return acc;
            }, {});
            //Setting state to the updated matches
            // when document either starts or stops matching a query
            setQueryMatch(updatedMatches);
        };
        if (window && window.matchMedia) {
            const matches = {};
            keys.forEach((media)=>{
                if (typeof queries[media] === "string") {
                    mediaQueryLists[media] = window.matchMedia(queries[media]);
                    matches[media] = mediaQueryLists[media].matches;
                } else {
                    matches[media] = false;
                }
            });
            //Setting state to initial matching queries
            setQueryMatch(matches);
            isAttached = true;
            keys.forEach((media)=>{
                if (typeof queries[media] === "string") {
                    mediaQueryLists[media].addListener(handleQueryListener);
                }
            });
        }
        return ()=>{
            //If event listener is attached then remove it when deps change
            if (isAttached) {
                keys.forEach((media)=>{
                    if (typeof queries[media] === "string") {
                        mediaQueryLists[media].removeListener(handleQueryListener);
                    }
                });
            }
        };
    }, [
        queries
    ]);
    return queryMatch;
};
const useMergeState = (initialState)=>{
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
    console.log(query, "kei", queryParms, queryParms.toString());
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
    console.log(query, "kei", queryParms, queryParms.toString());
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

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
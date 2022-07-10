"use strict";
exports.id = 408;
exports.ids = [408];
exports.modules = {

/***/ 1408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "k9": () => (/* binding */ getClientBaseURL)
/* harmony export */ });
/* unused harmony export getBaseURL */
const API_URL = "https://api.solutionschecker.com/api/v1";
const CLIENT_URL = "https://solutionschecker.com";
const getClientBaseURL = ()=>{
    return  true ? process.env.CLIENT_URL || CLIENT_URL : 0;
};
const getBaseURL = ()=>{
    return  true ? process.env.API_URL || API_URL : 0;
};
// eslint-disable-next-line import/no-anonymous-default-export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    get: async (url, locale = "vi")=>fetch(`${getBaseURL()}${url}`, {
            headers: {
                "Accept-Language": locale
            }
        }),
    getSync: async (url, locale, params)=>{
        const response = await fetch(`${getBaseURL()}${url}${params ? "?" + new URLSearchParams(params) : ""}`, {
            headers: {
                "Accept-Language": locale
            }
        });
        const result = await response.json();
        if (result.httpCode >= 400) {
            return Promise.reject(result);
        }
        return Promise.resolve(result);
    },
    post: async (url, data = {}, locale = "vi")=>{
        const response = await fetch(`${getBaseURL()}${url}`, {
            method: "POST",
            headers: {
                "Accept-Language": locale,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        if (result.httpCode >= 400) {
            return Promise.reject(result);
        }
        return Promise.resolve(result);
    },
    put: async (url, data = {}, locale = "vi")=>{
        const response = await fetch(`${getBaseURL()}${url}`, {
            method: "PUT",
            headers: {
                "Accept-Language": locale,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        if (result.httpCode >= 400) {
            return Promise.reject(result);
        }
        return Promise.resolve(result);
    },
    postFormData: async (url, data)=>{
        const response = await fetch(`${getBaseURL()}${url}`, {
            method: "POST",
            body: data
        });
        const result = await response.json();
        if (result.httpCode >= 400) {
            return Promise.reject(result);
        }
        return Promise.resolve(result);
    }
});


/***/ })

};
;
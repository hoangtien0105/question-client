"use strict";
(() => {
var exports = {};
exports.id = 472;
exports.ids = [472];
exports.modules = {

/***/ 7919:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var lib_api_requester__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1408);

//pages/sitemap.xml.js
const EXTERNAL_DATA_URL = `${(0,lib_api_requester__WEBPACK_IMPORTED_MODULE_0__/* .getClientBaseURL */ .k9)()}`;
function generateSiteMap(posts) {
    let urlArray = [];
    for(let i = 1; i <= Math.ceil(posts.questionPagination.count / 5); i++){
        urlArray.push(`${EXTERNAL_DATA_URL}/questions/page/${i}`);
    }
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
       ${urlArray.map((url)=>{
        return `
        <url>
            <loc>${url}</loc>
        </url>
      `;
    }).join()}


   </urlset>
 `;
}
function SiteMap() {
// getServerSideProps will do the heavy lifting
}
async function getServerSideProps({ res  }) {
    // We make an API call to gather the URLs for our site
    const allCountQuestion = await lib_api_requester__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getSync */ .ZP.getSync(`/countallquestion`);
    // We generate the XML sitemap with the posts data
    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap({
        questionPagination: allCountQuestion
    });
    res.setHeader("Content-Type", "text/xml");
    // we send the XML to the browser
    res.write(sitemap);
    res.end();
    return {
        props: {}
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SiteMap);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [408], () => (__webpack_exec__(7919)));
module.exports = __webpack_exports__;

})();
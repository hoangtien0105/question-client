(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2962:function(e,t,n){"use strict";n.d(t,{PB:function(){return d},TN:function(){return b},gR:function(){return O},lX:function(){return h},uJ:function(){return E}});var o=n(9008),r=n.n(o),a=n(7294);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i.apply(this,arguments)}function p(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function l(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}var c={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},u=function(e,t,n){void 0===t&&(t=[]);var o=void 0===n?{}:n,r=o.defaultWidth,i=o.defaultHeight;return t.reduce((function(t,n,o){return t.push(a.createElement("meta",{key:"og:"+e+":0"+o,property:"og:"+e,content:n.url})),n.alt&&t.push(a.createElement("meta",{key:"og:"+e+":alt0"+o,property:"og:"+e+":alt",content:n.alt})),n.secureUrl&&t.push(a.createElement("meta",{key:"og:"+e+":secure_url0"+o,property:"og:"+e+":secure_url",content:n.secureUrl.toString()})),n.type&&t.push(a.createElement("meta",{key:"og:"+e+":type0"+o,property:"og:"+e+":type",content:n.type.toString()})),n.width?t.push(a.createElement("meta",{key:"og:"+e+":width0"+o,property:"og:"+e+":width",content:n.width.toString()})):r&&t.push(a.createElement("meta",{key:"og:"+e+":width0"+o,property:"og:"+e+":width",content:r.toString()})),n.height?t.push(a.createElement("meta",{key:"og:"+e+":height"+o,property:"og:"+e+":height",content:n.height.toString()})):i&&t.push(a.createElement("meta",{key:"og:"+e+":height"+o,property:"og:"+e+":height",content:i.toString()})),t}),[])},s=function(e){var t,n,o,r=[];e.titleTemplate&&(c.templateTitle=e.titleTemplate);var p="";e.title?(p=e.title,c.templateTitle&&(p=c.templateTitle.replace(/%s/g,(function(){return p})))):e.defaultTitle&&(p=e.defaultTitle),p&&r.push(a.createElement("title",{key:"title"},p));var l,s,h=e.noindex||c.noindex||e.dangerouslySetAllPagesToNoIndex,d=e.nofollow||c.nofollow||e.dangerouslySetAllPagesToNoFollow,m="";if(e.robotsProps){var f=e.robotsProps,g=f.nosnippet,y=f.maxSnippet,v=f.maxImagePreview,k=f.maxVideoPreview,G=f.noarchive,b=f.noimageindex,w=f.notranslate,E=f.unavailableAfter;m=(g?",nosnippet":"")+(y?",max-snippet:"+y:"")+(v?",max-image-preview:"+v:"")+(G?",noarchive":"")+(E?",unavailable_after:"+E:"")+(b?",noimageindex":"")+(k?",max-video-preview:"+k:"")+(w?",notranslate":"")}(h||d?(e.dangerouslySetAllPagesToNoIndex&&(c.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(c.nofollow=!0),r.push(a.createElement("meta",{key:"robots",name:"robots",content:(h?"noindex":"index")+","+(d?"nofollow":"follow")+m}))):r.push(a.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+m})),e.description&&r.push(a.createElement("meta",{key:"description",name:"description",content:e.description})),e.mobileAlternate&&r.push(a.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach((function(e){r.push(a.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))})),e.twitter&&(e.twitter.cardType&&r.push(a.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&r.push(a.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&r.push(a.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&r.push(a.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),null!=(t=e.openGraph)&&t.title||p)&&r.push(a.createElement("meta",{key:"og:title",property:"og:title",content:(null==(l=e.openGraph)?void 0:l.title)||p}));(null!=(n=e.openGraph)&&n.description||e.description)&&r.push(a.createElement("meta",{key:"og:description",property:"og:description",content:(null==(s=e.openGraph)?void 0:s.description)||e.description}));if(e.openGraph){if((e.openGraph.url||e.canonical)&&r.push(a.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var O=e.openGraph.type.toLowerCase();r.push(a.createElement("meta",{key:"og:type",property:"og:type",content:O})),"profile"===O&&e.openGraph.profile?(e.openGraph.profile.firstName&&r.push(a.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&r.push(a.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&r.push(a.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&r.push(a.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===O&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach((function(e,t){r.push(a.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))})),e.openGraph.book.isbn&&r.push(a.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&r.push(a.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach((function(e,t){r.push(a.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))}))):"article"===O&&e.openGraph.article?(e.openGraph.article.publishedTime&&r.push(a.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&r.push(a.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&r.push(a.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach((function(e,t){r.push(a.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))})),e.openGraph.article.section&&r.push(a.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach((function(e,t){r.push(a.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))}))):"video.movie"!==O&&"video.episode"!==O&&"video.tv_show"!==O&&"video.other"!==O||!e.openGraph.video||(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach((function(e,t){e.profile&&r.push(a.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&r.push(a.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))})),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach((function(e,t){r.push(a.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))})),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach((function(e,t){r.push(a.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))})),e.openGraph.video.duration&&r.push(a.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&r.push(a.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach((function(e,t){r.push(a.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))})),e.openGraph.video.series&&r.push(a.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(c.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(c.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&r.push.apply(r,u("image",e.openGraph.images,{defaultWidth:c.defaultOpenGraphImageWidth,defaultHeight:c.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(c.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(c.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&r.push.apply(r,u("video",e.openGraph.videos,{defaultWidth:c.defaultOpenGraphVideoWidth,defaultHeight:c.defaultOpenGraphVideoHeight})),e.openGraph.locale&&r.push(a.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&r.push(a.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&r.push(a.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach((function(e){var t,n,o;r.push(a.createElement("meta",i({key:"meta:"+(null!=(t=null!=(n=null!=(o=e.keyOverride)?o:e.name)?n:e.property)?t:e.httpEquiv)},e)))})),null!=(o=e.additionalLinkTags)&&o.length&&e.additionalLinkTags.forEach((function(e){var t;r.push(a.createElement("link",i({key:"link"+(null!=(t=e.keyOverride)?t:e.href)+e.rel},e)))})),r},h=function(e){function t(){return e.apply(this,arguments)||this}return p(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.titleTemplate,o=e.defaultTitle,i=e.dangerouslySetAllPagesToNoIndex,p=void 0!==i&&i,l=e.dangerouslySetAllPagesToNoFollow,c=void 0!==l&&l,u=e.description,h=e.canonical,d=e.facebook,m=e.openGraph,f=e.additionalMetaTags,g=e.twitter,y=e.defaultOpenGraphImageWidth,v=e.defaultOpenGraphImageHeight,k=e.defaultOpenGraphVideoWidth,G=e.defaultOpenGraphVideoHeight,b=e.mobileAlternate,w=e.languageAlternates,E=e.additionalLinkTags,O=e.robotsProps;return a.createElement(r(),null,s({title:t,titleTemplate:n,defaultTitle:o,dangerouslySetAllPagesToNoIndex:p,dangerouslySetAllPagesToNoFollow:c,description:u,canonical:h,facebook:d,openGraph:m,additionalMetaTags:f,twitter:g,defaultOpenGraphImageWidth:y,defaultOpenGraphImageHeight:v,defaultOpenGraphVideoWidth:k,defaultOpenGraphVideoHeight:G,mobileAlternate:b,languageAlternates:w,additionalLinkTags:E,robotsProps:O}))},t}(a.Component),d=function(e){function t(){return e.apply(this,arguments)||this}return p(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.noindex,o=void 0!==n&&n,i=e.nofollow,p=e.robotsProps,l=e.description,c=e.canonical,u=e.openGraph,h=e.facebook,d=e.twitter,m=e.additionalMetaTags,f=e.titleTemplate,g=e.mobileAlternate,y=e.languageAlternates,v=e.additionalLinkTags;return a.createElement(r(),null,s({title:t,noindex:o,nofollow:i,robotsProps:p,description:l,canonical:c,facebook:h,openGraph:u,additionalMetaTags:m,twitter:d,titleTemplate:f,mobileAlternate:g,languageAlternates:y,additionalLinkTags:v}))},t}(a.Component),m=function(e,t){var n=t.id,o=i({},(void 0===n?void 0:n)?{"@id":t.id}:{},t);return delete o.id,{__html:JSON.stringify(i({"@context":"https://schema.org","@type":e},o),v)}},f=Object.freeze({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"}),g=new RegExp("["+Object.keys(f).join("")+"]","g"),y=function(e){return f[e]},v=function(e,t){switch(typeof t){case"object":if(null===t)return;return t;case"number":case"boolean":case"bigint":return t;case"string":return t.replace(g,y);default:return}};function k(e){var t=e.type,n=void 0===t?"Thing":t,o=e.keyOverride,p=e.scriptKey,c=e.scriptId,u=void 0===c?void 0:c,s=l(e,["type","keyOverride","scriptKey","scriptId"]);return a.createElement(r(),null,a.createElement("script",{type:"application/ld+json",id:u,dangerouslySetInnerHTML:m(n,i({},s)),key:"jsonld-"+p+(o?"-"+o:"")}))}function G(e){return Array.isArray(e)?e.map((function(e){return{"@type":"Person",name:e}})):e?{"@type":"Person",name:e}:void 0}function b(e){var t,n,o,r=e.type,p=void 0===r?"QAPage":r,c=e.keyOverride,u=e.mainEntity,s=i({},l(e,["type","keyOverride","mainEntity"]),{mainEntity:i({},u,{"@type":"Question",author:G(null==(t=u.author)?void 0:t.name)},u.acceptedAnswer&&{acceptedAnswer:i({},u.acceptedAnswer,{"@type":"Answer",author:G(null==(n=u.acceptedAnswer)||null==(o=n.author)?void 0:o.name)})},u.suggestedAnswer&&{suggestedAnswer:u.suggestedAnswer.map((function(e){var t,n=e.upvoteCount,o=l(e,["upvoteCount"]);return i({},o,{"@type":"Answer",upvoteCount:n||0,author:G(null==(t=o.author)?void 0:t.name)})}))})});return a.createElement(k,i({type:p,keyOverride:c},s,{scriptKey:"QAPage"}))}function w(e){if(e&&e.length)return e.map((function(e){return{"@type":"ListItem",position:e.position,item:{"@id":e.item,name:e.name}}}))}function E(e){var t=e.type,n=void 0===t?"Organization":t,o=e.keyOverride,r=l(e,["type","keyOverride"]);return a.createElement(k,i({type:n,keyOverride:o},r,{scriptKey:"Logo"}))}function O(e){var t=e.type,n=void 0===t?"BreadcrumbList":t,o=e.keyOverride,r={itemListElement:w(e.itemListElements)};return a.createElement(k,i({type:n,keyOverride:o},r,{scriptKey:"breadcrumb"}))}},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(3877)}])},1040:function(e,t,n){"use strict";n.d(t,{JG:function(){return r},Ym:function(){return p},aD:function(){return o},j1:function(){return i},or:function(){return a}});var o="Solution Checker",r="Find the solution to any question. We focus on finding the fastest possible solution for users. Main topics like coding, learning.",a="https://solutionschecker.com",i="/logo-second.png",p="solutions checker, solution checker, how to, solution for, check for solution, resolve question, what is, what solution for, find solution"},3877:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}n.r(t),n.d(t,{default:function(){return s}});var a=n(5893),i=(n(906),n(8625),n(2962)),p=n(1040),l={titleTemplate:"%s | ".concat(p.aD),defaultTile:p.aD,description:p.JG,openGraph:{type:"website",url:"https://solutionschecker.com",siteName:p.aD,images:[{url:"".concat(p.or,"/solutions-checker-banner.png"),alt:"".concat(p.JG," - solutionschecker.com")}]},twitter:{handle:"@solutionschecker.com",site:"@solutionschecker.com",cardType:"summary_large_image"}},c=n(1163),u=n(7294);var s=function(e){var t=e.Component,n=e.pageProps,o=(0,c.useRouter)();return(0,u.useEffect)((function(){if(document&&window){document.querySelectorAll("a").forEach((function(e){var t=new URL(e.href),n=new URL(window.location);console.log(t,n),t.hostname!==n.hostname&&(e.rel="nofollow noreferrer",e.target="__blank")}))}}),[]),(0,u.useEffect)((function(){if(document&&window){document.querySelectorAll("a").forEach((function(e){var t=new URL(e.href),n=new URL(window.location);console.log(t,n),t.hostname!==n.hostname&&(e.rel="nofollow noreferrer",e.target="__blank")}))}}),[o.pathname]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.lX,r({canonical:o.pathName},l)),(0,a.jsx)(t,r({},n))]})}},8625:function(){},906:function(){},9008:function(e,t,n){e.exports=n(5443)},1163:function(e,t,n){e.exports=n(387)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1118),t(387)}));var n=e.O();_N_E=n}]);
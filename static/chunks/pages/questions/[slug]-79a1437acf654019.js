(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[159],{4534:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/questions/[slug]",function(){return n(2081)}])},7089:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var s=n(5893),r=n(1664),i=n.n(r);n(7294);function a(e){var t=e.data;return(0,s.jsx)("div",{className:"widget",children:t&&t.map((function(e,t){return(0,s.jsx)(i(),{href:"/questions/".concat(e.slug),children:(0,s.jsx)("a",{children:e.title})},t)}))})}},2081:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return f},default:function(){return h}});var s=n(5893),r=n(2724),i=n(9111),a=(n(9040),n(2962)),c=n(1664),u=n.n(c),d=n(1163),l=(n(7294),n(490)),o=n(3090),x=n(7089),f=!0;function h(e){var t,n=e.data,c=e.randomQuestions,f=(0,d.useRouter)();return(0,s.jsxs)(r.Z,{children:[n&&(0,s.jsxs)("div",{className:"question my-5",children:[(0,s.jsx)(a.PB,{title:n.title,description:l.zD((0,i.decode)(n.content)).text()}),(0,s.jsx)(a.TN,{mainEntity:{name:n.title,text:l.zD((0,i.decode)(n.content)).text(),answerCount:(null===(t=n.answer)||void 0===t?void 0:t.length)||4,upVoteCount:500,suggestedAnswer:n.answer.length?n.answer.map((function(e,t){return{text:l.zD((0,i.decode)(e)).text(),url:"".concat(f.pathname,"#solution").concat(t+1)}})):[]}}),(0,s.jsx)("div",{className:"flex question-header items-center m-auto justify-center",children:(0,s.jsxs)("div",{className:"rounded-xl w-full border p-5 shadow-md bg-white",children:[(0,s.jsxs)("div",{className:"flex w-full items-center justify-between border-b pb-3",children:[(0,s.jsx)("div",{className:"flex items-center space-x-3",children:(0,s.jsx)("div",{className:"text-lg font-bold text-slate-700",children:(0,s.jsx)(u(),{href:"/questions/".concat(n.slug),children:(0,s.jsx)("a",{children:(0,s.jsx)("h1",{children:n.title})})})})}),(0,s.jsx)("div",{className:"flex flex-wrap h-auto justify-end items-center space-x-8",children:n.tags.map((function(e,t){return(0,s.jsx)(u(),{href:"/questions/tag/".concat(e.slug),children:(0,s.jsx)("a",{className:"rounded-2xl border bg-neutral-100 px-3 py-1 text-sm font-semibold",children:e.name})},t)}))})]}),(0,s.jsx)("div",{className:"question-content mt-5",dangerouslySetInnerHTML:{__html:(0,i.decode)(n.content)}})]})}),(0,s.jsx)(o.Z,{keywords:n.tags,marginTop:"30px",answers:n.answer})]}),(0,s.jsx)(x.Z,{data:c})]})}}},function(e){e.O(0,[662,150,490,108,774,888,179],(function(){return t=4534,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[933],{5995:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}}),r(7294);var n=r(9402),i=r(1691),o=r(5893);function s(e){var t=e.date,r=e.format,s=e.postfix,c=e.prefix;return t?(0,o.jsxs)(o.Fragment,{children:[c,(0,n.WU)(new Date(t),r,{locale:i.nb}),s]}):null}},6682:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}}),r(7294);var n=r(5893);function i(){return(0,n.jsx)("div",{children:"Loading…"})}},6656:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(7674);r(7294),r(750),r(348);var i=r(3542),o=r(5893);function s(e){var t=e.tags;return(0,o.jsx)("ul",{className:"_1qlrsxm0",children:Object.entries(t).map(function(e){var t=(0,n.Z)(e,2),r=t[0],s=t[1];return(0,o.jsx)("li",{children:(0,o.jsx)(i.Z,{href:r,className:"_1qlrsxm1",children:s})},r)})})}},2428:function(e,t,r){"use strict";var n=r(3322),i=r(6089),o=r(5667),s=r(1961),c=r(7731);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return x}});var l=r(8754),u=r(5893),a=l._(r(7294)),d=l._(r(7303)),f={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function h(e){var t=e.res,r=e.err;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}var p={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}},x=function(e){o(l,e);var t,r=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r=c(l);return e=t?Reflect.construct(r,arguments,c(this).constructor):r.apply(this,arguments),s(this,e)});function l(){return n(this,l),r.apply(this,arguments)}return i(l,[{key:"render",value:function(){var e=this.props,t=e.statusCode,r=e.withDarkMode,n=this.props.title||f[t]||"An unexpected error has occurred";return(0,u.jsxs)("div",{style:p.error,children:[(0,u.jsx)(d.default,{children:(0,u.jsx)("title",{children:t?t+": "+n:"Application error: a client-side exception has occurred"})}),(0,u.jsxs)("div",{style:p.desc,children:[(0,u.jsx)("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(void 0===r||r?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),t?(0,u.jsx)("h1",{className:"next-error-h1",style:p.h1,children:t}):null,(0,u.jsx)("div",{style:p.wrap,children:(0,u.jsxs)("h2",{style:p.h2,children:[this.props.title||t?n:(0,u.jsx)(u.Fragment,{children:"Application error: a client-side exception has occurred (see the browser console for more information)"}),"."]})})]})]})}}]),l}(a.default.Component);x.displayName="ErrorPage",x.getInitialProps=h,x.origGetInitialProps=h,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6732:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return x},default:function(){return j}}),r(7294);var n=r(1163),i=r(2918),o=r.n(i),s=r(7762),c=r(6682),l=r(410),u=r(5995),a=r(4165),d=r(6656),f=r(3542);r(750),r(9273),r(7203);var h=r(5893);function p(e){var t,r=e.event,n=null===(t=r.associations)||void 0===t?void 0:t.reduce(function(e,t){return e["/association/".concat(t.slug.current)]=t.short||t.name,e},{});return(0,h.jsxs)(l.Z,{children:[(0,h.jsx)("p",{children:r.date?(0,h.jsxs)("span",{children:["Dato: ",(0,h.jsx)(u.Z,{date:r.date,format:"PPPP"})]}):(0,h.jsxs)("span",{children:["\xc5r: ",(0,h.jsx)(u.Z,{date:r.year,format:"yyyy"})]})}),r.description&&(0,h.jsx)(a.Z,{text:r.description}),n&&(0,h.jsx)(d.Z,{tags:n}),r.sources&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h2",{children:"Kilder"}),(0,h.jsx)("ul",{className:"_1udcjti0",children:r.sources.map(function(e,t){return(0,h.jsx)("li",{children:e.url?(0,h.jsx)(f.Z,{href:e.url,children:e.text}):e.text},"source-".concat(t))})})]})]})}var x=!0;function j(e){var t=e.event,r=e.siteSettings,i=(0,n.useRouter)();return(i.isFallback||null!=t&&t.slug)&&t?(0,h.jsx)(s.Z,{pageTitle:t.name,siteSettings:r,children:i.isFallback?(0,h.jsx)(c.Z,{}):(0,h.jsx)(p,{event:t})}):(0,h.jsx)(o(),{statusCode:404})}},7865:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/history/[slug]",function(){return r(6732)}])},7203:function(){},348:function(){},2918:function(e,t,r){e.exports=r(2428)}},function(e){e.O(0,[9,130,762,888,774,179],function(){return e(e.s=7865)}),_N_E=e.O()}]);
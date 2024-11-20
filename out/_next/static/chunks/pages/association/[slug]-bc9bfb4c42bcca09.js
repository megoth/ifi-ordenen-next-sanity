(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[658],{6682:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}}),r(7294);var n=r(5893);function s(){return(0,n.jsx)("div",{children:"Loading…"})}},2428:function(e,t,r){"use strict";var n=r(3322),s=r(6089),i=r(5667),o=r(1961),l=r(7731);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return x}});var c=r(8754),a=r(5893),u=c._(r(7294)),d=c._(r(7303)),h={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function f(e){var t=e.res,r=e.err;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}var p={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}},x=function(e){i(c,e);var t,r=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r=l(c);return e=t?Reflect.construct(r,arguments,l(this).constructor):r.apply(this,arguments),o(this,e)});function c(){return n(this,c),r.apply(this,arguments)}return s(c,[{key:"render",value:function(){var e=this.props,t=e.statusCode,r=e.withDarkMode,n=this.props.title||h[t]||"An unexpected error has occurred";return(0,a.jsxs)("div",{style:p.error,children:[(0,a.jsx)(d.default,{children:(0,a.jsx)("title",{children:t?t+": "+n:"Application error: a client-side exception has occurred"})}),(0,a.jsxs)("div",{style:p.desc,children:[(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(void 0===r||r?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),t?(0,a.jsx)("h1",{className:"next-error-h1",style:p.h1,children:t}):null,(0,a.jsx)("div",{style:p.wrap,children:(0,a.jsxs)("h2",{style:p.h2,children:[this.props.title||t?n:(0,a.jsx)(a.Fragment,{children:"Application error: a client-side exception has occurred (see the browser console for more information)"}),"."]})})]})]})}}]),c}(u.default.Component);x.displayName="ErrorPage",x.getInitialProps=f,x.origGetInitialProps=f,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},137:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return g},default:function(){return m}}),r(7294);var n=r(1163),s=r(2918),i=r.n(s),o=r(7762),l=r(6682),c=r(410),a=r(1793),u=r(4165),d=r(754),h=r(608),f=r(3542);r(750),r(9273),r(930);var p=r(570),x=r(5893);function j(e){var t=e.association,r=e.events,n=e.members;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(c.Z,{children:(0,x.jsxs)("div",{className:"_81kjz21",children:[t.logo&&(0,x.jsx)("div",{className:"_81kjz22",style:(0,a.m6)(t),children:(0,x.jsx)("img",{src:(0,p.t3)(t.logo).maxWidth(400).url()||void 0,alt:"Logo for ".concat(t.name)})}),(0,x.jsx)(u.Z,{text:t.description}),(!t.active||t.previous||t.url)&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("h2",{children:"Annen informasjon"}),(0,x.jsxs)("ul",{className:"_81kjz20",children:[!t.active&&(0,x.jsx)("li",{children:(0,x.jsx)("strong",{children:"Ikke lenger aktiv"})}),t.previous&&(0,x.jsxs)("li",{children:[(0,x.jsx)("span",{children:"Tidligere kjent som "}),(0,x.jsx)(f.Z,{href:"/association/[slug]",as:"/association/".concat(t.previous.slug.current),children:t.previous.name})]}),t.url&&(0,x.jsxs)("li",{children:[(0,x.jsx)("span",{children:"Nettside: "}),(0,x.jsx)(f.Z,{href:t.url,children:t.url})]})]})]})]})}),n.length>0&&(0,x.jsxs)(c.Z,{children:[(0,x.jsx)("h2",{children:"Siste ordensb\xe6rere"}),(0,x.jsx)(h.Z,{members:n})]}),(r.length>0||n.length>0)&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(c.Z,{children:(0,x.jsx)("h2",{children:"Historie"})}),(0,x.jsx)(d.Z,{events:r,members:n})]})]})}var g=!0;function m(e){var t=e.association,r=e.siteSettings,s=e.events,c=e.members,a=(0,n.useRouter)();return a.isFallback||null!=t&&t.slug?(0,x.jsx)(o.Z,{pageTitle:null==t?void 0:t.name,siteSettings:r,children:a.isFallback?(0,x.jsx)(l.Z,{}):(0,x.jsx)(j,{association:t,events:s,members:c})}):(0,x.jsx)(i(),{statusCode:404})}},8320:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/association/[slug]",function(){return r(137)}])},930:function(){},2918:function(e,t,r){e.exports=r(2428)}},function(e){e.O(0,[9,946,130,762,352,888,774,179],function(){return e(e.s=8320)}),_N_E=e.O()}]);
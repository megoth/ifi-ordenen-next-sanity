(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[558],{2802:function(t,e,r){"use strict";var n=r(1959).getImageUrl;function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return Array.isArray(t.children)?t.children.join(e):t.children}function o(t,e){return""+t+i(e)+t}t.exports={types:{block:function(t){var e=t.node.style||"normal";return/^h\d$/.test(e)?Array(parseInt(e[1],10)+1).join("#")+" "+i(t):"blockquote"===e?"> "+i(t):i(t)},image:function(t){var e=t.title;return"!["+(t.alt||"")+"]("+n(t)+(e?" "+JSON.stringify(e):"")+")"}},marks:{"strike-through":o.bind(null,"~~"),em:o.bind(null,"_"),code:o.bind(null,"`"),strong:o.bind(null,"**"),underline:i,link:function(t){var e=t.mark,r=e.href,n=e.title,o=n?" "+JSON.stringify(n):"";return"["+i(t)+"]("+r+o+")"}},list:function(t){var e=Array(t.level||1).join("  ");return e+i(t,"\n"+e)},listItem:function(t){return("bullet"===t.node.listItem?"*":t.index+1+".")+" "+i(t)},container:function(t){return i(t,"\n\n")},hardBreak:function(){return"  \n"},markFallback:i}},6372:function(t,e,r){"use strict";var n=r(1959),i=n.getImageUrl,o=n.getSerializers,s=n.blocksToNodes,a=n.mergeSerializers,l=r(2802),u=function(t,e,r){var n=r||e.node&&e.node.children;return t(Object.assign({},e,{children:n}))},c=o(u),f=c.defaultSerializers,h=c.serializeSpan,p=a(f,l),d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a(p,e.serializers||{});return s(u,Object.assign({},e,{blocks:t||[],serializers:r,listNestMode:"last-child"}),f,h).trim()};d.defaultSerializers=f,d.getImageUrl=i,t.exports=d},1959:function(t,e,r){t.exports=r(8275)},5116:function(t,e,r){"use strict";var n=r(6086),i=r(1646),o=r(9497),s=r(2723),a=r(3703),l=["projectId","dataset","imageOptions"],u={imageOptions:{}};function c(t){return"block"===t._type&&t.listItem}t.exports=function(t,e,r,f){var h=n({},u,e),p=o(s(Array.isArray(h.blocks)?h.blocks:[h.blocks]),h.listNestMode),d=a(r,h.serializers||{}),m=l.reduce(function(t,e){var r=h[e];return void 0!==r&&(t[e]=r),t},{}),g=!!h.renderContainerOnSingleChild,v=p.map(function e(r,n,o,s){var a,l,u,h,p,g,v,y,b;return"list"===r._type&&r.listItem?(a=r.listItem,l=r.level,u=r._key,h=r.children.map(e),t(d.list,{key:u,level:l,type:a,options:m},h)):c(r)?(p=function(t,e){for(var r=0,n=0;n<e.length&&e[n]!==t;n++)c(e[n])&&r++;return r}(r,o),g=r._key,v=i(r).map(e),t(d.listItem,{node:r,serializers:d,index:p,key:g,options:m},v)):"string"==typeof r||r.marks||"span"===r._type?f(r,d,n,{serializeNode:e}):(y=i(r).map(function(t,r,n){return e(t,r,n,!0)}),b={key:r._key||"block-".concat(n),node:r,isInline:s,serializers:d,options:m},t(d.block,b,y))});if(g||v.length>1){var y=h.className?{className:h.className}:{};return t(d.container,y,v)}return v[0]?v[0]:"function"==typeof d.empty?t(d.empty):d.empty}},1646:function(t){"use strict";var e=["strong","em","code","underline","strike-through"];function r(t,e,r){if(!t.marks||0===t.marks.length)return t.marks||[];var i=n.bind(null,t.marks.reduce(function(t,n){t[n]=t[n]?t[n]+1:1;for(var i=e+1;i<r.length;i++){var o=r[i];if(o.marks&&Array.isArray(o.marks)&&-1!==o.marks.indexOf(n))t[n]++;else break}return t},{}));return t.marks.slice().sort(i)}function n(t,r,n){var i=t[r]||0,o=t[n]||0;if(i!==o)return o-i;var s=e.indexOf(r),a=e.indexOf(n);return s!==a?s-a:r<n?-1:r>n?1:0}t.exports=function(t){var e=t.children,n=t.markDefs;if(!e||!e.length)return[];var i=e.map(r),o={_type:"span",children:[]},s=[o];return e.forEach(function(t,e){var r=i[e];if(!r){s[s.length-1].children.push(t);return}var o=1;if(s.length>1)for(;o<s.length;o++){var a=s[o].markKey,l=r.indexOf(a);if(-1===l)break;r.splice(l,1)}var u=function(t){for(var e=t.length-1;e>=0;e--){var r=t[e];if("span"===r._type&&r.children)return r}}(s=s.slice(0,o));if(r.forEach(function(e){var r={_type:"span",_key:t._key,children:[],mark:n.find(function(t){return t._key===e})||e,markKey:e};u.children.push(r),s.push(r),u=r}),"span"===t._type&&"string"==typeof t.text&&(Array.isArray(t.marks)||void 0===t.marks)){for(var c=t.text.split("\n"),f=c.length;f-- >1;)c.splice(f,0,"\n");u.children=u.children.concat(c)}else u.children=u.children.concat(t)}),o.children}},2723:function(t,e,r){"use strict";var n=r(6086);t.exports=function(t){return t.map(function(t){return t._key?t:n({_key:(function(t){var e=0,r=t.length;if(0===r)return e;for(var n=0;n<r;n++)e=(e<<5)-e+t.charCodeAt(n),e&=e;return e})(JSON.stringify(t)).toString(36).replace(/[^A-Za-z0-9]/g,"")},t)})}},2073:function(t,e,r){"use strict";var n=r(261),i=r(562),o=r(6086),s=encodeURIComponent,a="You must either:\n  - Pass `projectId` and `dataset` to the block renderer\n  - Materialize images to include the `url` field.\n\nFor more information, see ".concat(n("block-content-image-materializing")),l=function(t){var e=t.imageOptions,r=Object.keys(e);if(!r.length)return"";var n=r.map(function(t){return"".concat(s(t),"=").concat(s(e[t]))});return"?".concat(n.join("&"))};t.exports=function(t){var e=t.node,r=t.options,n=r.projectId,s=r.dataset,u=e.asset;if(!u)throw Error("Image does not have required `asset` property");if(u.url)return u.url+l(r);if(!n||!s)throw Error(a);if(!u._ref)throw Error("Invalid image reference in block, no `_ref` found on `asset`");return i(o({projectId:n,dataset:s},r.imageOptions||{})).image(e).toString()}},8275:function(t,e,r){"use strict";var n=r(3503),i=r(5116),o=r(2073),s=r(3703);t.exports={blocksToNodes:function(t,e,r,o){if(r)return i(t,e,r,o);var s=n(t);return i(t,e,s.defaultSerializers,s.serializeSpan)},getSerializers:n,getImageUrl:o,mergeSerializers:s}},3703:function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var i=r(6086);t.exports=function(t,e){return Object.keys(t).reduce(function(r,o){var s=n(t[o]);return"function"===s?r[o]=void 0!==e[o]?e[o]:t[o]:"object"===s?r[o]=i({},t[o],e[o]):r[o]=void 0===e[o]?t[o]:e[o],r},{})}},9497:function(t,e,r){"use strict";var n=r(6086);function i(t){return{_type:"list",_key:"".concat(t._key,"-parent"),level:t.level,listItem:t.listItem,children:[t]}}function o(t){return t.children&&t.children[t.children.length-1]}function s(t,e){var r="string"==typeof e.listItem;if("list"===t._type&&t.level===e.level&&r&&t.listItem===e.listItem)return t;var n=o(t);return!!n&&s(n,e)}t.exports=function(t){for(var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"html",a=[],l=0;l<t.length;l++){var u,c=t[l];if(!c.listItem){a.push(c),e=null;continue}if(!e){e=i(c),a.push(e);continue}if(u=e,c.level===u.level&&c.listItem===u.listItem){e.children.push(c);continue}if(c.level>e.level){var f=i(c);if("html"===r){var h=o(e),p=n({},h,{children:h.children.concat(f)});e.children[e.children.length-1]=p}else e.children.push(f);e=f;continue}if(c.level<e.level){var d=s(a[a.length-1],c);if(d){(e=d).children.push(c);continue}e=i(c),a.push(e);continue}if(c.listItem!==e.listItem){var m=s(a[a.length-1],{level:c.level});if(m&&m.listItem===c.listItem){(e=m).children.push(c);continue}e=i(c),a.push(e);continue}console.warn("Unknown state encountered for block",c),a.push(c)}return a}},3503:function(t,e,r){"use strict";var n=r(6086),i=r(2073);t.exports=function(t,e){var r=e||{useDashedStyles:!1};function o(e,r){return t(e,null,r.children)}return{defaultSerializers:{types:{block:function(e){var r=e.node.style||"normal";return/^h\d/.test(r)?t(r,null,e.children):"blockquote"===r?t("blockquote",null,e.children):t("p",null,e.children)},image:function(e){if(!e.node.asset)return null;var r=t("img",{src:i(e)});return e.isInline?r:t("figure",null,r)}},marks:{strong:o.bind(null,"strong"),em:o.bind(null,"em"),code:o.bind(null,"code"),underline:function(e){return t("span",{style:r.useDashedStyles?{"text-decoration":"underline"}:{textDecoration:"underline"}},e.children)},"strike-through":function(e){return t("del",null,e.children)},link:function(e){return t("a",{href:e.mark.href},e.children)}},list:function(e){return t("bullet"===e.type?"ul":"ol",null,e.children)},listItem:function(e){var r=e.node.style&&"normal"!==e.node.style?t(e.serializers.types.block,e,e.children):e.children;return t("li",null,r)},block:function(e){var r=e.node,n=e.serializers,i=e.options,o=e.isInline,s=e.children,a=r._type,l=n.types[a];if(!l)throw Error('Unknown block type "'.concat(a,'", please specify a serializer for it in the `serializers.types` prop'));return t(l,{node:r,options:i,isInline:o},s)},span:function(e){var r=e.node,n=r.mark,i=r.children,o="string"==typeof n?n:n._type,s=e.serializers.marks[o];return s?t(s,e.node,i):(console.warn('Unknown mark type "'.concat(o,'", please specify a serializer for it in the `serializers.marks` prop')),t(e.serializers.markFallback,null,i))},hardBreak:function(){return t("br")},container:"div",markFallback:"span",text:void 0,empty:""},serializeSpan:function(e,r,i,o){if("\n"===e&&r.hardBreak)return t(r.hardBreak,{key:"hb-".concat(i)});if("string"==typeof e)return r.text?t(r.text,{key:"text-".concat(i)},e):e;e.children&&(s={children:e.children.map(function(t,r){return o.serializeNode(t,r,e.children,!0)})});var s,a=n({},e,s);return t(r.span,{key:e._key||"span-".concat(i),node:a,serializers:r})}}}},562:function(t){t.exports=function(){function t(){return(t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var r="image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";function n(t){return("image-"+t.split("/").slice(-1)[0]).replace(/\.([a-z]+)$/,"-$1")}var i=[["width","w"],["height","h"],["format","fm"],["download","dl"],["blur","blur"],["sharpen","sharp"],["invert","invert"],["orientation","or"],["minHeight","min-h"],["maxHeight","max-h"],["minWidth","min-w"],["maxWidth","max-w"],["quality","q"],["fit","fit"],["crop","crop"],["saturation","sat"],["auto","auto"],["dpr","dpr"],["pad","pad"]],o=["clip","crop","fill","fillmax","max","scale","min"],s=["top","bottom","left","right","center","focalpoint","entropy"],a=["format"],l=function(){function l(e,r){this.options=e?t(t({},e.options||{}),r||{}):t({},r||{})}var u=l.prototype;return u.withOptions=function(r){var n=r.baseUrl||this.options.baseUrl,o={baseUrl:n};for(var s in r)r.hasOwnProperty(s)&&(o[function(t){for(var r,n=function(t){var r=0;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,r){if(t){if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,r)}}(t)))return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}};throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=t[Symbol.iterator]()).next.bind(r)}(i);!(r=n()).done;){var o=r.value,s=o[0],a=o[1];if(t===s||t===a)return s}return t}(s)]=r[s]);return new l(this,t({baseUrl:n},o))},u.image=function(t){return this.withOptions({source:t})},u.dataset=function(t){return this.withOptions({dataset:t})},u.projectId=function(t){return this.withOptions({projectId:t})},u.bg=function(t){return this.withOptions({bg:t})},u.dpr=function(t){return this.withOptions({dpr:t})},u.width=function(t){return this.withOptions({width:t})},u.height=function(t){return this.withOptions({height:t})},u.focalPoint=function(t,e){return this.withOptions({focalPoint:{x:t,y:e}})},u.maxWidth=function(t){return this.withOptions({maxWidth:t})},u.minWidth=function(t){return this.withOptions({minWidth:t})},u.maxHeight=function(t){return this.withOptions({maxHeight:t})},u.minHeight=function(t){return this.withOptions({minHeight:t})},u.size=function(t,e){return this.withOptions({width:t,height:e})},u.blur=function(t){return this.withOptions({blur:t})},u.sharpen=function(t){return this.withOptions({sharpen:t})},u.rect=function(t,e,r,n){return this.withOptions({rect:{left:t,top:e,width:r,height:n}})},u.format=function(t){return this.withOptions({format:t})},u.invert=function(t){return this.withOptions({invert:t})},u.orientation=function(t){return this.withOptions({orientation:t})},u.quality=function(t){return this.withOptions({quality:t})},u.forceDownload=function(t){return this.withOptions({download:t})},u.flipHorizontal=function(){return this.withOptions({flipHorizontal:!0})},u.flipVertical=function(){return this.withOptions({flipVertical:!0})},u.ignoreImageParams=function(){return this.withOptions({ignoreImageParams:!0})},u.fit=function(t){if(-1===o.indexOf(t))throw Error('Invalid fit mode "'+t+'"');return this.withOptions({fit:t})},u.crop=function(t){if(-1===s.indexOf(t))throw Error('Invalid crop mode "'+t+'"');return this.withOptions({crop:t})},u.saturation=function(t){return this.withOptions({saturation:t})},u.auto=function(t){if(-1===a.indexOf(t))throw Error('Invalid auto mode "'+t+'"');return this.withOptions({auto:t})},u.pad=function(t){return this.withOptions({pad:t})},u.url=function(){return function(e){var o=t({},e||{}),s=o.source;delete o.source;var a=function(e){var r;if(!e)return null;if("string"==typeof e&&/^https?:\/\//.test(""+e))r={asset:{_ref:n(e)}};else if("string"==typeof e)r={asset:{_ref:e}};else if(e&&"string"==typeof e._ref)r={asset:e};else if(e&&"string"==typeof e._id)r={asset:{_ref:e._id||""}};else if(e&&e.asset&&"string"==typeof e.asset.url)r={asset:{_ref:n(e.asset.url)}};else{if("object"!=typeof e.asset)return null;r=e}return e.crop&&(r.crop=e.crop),e.hotspot&&(r.hotspot=e.hotspot),function(e){if(e.crop&&e.hotspot)return e;var r=t({},e);return r.crop||(r.crop={left:0,top:0,bottom:0,right:0}),r.hotspot||(r.hotspot={x:.5,y:.5,height:1,width:1}),r}(r)}(s);if(!a)return null;var l=function(t){var e=t.split("-"),n=e[1],i=e[2],o=e[3];if(!n||!i||!o)throw Error("Malformed asset _ref '"+t+"'. Expected an id like \""+r+'".');var s=i.split("x"),a=s[0],l=s[1],u=+a,c=+l;if(!(isFinite(u)&&isFinite(c)))throw Error("Malformed asset _ref '"+t+"'. Expected an id like \""+r+'".');return{id:n,width:u,height:c,format:o}}(a.asset._ref||a.asset._id||""),u=Math.round(a.crop.left*l.width),c=Math.round(a.crop.top*l.height),f={left:u,top:c,width:Math.round(l.width-a.crop.right*l.width-u),height:Math.round(l.height-a.crop.bottom*l.height-c)},h=a.hotspot.height*l.height/2,p=a.hotspot.width*l.width/2,d=a.hotspot.x*l.width,m=a.hotspot.y*l.height;return o.rect||o.focalPoint||o.ignoreImageParams||o.crop||(o=t(t({},o),function(t,e){var r,n=e.width,i=e.height;if(!(n&&i))return{width:n,height:i,rect:t.crop};var o=t.crop,s=t.hotspot,a=n/i;if(o.width/o.height>a){var l=o.height,u=l*a,c=o.top,f=(s.right-s.left)/2+s.left-u/2;f<o.left?f=o.left:f+u>o.left+o.width&&(f=o.left+o.width-u),r={left:Math.round(f),top:Math.round(c),width:Math.round(u),height:Math.round(l)}}else{var h=o.width,p=h/a,d=o.left,m=(s.bottom-s.top)/2+s.top-p/2;m<o.top?m=o.top:m+p>o.top+o.height&&(m=o.top+o.height-p),r={left:Math.max(0,Math.floor(d)),top:Math.max(0,Math.floor(m)),width:Math.round(h),height:Math.round(p)}}return{width:n,height:i,rect:r}}({crop:f,hotspot:{left:d-p,top:m-h,right:d+p,bottom:m+h}},o))),function(t){var e=t.baseUrl||"https://cdn.sanity.io",r=t.asset.id+"-"+t.asset.width+"x"+t.asset.height+"."+t.asset.format,n=e+"/images/"+t.projectId+"/"+t.dataset+"/"+r,o=[];if(t.rect){var s=t.rect,a=s.left,l=s.top,u=s.width,c=s.height;(0!==a||0!==l||c!==t.asset.height||u!==t.asset.width)&&o.push("rect="+a+","+l+","+u+","+c)}t.bg&&o.push("bg="+t.bg),t.focalPoint&&(o.push("fp-x="+t.focalPoint.x),o.push("fp-y="+t.focalPoint.y));var f=[t.flipHorizontal&&"h",t.flipVertical&&"v"].filter(Boolean).join("");return(f&&o.push("flip="+f),i.forEach(function(e){var r=e[0],n=e[1];void 0!==t[r]?o.push(n+"="+encodeURIComponent(t[r])):void 0!==t[n]&&o.push(n+"="+encodeURIComponent(t[n]))}),0===o.length)?n:n+"?"+o.join("&")}(t(t({},o),{},{asset:l}))}(this.options)},u.toString=function(){return this.url()},l}();return function(t){if(t&&"object"==typeof t.clientConfig){var e=t.clientConfig,r=e.apiHost,n=e.projectId,i=e.dataset;return new l(null,{baseUrl:(r||"https://api.sanity.io").replace(/^https:\/\/api\./,"https://cdn."),projectId:n,dataset:i})}return new l(null,t)}}()},8877:function(t,e,r){"use strict";r.d(e,{Z:function(){return i}}),r(7294);var n=r(5893);function i(){return(0,n.jsx)("div",{children:"Loading…"})}},8431:function(t,e,r){"use strict";r.d(e,{t3:function(){return d}});var n=r(8307),i=r(2700),o=r(9668),s=r(6803),a=r.n(s),l=r(4155);function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach(function(e){(0,n.Z)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var f={dataset:"production",projectId:"pvgrwf7h",useCdn:!0,apiVersion:"2021-09-13"},h=(0,o.ZP)(f),p=a()(h),d=function(t){return p.image(t)};(0,i.eI)(f),(0,i.eI)(c(c({},f),{},{useCdn:!1,token:l.env.SANITY_API_TOKEN,apiVersion:"2021-09-13"}))},8537:function(t,e,r){"use strict";var n=r(3322),i=r(6089),o=r(5667),s=r(1961),a=r(7731);Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return m}});var l=r(8754),u=r(5893),c=l._(r(7294)),f=l._(r(4394)),h={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function p(t){var e=t.res,r=t.err;return{statusCode:e&&e.statusCode?e.statusCode:r?r.statusCode:404}}var d={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}},m=function(t){o(l,t);var e,r=(e=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}(),function(){var t,r=a(l);if(e){var n=a(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return s(this,t)});function l(){return n(this,l),r.apply(this,arguments)}return i(l,[{key:"render",value:function(){var t=this.props,e=t.statusCode,r=t.withDarkMode,n=this.props.title||h[e]||"An unexpected error has occurred";return(0,u.jsxs)("div",{style:d.error,children:[(0,u.jsx)(f.default,{children:(0,u.jsx)("title",{children:e?e+": "+n:"Application error: a client-side exception has occurred"})}),(0,u.jsxs)("div",{style:d.desc,children:[(0,u.jsx)("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(void 0===r||r?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),e?(0,u.jsx)("h1",{className:"next-error-h1",style:d.h1,children:e}):null,(0,u.jsx)("div",{style:d.wrap,children:(0,u.jsxs)("h2",{style:d.h2,children:[this.props.title||e?n:(0,u.jsx)(u.Fragment,{children:"Application error: a client-side exception has occurred (see the browser console for more information)"}),"."]})})]})]})}}]),l}(c.default.Component);m.displayName="ErrorPage",m.getInitialProps=p,m.origGetInitialProps=p,("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},679:function(t,e,r){"use strict";r.r(e),r.d(e,{__N_SSG:function(){return g},default:function(){return v}}),r(7294);var n=r(1163),i=r(2918),o=r.n(i),s=r(2714),a=r(8877),l=r(4428),u=r(8431),c=r(1340);r(9100);var f=r(5887),h=r(6372),p=r.n(h),d=r(5893);function m(t){var e,r=t.album;return(0,d.jsx)(l.Z,{children:(0,d.jsx)("ul",{className:"_1szpowa0",children:null===(e=r.images)||void 0===e?void 0:e.map(function(t,e){return(0,d.jsxs)("li",{children:[(0,d.jsx)(f.Z,{href:(0,u.t3)(t.image).url()||void 0,children:(0,d.jsx)("img",{src:(0,u.t3)(t.image).width(256).url()||void 0,alt:p()(t.description)})}),(0,d.jsx)(c.Z,{text:t.description})]},"".concat(r.slug,"-").concat(e))})})})}var g=!0;function v(t){var e=t.album,r=t.siteSettings,i=(0,n.useRouter)();return(i.isFallback||null!=e&&e.slug)&&e?(0,d.jsx)(s.Z,{pageTitle:e.name,siteSettings:r,children:i.isFallback?(0,d.jsx)(a.Z,{}):(0,d.jsx)(m,{album:e})}):(0,d.jsx)(o(),{statusCode:404})}},9149:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gallery/[slug]",function(){return r(679)}])},9100:function(){},2918:function(t,e,r){t.exports=r(8537)}},function(t){t.O(0,[824,946,714,888,774,179],function(){return t(t.s=9149)}),_N_E=t.O()}]);
/*! Built with http://stenciljs.com */
(function(Context,appNamespace,hydratedCssClass,publicPath){"use strict";
var s=document.querySelector("script[data-core='stqrcmp.l83e0cic.js'][data-path]");if(s){publicPath=s.getAttribute('data-path');}
(function(n,t,e,o,i){"use strict";function c(n,t,e,o,i,c,u,l){return u=e.split(":"),t&&u.length>1&&(t=n.t.n(t,u[0]),e=u[1]),t?(l=o,(u=e.split(".")).length>1&&(e=u[0],l=(n=>{n.keyCode===nn[u[1]]&&o(n)})),n.t.e(t,e,l,i,c)):W}function u(n){n.o&&(Object.keys(n.o).forEach(t=>n.o[t]()),n.o=null)}function l(n,t,e){const o={i:t.documentElement,c:t.head,u:t.body,l:n=>n.nodeType,f:n=>t.createElement(n),r:(n,e)=>t.createElementNS(n,e),s:n=>t.createTextNode(n),a:n=>t.createComment(n),d:(n,t,e)=>n.insertBefore(t,e),m:(n,t)=>n.removeChild(t),p:(n,t)=>n.appendChild(t),v:n=>n.childNodes,b:n=>n.parentNode,h:n=>n.nextSibling,y:n=>U(n.tagName),g:n=>n.textContent,w:(n,t)=>n.textContent=t,C:(n,t)=>n.getAttribute(t),N:(n,t,e)=>n.setAttribute(t,e),j:(n,t,e,o)=>n.setAttributeNS(t,e,o),T:(n,t)=>n.removeAttribute(t),e:(n,t,e,i,c,u)=>(u=o.O?{capture:!!i,passive:!!c}:!!i,n.addEventListener(t,e,u),()=>n&&n.removeEventListener(t,e,u)),n:(e,i)=>"child"===i?e.firstElementChild:"parent"===i?o.x(e):"body"===i?o.u:"document"===i?t:"window"===i?n:e};return o.x=((n,t)=>(t=o.b(n))&&11===o.l(t)?t.host:t),o}function f(n,t,e,o,i){const c=11===e.k.nodeType&&e.k.host?e.k.host:e.k,u=t&&t.A||X,l=e.A||X;for(i in u)l&&null!=l[i]||null==u[i]||r(n,c,i,u[i],void 0,o);for(i in l)i in u&&l[i]===("value"===i||"checked"===i?c[i]:u[i])||r(n,c,i,u[i],l[i],o)}function r(n,t,e,o,i,u,l,f){if("class"!==e||u)if("style"===e){o=o||X,i=i||X;for(l in o)i[l]||(t.style[l]="");for(l in i)i[l]!==o[l]&&(t.style[l]=i[l])}else if("o"!==e[0]||"n"!==e[1]||e in t)if("list"!==e&&"type"!==e&&!u&&(e in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=n.M(t);o&&o.P&&e in o.P?s(t,e,i):(s(t,e,null==i?"":i),null!=i&&!1!==i||t.removeAttribute(e))}else null!=i&&(l=e!==(e=e.replace(/^xlink\:?/,"")),1!==tn[e]||i&&"false"!==i?"function"!=typeof i&&(l?t.setAttributeNS(en,U(e),i):t.setAttribute(e,i)):l?t.removeAttributeNS(en,U(e)):t.removeAttribute(e));else{e=U(e).substring(2);const u=t.o=t.o||{};i?o||(u[e]=c(n,t,e,i)):u[e]&&u[e]()}else if(o!==i){const n=null==o||""===o?Y:o.trim().split(/\s+/),e=null==i||""===i?Y:i.trim().split(/\s+/);let c=null==t.className||""===t.className?Y:t.className.trim().split(/\s+/);for(l=0,f=n.length;l<f;l++)-1===e.indexOf(n[l])&&(c=c.filter(t=>t!==n[l]));for(l=0,f=e.length;l<f;l++)-1===n.indexOf(e[l])&&(c=[...c,e[l]]);t.className=c.join(" ")}}function s(n,t,e){try{n[t]=e}catch(n){}}function a(n,t){function e(o,i,c){let u=0;if("function"==typeof o.S&&(o=o.S(Object.assign({},o.A,{B:o.R}))),K(o.q))o.k=t.s(o.q);else{const i=o.k=on||"svg"===o.S?t.r("http://www.w3.org/2000/svg",o.S):t.f(o.S);on="svg"===o.S||"foreignObject"!==o.S&&on,f(n,null,o,on),null!==d&&i.D!==d&&t.N(i,i.D=d,"");const c=o.R;if(c){let n;for(;u<c.length;++u)(n=e(c[u],i,u))&&t.p(i,n)}}return o.k}function o(n,o,i,c,u){const l=n.$defaultHolder&&t.b(n.$defaultHolder)||n;let f;for(;c<=u;++c){var r=i[c];K(r)&&(f=K(r.q)?t.s(r.q):e(r,n,c),K(f)&&(r.k=f,t.d(l,f,o)))}}function i(n,e,o,i){for(;o<=i;++o)K(e[o])&&t.m(n,e[o].k)}function c(n,c,f){let s,a,d,m,p=0,v=0,b=c.length-1,h=c[0],y=c[b],$=f.length-1,g=f[0],w=f[$];for(;p<=b&&v<=$;)null==h?h=c[++p]:null==y?y=c[--b]:null==g?g=f[++v]:null==w?w=f[--$]:u(h,g)?(r(h,g),h=c[++p],g=f[++v]):u(y,w)?(r(y,w),y=c[--b],w=f[--$]):u(h,w)?(r(h,w),t.d(n,h.k,t.h(y.k)),h=c[++p],w=f[--$]):u(y,g)?(r(y,g),t.d(n,y.k,h.k),y=c[--b],g=f[++v]):(Q(s)&&(s=l(c,p,b)),a=s[g.H],Q(a)?(m=e(g,n,v),g=f[++v]):((d=c[a]).S!==g.S?m=e(g,n,a):(r(d,g),c[a]=void 0,m=d.k),g=f[++v]),m&&t.d(n,m,h.k));p>b?o(n,null==f[$+1]?null:f[$+1].k,f,v,$):v>$&&i(n,c,p,b)}function u(n,t){return n.S===t.S&&n.H===t.H}function l(n,t,e){let o,i,c,u={};for(o=t;o<=e;++o)null!=(c=n[o])&&void 0!==(i=c.H)&&(u.I=o);return u}function r(e,u){const l=u.k=e.k,r=e.R,s=u.R;if(on=u.k&&null!=u.k.parentElement&&void 0!==u.k.L,on="svg"===u.S||"foreignObject"!==u.S&&on,Q(u.q))"slot"!==u.S&&f(n,e,u,on),K(r)&&K(s)?c(l,r,s):K(s)?(K(e.q)&&t.w(l,""),o(l,null,s,0,s.length-1)):K(r)&&i(l,r,0,r.length-1);else if(l.z&&l.z.F){let n=l.z.F[0].parentElement;t.w(n,u.q),l.z.F=[n.childNodes[0]]}else e.q!==u.q&&t.w(l,u.q)}let s,a,d;return function n(e,o,i,c,u,l){return s=i,a=c,d=2===u||1===u&&!t.Z?"data-"+t.y(e.k):null,s||d&&t.N(e.k,d+"-host",""),r(e,o),o}}function d(n,t){n&&(n._&&n._(t?null:n.k),n.R&&n.R.forEach(n=>{d(n,t)}))}function m(n,t,e){for(var o,i=!1,c=!1,u=arguments.length;u-- >2;)un.push(arguments[u]);for(;un.length;)if((e=un.pop())&&void 0!==e.pop)for(u=e.length;u--;)un.push(e[u]);else"boolean"==typeof e&&(e=null),(c="function"!=typeof n)&&(null==e?e="":"number"==typeof e?e=String(e):"string"!=typeof e&&(c=!1)),c&&i?o[o.length-1].q+=e:void 0===o?o=[c?p(e):e]:o.push(c?p(e):e),i=c;const l=new cn;if(l.S=n,l.R=o,t&&(l.A=t,l.H=t.G,l._=t.J,t.className&&(t.class=t.className),"object"==typeof t.class)){for(u in t.class)t.class[u]&&un.push(u);t.class=un.join(" "),un.length=0}return l}function p(n){const t=new cn;return t.q=n,t}function v(n,t,e,o){function i(){for(;f.length>0;)f.shift()();e=!1}function c(e){for(e=t(),i();r.length>0&&t()-e<40;)r.shift()();(o=r.length>0)&&n(u)}function u(e){for(i(),e=4+t();r.length>0&&t()<e;)r.shift()();(o=r.length>0)&&n(c)}const l=Promise.resolve(),f=[],r=[];return{add:(t,u)=>{3===u?(f.push(t),e||(e=!0,l.then(i))):(r.push(t),o||(o=!0,n(c)))}}}function b(n,t,e){const o={K:n[0],P:{mode:{Q:1},color:{Q:1,U:"color"}}};return o.V=n[1],y(o,n[3],e),o.W=n[4],o.X=n[5],n[6]&&(o.Y=n[6].map(h)),o.nn=n[7],t[o.K]=o}function h(n){return{tn:n[0],en:n[1],on:!!n[2],in:!!n[3],cn:!!n[4]}}function y(n,t,e){if(t){n.P=n.P||{};for(var o=0;o<t.length;o++){var i=t[o];n.P[i[0]]={Q:i[1],U:i[2]?1===e?U(i[0]):V(i[0]):0,un:i[3],ln:i[4]}}}}function $(n,t,e,o){const i=n[e[0]];i.fn=t[e[0]],y(i,e[1],o),i.rn=e[2],e[3]&&(i.sn=e[3].map(g)),i.an=e[4],i.dn=e[5]}function g(n){return{tn:n[0],en:n[1]||n[0],mn:!n[2],pn:!n[3],vn:!n[4]}}function w(n,t){if(K(t)){if(3===n)return"false"!==t&&(""===t||!!t);if(4===n)return parseFloat(t)}return t}function C(n,t,e,o,i,c){if(o!==i&&n){e=U(e);for(c in n)if(n[c].U===e){t[c]=w(n[c].un,i);break}}}function N(n,t,e){t&&Object.keys(t).forEach(o=>{const i=t[o].Q;1===i||2===i?E(e,o,function n(){return(this.bn=this.bn||{})[o]},function t(e){x(n,this,o,e)}):6===i&&k(e,o,W)})}function j(n,t,e,o){o.hn=e,e.bn=e.bn||{},t.P&&Object.keys(t.P).forEach(i=>{T(n,t,e,o,i)})}function T(n,t,e,o,i){const c=t.P[i],u=c.Q;if(1===u||5===u||2===u){if(5!==u){if(c.U&&(void 0===e.bn[i]||""===e.bn[i])){const n=e.getAttribute(c.U);null!=n&&(e.bn[i]=w(c.un,n))}e.hasOwnProperty(i)&&(void 0===e.bn[i]&&(e.bn[i]=e[i]),n.isClient&&delete e[i])}o.hasOwnProperty(i)&&void 0===e.bn[i]&&(e.bn[i]=o[i]),E(o,i,function l(){const n=this.hn;return n&&n.bn&&n.bn[i]},function f(t){const e=this.hn;1!==u&&x(n,e,i,t)}),O(t.an,ln,e,o,i)}}function O(n,t,e,o,i){const c=n&&n.find(n=>n[0]===i);c&&(e.bn[t+i]=o[c[1]].bind(o))}function x(n,t,e,o){const i=t.bn=t.bn||{},c=i[e];o!==c&&(i[e]=o,i[fn+e]&&i[fn+e](o,c),t.yn&&!n.$n&&D(n,t))}function k(n,t,e){Object.defineProperty(n,t,{configurable:!0,value:e})}function E(n,t,e,o){Object.defineProperty(n,t,{configurable:!0,get:e,set:o})}function A(n,t,e){return{create:P(n,t,e,"create"),componentOnReady:P(n,t,e,"componentOnReady")}}function M(n,t,e){return new Promise(o=>{let i=t[e];i||(i=n.u.querySelector(e)),i||(i=t[e]=n.f(e),n.p(n.u,i)),i.componentOnReady(o)})}function P(n,t,e,o){return function(){const i=arguments;return M(n,t,e).then(n=>n[o].apply(n,i))}}function S(n,t,e){try{e=n.M(t),t.yn=new e.fn,j(n,e,t,t.yn)}catch(e){t.yn={},n.gn(e,7,t,!0)}}function B(n,t,e){if(t.yn&&!t.wn&&(!t.$activeLoading||!t.$activeLoading.length)){t.$activeLoading=null,t.Cn=!0;try{t.Nn&&(t.Nn.forEach(n=>n(t)),t.Nn=null),d(t.jn)}catch(e){n.gn(e,4,t)}t.classList.add(e),R(t)}}function R(n,t,e){n.Tn&&((e=n.Tn.$activeLoading)&&((t=e.indexOf(n))>-1&&e.splice(t,1),!e.length&&n.Tn.$initLoad()),n.Tn=null)}function q(n,t,e,o){const i=t.yn,c=e.rn;if(i.render||i.hostData||c){n.$n=!0;const c=i.render&&i.render();n.$n=!1;const u=t.jn||new cn;u.k=t,t.jn=n.render(u,m(null,void 0,c),o,t.z,e.W)}n.On(e,i.mode,t),t.$rendered=!0,t.$onRender&&(t.$onRender.forEach(n=>n()),t.$onRender=null)}function D(n,t){t.xn||(t.xn=!0,n.kn.add(()=>{t.xn=!1,H(n,t)}))}function H(n,t){if(!t.wn){const e=!t.yn;let o;if(e){const e=t.Tn;if(e&&!e.$rendered)return void(e.$onRender=e.$onRender||[]).push(()=>{H(n,t)});S(n,t);try{t.yn.componentWillLoad&&(o=t.yn.componentWillLoad())}catch(e){n.gn(e,3,t)}}o&&o.then?o.then(()=>I(n,t,e)):I(n,t,e)}}function I(n,t,e){try{q(n,t,n.M(t),!e)}catch(e){n.gn(e,8,t,!0)}try{e&&t.$initLoad()}catch(e){n.gn(e,6,t,!0)}}function L(n,t,e){e.$connected||(e.$connected=!0,e.wn=null,z(n,e),n.kn.add(()=>{n.En(t,e),n.An(t,e,()=>D(n,e))},3))}function z(n,t,e){for(e=t;e=n.t.x(e);)if(n.Mn(e)){e.Cn||(t.Tn=e,(e.$activeLoading=e.$activeLoading||[]).push(t));break}}function F(n,t){!n.Pn&&Z(n.t,t)&&(t.wn=!0,R(t),d(t.jn,!0),u(t),t.yn&&(t.yn=t.yn.hn=null),t.$activeLoading=t.$connected=t.$defaultHolder=t.Sn=t.bn=t.jn=t.Tn=t.Cn=t.xn=t.Bn=null)}function Z(n,t){for(;t;){if(!n.b(t))return 9!==n.l(t);t=n.b(t)}}function _(n,t,e,o){e.connectedCallback=function(){L(n,t,this)},e.attributeChangedCallback=function(n,e,o){C(t.P,this,n,e,o)},e.disconnectedCallback=function(){F(n,this)},e.componentOnReady=function(n,t){return n||(t=new Promise(t=>n=t)),G(this,n),t},e.$initLoad=function(){B(n,this,o)},N(n,t.P,e)}function G(n,t){n.wn||(n.Cn?t(n):(n.Nn=n.Nn||[]).push(t))}function J(n,t){return 2===t.W||1===t.W&&!n}const K=n=>void 0!==n&&null!==n,Q=n=>void 0===n||null===n,U=n=>n.toLowerCase(),V=n=>n.replace(/([A-Z])/g,n=>"-"+U(n[0])),W=()=>{},X={},Y=[],nn={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},tn={allowfullscreen:1,async:1,autofocus:1,autoplay:1,checked:1,controls:1,disabled:1,enabled:1,formnovalidate:1,hidden:1,multiple:1,noresize:1,readonly:1,required:1,selected:1,spellcheck:1},en="http://www.w3.org/1999/xlink";let on=!1;class cn{}const un=[],ln="$$wc",fn="$$dc",rn=n[o]=n[o]||{},sn=function an(t,e,o,i,c,u){function f(n,t,e,o,i){function u(){clearTimeout(o),i.onerror=i.onload=null,w.m(w.b(i),i),y[e]=!1}e=c+t+(J(w.Z,n)?".sc":"")+".js",y[e]||(y[e]=!0,(i=w.f("script")).charset="utf-8",i.async=!0,i.src=e,o=setTimeout(u,12e4),i.onerror=i.onload=u,w.p(w.c,i))}const r={html:{}},s={},d={},p={},h={},y={},g={},w=l(o,i);t.isServer=t.isPrerender=!(t.isClient=!0),t.window=o,t.location=o.location,t.document=i;const C=o.Rn=o.Rn||{},N={En:function j(n,e){e.mode||(e.mode=w.C(e,"mode")||t.mode),w.Z||1!==n.W||(e.shadowRoot=e)},t:w,qn:function T(n,t){const e=n.K;if(!C[e]){C[e]=!0,_(N,n,t.prototype,u);{const e=[];for(var i in n.P)n.P[i].U&&e.push(n.P[i].U);t.observedAttributes=e}o.customElements.define(e,t)}},Dn:t.emit,M:n=>r[w.y(n)],Hn:n=>t[n],isClient:!0,Mn:n=>!(!C[w.y(n)]&&!N.M(n)),An:function O(n,t,e,o){o=(n.V[t.mode]||n.V)[0],p[o]?e():((d[o]=d[o]||[]).push(e),f(n,o))},gn:(n,t,e)=>void 0,In:n=>A(w,g,n),kn:v(t=>n.requestAnimationFrame(t),()=>o.performance.now()),Ln:n=>(n||[]).map(n=>b(n,r))};N.render=a(N,w);const x=w.i;return x.$rendered=!0,x.$activeLoading=[],x.$initLoad=(()=>x.Cn=!0),e.loadComponents=function n(e,o){const i=arguments;o(s,m,t,c);for(var u=2;u<i.length;u++)$(r,s,i[u]);var l=d[e];if(l){for(u=0;u<l.length;u++)l[u]();d[e]=null}p[e]=!0},e.loadStyles=function n(){const t=arguments;let e;for(var o=0;o<t.length;o+=2)h[t[o]]=e=w.f("template"),e.innerHTML=`<style>${t[o+1]}</style>`,e.id=`tmp-${t[o]}`,w.p(w.c,e)},N.On=((n,t,e)=>{{const o=h[n.K+"_"+t]||h[n.K];if(o){let t=w.c;if(w.Z)if(1===n.W)t=e.shadowRoot;else for(;e=w.b(e);)if(e.host&&e.host.shadowRoot){t=e.host.shadowRoot;break}const i=t.zn=t.zn||{};if(!i[o.id]){const n=o.content.cloneNode(!0),e=t.querySelector("[data-visibility]");w.d(t,n,e&&e.nextSibling||t.Fn),i[o.id]=!0}}}}),N}(e,rn,n,t,i,hydratedCssClass);sn.Ln(rn.components).forEach(n=>sn.qn(n,class extends HTMLElement{}))})(window,document,Context,appNamespace,publicPath);
})({},"stqrcmp","hydrated","/build/stqrcmp/");
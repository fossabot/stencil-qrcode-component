/*! Built with http://stenciljs.com */
(function(Context,appNamespace,hydratedCssClass,publicPath){"use strict";
var s=document.querySelector("script[data-core='stqrcmp.8yqwnnkc.js'][data-path]");if(s){publicPath=s.getAttribute('data-path');}
(function(n,t,e,o,i){"use strict";function c(n,t,e,o,i,c,u,r){return u=e.split(":"),t&&u.length>1&&(t=n.t.n(t,u[0]),e=u[1]),t?(r=o,(u=e.split(".")).length>1&&(e=u[0],r=(n=>{n.keyCode===cn[u[1]]&&o(n)})),n.t.e(t,e,r,i,c)):Y}function u(n){n.o&&(Object.keys(n.o).forEach(t=>n.o[t]()),n.o=null)}function r(n,t,e){const o={i:t.documentElement,c:t.head,u:t.body,r:n=>n.nodeType,f:n=>t.createElement(n),l:(n,e)=>t.createElementNS(n,e),s:n=>t.createTextNode(n),a:n=>t.createComment(n),d:(n,t,e)=>n.insertBefore(t,e),m:(n,t)=>n.removeChild(t),v:(n,t)=>n.appendChild(t),p:n=>n.childNodes,b:n=>n.parentNode,h:n=>n.nextSibling,y:n=>W(n.tagName),g:n=>n.textContent,w:(n,t)=>n.textContent=t,C:(n,t)=>n.getAttribute(t),N:(n,t,e)=>n.setAttribute(t,e),j:(n,t,e,o)=>n.setAttributeNS(t,e,o),T:(n,t)=>n.removeAttribute(t),e:(n,t,e,i,c,u)=>(u=o.O?{capture:!!i,passive:!!c}:!!i,n.addEventListener(t,e,u),()=>n&&n.removeEventListener(t,e,u)),n:(e,i)=>"child"===i?e.firstElementChild:"parent"===i?o.x(e):"body"===i?o.u:"document"===i?t:"window"===i?n:e};return o.x=((n,t)=>(t=o.b(n))&&11===o.r(t)?t.host:t),o}function f(n,t,e,o,i){const c=11===e.k.nodeType&&e.k.host?e.k.host:e.k,u=t&&t.A||en,r=e.A||en;for(i in u)r&&null!=r[i]||null==u[i]||l(n,c,i,u[i],void 0,o);for(i in r)i in u&&r[i]===("value"===i||"checked"===i?c[i]:u[i])||l(n,c,i,u[i],r[i],o)}function l(n,t,e,o,i,u,r,f){if("class"!==e||u)if("style"===e){o=o||en,i=i||en;for(r in o)i[r]||(t.style[r]="");for(r in i)i[r]!==o[r]&&(t.style[r]=i[r])}else if("o"!==e[0]||"n"!==e[1]||e in t)if("list"!==e&&"type"!==e&&!u&&(e in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=n.M(t);o&&o.P&&e in o.P?s(t,e,i):(s(t,e,null==i?"":i),null!=i&&!1!==i||t.removeAttribute(e))}else null!=i&&(r=e!==(e=e.replace(/^xlink\:?/,"")),1!==un[e]||i&&"false"!==i?"function"!=typeof i&&(r?t.setAttributeNS(rn,W(e),i):t.setAttribute(e,i)):r?t.removeAttributeNS(rn,W(e)):t.removeAttribute(e));else{e=W(e).substring(2);const u=t.o=t.o||{};i?o||(u[e]=c(n,t,e,i)):u[e]&&u[e]()}else if(o!==i){const n=null==o||""===o?on:o.trim().split(/\s+/),e=null==i||""===i?on:i.trim().split(/\s+/);let c=null==t.className||""===t.className?on:t.className.trim().split(/\s+/);for(r=0,f=n.length;r<f;r++)-1===e.indexOf(n[r])&&(c=c.filter(t=>t!==n[r]));for(r=0,f=e.length;r<f;r++)-1===n.indexOf(e[r])&&(c=[...c,e[r]]);t.className=c.join(" ")}}function s(n,t,e){try{n[t]=e}catch(n){}}function a(n,t){function e(o,i,c){let u=0;if("function"==typeof o.S&&(o=o.S(Object.assign({},o.A,{B:o.R}))),U(o.q))o.k=t.s(o.q);else{const i=o.k=fn||"svg"===o.S?t.l("http://www.w3.org/2000/svg",o.S):t.f(o.S);fn="svg"===o.S||"foreignObject"!==o.S&&fn,f(n,null,o,fn),null!==d&&i.D!==d&&t.N(i,i.D=d,"");const c=o.R;if(c){let n;for(;u<c.length;++u)(n=e(c[u],i,u))&&t.v(i,n)}}return o.k}function o(n,o,i,c,u){const r=n.$defaultHolder&&t.b(n.$defaultHolder)||n;let f;for(;c<=u;++c){var l=i[c];U(l)&&(f=U(l.q)?t.s(l.q):e(l,n,c),U(f)&&(l.k=f,t.d(r,f,o)))}}function i(n,e,o,i){for(;o<=i;++o)U(e[o])&&t.m(n,e[o].k)}function c(n,c,f){let s,a,d,m,v=0,p=0,b=c.length-1,h=c[0],y=c[b],$=f.length-1,g=f[0],w=f[$];for(;v<=b&&p<=$;)null==h?h=c[++v]:null==y?y=c[--b]:null==g?g=f[++p]:null==w?w=f[--$]:u(h,g)?(l(h,g),h=c[++v],g=f[++p]):u(y,w)?(l(y,w),y=c[--b],w=f[--$]):u(h,w)?(l(h,w),t.d(n,h.k,t.h(y.k)),h=c[++v],w=f[--$]):u(y,g)?(l(y,g),t.d(n,y.k,h.k),y=c[--b],g=f[++p]):(V(s)&&(s=r(c,v,b)),a=s[g.H],V(a)?(m=e(g,n,p),g=f[++p]):((d=c[a]).S!==g.S?m=e(g,n,a):(l(d,g),c[a]=void 0,m=d.k),g=f[++p]),m&&t.d(n,m,h.k));v>b?o(n,null==f[$+1]?null:f[$+1].k,f,p,$):p>$&&i(n,c,v,b)}function u(n,t){return n.S===t.S&&n.H===t.H}function r(n,t,e){let o,i,c,u={};for(o=t;o<=e;++o)null!=(c=n[o])&&void 0!==(i=c.H)&&(u.I=o);return u}function l(e,u){const r=u.k=e.k,l=e.R,s=u.R;if(fn=u.k&&null!=u.k.parentElement&&void 0!==u.k.L,fn="svg"===u.S||"foreignObject"!==u.S&&fn,V(u.q))"slot"!==u.S&&f(n,e,u,fn),U(l)&&U(s)?c(r,l,s):U(s)?(U(e.q)&&t.w(r,""),o(r,null,s,0,s.length-1)):U(l)&&i(r,l,0,l.length-1);else if(r.z&&r.z.F){let n=r.z.F[0].parentElement;t.w(n,u.q),r.z.F=[n.childNodes[0]]}else e.q!==u.q&&t.w(r,u.q)}let s,a,d;return function n(e,o,i,c,u,r){return s=i,a=c,d=2===u||1===u&&!t.Z?"data-"+t.y(e.k):null,s||d&&t.N(e.k,d+"-host",""),l(e,o),o}}function d(n,t){n&&(n._&&n._(t?null:n.k),n.R&&n.R.forEach(n=>{d(n,t)}))}function m(n,t,e){for(var o,i=!1,c=!1,u=arguments.length;u-- >2;)sn.push(arguments[u]);for(;sn.length;)if((e=sn.pop())&&void 0!==e.pop)for(u=e.length;u--;)sn.push(e[u]);else"boolean"==typeof e&&(e=null),(c="function"!=typeof n)&&(null==e?e="":"number"==typeof e?e=String(e):"string"!=typeof e&&(c=!1)),c&&i?o[o.length-1].q+=e:void 0===o?o=[c?v(e):e]:o.push(c?v(e):e),i=c;const r=new ln;if(r.S=n,r.R=o,t&&(r.A=t,r.H=t.G,r._=t.J,t.className&&(t.class=t.className),"object"==typeof t.class)){for(u in t.class)t.class[u]&&sn.push(u);t.class=sn.join(" "),sn.length=0}return r}function v(n){const t=new ln;return t.q=n,t}function p(n,t){var e,o,i,c,u,r,f=t.querySelectorAll(`[${nn}]`),l=f.length;if(t.K=l>0)for(c=0;c<l;c++)for(e=f[c],o=n.C(e,nn),(i=e.Q=new ln).S=n.y(i.k=e),u=0,r=e.childNodes.length;u<r;u++)b(n,e.childNodes[u],i,o,!0)}function b(n,t,e,o,i){var c,u,r,f,l=n.r(t);if(i&&1===l){(u=n.C(t,tn))&&(r=u.split("."))[0]===o&&((f=new ln).S=n.y(f.k=t),e.R||(e.R=[]),e.R[r[1]]=f,e=f,i=""!==r[2]);for(var s=0;s<t.childNodes.length;s++)b(n,t.childNodes[s],e,o,i)}else 3===l&&(c=t.previousSibling)&&8===n.r(c)&&"s"===(r=n.g(c).split("."))[0]&&r[1]===o&&((f=v(n.g(t))).k=t,e.R||(e.R=[]),e.R[r[2]]=f)}function h(n,t,e,o){function i(){for(;f.length>0;)f.shift()();e=!1}function c(e){for(e=t(),i();l.length>0&&t()-e<40;)l.shift()();(o=l.length>0)&&n(u)}function u(e){for(i(),e=4+t();l.length>0&&t()<e;)l.shift()();(o=l.length>0)&&n(c)}const r=Promise.resolve(),f=[],l=[];return{add:(t,u)=>{3===u?(f.push(t),e||(e=!0,r.then(i))):(l.push(t),o||(o=!0,n(c)))}}}function y(n,t,e){const o={U:n[0],P:{mode:{V:1},color:{V:1,W:"color"}}};return o.X=n[1],g(o,n[3],e),o.Y=n[4],o.nn=n[5],n[6]&&(o.tn=n[6].map($)),o.en=n[7],t[o.U]=o}function $(n){return{on:n[0],in:n[1],cn:!!n[2],un:!!n[3],rn:!!n[4]}}function g(n,t,e){if(t){n.P=n.P||{};for(var o=0;o<t.length;o++){var i=t[o];n.P[i[0]]={V:i[1],W:i[2]?1===e?W(i[0]):X(i[0]):0,fn:i[3],ln:i[4]}}}}function w(n,t,e,o){const i=n[e[0]];i.sn=t[e[0]],g(i,e[1],o),i.an=e[2],e[3]&&(i.dn=e[3].map(C)),i.mn=e[4],i.vn=e[5]}function C(n){return{on:n[0],in:n[1]||n[0],pn:!n[2],bn:!n[3],hn:!n[4]}}function N(n,t){if(U(t)){if(3===n)return"false"!==t&&(""===t||!!t);if(4===n)return parseFloat(t)}return t}function j(n,t,e,o,i,c){if(o!==i&&n){e=W(e);for(c in n)if(n[c].W===e){t[c]=N(n[c].fn,i);break}}}function T(n,t,e){t&&Object.keys(t).forEach(o=>{const i=t[o].V;1===i||2===i?M(e,o,function n(){return(this.yn=this.yn||{})[o]},function t(e){E(n,this,o,e)}):6===i&&A(e,o,Y)})}function O(n,t,e,o){o.$n=e,e.yn=e.yn||{},t.P&&Object.keys(t.P).forEach(i=>{x(n,t,e,o,i)})}function x(n,t,e,o,i){const c=t.P[i],u=c.V;if(1===u||5===u||2===u){if(5!==u){if(c.W&&(void 0===e.yn[i]||""===e.yn[i])){const n=e.getAttribute(c.W);null!=n&&(e.yn[i]=N(c.fn,n))}e.hasOwnProperty(i)&&(void 0===e.yn[i]&&(e.yn[i]=e[i]),n.isClient&&delete e[i])}o.hasOwnProperty(i)&&void 0===e.yn[i]&&(e.yn[i]=o[i]),M(o,i,function r(){const n=this.$n;return n&&n.yn&&n.yn[i]},function f(t){const e=this.$n;1!==u&&E(n,e,i,t)}),k(t.mn,an,e,o,i)}}function k(n,t,e,o,i){const c=n&&n.find(n=>n[0]===i);c&&(e.yn[t+i]=o[c[1]].bind(o))}function E(n,t,e,o){const i=t.yn=t.yn||{},c=i[e];o!==c&&(i[e]=o,i[dn+e]&&i[dn+e](o,c),t.gn&&!n.wn&&I(n,t))}function A(n,t,e){Object.defineProperty(n,t,{configurable:!0,value:e})}function M(n,t,e,o){Object.defineProperty(n,t,{configurable:!0,get:e,set:o})}function P(n,t,e){return{create:B(n,t,e,"create"),componentOnReady:B(n,t,e,"componentOnReady")}}function S(n,t,e){return new Promise(o=>{let i=t[e];i||(i=n.u.querySelector(e)),i||(i=t[e]=n.f(e),n.v(n.u,i)),i.componentOnReady(o)})}function B(n,t,e,o){return function(){const i=arguments;return S(n,t,e).then(n=>n[o].apply(n,i))}}function R(n,t,e){try{e=n.M(t),t.gn=new e.sn,O(n,e,t,t.gn)}catch(e){t.gn={},n.Cn(e,7,t,!0)}}function q(n,t,e){if(t.gn&&!t.Nn&&(!t.$activeLoading||!t.$activeLoading.length)){t.$activeLoading=null,t.K=!0;try{t.jn&&(t.jn.forEach(n=>n(t)),t.jn=null),d(t.Q)}catch(e){n.Cn(e,4,t)}t.classList.add(e),D(t)}}function D(n,t,e){n.Tn&&((e=n.Tn.$activeLoading)&&((t=e.indexOf(n))>-1&&e.splice(t,1),!e.length&&n.Tn.$initLoad()),n.Tn=null)}function H(n,t,e,o){const i=t.gn,c=e.an;if(i.render||i.hostData||c){n.wn=!0;const c=i.render&&i.render();n.wn=!1;const u=t.Q||new ln;u.k=t,t.Q=n.render(u,m(null,void 0,c),o,t.z,e.Y)}n.On(e,i.mode,t),t.$rendered=!0,t.$onRender&&(t.$onRender.forEach(n=>n()),t.$onRender=null)}function I(n,t){t.xn||(t.xn=!0,n.kn.add(()=>{t.xn=!1,L(n,t)}))}function L(n,t){if(!t.Nn){const e=!t.gn;let o;if(e){const e=t.Tn;if(e&&!e.$rendered)return void(e.$onRender=e.$onRender||[]).push(()=>{L(n,t)});R(n,t);try{t.gn.componentWillLoad&&(o=t.gn.componentWillLoad())}catch(e){n.Cn(e,3,t)}}o&&o.then?o.then(()=>z(n,t,e)):z(n,t,e)}}function z(n,t,e){try{H(n,t,n.M(t),!e)}catch(e){n.Cn(e,8,t,!0)}try{e&&t.$initLoad()}catch(e){n.Cn(e,6,t,!0)}}function F(n,t,e){e.$connected||(e.$connected=!0,e.Nn=null,Z(n,e),n.kn.add(()=>{n.En(t,e),n.An(t,e,()=>I(n,e))},3))}function Z(n,t,e){for(e=t;e=n.t.x(e);)if(n.Mn(e)){e.K||(t.Tn=e,(e.$activeLoading=e.$activeLoading||[]).push(t));break}}function _(n,t){!n.Pn&&G(n.t,t)&&(t.Nn=!0,D(t),d(t.Q,!0),u(t),t.gn&&(t.gn=t.gn.$n=null),t.$activeLoading=t.$connected=t.$defaultHolder=t.Sn=t.yn=t.Q=t.Tn=t.K=t.xn=t.Bn=null)}function G(n,t){for(;t;){if(!n.b(t))return 9!==n.r(t);t=n.b(t)}}function J(n,t,e,o){e.connectedCallback=function(){F(n,t,this)},e.attributeChangedCallback=function(n,e,o){j(t.P,this,n,e,o)},e.disconnectedCallback=function(){_(n,this)},e.componentOnReady=function(n,t){return n||(t=new Promise(t=>n=t)),K(this,n),t},e.$initLoad=function(){q(n,this,o)},T(n,t.P,e)}function K(n,t){n.Nn||(n.K?t(n):(n.jn=n.jn||[]).push(t))}function Q(n,t){return 2===t.Y||1===t.Y&&!n}const U=n=>void 0!==n&&null!==n,V=n=>void 0===n||null===n,W=n=>n.toLowerCase(),X=n=>n.replace(/([A-Z])/g,n=>"-"+W(n[0])),Y=()=>{},nn="data-ssrv",tn="data-ssrc",en={},on=[],cn={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},un={allowfullscreen:1,async:1,autofocus:1,autoplay:1,checked:1,controls:1,disabled:1,enabled:1,formnovalidate:1,hidden:1,multiple:1,noresize:1,readonly:1,required:1,selected:1,spellcheck:1},rn="http://www.w3.org/1999/xlink";let fn=!1;class ln{}const sn=[],an="$$wc",dn="$$dc",mn=n[o]=n[o]||{},vn=function pn(t,e,o,i,c,u){function f(n,t,e,o,i){function u(){clearTimeout(o),i.onerror=i.onload=null,C.m(C.b(i),i),$[e]=!1}e=c+t+(Q(C.Z,n)?".sc":"")+".js",$[e]||($[e]=!0,(i=C.f("script")).charset="utf-8",i.async=!0,i.src=e,o=setTimeout(u,12e4),i.onerror=i.onload=u,C.v(C.c,i))}const l={html:{}},s={},d={},v={},b={},$={},g={},C=r(o,i);t.isServer=t.isPrerender=!(t.isClient=!0),t.window=o,t.location=o.location,t.document=i;const N=o.Rn=o.Rn||{},j={En:function T(n,e){e.mode||(e.mode=C.C(e,"mode")||t.mode),C.Z||1!==n.Y||(e.shadowRoot=e)},t:C,qn:function O(n,t){const e=n.U;if(!N[e]){N[e]=!0,J(j,n,t.prototype,u);{const e=[];for(var i in n.P)n.P[i].W&&e.push(n.P[i].W);t.observedAttributes=e}o.customElements.define(e,t)}},Dn:t.emit,M:n=>l[C.y(n)],Hn:n=>t[n],isClient:!0,Mn:n=>!(!N[C.y(n)]&&!j.M(n)),An:function x(n,t,e,o){o=(n.X[t.mode]||n.X)[0],v[o]?e():((d[o]=d[o]||[]).push(e),f(n,o))},Cn:(n,t,e)=>void 0,In:n=>P(C,g,n),kn:h(t=>n.requestAnimationFrame(t),()=>o.performance.now()),Ln:n=>(n||[]).map(n=>y(n,l))};j.render=a(j,C);const k=C.i;return k.$rendered=!0,k.$activeLoading=[],k.$initLoad=(()=>k.K=!0),p(C,k),e.loadComponents=function n(e,o){const i=arguments;o(s,m,t,c);for(var u=2;u<i.length;u++)w(l,s,i[u]);var r=d[e];if(r){for(u=0;u<r.length;u++)r[u]();d[e]=null}v[e]=!0},e.loadStyles=function n(){const t=arguments;let e;for(var o=0;o<t.length;o+=2)b[t[o]]=e=C.f("template"),e.innerHTML=`<style>${t[o+1]}</style>`,e.id=`tmp-${t[o]}`,C.v(C.c,e)},j.On=((n,t,e)=>{{const o=b[n.U+"_"+t]||b[n.U];if(o){let t=C.c;if(C.Z)if(1===n.Y)t=e.shadowRoot;else for(;e=C.b(e);)if(e.host&&e.host.shadowRoot){t=e.host.shadowRoot;break}const i=t.zn=t.zn||{};if(!i[o.id]){const n=o.content.cloneNode(!0),e=t.querySelector("[data-visibility]");C.d(t,n,e&&e.nextSibling||t.Fn),i[o.id]=!0}}}}),j}(e,mn,n,t,i,hydratedCssClass);vn.Ln(mn.components).forEach(n=>vn.qn(n,class extends HTMLElement{}))})(window,document,Context,appNamespace,publicPath);
})({},"stqrcmp","hydrated","/build/stqrcmp/");
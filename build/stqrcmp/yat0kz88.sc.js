/*! Built with http://stenciljs.com */

stqrcmp.loadStyles("qr-code","[data-qr-code-host]{background:transparent;display:flex;align-items:center;justify-content:center}[data-qr-code-host]   div[data-qr-code], [data-qr-code-host]   img[data-qr-code]{width:100%;height:100%;max-width:100%}[data-qr-code-host]   div[data-qr-code]   svg[data-qr-code], [data-qr-code-host]   img[data-qr-code]   svg[data-qr-code]{width:100%;height:100%;max-width:100%}\nqr-code.hydrated{visibility:inherit}");
stqrcmp.loadComponents("yat0kz88",function(r,t,e,n){"use strict";var o=function(r,t){return t={exports:{}},r(t,t.exports),t.exports}(function(r,t){var e=function(){function r(t,e){if(void 0===t.length)throw new Error(t.length+"/"+e);var n=function(){for(var r=0;r<t.length&&0==t[r];)r+=1;for(var n=new Array(t.length-r+e),o=0;o<t.length-r;o+=1)n[o]=t[o+r];return n}(),o={};return o.getAt=function(r){return n[r]},o.getLength=function(){return n.length},o.multiply=function(t){for(var e=new Array(o.getLength()+t.getLength()-1),n=0;n<o.getLength();n+=1)for(var a=0;a<t.getLength();a+=1)e[n+a]^=i.gexp(i.glog(o.getAt(n))+i.glog(t.getAt(a)));return r(e,0)},o.mod=function(t){if(o.getLength()-t.getLength()<0)return o;for(var e=i.glog(o.getAt(0))-i.glog(t.getAt(0)),n=new Array(o.getLength()),a=0;a<o.getLength();a+=1)n[a]=o.getAt(a);for(a=0;a<t.getLength();a+=1)n[a]^=i.gexp(i.glog(t.getAt(a))+e);return r(n,0).mod(t)},o}var t=function(t,e){var o=t,i=n[e],l=null,v=0,d=null,w=new Array,A={},y=function(r,t){l=function(r){for(var t=new Array(r),e=0;e<r;e+=1){t[e]=new Array(r);for(var n=0;n<r;n+=1)t[e][n]=null}return t}(v=4*o+17),B(0,0),B(v-7,0),B(0,v-7),T(),E(),D(r,t),o>=7&&C(r),null==d&&(d=m(o,i,w)),k(d,t)},B=function(r,t){for(var e=-1;e<=7;e+=1)if(!(r+e<=-1||v<=r+e))for(var n=-1;n<=7;n+=1)t+n<=-1||v<=t+n||(l[r+e][t+n]=0<=e&&e<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==e||6==e)||2<=e&&e<=4&&2<=n&&n<=4)},M=function(){for(var r=0,t=0,e=0;e<8;e+=1){y(!0,e);var n=a.getLostPoint(A);(0==e||r>n)&&(r=n,t=e)}return t},E=function(){for(var r=8;r<v-8;r+=1)null==l[r][6]&&(l[r][6]=r%2==0);for(var t=8;t<v-8;t+=1)null==l[6][t]&&(l[6][t]=t%2==0)},T=function(){for(var r=a.getPatternPosition(o),t=0;t<r.length;t+=1)for(var e=0;e<r.length;e+=1){var n=r[t],i=r[e];if(null==l[n][i])for(var u=-2;u<=2;u+=1)for(var f=-2;f<=2;f+=1)l[n+u][i+f]=-2==u||2==u||-2==f||2==f||0==u&&0==f}},C=function(r){for(var t=a.getBCHTypeNumber(o),e=0;e<18;e+=1){n=!r&&1==(t>>e&1);l[Math.floor(e/3)][e%3+v-8-3]=n}for(e=0;e<18;e+=1){var n=!r&&1==(t>>e&1);l[e%3+v-8-3][Math.floor(e/3)]=n}},D=function(r,t){for(var e=i<<3|t,n=a.getBCHTypeInfo(e),o=0;o<15;o+=1){u=!r&&1==(n>>o&1);o<6?l[o][8]=u:o<8?l[o+1][8]=u:l[v-15+o][8]=u}for(o=0;o<15;o+=1){var u=!r&&1==(n>>o&1);o<8?l[8][v-o-1]=u:o<9?l[8][15-o-1+1]=u:l[8][15-o-1]=u}l[v-8][8]=!r},k=function(r,t){for(var e=-1,n=v-1,o=7,i=0,u=a.getMaskFunction(t),f=v-1;f>0;f-=2)for(6==f&&(f-=1);;){for(var c=0;c<2;c+=1)if(null==l[n][f-c]){var g=!1;i<r.length&&(g=1==(r[i]>>>o&1)),u(n,f-c)&&(g=!g),l[n][f-c]=g,-1==(o-=1)&&(i+=1,o=7)}if((n+=e)<0||v<=n){n-=e,e=-e;break}}},L=function(t,e){for(var n=0,o=0,i=0,u=new Array(e.length),f=new Array(e.length),c=0;c<e.length;c+=1){var g=e[c].dataCount,h=e[c].totalCount-g;o=Math.max(o,g),i=Math.max(i,h),u[c]=new Array(g);for(w=0;w<u[c].length;w+=1)u[c][w]=255&t.getBuffer()[w+n];n+=g;var s=a.getErrorCorrectPolynomial(h),l=r(u[c],s.getLength()-1).mod(s);f[c]=new Array(s.getLength()-1);for(w=0;w<f[c].length;w+=1){var v=w+l.getLength()-f[c].length;f[c][w]=v>=0?l.getAt(v):0}}for(var d=0,w=0;w<e.length;w+=1)d+=e[w].totalCount;for(var p=new Array(d),A=0,w=0;w<o;w+=1)for(c=0;c<e.length;c+=1)w<u[c].length&&(p[A]=u[c][w],A+=1);for(w=0;w<i;w+=1)for(c=0;c<e.length;c+=1)w<f[c].length&&(p[A]=f[c][w],A+=1);return p},m=function(r,t,e){for(var n=u.getRSBlocks(r,t),o=f(),i=0;i<e.length;i+=1){var c=e[i];o.put(c.getMode(),4),o.put(c.getLength(),a.getLengthInBits(c.getMode(),r)),c.write(o)}for(var g=0,i=0;i<n.length;i+=1)g+=n[i].dataCount;if(o.getLengthInBits()>8*g)throw new Error("code length overflow. ("+o.getLengthInBits()+">"+8*g+")");for(o.getLengthInBits()+4<=8*g&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;;){if(o.getLengthInBits()>=8*g)break;if(o.put(236,8),o.getLengthInBits()>=8*g)break;o.put(17,8)}return L(o,n)};return A.addData=function(r,t){var e=null;switch(t=t||"Byte"){case"Numeric":e=c(r);break;case"Alphanumeric":e=g(r);break;case"Byte":e=h(r);break;case"Kanji":e=s(r);break;default:throw"mode:"+t}w.push(e),d=null},A.isDark=function(r,t){if(r<0||v<=r||t<0||v<=t)throw new Error(r+","+t);return l[r][t]},A.getModuleCount=function(){return v},A.make=function(){if(o<1){for(var r=1;r<40;r++){for(var t=u.getRSBlocks(r,i),e=f(),n=0;n<w.length;n++){var c=w[n];e.put(c.getMode(),4),e.put(c.getLength(),a.getLengthInBits(c.getMode(),r)),c.write(e)}for(var g=0,n=0;n<t.length;n++)g+=t[n].dataCount;if(e.getLengthInBits()<=8*g)break}o=r}y(!1,M())},A.createTableTag=function(r,t){r=r||2;var e="";e+='<table style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: "+(t=void 0===t?4*r:t)+"px;",e+='">',e+="<tbody>";for(var n=0;n<A.getModuleCount();n+=1){e+="<tr>";for(var o=0;o<A.getModuleCount();o+=1)e+='<td style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: 0px;",e+=" width: "+r+"px;",e+=" height: "+r+"px;",e+=" background-color: ",e+=A.isDark(n,o)?"#000000":"#ffffff",e+=";",e+='"/>';e+="</tr>"}return e+="</tbody>",e+="</table>"},A.createSvgTag=function(r,t){r=r||2,t=void 0===t?4*r:t;var e,n,o,a,i=A.getModuleCount()*r+2*t,u="";for(a="l"+r+",0 0,"+r+" -"+r+",0 0,-"+r+"z ",u+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',u+=' width="'+i+'px"',u+=' height="'+i+'px"',u+=' viewBox="0 0 '+i+" "+i+'" ',u+=' preserveAspectRatio="xMinYMin meet">',u+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',u+='<path d="',n=0;n<A.getModuleCount();n+=1)for(o=n*r+t,e=0;e<A.getModuleCount();e+=1)A.isDark(n,e)&&(u+="M"+(e*r+t)+","+o+a);return u+='" stroke="transparent" fill="black"/>',u+="</svg>"},A.createImgTag=function(r,t){r=r||2,t=void 0===t?4*r:t;var e=A.getModuleCount()*r+2*t,n=t,o=e-t;return p(e,e,function(t,e){if(n<=t&&t<o&&n<=e&&e<o){var a=Math.floor((t-n)/r),i=Math.floor((e-n)/r);return A.isDark(i,a)?0:1}return 1})},A};t.stringToBytes=(t.stringToBytesFuncs={default:function(r){for(var t=[],e=0;e<r.length;e+=1){var n=r.charCodeAt(e);t.push(255&n)}return t}}).default,t.createStringToBytes=function(r,t){var e=function(){for(var e=d(r),n=function(){var r=e.read();if(-1==r)throw new Error;return r},o=0,a={};;){var i=e.read();if(-1==i)break;var u=n(),f=n()<<8|n();a[String.fromCharCode(i<<8|u)]=f,o+=1}if(o!=t)throw new Error(o+" != "+t);return a}(),n="?".charCodeAt(0);return function(r){for(var t=new Array,o=0;o<r.length;o+=1){var a=r.charCodeAt(o);if(a<128)t.push(a);else{var i=e[r.charAt(o)];"number"==typeof i?(255&i)==i?t.push(i):(t.push(i>>>8),t.push(255&i)):t.push(n)}}return t}};var e={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},n={L:1,M:0,Q:3,H:2},o={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},a=function(){var t=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],n={},a=function(r){for(var t=0;0!=r;)t+=1,r>>>=1;return t};return n.getBCHTypeInfo=function(r){for(var t=r<<10;a(t)-a(1335)>=0;)t^=1335<<a(t)-a(1335);return 21522^(r<<10|t)},n.getBCHTypeNumber=function(r){for(var t=r<<12;a(t)-a(7973)>=0;)t^=7973<<a(t)-a(7973);return r<<12|t},n.getPatternPosition=function(r){return t[r-1]},n.getMaskFunction=function(r){switch(r){case o.PATTERN000:return function(r,t){return(r+t)%2==0};case o.PATTERN001:return function(r,t){return r%2==0};case o.PATTERN010:return function(r,t){return t%3==0};case o.PATTERN011:return function(r,t){return(r+t)%3==0};case o.PATTERN100:return function(r,t){return(Math.floor(r/2)+Math.floor(t/3))%2==0};case o.PATTERN101:return function(r,t){return r*t%2+r*t%3==0};case o.PATTERN110:return function(r,t){return(r*t%2+r*t%3)%2==0};case o.PATTERN111:return function(r,t){return(r*t%3+(r+t)%2)%2==0};default:throw new Error("bad maskPattern:"+r)}},n.getErrorCorrectPolynomial=function(t){for(var e=r([1],0),n=0;n<t;n+=1)e=e.multiply(r([1,i.gexp(n)],0));return e},n.getLengthInBits=function(r,t){if(1<=t&&t<10)switch(r){case e.MODE_NUMBER:return 10;case e.MODE_ALPHA_NUM:return 9;case e.MODE_8BIT_BYTE:case e.MODE_KANJI:return 8;default:throw new Error("mode:"+r)}else if(t<27)switch(r){case e.MODE_NUMBER:return 12;case e.MODE_ALPHA_NUM:return 11;case e.MODE_8BIT_BYTE:return 16;case e.MODE_KANJI:return 10;default:throw new Error("mode:"+r)}else{if(!(t<41))throw new Error("type:"+t);switch(r){case e.MODE_NUMBER:return 14;case e.MODE_ALPHA_NUM:return 13;case e.MODE_8BIT_BYTE:return 16;case e.MODE_KANJI:return 12;default:throw new Error("mode:"+r)}}},n.getLostPoint=function(r){for(var t=r.getModuleCount(),e=0,n=0;n<t;n+=1)for(g=0;g<t;g+=1){for(var o=0,a=r.isDark(n,g),i=-1;i<=1;i+=1)if(!(n+i<0||t<=n+i))for(var u=-1;u<=1;u+=1)g+u<0||t<=g+u||0==i&&0==u||a==r.isDark(n+i,g+u)&&(o+=1);o>5&&(e+=3+o-5)}for(n=0;n<t-1;n+=1)for(g=0;g<t-1;g+=1){var f=0;r.isDark(n,g)&&(f+=1),r.isDark(n+1,g)&&(f+=1),r.isDark(n,g+1)&&(f+=1),r.isDark(n+1,g+1)&&(f+=1),0!=f&&4!=f||(e+=3)}for(n=0;n<t;n+=1)for(g=0;g<t-6;g+=1)r.isDark(n,g)&&!r.isDark(n,g+1)&&r.isDark(n,g+2)&&r.isDark(n,g+3)&&r.isDark(n,g+4)&&!r.isDark(n,g+5)&&r.isDark(n,g+6)&&(e+=40);for(g=0;g<t;g+=1)for(n=0;n<t-6;n+=1)r.isDark(n,g)&&!r.isDark(n+1,g)&&r.isDark(n+2,g)&&r.isDark(n+3,g)&&r.isDark(n+4,g)&&!r.isDark(n+5,g)&&r.isDark(n+6,g)&&(e+=40);for(var c=0,g=0;g<t;g+=1)for(n=0;n<t;n+=1)r.isDark(n,g)&&(c+=1);return e+=10*(Math.abs(100*c/t/t-50)/5)},n}(),i=function(){for(var r=new Array(256),t=new Array(256),e=0;e<8;e+=1)r[e]=1<<e;for(e=8;e<256;e+=1)r[e]=r[e-4]^r[e-5]^r[e-6]^r[e-8];for(e=0;e<255;e+=1)t[r[e]]=e;var n={};return n.glog=function(r){if(r<1)throw new Error("glog("+r+")");return t[r]},n.gexp=function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return r[t]},n}(),u=function(){var r=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],t=function(r,t){var e={};return e.totalCount=r,e.dataCount=t,e},e={},o=function(t,e){switch(e){case n.L:return r[4*(t-1)+0];case n.M:return r[4*(t-1)+1];case n.Q:return r[4*(t-1)+2];case n.H:return r[4*(t-1)+3];default:return}};return e.getRSBlocks=function(r,e){var n=o(r,e);if(void 0===n)throw new Error("bad rs block @ typeNumber:"+r+"/errorCorrectionLevel:"+e);for(var a=n.length/3,i=new Array,u=0;u<a;u+=1)for(var f=n[3*u+0],c=n[3*u+1],g=n[3*u+2],h=0;h<f;h+=1)i.push(t(c,g));return i},e}(),f=function(){var r=new Array,t=0,e={};return e.getBuffer=function(){return r},e.getAt=function(t){var e=Math.floor(t/8);return 1==(r[e]>>>7-t%8&1)},e.put=function(r,t){for(var n=0;n<t;n+=1)e.putBit(1==(r>>>t-n-1&1))},e.getLengthInBits=function(){return t},e.putBit=function(e){var n=Math.floor(t/8);r.length<=n&&r.push(0),e&&(r[n]|=128>>>t%8),t+=1},e},c=function(r){var t=e.MODE_NUMBER,n=r,o={};o.getMode=function(){return t},o.getLength=function(r){return n.length},o.write=function(r){for(var t=n,e=0;e+2<t.length;)r.put(a(t.substring(e,e+3)),10),e+=3;e<t.length&&(t.length-e==1?r.put(a(t.substring(e,e+1)),4):t.length-e==2&&r.put(a(t.substring(e,e+2)),7))};var a=function(r){for(var t=0,e=0;e<r.length;e+=1)t=10*t+i(r.charAt(e));return t},i=function(r){if("0"<=r&&r<="9")return r.charCodeAt(0)-"0".charCodeAt(0);throw"illegal char :"+r};return o},g=function(r){var t=e.MODE_ALPHA_NUM,n=r,o={};o.getMode=function(){return t},o.getLength=function(r){return n.length},o.write=function(r){for(var t=n,e=0;e+1<t.length;)r.put(45*a(t.charAt(e))+a(t.charAt(e+1)),11),e+=2;e<t.length&&r.put(a(t.charAt(e)),6)};var a=function(r){if("0"<=r&&r<="9")return r.charCodeAt(0)-"0".charCodeAt(0);if("A"<=r&&r<="Z")return r.charCodeAt(0)-"A".charCodeAt(0)+10;switch(r){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+r}};return o},h=function(r){var n=e.MODE_8BIT_BYTE,o=t.stringToBytes(r),a={};return a.getMode=function(){return n},a.getLength=function(r){return o.length},a.write=function(r){for(var t=0;t<o.length;t+=1)r.put(o[t],8)},a},s=function(r){var n=e.MODE_KANJI,o=t.stringToBytesFuncs.SJIS;if(!o)throw"sjis not supported.";!function(r,t){var e=o("友");if(2!=e.length||38726!=(e[0]<<8|e[1]))throw"sjis not supported."}();var a=o(r),i={};return i.getMode=function(){return n},i.getLength=function(r){return~~(a.length/2)},i.write=function(r){for(var t=a,e=0;e+1<t.length;){var n=(255&t[e])<<8|255&t[e+1];if(33088<=n&&n<=40956)n-=33088;else{if(!(57408<=n&&n<=60351))throw"illegal char at "+(e+1)+"/"+n;n-=49472}n=192*(n>>>8&255)+(255&n),r.put(n,13),e+=2}if(e<t.length)throw"illegal char at "+(e+1)},i},l=function(){var r=new Array,t={};return t.writeByte=function(t){r.push(255&t)},t.writeShort=function(r){t.writeByte(r),t.writeByte(r>>>8)},t.writeBytes=function(r,e,n){e=e||0,n=n||r.length;for(var o=0;o<n;o+=1)t.writeByte(r[o+e])},t.writeString=function(r){for(var e=0;e<r.length;e+=1)t.writeByte(r.charCodeAt(e))},t.toByteArray=function(){return r},t.toString=function(){var t="";t+="[";for(var e=0;e<r.length;e+=1)e>0&&(t+=","),t+=r[e];return t+="]"},t},v=function(){var r=0,t=0,e=0,n="",o={},a=function(r){n+=String.fromCharCode(i(63&r))},i=function(r){if(r<0);else{if(r<26)return 65+r;if(r<52)return r-26+97;if(r<62)return r-52+48;if(62==r)return 43;if(63==r)return 47}throw new Error("n:"+r)};return o.writeByte=function(n){for(r=r<<8|255&n,t+=8,e+=1;t>=6;)a(r>>>t-6),t-=6},o.flush=function(){if(t>0&&(a(r<<6-t),r=0,t=0),e%3!=0)for(var o=3-e%3,i=0;i<o;i+=1)n+="="},o.toString=function(){return n},o},d=function(r){var t=r,e=0,n=0,o=0,a={};a.read=function(){for(;o<8;){if(e>=t.length){if(0==o)return-1;throw new Error("unexpected end of file./"+o)}var r=t.charAt(e);if(e+=1,"="==r)return o=0,-1;r.match(/^\s$/)||(n=n<<6|i(r.charCodeAt(0)),o+=6)}var a=n>>>o-8&255;return o-=8,a};var i=function(r){if(65<=r&&r<=90)return r-65;if(97<=r&&r<=122)return r-97+26;if(48<=r&&r<=57)return r-48+52;if(43==r)return 62;if(47==r)return 63;throw new Error("c:"+r)};return a},w=function(r,t){var e=r,n=t,o=new Array(r*t),a={};a.setPixel=function(r,t,n){o[t*e+r]=n},a.write=function(r){r.writeString("GIF87a"),r.writeShort(e),r.writeShort(n),r.writeByte(128),r.writeByte(0),r.writeByte(0),r.writeByte(0),r.writeByte(0),r.writeByte(0),r.writeByte(255),r.writeByte(255),r.writeByte(255),r.writeString(","),r.writeShort(0),r.writeShort(0),r.writeShort(e),r.writeShort(n),r.writeByte(0);var t=u(2);r.writeByte(2);for(var o=0;t.length-o>255;)r.writeByte(255),r.writeBytes(t,o,255),o+=255;r.writeByte(t.length-o),r.writeBytes(t,o,t.length-o),r.writeByte(0),r.writeString(";")};var i=function(r){var t=r,e=0,n=0,o={};return o.write=function(r,o){if(r>>>o!=0)throw new Error("length over");for(;e+o>=8;)t.writeByte(255&(r<<e|n)),o-=8-e,r>>>=8-e,n=0,e=0;n|=r<<e,e+=o},o.flush=function(){e>0&&t.writeByte(n)},o},u=function(r){for(var t=1<<r,e=1+(1<<r),n=r+1,a=f(),u=0;u<t;u+=1)a.add(String.fromCharCode(u));a.add(String.fromCharCode(t)),a.add(String.fromCharCode(e));var c=l(),g=i(c);g.write(t,n);var h=0,s=String.fromCharCode(o[h]);for(h+=1;h<o.length;){var v=String.fromCharCode(o[h]);h+=1,a.contains(s+v)?s+=v:(g.write(a.indexOf(s),n),a.size()<4095&&(a.size()==1<<n&&(n+=1),a.add(s+v)),s=v)}return g.write(a.indexOf(s),n),g.write(e,n),g.flush(),c.toByteArray()},f=function(){var r={},t=0,e={};return e.add=function(n){if(e.contains(n))throw new Error("dup key:"+n);r[n]=t,t+=1},e.size=function(){return t},e.indexOf=function(t){return r[t]},e.contains=function(t){return void 0!==r[t]},e};return a},p=function(r,t,e,n){for(var o=w(r,t),a=0;a<t;a+=1)for(var i=0;i<r;i+=1)o.setPixel(i,a,e(i,a));var u=l();o.write(u);for(var f=v(),c=u.toByteArray(),g=0;g<c.length;g+=1)f.writeByte(c[g]);f.flush();var h="";return h+="<img",h+=' src="',h+="data:image/gif;base64,",h+=f,h+='"',h+=' width="',h+=r,h+='"',h+=' height="',h+=t,h+='"',n&&(h+=' alt="',h+=n,h+='"'),h+="/>"};return t}();e.stringToBytesFuncs["UTF-8"]=function(r){return function(r){for(var t=[],e=0;e<r.length;e++){var n=r.charCodeAt(e);n<128?t.push(n):n<2048?t.push(192|n>>6,128|63&n):n<55296||n>=57344?t.push(224|n>>12,128|n>>6&63,128|63&n):(e++,n=65536+((1023&n)<<10|1023&r.charCodeAt(e)),t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n))}return t}(r)},function(t){r.exports=t()}(function(){return e})});class a{constructor(){this.contents="Hello World",this.errorCorrectionLevel="H",this.margin=4,this.scale=4,this.colorDark="#000000ff",this.colorLight="#ffffffff",this.outputMode="DataURI"}componentWillLoad(){this.computeAndSetData(this.contents,this.outputMode)}computeAndSetData(r,t){const e=o(0,this.errorCorrectionLevel);e.addData(r),e.make(),this.data="DataURI"===t?e.createImgTag():"SVG"===t?e.createSvgTag():"Table"===t?e.createTableTag():null}changeOutputModeHandler(r){this.computeAndSetData(this.contents,r)}changeContentsHandler(r){console.log("contents changed",r),this.computeAndSetData(r,this.outputMode)}changeErrorCorrectionLevelHandler(){this.computeAndSetData(this.contents,this.outputMode)}stencil008_5_Workaround(){}render(){return t("div",{innerHTML:this.data})}}r["qr-code"]=a},["qr-code",[["colorDark",1,1,2],["colorLight",1,1,2],["contents",1,1,2],["data",5,0,1],["errorCorrectionLevel",1,1,2],["margin",1,1,4],["outputMode",1,1,2],["scale",1,1,4]],{},0,[["contents","stencil008_5_Workaround"],["outputMode","stencil008_5_Workaround"],["errorCorrectionLevel","stencil008_5_Workaround"]],[["outputMode","changeOutputModeHandler"],["contents","changeContentsHandler"],["errorCorrectionLevel","changeErrorCorrectionLevelHandler"]]]);;
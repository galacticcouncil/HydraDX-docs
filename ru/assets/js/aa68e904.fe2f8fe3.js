(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[570],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return o}});var a=n(2263),r=n(3919);function i(){var e=(0,a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,l=void 0!==o&&o,c=i.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(l)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+d:d}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},2824:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=(n(4996),{id:"node_setup",title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0443\u0437\u043b\u0430 HydraDX"}),l={unversionedId:"node_setup",id:"node_setup",isDocsHomePage:!1,title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0443\u0437\u043b\u0430 HydraDX",description:"\u0412 \u044d\u0442\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u0432\u044b \u043f\u043e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u0435\u0441\u044c \u0441 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u043c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0443\u0437\u043b\u0430 HydraDX.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/node_setup.md",sourceDirName:".",slug:"/node_setup",permalink:"/ru/node_setup",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/node_setup.md",version:"current",frontMatter:{id:"node_setup",title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0443\u0437\u043b\u0430 HydraDX"},sidebar:"sidebar",previous:{title:"\u041d\u0430\u0433\u0440\u0430\u0434\u044b \u0437\u0430 \u0441\u0442\u0435\u0439\u043a\u0438\u043d\u0433",permalink:"/ru/staking_rewards"},next:{title:"\u0422\u0435\u0441\u0442 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",permalink:"/ru/performance_benchmark"}},c=[{value:"00 \u0422\u0440\u0435\u0431\u0443\u0435\u043c\u044b\u0435 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438",id:"00-required-technical-specifications",children:[]},{value:"01 \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435, \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u043b\u0438 \u0432\u0430\u0448\u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0435 \u0447\u0430\u0441\u044b",id:"01-check-whether-your-system-clock-is-synchronized",children:[]},{value:"02 \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0431\u0440\u0430\u043d\u0434\u043c\u0430\u0443\u044d\u0440\u0430",id:"02-adjust-your-firewall-settings",children:[]},{value:"03 \u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0438\u043b\u0438 \u0441\u043e\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439 \u0444\u0430\u0439\u043b",id:"03-download-or-build-a-binary",children:[]},{value:"04 \u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439 \u0444\u0430\u0439\u043b",id:"04-run-the-binary",children:[]},{value:"05 \u0417\u0430\u043f\u0443\u0441\u043a \u0441 systemd",id:"05-running-with-systemd",children:[]}],s={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u0412 \u044d\u0442\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u0432\u044b \u043f\u043e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u0435\u0441\u044c \u0441 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u043c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0443\u0437\u043b\u0430 HydraDX."),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u0414\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0443\u0437\u043b\u0430 \u0432\u0430\u043b\u0438\u0434\u0430\u0442\u043e\u0440\u0430 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0439 \u043d\u0430\u0431\u043e\u0440 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043d\u0430\u0432\u044b\u043a\u043e\u0432, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445 \u0434\u043b\u044f \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0439 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0443\u0437\u043b\u0430 \u0438 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f \u0435\u0433\u043e \u0440\u0430\u0431\u043e\u0442\u043e\u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438. \u0415\u0441\u043b\u0438 \u0432\u044b \u043d\u0435 \u0443\u0432\u0435\u0440\u0435\u043d\u044b \u0432 \u0441\u0432\u043e\u0438\u0445 \u043d\u0430\u0432\u044b\u043a\u0430\u0445 \u0432 \u044d\u0442\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438, \u043c\u044b \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u0432\u0430\u043c \u0432\u043c\u0435\u0441\u0442\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u0443\u0437\u043b\u0430 [\u043d\u0430\u0437\u043d\u0430\u0447\u0438\u0442\u044c \u0441\u0432\u043e\u0439 HDX(/start_nominating) \u043e\u043f\u044b\u0442\u043d\u043e\u043c\u0443 \u0432\u0430\u043b\u0438\u0434\u0430\u0442\u043e\u0440\u0443. \u0422\u0435\u043c \u0441\u0430\u043c\u044b\u043c \u0432\u044b \u0437\u0430\u0449\u0438\u0449\u0430\u0435\u0442\u0435 \u0441\u0435\u0431\u044f \u0438 \u0441\u0432\u043e\u0438\u0445 \u043d\u043e\u043c\u0438\u043d\u0430\u043d\u0442\u043e\u0432 \u043e\u0442 \u043d\u0435\u043f\u0440\u0435\u0434\u043d\u0430\u043c\u0435\u0440\u0435\u043d\u043d\u043e\u0439 \u043f\u043e\u0442\u0435\u0440\u0438 \u0441\u0440\u0435\u0434\u0441\u0442\u0432."))),(0,i.kt)("h2",{id:"00-required-technical-specifications"},"00 \u0422\u0440\u0435\u0431\u0443\u0435\u043c\u044b\u0435 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438"),(0,i.kt)("p",null,"\u0414\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0443\u0437\u043b\u0430 \u0432\u0430\u043b\u0438\u0434\u0430\u0442\u043e\u0440\u0430 HydraDX \u0442\u0440\u0435\u0431\u0443\u044e\u0442\u0441\u044f \u043a\u0430\u043a \u043c\u0438\u043d\u0438\u043c\u0443\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u041e\u0421: Ubuntu 20.04"),(0,i.kt)("li",{parentName:"ul"},"\u041f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440: Intel Core i7-7700K (\u0438\u043b\u0438 \u0438\u043c\u0435\u044e\u0449\u0438\u0439 \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u044b\u0435 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438 \u043e\u0434\u043d\u043e\u0433\u043e \u044f\u0434\u0440\u0430)"),(0,i.kt)("li",{parentName:"ul"},"\u041f\u0430\u043c\u044f\u0442\u044c: 64 \u0413\u0411 RAM"),(0,i.kt)("li",{parentName:"ul"},"\u0425\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435: \u0442\u0432\u0435\u0440\u0434\u043e\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043d\u0430\u043a\u043e\u043f\u0438\u0442\u0435\u043b\u044c NVMe \u0435\u043c\u043a\u043e\u0441\u0442\u044c\u044e \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 200 \u0413\u0411 (\u043e\u0431\u044a\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0445 \u0441\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0435\u043c \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0441\u0442\u0438)")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u042d\u0442\u043e \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0435 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f, \u043f\u0440\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439. \u0425\u043e\u0442\u0438\u0442\u0435 \u0443\u0431\u0435\u0434\u0438\u0442\u044c\u0441\u044f, \u0447\u0442\u043e \u043d\u0430 \u0432\u0430\u0448\u0435\u043c \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0435 \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432 \u0434\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0443\u0437\u043b\u0430? \u0427\u0442\u043e\u0431\u044b \u0443\u0437\u043d\u0430\u0442\u044c \u044d\u0442\u043e, \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 ",(0,i.kt)("a",{parentName:"p",href:"/performance_benchmark"},"\u0442\u0435\u0441\u0442 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438"),"."))),(0,i.kt)("h2",{id:"01-check-whether-your-system-clock-is-synchronized"},"01 \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435, \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u043b\u0438 \u0432\u0430\u0448\u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0435 \u0447\u0430\u0441\u044b"),(0,i.kt)("p",null,"\u041f\u0435\u0440\u0435\u0434 \u0437\u0430\u043f\u0443\u0441\u043a\u043e\u043c \u0443\u0437\u043b\u0430 \u0432\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0443\u0431\u0435\u0434\u0438\u0442\u044c\u0441\u044f, \u0447\u0442\u043e \u0432\u0430\u0448\u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0435 \u0447\u0430\u0441\u044b \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u044b - \u044d\u0442\u043e \u0432\u0430\u0436\u043d\u043e, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u0432\u0430\u043b\u0438\u0434\u0430\u0442\u043e\u0440\u044b \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u0432\u043c\u0435\u0441\u0442\u0435. \u0412 Ubuntu 20.04 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0435 \u0447\u0430\u0441\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e. \u0414\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0432\u044b\u0432\u043e\u0434:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ timedatectl | grep "System clock"\nSystem clock synchronized: yes\n')),(0,i.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043e\u0442\u043b\u0438\u0447\u0430\u0435\u0442\u0441\u044f, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c NTP \u0432\u0440\u0443\u0447\u043d\u0443\u044e \u0438 \u0435\u0449\u0435 \u0440\u0430\u0437 \u0443\u0431\u0435\u0434\u0438\u0442\u044c\u0441\u044f, \u0447\u0442\u043e \u0432\u0430\u0448\u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0435 \u0447\u0430\u0441\u044b \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u044b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ apt install ntp\n$ ntpq -p\n")),(0,i.kt)("h2",{id:"02-adjust-your-firewall-settings"},"02 \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0431\u0440\u0430\u043d\u0434\u043c\u0430\u0443\u044d\u0440\u0430"),(0,i.kt)("p",null,"\u041f\u043e\u0440\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"30333")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043e\u0434\u043d\u043e\u0440\u0430\u043d\u0433\u043e\u0432\u044b\u0445 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0439 \u0441 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u0443\u0437\u043b\u0430\u043c\u0438. \u0415\u0441\u043b\u0438 \u0432\u044b \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0435 \u0443\u0437\u0435\u043b \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0432\u0430\u043b\u0438\u0434\u0430\u0442\u043e\u0440\u0430, \u044d\u0442\u043e \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u043f\u043e\u0440\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u044b \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u0432\u044b\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0432 \u0432\u0430\u0448\u0435\u043c \u0431\u0440\u0430\u043d\u0434\u043c\u0430\u0443\u044d\u0440\u0435."),(0,i.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u044b ",(0,i.kt)("em",{parentName:"p"},"\u043d\u0435")," \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0435 \u0443\u0437\u0435\u043b \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0432\u0430\u043b\u0438\u0434\u0430\u0442\u043e\u0440\u0430, \u0432\u044b \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u044f ",(0,i.kt)("inlineCode",{parentName:"p"},"9944")," \u043f\u043e\u0440\u0442\u0430 (\u0434\u043b\u044f \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0439 RPC websocket \u0441 \u0432\u043d\u0435\u0448\u043d\u0438\u043c\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u043c\u0438) \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"9933")," \u043f\u043e\u0440\u0442\u0430 (\u0434\u043b\u044f HTTP-\u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043a \u0432\u0430\u0448\u0435\u043c\u0443 \u0443\u0437\u043b\u0443). \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u0440\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"9944")," \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043a \u0432\u0430\u0448\u0435\u043c\u0443 \u0443\u0437\u043b\u0443 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,i.kt)("a",{parentName:"p",href:"/polkadotjs_apps_local"},"Polkadot/apps"),"."),(0,i.kt)("h2",{id:"03-download-or-build-a-binary"},"03 \u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0438\u043b\u0438 \u0441\u043e\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439 \u0444\u0430\u0439\u043b"),(0,i.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043a\u0430\u0447\u0430\u0442\u044c \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u0441 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u043c\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f\u043c\u0438 \u0441 \u043d\u0430\u0448\u0435\u0433\u043e ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/galacticcouncil/HydraDX-node/releases"},"github"),"."),(0,i.kt)("p",null,"\u041a\u0440\u043e\u043c\u0435 \u0442\u043e\u0433\u043e, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043e\u0431\u0440\u0430\u0442\u044c \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u0438\u0437 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0433\u043e \u043a\u043e\u0434\u0430:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438\n$ curl https://getsubstrate.io -sSf | bash -s -- --fast\n\n# \u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438\n$ git clone https://github.com/galacticcouncil/HydraDX-node -b stable\n\n# \u0421\u043e\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439 \u0444\u0430\u0439\u043b\n$ cd HydraDX-node/\n$ cargo build --release\n")),(0,i.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u044b \u0441\u043e\u0437\u0434\u0430\u043b\u0438 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439 \u0444\u0430\u0439\u043b, \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0432 \u043e\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0435 \u0432\u044b\u0448\u0435 \u0448\u0430\u0433\u0438, \u043f\u0443\u0442\u044c \u043a \u0432\u0430\u0448\u0435\u043c\u0443 \u0444\u0430\u0439\u043b\u0443 \u0431\u0443\u0434\u0435\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"target/release/hydra-dx\n")),(0,i.kt)("h2",{id:"04-run-the-binary"},"04 \u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439 \u0444\u0430\u0439\u043b"),(0,i.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439 \u0444\u0430\u0439\u043b, \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u043a\u043e\u043c\u0430\u043d\u0434\u0443:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ {PATH_TO_YOUR_BINARY} --chain lerna --name {YOUR_NODE_NAME} --validator\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u0423\u0437\u043b\u0430\u043c \u0432\u0430\u043b\u0438\u0434\u0430\u0442\u043e\u0440\u0430 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432\u0441\u0435\u0439 \u0446\u0435\u043f\u0438. \u0415\u0441\u043b\u0438 \u0432\u044b \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u043b\u0438 \u0443\u0437\u0435\u043b \u0440\u0430\u043d\u044c\u0448\u0435 \u0431\u0435\u0437 \u0444\u043b\u0430\u0433\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"--validator"),", \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0431\u0430\u0437\u0443 \u0434\u0430\u043d\u043d\u044b\u0445, \u043e\u0447\u0438\u0441\u0442\u0438\u0432 \u0446\u0435\u043f\u043e\u0447\u043a\u0443 \u043f\u0435\u0440\u0435\u0434 \u0437\u0430\u043f\u0443\u0441\u043a\u043e\u043c \u0443\u0437\u043b\u0430."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ {PATH_TO_YOUR_BINARY} purge-chain --chain lerna\n")))),(0,i.kt)("p",null,"\u041f\u043e\u043c\u0438\u043c\u043e \u043f\u0443\u0442\u0438 \u043a \u0432\u0430\u0448\u0435\u043c\u0443 \u0431\u0438\u043d\u0430\u0440\u043d\u043e\u043c\u0443 \u0444\u0430\u0439\u043b\u0443 (\u0441\u043c. \u0432\u044b\u0448\u0435), \u0432\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0438\u043c\u044f \u0443\u0437\u043b\u0430, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u0432\u0430\u0448\u0435\u0433\u043e \u0443\u0437\u043b\u0430 \u0432 ",(0,i.kt)("a",{parentName:"p",href:"https://telemetry.hydradx.io/#/HydraDX%20Snakenet%20Gen2"},"\u0422\u0435\u043b\u0435\u043c\u0435\u0442\u0440\u0438\u0438"),", \u0433\u0434\u0435 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0439\u0442\u0438 \u0441\u043f\u0438\u0441\u043e\u043a \u0432\u0441\u0435\u0445 \u0443\u0437\u043b\u043e\u0432, \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0449\u0438\u0445 \u043d\u0430 HydraDX Snakenet."),(0,i.kt)("h2",{id:"05-running-with-systemd"},"05 \u0417\u0430\u043f\u0443\u0441\u043a \u0441 systemd"),(0,i.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0443\u0431\u0435\u0434\u0438\u0442\u044c\u0441\u044f, \u0447\u0442\u043e \u0432\u0430\u0448 \u0443\u0437\u0435\u043b \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0430, \u043c\u044b \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0442\u044c \u0443\u0437\u0435\u043b HydraDX \u043a\u0430\u043a \u043f\u0440\u043e\u0446\u0435\u0441\u0441 systemd. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0441\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0444\u0430\u0439\u043b \u0438 \u0432\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0435\u0433\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435, \u0437\u0430\u043c\u0435\u043d\u0438\u0432 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435, \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u0435 \u043a\u0430\u043a ",(0,i.kt)("inlineCode",{parentName:"p"},"{VARIABLE}"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ touch /etc/systemd/system/hydradx-validator.service\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[Unit]\nDescription=HydraDX validator\n\n[Service]\nType=exec\nUser={UNIX_USER}\nExecStart={PATH_TO_YOUR_BINARY} --chain lerna --name {YOUR_NODE_NAME} --validator\nRestart=always\nRestartSec=120\n\n[Install]\nWantedBy=multi-user.target\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c RestartSec, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043e\u043d \u0437\u0430\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a \u0443\u0437\u043b\u0430 \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u0441\u0431\u043e\u044f. \u042d\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c \u043d\u0430 \u0434\u0438\u0441\u043a \u043b\u044e\u0431\u044b\u0435 \u043d\u0435\u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043a\u043e\u043d\u0441\u0435\u043d\u0441\u0443\u0441\u043d\u043e\u0435 \u0433\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u043d\u0438\u0435) \u0434\u043e \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0443\u0437\u043b\u0430. \u041f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a \u0443\u0437\u043b\u0430 \u0441\u0440\u0430\u0437\u0443 \u043f\u043e\u0441\u043b\u0435 \u0435\u0433\u043e \u0441\u0431\u043e\u044f \u043c\u043e\u0436\u0435\u0442 \u0432\u044b\u0437\u0432\u0430\u0442\u044c \u0434\u0432\u0443\u0441\u043c\u044b\u0441\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0438\u043b\u0438 \u0434\u0432\u043e\u0439\u043d\u043e\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0432 \u043a\u043e\u043d\u0435\u0447\u043d\u043e\u043c \u0438\u0442\u043e\u0433\u0435 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u043a \u043a\u043e\u0441\u043e\u0439 \u0447\u0435\u0440\u0442\u0435."))),(0,i.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0441 \u0443\u0437\u043b\u043e\u043c \u0432\u0430\u043b\u0438\u0434\u0430\u0442\u043e\u0440\u0430 HydraDX \u043a\u0430\u043a \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u043c \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u043c:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0443\u0437\u0435\u043b \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b\n$ systemctl enable hydradx-validator.service\n\n# \u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0443\u0437\u0435\u043b \u0432\u0440\u0443\u0447\u043d\u0443\u044e\n$ systemctl start hydradx-validator.service\n\n# \u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u0443\u0437\u043b\u0430\n$ systemctl status hydradx-validator.service\n\n# \u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u043b\u043e\u0433\u0438 \u0443\u0437\u043b\u0430\n$ journalctl -f -u hydradx-validator.service\n")),(0,i.kt)("p",null,"\u0422\u0435\u043f\u0435\u0440\u044c \u0432\u0430\u0448 \u0443\u0437\u0435\u043b HydraDX \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d \u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442!"),(0,i.kt)("p",null,"\u0422\u0435\u043f\u0435\u0440\u044c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 \u0448\u0430\u0433\u0438, \u0447\u0442\u043e\u0431\u044b ",(0,i.kt)("a",{parentName:"p",href:"/start_validating"},"\u043d\u0430\u0447\u0430\u0442\u044c \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044e"),"."))}d.isMDXComponent=!0}}]);
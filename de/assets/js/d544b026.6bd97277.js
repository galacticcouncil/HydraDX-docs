(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[961],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),f=o,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||i;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3919:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}t.d(n,{b:function(){return r},Z:function(){return o}})},4996:function(e,n,t){"use strict";t.d(n,{C:function(){return i},Z:function(){return a}});var r=t(2263),o=t(3919);function i(){var e=(0,r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,l=void 0!==a&&a,s=i.absolute,d=void 0!==s&&s;if(!t)return t;if(t.startsWith("#"))return t;if((0,o.b)(t))return t;if(l)return n+t;var c=t.startsWith(n)?t:n+t.replace(/^\//,"");return d?e+c:c}(i,t,e,n)}}}function a(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},510:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var r=t(2122),o=t(9756),i=(t(7294),t(3905)),a=t(4996),l={id:"polkadotjs_apps_local",title:"Mit einer lokalen Node verbinden"},s={unversionedId:"polkadotjs_apps_local",id:"polkadotjs_apps_local",isDocsHomePage:!1,title:"Mit einer lokalen Node verbinden",description:"Sie k\xf6nnen Polkadot/apps verwenden um sich mit ihrem Lokalen HydraDX Node zu verbinden. Daf\xfcr ist es n\xf6tig Zugang zum Port 9944zu haben, welcher f\xfcr RPC Websocket verbindungen verwendet wird.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/polkadotjs_apps_local.md",sourceDirName:".",slug:"/polkadotjs_apps_local",permalink:"/de/polkadotjs_apps_local",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/polkadotjs_apps_local.md",version:"current",frontMatter:{id:"polkadotjs_apps_local",title:"Mit einer lokalen Node verbinden"},sidebar:"sidebar",previous:{title:"Participate in Council Elections",permalink:"/de/participate_in_council_elections"},next:{title:"Mit einer \xf6ffentlichen Node verbinden",permalink:"/de/polkadotjs_apps_public"}},d=[{value:"\xdcber Polkadot/apps mit einer lokalen Node verbinden",id:"accessing-your-local-node-using-polkadotapps",children:[]}],c={toc:d};function p(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Sie k\xf6nnen Polkadot/apps verwenden um sich mit ihrem Lokalen HydraDX Node zu verbinden. Daf\xfcr ist es n\xf6tig Zugang zum Port ",(0,i.kt)("inlineCode",{parentName:"p"},"9944"),"zu haben, welcher f\xfcr RPC Websocket verbindungen verwendet wird."),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Wenn Sie den Node als Validator verwenden, empfehlen wir den Port ",(0,i.kt)("inlineCode",{parentName:"p"},"9944"),"auf die Blacklist f\xfcr Remote Zugriffe zu setzen. Dieser Port k\xf6nnte sonst von Dritten daf\xfcr verwendet werden die Performance Ihres Nodes einzuschr\xe4nken, was wiederum in Slashing oder unbeabsichtigen Verlust von Krypto f\xfchren k\xf6nnte. Sie sollten den Port ",(0,i.kt)("inlineCode",{parentName:"p"},"9944")," nur dann zum Verbinden zu Ihrem Node verwenden wenn dieser in Ihrem Lokalen Netzwerk ist."))),(0,i.kt)("h3",{id:"accessing-your-local-node-using-polkadotapps"},"\xdcber Polkadot/apps mit einer lokalen Node verbinden"),(0,i.kt)("p",null,"Um auf Ihren Node zuzugreifen \xf6ffnen Sie",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"Polkadot/apps")," und klicken Sie in die obere linke Ecke um das Netzwerk zu wechseln."),(0,i.kt)("div",null,(0,i.kt)("img",{src:(0,a.Z)("/polkadotjs-apps/PolkadotJS-APPS-1.png")})),(0,i.kt)("p",null,"Nachdem das Men\xfc sich \xf6ffnet klicken sie auf ",(0,i.kt)("strong",{parentName:"p"},"Development")," und w\xe4hlen sie ",(0,i.kt)("strong",{parentName:"p"},"Local node"),"."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:(0,a.Z)("/polkadotjs-apps/local-1.png")})),(0,i.kt)("p",null,"Passen Sie die IP wenn n\xf6tig an und klicken Sie auf  ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Switch"))," um zu Ihrer lokalen Node zu wechseln."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:(0,a.Z)("/polkadotjs-apps/local-2.png")})),(0,i.kt)("p",null,"Jetzt sollten Sie mit Ihrer lokalen Node verbunden sein und k\xf6nnen nun darauf zugreifen."))}p.isMDXComponent=!0}}]);
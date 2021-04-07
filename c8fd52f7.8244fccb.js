(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{81:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),a=(t(0),t(87)),i=(t(88),{id:"performance_benchmark",title:"Performance benchmark"}),c={unversionedId:"performance_benchmark",id:"performance_benchmark",isDocsHomePage:!1,title:"Performance benchmark",description:"You can make sure that your machine satisfies the required technical specifications by running a performance benchmark. To do so, follow the steps below:",source:"@site/docs/performance_benchmark.md",slug:"/performance_benchmark",permalink:"/performance_benchmark",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/performance_benchmark.md",version:"current",sidebar:"sidebar",previous:{title:"Set up a HydraDX node",permalink:"/node_setup"},next:{title:"Node Monitoring",permalink:"/node_monitoring"}},u=[],s={toc:u};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You can make sure that your machine satisfies the ",Object(a.b)("a",{parentName:"p",href:"/node_setup#00-required-technical-specifications"},"required technical specifications")," by running a performance benchmark. To do so, follow the steps below:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# Fetch source of the latest stable release\n$ git clone https://github.com/galacticcouncil/HydraDX-node -b stable\n$ cd HydraDX-node/\n\n# Prepare for running the benchmark\n## Install Rust following https://rustup.rs\n$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n\n## Configure Rust\n$ ./scripts/init.sh\n$ rustup default nightly\n\n## Install additional libraries\n$ apt install python3-pip\n$ apt install clang\n\n# Run the benchmark\n$ ./scripts/check_performance.sh\n")),Object(a.b)("p",null,"After the benchmark executes you should see an output similar to the following:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"         Pallet          |   Time comparison (\xb5s)    |  diff* (\xb5s)   |   diff* (%)    |            |   Rerun\namm                      |     773.00 vs 680.00      |      93.00    |      12.03     |     OK     |\nexchange                 |     804.00 vs 720.00      |      84.00    |      10.44     |     OK     |\ntransaction_multi_payment|     218.00 vs 198.00      |      20.00    |       9.17     |     OK     |\n\nNotes:\n- in the diff fields you can see the difference between the reference benchmark time and the benchmark time of your machine\n- if diff is positive for all three pallets, your machine covers the minimum requirements for running a HydraDX node\n- if diff deviates by -10% or more for some of the pallets, your machine might not be suitable to run a node\n")),Object(a.b)("p",null,"You can see the difference in the performance between your machine and the minimum required setup in the column ",Object(a.b)("strong",{parentName:"p"},"diff* (%)"),". If all three values in this column are positive, your machine should be suitable to run a HydraDX validator node. If any of the values is below ",Object(a.b)("em",{parentName:"p"},"-10 %"),", we do not recommend running a HydraDX node."),Object(a.b)("p",null,"Join us at Discord if you would like to discuss your benchmark results, our community is always happy to help."))}l.isMDXComponent=!0},87:function(e,n,t){"use strict";t.d(n,"a",(function(){return f})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},f=function(e){var n=l(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=l(t),m=r,d=f["".concat(i,".").concat(m)]||f[m]||p[m]||a;return t?o.a.createElement(d,c(c({ref:n},s),{},{components:t})):o.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},88:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return i}));var r=t(22),o=t(89);function a(){var e=Object(r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,a=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,c=void 0!==i&&i,u=a.absolute,s=void 0!==u&&u;if(!t)return t;if(t.startsWith("#"))return t;if(Object(o.b)(t))return t;if(c)return n+t;var l=t.startsWith(n)?t:n+t.replace(/^\//,"");return s?e+l:l}(a,t,e,n)}}}function i(e,n){return void 0===n&&(n={}),(0,a().withBaseUrl)(e,n)}},89:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return o}))}}]);
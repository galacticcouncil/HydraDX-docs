(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{81:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var r=a(3),n=a(7),i=(a(0),a(90)),o=(a(91),{id:"staking_rewards",title:"Staking Rewards"}),s={unversionedId:"staking_rewards",id:"staking_rewards",isDocsHomePage:!1,title:"Staking Rewards",description:"Staking rewards incentivize validators and nominators to stake their HDX tokens. There are three types of staking rewards which are discussed in this article: base rewards, era points and tips.",source:"@site/docs/staking_rewards.md",slug:"/staking_rewards",permalink:"/es/staking_rewards",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/staking_rewards.md",version:"current",sidebar:"sidebar",previous:{title:"Staking",permalink:"/es/staking"},next:{title:"Configurar un nodo HydraDX",permalink:"/es/node_setup"}},c=[{value:"Base Rewards",id:"base-rewards",children:[]},{value:"Era points",id:"era-points",children:[]},{value:"Tips",id:"tips",children:[]}],l={toc:c};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Staking rewards incentivize validators and nominators to ",Object(i.b)("a",{parentName:"p",href:"/staking"},"stake their HDX tokens"),". There are three types of staking rewards which are discussed in this article: ",Object(i.b)("a",{parentName:"p",href:"#base-rewards"},"base rewards"),", ",Object(i.b)("a",{parentName:"p",href:"#era-points"},"era points")," and ",Object(i.b)("a",{parentName:"p",href:"#tips"},"tips"),"."),Object(i.b)("h2",{id:"base-rewards"},"Base Rewards"),Object(i.b)("p",null,"At the end of every era (24h), all active validator pools receive base rewards in the form of HDX tokens. A validator pool consists of an elected validator (holding their self-staked HDX) and all active nominations which are backing the validator (for more information see ",Object(i.b)("a",{parentName:"p",href:"/staking"},"staking"),"). A central principle of the Nominated Proof-of-Stake (NPoS) consensus mechanism is that ",Object(i.b)("strong",{parentName:"p"},"equal work brings equal rewards"),". In other words, since all validator pools essentially carry out the same work, ",Object(i.b)("strong",{parentName:"p"},"the available base rewards are divided equally")," among them. This means that validator pools are ",Object(i.b)("strong",{parentName:"p"},"not")," rewarded in proportion to their total stake, which is a major difference from traditional PoS networks."),Object(i.b)("p",null,"The mechanism of sharing the base rewards equally among all participating validator pools contributes to the security of the network by preventing the concentration of power in a few validator pools, thereby strengthening decentralization. Over time, it incentivizes nominators to nominate validators with a smaller HDX stake. This process will eventually balance out the power relationships in the network and lead to a situation where all validator pools have roughly an equivalent amount of staked HDX."),Object(i.b)("p",null,"The distribution of rewards takes place as follows. After calculating the (equal) amount of rewards for every validator pool, the validator receives its share in the form of ",Object(i.b)("strong",{parentName:"p"},"commission fees")," for maintaining the node. As a second step, the remaining tokens are distributed among all stakes ",Object(i.b)("strong",{parentName:"p"},"proportionally")," (including the self-stake of the validator). This means that higher stakes will receive a bigger proportion of the rewards which are attributed to the particular validator pool."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"In our incentivized testnet called Snakenet, the amount of rewards received for staking your HDX tokens is estimated to be around ",Object(i.b)("strong",{parentName:"p"},"50% APY"),"."))),Object(i.b)("h2",{id:"era-points"},"Era points"),Object(i.b)("p",null,"Validators can earn additional rewards in proportion to the era points which they have gained in the past era. These rewards are added to the base rewards described above. Validators can earn era points by carrying out certain specific actions such as:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"producing a non-uncle block in the Relay Chain."),Object(i.b)("li",{parentName:"ul"},"producing a reference to a previously unreferenced uncle block."),Object(i.b)("li",{parentName:"ul"},"producing a referenced uncle block.")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"An uncle block is a Relay Chain block valid in every regard, which however has failed to become canonical. This can happen when two or more validators are block producers in a single slot, and the block produced by one validator reaches the next block producer before the others. The lagging blocks are called uncle blocks."))),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("p",null,"Finally, validators can earn tips which are also added to the base rewards at the end of every era. Tips represent an additional transaction fee that can be optionally paid by users to give their transaction a higher priority."))}d.isMDXComponent=!0},90:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),d=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(a),b=r,h=p["".concat(o,".").concat(b)]||p[b]||u[b]||i;return a?n.a.createElement(h,s(s({ref:t},l),{},{components:a})):n.a.createElement(h,s({ref:t},l))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},91:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return o}));var r=a(16),n=a(92);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,s=void 0!==o&&o,c=i.absolute,l=void 0!==c&&c;if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(s)return t+a;var d=a.startsWith(t)?a:t+a.replace(/^\//,"");return l?e+d:d}(i,a,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},92:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))}}]);
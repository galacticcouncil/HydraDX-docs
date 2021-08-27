(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[58],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5777:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i={id:"democracy_intro",title:"Introduction"},c={unversionedId:"democracy_intro",id:"democracy_intro",isDocsHomePage:!1,title:"Introduction",description:"HydraDX is in the process of fully decentralizing its governance. All decisions which affect the protocol are adopted following a democratic process which is supported by the Substrate democracy module. The central mechanism for establishing consensus among the stakeholders is the referendum.",source:"@site/docs/democracy_intro.md",sourceDirName:".",slug:"/democracy_intro",permalink:"/democracy_intro",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/democracy_intro.md",version:"current",frontMatter:{id:"democracy_intro",title:"Introduction"},sidebar:"sidebar",previous:{title:"Staking Rewards",permalink:"/staking_rewards"},next:{title:"Referenda",permalink:"/democracy_referenda"}},l=[{value:"Democracy parameters",id:"democracy-parameters",children:[]}],s={toc:l};function p(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"HydraDX is in the process of fully decentralizing its governance. All decisions which affect the protocol are adopted following a democratic process which is supported by the Substrate democracy module. The central mechanism for establishing consensus among the stakeholders is the ",(0,o.kt)("strong",{parentName:"p"},"referendum"),"."),(0,o.kt)("p",null,"This section contains a series of knowledge articles which should provide you with a better understanding of the mechanisms behind the governance of HydraDX. You will find more information on ",(0,o.kt)("a",{parentName:"p",href:"/democracy_referenda"},"how referenda work"),", as well as on the two central groups of governance actors: the ",(0,o.kt)("a",{parentName:"p",href:"/democracy_council"},"HydraDX Council")," and the ",(0,o.kt)("a",{parentName:"p",href:"/democracy_technical_committee"},"Technical Committee"),"."),(0,o.kt)("p",null,"If you are looking for practical guidance on how to participate in the governance of HydraDX, please refer to the step-by-step guides on ",(0,o.kt)("a",{parentName:"p",href:"/participate_in_referenda"},"participating in referenda")," and ",(0,o.kt)("a",{parentName:"p",href:"/participate_in_council_elections"},"participating in Council elections"),"."),(0,o.kt)("h2",{id:"democracy-parameters"},"Democracy parameters"),(0,o.kt)("p",null,"The list below contains the most important parameters which influence the governance mechanism on HydraDX. Please note that these may change over time."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Minimum HDX deposit for initiating a referendum: ",(0,o.kt)("strong",{parentName:"li"},"100,000 HDX")),(0,o.kt)("li",{parentName:"ul"},"Referendum enactment period: ",(0,o.kt)("strong",{parentName:"li"},"3 days")),(0,o.kt)("li",{parentName:"ul"},"Referendum voting period: ",(0,o.kt)("strong",{parentName:"li"},"3 days")),(0,o.kt)("li",{parentName:"ul"},"Emergency referendum voting period: ",(0,o.kt)("strong",{parentName:"li"},"3 hours")),(0,o.kt)("li",{parentName:"ul"},"Cooloff period after a referendum has been rejected: ",(0,o.kt)("strong",{parentName:"li"},"7 days")),(0,o.kt)("li",{parentName:"ul"},"Maximum pending referendum proposals: ",(0,o.kt)("strong",{parentName:"li"},"100"))))}p.isMDXComponent=!0}}]);
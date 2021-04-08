(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{77:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return c})),n.d(a,"metadata",(function(){return s})),n.d(a,"toc",(function(){return d})),n.d(a,"default",(function(){return p}));var t=n(3),r=n(7),i=(n(0),n(89)),o=n(90),c={id:"start_validating",title:"Empiece a validar"},s={unversionedId:"start_validating",id:"start_validating",isDocsHomePage:!1,title:"Empiece a validar",description:"Despues de Configurar un nodo HydraDX, debe vincular los tokens HDX y configurar las claves del validador antes de poder comenzar a validar.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/start_validating.md",slug:"/start_validating",permalink:"/es/start_validating",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/start_validating.md",version:"current",sidebar:"sidebar",previous:{title:"Convi\xe9rtete en un nominador",permalink:"/es/start_nominating"},next:{title:"Conectarse a un nodo local",permalink:"/es/polkadotjs_apps_local"}},d=[{value:"01 Vincula tus HDX tokens",id:"01-bond-hdx-tokens",children:[]},{value:"02 Generar claves de sesi\xf3n",id:"02-generate-session-keys",children:[]},{value:"03 Configura tus claves de sesi\xf3n",id:"03-set-your-session-keys",children:[]},{value:"04 Aseg\xfarate de que tu nodo est\xe9 completamente sincronizado",id:"04-make-sure-that-your-node-is-fully-synced",children:[]},{value:"05 Empiece a validar",id:"05-start-validating",children:[]},{value:"06 Verifique el estado de su nodo validador",id:"06-check-the-status-of-your-validator-node",children:[]}],l={toc:d};function p(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},l,n,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Despues de ",Object(i.b)("a",{parentName:"p",href:"/node_setup"},"Configurar un nodo HydraDX"),", debe vincular los tokens HDX y configurar las claves del validador antes de poder comenzar a validar."),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"La ejecuci\xf3n de un nodo de validaci\xf3n requiere un cierto conjunto de habilidades t\xe9cnicas necesarias para la configuraci\xf3n adecuada del nodo y para garantizar su tiempo de actividad. Tambi\xe9n requerimos que los validadores est\xe9n siempre ejecutando el nodo utilizando la \xfaltima versi\xf3n estable. Si no est\xe1 seguro de lo que est\xe1 haciendo aqu\xed, le recomendamos que ",Object(i.b)("a",{parentName:"p",href:"/start_nominating"},"Nominar tu HDX")))),Object(i.b)("h2",{id:"01-bond-hdx-tokens"},"01 Vincula tus HDX tokens"),Object(i.b)("p",null,"Para participar en la red como un nodo validador, debe vincular una cierta cantidad de tokens HDX. Si no tiene ning\xfan HDX, no es posible participar en la etapa ",Object(i.b)("em",{parentName:"p"},"inicial")," de la red de prueba. Sin embargo, el equipo anunciar\xe1 algunas noticias interesantes en las pr\xf3ximas semanas, as\xed que mant\xe9ngase informado y suscr\xedbase a nuestro bolet\xedn."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"\xbfSigues en posesi\xf3n de los tokens xHDX que compraste durante el evento Balancer LBP? Primero debe ",Object(i.b)("a",{parentName:"p",href:"/claim"},"reclamar su HDX")," antes de continuar."))),Object(i.b)("p",null,"Para vincular HDX, abra Polkadot/apps y con\xe9ctese a uno de los ",Object(i.b)("a",{parentName:"p",href:"/polkadotjs_apps_public"},"nodos RPC p\xfablicos de HydraDX"),". Aseg\xfarese de poder ver el ",Object(i.b)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/accounts"},"saldo de su cuenta"),"."),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Los tokens HDX vinculados est\xe1n en juego para garantizar la seguridad de la red. El comportamiento inadecuado del nodo validador puede ser castigado con cortes que pueden conducir a una p\xe9rdida involuntaria de fondos. Le recomendamos encarecidamente que solo contin\xfae si realmente sabe lo que est\xe1 haciendo."))),Object(i.b)("p",null,"Para el siguiente paso, vaya a ",Object(i.b)("em",{parentName:"p"},"Network")," > ",Object(i.b)("em",{parentName:"p"},"Participacion")," > ",Object(i.b)("em",{parentName:"p"},"Acciones de la cuenta")," > ",Object(i.b)("em",{parentName:"p"},"+ Stash")),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)("img",{src:Object(o.a)("/validator-guide/bond-hdx-1.png")})),Object(i.b)("p",null,"Despu\xe9s de hacer clic en el bot\xf3n ",Object(i.b)("em",{parentName:"p"},"Stash"),", deber\xeda ver las preferencias de vinculaci\xf3n con cuatro campos editables:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"cuenta stash"),": la cuenta que tiene la mayor\xeda de sus tokens HDX. HDX se va a stakear desde esta cuenta."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"cuenta controller"),": la cuenta que tiene una porci\xf3n m\xe1s peque\xf1a de HDX necesaria para cubrir las tarifas asociadas con el inicio y la detenci\xf3n del proceso de nominaci\xf3n."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"valor vinculado"),": la cantidad de HDX que est\xe1 vinculando. No vincule todos los HDX que tenga; en su lugar, deje algunos para cubrir las tarifas de transacci\xf3n que se producir\xe1n m\xe1s adelante."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"destino de pago"),": la cuenta a la que se enviar\xe1n las recompensas de stake.")),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"No vincule todos sus tokens HDX disponibles. Deje una peque\xf1a reserva para cubrir las tarifas de transacci\xf3n. Si vincula todos los tokens HDX que tiene, es posible que no pueda firmar la transacci\xf3n para iniciar el proceso de validaci\xf3n."))),Object(i.b)("p",null,"Despu\xe9s de ajustar las preferencias de vinculaci\xf3n, haga clic en ",Object(i.b)("strong",{parentName:"p"},"Vinculo")," y firme la transacci\xf3n para completar el proceso de vinculaci\xf3n."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Por razones de seguridad, no se recomienda tener las mismas cuentas Stash y Controller. Sin embargo, dado que las transferencias est\xe1n deshabilitadas en Snakenet, actualmente no es posible usar cuentas separadas. Recomendamos encarecidamente que cambie a cuentas Stash y Controller separadas tan pronto como sea posible en el futuro."))),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)("img",{src:Object(o.a)("/validator-guide/bond-hdx-2.png")})),Object(i.b)("h2",{id:"02-generate-session-keys"},"02 Generar claves de sesi\xf3n"),Object(i.b)("p",null,"El segundo paso es generar sus claves de sesi\xf3n. Las claves de sesi\xf3n se utilizan para asociar el nodo de validaci\xf3n con su cuenta de Controlador y el HDX en stake. Por lo tanto, es importante que est\xe9n configurados correctamente."),Object(i.b)("p",null,"Para generar sus claves de sesi\xf3n, ejecute en el nodo:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'$ curl -H "Content-Type: application/json" -d \'{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}\' http://localhost:9933\n\n# Example output\n{"jsonrpc":"2.0","result":"0x9257c7a88f94f858a6f477743b4180f0c9a0630a1cea85c3f47dc6ca78e503767089bebe02b18765232ecd67b35a7fb18fc3027613840f27aca5a5cc300775391cf298af0f0e0342d0d0d873b1ec703009c6816a471c64b5394267c6fc583c31884ac83d9fed55d5379bbe1579601872ccc577ad044dd449848da1f830dd3e45","id":1}\n')),Object(i.b)("p",null,"Puede encontrar sus claves de sesi\xf3n en la parte ",Object(i.b)("em",{parentName:"p"},"result")," de la salida (",Object(i.b)("inlineCode",{parentName:"p"},"0x9257 ...")," en la salida de ejemplo anterior)."),Object(i.b)("h2",{id:"03-set-your-session-keys"},"03 Configura tus claves de sesi\xf3n"),Object(i.b)("p",null,"Para asociar las claves de sesi\xf3n generadas con su cuenta de controlador, abra en Polkadot/apps:\n",Object(i.b)("em",{parentName:"p"},"Desarrollador")," > ",Object(i.b)("em",{parentName:"p"},"Extrinsics")),Object(i.b)("p",null,"Complete los campos:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"usando la cuenta seleccionada"),": selecciona tu cuenta Controller;"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"enviar el siguiente extrinsic"),": selecciona ",Object(i.b)("inlineCode",{parentName:"li"},"session")," en la izquierda y  ",Object(i.b)("inlineCode",{parentName:"li"},"setKeys")," en la derecha;"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"keys"),": Coloca las claves de sesi\xf3n generadas en el paso anterior;"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"proof"),": ",Object(i.b)("inlineCode",{parentName:"li"},"0"),".")),Object(i.b)("p",null,"Para completar, haga clic en ",Object(i.b)("em",{parentName:"p"},"Submit Transaction")," y firme la transacci\xf3n."),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)("img",{src:Object(o.a)("/validator-guide/set-session-keys-1.png")})),Object(i.b)("h2",{id:"04-make-sure-that-your-node-is-fully-synced"},"04 Aseg\xfarate de que tu nodo est\xe9 completamente sincronizado"),Object(i.b)("p",null,"Antes de continuar, debe asegurarse de que su nodo se est\xe9 ejecutando y de que el proceso de sincronizaci\xf3n se haya completado por completo. La forma m\xe1s segura de comprobar el estado de sincronizaci\xf3n es directamente en el propio nodo:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"\n$ journalctl -f -u hydradx-validator.service\n\n# The output will be similar to this\nMar 22 18:37:38 Ubuntu-2010-groovy-64-minimal hydra-dx[232761]: 2021-03-22 18:37:38  \ud83d\udca4 \nIdle (52 peers), best: #622028 (0x5f5a\u20261041), finalized #622025 (0x5b21\u2026a746), \u2b07 9.1kiB/s \u2b06 6.1kiB/s\n\n")),Object(i.b)("p",null,"Puede comparar el n\xfamero de bloque de la salida (en el ejemplo anterior: ",Object(i.b)("inlineCode",{parentName:"p"},"#622025"),") con el n\xfamero de bloque actual que puede encontrar en ",Object(i.b)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/explorer"},"Polkadot/apps Explorer"),", lo que significa que el nodo utilizado para el ejemplo no est\xe1 completamente sincronizado."),Object(i.b)("p",null,"Espere hasta que el n\xfamero de bloque que se muestra en sus registros locales coincida con el n\xfamero de bloque actual de la red."),Object(i.b)("h2",{id:"05-start-validating"},"05 Empiece a validar"),Object(i.b)("p",null,"Para comenzar a validar navegue en Polkadot/apps:"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Network")," > ",Object(i.b)("em",{parentName:"p"},"Participacion")," > ",Object(i.b)("em",{parentName:"p"},"Acciones de la cuenta")," > ",Object(i.b)("em",{parentName:"p"},"Validador")," (button next to your bonded HDX)"),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)("img",{src:Object(o.a)("/validator-guide/validate-1.png")})),Object(i.b)("p",null,"Despu\xe9s de hacer clic en el bot\xf3n ",Object(i.b)("em",{parentName:"p"},"Validar"),", deber\xeda ver una ventana emergente llamada ",Object(i.b)("em",{parentName:"p"},"establecer preferencias de validaci\xf3n"),". Aqu\xed, debe establecer su ",Object(i.b)("em",{parentName:"p"},"porcentaje de comisi\xf3n de recompensa"),". Esta es la proporci\xf3n de las recompensas que se le pagar\xe1n. Las recompensas restantes se dividir\xe1n entre los nominadores de acuerdo con su participaci\xf3n. Si decide no aceptar ninguna comisi\xf3n de recompensa, puede establecer el porcentaje en 0."),Object(i.b)("p",null,"Para confirmar, haga clic en ",Object(i.b)("em",{parentName:"p"},"Validar")," y firme la transacci\xf3n"),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)("img",{src:Object(o.a)("/validator-guide/validate-2.png")})),Object(i.b)("h2",{id:"06-check-the-status-of-your-validator-node"},"06 Verifique el estado de su nodo validador"),Object(i.b)("p",null,"Puede comprobar el estado de su nodo validador navegue en Polkadot/apps:"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Network")," > ",Object(i.b)("em",{parentName:"p"},"Participacion")," > ",Object(i.b)("em",{parentName:"p"},"Resumen")),Object(i.b)("p",null,"Esta pesta\xf1a proporciona una descripci\xf3n general de todos los validadores activos conectados a la red. En la parte superior, hay una indicaci\xf3n de la cantidad de espacios de validaci\xf3n disponibles, as\xed como la cantidad de nodos que han se\xf1alado su intenci\xf3n de ser un validador. Puede confirmar si su nodo est\xe1 en la cola de espera haciendo clic en la pesta\xf1a ",Object(i.b)("em",{parentName:"p"},"Esperando"),"."),Object(i.b)("p",null,"Su nodo validador permanecer\xe1 en la cola de espera hasta que sea seleccionado para ser incluido en el conjunto validador. El conjunto de validadores se actualiza en cada era, lo que permite incluir nuevos nodos, siempre que haya espacios vac\xedos."),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)("img",{src:Object(o.a)("/validator-guide/validate-3.png")})),Object(i.b)("p",null,"\xa1Gracias por apoyar a HydraDX convirti\xe9ndose en un validador de Snakenet! \ud83c\udf89"))}p.isMDXComponent=!0},89:function(e,a,n){"use strict";n.d(a,"a",(function(){return p})),n.d(a,"b",(function(){return m}));var t=n(0),r=n.n(t);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),l=function(e){var a=r.a.useContext(d),n=a;return e&&(n="function"==typeof e?e(a):c(c({},a),e)),n},p=function(e){var a=l(e.components);return r.a.createElement(d.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},b=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),b=t,m=p["".concat(o,".").concat(b)]||p[b]||u[b]||i;return n?r.a.createElement(m,c(c({ref:a},d),{},{components:n})):r.a.createElement(m,c({ref:a},d))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},90:function(e,a,n){"use strict";n.d(a,"b",(function(){return i})),n.d(a,"a",(function(){return o}));var t=n(16),r=n(92);function i(){var e=Object(t.default)().siteConfig,a=(e=void 0===e?{}:e).baseUrl,n=void 0===a?"/":a,i=e.url;return{withBaseUrl:function(e,a){return function(e,a,n,t){var i=void 0===t?{}:t,o=i.forcePrependBaseUrl,c=void 0!==o&&o,s=i.absolute,d=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(c)return a+n;var l=n.startsWith(a)?n:a+n.replace(/^\//,"");return d?e+l:l}(i,n,e,a)}}}function o(e,a){return void 0===a&&(a={}),(0,i().withBaseUrl)(e,a)}},92:function(e,a,n){"use strict";function t(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!t(e)}n.d(a,"b",(function(){return t})),n.d(a,"a",(function(){return r}))}}]);
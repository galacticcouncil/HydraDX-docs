(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{77:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return h}));var o=a(3),i=a(7),n=(a(0),a(86)),s=a(83),r={id:"claim",title:"Claim your HDX"},l={unversionedId:"claim",id:"claim",isDocsHomePage:!1,title:"Claim your HDX",description:"For claiming the HDX tokens from the xHDX token representation you'll need your original wallet that you hold the tokens with on the Ethereum side, the polkadot.js extension and a few minutes of your time.",source:"@site/docs/claim.md",slug:"/claim",permalink:"/claim",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/claim.md",version:"current",sidebar:"sidebar",previous:{title:"Snakenet",permalink:"/snakenet"},next:{title:"Setting up a node",permalink:"/node_setup"}},c=[{value:"Preparation",id:"preparation",children:[]},{value:"Claim process",id:"claim-process",children:[{value:"00 Setup",id:"00-setup",children:[]},{value:"01 Select ETH address",id:"01-select-eth-address",children:[]},{value:"02 Create HDX address",id:"02-create-hdx-address",children:[]},{value:"03 Sign",id:"03-sign",children:[]},{value:"04 Claim",id:"04-claim",children:[]},{value:"05 What&#39;s next?",id:"05-whats-next",children:[]}]}],d={toc:c};function h(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"For claiming the HDX tokens from the xHDX token representation you'll need your original wallet that you hold the tokens with on the Ethereum side, the polkadot.js extension and a few minutes of your time."),Object(n.b)("h2",{id:"preparation"},"Preparation"),Object(n.b)("p",null,"Make sure your browser supports polkadot.js extension. This is the only official way right now to use your accounts with HydraDX. It's a good idea to have the Ethereum wallet ready for signing a message before starting the claim process but we tried to make it as easy as possible. If you have ",Object(n.b)("a",{parentName:"p",href:"https://polkadot.js.org/extension/"},"polkadot.js extension")," and metamask you should be ready to go."),Object(n.b)("h2",{id:"claim-process"},"Claim process"),Object(n.b)("p",null,"Navigate to ",Object(n.b)("a",{parentName:"p",href:"https://claim.hydradx.io"},"https://claim.hydradx.io"),", the app will check for all the necessary pre-requisites for claiming and should guide you through the process. Yo will be able to claim from metamask or external wallet like MEW that supports signing a message."),Object(n.b)("h3",{id:"00-setup"},"00 Setup"),Object(n.b)("p",null,"You will be prompted from polkadot.js extension to authorize the usage with the claim site. Make sure the prompt says CLAIM.HYDRADX.IO and ",Object(n.b)("a",{parentName:"p",href:"https://claim.hydradx.io"},"https://claim.hydradx.io")," or you can be a victim of phishing attack!"),Object(n.b)("img",{alt:"authorize",src:Object(s.a)("/claim/authorize.png")}),Object(n.b)("p",null,"After authorization, you will be prompted to update metadata for the polkadot.js extension. This means that polkadot.js will be able to create HydraDX specific addresses which are required to complete the claim process in the UI."),Object(n.b)("img",{alt:"authorize",src:Object(s.a)("/claim/metadata.png")}),Object(n.b)("h3",{id:"01-select-eth-address"},"01 Select ETH address"),Object(n.b)("p",null,"In the first step, you'll need to select an account you want to claim the tokens from. This can be done either by connecting to Metamask or by writing your address in the input box. In the second case, you will need to sign message yourself later."),Object(n.b)("h3",{id:"02-create-hdx-address"},"02 Create HDX address"),Object(n.b)("p",null,"You will need to select an address for claiming HDX. For security reasons, this address will need to be unique to the HydraDX Stakenet. If you have approved the metadata upgrade in the first step, you will be able to create HydraDX address in the Polkadot.js extension. Please do so now."),Object(n.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(n.b)("div",{parentName:"div",className:"admonition-content"},Object(n.b)("p",{parentName:"div"},"Never give your seed phrase to anybody. Back it up and store it in a safe place. It is the only way you can recover your account and if you lose or leak it, your funds will be compromised."))),Object(n.b)("img",{alt:"authorize",src:Object(s.a)("/claim/create-account.png")}),Object(n.b)("p",null,"Once you have your address created, you can select it in the claims UI and continue with the claim process."),Object(n.b)("h3",{id:"03-sign"},"03 Sign"),Object(n.b)("p",null,"Depending on the option you chose in the first step you will be presented with one of the two options here."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Sign a message through metamask."),Object(n.b)("p",{parentName:"li"},"If you have connected your metamask, you will be prompted to sign a message when you click on the sign button. Follow the instructions in metamask to sign the message.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Sign a message through external wallet."),Object(n.b)("p",{parentName:"li"},"If you have typed in your ethereum address you will need to sign a message through external wallet that you used to buy the tokens and own a private key to. Once you have signed your message, paste the signed message into the response field."))),Object(n.b)("h3",{id:"04-claim"},"04 Claim"),Object(n.b)("p",null,"Once signed, you will need to send a transaction and sign it with your Polkadot.js extension. When you do this you officialy become HDX owner."),Object(n.b)("h3",{id:"05-whats-next"},"05 What's next?"),Object(n.b)("p",null,"In the next few days, we'll prepare a guide on how to use your tokens to run a validator node or nominate. There's nothing else that you should do right now regarding tokens. What you can do is to jump in and help us with stuff including helping others with the claim, improving this guide or tackling some issues on the ",Object(n.b)("a",{parentName:"p",href:"https://github.com/galacticcouncil"},"github"),"."))}h.isMDXComponent=!0}}]);
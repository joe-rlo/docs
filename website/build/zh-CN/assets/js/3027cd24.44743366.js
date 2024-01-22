"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8150],{77053:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(85893),a=t(11151),i=t(77229);const o={id:"minting-nft-frontend",title:"Minting NFT Front-end",sidebar_label:"Minting Front-end"},l="NFT Minting Front-end",s={id:"tutorials/nfts/minting-nft-frontend",title:"Minting NFT Front-end",description:'In this tutorial you\'ll learn how to create a simple NFT front-end and mint a "Go Team" NFT on the NEAR blockchain straight from your web browser.',source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/3.tutorials/nfts/simple-nft-minting-example.md",sourceDirName:"3.tutorials/nfts",slug:"/tutorials/nfts/minting-nft-frontend",permalink:"/zh-CN/tutorials/nfts/minting-nft-frontend",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/simple-nft-minting-example.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"2024\u5e741\u670811\u65e5",frontMatter:{id:"minting-nft-frontend",title:"Minting NFT Front-end",sidebar_label:"Minting Front-end"},sidebar:"contracts",previous:{title:"Minting NFTs",permalink:"/zh-CN/tutorials/nfts/minting-nfts"},next:{title:"Minecraft NFTs",permalink:"/zh-CN/tutorials/nfts/minecraft-nfts"}},u={},c=[{value:"App Overview",id:"app-overview",level:2},{value:"Smart Contract code",id:"smart-contract-code",level:2},{value:"Front-end",id:"front-end",level:2},{value:"Start",id:"start",level:3},{value:"Mint button",id:"mint-button",level:3},{value:"Final remarks",id:"final-remarks",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"nft-minting-front-end",children:"NFT Minting Front-end"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:'In this tutorial you\'ll learn how to create a simple NFT front-end and mint a "Go Team" NFT on the NEAR blockchain straight from your web browser.'}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"app-overview",children:"App Overview"}),"\n",(0,r.jsxs)(n.p,{children:["The app is fairly simple: the user signs in and hits the ",(0,r.jsx)("kbd",{children:"Mint NFT"}),' button. Once the user hits the mint button, a "Go Team" NFT is minted and sent to their NEAR Wallet.']}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Front-end",src:t(6610).Z+"",width:"2142",height:"1026"})}),"\n",(0,r.jsx)(n.h2,{id:"smart-contract-code",children:"Smart Contract code"}),"\n",(0,r.jsxs)(n.p,{children:["The code for the NFT smart contract can be found in the ",(0,r.jsx)(n.a,{href:"/tutorials/nfts/introduction",children:"Zero to Hero NFT tutorial"}),"'s  ",(0,r.jsx)(n.a,{href:"https://github.com/near-examples/nft-tutorial/tree/main/nft-contract/src",children:"GitHub repository"}),", under the ",(0,r.jsx)(n.code,{children:"main"})," branch."]}),"\n",(0,r.jsx)(n.p,{children:"The contract methods used in this application are as follows:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"nft_mint"}),": Function used to mint tokens."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"check_token"}),": Custom function created to check for the existence of a token. This helps to ensure one token per user."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"front-end",children:"Front-end"}),"\n",(0,r.jsxs)(n.p,{children:["The front-end of the contract was implemented using ",(0,r.jsx)(n.code,{children:"create-near-app"}),". ",(0,r.jsx)(n.a,{href:"https://react-bootstrap.github.io/",children:"React Bootstrap"})," was used for the styling of the application."]}),"\n",(0,r.jsx)(n.p,{children:"To bootstrap your React front-end, run the following command on your terminal:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"npx create-near-app --frontend react --contract rust\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then, simply import the contract files from the ",(0,r.jsx)(n.code,{children:"main"})," branch, and you'll have the needed structure to run the application."]}),"\n",(0,r.jsx)(n.h3,{id:"start",children:"Start"}),"\n",(0,r.jsx)(n.p,{children:"Upon mounting the application's components, the app checks for the existence of a non-fungible token."}),"\n",(0,r.jsx)(i.Ey,{language:"js",start:"24",end:"46",url:"https://github.com/near-examples/nft-tutorial-frontend/blob/master/src/App.js"}),"\n",(0,r.jsx)(n.p,{children:"If no prior NFT has been minted, the mint button will be available for use."}),"\n",(0,r.jsx)(n.h3,{id:"mint-button",children:"Mint button"}),"\n",(0,r.jsx)(n.p,{children:"Here is the function behind the mint button. The meta data has been filled out for the user already:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"token_id"})," is set by the user's account id,"]}),"\n",(0,r.jsxs)(n.li,{children:["and the ",(0,r.jsx)(n.code,{children:"media"})," link is hard-coded to a ",(0,r.jsx)(n.code,{children:"goteam-gif.gif"})," hosted on IPFS."]}),"\n"]}),"\n",(0,r.jsx)(i.Ey,{language:"js",start:"7",end:"23",url:"https://github.com/near-examples/nft-tutorial-frontend/blob/master/src/Components/MintingTool.js"}),"\n",(0,r.jsxs)(n.p,{children:["After hitting the ",(0,r.jsx)("kbd",{children:"Mint NFT"})," button the user will be able to check out the newly minted NFT at ",(0,r.jsx)(n.a,{href:"https://testnet.mynearwallet.com//?tab=collectibles",children:"wallet.testnet.near.org"}),", under the Wallet's ",(0,r.jsx)(n.code,{children:"Collectibles"})," tab."]}),"\n",(0,r.jsx)(n.h2,{id:"final-remarks",children:"Final remarks"}),"\n",(0,r.jsxs)(n.p,{children:["You can find the complete application repository ",(0,r.jsx)(n.a,{href:"https://github.com/near-examples/nft-tutorial-frontend",children:"on GitHub"})," to clone and run. In the configuration folder you can see that this smart contract has been deployed to ",(0,r.jsx)(n.code,{children:"nft-frontend-simple-mint.blockhead.testnet"}),":"]}),"\n",(0,r.jsx)(i.Ey,{language:"js",start:"1",end:"2",url:"https://github.com/near-examples/nft-tutorial-frontend/blob/master/src/config.js"}),"\n",(0,r.jsxs)(n.p,{children:["You can also check out the ",(0,r.jsx)(n.a,{href:"https://testnet.nearblocks.io/address/nft-frontend-simple-mint.blockhead.testnet",children:"explorer link here"})," to see how many individuals have been minting their own ",(0,r.jsx)(n.em,{children:"Go Team"})," NFTs. ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Happy Minting!"})})]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Clone and run this example from ",(0,r.jsx)(n.a,{href:"https://github.com/near-examples/nft-tutorial-frontend",children:"https://github.com/near-examples/nft-tutorial-frontend"})]})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>o});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var i=t(85893);function o(e){var n=e.children,t=e.hidden,o=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(67294),a=t(36905),i=t(12466),o=t(16550),l=t(20469),s=t(91980),u=t(67392),c=t(50012);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,u.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function f(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,i=(0,o.k6)(),l=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((function(e){if(l){var n=new URLSearchParams(i.location.search);n.set(l,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[l,i])]}function m(e){var n,t,a,i,o=e.defaultValue,s=e.queryString,u=void 0!==s&&s,d=e.groupId,m=h(e),b=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:m})})),g=b[0],v=b[1],x=p({queryString:u,groupId:d}),j=x[0],y=x[1],k=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,c.Nk)(n),a=t[0],i=t[1],[a,(0,r.useCallback)((function(e){n&&i.set(e)}),[n,i])]),T=k[0],w=k[1],N=function(){var e=null!=j?j:T;return f({value:e,tabValues:m})?e:null}();return(0,l.Z)((function(){N&&v(N)}),[N]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!f({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),w(e)}),[y,w,m]),tabValues:m}}var b=t(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(85893);function x(e){var n=e.className,t=e.block,r=e.selectedValue,o=e.selectValue,l=e.tabValues,s=[],u=(0,i.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,t=s.indexOf(n),a=l[t].value;a!==r&&(u(n),o(a))},d=function(e){var n,t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,a=s.indexOf(e.currentTarget)+1;t=null!=(r=s[a])?r:s[0];break;case"ArrowLeft":var i,o=s.indexOf(e.currentTarget)-1;t=null!=(i=s[o])?i:s[s.length-1]}null==(n=t)||n.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:l.map((function(e){var n=e.value,t=e.label,i=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return s.push(e)},onKeyDown:d,onClick:c},i,{className:(0,a.Z)("tabs__item",g.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function j(e){var n=e.lazy,t=e.children,a=e.selectedValue,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var o=i.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function y(e){var n=m(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(x,Object.assign({},e,n)),(0,v.jsx)(j,Object.assign({},e,n))]})}function k(e){var n=(0,b.Z)();return(0,v.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(n))}},77229:(e,n,t)=>{t.d(n,{Ey:()=>c,O2:()=>s,SQ:()=>u});t(67294);var r=t(74866),a=t(85162),i=t(95665),o=t.n(i),l=t(85893);function s(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,l.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,l.jsx)(a.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function u(e){var n=e.children,t=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var t=e.props,r=(t.children,t.url),a=t.start,i=t.end,o=t.fname;if(e.type===c)return c({url:r,start:a,end:i,language:n,fname:o});return e}(e,t)})),1==n.length?(0,l.jsx)(a.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,l.jsx)(r.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,l.jsx)(a.Z,{value:n,label:e.props.fname,children:e})}))})}function c(e){var n=e.url,t=e.start,r=e.end,a=e.language,i=e.fname,s=n+"#";return t&&r&&(s+="L"+t+"-L"+r+"#"),(0,l.jsx)(o(),{language:a,fname:i,children:s})}},6610:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/nft-mint-frontend-8bc5c90aa325d1408f13519e44664aee.png"}}]);
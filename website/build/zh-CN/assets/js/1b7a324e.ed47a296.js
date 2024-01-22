"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9075],{42933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var a=n(85893),r=n(11151),s=n(77229);const o=n.p+"assets/images/create-mainnet-account-d624261d742f39effc6ff8e351d22b75.png",c=n.p+"assets/images/create-testnet-wallet-account-6bcfc4b15c7ff93126ae723be2ab3701.png",l={sidebar_position:4,sidebar_label:"Linkdrop contract",title:"Introducing the linkdrop contract we can use"},i="The linkdrop contract",d={id:"tutorials/crosswords/intermediate/linkdrop",title:"Introducing the linkdrop contract we can use",description:"We're going to take a small detour to talk about the linkdrop smart contract.  It's best that we first understand this contract and its purpose, then discuss calling a method on this contract.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/3.tutorials/crosswords/03-intermediate/03-linkdrop.md",sourceDirName:"3.tutorials/crosswords/03-intermediate",slug:"/tutorials/crosswords/intermediate/linkdrop",permalink:"/zh-CN/tutorials/crosswords/intermediate/linkdrop",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/03-intermediate/03-linkdrop.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"2024\u5e741\u670811\u65e5",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Linkdrop contract",title:"Introducing the linkdrop contract we can use"},sidebar:"contracts",previous:{title:"Seed phrase logic",permalink:"/zh-CN/tutorials/crosswords/intermediate/use-seed-phrase"},next:{title:"Cross-contract calls, etc.",permalink:"/zh-CN/tutorials/crosswords/intermediate/cross-contract-calls"}},u={},h=[{value:"Testnet",id:"testnet",level:2},{value:"Mainnet",id:"mainnet",level:2},{value:"A simple callback",id:"a-simple-callback",level:2},{value:"The <code>create_account</code> method",id:"the-create_account-method",level:3},{value:"The callback",id:"the-callback",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"the-linkdrop-contract",children:"The linkdrop contract"}),"\n",(0,a.jsx)(t.p,{children:"We're going to take a small detour to talk about the linkdrop smart contract.  It's best that we first understand this contract and its purpose, then discuss calling a method on this contract."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://github.com/near/near-linkdrop",children:"The linkdrop contract"})," is deployed to the accounts ",(0,a.jsx)(t.code,{children:"testnet"})," and ",(0,a.jsx)(t.code,{children:"near"}),", which are known as the top-level accounts of the testnet and mainnet network, respectively. (Anyone can create a linkdrop-style contract elsewhere, but the one shown here is the main one that others are patterned off of.)"]}),"\n",(0,a.jsx)(t.h2,{id:"testnet",children:"Testnet"}),"\n",(0,a.jsx)(t.p,{children:"There\u2019s nothing special about testnet accounts; there is no real-world cost to you as a developer when creating testnet accounts, so feel free to create or delete at your convenience."}),"\n",(0,a.jsx)(t.p,{children:"When a user signs up for a testnet account on NEAR Wallet, they'll see this:"}),"\n",(0,a.jsx)("img",{src:c,width:"400"}),"\n",(0,a.jsx)(t.p,{children:"Let's discuss how this testnet account gets created."}),"\n",(0,a.jsxs)(t.p,{children:["Notice the new account will end in ",(0,a.jsx)(t.code,{children:".testnet"}),". This is because the account ",(0,a.jsx)(t.code,{children:"testnet"})," will create a subaccount (like we learned about ",(0,a.jsx)(t.a,{href:"/zh-CN/tutorials/crosswords/basics/add-functions-call#create-a-subaccount",children:"earlier in this tutorial"}),") called ",(0,a.jsx)(t.code,{children:"vacant-name.testnet"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"There are two ways to create this subaccount:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Use a full-access key for the account ",(0,a.jsx)(t.code,{children:"testnet"})," to sign a transaction with the ",(0,a.jsx)(t.code,{children:"CreateAccount"})," Action."]}),"\n",(0,a.jsxs)(t.li,{children:["In a smart contract deployed to the ",(0,a.jsx)(t.code,{children:"testnet"})," account, call the ",(0,a.jsx)(t.code,{children:"CreateAccount"})," Action, which is an async method that returns a Promise. (More info about writing a ",(0,a.jsxs)(t.a,{href:"/sdk/rust/promises/create-account",children:[(0,a.jsx)(t.code,{children:"CreateAccount"})," Promise"]}),".)"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["(In the example below that uses NEAR CLI to create a new account, it's calling ",(0,a.jsx)(t.code,{children:"CreateAccount"}),' on the linkdrop contract that is deployed to the top level "near" account on mainnet.)']}),"\n",(0,a.jsx)(t.h2,{id:"mainnet",children:"Mainnet"}),"\n",(0,a.jsxs)(t.p,{children:["On mainnet, the account ",(0,a.jsx)(t.code,{children:"near"})," also has the linkdrop contract deployed to it."]}),"\n",(0,a.jsx)(t.p,{children:"Using NEAR CLI, a person can create a mainnet account by calling the linkdrop contract, like shown below:"}),"\n",(0,a.jsx)("img",{src:o}),"\n",(0,a.jsxs)(t.p,{children:["The above command calls the ",(0,a.jsx)(t.code,{children:"create_account"})," method on the account ",(0,a.jsx)(t.code,{children:"near"}),", and would create ",(0,a.jsx)(t.code,{children:"aloha.near"})," ",(0,a.jsx)(t.strong,{children:"if it's available"}),", funding it with 15 \u24c3."]}),"\n",(0,a.jsxs)(t.p,{children:["We'll want to write a smart contract that calls that same method. However, things get interesting because it's possible ",(0,a.jsx)(t.code,{children:"aloha.near"})," is already taken, so we'll need to learn how to handle that."]}),"\n",(0,a.jsx)(t.h2,{id:"a-simple-callback",children:"A simple callback"}),"\n",(0,a.jsxs)(t.h3,{id:"the-create_account-method",children:["The ",(0,a.jsx)(t.code,{children:"create_account"})," method"]}),"\n",(0,a.jsxs)(t.p,{children:["Here, we'll show the implementation of the ",(0,a.jsx)(t.code,{children:"create_account"})," method. Note the ",(0,a.jsx)(t.code,{children:"#[payable]"})," macro, which allows this function to accept an attached deposit. (Remember in the CLI command we were attaching 15 \u24c3.)"]}),"\n",(0,a.jsx)(s.Ey,{language:"rust",start:"125",end:"149",url:"https://github.com/near/near-linkdrop/blob/ba94a9c7292d3b48a0a8ba380fb0e7ff6b24efc6/src/lib.rs"}),"\n",(0,a.jsx)(t.p,{children:"The most important part of the snippet above is around the middle where there's:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rs",children:"Promise::new(...)\n    ...\n    .then(\n        Self::ext(env::current_account_id())\n            .on_account_created(...)\n    )\n"})}),"\n",(0,a.jsxs)(t.p,{children:["This translates to, \"we're going to attempt to perform an Action, and when we're done, please call myself at the method ",(0,a.jsx)(t.code,{children:"on_account_created"}),' so we can see how that went."']}),"\n",(0,a.jsxs)(t.admonition,{title:"This doesn't work",type:"caution",children:[(0,a.jsx)(t.p,{children:"Not infrequently, developers will attempt to do this in a smart contract:"}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:'let creation_result = Promise::new("aloha.mike.near")\n  .create_account();\n\n// Check creation_result variable (can\'t do it!)\nif creation_result {...}\n\n'})}),(0,a.jsx)(t.p,{children:"In other programming languages promises might work like this, but we must use callbacks instead. :::"}),(0,a.jsx)(t.h3,{id:"the-callback",children:"The callback"}),(0,a.jsx)(t.p,{children:"Now let's look at the callback:"}),(0,a.jsx)(s.Ey,{language:"rust",start:"151",end:"164",url:"https://github.com/near/near-linkdrop/blob/ba94a9c7292d3b48a0a8ba380fb0e7ff6b24efc6/src/lib.rs"}),(0,a.jsxs)(t.p,{children:["This calls the private helper method ",(0,a.jsx)(t.code,{children:"is_promise_success"}),", which basically checks to see that there was only one promise result, because we only attempted one Promise:"]}),(0,a.jsx)(s.Ey,{language:"rust",start:"32",end:"42",url:"https://github.com/near/near-linkdrop/blob/ba94a9c7292d3b48a0a8ba380fb0e7ff6b24efc6/src/lib.rs"}),(0,a.jsxs)(t.p,{children:["Note that the callback returns a boolean. This means when we modify our crossword puzzle to call the linkdrop contract on ",(0,a.jsx)(t.code,{children:"testnet"}),", we'll be able to determine if the account creation succeeded or failed."]}),(0,a.jsx)(t.p,{children:"And that's it! Now we've seen a method and a callback in action for a simple contract."}),(0,a.jsxs)(t.admonition,{title:"This is important Understanding cross-contract calls and callbacks is quite important in smart contract development.",type:"tip",children:[(0,a.jsx)(t.p,{children:"Since NEAR's transactions are asynchronous, the use of callbacks may be a new paradigm shift for smart contract developers from other ecosystems."}),(0,a.jsx)(t.p,{children:"Feel free to dig into the linkdrop contract and play with the ideas presented in this section."}),(0,a.jsx)(t.p,{children:"There are two additional examples that are helpful to look at:"}),(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://github.com/near/near-sdk-rs/blob/master/examples/cross-contract-calls/high-level/src/lib.rs",children:"High-level cross-contract calls"})," \u2014 this is similar what we've seen in the linkdrop contract."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://github.com/near/near-sdk-rs/blob/master/examples/cross-contract-calls/low-level/src/lib.rs",children:"Low-level cross-contract calls"})," \u2014 a different approach where you don't use the traits we mentioned. :::"]}),"\n"]}),(0,a.jsx)(t.hr,{}),(0,a.jsx)(t.p,{children:"Next we'll modify the crossword puzzle contract to check for the signer's public key, which is how we now determine if they solved the puzzle correctly."})]})]})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var a=n(36905);const r={tabItem:"tabItem_Ymn6"};var s=n(85893);function o(e){var t=e.children,n=e.hidden,o=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(67294),r=n(36905),s=n(12466),o=n(16550),c=n(20469),l=n(91980),i=n(67392),d=n(50012);function u(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return u(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,i.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,s=(0,o.k6)(),c=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:r});return[(0,l._X)(c),(0,a.useCallback)((function(e){if(c){var t=new URLSearchParams(s.location.search);t.set(c,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[c,s])]}function b(e){var t,n,r,s,o=e.defaultValue,l=e.queryString,i=void 0!==l&&l,u=e.groupId,b=h(e),f=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:b})})),v=f[0],g=f[1],w=m({queryString:i,groupId:u}),x=w[0],j=w[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,d.Nk)(t),r=n[0],s=n[1],[r,(0,a.useCallback)((function(e){t&&s.set(e)}),[t,s])]),y=k[0],T=k[1],N=function(){var e=null!=x?x:y;return p({value:e,tabValues:b})?e:null}();return(0,c.Z)((function(){N&&g(N)}),[N]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:b}))throw new Error("Can't select invalid tab value="+e);g(e),j(e),T(e)}),[j,T,b]),tabValues:b}}var f=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(85893);function w(e){var t=e.className,n=e.block,a=e.selectedValue,o=e.selectValue,c=e.tabValues,l=[],i=(0,s.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=l.indexOf(t),r=c[n].value;r!==a&&(i(t),o(r))},u=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=l.indexOf(e.currentTarget)+1;n=null!=(a=l[r])?a:l[0];break;case"ArrowLeft":var s,o=l.indexOf(e.currentTarget)-1;n=null!=(s=l[o])?s:l[l.length-1]}null==(t=n)||t.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:c.map((function(e){var t=e.value,n=e.label,s=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return l.push(e)},onKeyDown:u,onClick:d},s,{className:(0,r.Z)("tabs__item",v.tabItem,null==s?void 0:s.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function x(e){var t=e.lazy,n=e.children,r=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=s.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function j(e){var t=b(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(w,Object.assign({},e,t)),(0,g.jsx)(x,Object.assign({},e,t))]})}function k(e){var t=(0,f.Z)();return(0,g.jsx)(j,Object.assign({},e,{children:u(e.children)}),String(t))}},77229:(e,t,n)=>{n.d(t,{Ey:()=>d,O2:()=>l,SQ:()=>i});n(67294);var a=n(74866),r=n(85162),s=n(95665),o=n.n(s),c=n(85893);function l(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,c.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,c.jsx)(r.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function i(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,a=(n.children,n.url),r=n.start,s=n.end,o=n.fname;if(e.type===d)return d({url:a,start:r,end:s,language:t,fname:o});return e}(e,n)})),1==t.length?(0,c.jsx)(r.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,c.jsx)(a.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,c.jsx)(r.Z,{value:t,label:e.props.fname,children:e})}))})}function d(e){var t=e.url,n=e.start,a=e.end,r=e.language,s=e.fname,l=t+"#";return n&&a&&(l+="L"+n+"-L"+a+"#"),(0,c.jsx)(o(),{language:r,fname:s,children:l})}}}]);
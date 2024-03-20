"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8497],{44803:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>x,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var r=t(85893),a=t(11151),s=t(74866),c=t(85162),i=t(77229);const o={id:"quickstart",title:"Hello Contract",sidebar_label:"Quickstart \u2728"},l=void 0,d={id:"develop/contracts/quickstart",title:"Hello Contract",description:"NEAR accounts can host programs known as smart contracts. Smart contracts can store data, and expose methods so other users and contracts interact with them.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/2.develop/contracts/quickstart.md",sourceDirName:"2.develop/contracts",slug:"/develop/contracts/quickstart",permalink:"/zh-CN/develop/contracts/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/contracts/quickstart.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665,formattedLastUpdatedAt:"2024\u5e742\u670828\u65e5",frontMatter:{id:"quickstart",title:"Hello Contract",sidebar_label:"Quickstart \u2728"},sidebar:"build",previous:{title:"What is a Contract?",permalink:"/zh-CN/develop/contracts/whatisacontract"},next:{title:"Modules, Types & Structs",permalink:"/zh-CN/develop/contracts/basics"}},h={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating the Contract",id:"creating-the-contract",level:2},{value:"The Contract",id:"the-contract",level:2},{value:"Build and Test",id:"build-and-test",level:2},{value:"Create a Testnet Account",id:"create-a-testnet-account",level:2},{value:"Deploy the Contract",id:"deploy-the-contract",level:2},{value:"Interacting with the Contract",id:"interacting-with-the-contract",level:2},{value:"Get Greeting",id:"get-greeting",level:4},{value:"Set Greeting",id:"set-greeting",level:4},{value:"Moving Forward",id:"moving-forward",level:2}];function g(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{Details:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/zh-CN/concepts/basics/accounts/model",children:"NEAR accounts"})," can host programs known as smart contracts. Smart contracts can ",(0,r.jsx)(n.strong,{children:"store data"}),", and ",(0,r.jsx)(n.strong,{children:"expose methods"})," so other users and contracts interact with them."]}),"\n",(0,r.jsxs)(n.p,{children:["In this quickstart tutorial, we will guide you in creating your first smart contract in the NEAR ",(0,r.jsx)(n.strong,{children:"testnet"})," that stores and retrieves a greeting."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"Before starting, make sure you have the following installed:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://nodejs.org/en/download",children:"Node.js"}),", to use our scaffolding tool."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/tools/near-cli#installation",children:"NEAR CLI"})," or ",(0,r.jsx)(n.a,{href:"/tools/near-cli-rs",children:"NEAR CLI-RS"}),", to deploy and interact with the contract."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/near/cargo-near",children:"cargo-near"}),", to easily create testnet accounts."]}),"\n",(0,r.jsxs)(n.li,{children:["(optional) ",(0,r.jsx)(n.a,{href:"https://www.Rust-lang.org/tools/install",children:"Rust"}),", to create Rust contracts."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"Easy Install",type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NEAR-CLI:"})," Install both ",(0,r.jsx)(n.code,{children:"near-cli"})," and ",(0,r.jsx)(n.code,{children:"cargo-near"})," tools using"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"npm i -g near-cli cargo-near\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NEAR-CLI-RS:"})," Install both ",(0,r.jsx)(n.code,{children:"near-cli-rs"})," and ",(0,r.jsx)(n.code,{children:"cargo-near"})," tools using"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"npm i -g near-cli-rs cargo-near\n"})}),"\n"]}),"\n"]})}),"\n",(0,r.jsxs)(n.admonition,{title:"Testnet Account",type:"info",children:[(0,r.jsxs)(n.p,{children:["There is no need to have a ",(0,r.jsx)(n.code,{children:"testnet"})," account to follow this tutorial."]}),(0,r.jsxs)(n.p,{children:["However, if you want to create one, you can do so through ",(0,r.jsx)(n.a,{href:"https://testnet.mynearwallet.com",children:"a wallet"}),", and use it from the ",(0,r.jsx)(n.code,{children:"near-cli"})," by invoking ",(0,r.jsx)(n.code,{children:"near login"}),". (if you prefer ",(0,r.jsx)(n.code,{children:"near-cli-rs"}),", use ",(0,r.jsx)(n.code,{children:"near account"}),")"]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"creating-the-contract",children:"Creating the Contract"}),"\n",(0,r.jsxs)(n.p,{children:["Create a smart contract by running our ",(0,r.jsx)(n.code,{children:"create-near-app"})," scaffolding tool and following the interactive menu."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"  npx create-near-app@latest\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{alt:"img",src:t(67700).Z+"",width:"800",height:"574"}),"\n",(0,r.jsx)(n.em,{children:"create-near-app in action"})]}),"\n",(0,r.jsx)(n.p,{children:"The resulting folder structure will change slightly depending on the chosen language. Here is the general structure you can expect to see:"}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(c.Z,{value:"\ud83c\udf10 JavaScript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 contract.ts # contract's code\n\u251c\u2500\u2500 sandbox-ts      # sanbox testing\n\u2502   \u251c\u2500\u2500 ava.config.cjs\n\u2502   \u251c\u2500\u2500 package.json\n\u2502   \u2514\u2500\u2500 src\n\u2502       \u2514\u2500\u2500 main.ava.ts\n\u251c\u2500\u2500 package.json    # package manager\n\u2514\u2500\u2500 tsconfig.json\n"})})}),(0,r.jsx)(c.Z,{value:"\ud83e\udd80 Rust",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 lib.rs # contract's code\n\u251c\u2500\u2500 sandbox-rs # sandbox testing\n\u2502   \u251c\u2500\u2500 Cargo.toml\n\u2502   \u2514\u2500\u2500 src\n\u2502       \u2514\u2500\u2500 tests.rs\n\u251c\u2500\u2500 build.sh   # build script\n\u251c\u2500\u2500 test.sh    # test script\n\u251c\u2500\u2500 deploy.sh  # deploy script\n\u251c\u2500\u2500 .cargo\n\u2502   \u2514\u2500\u2500 config\n\u2514\u2500\u2500 Cargo.toml # package manager\n"})})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"the-contract",children:"The Contract"}),"\n",(0,r.jsxs)(n.p,{children:["Your new smart contract stores a ",(0,r.jsx)(n.code,{children:"greeting: string"})," attribute in their state, and exposes two methods to interact with it (",(0,r.jsx)(n.code,{children:"set_greeting"}),", ",(0,r.jsx)(n.code,{children:"get_greeting"}),")."]}),"\n",(0,r.jsxs)(i.O2,{children:[(0,r.jsx)(i.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,r.jsx)(i.Ey,{fname:"index.js",url:"https://github.com/near-examples/hello-near-examples/blob/main/contract-ts/src/contract.ts",start:"3",end:"18"})}),(0,r.jsx)(i.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,r.jsx)(i.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/hello-near-examples/blob/main/contract-rs/src/lib.rs",start:"4",end:"36"})})]}),"\n",(0,r.jsx)(n.p,{children:"There are 3 important things to notice:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"get_greeting"})," method is a ",(0,r.jsx)(n.a,{href:"/zh-CN/develop/contracts/anatomy#public-methods",children:(0,r.jsx)(n.code,{children:"view"})})," method, meaning it only reads from the contract and can be called for free by anyone."]}),"\n",(0,r.jsxs)(n.li,{children:["By default, the contract is initialized with the ",(0,r.jsx)(n.code,{children:"greeting"})," attribute set to ",(0,r.jsx)(n.code,{children:'"Hello"'}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"set_greeting"})," method is a ",(0,r.jsx)(n.a,{href:"/zh-CN/develop/contracts/anatomy#public-methods",children:(0,r.jsx)(n.code,{children:"change"})})," method, meaning it modifies the contract's state and requires a user to sign a transaction in order to be executed."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"build-and-test",children:"Build and Test"}),"\n",(0,r.jsx)(n.p,{children:"Building and testing the contract is as simple as running two commands."}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(c.Z,{value:"\ud83c\udf10 JavaScript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run build\nnpm run test\n\n# Expected:\n# returns the default greeting \u2705\n# changes the greeting \u2705\n"})})}),(0,r.jsx)(c.Z,{value:"\ud83e\udd80 Rust",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"./build.sh\n./test.sh\n\n# Expected:\n# Passed \u2705 gets default greeting\n# Passed \u2705 changes the greeting\n"})})})]}),"\n",(0,r.jsxs)(o,{children:[(0,r.jsx)("summary",{children:" Failing tests? "}),(0,r.jsxs)(n.p,{children:["If the tests are failing, make sure that you are using ",(0,r.jsx)(n.code,{children:"node v16"})," and the ",(0,r.jsx)(n.code,{children:"toolchain v1.69"})," in ",(0,r.jsx)(n.code,{children:"rust"}),". You can always use"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"nvm use 16"})," to switch to ",(0,r.jsx)(n.code,{children:"node v16"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"rustup default 1.68"})," to switch to ",(0,r.jsx)(n.code,{children:"toolchain v1.69"})]}),"\n"]})]}),"\n",(0,r.jsxs)(n.p,{children:["In the background, these commands are calling the build tools for each language and invoking the ",(0,r.jsx)(n.a,{href:"/zh-CN/develop/testing/integration-test",children:"Sandbox"})," tests from the ",(0,r.jsx)(n.code,{children:"sandbox-ts/rs"})," directory."]}),"\n",(0,r.jsx)(n.admonition,{title:"Sandbox",type:"tip",children:(0,r.jsx)(n.p,{children:"Testing the contracts within a Sandbox allows you to understand how the contract will behave once deployed to the network while having total control over the testing environment."})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"create-a-testnet-account",children:"Create a Testnet Account"}),"\n",(0,r.jsx)(n.p,{children:"Now that we know the contract is passing the tests, let's create a testnet account in which to deploy the contract."}),"\n",(0,r.jsxs)(n.p,{children:["While there are different ways to ",(0,r.jsx)(n.a,{href:"/concepts/basics/accounts/creating-accounts",children:"create accounts"})," in NEAR, in this quickstart we will use the ",(0,r.jsx)(n.code,{children:"cargo-near"})," tool to create a new random ",(0,r.jsx)(n.a,{href:"/concepts/basics/accounts/account-id",children:(0,r.jsx)(n.code,{children:"named account"})}),"."]}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(c.Z,{value:"\ud83c\udf10 JavaScript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# install cargo-near\nnpm i -g cargo-near\n"})})}),(0,r.jsx)(c.Z,{value:"\ud83e\udd80 Rust",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# install cargo-near\ncargo install cargo-near\n"})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# create a new testnet account with a random name\ncargo-near near create-dev-account use-random-account-id autogenerate-new-keypair save-to-legacy-keychain network-config testnet create\n"})}),"\n",(0,r.jsxs)(o,{children:[(0,r.jsx)("summary",{children:" Example Result "}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'New account "lovely-event.testnet" created successfully.\n'})})]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Here we are creating a random account since we do not care about the account's name. Remember that you can create a named account through any wallet (i.e. ",(0,r.jsx)(n.a,{href:"https://testnet.mynearwallet.com",children:"MyNearWallet"}),") and then use it from the ",(0,r.jsx)(n.code,{children:"near-cli"})," by invoking ",(0,r.jsx)(n.code,{children:"near login"}),". (if you prefer ",(0,r.jsx)(n.code,{children:"near-cli-rs"}),", use ",(0,r.jsx)(n.code,{children:"near account"}),")"]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"deploy-the-contract",children:"Deploy the Contract"}),"\n",(0,r.jsx)(n.p,{children:"Having our account created, we can now deploy the contract into it:"}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(c.Z,{value:"\ud83c\udf10 JavaScript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"near deploy --wasmFile build/release/hello.wasm --accountId <created-account>\n"})})}),(0,r.jsx)(c.Z,{value:"\ud83e\udd80 Rust",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"near deploy --wasmFile ./target/wasm32-unknown-unknown/release/hello_near.wasm --accountId <created-account>\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Congrats"}),"! your contract now lives in the NEAR testnet network."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"interacting-with-the-contract",children:"Interacting with the Contract"}),"\n",(0,r.jsxs)(n.p,{children:["To interact with your deployed smart contract you can call its methods using the ",(0,r.jsx)(n.code,{children:"near-cli"})," or ",(0,r.jsx)(n.code,{children:"near-cli-rs"})," tools."]}),"\n",(0,r.jsx)(n.h4,{id:"get-greeting",children:"Get Greeting"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"get_greeting"})," method is a ",(0,r.jsx)(n.a,{href:"/zh-CN/develop/contracts/anatomy#public-methods",children:(0,r.jsx)(n.code,{children:"view"})})," method, meaning it only reads from the contract's state, and thus can be called for ",(0,r.jsx)(n.strong,{children:"free"}),"."]}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(c.Z,{value:"near-cli",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'> near view <created-account> get_greeting\n\n"Hello" # Response\n'})})}),(0,r.jsx)(c.Z,{value:"near-cli-rs",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'> near contract call-function as-read-only <created-account> get_greeting\n\n"Hello" # Response\n'})})})]}),"\n",(0,r.jsx)(n.h4,{id:"set-greeting",children:"Set Greeting"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"set_greeting"})," method is a ",(0,r.jsx)(n.a,{href:"/zh-CN/develop/contracts/anatomy#public-methods",children:(0,r.jsx)(n.code,{children:"change"})})," method, meaning it modifies the contract's state, and thus requires a user to sign a transaction in order to be executed."]}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsxs)(c.Z,{value:"near-cli",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'> near call <created-account> set_greeting \'{"greeting": "Hola"}\' --accountId <created-account>\n\nLog: Saving greeting "Hola" # Response\n'})}),(0,r.jsxs)(n.p,{children:["In this case we are asking the account that stores the contract to call its own contract's method (",(0,r.jsx)(n.code,{children:"--accountId <created-account>"}),")."]})]}),(0,r.jsxs)(c.Z,{value:"near-cli-rs",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'> near contract call-function as-transaction <created-account> set_greeting \'{"greeting": "Hola"}\' sign-as <created-account>\n\nLog: Saving greeting "Hola" # Response\n'})}),(0,r.jsxs)(n.p,{children:["In this case we are asking the account that stores the contract to call its own contract's method (",(0,r.jsx)(n.code,{children:"sign-as <created-account>"}),")."]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"moving-forward",children:"Moving Forward"}),"\n",(0,r.jsx)(n.p,{children:"That's it for the quickstart tutorial. You have now seen a fully functional contract with a minimal user interface and testing."}),"\n",(0,r.jsxs)(n.p,{children:["Go ahead and check other ",(0,r.jsx)(n.a,{href:"/tutorials/examples/guest-book",children:"examples"})," or proceed straight to the ",(0,r.jsx)(n.a,{href:"/zh-CN/develop/contracts/anatomy",children:"Develop section"})," to know how to write your own contract."]}),"\n",(0,r.jsxs)(n.p,{children:["If you have any questions, do not hesitate in joining us on ",(0,r.jsx)(n.a,{href:"https://near.chat",children:"Discord"}),". We regularly host Office Hours, in which you can join our voice channel and ask questions."]}),"\n",(0,r.jsx)(n.p,{children:"Happy coding! \ud83d\ude80"})]})}function x(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>c});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var s=t(85893);function c(e){var n=e.children,t=e.hidden,c=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,c),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var r=t(67294),a=t(36905),s=t(12466),c=t(16550),i=t(20469),o=t(91980),l=t(67392),d=t(50012);function h(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function u(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return h(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,l.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function g(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function x(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,s=(0,c.k6)(),i=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,o._X)(i),(0,r.useCallback)((function(e){if(i){var n=new URLSearchParams(s.location.search);n.set(i,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[i,s])]}function p(e){var n,t,a,s,c=e.defaultValue,o=e.queryString,l=void 0!==o&&o,h=e.groupId,p=u(e),j=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:c,tabValues:p})})),m=j[0],f=j[1],v=x({queryString:l,groupId:h}),b=v[0],w=v[1],y=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),t=(0,d.Nk)(n),a=t[0],s=t[1],[a,(0,r.useCallback)((function(e){n&&s.set(e)}),[n,s])]),k=y[0],N=y[1],C=function(){var e=null!=b?b:k;return g({value:e,tabValues:p})?e:null}();return(0,i.Z)((function(){C&&f(C)}),[C]),{selectedValue:m,selectValue:(0,r.useCallback)((function(e){if(!g({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);f(e),w(e),N(e)}),[w,N,p]),tabValues:p}}var j=t(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(85893);function v(e){var n=e.className,t=e.block,r=e.selectedValue,c=e.selectValue,i=e.tabValues,o=[],l=(0,s.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=o.indexOf(n),a=i[t].value;a!==r&&(l(n),c(a))},h=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=o.indexOf(e.currentTarget)+1;t=null!=(r=o[a])?r:o[0];break;case"ArrowLeft":var s,c=o.indexOf(e.currentTarget)-1;t=null!=(s=o[c])?s:o[o.length-1]}null==(n=t)||n.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:i.map((function(e){var n=e.value,t=e.label,s=e.attributes;return(0,f.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return o.push(e)},onKeyDown:h,onClick:d},s,{className:(0,a.Z)("tabs__item",m.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function b(e){var n=e.lazy,t=e.children,a=e.selectedValue,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var c=s.find((function(e){return e.props.value===a}));return c?(0,r.cloneElement)(c,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function w(e){var n=p(e);return(0,f.jsxs)("div",{className:(0,a.Z)("tabs-container",m.tabList),children:[(0,f.jsx)(v,Object.assign({},e,n)),(0,f.jsx)(b,Object.assign({},e,n))]})}function y(e){var n=(0,j.Z)();return(0,f.jsx)(w,Object.assign({},e,{children:h(e.children)}),String(n))}},77229:(e,n,t)=>{t.d(n,{Ey:()=>d,O2:()=>o,SQ:()=>l});t(67294);var r=t(74866),a=t(85162),s=t(95665),c=t.n(s),i=t(85893);function o(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,i.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,i.jsx)(a.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function l(e){var n=e.children,t=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var t=e.props,r=(t.children,t.url),a=t.start,s=t.end,c=t.fname;if(e.type===d)return d({url:r,start:a,end:s,language:n,fname:c});return e}(e,t)})),1==n.length?(0,i.jsx)(a.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,i.jsx)(r.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,i.jsx)(a.Z,{value:n,label:e.props.fname,children:e})}))})}function d(e){var n=e.url,t=e.start,r=e.end,a=e.language,s=e.fname,o=n+"#";return t&&r&&(o+="L"+t+"-L"+r+"#"),(0,i.jsx)(c(),{language:a,fname:s,children:o})}},67700:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/hello-near-contracts-989cba6f4af28a2d8d8195ebd68f6563.gif"}}]);
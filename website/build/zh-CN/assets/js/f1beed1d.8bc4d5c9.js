"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6853],{77745:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(85893),a=n(11151),s=n(77229);const i={sidebar_position:2,sidebar_label:"Set up Rust and a contract skeleton",title:"Set up Rust, get a NEAR testnet account, NEAR CLI, and get a basic smart contract skeleton ready"},o="Getting started",l={id:"tutorials/crosswords/basics/set-up-skeleton",title:"Set up Rust, get a NEAR testnet account, NEAR CLI, and get a basic smart contract skeleton ready",description:"In this tutorial we'll get a testnet account, use NEAR CLI to add a key to our computer's file system, and set up the basic skeleton of a Rust smart contract.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/3.tutorials/crosswords/01-basics/01-set-up-skeleton.md",sourceDirName:"3.tutorials/crosswords/01-basics",slug:"/tutorials/crosswords/basics/set-up-skeleton",permalink:"/zh-CN/tutorials/crosswords/basics/set-up-skeleton",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/01-basics/01-set-up-skeleton.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"2024\u5e741\u670811\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Set up Rust and a contract skeleton",title:"Set up Rust, get a NEAR testnet account, NEAR CLI, and get a basic smart contract skeleton ready"},sidebar:"contracts",previous:{title:"Crossword Game Overview",permalink:"/zh-CN/tutorials/crosswords/basics/overview"},next:{title:"Add basic code, create a subaccount, and call methods",permalink:"/zh-CN/tutorials/crosswords/basics/add-functions-call"}},u={},c=[{value:"Getting a testnet account",id:"getting-a-testnet-account",level:2},{value:"Creating a new key on your computer",id:"creating-a-new-key-on-your-computer",level:2},{value:"Setting up Rust",id:"setting-up-rust",level:2},{value:"Install Rust using <code>rustup</code>",id:"install-rust-using-rustup",level:3},{value:"Add Wasm toolchain",id:"add-wasm-toolchain",level:3},{value:"Start writing Rust!",id:"start-writing-rust",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"getting-started",children:"Getting started"}),"\n",(0,r.jsx)(t.p,{children:"In this tutorial we'll get a testnet account, use NEAR CLI to add a key to our computer's file system, and set up the basic skeleton of a Rust smart contract."}),"\n",(0,r.jsx)(t.h2,{id:"getting-a-testnet-account",children:"Getting a testnet account"}),"\n",(0,r.jsxs)(t.p,{children:["Visit ",(0,r.jsx)(t.a,{href:"https://testnet.mynearwallet.com/",children:"NEAR Wallet for testnet"})," and register for a free account. For the purposes of this tutorial, you may skip the option to add two-factor authentication if you wish."]}),"\n",(0,r.jsx)(t.admonition,{title:"What just happened?",type:"note",children:(0,r.jsx)(t.p,{children:"When you created your NEAR testnet account, a private key was created and placed into your browser's local storage. You may inspect this using developer tools and see it."})}),"\n",(0,r.jsx)(t.h2,{id:"creating-a-new-key-on-your-computer",children:"Creating a new key on your computer"}),"\n",(0,r.jsxs)(t.p,{children:["We'll want to use a command-line interface (CLI) tool to deploy a contract, but at the moment the private key only exists in the browser. Next we'll ",(0,r.jsx)(t.em,{children:"add a new key"})," to the testnet account and have this stored locally on our computer as a JSON file. (Yes, you can have multiple keys on your NEAR account, which is quite powerful!)"]}),"\n",(0,r.jsxs)(t.p,{children:["Let's install NEAR CLI. (Please ensure you ",(0,r.jsx)(t.a,{href:"https://nodejs.org/",children:"have NodeJS"})," > 12.)"]}),"\n",(0,r.jsx)(t.p,{children:"npm install -g near-cli"}),"\n",(0,r.jsx)(t.p,{children:"You may now run:"}),"\n",(0,r.jsx)(t.p,{children:"near"}),"\n",(0,r.jsxs)(t.p,{children:["to see various commands, which are covered ",(0,r.jsx)(t.a,{href:"https://docs.near.org/tools/near-cli",children:"in detail here"}),"."]}),"\n",(0,r.jsx)(t.p,{children:'We\'ll start by "logging in" with this command:'}),"\n",(0,r.jsx)(t.p,{children:"near login"}),"\n",(0,r.jsxs)(t.p,{children:["This will bring you to NEAR Wallet again where you can confirm the creation of a ",(0,r.jsx)(t.strong,{children:"full-access"})," key. We'll get to full-access and function-call access keys later, just know that for powerful actions like \"deploy\" we'll need a full-access key. Follow the instructions from the login command to create a key on your hard drive. This will be located in your operating system's home directory in a folder called ",(0,r.jsx)(t.code,{children:".near-credentials"}),"."]}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsxs)(t.mdxAdmonitionTitle,{children:["How was a key added? When you typed ",(0,r.jsx)(t.code,{children:"near login"}),', NEAR CLI generated a key pair: a private and public key. It kept the private key tucked away in a JSON file and sent the public key as a URL parameter to NEAR Wallet. The URL is long and contains other info instructing NEAR Wallet to "add a full access key" to the account. Our browser\'s local storage had a key (created when the account was made) that is able to do several things, including adding another key. It took the public key from the URL parameter, used it as an argument, and voil\xe0: the testnet account has an additional key! :::']}),(0,r.jsxs)(t.p,{children:["You can see the keys associated with your account by running the following command, replacing ",(0,r.jsx)(t.code,{children:"friend.testnet"})," with your account name:"]}),(0,r.jsx)(t.p,{children:"near keys friend.testnet"}),(0,r.jsx)(t.h2,{id:"setting-up-rust",children:"Setting up Rust"}),(0,r.jsxs)(t.p,{children:["You may have found the ",(0,r.jsx)(t.a,{href:"https://doc.rust-lang.org/stable/book",children:"online Rust Book"}),", which is a great resource for getting started with Rust. However, there are key items that are different when it comes to blockchain development. Namely, that smart contracts are ",(0,r.jsx)(t.a,{href:"https://learning-rust.github.io/docs/cargo-crates-and-basic-project-structure/#crate",children:"technically libraries and not binaries"}),", but for now just know that we won't be using some commands commonly found in the Rust Book."]}),(0,r.jsx)(t.admonition,{title:"We won't be using",type:"caution",children:(0,r.jsx)(t.p,{children:"cargo run\nduring smart contract development."})})]}),"\n",(0,r.jsx)(t.p,{children:"Instead, we'll be iterating on our smart contract by building it and running tests."}),"\n",(0,r.jsxs)(t.h3,{id:"install-rust-using-rustup",children:["Install Rust using ",(0,r.jsx)(t.code,{children:"rustup"})]}),"\n",(0,r.jsxs)(t.p,{children:["Please see the directions from the ",(0,r.jsx)(t.a,{href:"https://rustup.rs/#",children:"Rustup site"}),". For OS X or Unix, you may use:"]}),"\n",(0,r.jsxs)(t.p,{children:["curl --proto '=https' --tlsv1.2 -sSf ",(0,r.jsx)(t.a,{href:"https://sh.rustup.rs",children:"https://sh.rustup.rs"})," | sh"]}),"\n",(0,r.jsxs)(t.p,{children:["(Taken from the ",(0,r.jsx)(t.a,{href:"https://www.rust-lang.org/tools/install",children:"Rust installation guide"}),")"]}),"\n",(0,r.jsx)(t.h3,{id:"add-wasm-toolchain",children:"Add Wasm toolchain"}),"\n",(0,r.jsx)(t.p,{children:"Smart contracts compile to WebAssembly (Wasm) so we'll add the toolchain for Rust."}),"\n",(0,r.jsx)(t.p,{children:"rustup target add wasm32-unknown-unknown"}),"\n",(0,r.jsxs)(t.p,{children:["(More info on ",(0,r.jsx)(t.a,{href:"https://doc.rust-lang.org/edition-guide/rust-2018/platform-and-target-support/webassembly-support.html",children:"targets and this toolchain here"}),".)"]}),"\n",(0,r.jsx)(t.h2,{id:"start-writing-rust",children:"Start writing Rust!"}),"\n",(0,r.jsxs)(t.p,{children:["There's a basic repository that's helpful to clone or download ",(0,r.jsx)(t.a,{href:"https://github.com/near/boilerplate-template-rs",children:"located here"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["The first thing we'll do is modify the manifest file at ",(0,r.jsx)(t.code,{children:"Cargo.toml"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-diff",children:'[package]\n-  name = "rust-template"\n+  name = "my-crossword"\nversion = "0.1.0"\n- authors = ["Near Inc <hello@near.org>"]\n+ authors = ["NEAR Friend <friend@example.com>"]\nedition = "2018"\n'})}),"\n",(0,r.jsxs)(t.p,{children:["By changing the ",(0,r.jsx)(t.code,{children:"name"})," here, we'll be changing the compiled Wasm file's name after running the build script. (",(0,r.jsx)(t.code,{children:"build.sh"})," for OS X and Linux, ",(0,r.jsx)(t.code,{children:"build.bat"})," for Windows.) After running the build script, we can expect to find our compiled Wasm smart contract in ",(0,r.jsx)(t.code,{children:"res/my_crossword.wasm"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Now let's look at our main file, in ",(0,r.jsx)(t.code,{children:"src/lib.rs"}),":"]}),"\n",(0,r.jsx)(s.Ey,{language:"rust",start:"8",end:"44",url:"https://github.com/near/boilerplate-template-rs/blob/f1edeead98a9ec12c3f6db311f62025305f57874/contract/src/lib.rs"}),"\n",(0,r.jsx)(t.p,{children:"As you can see, this is a stub that's ready to be filled in. Let's pause and point out a few items:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Note the ",(0,r.jsxs)(t.a,{href:"/sdk/rust/contract-structure/near-bindgen",children:[(0,r.jsx)(t.strong,{children:"near_bindgen"})," macro"]})," is above the struct and the impl"]}),"\n",(0,r.jsxs)(t.li,{children:["Here the main struct is called ",(0,r.jsx)(t.code,{children:"Contract"}),", while in other examples it might be ",(0,r.jsx)(t.code,{children:"Counter"})," or something else. This is purely stylistic, but you may learn more from the link in the previous bullet."]}),"\n",(0,r.jsxs)(t.li,{children:["You may notice the word \"Borsh\" and wonder what that means. This is a binary serializer. Eventually, we'll want to save data as ones and zeroes to validators' hard drives, and do it efficiently. We use Borsh for this, as is explained ",(0,r.jsx)(t.a,{href:"https://borsh.io",children:"on this website"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Next, let's modify this contract little by little\u2026"})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var s=n(85893);function i(e){var t=e.children,n=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>j});var r=n(67294),a=n(36905),s=n(12466),i=n(16550),o=n(20469),l=n(91980),u=n(67392),c=n(50012);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,s=(0,i.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(s.location.search);t.set(o,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[o,s])]}function f(e){var t,n,a,s,i=e.defaultValue,l=e.queryString,u=void 0!==l&&l,d=e.groupId,f=h(e),g=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:f})})),b=g[0],y=g[1],v=m({queryString:u,groupId:d}),w=v[0],x=v[1],j=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,c.Nk)(t),a=n[0],s=n[1],[a,(0,r.useCallback)((function(e){t&&s.set(e)}),[t,s])]),k=j[0],N=j[1],R=function(){var e=null!=w?w:k;return p({value:e,tabValues:f})?e:null}();return(0,o.Z)((function(){R&&y(R)}),[R]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);y(e),x(e),N(e)}),[x,N,f]),tabValues:f}}var g=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(85893);function v(e){var t=e.className,n=e.block,r=e.selectedValue,i=e.selectValue,o=e.tabValues,l=[],u=(0,s.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=l.indexOf(t),a=o[n].value;a!==r&&(u(t),i(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,a=l.indexOf(e.currentTarget)+1;n=null!=(r=l[a])?r:l[0];break;case"ArrowLeft":var s,i=l.indexOf(e.currentTarget)-1;n=null!=(s=l[i])?s:l[l.length-1]}null==(t=n)||t.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:o.map((function(e){var t=e.value,n=e.label,s=e.attributes;return(0,y.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return l.push(e)},onKeyDown:d,onClick:c},s,{className:(0,a.Z)("tabs__item",b.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function w(e){var t=e.lazy,n=e.children,a=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=s.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function x(e){var t=f(e);return(0,y.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,y.jsx)(v,Object.assign({},e,t)),(0,y.jsx)(w,Object.assign({},e,t))]})}function j(e){var t=(0,g.Z)();return(0,y.jsx)(x,Object.assign({},e,{children:d(e.children)}),String(t))}},77229:(e,t,n)=>{n.d(t,{Ey:()=>c,O2:()=>l,SQ:()=>u});n(67294);var r=n(74866),a=n(85162),s=n(95665),i=n.n(s),o=n(85893);function l(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,o.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,o.jsx)(a.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function u(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,r=(n.children,n.url),a=n.start,s=n.end,i=n.fname;if(e.type===c)return c({url:r,start:a,end:s,language:t,fname:i});return e}(e,n)})),1==t.length?(0,o.jsx)(a.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,o.jsx)(r.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,o.jsx)(a.Z,{value:t,label:e.props.fname,children:e})}))})}function c(e){var t=e.url,n=e.start,r=e.end,a=e.language,s=e.fname,l=t+"#";return n&&r&&(l+="L"+n+"-L"+r+"#"),(0,o.jsx)(i(),{language:a,fname:s,children:l})}}}]);
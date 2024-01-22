"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[775],{2985:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>u,contentTitle:()=>h,default:()=>g,frontMatter:()=>r,metadata:()=>d,toc:()=>p});var t=n(85893),a=n(11151);const o=n.p+"assets/images/chapter-1-crossword-correct-f093ba5931ae05e401027e4b5fde27e6.gif";var i=n(39654);const c=n.p+"assets/images/function-call-action-2b02111458f75979134c13a027b3e328.png",l=n.p+"assets/images/access-keys-f3c746a11476ebf9dea14a62e3a6e109.png",r={sidebar_position:5,sidebar_label:"Access keys and login 1/2",title:"Covering access keys and login"},h="Logging in with NEAR",d={id:"tutorials/crosswords/beginner/logging-in",title:"Covering access keys and login",description:"Previously\u2026",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/3.tutorials/crosswords/02-beginner/05-logging-in.md",sourceDirName:"3.tutorials/crosswords/02-beginner",slug:"/tutorials/crosswords/beginner/logging-in",permalink:"/zh-CN/tutorials/crosswords/beginner/logging-in",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/02-beginner/05-logging-in.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"2024\u5e741\u670811\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Access keys and login 1/2",title:"Covering access keys and login"},sidebar:"contracts",previous:{title:"Add a puzzle",permalink:"/zh-CN/tutorials/crosswords/beginner/adding-a-puzzle"},next:{title:"Access keys and login 2/2",permalink:"/zh-CN/tutorials/crosswords/beginner/logging-in-implementation"}},u={},p=[{value:"Previously\u2026",id:"previously",level:2},{value:"Updates to transfer prize money",id:"updates-to-transfer-prize-money",level:2},{value:"Access keys",id:"access-keys",level:2},{value:"Full-access keys",id:"full-access-keys",level:3},{value:"Function-call access keys",id:"function-call-access-keys",level:3},{value:"Example account with keys",id:"example-account-with-keys",level:3},{value:"First key:",id:"first-key",level:4},{value:"Second key:",id:"second-key",level:4},{value:"Third key",id:"third-key",level:4},{value:"What does &quot;log in&quot; mean in a blockchain context?",id:"what-does-log-in-mean-in-a-blockchain-context",level:2}];function y(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"logging-in-with-near",children:"Logging in with NEAR"}),"\n",(0,t.jsx)(s.h2,{id:"previously",children:"Previously\u2026"}),"\n",(0,t.jsx)(s.p,{children:"In the previous chapter we simply displayed whether the crossword puzzle was solved or not, by checking the solution hash against the user's answers."}),"\n",(0,t.jsx)("img",{src:o,width:"600"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.h2,{id:"updates-to-transfer-prize-money",children:"Updates to transfer prize money"}),"\n",(0,t.jsx)(s.p,{children:"In this chapter, our smart contract will send 5 \u24c3 to the first person who solves the puzzle. For this, we're going to require the user to have a NEAR account and log in."}),"\n",(0,t.jsxs)(s.admonition,{title:"Better onboarding to come Later in this tutorial we won't require the user to have a NEAR account.",type:"note",children:[(0,t.jsx)(s.p,{children:"Since logging in is important for many decentralized apps, we'll show how this is done in NEAR and how it's incredibly unique compared to other blockchains. :::"}),(0,t.jsxs)(s.p,{children:["This transfer will occur when the first user to solve the puzzle calls the ",(0,t.jsx)(s.code,{children:"submit_solution"})," method with the solution. During the execution of that function it will check that the user submitted the correct answer, then transfer the prize."]}),(0,t.jsxs)(s.p,{children:["We'll be able to see this transfer (and other steps that occurred) in ",(0,t.jsx)(s.a,{href:"https://testnet.nearblocks.io",children:"NearBlocks Explorer"}),"."]}),(0,t.jsx)(s.p,{children:"But first let's talk about one of the most interesting superpowers of NEAR: access keys."}),(0,t.jsx)(s.h2,{id:"access-keys",children:"Access keys"}),(0,t.jsxs)(s.p,{children:["You might be familiar with other blockchains where your account name is a long string of numbers and letters. NEAR has an account system where your name is human-readable, like ",(0,t.jsx)(s.code,{children:"friend.testnet"})," for testnet or ",(0,t.jsx)(s.code,{children:"friend.near"})," for mainnet."]}),(0,t.jsx)(s.p,{children:"You can add (and remove) keys to your account on NEAR. There are two types of keys: full and function-call access keys."}),(0,t.jsx)(s.p,{children:"The illustration below shows a keychain with a full-access key (the large, gold one) and two function-call access keys."}),(0,t.jsxs)("figure",{children:[(0,t.jsx)("img",{src:i.Z,width:"600",alt:"A keychain with three keys. A large, gold key represents the full-access keys on NEAR. The two other keys are gray and smaller, and have detachable latches on them. They represent function-call access key. Art created by alcantara_gabriel.near"}),(0,t.jsxs)("figcaption",{children:["Art by ",(0,t.jsx)("a",{href:"https://twitter.com/Bagriel_5_10",target:"_blank",children:"alcantara_gabriel.near"})]})]}),(0,t.jsx)(s.h3,{id:"full-access-keys",children:"Full-access keys"}),(0,t.jsxs)(s.p,{children:["Full-access keys are the ones you want to protect the most. They can transfer all the funds from your account, delete the account, or perform any of the other ",(0,t.jsx)(s.a,{href:"/zh-CN/tutorials/crosswords/beginner/actions",children:"Actions on NEAR"}),"."]}),(0,t.jsxs)(s.p,{children:["When we used the ",(0,t.jsx)(s.code,{children:"near login"})," command in the ",(0,t.jsx)(s.a,{href:"/zh-CN/tutorials/crosswords/basics/set-up-skeleton#creating-a-new-key-on-your-computer",children:"previous chapter"}),", that command asked the full-access key in the NEAR Wallet to use the ",(0,t.jsx)(s.code,{children:"AddKey"})," Action to create another full-access key: the one we created locally on our computer. NEAR CLI uses that new key to deploy, make function calls, etc."]}),(0,t.jsx)(s.h3,{id:"function-call-access-keys",children:"Function-call access keys"}),(0,t.jsx)(s.p,{children:'Function-call access keys are sometimes called "limited access keys" because they aren\'t as powerful as the full access keys.'}),(0,t.jsx)(s.p,{children:"A Function-call access key will specify:"}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"What contract it's allowed to call"}),"\n",(0,t.jsx)(s.li,{children:"What method name(s) it's allowed to call (you can also specify all functions)"}),"\n",(0,t.jsx)(s.li,{children:"How much allowance it's allowed to use on these function calls"}),"\n"]}),(0,t.jsxs)(s.p,{children:["It's only allowed to perform the ",(0,t.jsx)(s.code,{children:"FunctionCall"})," Action."]}),(0,t.jsx)("img",{src:c,alt:"List of NEAR Actions with a highlight on the FunctionCall Action",width:"600"}),(0,t.jsx)(s.h3,{id:"example-account-with-keys",children:"Example account with keys"}),(0,t.jsxs)(s.p,{children:["Let's look at this testnet account that has one full-access key and two function-call access keys. As you can see, we use the NEAR CLI ",(0,t.jsxs)(s.a,{href:"https://docs.near.org/tools/near-cli#near-keys",children:["command ",(0,t.jsx)(s.code,{children:"keys"})]})," to print this info."]}),(0,t.jsx)("img",{src:l,alt:"Terminal screen showing the access keys for an account, there is one full-access key and two function-call access keys"}),(0,t.jsx)(s.p,{children:"Let's look deeper into each key."}),(0,t.jsx)(s.h4,{id:"first-key",children:"First key:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"{\n  access_key: {\n    nonce: 72772126000000, // Large nonce, huh!\n      permission: {\n      FunctionCall: {\n        allowance: '777000000000000000000000000', // Equivalent to 777 NEAR\n          method_names: [], // Any methods can be called\n          receiver_id: 'puzzle.testnet' // This key can only call methods on puzzle.testnet\n      }\n    }\n  },\n  public_key: 'ed25519:9Hhm77W4KCFzFgK55sZgEMesYRaL8wV1kpqh8qntnSPV'\n}\n"})}),(0,t.jsxs)(s.p,{children:["The first key in the image above is a function-call access key that can call the smart contract ",(0,t.jsx)(s.code,{children:"puzzle.testnet"})," on ",(0,t.jsx)(s.strong,{children:"any method"}),". If you don't specify which methods it's allowed to call, it is allowed to call them all. Note the empty array (",(0,t.jsx)(s.code,{children:"[]"}),") next to ",(0,t.jsx)(s.code,{children:"method_names"}),", which indicates this."]}),(0,t.jsxs)(s.p,{children:["We won't discuss the nonce too much, but know that in order to prevent the possibility of ",(0,t.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Replay_attack",children:"replay attacks"}),", the nonce for a newly-created key is large and includes info on the block height as well as a random number."]}),(0,t.jsxs)(s.p,{children:["The allowance is the amount, in yoctoNEAR, that this key is allowed to use during function calls. This ",(0,t.jsx)(s.strong,{children:"cannot"})," be used to transfer NEAR. It can only be used in gas for function calls."]}),(0,t.jsxs)(s.p,{children:["The allowance on this key is intentionally large for demonstration purposes. ",(0,t.jsx)(s.code,{children:"777000000000000000000000000"})," yoctoNEAR is ",(0,t.jsx)(s.code,{children:"777"})," NEAR, which is unreasonably high for an access key. So high, in fact, that it exceeded the amount of NEAR on the contract itself when created. This shows that you can create an access key that exceeds the account balance, and that it doesn't subtract the allowance at the time of creation."]}),(0,t.jsx)(s.p,{children:"So the key is simply allowed to use the allowance in NEAR on gas, deducting from the account for each function call."}),(0,t.jsx)(s.h4,{id:"second-key",children:"Second key:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"{\n  access_key: {\n    nonce: 72777733000000,\n    permission: {\n      FunctionCall: {\n        allowance: '250000000000000000000000', // 0.25 NEAR, which is a typical allowance\n        method_names: [ 'foo', 'bar' ], // Can call methods foo and bar only\n        receiver_id: 'puzzle.testnet'\n      }\n    }\n  },\n  public_key: 'ed25519:CM4JtNo2sL3qPjWFn4MwusMQoZbHUSWaPGCCMrudZdDU'\n},\n"})}),(0,t.jsx)(s.p,{children:"This second key specifies which methods can be called, and has a lower allowance."}),(0,t.jsx)(s.p,{children:'Note that the allowance for this key (a quarter of a NEAR) is the default allowance when a person "logs in" in with the NEAR Wallet.'}),(0,t.jsx)(s.p,{children:'In NEAR, "logging in" typically means adding a key like this to your account. We\'ll cover this more in a moment.'}),(0,t.jsx)(s.h4,{id:"third-key",children:"Third key"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"{\n  access_key: { nonce: 72770704000019, permission: 'FullAccess' },\n  public_key: 'ed25519:FG4HjEPsvP5beScC3hkTLztQH8k9Qz9maTaumvPDa5t3'\n}\n"})}),(0,t.jsx)(s.p,{children:"The third key is a full-access key."}),(0,t.jsx)(s.p,{children:"Since this key can perform all the Actions, there aren't additional details or restrictions like the function-call access keys we saw."}),(0,t.jsx)(s.h2,{id:"what-does-log-in-mean-in-a-blockchain-context",children:'What does "log in" mean in a blockchain context?'}),(0,t.jsx)(s.p,{children:"Let's take a step back from NEAR and talk about how login works broadly using web3 wallets."}),(0,t.jsx)(s.p,{children:"A web3 wallet (like Ethereum's MetaMask, Cosmos's Keplr, or the NEAR Wallet) stores a private key for an account. When interacting with decentralized apps, a user will typically use the wallet to sign transactions and send them to the blockchain for processing."}),(0,t.jsx)(s.p,{children:'However, web3 wallets can also be used to sign any kind of message, and it doesn\'t need to send anything to the blockchain. This is sometimes called "offline signing" and protocols will sometimes create standards around how to sign data.'}),(0,t.jsx)(s.p,{children:'In other ecosystems, the idea of "logging in" with a web3 wallet uses this offline signing. A user is asked to sign a structured message and a backend can confirm that the message was signed by a given account.'}),(0,t.jsxs)(s.p,{children:["NEAR keys can also sign and verify messages in this manner. In fact, there are a couple simple examples of how to achieve this in the ",(0,t.jsxs)(s.a,{href:"https://github.com/near/near-api-js/blob/master/packages/cookbook/utils/verify-signature.js",children:[(0,t.jsx)(s.code,{children:"near-api-js"})," cookbook"]}),"."]}),(0,t.jsx)(s.p,{children:"There are potential drawbacks to this offline signing technique, particularly if a signed message gets intercepted by a malicious party. They might be able to send this signature to a backend and log in on your behalf. Because this all takes place offline, there's no mechanism on-chain to revoke your login or otherwise control access. We quickly see that using a web3 wallet for signed typed data runs into limitations."}),(0,t.jsx)(s.p,{children:"So signing a message is fine, but what if we could do better?"}),(0,t.jsx)(s.p,{children:"With NEAR, we can leverage access keys to improve a user's login experience and give the power back to the user."}),(0,t.jsxs)(s.p,{children:["If I log into the ",(0,t.jsx)(s.a,{href:"https://github.com/near-examples/guest-book-js",children:"Guest Book example site"}),", I create a unique key just for that dApp, adding it to my account. When I'm done I can remove the key myself. If I suspect someone has control of my key (if a laptop is stolen, for example) I can remove the key as long as I have a full-access key in my control."]}),(0,t.jsx)(s.p,{children:"Logging in with NEAR truly gives the end user control of their account and how they interact with dApps, and does so on the protocol level."}),(0,t.jsx)(s.hr,{}),(0,t.jsx)(s.p,{children:"The concept of access keys is so important that we've spent longer than usual on the topic without actually implementing code for our improved crossword puzzle."}),(0,t.jsx)(s.p,{children:"Let's move to the next section and actually add the login button."})]})]})}function g(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(y,{...e})}):y(e)}},39654:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/keys-cartoon-good--alcantara_gabriel.near--Bagriel_5_10-25f5521a242db4d310be7de1dd937aa2.png"},11151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>i});var t=n(67294);const a={},o=t.createContext(a);function i(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);
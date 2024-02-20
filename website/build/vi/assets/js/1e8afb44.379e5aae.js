"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9018],{63190:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var c=n(85893),s=n(11151);const r={id:"checklist",title:"\u2705 Checklist"},o=void 0,i={id:"develop/contracts/security/checklist",title:"\u2705 Checklist",description:"Once you finished developing your smart contract please go through the following list in order to ensure everything is safe for the end user.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/2.develop/contracts/security/checklist.md",sourceDirName:"2.develop/contracts/security",slug:"/develop/contracts/security/checklist",permalink:"/vi/develop/contracts/security/checklist",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/contracts/security/checklist.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"11 thg 1, 2024",frontMatter:{id:"checklist",title:"\u2705 Checklist"},sidebar:"build",previous:{title:"Cross-Contract Calls",permalink:"/vi/develop/contracts/crosscontract"},next:{title:"Notes on Serialization",permalink:"/vi/develop/contracts/serialization"}},l={},a=[{value:"Anatomy",id:"anatomy",level:3},{value:"Environment",id:"environment",level:3},{value:"Storage",id:"storage",level:3},{value:"Actions",id:"actions",level:3},{value:"C\xe1c Callback",id:"c\xe1c-callback",level:3}];function d(e){const t={code:"code",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:"Once you finished developing your smart contract please go through the following list in order to ensure everything is safe for the end user."}),"\n",(0,c.jsx)(t.h3,{id:"anatomy",children:"Anatomy"}),"\n",(0,c.jsxs)(t.ol,{children:["\n",(0,c.jsxs)(t.li,{children:["All private methods are decorated as",(0,c.jsx)(t.code,{children:"private"}),"."]}),"\n"]}),"\n",(0,c.jsx)(t.h3,{id:"environment",children:"Environment"}),"\n",(0,c.jsxs)(t.ol,{start:"2",children:["\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:"predecessor"})," and ",(0,c.jsx)(t.code,{children:"signer"})," are used correctly through the entire contract."]}),"\n"]}),"\n",(0,c.jsx)(t.h3,{id:"storage",children:"Storage"}),"\n",(0,c.jsxs)(t.ol,{start:"3",children:["\n",(0,c.jsx)(t.li,{children:"Each time the state grows it is ensured that there is enough balance to cover it"}),"\n",(0,c.jsx)(t.li,{children:"All collections (i.e. Vector, Map, Tree, etc) have an unique id"}),"\n",(0,c.jsxs)(t.li,{children:["Check for underflow and overflow!. In rust, you can do this by simply adding the ",(0,c.jsx)(t.code,{children:"overflow-checks = true"})," flag in your ",(0,c.jsx)(t.code,{children:"Cargo.toml"}),"."]}),"\n"]}),"\n",(0,c.jsx)(t.h3,{id:"actions",children:"Actions"}),"\n",(0,c.jsxs)(t.ol,{start:"6",children:["\n",(0,c.jsx)(t.li,{children:"When sending money, you leave enough in the contract to cover the storage cost"}),"\n",(0,c.jsxs)(t.li,{children:["If you are tracking user's fund, you ",(0,c.jsx)(t.strong,{children:"deduct them before"})," sending them back to the user."]}),"\n"]}),"\n",(0,c.jsx)(t.h3,{id:"c\xe1c-callback",children:"C\xe1c Callback"}),"\n",(0,c.jsxs)(t.ol,{start:"8",children:["\n",(0,c.jsxs)(t.li,{children:["All private callbacks are marked as ",(0,c.jsx)(t.code,{children:"private"})]}),"\n",(0,c.jsx)(t.li,{children:"All cross-contract calls have a callback that checks for errors and rolls back the state if necessary"}),"\n",(0,c.jsxs)(t.li,{children:["All cross-contract calls have a callback that checks for errors and returns money to the ",(0,c.jsx)(t.code,{children:"predecessor"})," if necessary"]}),"\n",(0,c.jsx)(t.li,{children:"All the callbacks are given enough GAS to execute entirely"}),"\n",(0,c.jsx)(t.li,{children:"The contract is not left in a exploitable state between a cross-contract call and its callback"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var c=n(67294);const s={},r=c.createContext(s);function o(e){const t=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),c.createElement(r.Provider,{value:t},e.children)}}}]);
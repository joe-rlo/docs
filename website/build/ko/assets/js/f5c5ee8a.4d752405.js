"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8646],{80837:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var s=n(85893),r=n(11151),a=n(77229);const i=n.p+"assets/images/batch-of-actions--dobulyo.near--w_artsu-7b8cd24a4de7d4afad476d733ede7e97.jpg",o={sidebar_position:4,sidebar_label:"\uc815\ub2f5 \ud574\uc2dc, \ub2e8\uc704 \ud14c\uc2a4\ud2b8, \ucd08\uae30\ud654 \uba54\uc11c\ub4dc",title:'\uae30\ubcf8 \ud574\uc2f1\uacfc \ub2e8\uc704 \ud14c\uc2a4\ud2b8 \ucd94\uac00\uc5d0 \ub300\ud55c \uc18c\uac1c"'},c="\uc815\ub2f5 \ud574\uc2dc & \uae30\ubcf8 \ub2e8\uc704 \ud14c\uc2a4\ud2b8 \ucd94\uac00",l={id:"tutorials/crosswords/basics/hashing-and-unit-tests",title:'\uae30\ubcf8 \ud574\uc2f1\uacfc \ub2e8\uc704 \ud14c\uc2a4\ud2b8 \ucd94\uac00\uc5d0 \ub300\ud55c \uc18c\uac1c"',description:"\uc774\uc804 \uc139\uc158\uc5d0\uc11c\ub294 \uc2ed\uc790\ub9d0 \ud480\uc774 \uc815\ub2f5\uc744 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc758 String \uc790\ub8cc\ud615\uc744 \uc0ac\uc6a9\ud574 \uc77c\ubc18 \ud14d\uc2a4\ud2b8\ub85c \uc800\uc7a5\ud588\uc2b5\ub2c8\ub2e4. \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc815\ub2f5\uc744 \uc228\uae30\ub824\ub294 \uacbd\uc6b0, \uc774\ub294 \uc0c1\ud0dc\ub97c \ubcf4\ub294 \ubaa8\ub4e0 \uc0ac\ub78c\uc5d0\uac8c \uacf5\uac1c\ub418\ubbc0\ub85c \uc88b\uc740 \uc811\uadfc \ubc29\uc2dd\uc774 \uc544\ub2d9\ub2c8\ub2e4. \ub300\uc2e0 \uc2ed\uc790\ub9d0 \ud480\uc774 \uc815\ub2f5\uc744 \ud574\uc2dc\ud558\uace0 \uc800\uc7a5\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \ub370\uc774\ud130\ub97c \ud574\uc2dc\ud558\ub294 \ubc29\ubc95\uc740 \uc5ec\ub7ec \uac00\uc9c0\uac00 \uc788\uc9c0\ub9cc Rust SDK\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ud574\uc2dc \uc54c\uace0\ub9ac\uc998 \uc911 \ud558\ub098\uc778 sha256\uc744 \uc0ac\uc6a9\ud569\uc2dc\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/3.tutorials/crosswords/01-basics/03-hashing-and-unit-tests.md",sourceDirName:"3.tutorials/crosswords/01-basics",slug:"/tutorials/crosswords/basics/hashing-and-unit-tests",permalink:"/ko/tutorials/crosswords/basics/hashing-and-unit-tests",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/01-basics/03-hashing-and-unit-tests.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"2024\ub144 1\uc6d4 11\uc77c",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"\uc815\ub2f5 \ud574\uc2dc, \ub2e8\uc704 \ud14c\uc2a4\ud2b8, \ucd08\uae30\ud654 \uba54\uc11c\ub4dc",title:'\uae30\ubcf8 \ud574\uc2f1\uacfc \ub2e8\uc704 \ud14c\uc2a4\ud2b8 \ucd94\uac00\uc5d0 \ub300\ud55c \uc18c\uac1c"'},sidebar:"contracts",previous:{title:"\uae30\ubcf8 \ucf54\ub4dc \ucd94\uac00, \ud558\uc704 \uacc4\uc815 \uc0dd\uc131 \ubc0f \uba54\uc11c\ub4dc \ud638\ucd9c",permalink:"/ko/tutorials/crosswords/basics/add-functions-call"},next:{title:"\uac04\ub2e8\ud55c \ud504\ub860\ud2b8\uc5d4\ub4dc \ucd94\uac00",permalink:"/ko/tutorials/crosswords/basics/simple-frontend"}},d={},u=[{value:"\ube60\ub978 \ubc18\ubcf5 \uacfc\uc815\uc744 \ub3c4\uc640\uc8fc\ub294 \ub2e8\uc704 \ud14c\uc2a4\ud2b8(Unit Test)",id:"\ube60\ub978-\ubc18\ubcf5-\uacfc\uc815\uc744-\ub3c4\uc640\uc8fc\ub294-\ub2e8\uc704-\ud14c\uc2a4\ud2b8unit-test",level:2},{value:"\uc77c\ubc18 \ub2e8\uc704 \ud14c\uc2a4\ud2b8 \uc791\uc131",id:"\uc77c\ubc18-\ub2e8\uc704-\ud14c\uc2a4\ud2b8-\uc791\uc131",level:2},{value:"<code>set_solution</code> \uc218\uc815",id:"set_solution-\uc218\uc815",level:2},{value:"\uc77c\uad04 Action \uc0ac\uc6a9",id:"\uc77c\uad04-action-\uc0ac\uc6a9",level:2},{value:"\ud504\ub860\ud2b8\uc5d4\ub4dc \uc900\ube44",id:"\ud504\ub860\ud2b8\uc5d4\ub4dc-\uc900\ube44",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"\uc815\ub2f5-\ud574\uc2dc--\uae30\ubcf8-\ub2e8\uc704-\ud14c\uc2a4\ud2b8-\ucd94\uac00",children:"\uc815\ub2f5 \ud574\uc2dc & \uae30\ubcf8 \ub2e8\uc704 \ud14c\uc2a4\ud2b8 \ucd94\uac00"}),"\n",(0,s.jsxs)(t.p,{children:["\uc774\uc804 \uc139\uc158\uc5d0\uc11c\ub294 \uc2ed\uc790\ub9d0 \ud480\uc774 \uc815\ub2f5\uc744 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc758 ",(0,s.jsx)(t.code,{children:"String"})," \uc790\ub8cc\ud615\uc744 \uc0ac\uc6a9\ud574 \uc77c\ubc18 \ud14d\uc2a4\ud2b8\ub85c \uc800\uc7a5\ud588\uc2b5\ub2c8\ub2e4. \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc815\ub2f5\uc744 \uc228\uae30\ub824\ub294 \uacbd\uc6b0, \uc774\ub294 \uc0c1\ud0dc\ub97c \ubcf4\ub294 \ubaa8\ub4e0 \uc0ac\ub78c\uc5d0\uac8c \uacf5\uac1c\ub418\ubbc0\ub85c \uc88b\uc740 \uc811\uadfc \ubc29\uc2dd\uc774 \uc544\ub2d9\ub2c8\ub2e4. \ub300\uc2e0 \uc2ed\uc790\ub9d0 \ud480\uc774 \uc815\ub2f5\uc744 \ud574\uc2dc\ud558\uace0 \uc800\uc7a5\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \ub370\uc774\ud130\ub97c \ud574\uc2dc\ud558\ub294 \ubc29\ubc95\uc740 \uc5ec\ub7ec \uac00\uc9c0\uac00 \uc788\uc9c0\ub9cc ",(0,s.jsx)(t.a,{href:"https://docs.rs/near-sdk/latest/near_sdk/env/fn.sha256.html",children:"Rust SDK"}),"\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ud574\uc2dc \uc54c\uace0\ub9ac\uc998 \uc911 \ud558\ub098\uc778 ",(0,s.jsx)(t.code,{children:"sha256"}),"\uc744 \uc0ac\uc6a9\ud569\uc2dc\ub2e4."]}),"\n",(0,s.jsxs)(t.admonition,{title:'\ud574\uc2f1\uc5d0 \ub300\ud55c \uc54c\ub9bc \uc790\uc138\ud788 \uc124\uba85\ud558\uc9c4 \uc54a\uaca0\uc9c0\ub9cc, \ud574\uc2f1\uc740 \uc8fc\uc5b4\uc9c4 \uc785\ub825\uc5d0\uc11c \uacb0\uacfc\ub97c \ucd9c\ub825\ud558\ub294 "\ub2e8\ubc29\ud5a5" \ud568\uc218\uc785\ub2c8\ub2e4. \uc785\ub825\uac12\uc774 \uc788\ub294 \uacbd\uc6b0(\uc774 \uacbd\uc6b0 \uc2ed\uc790\ub9d0 \ud480\uc774 \ud37c\uc990 \uc815\ub2f5) \ud574\uc2dc\ub97c \uc5bb\uc744 \uc218 \uc788\uc9c0\ub9cc, \ud574\uc2dc\uac00 \uc788\ub294 \uacbd\uc6b0 \uc785\ub825\uac12\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc774 \uae30\ubcf8 \uc544\uc774\ub514\uc5b4\ub294 \uc815\ubcf4 \uc774\ub860 \ubc0f \ubcf4\uc548\uc758 \uae30\ucd08\uc785\ub2c8\ub2e4.',type:"info",children:[(0,s.jsxs)(t.p,{children:["\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc758 \ub4b7\ubd80\ubd84\uc5d0\uc11c \ucd94\uac00 NEAR \uac1c\ub150\uc744 \uc124\uba85\ud558\uae30 \uc704\ud574 ",(0,s.jsx)(t.code,{children:"sha256"}),"\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc5d0\uc11c, \uc554\ud638\ud654 \ud0a4 \uc30d \uc0ac\uc6a9\uc73c\ub85c \ubc14\uafc0 \uac83\uc785\ub2c8\ub2e4."]}),(0,s.jsxs)(t.p,{children:["\ud574\ub2f9 \uc8fc\uc81c\uc5d0 \ub300\ud55c ",(0,s.jsx)(t.a,{href:"https://github.com/abacabadabacaba",children:"Evgeny Kapun"}),"\uc758 \ud504\ub808\uc820\ud14c\uc774\uc158\uc5d0\uc11c \ud574\uc2f1\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uc138\uc694. \uc544\ub798 \uc2a4\ud06c\ub9b0\uc0f7\uc5d0 \ub9c1\ud06c\ub41c \ucc44\ub110\uc5d0\uc11c \ub2e4\ub978 NEAR \uad00\ub828 \ub3d9\uc601\uc0c1\uc744 \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://youtu.be/PfabikgnD08",children:(0,s.jsx)(t.img,{alt:"Evgeny Kapun\uc740 \ud574\uc2dc\uc5d0 \ub300\ud55c \uc138\ubd80 \uc815\ubcf4\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4",src:n(73574).Z+"",width:"3414",height:"1254"})})," :::"]}),(0,s.jsx)(t.h2,{id:"\ube60\ub978-\ubc18\ubcf5-\uacfc\uc815\uc744-\ub3c4\uc640\uc8fc\ub294-\ub2e8\uc704-\ud14c\uc2a4\ud2b8unit-test",children:"\ube60\ub978 \ubc18\ubcf5 \uacfc\uc815\uc744 \ub3c4\uc640\uc8fc\ub294 \ub2e8\uc704 \ud14c\uc2a4\ud2b8(Unit Test)"}),(0,s.jsxs)(t.p,{children:["\uc774 ",(0,s.jsx)(t.strong,{children:"\uae30\ucd08"}),' \ucc55\ud130\uc758 \uccab \ubc88\uc9f8 \uc139\uc158\uc5d0\uc11c \uc5b8\uae09\ud588\ub4ef\uc774, \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub294 \uae30\uc220\uc801\uc73c\ub85c \ub9e4\ub2c8\ud398\uc2a4\ud2b8 \ud30c\uc77c\uc5d0 \uc815\uc758\ub41c \ub77c\uc774\ube0c\ub7ec\ub9ac\uc785\ub2c8\ub2e4. \uc6b0\ub9ac\uc758 \ubaa9\uc801\uc744 \uc704\ud574, Rust\ub85c \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc791\uc131\ud55c \uacb0\uacfc\uc5d0\ub294 "main" \ud568\uc218\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \uac1c\ubc1c \uc911\uc5d0 ',(0,s.jsx)(t.code,{children:"cargo run"})," \uba85\ub839\uc774 \uc0ac\uc6a9\ub418\ub294 \ub9ce\uc740 \uc628\ub77c\uc778 \ud29c\ud1a0\ub9ac\uc5bc\uc744 \ucc3e\uc744 \uc218 \uc788\uaca0\uc9c0\ub9cc, \uc6b0\ub9ac\uc5d0\uac8c\ub294 \uc774\ub7ec\ud55c \uc0ac\uce58\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098, \ub2e8\uc704 \ud14c\uc2a4\ud2b8\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc640 \uc0c1\ud638 \uc791\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub294 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc791\uc131\ud558\uace0 \ube14\ub85d\uccb4\uc778 \ub124\ud2b8\uc6cc\ud06c\uc5d0 \ubc30\ud3ec\ud558\uba70 \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud558\ub294 \uac83\ubcf4\ub2e4 \ub354 \ud3b8\ub9ac\ud560 \uac83\uc785\ub2c8\ub2e4."]}),(0,s.jsxs)(t.p,{children:["\uc77c\uc744 \ub354 \uc27d\uac8c \ud558\uae30 \uc704\ud574 ",(0,s.jsx)(t.a,{href:"https://crates.io/crates/hex",children:"hex \ud06c\ub808\uc774\ud2b8"}),"\uc5d0 \uc758\uc874\uc131(dependency)\uc744 \ucd94\uac00\ud560 \uac83\uc785\ub2c8\ub2e4. \uae30\uc5b5\ud558\uc2dc\uaca0\uc9c0\ub9cc \uc758\uc874\uc131\uc740 \ub9e4\ub2c8\ud398\uc2a4\ud2b8 \ud30c\uc77c\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."]}),(0,s.jsx)(a.Ey,{language:"rust",start:"10",end:"12",url:"https://github.com/near-examples/crossword-tutorial-chapter-1/blob/481a83f0c90398f3234ce8006af4e232d6c779d7/contract/Cargo.toml"}),(0,s.jsxs)(t.p,{children:["Let's write a unit test that acts as a helper during development. This unit test will sha256 hash the input ",(0,s.jsx)(t.strong,{children:'"near nomicon ref finance"'})," and print it in a human-readable, hex format. (We'll typically put unit tests at the bottom of the ",(0,s.jsx)(t.code,{children:"lib.rs"})," file.)"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'#[cfg(test)]\nmod tests {\n    use super::*;\n    use near_sdk::test_utils::{get_logs, VMContextBuilder};\n    use near_sdk::{testing_env, AccountId};\n\n    #[test]\n    fn debug_get_hash() {\n        // Basic set up for a unit test\n        testing_env!(VMContextBuilder::new().build());\n\n        // Using a unit test to rapidly debug and iterate\n        let debug_solution = "near nomicon ref finance";\n        let debug_hash_bytes = env::sha256(debug_solution.as_bytes());\n        let debug_hash_string = hex::encode(debug_hash_bytes);\n        println!("Let\'s debug: {:?}", debug_hash_string);\n    }\n}\n'})}),(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsxs)(t.mdxAdmonitionTitle,{children:["What is that ",(0,s.jsx)(t.code,{children:"{:?}"})," thing? Take a look at different formatting traits that are covered in the ",(0,s.jsxs)(t.a,{href:"https://doc.rust-lang.org/std/fmt/index.html#formatting-traits",children:[(0,s.jsx)(t.code,{children:"std"})," Rust docs"]})," regarding this. This is a ",(0,s.jsx)(t.code,{children:"Debug"})," formatting trait and can prove to be useful during development. :::"]}),(0,s.jsx)(t.p,{children:"Run the unit tests with the command:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"cargo test -- --nocapture\n"})}),(0,s.jsx)(t.p,{children:"You'll see this output:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'\u2026\nrunning 1 test\nLet\'s debug: "69c2feb084439956193f4c21936025f14a5a5a78979d67ae34762e18a7206a0f"\ntest tests::debug_get_hash ... ok\n\ntest result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s\n'})}),(0,s.jsxs)(t.p,{children:["This means when you sha256 the input ",(0,s.jsx)(t.strong,{children:'"near nomicon ref finance"'})," it produces the hash: ",(0,s.jsx)(t.code,{children:"69c2feb084439956193f4c21936025f14a5a5a78979d67ae34762e18a7206a0f"})]}),(0,s.jsxs)(t.admonition,{title:"Note on the test flags You may also run tests using:",type:"tip",children:[(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"cargo test\n"})}),(0,s.jsxs)(t.p,{children:["Note that the test command we ran had additional flags. Those flags told Rust ",(0,s.jsx)(t.em,{children:"not to hide the output"})," from the tests. You can read more about this in ",(0,s.jsx)(t.a,{href:"https://doc.rust-lang.org/cargo/commands/cargo-test.html#display-options",children:"the cargo docs"}),". Go ahead and try running the tests using the command above, without the additional flags, and note that we won't see the debug message. :::"]}),(0,s.jsx)(t.p,{children:"The unit test above is meant for debugging and quickly running snippets of code. Some may find this a useful technique when getting familiar with Rust and writing smart contracts. Next we'll write a real unit test that applies to this early version of our crossword puzzle contract."}),(0,s.jsx)(t.h2,{id:"\uc77c\ubc18-\ub2e8\uc704-\ud14c\uc2a4\ud2b8-\uc791\uc131",children:"\uc77c\ubc18 \ub2e8\uc704 \ud14c\uc2a4\ud2b8 \uc791\uc131"}),(0,s.jsxs)(t.p,{children:["Let's add this unit test (inside the ",(0,s.jsx)(t.code,{children:"mod tests {}"})," block, under our previous unit test) and analyze it:"]}),(0,s.jsx)(a.Ey,{language:"rust",start:"63",end:"93",url:"https://github.com/near-examples/crossword-tutorial-chapter-1/blob/5bce1c2a604fcb179e9789de1f299063f91abb4d/contract/src/lib.rs"}),(0,s.jsxs)(t.p,{children:["\ucc98\uc74c \uba87 \uc904\uc758 \ucf54\ub4dc\ub294 \ub2e8\uc704 \ud14c\uc2a4\ud2b8\ub97c \uc791\uc131\ud560 \ub54c \uc77c\ubc18\uc801\uc73c\ub85c \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \uc774\ub294 ",(0,s.jsx)(t.code,{children:"VMContextBuilder"}),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud2b8\ub79c\uc7ad\uc158\uc5d0 \ub300\ud55c \uae30\ubcf8 \ucee8\ud14d\uc2a4\ud2b8\ub97c \uc0dd\uc131\ud55c \ub2e4\uc74c, \ud14c\uc2a4\ud2b8 \ud658\uacbd\uc744 \uc124\uc815\ud569\ub2c8\ub2e4."]}),(0,s.jsxs)(t.p,{children:["\ub2e4\uc74c\uc73c\ub85c \ucee8\ud2b8\ub799\ud2b8\ub97c \ub098\ud0c0\ub0b4\ub294 \uac1d\uccb4\uac00 \uc0dd\uc131\ub418\uace0, ",(0,s.jsx)(t.code,{children:"set_solution"})," \ud568\uc218\uac00 \ud638\ucd9c\ub429\ub2c8\ub2e4. \uadf8 \ud6c4, ",(0,s.jsx)(t.code,{children:"guess_solution"})," \ud568\uc218\ub294 \ub450 \ubc88 \ud638\ucd9c\ub429\ub2c8\ub2e4. \uccab \ubc88\uc9f8\ub294 \uc798\ubabb\ub41c \uc815\ub2f5\uc73c\ub85c, \uadf8 \ub2e4\uc74c\uc5d0\ub294 \uc62c\ubc14\ub978 \uc815\ub2f5\uc73c\ub85c \ud638\ucd9c\ub429\ub2c8\ub2e4. \ub85c\uadf8\ub97c \ud655\uc778\ud558\uc5ec \ud568\uc218\uac00 \uc608\uc0c1\ub300\ub85c \uc791\ub3d9\ud558\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsxs)(t.mdxAdmonitionTitle,{children:["Assertion\uc5d0 \ub300\ud55c \ucc38\uace0 \uc0ac\ud56d \uc774 \ub2e8\uc704 \ud14c\uc2a4\ud2b8\ub294 ",(0,s.jsx)(t.a,{href:"https://doc.rust-lang.org/std/macro.assert_eq.html",children:(0,s.jsx)(t.code,{children:"assert_eq!"})})," \ub9e4\ud06c\ub85c\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. ",(0,s.jsx)(t.a,{href:"https://doc.rust-lang.org/std/macro.assert.html",children:(0,s.jsx)(t.code,{children:"assert!"})})," \ubc0f ",(0,s.jsx)(t.a,{href:"https://doc.rust-lang.org/std/macro.assert_ne.html",children:(0,s.jsx)(t.code,{children:"assert_ne!"})}),"\uc640 \uac19\uc740 \ub9e4\ud06c\ub85c\ub4e4\uc740 Rust\uc5d0\uc11c \uc77c\ubc18\uc801\uc73c\ub85c \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \uc774\ub4e4\uc740 \ub2e8\uc704 \ud14c\uc2a4\ud2b8\uc5d0 \uc0ac\uc6a9\ud558\uae30\uc5d0 \uc88b\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uc774\ub4e4\uc740 \ucee8\ud2b8\ub799\ud2b8 \ub85c\uc9c1\uc5d0 \ucd94\uac00\ub420 \ub54c \ubd88\ud544\uc694\ud55c \uc624\ubc84\ud5e4\ub4dc\ub97c \ucd94\uac00\ud558\ubbc0\ub85c, ",(0,s.jsxs)(t.a,{href:"https://docs.rs/near-sdk/4.0.0-pre.2/near_sdk/macro.require.html",children:[(0,s.jsx)(t.code,{children:"require!"})," macro"]})," \ub9e4\ud06c\ub85c\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. ",(0,s.jsx)(t.a,{href:"/sdk/rust/contract-size",children:"\uc5ec\uae30"}),"\uc5d0\uc11c \uc774\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uacfc \uae30\ud0c0 \ud6a8\uc728\uc131\uc744 \uc704\ud55c \ud301\uc744 \ucc38\uc870\ud558\uc138\uc694. :::"]}),(0,s.jsx)(t.p,{children:"\ub2e4\uc2dc \ub9d0\ud558\uc9c0\ub9cc, \ub2e4\uc74c\uc744 \uc0ac\uc6a9\ud558\uc5ec \ubaa8\ub4e0 \ub2e8\uc704 \ud14c\uc2a4\ud2b8\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"cargo test -- --nocapture\n"})}),(0,s.jsx)(t.admonition,{title:"\ud558\ub098\uc758 \ud14c\uc2a4\ud2b8\ub9cc \uc2e4\ud589 \ucd5c\uc2e0 \ud14c\uc2a4\ud2b8\ub9cc \uc2e4\ud589\ud558\ub824\uba74 \ub2e4\uc74c \uba85\ub839\uc744 \uc0ac\uc6a9\ud558\uc138\uc694.",type:"tip",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"cargo test check_guess_solution -- --nocapture\n"})})})]})]})]})]}),"\n",(0,s.jsxs)(t.h2,{id:"set_solution-\uc218\uc815",children:[(0,s.jsx)(t.code,{children:"set_solution"})," \uc218\uc815"]}),"\n",(0,s.jsxs)(t.p,{children:["\uc774 \ucc55\ud130\uc758 [",(0,s.jsx)(t.a,{href:"/ko/tutorials/crosswords/basics/overview",children:"\uac1c\uc694 \uc139\uc158"}),"\uc5d0\uc11c\ub294 \uc6b0\ub9ac\uac00 \ud558\ub098\uc758 \uc2ed\uc790\ub9d0\ud480\uc774 \ud37c\uc990\uc744 \uc6d0\ud558\uace0, \ud37c\uc990\uc744 \ud480\uace0 \uc788\ub294 \uc0ac\uc6a9\uc790\uac00 \uc815\ub2f5\uc744 \uc54c \uc218 \uc5c6\uc5b4\uc57c \ud55c\ub2e4\uace0 \uc774\uc57c\uae30\ud558\uc600\uc2b5\ub2c8\ub2e4. \ud574\uc2dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc774 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uace0, ",(0,s.jsx)(t.code,{children:"crossword_solution"}),"\uc758 \ud544\ub4dc \uc790\ub8cc\ud615\uc744 \uc720\uc9c0\ud560 \uc218 \uc788\uc73c\ubbc0\ub85c, ",(0,s.jsx)(t.code,{children:"String"}),"\uc744 \uc0ac\uc6a9\ud574\ub3c4 \uc798 \uc791\ub3d9\ud560 \uac83\uc785\ub2c8\ub2e4. \ub610\ud55c \uac1c\uc694\uc5d0\uc11c, \uc2ed\uc790\ub9d0\ud480\uc774 \uc791\uc131\uc790\ub9cc \uc815\ub2f5\uc744 \uc124\uc815\ud560 \uc218 \uc788\uae30\ub97c \uc6d0\ud55c\ub2e4\uace0 \uc774\uc57c\uae30\ud558\uc600\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098, \uc6b0\ub9ac\uc758 \ud568\uc218 ",(0,s.jsx)(t.code,{children:"set_solution"}),"\uc740 \uc804\uccb4 \uc561\uc138\uc2a4 \ud0a4\uac00 \uc788\ub294 \ubaa8\ub4e0 \uc0ac\ub78c\uc774 \ud638\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub204\uad70\uac00\uac00 NEAR \uacc4\uc815\uc744 \ub9cc\ub4e4\uace0 \uc774 \ud568\uc218\ub97c \ud638\ucd9c\ud558\uc5ec \uc815\ub2f5\uc744 \ubcc0\uacbd\ud558\ub294 \uac83\uc740 \uc0ac\uc18c\ud55c \uc77c\uc785\ub2c8\ub2e4. \ubb38\uc81c\ub97c \ud574\uacb0\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(t.p,{children:"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud55c \uc9c1\ud6c4\uc5d0 \uc815\ub2f5\uc744 \ud55c \ubc88 \uc124\uc815\ud574 \ubd05\uc2dc\ub2e4."}),"\n",(0,s.jsxs)(t.p,{children:["\uc5ec\uae30\uc11c\ub294 \uc77c\ubc18\uc801\uc778 \ud328\ud134\uc778 ",(0,s.jsx)(t.code,{children:"new"}),"\ub77c\ub294 \ud568\uc218\uc5d0 ",(0,s.jsxs)(t.a,{href:"https://docs.rs/near-sdk/latest/near_sdk/attr.near_bindgen.html",children:[(0,s.jsx)(t.code,{children:"#[near_bindgen]"})," macro"]})," \ub9e4\ud06c\ub85c\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(a.Ey,{language:"rust",start:"10",end:"17",url:"https://github.com/near-examples/crossword-tutorial-chapter-1/blob/94f42e75cf70ed2aafb9c29a1faa1e21f079a49e/contract/src/lib.rs"}),"\n",(0,s.jsx)(t.p,{children:"\uc0c8\ub85c\uc6b4 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uc774 \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud574 \ubd05\uc2dc\ub2e4."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'# Build (for Windows it\'s build.bat)\n./build.sh\n\n# Create fresh account if you wish, which is good practice\nnear delete crossword.friend.testnet friend.testnet\nnear create-account crossword.friend.testnet --masterAccount friend.testnet\n\n# Deploy\nnear deploy crossword.friend.testnet --wasmFile res/my_crossword.wasm\n\n# Call the "new" method\nnear call crossword.friend.testnet new \'{"solution": "69c2feb084439956193f4c21936025f14a5a5a78979d67ae34762e18a7206a0f"}\' --accountId crossword.friend.testnet\n'})}),"\n",(0,s.jsxs)(t.p,{children:["\uc774\uc81c \uc2ed\uc790\ub9d0 \ud480\uc774 \uc815\ub2f5\uc774 \ub300\uc2e0 \ud574\uc2dc\ub85c \uc800\uc7a5\ub429\ub2c8\ub2e4. \ub9c8\uc9c0\ub9c9 \uba85\ub839\uc744 \ub2e4\uc2dc \ud638\ucd9c\ud558\ub824\uace0 \ud558\uba74 ",(0,s.jsx)(t.code,{children:"#[init]"})," \ub9e4\ud06c\ub85c \ub355\ubd84\uc5d0 \ub2e4\uc74c\uacfc \uac19\uc740 \uc624\ub958 \uba54\uc2dc\uc9c0\uac00 \ud45c\uc2dc\ub429\ub2c8\ub2e4. ",(0,s.jsx)(t.code,{children:"The contract has already been initialized"})]}),"\n",(0,s.jsx)(t.h2,{id:"\uc77c\uad04-action-\uc0ac\uc6a9",children:"\uc77c\uad04 Action \uc0ac\uc6a9"}),"\n",(0,s.jsxs)(t.p,{children:["\uc774\uac83\uc740 \uc6b0\ub9ac\uac00 \uc6d0\ud558\ub294 \uac83\uc5d0 \uac00\uae5d\uc9c0\ub9cc, \ud55c \uc0ac\ub78c\uc774 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud558\uc600\ub294\ub370 ",(0,s.jsx)(t.strong,{children:"\ub2e4\ub978 \uc0ac\ub78c"}),"\uc774 \uadf8\ub4e4\ubcf4\ub2e4 \uba3c\uc800 ",(0,s.jsx)(t.code,{children:"new"})," \ud568\uc218\ub97c \ube60\ub974\uac8c \ud638\ucd9c\ud558\uba74 \uc5b4\ub5bb\uac8c \ub420\uae4c\uc694? \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud55c \ub3d9\uc77c\ud55c \uc0ac\ub78c\uc774 \uc815\ub2f5\uc744 \uc124\uc815\ud558\ub294\uc9c0 \ud655\uc778\ud558\ub3c4\ub85d \ud558\ub824\uba74, \uc77c\uad04 Action\uc744 \uc0ac\uc6a9\ud558\uba74 \ub429\ub2c8\ub2e4. \uac8c\ub2e4\uac00 \ud55c \ubc88\uc5d0 \ucc98\ub9ac\ud560 \uc218 \uc788\ub294\ub370 \uc65c \ub450 \uac1c\uc758 \ud2b8\ub79c\uc7ad\uc158\uc744 \ubcf4\ub0b4\ub098\uc694? (",(0,s.jsx)(t.a,{href:"https://nomicon.io/RuntimeSpec/Transactions.html?highlight=batch#batched-transaction",children:"\uc5ec\uae30"}),"\uc5d0\uc11c \ubc30\uce58 \ud2b8\ub79c\uc7ad\uc158\uc5d0 \ub300\ud55c \uc0ac\uc591\uc5d0\uc11c \ub2e4\ub8e8\ub294 \uae30\uc220 \uc138\ubd80 \uc815\ubcf4\uc785\ub2c8\ub2e4)"]}),"\n",(0,s.jsxs)("figure",{children:[(0,s.jsx)("img",{src:i,alt:"\ud2b8\ub79c\uc7ad\uc158\uc744 \ub098\ud0c0\ub0b4\ub294 \ucfe0\ud0a4 \uc2dc\ud2b8\uc785\ub2c8\ub2e4. \uc5ec\uae30\uc11c \ucfe0\ud0a4\ub294 \ubc30\ud3ec \ubc0f \ud568\uc218 \ud638\ucd9c \uc791\uc5c5\uc785\ub2c8\ub2e4. dobulyo.near \uadf8\ub9bc."}),(0,s.jsxs)("figcaption",{className:"full-width",children:[(0,s.jsx)("a",{href:"https://twitter.com/w_artsu",target:"_blank",children:"dobulyo.near"})," \uadf8\ub9bc"]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(t.admonition,{title:"\uc0ac\uc6a9 \uc911\uc778 \uc77c\uad04 Action \uc77c\uad04 Action\uc740 \ucd08\uae30\ud654 \ud568\uc218\ub97c \ubc30\ud3ec\ud558\uace0 \ud638\ucd9c\ud558\ub824\ub294 \uacbd\uc6b0\uc5d0 \uc77c\ubc18\uc801\uc73c\ub85c \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \ud329\ud1a0\ub9ac \ud328\ud134\uc744 \uc0ac\uc6a9\ud560 \ub54c\ub3c4 \ub9c8\ucc2c\uac00\uc9c0\uc778\ub370, \uc5ec\uae30\uc11c \ud558\uc704 \uacc4\uc815(subaccount)\uc774 \uc0dd\uc131\ub418\uace0 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uac00 \ubc30\ud3ec\ub418\uba70 \ud0a4\uac00 \ucd94\uac00\ub418\uace0 \ud568\uc218\uac00 \ud638\ucd9c\ub418\ub294 \uac83\uc740 \uc77c\uad04 Action\uc744 \ud1b5\ud574 \uc774\ub8e8\uc5b4\uc9d1\ub2c8\ub2e4.",type:"info",children:[(0,s.jsx)(t.p,{children:"Here's a truncated snippet from a useful (though somewhat advanced) repository with a wealth of useful code:"}),(0,s.jsx)(a.Ey,{language:"rust",start:"172",end:"177",url:"https://github.com/near/core-contracts/blob/1720c0cfee238974ebeae8ad43076abeb951504f/staking-pool-factory/src/lib.rs"}),(0,s.jsxs)(t.p,{children:["\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc758 \ub4b7\ubd80\ubd84\uc5d0\uc11c Action\uc5d0 \ub300\ud574 \uc0b4\ud3b4\ubcf4\uaca0\uc9c0\ub9cc, \uadf8 \ub3d9\uc548 \uc0ac\uc591\uc5d0 \ub300\ud55c \ud3b8\ub9ac\ud55c ",(0,s.jsx)(t.a,{href:"https://nomicon.io/RuntimeSpec/Actions.html",children:"\uc774 \ubb38\uc11c"}),"\ub97c \uc77d\uc5b4\ubcf4\uc154\ub3c4 \uc88b\uc2b5\ub2c8\ub2e4. :::"]}),(0,s.jsxs)(t.p,{children:["\uc704\uc758 \uc815\ubcf4 \ud48d\uc120\uc5d0\uc11c \ubcfc \uc218 \uc788\ub4ef\uc774 ",(0,s.jsx)(t.a,{href:"https://docs.rs/near-sdk/3.1.0/near_sdk/struct.Promise.html#method.deploy_contract",children:"\ubc30\ud3ec"})," \ubc0f ",(0,s.jsx)(t.a,{href:"https://docs.rs/near-sdk/3.1.0/near_sdk/struct.Promise.html#method.function_call",children:"\ud568\uc218 \ud638\ucd9c"})," Action\uc744 \uc77c\uad04 \ucc98\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4 \uc774\uac83\uc774 \ubc14\ub85c \uc6b0\ub9ac\uac00 \uc2ed\uc790\ub9d0\ud480\uc774 \ud37c\uc990\uc744 \uc704\ud574 \ud558\uace0\uc790 \ud558\ub294 \uac83\uc774\uba70, \uc6b4 \uc88b\uac8c\ub3c4 NEAR CLI\uc5d0\ub294 \ud2b9\ud788 ",(0,s.jsx)(t.a,{href:"https://docs.near.org/tools/near-cli#near-deploy",children:"\uc774\uc5d0 \ub300\ud55c \ud50c\ub798\uadf8"}),"\uac00 \uc788\uc2b5\ub2c8\ub2e4."]}),(0,s.jsxs)(t.p,{children:["\ud3b8\ub9ac\ud55c ",(0,s.jsx)(t.code,{children:"--initFunction"})," \ubc0f ",(0,s.jsx)(t.code,{children:"--initArgs"})," \ud50c\ub798\uadf8\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc774\ub97c \ub2e4\uc2dc \uc2e4\ud589\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"# Create fresh account if you wish, which is good practice\nnear delete crossword.friend.testnet friend.testnet\nnear create-account crossword.friend.testnet --masterAccount friend.testnet\n\n# Deploy\nnear deploy crossword.friend.testnet --wasmFile res/my_crossword.wasm \\\n  --initFunction 'new' \\\n  --initArgs '{\"solution\": \"69c2feb084439956193f4c21936025f14a5a5a78979d67ae34762e18a7206a0f\"}'\n"})}),(0,s.jsxs)(t.p,{children:["\uc77c\uad04 Action\uc744 \uc0ac\uc6a9\ud558\uace0 \uc788\uc73c\ubbc0\ub85c, \uc544\ubb34\ub3c4 \uc6b0\ub9ac\ubcf4\ub2e4 \uba3c\uc800 \uc774 ",(0,s.jsx)(t.code,{children:"new"})," \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."]}),(0,s.jsx)(t.admonition,{title:"\uc77c\uad04 Action \uc2e4\ud328",type:"note",children:(0,s.jsx)(t.p,{children:"\uc77c\ub828\uc758 \uc77c\uad04 Action \uc911 \ud558\ub098\uc758 Action\uc774 \uc2e4\ud328\ud558\uba74 \uc804\uccb4 \ud2b8\ub79c\uc7ad\uc158\uc774 \ub418\ub3cc\ub824\uc9d1\ub2c8\ub2e4. \ub098\uc758 \ud638\ucd9c\uc774 \uc2e4\ud328\ud558\uba74 \uc5ec\ub7ec \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c(cross contract call)\uc774 \ud3ec\ud568\ub41c \ubcf5\uc7a1\ud55c \ud2b8\ub79c\uc7ad\uc158\uc774 \ub418\ub3cc\ub824\uc9c0\ub294 \uc791\uc5c5 \uc99d\uba85\uacfc \ub2ec\ub9ac, \uc0e4\ub529 \uc9c0\ubd84 \uc99d\uba85 \uc2dc\uc2a4\ud15c\uc740 \uadf8\ub807\uac8c \uc791\ub3d9\ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 \ucc38\uace0\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. NEAR\ub97c \uc0ac\uc6a9\ud558\uba74 \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c\uc774 \ucf5c\ubc31\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc608\uc0c1\ub418\ub294 \ub3d9\uc791\uc744 \ubcf4\uc7a5\ud569\ub2c8\ub2e4. \uc774\uc5d0 \ub300\ud574\uc11c\ub294 \ub098\uc911\uc5d0 \uc124\uba85\ud558\uaca0\uc2b5\ub2c8\ub2e4."})})]}),"\n",(0,s.jsx)(t.h2,{id:"\ud504\ub860\ud2b8\uc5d4\ub4dc-\uc900\ube44",children:"\ud504\ub860\ud2b8\uc5d4\ub4dc \uc900\ube44"}),"\n",(0,s.jsxs)(t.p,{children:["\uc774\uc804 \uc139\uc158\uc5d0\uc11c \uc6b0\ub9ac\ub294 \uc0c1\ud0dc\uc5d0\uc11c \uac12\uc744 \ubc18\ud658\ud558\ub294 \ud568\uc218\ub97c \uba85\uc2dc\uc801\uc73c\ub85c \uac00\uc9c0\uc9c0 \uc54a\uace0 ",(0,s.jsx)(t.code,{children:"curl"})," \uba85\ub839\uc744 \uc0ac\uc6a9\ud558\uc5ec \ucee8\ud2b8\ub799\ud2b8\uc758 \uc0c1\ud0dc\ub97c \ubcfc \uc218 \uc788\uc74c\uc744 \ubcf4\uc5ec\uc8fc\uc5c8\uc2b5\ub2c8\ub2e4. \uc774\ub97c \uc124\uba85\ud558\uace0 \uc815\ub2f5\uc744 \ud574\uc2f1\ud588\uc73c\ubbc0\ub85c, \uc774\uc81c \uc9e7\uc740 \ubcf4\uae30 \uc804\uc6a9 \ud568\uc218 ",(0,s.jsx)(t.code,{children:"get_solution"}),"\uc744 \ucd94\uac00\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(t.p,{children:["\ub2e4\uc74c \uc139\uc158\uc5d0\uc11c\ub294 \ud558\ub4dc\ucf54\ub529\ub41c \uc2ed\uc790\ub9d0\ud480\uc774 \ud37c\uc990\uc744 \uc704\ud55c \uac04\ub2e8\ud55c \ud504\ub860\ud2b8\uc5d4\ub4dc\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4. \uc6b0\ub9ac\ub294 \ucd5c\uc885 \uc815\ub2f5 \ud574\uc2dc\ub97c \uc5bb\uc744 \ub54c \ud568\uc218\ub97c \uc27d\uac8c \ud638\ucd9c\ud558\uae30\ub97c \uc6d0\ud560 \uac83\uc785\ub2c8\ub2e4. \uc774 \uae30\ud68c\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud568\uc218 ",(0,s.jsx)(t.code,{children:"get_puzzle_number"}),"\uc640 \ud568\uc218\uac00 \ubc18\ud658\ud558\ub294 \uc0c1\uc218\ub97c \uc81c\uac70\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub294 \uc815\ubcf4 \uc81c\uacf5 \ubaa9\uc801\uc73c\ub85c \uc0ac\uc6a9\ub418\uc5c8\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(t.p,{children:["\ub610\ud55c ",(0,s.jsx)(t.code,{children:"guess_solution"}),"\uc774 Bool \uac12\uc744 \ubc18\ud658\ud558\ub3c4\ub85d \uc218\uc815\ud558\uc5ec \ud504\ub860\ud2b8\uc5d4\ub4dc \uc791\uc5c5\uc744 \ub354 \uc27d\uac8c \ud560 \uac83\uc785\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(a.Ey,{language:"rust",start:"19",end:"34",url:"https://github.com/near-examples/crossword-tutorial-chapter-1/blob/94f42e75cf70ed2aafb9c29a1faa1e21f079a49e/contract/src/lib.rs"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"get_solution"})," \uba54\uc11c\ub4dc\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \ud638\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"near view crossword.friend.testnet get_solution\n"})}),"\n",(0,s.jsx)(t.p,{children:"\ub2e4\uc74c \uc139\uc158\uc5d0\uc11c\ub294 \uac04\ub2e8\ud55c \ud504\ub860\ud2b8\uc5d4\ub4dc\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4. \ub2e4\uc74c \ucc55\ud130\uc5d0\uc11c\ub294 \uc774 \uc544\uc774\ub514\uc5b4 \uae30\ubc18\uc73c\ub85c \uad6c\ucd95\ub41c \ub354 \ub9ce\uc740 NEAR \uac1c\ub150\uc744 \uc124\uba85\ud569\ub2c8\ub2e4."})]})}function f(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var s=n(36905);const r={tabItem:"tabItem_Ymn6"};var a=n(85893);function i(e){var t=e.children,n=e.hidden,i=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,i),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>y});var s=n(67294),r=n(36905),a=n(12466),i=n(16550),o=n(20469),c=n(91980),l=n(67392),d=n(50012);function u(e){var t,n;return null!=(t=null==(n=s.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,s.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,s.useMemo)((function(){var e=null!=t?t:function(e){return u(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function p(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,a=(0,i.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,s=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=s?s:null}({queryString:n,groupId:r});return[(0,c._X)(o),(0,s.useCallback)((function(e){if(o){var t=new URLSearchParams(a.location.search);t.set(o,e),a.replace(Object.assign({},a.location,{search:t.toString()}))}}),[o,a])]}function g(e){var t,n,r,a,i=e.defaultValue,c=e.queryString,l=void 0!==c&&c,u=e.groupId,g=h(e),m=(0,s.useState)((function(){return function(e){var t,n=e.defaultValue,s=e.tabValues;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+s.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=s.find((function(e){return e.default})))?t:s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:g})})),b=m[0],x=m[1],j=p({queryString:l,groupId:u}),v=j[0],w=j[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,d.Nk)(t),r=n[0],a=n[1],[r,(0,s.useCallback)((function(e){t&&a.set(e)}),[t,a])]),_=y[0],k=y[1],A=function(){var e=null!=v?v:_;return f({value:e,tabValues:g})?e:null}();return(0,o.Z)((function(){A&&x(A)}),[A]),{selectedValue:b,selectValue:(0,s.useCallback)((function(e){if(!f({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);x(e),w(e),k(e)}),[w,k,g]),tabValues:g}}var m=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(85893);function j(e){var t=e.className,n=e.block,s=e.selectedValue,i=e.selectValue,o=e.tabValues,c=[],l=(0,a.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),r=o[n].value;r!==s&&(l(t),i(r))},u=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var s,r=c.indexOf(e.currentTarget)+1;n=null!=(s=c[r])?s:c[0];break;case"ArrowLeft":var a,i=c.indexOf(e.currentTarget)-1;n=null!=(a=c[i])?a:c[c.length-1]}null==(t=n)||t.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:o.map((function(e){var t=e.value,n=e.label,a=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:function(e){return c.push(e)},onKeyDown:u,onClick:d},a,{className:(0,r.Z)("tabs__item",b.tabItem,null==a?void 0:a.className,{"tabs__item--active":s===t}),children:null!=n?n:t}),t)}))})}function v(e){var t=e.lazy,n=e.children,r=e.selectedValue,a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=a.find((function(e){return e.props.value===r}));return i?(0,s.cloneElement)(i,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map((function(e,t){return(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function w(e){var t=g(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(j,Object.assign({},e,t)),(0,x.jsx)(v,Object.assign({},e,t))]})}function y(e){var t=(0,m.Z)();return(0,x.jsx)(w,Object.assign({},e,{children:u(e.children)}),String(t))}},77229:(e,t,n)=>{n.d(t,{Ey:()=>d,O2:()=>c,SQ:()=>l});n(67294);var s=n(74866),r=n(85162),a=n(95665),i=n.n(a),o=n(85893);function c(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,o.jsx)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,o.jsx)(r.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function l(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,s=(n.children,n.url),r=n.start,a=n.end,i=n.fname;if(e.type===d)return d({url:s,start:r,end:a,language:t,fname:i});return e}(e,n)})),1==t.length?(0,o.jsx)(r.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,o.jsx)(s.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,o.jsx)(r.Z,{value:t,label:e.props.fname,children:e})}))})}function d(e){var t=e.url,n=e.start,s=e.end,r=e.language,a=e.fname,c=t+"#";return n&&s&&(c+="L"+n+"-L"+s+"#"),(0,o.jsx)(i(),{language:r,fname:a,children:c})}},73574:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/kapun-hashing-8cb9a188869ce23ea8a6e0c0f9288c3c.png"}}]);
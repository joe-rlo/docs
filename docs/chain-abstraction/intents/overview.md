---
id: overview
title: NEAR Intents
sidebar_label: NEAR Intents
description: "Learn how the intents protocol works"
---

## Quick Answer

**NEAR Intents let users express what they want, not how to do it.** Instead of executing complex multi-chain transactions yourself, you submit an intent (like "swap Token A for Token B at the best price") and a decentralized network of solvers (market makers and AI agents) compete to fulfill it optimally. The winning solution is verified on-chain, giving you the best outcome without managing blockchain complexity.

---

NEAR Intents is a multichain transaction protocol where users specify what they want and let third parties compete to provide the best solution. This works for everything from token swaps to pizza delivery, creating a universal marketplace across crypto and traditional services.

![NEAR Intents Overview](/assets/docs/chain-abstraction/intents-overview.png)

## How It Works

1. **Intent Creation**: A user or AI agent expresses a desired outcome _(ex: Swap Token A for Token B)_ and broadcasts the intent to network of Market Makers (also called Solvers).

2. **Market Makers Compete**: A off-chain decentralized network of Market Makers (aka solvers) compete to fulfill the request in the most optimal way. When the network finds the best solution, it presents it as a quote to the originating user/agent for approval.

4. **Intent Execution**: If the quote from the Market Maker is accepted, the intent is executed by calling a "Verifier" smart contract on NEAR Protocol. This contract securely verifies and settles the final transaction.


## NEAR Intents 101

<iframe width="800" height="450" src="https://www.youtube.com/embed/mOGD2gzZJqE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


## Resources

Here are some resources to get started using NEAR Intents:

- [Official NEAR Intents Documentation](https://docs.near-intents.org)
- [Dev Support Channel](https://t.me/near_intents): Developer support channel on Telegram
- [NEAR Intents 1Click API Example](https://github.com/near-examples/near-intents-examples): Easy integration example that uses 1Click API
- [near-intents.org (Live Site)](https://near-intents.org): Live demo application showcasing token swaps
- [near-intents.org (Repository)](https://github.com/defuse-protocol/defuse-frontend): Frontend source code for `near-intents.org`
- [Unpacking NEAR Intents: A Deep Dive](https://www.near.org/blog/unpacking-near-intents-a-deep-dive): Blogpost diving deeper into the concept of NEAR Intents.

:::info
Currently there is no `testnet` deployment.
:::

---

## Intents vs Traditional Transactions

| Approach | User Experience | Execution | Optimization | Complexity |
|----------|----------------|-----------|--------------|-----------|
| **Traditional Transactions** | Specify every step manually | User executes each transaction | User finds best path | High - manage gas, bridges, DEXs |
| **NEAR Intents** | Express desired outcome | Solvers execute automatically | Solvers compete for best solution | Low - submit intent, approve quote |

**Key difference:** Traditional transactions require you to be the expert. Intents let experts compete to serve you.

---

## Common Questions

### How are NEAR Intents different from regular blockchain transactions?
**Intents separate what you want from how it's done.** Regular transactions require you to specify every step: bridge tokens, approve contracts, swap on specific DEX, pay gas fees. Intents let you say "I want outcome X" and the solver network figures out the optimal path across all chains and services.

### Who are the solvers and why should I trust them?
**Solvers are market makers and AI agents competing for your business.** They compete to offer the best solution because they earn fees only if you accept their quote. The final transaction is verified by a smart contract on NEAR, so solvers can't cheat—they must deliver what they promised.

### What kinds of intents can I submit?
**Anything from token swaps to real-world services.** Token swaps are the most common (get best price across all DEXs and CEXs), but intents can also handle NFT purchases, cross-chain DeFi operations, stablecoin conversions, and even off-chain services like ordering pizza. If someone can solve it, you can intent it.

### Do I pay extra fees for using intents?
**Solver fees are included in the quote you approve.** You see the final price upfront before accepting. Because solvers compete, they're incentivized to offer competitive pricing. Often, the optimized execution path saves you more than any additional fees.

### Can AI agents use NEAR Intents?
**Yes, NEAR Intents are designed for both humans and AI agents.** Agents can submit intents, act as solvers, or negotiate with other agents. This creates an AI economy where agents autonomously trade, provide services, and optimize outcomes for users.

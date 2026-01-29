---
id: what-is
title: What is Aurora?
description: "Learn about our EVM-compatible blockchain on NEAR"
---

## Quick Answer

**Aurora is an Ethereum-compatible blockchain running on NEAR as a layer 2.** Deploy Ethereum apps without rewriting code—just change the RPC endpoint. You get NEAR's high performance and low fees (0.07 GWei gas price) while using all your familiar Ethereum tools (MetaMask, Hardhat, Foundry). Aurora even supports gasless transactions through protocol-level meta transactions.

---

[Aurora](https://aurora.dev/) is an EVM (Ethereum Virtual Machine) compatible blockchain and ecosystem, running as a decentralized layer 2 on the NEAR Protocol. It powers innovations such as Aurora Cloud, the infrastructure solution to onboard web2 businesses onto web3.

Aurora is an EVM implemented as a smart contract on NEAR Protocol which provides several advantages:

- Aurora is fully compatible with Ethereum. Applications can be seamlessly deployed on Aurora without the need to re-write smart contracts. All you need is to change the RPC endpoint you interact with.
- Aurora runs on the NEAR Protocol, one of the highest-performance third-generation L1 protocols.
- Transaction fees in Aurora are paid in the base currency, ETH, and are constant (gas price is 0.07 GWei).
- Aurora supports all the Ethereum ecosystem tools — MetaMask, Foundry, Truffle, Hardhat, Remix, etc.
- Aurora has protocol level meta transactions, which enables features such as gasless transactions for end users.

---

## Different Development Paths

As a developer, a user can choose between two different ways to build on Aurora:
- **[Build on Aurora mainnet](./build-on-aurora.md)**: The fastest way to deploy your Ethereum-based dapp with the low fees and high performance of the NEAR Protocol.

- **[Deploy a Virtual Chain](./launch-virtual-chain.md)**: Create your own blockchain in minutes with customizable gas, permissions, and ecosystem integrations.

---

## Rainbow Bridge

As a part of Aurora and NEAR ecosystem, the [Rainbow Bridge](https://doc.aurora.dev/bridge/introduction) is a trustless, permissionless protocol for connecting blockchains. The bridge protocol removes the need to trust anyone except the security of the connected chains. Anyone can deploy a new bridge, use an existing bridge, or join the maintenance of an existing bridge without getting approval from anyone else.

The Rainbow Bridge allows any information that is cryptographically provable on Near and Aurora to be usable in Ethereum contracts and vice versa — including the ability to read the state and schedule calls with callbacks on the other chain.

[Rainbow Bridge dApp](https://rainbowbridge.app/) allows also to:

- Browse your transfers history.
- Restore your transfers by a hash and see the detailed information, in the case you’re using another browser or device.
- Deploy the new tokens for bridging if you’re an ecosystem project or developer.
- Discover if token is already supported by it via Deploy page

---

## Common Questions

### Do I need to rewrite my Ethereum smart contracts for Aurora?
**No, Aurora is fully EVM-compatible.** Your existing Solidity contracts work as-is. Just deploy to Aurora's RPC endpoint instead of Ethereum's. All Ethereum tools (MetaMask, Hardhat, Truffle, Remix) work without modification.

### How is Aurora different from other Ethereum layer 2s?
**Aurora runs as a smart contract on NEAR Protocol.** This gives you NEAR's high throughput and finality speed, plus fixed gas prices (0.07 GWei). Other L2s are separate chains—Aurora is an EVM implementation on NEAR, combining Ethereum compatibility with NEAR's performance.

### What are Aurora Virtual Chains?
**Your own customizable blockchain in minutes.** Virtual Chains let you create isolated blockchain environments with custom gas fees, permissions, and integrations—perfect for enterprises or projects that need dedicated infrastructure without operating a full blockchain.

### How does the Rainbow Bridge work?
**Trustless, cryptographic proof-based bridging between NEAR, Aurora, and Ethereum.** The Rainbow Bridge uses cryptographic verification—no trusted intermediaries. Transfer assets between chains or read state across chains. Anyone can use it, deploy new bridges, or help maintain existing ones.

### Can users interact with Aurora without paying gas?
**Yes, through protocol-level meta transactions.** Aurora has built-in support for gasless transactions, allowing developers to sponsor user gas fees. This enables true "web2-like" UX where end users don't need ETH or understand gas fees.

---

## Learn More

To learn more about Aurora, you can check out the official documentation at [doc.aurora.dev](https://doc.aurora.dev/).
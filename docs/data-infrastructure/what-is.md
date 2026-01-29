---
id: what-is
title: What is Data Infrastructure?
description: "Explore NEAR's data infrastructure for accessing on-chain data"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {CodeTabs, Language, Github} from "@site/src/components/UI/Codetabs"

## Quick Answer

**NEAR's data infrastructure gives you easy access to on-chain data through three main solutions.** Use **Data APIs** for quick queries (user assets, transactions, events), **BigQuery** for SQL-based analytics on the full historical dataset, or **NEAR Lake** to build custom self-hosted indexers. Choose based on your needs: instant API calls, large-scale analytics, or real-time streaming to your own infrastructure.

---

NEAR offers ready-to-use solutions to access and monitor on-chain data easily. This is very useful to automate actions based on specific **events**, cache data to **reduce latency**, gather **usage data** of the blockchain, and even **study user preferences**.

![img](/assets/docs/welcome-pages/6.data-infrastructure.png)

In NEAR you will find three main solutions to access and monitor on-chain data: [**Data APIs**](#data-apis), [**BigQuery Public Dataset**](#bigquery-public-dataset) and [**NEAR Lake**](#near-lake). Each of these solutions is designed to fit different needs and use cases, and can be used in combination to create a complete data infrastructure for your application.

---

## [Data APIs](./data-api.md)

Members of the NEAR community have built a set of APIs to access and monitor on-chain data. These APIs are designed to be easy to use and can be accessed from any application through a simple API call.

- User assets: Easily track all the assets that a user or a contract holds
- Monitor transactions: Get all the transactions of a user, a contract or a specific token
- Track on-chain events: Get all the events emitted by a contract, or a specific event type

<hr subclass="subsection" />

## [BigQuery: Public Dataset](./big-query.md)
A large dataset with on-chain data publicly available on Google Cloud Platform. Obtain near real-time blockchain data using simple SQL queries. **All the data, zero setup**.

- Instant insights: Historic on-chain data queried at scale. No need to run your own infrastructure.
- Cost-effective: Eliminate the need to store and process bulk NEAR Protocol data. Query as little or as much data as you like.
- As easy as SQL: No prior experience with blockchain technology is required. Just bring a general knowledge of SQL to unlock insights.

<hr subclass="subsection" />

## [NEAR Lake](./near-lake-framework.md)
A solution that watches over the NEAR network and stores all the events for your easy access.

- Cost-efficient solution: Cost-efficient solution for building self-hosted indexers in Rust, JavaScript, Python, Go and other languages
- Streamlined data management: Use NEAR Lake Framework to stream blocks to your server directly from NEAR Lake

---

## NEAR Data Solutions Comparison

| Solution | Best For | Setup | Cost | Query Language |
|----------|----------|-------|------|----------------|
| **Data APIs** | Quick integration, common queries | Zero - just call API | Free tier available | REST API |
| **BigQuery** | Large-scale analytics, SQL queries | Minimal - use Google Cloud | Pay per query | SQL |
| **NEAR Lake** | Custom indexing, real-time streaming | Self-host infrastructure | Infrastructure + storage costs | Code (Rust, JS, Python, Go) |

**Choose Data APIs** for fast integration and standard queries.  
**Choose BigQuery** for analytics and SQL-based insights.  
**Choose NEAR Lake** for custom indexers and real-time data streaming.

---

## Common Questions

### What's the easiest way to get started with NEAR data?
**Data APIs—zero setup required.** Just make API calls to query user assets, transactions, or events. Perfect for most applications that need on-chain data without complex infrastructure.

### When should I use BigQuery instead of Data APIs?
**When you need SQL-based analytics on historical data.** BigQuery gives you the entire NEAR dataset with SQL queries—ideal for business intelligence, research, or complex analytics across millions of transactions. Data APIs are better for real-time lookups of specific accounts or contracts.

### What is NEAR Lake and why would I build my own indexer?
**NEAR Lake streams all blockchain events to your infrastructure for custom processing.** Build your own indexer when you need specialized data transformations, custom caching strategies, or want to combine NEAR data with other sources. It's more work but gives you complete control.

### Can I combine these solutions?
**Yes, they're designed to work together.** Use Data APIs for user-facing queries, BigQuery for periodic analytics reports, and NEAR Lake to power real-time features with custom indexing. Many production apps use all three.

### How much does it cost to access NEAR data?
**Data APIs have free tiers, BigQuery charges per query (~$5/TB scanned), and NEAR Lake requires self-hosting costs.** Data APIs are cheapest for simple queries. BigQuery is cost-effective for analytics (you only pay for data you query). NEAR Lake costs depend on your infrastructure but give you unlimited queries once set up.

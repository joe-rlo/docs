---
id: enumeration
title: Enumeration
sidebar_label: Enumeration
---

import {Github} from "@site/src/components/codetabs"

Trong các hướng dẫn trước, bạn đã xem xét các cách tích hợp chức năng mint vào một skeleton smart contract. Để NFT của bạn hiển thị trong ví, bạn cũng phải deploy một bản vá lỗi đã được implement một trong các enumeration method. In this tutorial, you'll expand on and finish the rest of the enumeration methods as per the [standard](https://nomicon.io/Standards/Tokens/NonFungibleToken/Enumeration) Now you'll extend the NFT smart contract and add a couple of enumeration methods that can be used to return the contract's state.

## Giới thiệu

Như đã đề cập trong hướng dẫn [Upgrade một Contract](/tutorials/nfts/upgrade-contract/), bạn có thể deploy các bản vá và sửa lỗi cho các smart contract. Lần này, bạn sẽ dùng kiến thức đó để implement các enumeration function `nft_total_supply`, `nft_tokens` và `nft_supply_for_owner`.

Để bắt đầu, bạn có thể switch sang branch `2.minting` từ [GitHub repository](https://github.com/near-examples/nft-tutorial/) của chúng tôi, hoặc tiếp tục với phần hướng dẫn bên trên. Nếu bạn chưa clone, hãy tham khảo [Kiến trúc của Contract](/tutorials/nfts/skeleton#building-the-skeleton) để check out repository.

```bash
git checkout 2.minting
```

:::tip Nếu bạn muốn xem code hoàn chỉnh của phần hướng dẫn _Enumeration_ này, bạn có thể đến branch `3.enumeration`. :::

## Các sửa đổi đối với contract

Hãy bắt đầu bằng cách mở file  `src/enumeration.rs` và đến với empty function `nft_total_supply`.

**nft_total_supply**

Function này sẽ trả về tổng số các NFT được lưu trữ trên contract. Bạn dễ dàng có được tính năng này, bằng cách chỉ cần trả về độ dài của data structure `nft_metadata_by_id`.

<Github language="rust" start="5" end="9" url="https://github.com/near-examples/nft-tutorial/blob/3.enumeration/nft-contract/src/enumeration.rs" />

**nft_token**

This function should return a paginated list of `JsonTokens` that are stored on the contract regardless of their owners. If the user provides a `from_index` parameter, you should use that as the starting point for which to start iterating through tokens; otherwise it should start from the beginning. Likewise, if the user provides a `limit` parameter, the function shall stop after reaching either the limit or the end of the list.

:::tip Rust has useful methods for pagination, allowing you to skip to a starting index and taking the first `n` elements of an iterator. :::

<Github language="rust" start="11" end="27" url="https://github.com/near-examples/nft-tutorial/blob/3.enumeration/nft-contract/src/enumeration.rs" />

**nft_supply_for_owner**

Function này sẽ tìm kiếm tất cả các non-fungible token của owner do người dùng xác định và trả về độ dài của tập hợp kết quả. Nếu không có một bộ token nào thuộc sở hữu của `AccountID` tương ứng, function sẽ trả về `0`.

<Github language="rust" start="28" end="43" url="https://github.com/near-examples/nft-tutorial/blob/3.enumeration/nft-contract/src/enumeration.rs" />

Tiếp theo, bạn có thể sử dụng CLI để truy vấn các method mới này và xác nhận rằng chúng hoạt động chính xác.

## Deploying lại một contract {#redeploying-contract}

Giờ đây bạn đã implement xong phần logic cần thiết cho `nft_tokens_for_owner`, giờ là lúc build và deploy lại contract cho account của bạn. Dùng build script, deploy contract theo cách bạn đã làm trong các phần hướng dẫn trước:

```bash
yarn build && near deploy --wasmFile out/main.wasm --accountId $NFT_CONTRACT_ID
```

Từ đây sẽ hiển thị một cảnh báo nói rằng tài khoản đã có một contract đã được deploy và sẽ hỏi bạn có muốn tiếp tục hay không. Chỉ cần gõ `y` và bấm enter.

```
This account already has a deployed contract [ AKJK7sCysrWrFZ976YVBnm6yzmJuKLzdAyssfzK9yLsa ]. Do you want to proceed? (y/n)
```

## Các token enumerating

Khi contract cập nhật đã được deploy lại, bạn có thể kiểm tra và xem liệu các function mới này có hoạt động như mong đợi hay không.

### Các token NFT

Hãy query một list của non-fungible token trên contract. Sử dụng lệnh sau để truy vấn thông tin của tối đa 50 NFT bắt đầu từ item thứ 10:

```bash
near view $NFT_CONTRACT_ID nft_tokens '{"from_index": "10", "limit": 50}'
```

Câu lệnh này sẽ trả về một ouput kiểu như sau:

<details>
<summary>Ví dụ về response nhận được: </summary>
<p>

```json
[]
```

</p>
</details>

### Các token theo owner

Để lấy tổng số lượng NFT sở hữu bởi account `goteam.testnet`, hãy call function `nft_supply_for_owner` và set parameter `account_id`:

```bash
near view $NFT_CONTRACT_ID nft_supply_for_owner '{"account_id": "goteam.testnet"}'
```

Lệnh này sẽ trả về kết quả tương tự như sau:

<details>
<summary>Ví dụ về response nhận được: </summary>
<p>

```json
0
```

</p>
</details>

## Kết luận

Trong hướng dẫn này, bạn đã thêm hai [enumeration function mới](/tutorials/nfts/enumeration#modifications-to-the-contract), và bây giờ bạn đã có NFT smart contract cơ bản với mint và enumeration method. Sau khi implement các sửa đổi này, bạn deploy lại smart contract và test các function bằng CLI.

Trong [hướng dẫn kế tiếp](/docs/tutorials/contracts/nfts/core), bạn sẽ implement các core function cần thiết để cho phép các user có thể transfer các token đã được mint ra.

:::info Hãy nhớ Nếu bạn muốn xem code hoàn chỉnh của hướng dẫn này, bạn có thể checkout branch `3.enumeration`. :::

:::note Versioning for this article

At the time of this writing, this example works with the following versions:

- near-cli: `3.0.0`
- NFT standard: [NEP171](https://nomicon.io/Standards/Tokens/NonFungibleToken/Core), version `1.0.0`
- Enumeration standard: [NEP181](https://nomicon.io/Standards/Tokens/NonFungibleToken/Enumeration), version `1.0.0`

:::
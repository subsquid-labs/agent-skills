# Full Portal Chain Name Mapping

Portal serves **200 datasets** (as of August 2026; 30 low-usage datasets were retired on August 5). This file maps common chain names to Portal dataset names. For the always-current list:

```bash
curl -s https://portal.sqd.dev/datasets          # full catalog with real_time flags
curl -I https://portal.sqd.dev/datasets/{name}/metadata   # 200 = exists, 404 = wrong name
```

Or via MCP: `portal_list_networks` (search by name/alias/chain ID, filter by `vm` and `real_time_only`).

> **⚠️ 67 datasets retire on 2026-08-20 at 12:00 UTC** — mostly low-usage Substrate chains and small EVM networks. They are still queryable until then but must not be used for anything new. Full list in [Retiring on 2026-08-20](#retiring-on-2026-08-20) below; announcement: <https://docs.sqd.dev/announcements/dataset-retirements-august-2026>.

## Real-Time Datasets (32)

These datasets stream to the live chain head; everything else is finalized-historical only.

| Common Name | Portal Dataset Name | Type |
|-------------|-------------------|------|
| Ethereum | `ethereum-mainnet` | EVM |
| Arbitrum | `arbitrum-one` | EVM |
| Base | `base-mainnet` | EVM |
| Optimism | `optimism-mainnet` | EVM |
| Polygon | `polygon-mainnet` | EVM |
| BSC / Binance | `binance-mainnet` | EVM |
| Avalanche C-Chain | `avalanche-mainnet` | EVM |
| zkSync Era | `zksync-mainnet` | EVM |
| Linea | `linea-mainnet` | EVM |
| Gnosis | `gnosis-mainnet` | EVM |
| Celo | `celo-mainnet` | EVM |
| Berachain | `berachain-mainnet` | EVM |
| Flare | `flare-mainnet` | EVM |
| Ink | `ink-mainnet` | EVM |
| MegaETH | `megaeth-mainnet` | EVM |
| Monad | `monad-mainnet` | EVM |
| Plasma | `plasma-mainnet` | EVM |
| Soneium | `soneium-mainnet` | EVM |
| TAC | `tac-mainnet` | EVM |
| Unichain | `unichain-mainnet` | EVM |
| Zora | `zora-mainnet` | EVM |
| HyperEVM | `hyperliquid-mainnet` | EVM |
| Hyperliquid Fills | `hyperliquid-fills` | HyperliquidFills |
| Solana | `solana-mainnet` (alias: `solana-beta`) | Solana |
| Solana Devnet | `solana-devnet` | Solana |
| Bitcoin | `bitcoin-mainnet` | Bitcoin |
| Tron | `tron-mainnet` | Tron |
| Ethereum Sepolia | `ethereum-sepolia` | EVM (testnet) |
| Arbitrum Sepolia | `arbitrum-sepolia` | EVM (testnet) |
| Polygon Amoy | `polygon-amoy-testnet` | EVM (testnet) |
| Monad Testnet | `monad-testnet` | EVM (testnet) |
| Alpen Testnet | `alpen-testnet` | EVM (testnet) |

> **Real-time streaming is NOT supported for Substrate chains** — those are finalized-historical only.

## Popular Historical-Only EVM Chains

| Common Name | Portal Dataset Name |
|-------------|-------------------|
| Scroll | `scroll-mainnet` |
| Blast | `blast-l2-mainnet` |
| Mantle | `mantle-mainnet` |
| Mode | `mode-mainnet` |
| Taiko | `taiko-mainnet` |
| Polygon zkEVM | `polygon-zkevm-mainnet` |
| Arbitrum Nova | `arbitrum-nova` |
| Sonic | `sonic-mainnet` |
| opBNB | `opbnb-mainnet` |
| Metis | `metis-mainnet` |
| Manta Pacific | `manta-pacific` |
| Moonbeam (EVM) | `moonbeam-mainnet` |
| Moonriver (EVM) | `moonriver-mainnet` |
| Astar (EVM) | `astar-mainnet` |
| Abstract | `abstract-mainnet` |
| Hedera (EVM mirror) | `hedera-mainnet` |
| Etherlink | `etherlink-mainnet` |
| Lukso | `lukso-mainnet` |
| Core | `core-mainnet` |
| X Layer | `xlayer-mainnet` |
| zkLink Nova | `zklink-nova-mainnet` |
| Plume | `plume-mainnet` |
| Katana | `katana-mainnet` |
| Hemi | `hemi-mainnet` |
| BOB | `bob-mainnet` |
| Galxe Gravity | `galxe-gravity` |
| B3 | `b3-mainnet` |
| Beam | `beam-mainnet` |
| Prom | `prom-mainnet` |
| Bittensor EVM | `bittensor-mainnet-evm` |
| Peaq (EVM) | `peaq-mainnet` |

### Removed from Portal (do NOT use)

- ❌ `worldchain-mainnet` — no longer served
- ❌ `fantom-mainnet` — no longer served
- ❌ `ethereum-holesky` — retired 2026-08-05 (use `ethereum-sepolia` or `ethereum-hoodi`)
- ❌ `adi-mainnet` / `adi-testnet` — no longer served
- ❌ `memecore-mainnet` / `exosama` / `botanix-mainnet` — networks retired July 2026
- ❌ `acala-substrate` — use `acala`
- ❌ `subsocial` — use `subsocial-parachain`

Thirty more low-usage datasets (mostly testnets and small parachains, e.g. `westend`, `rococo`, `dancebox`) were retired on 2026-08-05 — any slug not in the Complete Dataset List below is gone.

## Solana-VM (SVM) Datasets

| Common Name | Portal Dataset Name | Type |
|-------------|-------------------|------|
| Solana | `solana-mainnet` (alias: `solana-beta`) | Solana |
| Solana Devnet | `solana-devnet` | Solana |
| SOON | `soon-mainnet` (+ `soon-devnet`, `soon-testnet`) | Solana |
| SVM BNB | `svm-bnb-mainnet` (+ `svm-bnb-testnet`) | Solana |

All use `"type": "solana"` queries.

## Substrate Chains (selection)

| Common Name | Portal Dataset Name |
|-------------|-------------------|
| Polkadot | `polkadot` |
| Kusama | `kusama` |
| Polkadot Asset Hub | `asset-hub-polkadot` |
| Kusama Asset Hub | `asset-hub-kusama` |
| Moonbeam (Substrate) | `moonbeam-substrate` |
| Moonriver (Substrate) | `moonriver-substrate` |
| Astar (Substrate) | `astar-substrate` |
| Hydration (HydraDX) | `hydradx` |
| Vara | `vara` |
| Bittensor | `bittensor` |
| Zeitgeist | `zeitgeist` |
| Enjin Matrix | `enjin-matrix` |
| Peaq (Substrate) | `peaq-mainnet-substrate` |

> Many smaller parachains (Acala, Bifrost, Phala, Interlay, Centrifuge, Avail, Frequency, Polymesh, KILT, and others) **retire on 2026-08-20** — see the retirement list below before using any parachain not in this table.

Many more parachains are available — search the full list below or use `portal_list_networks` with `vm: "substrate"`.

> **Note:** Frontier EVM parachains (Moonbeam, Astar, Peaq) have both EVM and Substrate datasets. Use the `-substrate` suffix with `"type": "substrate"` for Substrate queries; use the EVM dataset (e.g., `moonbeam-mainnet`) with `"type": "evm"` for EVM queries.

## Non-EVM Chains

| Common Name | Portal Dataset Name | Type |
|-------------|-------------------|------|
| Bitcoin | `bitcoin-mainnet` | Bitcoin |
| Tron | `tron-mainnet` | Tron |
| Solana | `solana-mainnet` | Solana |
| HyperEVM | `hyperliquid-mainnet` | EVM |
| HyperEVM Testnet | `hyperliquid-testnet` | EVM |
| Hyperliquid Fills | `hyperliquid-fills` | HyperliquidFills |
| Hyperliquid Replica Cmds | `hyperliquid-replica-cmds` | HyperliquidReplicaCmds |

## Platform Name Comparison

Different platforms use different names for the same chains:

| Blockchain | DeFiLlama | Portal | Etherscan |
|-----------|-----------|--------|-----------|
| Arbitrum | arbitrum | arbitrum-one | arbiscan.io |
| BSC | bsc | binance-mainnet | bscscan.com |
| zkSync Era | zksync-era | zksync-mainnet | explorer.zksync.io |
| Blast | blast | blast-l2-mainnet | blastscan.io |
| Tron | tron | tron-mainnet | tronscan.org |

**Always use Portal-specific names when querying the Portal API.**

## Retiring on 2026-08-20

These datasets retire on **2026-08-20 at 12:00 UTC** ([announcement](https://docs.sqd.dev/announcements/dataset-retirements-august-2026)). Still queryable until then, but do not build anything new on them. (`plume-devnet` and `poseidon-testnet` from the announced list of 67 are already gone.)

```
0g-testnet acala aleph-zero aleph-zero-evm-mainnet arthera-mainnet avail basilisk berachain-bartio
bifrost-kusama bifrost-polkadot bitfinity-mainnet bitgert-mainnet bridge-hub-kusama bridge-hub-polkadot canto
centrifuge cere clover collectives-polkadot crust cyber-mainnet darwinia darwinia-crab degen-chain dfk-chain
dogechain-mainnet equilibrium frequency gelato-arbitrum-blueberry immutable-zkevm-mainnet integritee interlay
joystream karura khala kilt kintsugi litentry merlin-mainnet moonsama nakachain neon-devnet neon-mainnet
ozean-testnet paseo pendulum people-chain phala picasso polkadex polymesh reef reef-testnet robonomics
shibuya-substrate shiden-mainnet shiden-substrate skale-nebula sora-mainnet subsocial-parachain
superseed-mainnet tanssi ternoa turing-avail turing-mainnet
```

## Complete Dataset List (August 2026, 200 datasets)

Grep this block to check a name; verify with the `/metadata` endpoint before use. The retiring datasets above are still included until 2026-08-20.

```
0g-testnet abstract-mainnet abstract-testnet acala agung agung-evm aleph-zero aleph-zero-evm-mainnet
alpen-testnet amplitude arbitrum-nova arbitrum-one arbitrum-sepolia arthera-mainnet asset-hub-kusama
asset-hub-paseo asset-hub-polkadot asset-hub-westend astar-mainnet astar-substrate astar-zkevm-mainnet
astar-zkyoto avail avalanche-mainnet avalanche-testnet b3-mainnet b3-sepolia base-mainnet base-sepolia
basilisk beam-mainnet berachain-bartio berachain-mainnet bifrost-kusama bifrost-polkadot binance-mainnet
binance-testnet bitcoin-mainnet bitfinity-mainnet bitgert-mainnet bittensor bittensor-mainnet-evm
bittensor-testnet bittensor-testnet-evm blast-l2-mainnet blast-sepolia bob-mainnet bob-sepolia
bridge-hub-kusama bridge-hub-polkadot canto celo-alfajores-testnet celo-mainnet centrifuge cere chainflip
clover collectives-polkadot core-mainnet crust cyber-mainnet darwinia darwinia-crab degen-chain dfk-chain
dogechain-mainnet eden enjin-canary-matrix enjin-matrix enjin-relay equilibrium ethereum-hoodi
ethereum-mainnet ethereum-mainnet-tb ethereum-sepolia etherlink-mainnet etherlink-shadownet etherlink-testnet
flare-mainnet frequency galxe-gravity gelato-arbitrum-blueberry gelato-opcelestia-raspberry gnosis-mainnet
hedera-mainnet hemi-mainnet hemi-testnet hydradx hyperliquid-fills hyperliquid-mainnet
hyperliquid-replica-cmds hyperliquid-testnet immutable-zkevm-mainnet ink-mainnet ink-sepolia integritee
interlay invarch-parachain invarch-tinkernet joystream karura katana-mainnet khala kilt kintsugi kusama
linea-mainnet litentry lukso-mainnet manta-pacific manta-pacific-sepolia mantle-mainnet mantle-sepolia
megaeth-mainnet megaeth-testnet merlin-mainnet metis-mainnet mode-mainnet monad-mainnet monad-testnet
moonbase-substrate moonbase-testnet moonbeam-mainnet moonbeam-substrate moonriver-mainnet moonriver-substrate
moonsama nakachain neon-devnet neon-mainnet opbnb-mainnet opbnb-testnet optimism-mainnet optimism-sepolia
ozean-testnet paseo peaq-mainnet peaq-mainnet-substrate pendulum people-chain phala picasso plasma-mainnet
plasma-testnet plume-mainnet plume-testnet polkadex polkadot polygon-amoy-testnet polygon-mainnet
polygon-zkevm-cardona-testnet polygon-zkevm-mainnet polymesh prom-mainnet reef reef-testnet robonomics
scroll-mainnet scroll-sepolia shibuya-substrate shiden-mainnet shiden-substrate skale-nebula solana-devnet
solana-mainnet soneium-mainnet soneium-minato-testnet sonic-mainnet sonic-testnet soon-devnet soon-mainnet
soon-testnet sora-mainnet subsocial-parachain superseed-mainnet svm-bnb-mainnet svm-bnb-testnet tac-mainnet
taiko-mainnet tanssi ternoa tron-mainnet turing-avail turing-mainnet unichain-mainnet unichain-sepolia vara
vara-testnet x1-testnet xlayer-mainnet xlayer-testnet zeitgeist zeitgeist-testnet zklink-nova-mainnet
zksync-mainnet zksync-sepolia zkverify-mainnet zkverify-testnet zora-mainnet zora-sepolia
```

## Quick Reference: Top Chains

```json
{
  "Ethereum": "ethereum-mainnet",
  "Arbitrum": "arbitrum-one",
  "Base": "base-mainnet",
  "Optimism": "optimism-mainnet",
  "Polygon": "polygon-mainnet",
  "BSC": "binance-mainnet",
  "Avalanche": "avalanche-mainnet",
  "zkSync Era": "zksync-mainnet",
  "Linea": "linea-mainnet",
  "Gnosis": "gnosis-mainnet",
  "Celo": "celo-mainnet",
  "Berachain": "berachain-mainnet",
  "Monad": "monad-mainnet",
  "MegaETH": "megaeth-mainnet",
  "Unichain": "unichain-mainnet",
  "Scroll": "scroll-mainnet",
  "Blast": "blast-l2-mainnet",
  "Polkadot": "polkadot",
  "Kusama": "kusama",
  "Moonbeam (Substrate)": "moonbeam-substrate",
  "Solana": "solana-mainnet",
  "Bitcoin": "bitcoin-mainnet",
  "Tron": "tron-mainnet",
  "Hyperliquid Fills": "hyperliquid-fills",
  "HyperEVM": "hyperliquid-mainnet"
}
```

## Using Dataset Names as Constants

```typescript
const PORTAL_DATASETS = {
  ETHEREUM: 'ethereum-mainnet',
  ARBITRUM: 'arbitrum-one',
  BASE: 'base-mainnet',
  OPTIMISM: 'optimism-mainnet',
  BSC: 'binance-mainnet',
  SOLANA: 'solana-mainnet',
  BITCOIN: 'bitcoin-mainnet',
  TRON: 'tron-mainnet'
} as const;

// Use:
const url = `https://portal.sqd.dev/datasets/${PORTAL_DATASETS.ARBITRUM}/stream`;
```

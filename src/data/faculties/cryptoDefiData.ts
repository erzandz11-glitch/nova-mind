import { FrontierFaculty } from '../../types';

export const CRYPTO_DEFI_FACULTY: FrontierFaculty = {
  id: 'crypto_defi_web3',
  name: 'Faculty of Crypto, DeFi & Web3 Sovereignty',
  shortTitle: 'Crypto & DeFi',
  iconName: 'Coins',
  emoji: '🪙',
  themeColor: 'rose',
  accentHex: '#f43f5e',
  glowClass: 'shadow-[0_0_35px_rgba(244,63,94,0.25)]',
  borderClass: 'border-rose-500/30 hover:border-rose-400/60',
  bgLightClass: 'bg-rose-500/10 text-rose-400',
  badgeClass: 'bg-rose-500/10 text-rose-300 border border-rose-500/30',
  headline: 'Smart Contract Auditing, MEV Extraction & Sovereign Protocol Architecture',
  description: 'Master decentralized finance, smart contract architecture, tokenomics engineering, and the critical infrastructure underlying Web3 sovereignty and on-chain ecosystems.',
  difficulty: 'Elite Sovereign',
  simulatorName: 'DeFi Protocol & Smart Contract Audit Sandbox',
  simulatorTag: 'On-Chain Security Terminal',
  estimatedHours: 115,
  totalXp: 3400,
  completionPercent: 0,
  drillNodes: [],
  modules: [
    {
      id: 'crypto_mod_1',
      code: '6.1',
title: 'Bitcoin Halving Dynamics & On-Chain Whale Forensics',
      description: 'Analyze Bitcoin market cycles, supply constraints, and learn to track institutional money flows using on-chain analytics tools.',
      lessons: [
        {
          id: 'crypto_1_1',
          title: 'The UTXO Model & Transaction Graph',
          duration: '25m',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Bitcoin uses the Unspent Transaction Output (UTXO) model rather than account balances, requiring inputs to be fully consumed and change returned.',
          drillQuestion: {
            id: 'crypto_1_1_q',
            prompt: 'Why does a Bitcoin transaction often generate a "change" address?',
            options: [
              'Because miners charge variable fees depending on block size',
              'To hide the identity of the sender',
              'Because UTXOs must be spent in their entirety as inputs',
              'To comply with Lightning Network channel requirements'
            ],
            correctIndex: 2,
            explanation: 'In the UTXO model, an entire output must be consumed as an input. If the output is larger than the intended payment, the excess is sent back to the sender via a change address.'
          }
        },
        {
          id: 'crypto_1_2',
          title: 'Halving Economics & Stock-to-Flow',
          duration: '30m',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'The block reward halving mechanism enforces absolute digital scarcity, structurally altering supply dynamics every 210,000 blocks.',
          formula: 'S2F = Stock (existing supply) / Flow (annual production)',
          drillQuestion: {
            id: 'crypto_1_2_q',
            prompt: 'What happens to the Stock-to-Flow ratio of Bitcoin immediately after a halving event?',
            options: [
              'It remains the same',
              'It roughly doubles',
              'It decreases by half',
              'It fluctuates unpredictably based on miner hash rate'
            ],
            correctIndex: 1,
            explanation: 'Because the flow (new supply added annually) is cut in half, the denominator halves, causing the S2F ratio to double, reflecting increased scarcity.'
          }
        },
        {
          id: 'crypto_1_3',
          title: 'On-Chain Metrics: SOPR & MVRV Z-Score',
          duration: '35m',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'On-chain indicators like SOPR reveal macro market psychology by showing whether transacted coins are moving at a profit or loss.',
          drillQuestion: {
            id: 'crypto_1_3_q',
            prompt: 'An SOPR (Spent Output Profit Ratio) consistently below 1.0 indicates what market condition?',
            options: [
              'Euphoria and peak bull market',
              'Miner capitulation',
              'Market participants selling at a loss (capitulation/bear phase)',
              'High transaction fee congestion'
            ],
            correctIndex: 2,
            explanation: 'An SOPR below 1 means the price realized (spent) is less than the price created (when acquired), indicating on-chain losses.'
          }
        },
        {
          id: 'crypto_1_4',
          title: 'Whale Clustering and Entity Resolution',
          duration: '25m',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Heuristics like Common-Input-Ownership allow analysts to cluster thousands of addresses into single logical entities like exchanges or whales.',
          drillQuestion: {
            id: 'crypto_1_4_q',
            prompt: 'What is the underlying assumption of the Common-Input-Ownership heuristic?',
            options: [
              'All addresses in a block belong to one miner',
              'Inputs used together in a single transaction likely belong to the same entity',
              'Change addresses are always segwit addresses',
              'Addresses with identical balances are owned by the same person'
            ],
            correctIndex: 1,
            explanation: 'To sign for multiple inputs in one transaction, the creator must possess the private keys for all of them, heavily implying they belong to the same entity.'
          }
        },
        {
          id: 'crypto_1_5',
          title: 'Miner Economics and Hash Ribbons',
          duration: '25m',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Miner capitulation often signals market bottoms as inefficient operators power down, centralizing hash power among efficient entities.',
          drillQuestion: {
            id: 'crypto_1_5_q',
            prompt: 'What does a "hash ribbon inversion" typically signify in Bitcoin analytics?',
            options: [
              'A sudden increase in global ASIC production',
              'Miner capitulation where the short-term moving average of hash rate falls below the long-term',
              'The transition from PoW to PoS',
              'A difficulty adjustment upward'
            ],
            correctIndex: 1,
            explanation: 'Hash ribbon inversions occur when the 30-day MA of hash rate drops below the 60-day MA, indicating miners are turning off rigs due to unprofitability.'
          }
        }
      ]
    },
    {
      id: 'crypto_mod_2',
      code: '6.2',
title: 'DeFi Yield Architecture & Lending Engines',
      description: 'Deconstruct Automated Market Makers, liquidity pools, lending protocols, and the mechanics of sustainable vs. inflationary yield.',
      lessons: [
        {
          id: 'crypto_2_1',
          title: 'AMM Mechanics: Constant Product Formula',
          duration: '30m',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Automated Market Makers like Uniswap V2 rely on the x * y = k formula to dynamically price assets based on pool ratios.',
          formula: 'x * y = k',
          drillQuestion: {
            id: 'crypto_2_1_q',
            prompt: 'In an x*y=k AMM, if a user buys a large amount of token x (depleting it), what happens to its price?',
            options: [
              'It decreases linearly',
              'It increases exponentially as reserve x approaches zero',
              'It remains constant until liquidity is added',
              'The transaction fails due to lack of order book depth'
            ],
            correctIndex: 1,
            explanation: 'As x decreases, y must increase to keep k constant, meaning the user must pay increasingly more token y for marginal amounts of token x.'
          }
        },
        {
          id: 'crypto_2_2',
          title: 'Impermanent Loss Mathematics',
          duration: '30m',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Impermanent Loss occurs when the price ratio of pooled assets diverges from the ratio at deposit, leaving LPs with less value than holding the assets outright.',
          drillQuestion: {
            id: 'crypto_2_2_q',
            prompt: 'At what point does Impermanent Loss become "permanent"?',
            options: [
              'After 30 days of providing liquidity',
              'When the LP withdraws their liquidity at a diverged price ratio',
              'When the AMM upgrades to a new version',
              'When one token goes completely to zero'
            ],
            correctIndex: 1,
            explanation: 'The loss is "impermanent" because it can reverse if prices return to the original ratio. It becomes permanently realized when the liquidity is withdrawn.'
          }
        },
        {
          id: 'crypto_2_3',
          title: 'Concentrated Liquidity (Uniswap V3)',
          duration: '35m',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Concentrated liquidity allows LPs to bound their capital to specific price ranges, vastly improving capital efficiency but increasing active management requirements.',
          drillQuestion: {
            id: 'crypto_2_3_q',
            prompt: 'What happens if the market price moves outside an LP\'s specified range in Uniswap V3?',
            options: [
              'The LP earns double fees to compensate for the risk',
              'The position is automatically liquidated',
              'The position becomes 100% composed of one asset and stops earning fees',
              'The smart contract adjusts the range automatically'
            ],
            correctIndex: 2,
            explanation: 'If the price drops below the range, the LP holds 100% of the depreciating asset and earns no trading fees until the price re-enters the range.'
          }
        },
        {
          id: 'crypto_2_4',
          title: 'Overcollateralized Lending (Aave/Compound)',
          duration: '30m',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'DeFi lending relies on overcollateralization and liquidation thresholds to maintain protocol solvency without traditional credit scores.',
          drillQuestion: {
            id: 'crypto_2_4_q',
            prompt: 'What is a "liquidation penalty" in DeFi lending protocols?',
            options: [
              'A tax paid to the government for bad debt',
              'A fee charged by the blockchain network to process liquidations',
              'A discount offered to liquidators for repaying undercollateralized debt',
              'A penalty applied to users who pay their loans early'
            ],
            correctIndex: 2,
            explanation: 'Liquidators are incentivized to secure the protocol by purchasing the borrower\'s collateral at a discount (the penalty), ensuring the debt is repaid.'
          }
        },
        {
          id: 'crypto_2_5',
          title: 'Interest Rate Models and Utilization',
          duration: '25m',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Borrow APYs are determined algorithmically based on pool utilization; as a pool empties, interest rates spike to incentivize deposits and deter borrowing.',
          formula: 'U = Total Borrows / (Total Cash + Total Borrows)',
          drillQuestion: {
            id: 'crypto_2_5_q',
            prompt: 'Why do most DeFi lending protocols use a "kinked" interest rate curve?',
            options: [
              'To comply with legacy banking standards',
              'To trigger liquidations faster',
              'To sharply increase rates when utilization becomes dangerously high to prevent illiquidity',
              'Because linear models cannot be calculated on-chain'
            ],
            correctIndex: 2,
            explanation: 'The "kink" represents an optimal utilization point. Past this point, rates spike aggressively to ensure there is always liquidity for depositors to withdraw.'
          }
        },
        {
          id: 'crypto_2_6',
          title: 'Yield Aggregators & Auto-Compounding',
          duration: '25m',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Protocols like Yearn automate complex yield farming strategies, socializing gas costs and auto-compounding rewards to maximize APY.',
          drillQuestion: {
            id: 'crypto_2_6_q',
            prompt: 'How do yield aggregators primarily increase capital efficiency for retail users?',
            options: [
              'By minting unbacked synthetic assets',
              'By pooling funds to socialize gas costs during reward harvesting and reinvestment',
              'By negotiating private off-chain deals with AMMs',
              'By avoiding smart contract audits'
            ],
            correctIndex: 1,
            explanation: 'Auto-compounding requires frequent transactions. Aggregators pool deposits and perform these transactions in bulk, drastically reducing gas costs per user.'
          }
        }
      ]
    },
    {
      id: 'crypto_mod_3',
      code: '6.3',
title: 'Smart Contract Security & Tokenomics Engineering',
      description: 'Analyze real-world exploits, master Solidity security patterns, and design sustainable token economies.',
      lessons: [
        {
          id: 'crypto_3_1',
          title: 'Reentrancy Attacks & CEI Pattern',
          duration: '35m',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Reentrancy allows malicious contracts to repeatedly call a function before state updates occur. The Checks-Effects-Interactions pattern prevents this.',
          codeSnippet: `// Vulnerable Contract
function withdraw() public {
    uint bal = balances[msg.sender];
    require(bal > 0);
    // Interaction BEFORE Effect!
    (bool sent, ) = msg.sender.call{value: bal}("");
    require(sent, "Failed");
    balances[msg.sender] = 0;
}`,
          drillQuestion: {
            id: 'crypto_3_1_q',
            prompt: 'How does the Checks-Effects-Interactions (CEI) pattern mitigate reentrancy?',
            options: [
              'By using tx.origin instead of msg.sender',
              'By updating internal state (balances) BEFORE making external contract calls',
              'By limiting gas to 2300 via transfer()',
              'By requiring multi-sig approval for withdrawals'
            ],
            correctIndex: 1,
            explanation: 'By setting balances[msg.sender] = 0 before transferring ether, any reentrant call will see a balance of 0 and fail the initial check.'
          }
        },
        {
          id: 'crypto_3_2',
          title: 'Oracle Manipulation & Flash Loan Attacks',
          duration: '35m',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Relying on low-liquidity on-chain AMMs for price data allows attackers to use flash loans to artificially skew prices and exploit lending protocols.',
          drillQuestion: {
            id: 'crypto_3_2_q',
            prompt: 'What is the most robust defense against flash loan oracle manipulation?',
            options: [
              'Banning smart contracts from calling your protocol',
              'Using a Time-Weighted Average Price (TWAP) oracle or decentralized oracle networks like Chainlink',
              'Limiting transaction sizes',
              'Implementing a 10% withdrawal fee'
            ],
            correctIndex: 1,
            explanation: 'TWAPs calculate price over time, making instantaneous single-block price manipulation via flash loans extremely expensive and ineffective.'
          }
        },
        {
          id: 'crypto_3_3',
          title: 'Token Emissions and Inflation Schedules',
          duration: '25m',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'High APYs paid in native utility tokens are hyper-inflationary; sustainable tokenomics require robust sinks and value accrual mechanisms.',
          drillQuestion: {
            id: 'crypto_3_3_q',
            prompt: 'In tokenomics, what is a "token sink"?',
            options: [
              'A wallet where lost tokens are permanently locked',
              'A mechanism that removes tokens from circulation (e.g., burning or locking) to counter inflation',
              'An exploit that drains liquidity',
              'A centralized exchange deposit address'
            ],
            correctIndex: 1,
            explanation: 'Token sinks are protocol utility mechanisms (like fee burning, staking requirements) that reduce circulating supply to offset emission inflation.'
          }
        },
        {
          id: 'crypto_3_4',
          title: 'VeTokenomics and Governance Bribes',
          duration: '30m',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'The vote-escrowed (ve) model forces long-term alignment by locking tokens in exchange for voting power over protocol emissions.',
          drillQuestion: {
            id: 'crypto_3_4_q',
            prompt: 'In the Curve veCRV model, how does lock duration affect user power?',
            options: [
              'Longer locks provide higher APY but zero voting power',
              'Longer locks linearly increase voting power and gauge weight control',
              'Shorter locks allow for flash-voting',
              'Lock duration has no effect on power, only token amount matters'
            ],
            correctIndex: 1,
            explanation: 'Locking 1 CRV for 4 years yields 1 veCRV. Locking it for 1 year yields 0.25 veCRV. Time locks directly amplify governance influence.'
          }
        },
        {
          id: 'crypto_3_5',
          title: 'Frontrunning and Sandwich Attacks',
          duration: '30m',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Public mempools allow bots to monitor pending transactions and inject their own trades beforehand to extract value from slippage.',
          drillQuestion: {
            id: 'crypto_3_5_q',
            prompt: 'How can a retail user minimize the risk of being sandwich attacked on a DEX?',
            options: [
              'By setting a very high gas fee',
              'By setting a very low slippage tolerance',
              'By routing trades through multiple hops',
              'By waiting until weekend hours to trade'
            ],
            correctIndex: 1,
            explanation: 'A sandwich attack exploits the difference between your expected price and your maximum slippage. Tight slippage limits the profit margin of the attacker.'
          }
        }
      ]
    },
    {
      id: 'crypto_mod_4',
      code: '6.4',
title: 'Ethereum Deep Dive: EVM, Gas Optimization & L2 Scaling',
      description: 'Master Ethereum Virtual Machine architecture, storage layouts, and the mechanics of Rollups and Layer 2 networks.',
      lessons: [
        {
          id: 'crypto_4_1',
          title: 'EVM Memory, Storage & Calldata',
          duration: '35m',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Gas costs vary wildly by data location: Storage (SSTORE) is massively expensive, Memory is temporary, and Calldata is cheap and immutable.',
          drillQuestion: {
            id: 'crypto_4_1_q',
            prompt: 'When passing an array to an external function in Solidity, which data location is most gas efficient?',
            options: [
              'storage',
              'memory',
              'calldata',
              'stack'
            ],
            correctIndex: 2,
            explanation: 'Calldata is a read-only, non-modifiable area where function arguments are stored. Avoiding copying from calldata to memory saves significant gas.'
          }
        },
        {
          id: 'crypto_4_2',
          title: 'Storage Packing and Slot Optimization',
          duration: '35m',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'The EVM stores state in 32-byte slots. Ordering variables sequentially allows the compiler to pack multiple variables into a single slot, saving gas.',
          codeSnippet: `// Inefficient
uint128 a;
uint256 b;
uint128 c;

// Efficient (Packed into 2 slots)
uint128 a;
uint128 c;
uint256 b;`,
          drillQuestion: {
            id: 'crypto_4_2_q',
            prompt: 'Why does changing the order of state variables affect deployment and interaction gas costs?',
            options: [
              'It affects the alphabetical sorting of the ABI',
              'It allows variables totaling <= 32 bytes to be packed into a single storage slot',
              'It alters the Keccak256 hash of the contract',
              'It bypasses the block gas limit'
            ],
            correctIndex: 1,
            explanation: 'SSTORE operations cost up to 20,000 gas. Packing variables so they share a 32-byte slot means one SSTORE/SLOAD can access multiple variables.'
          }
        },
        {
          id: 'crypto_4_3',
          title: 'Optimistic Rollups Architecture',
          duration: '30m',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Optimistic Rollups assume off-chain transactions are valid by default and rely on a 7-day challenge period with fraud proofs for security.',
          drillQuestion: {
            id: 'crypto_4_3_q',
            prompt: 'What is the primary drawback of the Optimistic Rollup design for end users?',
            options: [
              'Inability to run EVM-compatible code',
              'Extremely high fees compared to Layer 1',
              'A 7-day delay when withdrawing funds back to Layer 1',
              'Lack of smart contract support'
            ],
            correctIndex: 2,
            explanation: 'Because the system assumes validity, it must allow time (usually 7 days) for validators to submit a fraud proof if a state transition was malicious.'
          }
        },
        {
          id: 'crypto_4_4',
          title: 'Zero-Knowledge Rollups (zk-Rollups)',
          duration: '35m',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'zk-Rollups use cryptographic validity proofs (SNARKs/STARKs) submitted to L1, proving mathematically that L2 state transitions are correct instantly.',
          drillQuestion: {
            id: 'crypto_4_4_q',
            prompt: 'Why do zk-Rollups theoretically scale better than Optimistic Rollups regarding L1 data availability?',
            options: [
              'They do not store any data on L1',
              'They only need to publish the validity proof and state differences, not full transaction data',
              'They use Proof of Work for sequencing',
              'They execute all transactions directly on L1'
            ],
            correctIndex: 1,
            explanation: 'Because a mathematical proof guarantees validity, zk-Rollups don\'t need to publish all transaction data for fraud detection, only state diffs, saving L1 calldata.'
          }
        },
        {
          id: 'crypto_4_5',
          title: 'EIP-4844: Proto-Danksharding (Blobs)',
          duration: '30m',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'EIP-4844 introduced blob-carrying transactions, providing a separate, cheap, and temporary data availability layer specifically for L2 rollups.',
          drillQuestion: {
            id: 'crypto_4_5_q',
            prompt: 'What happens to "blob" data on Ethereum after a certain period (e.g., ~18 days)?',
            options: [
              'It is permanently inscribed into L1 state',
              'It is automatically executed as EVM code',
              'It is pruned/deleted from beacon nodes to prevent state bloat',
              'It is converted into standard calldata'
            ],
            correctIndex: 2,
            explanation: 'Blobs are designed for temporary data availability needed by rollups, not permanent storage, allowing nodes to discard them and keep hardware requirements low.'
          }
        },
        {
          id: 'crypto_4_6',
          title: 'Account Abstraction (ERC-4337)',
          duration: '30m',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'ERC-4337 replaces EOAs (Externally Owned Accounts) with Smart Contract Wallets, enabling gas sponsorship, social recovery, and batch transactions.',
          drillQuestion: {
            id: 'crypto_4_6_q',
            prompt: 'What role does the "Bundler" play in ERC-4337?',
            options: [
              'It generates private keys for users',
              'It listens to a special mempool, bundles UserOperations, and pays the L1 gas fee',
              'It acts as the central sequencer for L2 networks',
              'It verifies zk-proofs on chain'
            ],
            correctIndex: 1,
            explanation: 'Because smart contracts cannot initiate transactions natively, bundlers take UserOperations, wrap them in a standard L1 transaction, pay the gas, and get refunded by the contract.'
          }
        }
      ]
    },
    {
      id: 'crypto_mod_5',
      code: '6.5',
title: 'Solana, Rust & High-Performance Blockchain Development',
      description: 'Explore the Solana execution model, local state, Parallel execution (Sealevel), and writing secure Rust programs.',
      lessons: [
        {
          id: 'crypto_5_1',
          title: 'Solana Account Model vs EVM',
          duration: '30m',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Unlike Ethereum where smart contracts store their own state, Solana separates code (Programs) and data (Accounts). Programs are stateless and read/write to external Accounts.',
          drillQuestion: {
            id: 'crypto_5_1_q',
            prompt: 'In Solana, why must a transaction explicitly list all the accounts it will read or write?',
            options: [
              'To calculate rent exemption fees',
              'To allow the Sealevel runtime to process non-overlapping transactions in parallel',
              'To prevent MEV extraction',
              'To limit the size of the transaction packet'
            ],
            correctIndex: 1,
            explanation: 'By knowing exactly which state (accounts) will be mutated, validators can safely execute thousands of non-overlapping transactions simultaneously.'
          }
        },
        {
          id: 'crypto_5_2',
          title: 'Proof of History (PoH)',
          duration: '25m',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'PoH is a high-frequency verifiable delay function (VDF) that provides a cryptographic clock, allowing validators to agree on time and order before consensus.',
          drillQuestion: {
            id: 'crypto_5_2_q',
            prompt: 'What specific problem does Proof of History solve in a distributed system?',
            options: [
              'The Sybil attack problem',
              'The need for nodes to communicate back-and-forth to agree on block timestamps',
              'The nothing-at-stake problem in PoS',
              'Data availability scaling'
            ],
            correctIndex: 1,
            explanation: 'By providing a cryptographic timeline, nodes don\'t need to wait for network consensus to know the sequence of events, drastically reducing communication overhead.'
          }
        },
        {
          id: 'crypto_5_3',
          title: 'Program Derived Addresses (PDAs)',
          duration: '35m',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'PDAs are accounts controlled by a specific program, generated via a deterministic hash without a private key, enabling programs to autonomously sign instructions.',
          codeSnippet: `// Rust PDA derivation
let (pda, bump_seed) = Pubkey::find_program_address(
    &[b"escrow", user.key().as_ref()],
    program_id
);`,
          drillQuestion: {
            id: 'crypto_5_3_q',
            prompt: 'What makes a PDA fundamentally different from a standard Solana wallet keypair?',
            options: [
              'It resides on a different ed25519 elliptic curve',
              'It does not have an associated private key and is forced off the elliptic curve',
              'It costs zero rent to maintain',
              'It cannot hold SOL balances'
            ],
            correctIndex: 1,
            explanation: 'find_program_address searches for a hash that falls off the curve. Because it lacks a private key, only the generating Program can "sign" for it using the bump seed.'
          }
        },
        {
          id: 'crypto_5_4',
          title: 'Anchor Framework Basics',
          duration: '30m',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Anchor abstracts raw Solana boilerplate, handling account validation, serialization (Borsh), and security checks via Rust macros.',
          codeSnippet: `#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = user, space = 8 + 64)]
    pub my_account: Account<'info, MyAccount>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}`,
          drillQuestion: {
            id: 'crypto_5_4_q',
            prompt: 'In Anchor, what does the #[account(mut)] macro explicitly signify?',
            options: [
              'The account is a mutable PDA',
              'The transaction will modify the account\'s data or lamport balance',
              'The account must be initialized in this instruction',
              'The account belongs to a malicious actor'
            ],
            correctIndex: 1,
            explanation: 'mut tells the runtime that the program requires write access to this account. Without it, the program can only read, ensuring strict access control.'
          }
        },
        {
          id: 'crypto_5_5',
          title: 'Rent and Account State Management',
          duration: '25m',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Solana charges rent to keep data in validator memory. Accounts with sufficient minimum balance are "rent-exempt," pushing the cost of state bloat to developers/users.',
          drillQuestion: {
            id: 'crypto_5_5_q',
            prompt: 'How can a developer reclaim the SOL tied up in a rent-exempt account?',
            options: [
              'By paying a one-time destruction fee',
              'By transferring the SOL out and closing the account (zeroing data length)',
              'It is impossible; rent is permanently locked',
              'By appealing to the Solana Foundation'
            ],
            correctIndex: 1,
            explanation: 'Accounts can be closed by transferring the lamports out and reducing the data size to zero, effectively garbage collecting the state and refunding the rent.'
          }
        }
      ]
    },
    {
      id: 'crypto_mod_6',
      code: '6.6',
title: 'MEV, Flashbots & Blockchain Dark Forest',
      description: 'Navigate Maximal Extractable Value, block building, frontrunning, and how Flashbots mitigates the dark forest ecosystem.',
      lessons: [
        {
          id: 'crypto_6_1',
          title: 'The Concept of MEV',
          duration: '25m',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Maximal Extractable Value is profit validators (or searchers) can extract by including, excluding, or reordering transactions within a block.',
          drillQuestion: {
            id: 'crypto_6_1_q',
            prompt: 'Which of the following is NOT a common form of MEV?',
            options: [
              'DEX Arbitrage',
              'Sandwich Attacks',
              'Liquidations',
              'Proof-of-Work Mining Rewards'
            ],
            correctIndex: 3,
            explanation: 'Mining or staking rewards are standard protocol emissions. MEV refers specifically to value extracted via transaction ordering and mempool manipulation.'
          }
        },
        {
          id: 'crypto_6_2',
          title: 'Priority Gas Auctions (PGAs)',
          duration: '25m',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Before Flashbots, bots fought for block space by aggressively bidding up gas fees in the public mempool, causing network congestion and wasted gas on failed trades.',
          drillQuestion: {
            id: 'crypto_6_2_q',
            prompt: 'Why were PGAs detrimental to average Ethereum users?',
            options: [
              'They caused base gas fees to spike network-wide, pricing out retail users',
              'They allowed hackers to steal private keys',
              'They bypassed smart contract logic',
              'They printed unlimited ETH'
            ],
            correctIndex: 0,
            explanation: 'As bots engaged in bidding wars to get their transactions mined first, they clogged network blocks and drove up gas prices for everyone.'
          }
        },
        {
          id: 'crypto_6_3',
          title: 'Flashbots and Private Mempools',
          duration: '30m',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Flashbots introduced off-chain communication where searchers submit private "bundles" directly to miners, mitigating PGAs and shielding users from frontrunning.',
          drillQuestion: {
            id: 'crypto_6_3_q',
            prompt: 'What guarantees does a Flashbots Bundle provide to a searcher?',
            options: [
              'The bundle will always be included in the next block',
              'Transactions in the bundle will execute exactly in the order specified without reverting, or they won\'t be included at all',
              'Zero gas fees are required',
              'The transactions bypass smart contract require() statements'
            ],
            correctIndex: 1,
            explanation: 'Bundles are atomic. If any transaction fails, or if the bundle is outbid, the miner simply drops the entire bundle. The searcher pays nothing for failed attempts.'
          }
        },
        {
          id: 'crypto_6_4',
          title: 'Proposer-Builder Separation (PBS)',
          duration: '35m',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'PBS separates block building (done by specialized, high-resource entities) from block proposing (done by decentralized validators), preventing validator centralization.',
          drillQuestion: {
            id: 'crypto_6_4_q',
            prompt: 'Under PBS via MEV-Boost, what does the validator (Proposer) receive from the Builder?',
            options: [
              'A partial block that the validator must finish',
              'Only a block header and a bid amount; the full block is revealed after signing',
              'Direct access to the builder\'s private keys',
              'A list of raw transactions to execute'
            ],
            correctIndex: 1,
            explanation: 'To prevent the validator from stealing the builder\'s MEV strategy, the builder sends a blind header and a payment. The validator signs the header, committing to it before seeing the contents.'
          }
        },
        {
          id: 'crypto_6_5',
          title: 'Toxic vs. Benign MEV',
          duration: '25m',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Arbitrage and liquidations are "benign" MEV that keep markets efficient, while sandwiching and frontrunning retail is "toxic" MEV that extracts value from users.',
          drillQuestion: {
            id: 'crypto_6_5_q',
            prompt: 'Why is DEX Arbitrage generally considered "benign" MEV?',
            options: [
              'It hurts retail traders directly',
              'It rebalances prices across fragmented liquidity pools, ensuring accurate global pricing',
              'It is sanctioned by the SEC',
              'It requires zero technical skill'
            ],
            correctIndex: 1,
            explanation: 'Arbitrageurs buy low on one DEX and sell high on another, which pushes both pools back into price alignment with the broader market.'
          }
        }
      ]
    },
    {
      id: 'crypto_mod_7',
      code: '6.7',
title: 'NFT Architecture, Digital Ownership & Creator Economy',
      description: 'Beyond JPEGs: understand ERC-721/1155 standards, metadata hosting, royalties, and dynamic non-fungible tokens.',
      lessons: [
        {
          id: 'crypto_7_1',
          title: 'ERC-721 vs ERC-1155 Standards',
          duration: '25m',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'ERC-721 maps unique IDs to single owners. ERC-1155 is a multi-token standard allowing one contract to manage both fungible and non-fungible tokens efficiently.',
          drillQuestion: {
            id: 'crypto_7_1_q',
            prompt: 'What is a major gas-efficiency advantage of ERC-1155 over ERC-721?',
            options: [
              'It uses PoS instead of PoW',
              'It allows batch transfers of multiple token types in a single transaction',
              'It compresses image data natively',
              'It automatically pays royalties'
            ],
            correctIndex: 1,
            explanation: 'ERC-1155 supports safeBatchTransferFrom, allowing a user to send 10 different NFTs or FTs in one transaction, saving massive amounts of gas.'
          }
        },
        {
          id: 'crypto_7_2',
          title: 'Decentralized Metadata & IPFS',
          duration: '30m',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Storing images on Ethereum is cost-prohibitive. NFTs store a URI pointing to JSON metadata usually hosted on IPFS (content addressing) for permanence.',
          drillQuestion: {
            id: 'crypto_7_2_q',
            prompt: 'Why is a centralized server URL (e.g., https://myapi.com/token/1) dangerous for NFT metadata?',
            options: [
              'It makes the image load too slowly',
              'The creator can change the image or the server can go offline, breaking the NFT ("rug pull")',
              'It requires the user to pay gas to view the image',
              'Smart contracts cannot read HTTPS'
            ],
            correctIndex: 1,
            explanation: 'Centralized URIs point to location, not content. If the server goes down, the NFT metadata is lost forever. IPFS points to a permanent content hash.'
          }
        },
        {
          id: 'crypto_7_3',
          title: 'On-Chain Royalties (EIP-2981)',
          duration: '25m',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Royalties were traditionally enforced off-chain by marketplaces. EIP-2981 standardizes royalty info on-chain, though enforcement still relies on marketplace compliance.',
          drillQuestion: {
            id: 'crypto_7_3_q',
            prompt: 'Does EIP-2981 force marketplaces to pay royalties at the protocol level?',
            options: [
              'Yes, it automatically deducts the fee during transfer',
              'No, it only provides a standardized way to query how much the royalty should be',
              'Yes, but only for ERC-1155 tokens',
              'No, it only applies to primary mints'
            ],
            correctIndex: 1,
            explanation: 'EIP-2981 is an information standard (royaltyInfo function). A standard transfer() cannot force a payment; marketplaces must willingly read the standard and execute the payout.'
          }
        },
        {
          id: 'crypto_7_4',
          title: 'Dynamic and Soulbound Tokens',
          duration: '30m',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Dynamic NFTs change state based on external data (via Oracles). Soulbound Tokens (SBTs) are non-transferable NFTs used for identity, credentials, and reputation.',
          drillQuestion: {
            id: 'crypto_7_4_q',
            prompt: 'What makes a token "Soulbound"?',
            options: [
              'It is linked to biometric data',
              'The transfer functions in the smart contract are disabled or revert',
              'It is minted on a zero-knowledge rollup',
              'It burns automatically after a set time'
            ],
            correctIndex: 1,
            explanation: 'An SBT is simply an NFT where the standard transfer and approval functions are overridden to fail, permanently binding it to the minting address.'
          }
        },
        {
          id: 'crypto_7_5',
          title: 'Fractionalization and NFT-Fi',
          duration: '30m',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Financializing NFTs involves locking them in vaults to mint fractional ERC-20 shares, or using them as collateral for peer-to-peer or pool-based lending.',
          drillQuestion: {
            id: 'crypto_7_5_q',
            prompt: 'What is a major challenge in pool-based NFT lending (like BendDAO) compared to token lending?',
            options: [
              'NFTs are fungible',
              'Accurate pricing (Oracle problem) and lack of instant liquidation liquidity for illiquid JPEGs',
              'Smart contracts cannot hold NFTs',
              'High staking yields'
            ],
            correctIndex: 1,
            explanation: 'Unlike ETH or USDC which can be liquidated instantly on an AMM, NFTs are illiquid. If a floor price drops, liquidating an NFT requires an active buyer to step in.'
          }
        }
      ]
    },
    {
      id: 'crypto_mod_8',
      code: '6.8',
title: 'DAO Governance, Treasury Management & On-Chain Voting',
      description: 'Analyze decentralized organizational structures, proposal lifecycles, and cryptographic voting mechanics.',
      lessons: [
        {
          id: 'crypto_8_1',
          title: 'Token-Weighted Voting and Governor Alpha/Bravo',
          duration: '30m',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Compound’s Governor standard dictates the lifecycle of a DAO proposal: from submission, to snapshot, voting delay, execution, and timelocks.',
          drillQuestion: {
            id: 'crypto_8_1_q',
            prompt: 'Why do governance contracts implement a "voting delay" between proposal creation and voting start?',
            options: [
              'To reduce gas fees',
              'To allow users time to buy tokens or delegate votes before the block snapshot is taken',
              'To compile the code',
              'To wait for regulatory approval'
            ],
            correctIndex: 1,
            explanation: 'The delay gives the community time to review the proposal, move funds from cold storage, or delegate their voting power before the precise block where voting power is calculated.'
          }
        },
        {
          id: 'crypto_8_2',
          title: 'The Sybil Attack and Quadratic Voting',
          duration: '35m',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: '1-token-1-vote leads to plutocracy (whale dominance). Quadratic voting takes the square root of votes, amplifying the voice of the majority, but requires robust anti-Sybil identity checks.',
          formula: 'Cost of N votes = N^2 tokens',
          drillQuestion: {
            id: 'crypto_8_2_q',
            prompt: 'Why does pure Quadratic Voting fail in permissionless, anonymous networks?',
            options: [
              'Math functions are too expensive in Solidity',
              'A whale can split their tokens across thousands of anonymous wallets (Sybil attack) to bypass the quadratic penalty',
              'Voters don\'t understand square roots',
              'It requires proof-of-work'
            ],
            correctIndex: 1,
            explanation: 'Because QV makes marginal votes more expensive, a whale is incentivized to split their capital into many small wallets to get the cheapest votes. QV requires verified unique human identities (Proof of Personhood).'
          }
        },
        {
          id: 'crypto_8_3',
          title: 'Delegation and Liquid Democracy',
          duration: '25m',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Liquid democracy allows users to vote directly or delegate their voting power to trusted experts (delegates), improving voter participation rates.',
          drillQuestion: {
            id: 'crypto_8_3_q',
            prompt: 'In on-chain delegation, does the delegate receive custody of the user\'s tokens?',
            options: [
              'Yes, tokens are transferred to the delegate',
              'No, only the voting power associated with the tokens is assigned to the delegate',
              'Yes, but locked in a multisig',
              'No, delegates are paid in stablecoins'
            ],
            correctIndex: 1,
            explanation: 'Delegation separates economic ownership from governance power. The user retains full custody and can sell or undelegate at any time.'
          }
        },
        {
          id: 'crypto_8_4',
          title: 'DAO Treasury Management Strategies',
          duration: '30m',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'A DAO treasury holding 100% of its native token is highly vulnerable to market downturns. Effective management requires diversification into stablecoins and blue chips.',
          drillQuestion: {
            id: 'crypto_8_4_q',
            prompt: 'What is a major risk of funding operations solely through native token emissions?',
            options: [
              'Increased transaction throughput',
              'A reflexive death spiral if token price drops, requiring more emissions to cover fixed fiat costs, further crashing the price',
              'Getting blacklisted by centralized exchanges',
              'Accidental network forks'
            ],
            correctIndex: 1,
            explanation: 'If a DAO pays contributors in a falling native token, contributors sell to cover living expenses, driving the price down, forcing the DAO to emit even more tokens next month.'
          }
        },
        {
          id: 'crypto_8_5',
          title: 'Off-Chain Voting (Snapshot) vs On-Chain Execution',
          duration: '25m',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Due to gas costs, many DAOs vote off-chain via cryptographic signatures (Snapshot) and use a multi-sig (Safe) to execute the community’s will on-chain.',
          drillQuestion: {
            id: 'crypto_8_5_q',
            prompt: 'What is the primary trust assumption in the Snapshot + Multisig governance model?',
            options: [
              'That miners will include the transactions',
              'That the multisig signers will faithfully execute the results of the off-chain vote',
              'That Snapshot\'s servers are decentralized',
              'That gas fees remain low'
            ],
            correctIndex: 1,
            explanation: 'Because the vote happens off-chain, there is no trustless cryptographic link enforcing the result. The community must trust the multi-sig committee to act honestly.'
          }
        }
      ]
    },
    {
      id: 'crypto_mod_9',
      code: '6.9',
title: 'Cross-Chain Bridges, Interoperability & Cosmos/Polkadot',
      description: 'Explore the fragmented multi-chain universe, bridge architectures, security trade-offs, and AppChain theses.',
      lessons: [
        {
          id: 'crypto_9_1',
          title: 'The Interoperability Trilemma',
          duration: '30m',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Cross-chain protocols must trade off between Trustlessness, Extensibility (supporting many chains), and Generalizability (handling arbitrary data).',
          drillQuestion: {
            id: 'crypto_9_1_q',
            prompt: 'Why are cross-chain bridges the most frequently hacked infrastructure in Web3?',
            options: [
              'They hold massive honeypots of locked liquidity and rely on complex off-chain validator sets or multi-sigs',
              'They use outdated encryption standards',
              'They are mostly built on Bitcoin',
              'They have low TVL'
            ],
            correctIndex: 0,
            explanation: 'To wrap assets on Chain B, the native assets must be locked in a contract on Chain A. These massive liquidity pools, combined with the complexity of consensus between two different chains, create huge attack vectors.'
          }
        },
        {
          id: 'crypto_9_2',
          title: 'Lock-and-Mint vs Liquidity Networks',
          duration: '25m',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Lock-and-mint bridges create wrapped derivative tokens. Liquidity networks (like Stargate) use native asset pools on both chains to avoid wrapped token fragmentation.',
          drillQuestion: {
            id: 'crypto_9_2_q',
            prompt: 'What is a drawback of using a Liquidity Network bridge for bridging large amounts?',
            options: [
              'You receive a fake token',
              'The transaction might fail or suffer high slippage if the destination pool lacks sufficient liquidity',
              'It requires waiting 7 days',
              'It only works for NFTs'
            ],
            correctIndex: 1,
            explanation: 'Because you are swapping native-for-native rather than minting new wrapped tokens, the transfer is constrained by the actual balance of the liquidity pool on the destination chain.'
          }
        },
        {
          id: 'crypto_9_3',
          title: 'Cosmos IBC & AppChains',
          duration: '35m',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Cosmos envisions an internet of sovereign application-specific blockchains that communicate trustlessly via the Inter-Blockchain Communication (IBC) protocol.',
          drillQuestion: {
            id: 'crypto_9_3_q',
            prompt: 'How does Cosmos IBC achieve trustless communication between chains?',
            options: [
              'By routing all transactions through Ethereum',
              'Via a centralized trusted relayer',
              'Through light clients of each chain embedded in the other, allowing them to cryptographically verify state proofs',
              'By merging the consensus layers of both chains'
            ],
            correctIndex: 2,
            explanation: 'Chain A runs a light client of Chain B (and vice versa). When a relayer passes a message, Chain A can independently verify the Merkle proof against Chain B\'s consensus state.'
          }
        },
        {
          id: 'crypto_9_4',
          title: 'Polkadot Architecture (Relay & Parachains)',
          duration: '30m',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Polkadot provides shared security, where individual Parachains inherit the consensus security of the central Relay Chain via slot auctions.',
          drillQuestion: {
            id: 'crypto_9_4_q',
            prompt: 'What is the primary difference in security models between Cosmos AppChains and Polkadot Parachains?',
            options: [
              'Cosmos uses PoW, Polkadot uses PoS',
              'Cosmos chains are sovereign and bootstrap their own validator sets; Polkadot Parachains share the security of the Relay Chain',
              'Cosmos chains share a single sequencer',
              'Polkadot chains rely on Optimistic rollups'
            ],
            correctIndex: 1,
            explanation: 'In Cosmos, each chain is fully sovereign and responsible for its own economic security. In Polkadot, parachains focus on execution while the Relay Chain handles global consensus.'
          }
        },
        {
          id: 'crypto_9_5',
          title: 'Zero-Knowledge Bridges (zkBridges)',
          duration: '30m',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'zkBridges replace trusted validator multisigs with zk-SNARKs, allowing the destination chain to mathematically verify the state of the source chain.',
          drillQuestion: {
            id: 'crypto_9_5_q',
            prompt: 'Why are zkBridges considered a breakthrough in cross-chain security?',
            options: [
              'They remove the need for a trusted third party or economic assumptions by relying purely on cryptographic math',
              'They execute in under 1 millisecond',
              'They have zero gas fees',
              'They prevent smart contract bugs'
            ],
            correctIndex: 0,
            explanation: 'Instead of trusting 5 out of 9 validators to not collude, a zkBridge submits a mathematical proof that cannot be faked, completely removing human trust vectors.'
          }
        }
      ]
    },
    {
      id: 'crypto_mod_10',
      code: '6.10',
title: 'Crypto Tax, Legal Compliance & Regulatory Landscape',
      description: 'Navigate the complex legal frameworks surrounding crypto assets, DeFi jurisdiction, and on-chain compliance.',
      lessons: [
        {
          id: 'crypto_10_1',
          title: 'The Howey Test and Security Classification',
          duration: '25m',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'In the US, tokens are often analyzed under the Howey Test to determine if they are "investment contracts" (securities) subject to SEC regulation.',
          drillQuestion: {
            id: 'crypto_10_1_q',
            prompt: 'Which of the following is a key prong of the Howey Test?',
            options: [
              'Investment of money in a common enterprise with the expectation of profit derived from the efforts of others',
              'Whether the asset uses cryptography',
              'Whether the token is listed on a centralized exchange',
              'Whether the network uses Proof of Stake'
            ],
            correctIndex: 0,
            explanation: 'The Supreme Court defined an investment contract as an investment of money, in a common enterprise, with a reasonable expectation of profits derived from the entrepreneurial or managerial efforts of others.'
          }
        },
        {
          id: 'crypto_10_2',
          title: 'DeFi Jurisdiction and Decentralization',
          duration: '30m',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'True decentralization can theoretically shield a protocol from traditional corporate regulation, but administrative keys or frontend control often act as regulatory choke points.',
          drillQuestion: {
            id: 'crypto_10_2_q',
            prompt: 'Why did the CFTC bring charges against Ooki DAO?',
            options: [
              'For hacking a competitor',
              'Asserting that voting token holders in a DAO constitute an unincorporated association liable for the protocol\'s legal violations',
              'For launching a memecoin',
              'For avoiding gas fees'
            ],
            correctIndex: 1,
            explanation: 'The landmark Ooki DAO case established a precedent that regulators might treat DAOs as general partnerships, making participating governance voters potentially liable for the DAO\'s illegal activities.'
          }
        },
        {
          id: 'crypto_10_3',
          title: 'AML, KYC, and Sanctions (OFAC)',
          duration: '25m',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'The US Treasury (OFAC) can sanction specific smart contract addresses (e.g., Tornado Cash), making it a federal crime for US persons to interact with them.',
          drillQuestion: {
            id: 'crypto_10_3_q',
            prompt: 'What was unprecedented about the OFAC sanctions against Tornado Cash?',
            options: [
              'It was the first time OFAC sanctioned an open-source, autonomous smart contract rather than a specific person or entity',
              'It resulted in the shutdown of the Ethereum network',
              'It banned all stablecoins',
              'It was enforced by the United Nations'
            ],
            correctIndex: 0,
            explanation: 'Historically, sanctions targeted individuals, companies, or countries. Sanctioning immutable code created massive legal controversy regarding free speech and enforcement in decentralized systems.'
          }
        },
        {
          id: 'crypto_10_4',
          title: 'Crypto Taxation: Capital Gains & Income',
          duration: '30m',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'In most jurisdictions, trading one crypto for another triggers a taxable capital gains event, while staking rewards and airdrops are taxed as ordinary income upon receipt.',
          drillQuestion: {
            id: 'crypto_10_4_q',
            prompt: 'If you trade ETH for a new DeFi token on Uniswap, how is it typically treated for US tax purposes?',
            options: [
              'It is a non-taxable like-kind exchange',
              'It is a taxable event where capital gains/losses on the ETH must be recognized',
              'It is only taxed when converted to fiat (USD)',
              'It is tax-exempt because it occurred on a DEX'
            ],
            correctIndex: 1,
            explanation: 'Crypto-to-crypto trades are viewed as selling the first asset (ETH) for its fair market value in USD, and using that USD to buy the second asset, triggering a capital gains event on the ETH.'
          }
        },
        {
          id: 'crypto_10_5',
          title: 'MiCA Framework (European Union)',
          duration: '25m',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'MiCA provides a comprehensive, unified regulatory framework for crypto-assets across the EU, focusing heavily on stablecoin reserves and consumer protection.',
          drillQuestion: {
            id: 'crypto_10_5_q',
            prompt: 'Under MiCA, what are the strict requirements imposed on "Asset-Referenced Tokens" (Stablecoins)?',
            options: [
              'They must use algorithmic pegs instead of fiat backing',
              'They must maintain a 1:1 reserve of high-quality liquid assets, and issuers are subject to strict prudential supervision',
              'They must be minted by the European Central Bank',
              'They cannot be used for decentralized finance'
            ],
            correctIndex: 1,
            explanation: 'To prevent Luna-style collapses, MiCA requires stablecoin issuers to hold highly regulated, auditable reserves and comply with strict capital and governance requirements.'
          }
        }
      ]
    }
  ]
};




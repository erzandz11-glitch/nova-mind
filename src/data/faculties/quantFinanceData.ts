import { FrontierFaculty, FrontierFacultyLesson, QuizQuestion } from '../../types';

export const QUANT_FINANCE_FACULTY: FrontierFaculty = {
  id: 'quant_macro_finance',
  name: 'Faculty of Stocks & Quantitative Macro Finance',
  shortTitle: 'Stocks & Quant',
  iconName: 'TrendingUp',
  emoji: '📈',
  themeColor: 'sky',
  accentHex: '#0ea5e9',
  glowClass: 'shadow-[0_0_35px_rgba(14,165,233,0.25)]',
  borderClass: 'border-sky-500/30 hover:border-sky-400/60',
  bgLightClass: 'bg-sky-500/10 text-sky-400',
  badgeClass: 'bg-sky-500/10 text-sky-300 border border-sky-500/30',
  headline: 'Quantitative Order Flow, Derivatives Greeks & Macro Volatility Arbitrage',
  difficulty: 'Hardcore Tactical',
  description: 'Master quantitative finance, macroeconomic cycles, options derivatives, and algorithmic trading strategies.',
  simulatorName: 'Quantitative Order Book & Portfolio Sandbox',
  simulatorTag: 'Live Market Mechanics Engine',
  estimatedHours: 110,
  totalXp: 3300,
  completionPercent: 0,
  drillNodes: [],
  modules: [
    {
      id: 'qm_mod_1',
      code: '5.1',
title: 'Macro Liquidity Cycles, Fed Policy & Yield Curves',
      description: 'Understand how global central banks dictate liquidity and influence broad asset class returns.',
      lessons: [
        {
          id: 'qm_m1_l1',
          title: 'The Federal Reserve and Global Liquidity',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'The Federal Reserve controls the money supply and interest rates, acting as the primary driver of global financial liquidity and risk appetite.',
          drillQuestion: {
            id: 'qm_m1_l1_q1',
            prompt: 'Which mechanism does the Federal Reserve use most directly to influence short-term interest rates?',
            options: [
              'Changing the corporate tax rate',
              'Open Market Operations (buying/selling government securities)',
              'Issuing new treasury bonds',
              'Modifying the debt ceiling'
            ],
            correctIndex: 1,
            explanation: 'Open Market Operations allow the Fed to control the federal funds rate by adjusting the supply of reserve balances in the banking system.'
          }
        },
        {
          id: 'qm_m1_l2',
          title: 'Yield Curve Inversions and Economic Recessions',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'An inverted yield curve, where short-term rates exceed long-term rates, historically precedes economic recessions by signaling restrictive monetary policy.',
          drillQuestion: {
            id: 'qm_m1_l2_q1',
            prompt: 'What does a traditional 2s10s yield curve inversion signify?',
            options: [
              'The 2-year Treasury yield is lower than the 10-year Treasury yield',
              'The 10-year Treasury yield is higher than inflation',
              'The 2-year Treasury yield is higher than the 10-year Treasury yield',
              'Both yields are exactly equal'
            ],
            correctIndex: 2,
            explanation: 'A 2s10s inversion occurs when the yield on the 2-year Treasury note rises above the yield on the 10-year Treasury note, often signaling impending economic contraction.'
          }
        },
        {
          id: 'qm_m1_l3',
          title: 'Quantitative Easing and Tightening',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'QE expands a central bank\'s balance sheet to lower long-term rates and spur investment, whereas QT shrinks the balance sheet to cool an overheating economy.',
          drillQuestion: {
            id: 'qm_m1_l3_q1',
            prompt: 'How does Quantitative Tightening (QT) typically impact financial markets?',
            options: [
              'It injects liquidity, usually boosting stock prices',
              'It removes liquidity, often leading to lower asset valuations and higher volatility',
              'It lowers interest rates across the curve',
              'It forces banks to lower their lending standards'
            ],
            correctIndex: 1,
            explanation: 'QT reduces the money supply and increases borrowing costs, which generally acts as a headwind for asset valuations and increases market volatility.'
          }
        },
        {
          id: 'qm_m1_l4',
          title: 'Inflation Dynamics and Interest Rates',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Persistent inflation forces central banks to hike interest rates, thereby increasing the discount rate applied to future corporate cash flows and lowering equity valuations.',
          formula: 'Real Interest Rate = Nominal Interest Rate - Inflation Rate (Fisher Equation)',
          drillQuestion: {
            id: 'qm_m1_l4_q1',
            prompt: 'According to the Fisher Equation, if the nominal interest rate is 5% and inflation is 3%, what is the real interest rate?',
            options: ['8%', '2%', '15%', '-2%'],
            correctIndex: 1,
            explanation: 'The real interest rate is the nominal rate minus inflation (5% - 3% = 2%), representing the true increase in purchasing power.'
          }
        },
        {
          id: 'qm_m1_l5',
          title: 'Macro Regimes and Asset Class Performance',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Different macro regimes (e.g., reflation, stagflation, deflation) favor specific asset classes; understanding the current regime is critical for asset allocation.',
          drillQuestion: {
            id: 'qm_m1_l5_q1',
            prompt: 'Which asset class typically performs best during a "Stagflation" regime (low growth, high inflation)?',
            options: [
              'High-growth technology equities',
              'Long-duration government bonds',
              'Commodities and inflation-linked bonds (TIPS)',
              'High-yield corporate debt'
            ],
            correctIndex: 2,
            explanation: 'During stagflation, tangible assets like commodities and inflation-protected securities outperform, while equities and nominal bonds suffer due to high inflation and low growth.'
          }
        }
      ]
    },
    {
      id: 'qm_mod_2',
      code: '5.2',
title: 'Institutional Order Flow & Volatility Arbitrage',
      description: 'Decode market microstructure and learn how institutional players move liquidity and hedge volatility.',
      lessons: [
        {
          id: 'qm_m2_l1',
          title: 'Market Microstructure and Order Types',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Market structure is dictated by the interaction of limit orders (providing liquidity) and market orders (consuming liquidity) within the limit order book.',
          drillQuestion: {
            id: 'qm_m2_l1_q1',
            prompt: 'What happens when a large market buy order is submitted to an illiquid order book?',
            options: [
              'The order is immediately cancelled',
              'It clears the resting limit sell orders at multiple price levels, causing "slippage"',
              'It creates a massive limit wall',
              'It converts into a dark pool transaction'
            ],
            correctIndex: 1,
            explanation: 'A large market order will "sweep the book," consuming available liquidity at worsening prices, resulting in slippage.'
          }
        },
        {
          id: 'qm_m2_l2',
          title: 'Reading the Tape and Level 2 Data',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Level 2 data reveals market depth by showing resting bids and asks, allowing traders to spot spoofing and institutional accumulation zones.',
          drillQuestion: {
            id: 'qm_m2_l2_q1',
            prompt: 'What does "spoofing" refer to in the context of the order book?',
            options: [
              'Placing large limit orders with the intent to cancel them before execution to manipulate price',
              'Executing trades on dark pools to hide volume',
              'Buying and selling the exact same asset simultaneously',
              'Hacking the exchange to view hidden orders'
            ],
            correctIndex: 0,
            explanation: 'Spoofing is an illegal manipulative practice where fake orders are placed to create a false impression of supply or demand, tricking algorithms and other traders.'
          }
        },
        {
          id: 'qm_m2_l3',
          title: 'Dark Pools and Institutional Block Trades',
          duration: '20 min',
          durationSeconds: 1200,
          completed: false,
          keyTakeaway: 'Institutions use dark pools for large block trades to prevent market impact and hide their intentions from high-frequency traders.',
          drillQuestion: {
            id: 'qm_m2_l3_q1',
            prompt: 'Why do large institutions prefer executing block trades in dark pools?',
            options: [
              'To avoid paying capital gains taxes',
              'To minimize market impact and price slippage before the trade is complete',
              'Because dark pools guarantee higher execution prices',
              'To bypass SEC regulatory filings permanently'
            ],
            correctIndex: 1,
            explanation: 'Dark pools lack pre-trade transparency, allowing institutions to execute massive orders without alerting the broader market and causing the price to move against them.'
          }
        },
        {
          id: 'qm_m2_l4',
          title: 'Volatility Arbitrage Foundations',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Volatility arbitrage involves trading the difference between implied volatility (options pricing) and the subsequently realized historical volatility of the underlying asset.',
          drillQuestion: {
            id: 'qm_m2_l4_q1',
            prompt: 'In a delta-neutral volatility arbitrage strategy, when does the trader profit?',
            options: [
              'Only when the stock price goes up',
              'When the discrepancy between implied and realized volatility resolves favorably',
              'When the stock pays a large dividend',
              'Only when interest rates fall'
            ],
            correctIndex: 1,
            explanation: 'Vol arb strategies hedge out directional price risk (delta) to isolate and capture the spread between what the market expects volatility to be (implied) and what it actually is (realized).'
          }
        },
        {
          id: 'qm_m2_l5',
          title: 'Statistical Arbitrage and Pairs Trading',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Pairs trading is a mean-reversion strategy that takes a long position in an undervalued asset and a short position in an overvalued, historically correlated asset.',
          formula: 'Z-Score = (Spread - Mean Spread) / Standard Deviation of Spread',
          drillQuestion: {
            id: 'qm_m2_l5_q1',
            prompt: 'In a pairs trade between Pepsi and Coca-Cola, if the price spread diverges beyond 2 standard deviations from its historical mean, what is the typical action?',
            options: [
              'Buy both stocks',
              'Short both stocks',
              'Short the outperforming stock and buy the underperforming stock',
              'Wait for a 5 standard deviation divergence'
            ],
            correctIndex: 2,
            explanation: 'The strategy assumes the spread will revert to the mean. You short the relatively expensive asset and long the relatively cheap one to capture the convergence.'
          }
        }
      ]
    },
    {
      id: 'qm_mod_3',
      code: '5.3',
title: 'Balance Sheet Forensics & Value Investing',
      description: 'Tear down financial statements to find the true intrinsic value and spot accounting red flags.',
      lessons: [
        {
          id: 'qm_m3_l1',
          title: 'Advanced Income Statement Analysis',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Reported earnings (EPS) can be easily manipulated; discerning investors focus on operating margins, revenue quality, and recurring vs. one-time items.',
          drillQuestion: {
            id: 'qm_m3_l1_q1',
            prompt: 'Why might an analyst strip out "one-time restructuring charges" when calculating a company\'s true earnings power?',
            options: [
              'To deliberately inflate the stock price',
              'Because they are usually non-cash and non-recurring, obscuring the core operational profitability',
              'To reduce tax liabilities for the company',
              'Because restructuring charges are illegal'
            ],
            correctIndex: 1,
            explanation: 'One-time charges do not reflect the ongoing, sustainable business operations, so adjusting for them provides a clearer picture of normal profitability.'
          }
        },
        {
          id: 'qm_m3_l2',
          title: 'Balance Sheet Forensics and Hidden Liabilities',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Off-balance-sheet entities, capitalized expenses, and bloated goodwill are common red flags signaling potential balance sheet vulnerability.',
          drillQuestion: {
            id: 'qm_m3_l2_q1',
            prompt: 'What is the danger of a company capitalizing expenses rather than recognizing them immediately on the income statement?',
            options: [
              'It artificially increases short-term liabilities',
              'It artificially inflates current period earnings and inflates asset values',
              'It causes an immediate drop in free cash flow',
              'It instantly triggers a margin call'
            ],
            correctIndex: 1,
            explanation: 'Capitalizing an expense turns an immediate cost into a long-term asset, which falsely boosts current net income and equity.'
          }
        },
        {
          id: 'qm_m3_l3',
          title: 'Cash Flow Manipulation Tactics',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Operating Cash Flow (OCF) is harder to fake than Net Income, but tactics like delaying payables or factoring receivables can artificially inflate short-term OCF.',
          drillQuestion: {
            id: 'qm_m3_l3_q1',
            prompt: 'How can a company temporarily boost its Operating Cash Flow without selling more products?',
            options: [
              'By paying suppliers much faster than usual',
              'By delaying payments to suppliers (stretching accounts payable)',
              'By buying back its own stock',
              'By paying out a special dividend'
            ],
            correctIndex: 1,
            explanation: 'Stretching payables keeps cash on the balance sheet longer, temporarily boosting OCF for that period, though it must eventually be paid.'
          }
        },
        {
          id: 'qm_m3_l4',
          title: 'Intrinsic Value and DCF Modeling',
          duration: '40 min',
          durationSeconds: 2400,
          completed: false,
          keyTakeaway: 'A Discounted Cash Flow (DCF) model estimates intrinsic value by projecting future free cash flows and discounting them back to present value using the WACC.',
          formula: 'DCF = sum( FCF_t / (1 + r)^t ) + Terminal Value / (1 + r)^n',
          drillQuestion: {
            id: 'qm_m3_l4_q1',
            prompt: 'What happens to the estimated intrinsic value in a DCF model if the discount rate (r) increases significantly?',
            options: [
              'The intrinsic value increases',
              'The intrinsic value stays exactly the same',
              'The intrinsic value decreases',
              'The terminal value becomes negative'
            ],
            correctIndex: 2,
            explanation: 'A higher discount rate implies higher risk or higher opportunity cost, meaning future cash flows are worth less today, driving the intrinsic value down.'
          }
        },
        {
          id: 'qm_m3_l5',
          title: 'Relative Valuation and Multiples',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Relative valuation compares a company to peers using multiples like EV/EBITDA, which normalizes capital structure differences better than P/E ratios.',
          drillQuestion: {
            id: 'qm_m3_l5_q1',
            prompt: 'Why is EV/EBITDA often preferred over the P/E ratio when comparing companies with different levels of debt?',
            options: [
              'EV/EBITDA ignores the cost of goods sold',
              'Enterprise Value (EV) includes debt, and EBITDA is before interest expenses, making it capital structure neutral',
              'P/E ratios are only used for private companies',
              'EV/EBITDA factors in the company’s dividend yield directly'
            ],
            correctIndex: 1,
            explanation: 'EV/EBITDA accounts for the entire value of the firm (debt + equity) and measures profitability before interest, allowing for apples-to-apples comparisons regardless of leverage.'
          }
        }
      ]
    },
    {
      id: 'qm_mod_4',
      code: '5.4',
title: 'Technical Analysis: Price Action, Volume Profile & Market Structure',
      description: 'Master chart reading by combining pure price action with volume-at-price metrics to find high-probability trade setups.',
      lessons: [
        {
          id: 'qm_m4_l1',
          title: 'Advanced Price Action and Candlestick Psychology',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Price action strips away lagging indicators; candlestick wicks and closes reveal the real-time emotional battle between buyers and sellers.',
          drillQuestion: {
            id: 'qm_m4_l1_q1',
            prompt: 'What does a long upper wick on a candlestick following a strong uptrend typically indicate?',
            options: [
              'Strong continuation of buying pressure',
              'A potential reversal, as buyers pushed price up but sellers aggressively rejected it',
              'Zero volatility in the market',
              'A liquidity void that must be filled instantly'
            ],
            correctIndex: 1,
            explanation: 'A long upper wick shows rejection of higher prices; buyers exhausted their momentum, and sellers took control to close the price lower, signaling potential reversal.'
          }
        },
        {
          id: 'qm_m4_l2',
          title: 'Market Structure and Trend Analysis',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'A bullish market structure consists of Higher Highs (HH) and Higher Lows (HL). A trend change is signaled by a Break of Structure (BoS).',
          drillQuestion: {
            id: 'qm_m4_l2_q1',
            prompt: 'In a confirmed downtrend, what specific event signals a potential reversal to an uptrend?',
            options: [
              'Creating a Lower High',
              'Creating a Lower Low',
              'A break above the previous Lower High, creating a Higher High',
              'The price touching a moving average'
            ],
            correctIndex: 2,
            explanation: 'Breaking above the most recent structural Lower High invalidates the downtrend mechanics, creating a Higher High and signaling a shift in market structure.'
          }
        },
        {
          id: 'qm_m4_l3',
          title: 'Volume Profile and Value Areas',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Unlike traditional volume (volume-at-time), Volume Profile shows volume-at-price, highlighting the Point of Control (POC) and High Volume Nodes (HVN) as massive support/resistance.',
          drillQuestion: {
            id: 'qm_m4_l3_q1',
            prompt: 'What does the Point of Control (POC) represent on a Volume Profile chart?',
            options: [
              'The exact time of day with the highest trading volume',
              'The price level where the most volume was traded for the given period',
              'The moving average of volume over 20 days',
              'The highest price reached during the session'
            ],
            correctIndex: 1,
            explanation: 'The POC is the specific price level that saw the heaviest trading volume, acting as an anchor of fair value and a strong magnet for price.'
          }
        },
        {
          id: 'qm_m4_l4',
          title: 'Liquidity Grabs and Fair Value Gaps',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Institutions hunt retail stop-loss orders (liquidity pools) above old highs/lows. Fair Value Gaps (FVGs) act as magnets for price to balance algorithmic inefficiencies.',
          drillQuestion: {
            id: 'qm_m4_l4_q1',
            prompt: 'Why does price often aggressively reverse after briefly sweeping above a major previous high?',
            options: [
              'Because algorithms automatically buy new highs',
              'Because the breakout is fundamentally supported',
              'Because institutions use the buy-stop liquidity (retail stop-losses/breakout buys) to fill their massive short positions',
              'Because options expire at those levels'
            ],
            correctIndex: 2,
            explanation: 'This is a "liquidity grab." Institutions need massive counter-party liquidity to fill large orders, which they find where retail traders place their stops or breakout entries.'
          }
        },
        {
          id: 'qm_m4_l5',
          title: 'Moving Averages and Momentum Oscillators',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Moving averages define dynamic trend, while oscillators (RSI, MACD) measure momentum. Divergence between price and momentum often signals exhaustion.',
          drillQuestion: {
            id: 'qm_m4_l5_q1',
            prompt: 'What constitutes "Bearish Divergence" using the RSI oscillator?',
            options: [
              'Price makes a higher high, but the RSI makes a lower high',
              'Price makes a lower low, and the RSI makes a lower low',
              'Price makes a lower low, but the RSI makes a higher low',
              'Both price and RSI remain completely flat'
            ],
            correctIndex: 0,
            explanation: 'Bearish divergence occurs when price pushes to new highs, but momentum (RSI) fails to confirm it by making lower highs, indicating weakening buying power.'
          }
        },
        {
          id: 'qm_m4_l6',
          title: 'Multi-Timeframe Analysis Integration',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'High timeframe (HTF) context dictates the narrative and major levels; lower timeframes (LTF) are used strictly for precision entries to maximize risk-to-reward.',
          drillQuestion: {
            id: 'qm_m4_l6_q1',
            prompt: 'In Top-Down analysis, how should a trader utilize the Weekly chart versus the 15-Minute chart?',
            options: [
              'Trade exclusively on the Weekly chart',
              'Use the Weekly to establish the major trend and key levels, and the 15-Minute for precise trade execution',
              'Ignore the Weekly chart completely',
              'Use the 15-Minute chart to determine macro market structure'
            ],
            correctIndex: 1,
            explanation: 'Top-down analysis ensures you trade in the direction of the dominant HTF trend while using LTF price action to pinpoint low-risk entry triggers.'
          }
        }
      ]
    },
    {
      id: 'qm_mod_5',
      code: '5.5',
title: 'Options, Derivatives & Greeks Mastery',
      description: 'Go beyond stock buying and learn to mathematically define risk and exploit volatility using options.',
      lessons: [
        {
          id: 'qm_m5_l1',
          title: 'Options Basics: Calls, Puts, and Payoffs',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'A call option gives the right to buy; a put option gives the right to sell. Buying options has defined risk, while selling naked options has unlimited risk.',
          drillQuestion: {
            id: 'qm_m5_l1_q1',
            prompt: 'What is the maximum potential loss when buying a long Call option?',
            options: [
              'Unlimited',
              'The strike price minus the underlying price',
              'The initial premium paid for the option',
              'Zero'
            ],
            correctIndex: 2,
            explanation: 'When buying options, the risk is strictly limited to the upfront premium paid to acquire the contract.'
          }
        },
        {
          id: 'qm_m5_l2',
          title: 'The Greeks: Delta and Gamma',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Delta measures directional exposure (price sensitivity). Gamma measures the rate of change of Delta, making near-the-money, near-expiration options explosive.',
          drillQuestion: {
            id: 'qm_m5_l2_q1',
            prompt: 'If an option has a Delta of 0.50 and the underlying stock rises by $1, approximately how much will the option price increase?',
            options: ['$1.00', '$0.50', '$0.10', 'It will decrease by $0.50'],
            correctIndex: 1,
            explanation: 'Delta represents the expected change in option price for a $1 move in the underlying asset. A 0.50 delta means a $0.50 increase.'
          }
        },
        {
          id: 'qm_m5_l3',
          title: 'The Greeks: Theta, Vega, and Rho',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Theta dictates time decay (bad for buyers, good for sellers), while Vega dictates sensitivity to implied volatility changes.',
          drillQuestion: {
            id: 'qm_m5_l3_q1',
            prompt: 'How does Theta decay behave as an at-the-money (ATM) option approaches its expiration date?',
            options: [
              'Theta decay slows down and becomes zero',
              'Theta decay remains perfectly linear',
              'Theta decay accelerates rapidly',
              'Theta turns into Gamma'
            ],
            correctIndex: 2,
            explanation: 'Time decay is non-linear; the erosion of an option\'s extrinsic value accelerates significantly in the final weeks and days before expiration.'
          }
        },
        {
          id: 'qm_m5_l4',
          title: 'Implied Volatility and the Volatility Smile',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Implied Volatility (IV) is the market\'s expectation of future price movement. Buying options when IV is low and selling when IV is high is a core edge.',
          drillQuestion: {
            id: 'qm_m5_l4_q1',
            prompt: 'What phenomenon does the "Volatility Smile" describe?',
            options: [
              'Options traders being happy on expiration Friday',
              'Implied volatility being perfectly equal across all strike prices',
              'Out-of-the-money (OTM) options having higher implied volatilities than at-the-money (ATM) options',
              'Call options always having higher IV than put options'
            ],
            correctIndex: 2,
            explanation: 'The smile/smirk shows that the market prices tail risks (extreme moves) higher than normal distribution models suggest, causing OTM strikes to trade at higher IVs.'
          }
        },
        {
          id: 'qm_m5_l5',
          title: 'Vertical Spreads and Iron Condors',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Spreads involve buying and selling options simultaneously to cap risk and reduce capital requirements, sacrificing maximum potential profit for higher probability.',
          drillQuestion: {
            id: 'qm_m5_l5_q1',
            prompt: 'An Iron Condor is designed to be profitable in what type of market environment?',
            options: [
              'A rapidly rising bull market',
              'A rapidly crashing bear market',
              'A range-bound, sideways market with decreasing volatility',
              'A market experiencing massive gap-ups'
            ],
            correctIndex: 2,
            explanation: 'An Iron Condor sells both an OTM call spread and an OTM put spread; it achieves maximum profit when the underlying asset stays between the short strikes through expiration.'
          }
        },
        {
          id: 'qm_m5_l6',
          title: 'Advanced Options Strategies: Straddles and Strangles',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Long straddles and strangles are pure volatility plays: they profit from massive explosive moves in either direction, bypassing directional risk entirely.',
          drillQuestion: {
            id: 'qm_m5_l6_q1',
            prompt: 'What constitutes a Long Straddle?',
            options: [
              'Selling a Call and a Put at the same strike and expiration',
              'Buying a Call and a Put at the same strike and expiration',
              'Buying a Call and selling a Put at different strikes',
              'Buying the underlying stock and a Put option'
            ],
            correctIndex: 1,
            explanation: 'A long straddle buys both an ATM call and ATM put. It needs the underlying to move significantly past the break-even points (up or down) to offset the high premium paid.'
          }
        }
      ]
    },
    {
      id: 'qm_mod_6',
      code: '5.6',
title: 'Algorithmic Trading: Python, Backtest & Strategy Deployment',
      description: 'Remove human emotion by writing code that tests, validates, and executes quantitative trading rules.',
      lessons: [
        {
          id: 'qm_m6_l1',
          title: 'Pandas for Financial Data Analysis',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Pandas is the foundation of quant analysis in Python, allowing rapid manipulation of time-series financial data.',
          codeSnippet: `import pandas as pd\nimport yfinance as yf\n\n# Download historical data\ndf = yf.download('SPY', start='2020-01-01', end='2023-01-01')\n# Calculate daily returns\ndf['Daily_Return'] = df['Close'].pct_change()\n# Calculate 20-day rolling volatility\ndf['Volatility_20d'] = df['Daily_Return'].rolling(window=20).std() * (252**0.5)`,
          drillQuestion: {
            id: 'qm_m6_l1_q1',
            prompt: 'In the provided Python code, what is the purpose of multiplying by `(252**0.5)`?',
            options: [
              'To convert daily volatility to annualized volatility (assuming 252 trading days)',
              'To account for leap years',
              'To smooth the moving average',
              'To calculate the compounded return over 252 days'
            ],
            correctIndex: 0,
            explanation: 'Volatility scales with the square root of time. Since there are roughly 252 trading days in a year, multiplying daily standard deviation by sqrt(252) annualizes it.'
          }
        },
        {
          id: 'qm_m6_l2',
          title: 'Building a Moving Average Crossover Strategy',
          duration: '40 min',
          durationSeconds: 2400,
          completed: false,
          keyTakeaway: 'A moving average crossover is a classic algorithmic trend-following strategy, easily implemented by vectorizing signal logic.',
          codeSnippet: `df['SMA_50'] = df['Close'].rolling(window=50).mean()\ndf['SMA_200'] = df['Close'].rolling(window=200).mean()\n\n# Generate Signals (1 = Long, 0 = Cash)\ndf['Signal'] = 0\ndf.loc[df['SMA_50'] > df['SMA_200'], 'Signal'] = 1\n\n# Calculate Strategy Returns\ndf['Strategy_Return'] = df['Signal'].shift(1) * df['Daily_Return']`,
          drillQuestion: {
            id: 'qm_m6_l2_q1',
            prompt: 'Why is `shift(1)` applied to the Signal column when calculating the Strategy_Return?',
            options: [
              'To fix a bug in the Pandas library',
              'To prevent look-ahead bias, ensuring you trade on today\'s return using yesterday\'s closing signal',
              'To intentionally delay the trade execution by one day to avoid fees',
              'To calculate moving averages correctly'
            ],
            correctIndex: 1,
            explanation: 'If you use today\'s signal (which incorporates today\'s close) to multiply by today\'s return, you are cheating (look-ahead bias). You must use yesterday\'s signal for today\'s return.'
          }
        },
        {
          id: 'qm_m6_l3',
          title: 'Backtesting Fundamentals and Pitfalls',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'A profitable backtest means nothing if it suffers from look-ahead bias, survivorship bias, or excessive curve-fitting.',
          codeSnippet: `from scipy import stats\n\n# Sharpe Ratio calculation\nrisk_free_rate = 0.02\nannualized_return = df['Strategy_Return'].mean() * 252\nannualized_vol = df['Strategy_Return'].std() * (252**0.5)\nsharpe_ratio = (annualized_return - risk_free_rate) / annualized_vol`,
          drillQuestion: {
            id: 'qm_m6_l3_q1',
            prompt: 'What is "survivorship bias" in the context of backtesting a stock portfolio?',
            options: [
              'Testing only during bull markets when stocks "survive"',
              'Using only current S&P 500 stocks to test past years, ignoring companies that went bankrupt or were delisted',
              'Ignoring transaction costs to make the strategy survive',
              'Only trading stocks that pay dividends'
            ],
            correctIndex: 1,
            explanation: 'If you backtest using today\'s list of active companies, your historical data is artificially pristine because you excluded all the companies that failed, falsely inflating results.'
          }
        },
        {
          id: 'qm_m6_l4',
          title: 'Risk Management and Position Sizing Algorithms',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'The Kelly Criterion and volatility-scaled position sizing ensure algorithms size trades optimally, maximizing growth while preventing ruin.',
          codeSnippet: `def calculate_kelly(win_rate, win_loss_ratio):\n    # Kelly % = W - [(1 - W) / R]\n    return win_rate - ((1 - win_rate) / win_loss_ratio)\n\nkelly_fraction = calculate_kelly(0.55, 1.5)\nprint(f"Optimal Kelly sizing: {kelly_fraction:.2%}")`,
          drillQuestion: {
            id: 'qm_m6_l4_q1',
            prompt: 'What happens if you size your positions larger than the optimal Kelly Criterion recommendation?',
            options: [
              'Your expected long-term compound growth rate increases infinitely',
              'Risk of ruin drops to zero',
              'You experience higher volatility and lower long-term compound growth (entering the "Kelly penalty" zone)',
              'The win/loss ratio magically improves'
            ],
            correctIndex: 2,
            explanation: 'Betting more than full Kelly mathematically decreases long-term geometric growth while massively increasing volatility and the risk of complete ruin.'
          }
        },
        {
          id: 'qm_m6_l5',
          title: 'Live Deployment and API Integration',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Deploying algos involves connecting to broker REST/WebSocket APIs, handling server downtime, rate limits, and live execution slippage.',
          codeSnippet: `import requests\n\nAPI_URL = "https://paper-api.alpaca.markets/v2/orders"\nHEADERS = {"APCA-API-KEY-ID": "key", "APCA-API-SECRET-KEY": "secret"}\n\norder_data = {\n    "symbol": "AAPL",\n    "qty": 10,\n    "side": "buy",\n    "type": "market",\n    "time_in_force": "gtc"\n}\nresponse = requests.post(API_URL, json=order_data, headers=HEADERS)`,
          drillQuestion: {
            id: 'qm_m6_l5_q1',
            prompt: 'When integrating with trading APIs, what is a primary advantage of WebSockets over REST APIs for market data?',
            options: [
              'WebSockets are immune to hacking',
              'WebSockets require no authentication',
              'WebSockets maintain an open, persistent connection for low-latency streaming of real-time data',
              'WebSockets process orders faster than matching engines'
            ],
            correctIndex: 2,
            explanation: 'Unlike REST, which requires a new request/response cycle every time you want data, WebSockets keep an open tunnel, allowing the exchange to push real-time tick data instantly.'
          }
        }
      ]
    },
    {
      id: 'qm_mod_7',
      code: '5.7',
title: 'Portfolio Construction, Risk Parity & Asset Allocation',
      description: 'Combine uncorrelated assets to engineer robust portfolios mathematically resistant to economic shocks.',
      lessons: [
        {
          id: 'qm_m7_l1',
          title: 'Modern Portfolio Theory and the Efficient Frontier',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'MPT argues that idiosyncratic risk can be diversified away; the Efficient Frontier represents portfolios with the highest return for a given level of risk.',
          drillQuestion: {
            id: 'qm_m7_l1_q1',
            prompt: 'To maximize the diversification benefits in a portfolio according to MPT, how should the assets behave in relation to each other?',
            options: [
              'They should have a correlation coefficient of +1.0',
              'They should have low or negative correlation with each other',
              'They should all be high-dividend tech stocks',
              'They should have identical volatilities'
            ],
            correctIndex: 1,
            explanation: 'Low or negative correlation means assets don\'t move in tandem. When one zigs, the other zags, which smooths out portfolio volatility without necessarily sacrificing expected returns.'
          }
        },
        {
          id: 'qm_m7_l2',
          title: 'CAPM and Factor Investing',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'The Capital Asset Pricing Model (CAPM) explains returns via market beta. Fama-French extended this by identifying factors like Size, Value, and Momentum.',
          formula: 'E(R_i) = R_f + Beta_i * (E(R_m) - R_f)',
          drillQuestion: {
            id: 'qm_m7_l2_q1',
            prompt: 'According to CAPM, if a stock has a Beta of 1.5, how is it expected to move relative to the broader market?',
            options: [
              'It will move inversely to the market',
              'It is 50% more volatile than the market',
              'It is completely uncorrelated to the market',
              'It guarantees a 50% higher return over time'
            ],
            correctIndex: 1,
            explanation: 'A beta of 1.5 means the stock is historically 1.5 times more volatile than the market; if the market drops 10%, this stock is expected to drop 15%.'
          }
        },
        {
          id: 'qm_m7_l3',
          title: 'Risk Parity and the All-Weather Portfolio',
          duration: '40 min',
          durationSeconds: 2400,
          completed: false,
          keyTakeaway: 'Unlike traditional 60/40 portfolios that allocate based on dollar amounts, Risk Parity allocates capital based on risk contribution, requiring leverage on low-volatility assets like bonds.',
          drillQuestion: {
            id: 'qm_m7_l3_q1',
            prompt: 'In a traditional 60% Equity / 40% Bond portfolio, where does the vast majority of the portfolio\'s actual risk/volatility come from?',
            options: [
              'The 40% Bonds allocation',
              'Equally split between Equities and Bonds',
              'Almost entirely (90%+) from the 60% Equity allocation',
              'Cash drag'
            ],
            correctIndex: 2,
            explanation: 'Because equities are vastly more volatile than bonds, a 60/40 dollar allocation actually results in equities driving almost all the portfolio variance. Risk parity fixes this by equalizing the risk.'
          }
        },
        {
          id: 'qm_m7_l4',
          title: 'Tail Risk Hedging Strategies',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Tail risk hedging involves holding negatively correlated, convexity-heavy assets (like deep OTM put options) to protect the portfolio from extreme "Black Swan" market crashes.',
          drillQuestion: {
            id: 'qm_m7_l4_q1',
            prompt: 'What is the primary drawback of constantly hedging a portfolio with OTM put options?',
            options: [
              'They don\'t payout during a crash',
              'They introduce excessive theta decay, acting as a constant drag on portfolio returns in normal markets',
              'They increase the portfolio\'s beta',
              'They require physical delivery of assets'
            ],
            correctIndex: 1,
            explanation: 'Options are decaying assets. Continuously buying protection incurs a high premium cost (theta bleed), severely dragging down returns during prolonged bull markets.'
          }
        },
        {
          id: 'qm_m7_l5',
          title: 'Portfolio Rebalancing and Tax-Loss Harvesting',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Systematic rebalancing forces you to "buy low and sell high" to maintain target allocations, while tax-loss harvesting offsets capital gains to improve after-tax returns.',
          drillQuestion: {
            id: 'qm_m7_l5_q1',
            prompt: 'What does the "Wash-Sale Rule" prevent investors from doing during Tax-Loss Harvesting?',
            options: [
              'Selling a stock for a profit without paying taxes',
              'Selling a stock for a loss and buying back the exact same stock within 30 days to claim the tax deduction',
              'Using losses from stocks to offset gains in real estate',
              'Trading stocks that have been washed of dividends'
            ],
            correctIndex: 1,
            explanation: 'The IRS wash-sale rule disallows the tax deduction for a loss if you buy a "substantially identical" asset within 30 days before or after the sale.'
          }
        }
      ]
    },
    {
      id: 'qm_mod_8',
      code: '5.8',
title: 'Behavioral Finance & Market Psychology',
      description: 'Defeat the psychological biases that cause irrational market bubbles, crashes, and poor retail trading habits.',
      lessons: [
        {
          id: 'qm_m8_l1',
          title: 'Cognitive Biases in Investing',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Confirmation bias, recency bias, and anchoring cause investors to ignore contrary data and rely on flawed heuristics, leading to systematic trading errors.',
          drillQuestion: {
            id: 'qm_m8_l1_q1',
            prompt: 'If a trader stubbornly holds onto a crashing stock because they originally bought it at $100 and believe it "must get back to $100," what bias are they exhibiting?',
            options: [
              'Recency Bias',
              'Anchoring Bias',
              'Survivorship Bias',
              'Hindsight Bias'
            ],
            correctIndex: 1,
            explanation: 'Anchoring occurs when an individual relies too heavily on an initial piece of information (the $100 entry price) when making subsequent judgments.'
          }
        },
        {
          id: 'qm_m8_l2',
          title: 'Prospect Theory and Loss Aversion',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Prospect theory proves humans feel the pain of a loss roughly twice as intensely as the joy of an equivalent gain, causing irrational risk-taking to avoid realizing losses.',
          drillQuestion: {
            id: 'qm_m8_l2_q1',
            prompt: 'How does Loss Aversion typically manifest in retail trading behavior?',
            options: [
              'Selling winners too early and holding losers too long',
              'Using extreme leverage on every trade',
              'Refusing to buy stocks that pay dividends',
              'Selling losers instantly and holding winners forever'
            ],
            correctIndex: 0,
            explanation: 'Because realizing a loss causes psychological pain, traders hold losers hoping they bounce back. Conversely, they sell winners prematurely to secure the psychological "win."'
          }
        },
        {
          id: 'qm_m8_l3',
          title: 'Market Sentiment and Herd Behavior',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Markets are driven by the collective greed and fear of participants. Extreme herd consensus is often a contrarian signal (e.g., maximum bullishness at market tops).',
          drillQuestion: {
            id: 'qm_m8_l3_q1',
            prompt: 'In contrarian investing logic, what does extreme, euphoric retail sentiment and universal media bullishness usually suggest?',
            options: [
              'The market is about to enter a new multi-year supercycle',
              'There is a severe lack of liquidity',
              'The market is near a structural top, as there are no marginal buyers left',
              'It is the safest time to use maximum leverage'
            ],
            correctIndex: 2,
            explanation: 'If everyone is already fully invested and exuberantly bullish, there is no one left to buy and push prices higher, meaning a reversal is likely.'
          }
        },
        {
          id: 'qm_m8_l4',
          title: 'Building Trading Discipline and Emotional Control',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Professional execution requires divorcing emotion from money through strict, pre-defined rules, algorithmic assistance, and rigorous trade journaling.',
          drillQuestion: {
            id: 'qm_m8_l4_q1',
            prompt: 'What is the primary purpose of a detailed trade journal?',
            options: [
              'To show off winning trades on social media',
              'To track tax liabilities for the IRS',
              'To identify recurring psychological mistakes and optimize edge through data analysis',
              'To automatically trigger stop-loss orders'
            ],
            correctIndex: 2,
            explanation: 'A journal provides hard data on your behavior and execution, revealing patterns in mistakes (like over-trading or revenge trading) that you can systematically fix.'
          }
        }
      ]
    },
    {
      id: 'qm_mod_9',
      code: '5.9',
title: 'Global Macro: Forex, Bonds & Interest Rate Markets',
      description: 'Understand the multi-trillion dollar plumbing of the financial system: sovereign debt, currencies, and global capital flows.',
      lessons: [
        {
          id: 'qm_m9_l1',
          title: 'Foreign Exchange Market Dynamics',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Currencies are traded in pairs and are fundamentally driven by central bank interest rate differentials, inflation rates, and geopolitical stability.',
          drillQuestion: {
            id: 'qm_m9_l1_q1',
            prompt: 'If the European Central Bank (ECB) aggressively hikes interest rates while the US Federal Reserve cuts rates, what is the most likely outcome for the EUR/USD pair?',
            options: [
              'EUR/USD declines significantly',
              'EUR/USD remains unchanged',
              'EUR/USD appreciates (Euro strengthens, USD weakens)',
              'Both currencies collapse entirely'
            ],
            correctIndex: 2,
            explanation: 'Higher interest rates in the Eurozone attract global capital seeking higher yields, increasing demand for Euros and driving the EUR/USD exchange rate up.'
          }
        },
        {
          id: 'qm_m9_l2',
          title: 'Interest Rate Parity and Forward Rates',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Covered Interest Rate Parity states that the forward exchange rate must incorporate the interest rate differential between two countries to prevent riskless arbitrage.',
          formula: 'Forward Rate = Spot Rate * (1 + Interest_Domestic) / (1 + Interest_Foreign)',
          drillQuestion: {
            id: 'qm_m9_l2_q1',
            prompt: 'According to Covered Interest Rate Parity, if a foreign country has a much higher interest rate than the domestic country, the foreign currency\'s forward rate should trade at a:',
            options: [
              'Premium',
              'Discount',
              'Par value',
              'Infinite value'
            ],
            correctIndex: 1,
            explanation: 'To offset the higher interest earned in the foreign currency (preventing arbitrage), the foreign currency must trade at a forward discount relative to the domestic currency.'
          }
        },
        {
          id: 'qm_m9_l3',
          title: 'Bond Pricing and Duration',
          duration: '40 min',
          durationSeconds: 2400,
          completed: false,
          keyTakeaway: 'Bond prices move inversely to interest rates. Duration measures a bond\'s price sensitivity to interest rate changes; longer duration means higher volatility.',
          drillQuestion: {
            id: 'qm_m9_l3_q1',
            prompt: 'If a bond has a duration of 8 years, and interest rates suddenly rise by 1%, what happens to the bond\'s price?',
            options: [
              'It rises by 8%',
              'It drops by 1%',
              'It drops by approximately 8%',
              'It remains unchanged'
            ],
            correctIndex: 2,
            explanation: 'Duration is a linear approximation of price sensitivity. A duration of 8 implies the bond price will drop by roughly 8% for every 1% increase in interest rates.'
          }
        },
        {
          id: 'qm_m9_l4',
          title: 'Sovereign Debt and Credit Default Swaps',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Credit Default Swaps (CDS) act as insurance against sovereign or corporate default. Rising CDS spreads indicate deteriorating creditworthiness and systemic risk.',
          drillQuestion: {
            id: 'qm_m9_l4_q1',
            prompt: 'What does a rapidly widening (increasing) CDS spread on US Treasury bonds indicate?',
            options: [
              'The US government is paying off debt faster',
              'Market participants perceive an increasing risk of a US sovereign default',
              'Interest rates are dropping to zero',
              'US GDP is growing at record rates'
            ],
            correctIndex: 1,
            explanation: 'CDS spreads represent the cost to insure against default. If the spread widens, it means protection is becoming more expensive because the perceived risk of default has risen.'
          }
        },
        {
          id: 'qm_m9_l5',
          title: 'Emerging Markets vs. Developed Markets',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Emerging Market (EM) equities offer higher growth potential but carry severe FX risk, political instability, and vulnerability to a strong US Dollar.',
          drillQuestion: {
            id: 'qm_m9_l5_q1',
            prompt: 'Why is a rapidly strengthening US Dollar historically dangerous for Emerging Market economies?',
            options: [
              'It makes EM exports too expensive globally',
              'Many EM countries issue debt denominated in USD; a strong dollar makes this debt massively more expensive to service',
              'It forces EM central banks to lower interest rates',
              'It increases EM tourism'
            ],
            correctIndex: 1,
            explanation: 'EM nations often borrow in US Dollars. When the USD strengthens against their local currency, the relative cost of repaying that dollar-denominated debt skyrockets, risking default.'
          }
        }
      ]
    },
    {
      id: 'qm_mod_10',
      code: '5.10',
title: 'IPO Analysis, Venture Math & Pre-IPO Investing',
      description: 'Navigate private markets, venture capital dilution mechanics, and the intricacies of public listings.',
      lessons: [
        {
          id: 'qm_m10_l1',
          title: 'The IPO Process and Underwriting',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Investment banks underwrite IPOs, taking on pricing risk while manipulating supply via lock-up periods and the "Greenshoe" over-allotment option.',
          drillQuestion: {
            id: 'qm_m10_l1_q1',
            prompt: 'What is the primary purpose of an IPO lock-up period?',
            options: [
              'To prevent retail investors from buying shares',
              'To prevent insiders and early investors from immediately flooding the market with shares and crashing the price',
              'To guarantee the company hits its earnings targets',
              'To lock in the underwriting bank\'s fees'
            ],
            correctIndex: 1,
            explanation: 'Lock-up periods (usually 90-180 days) restrict insiders from selling, stabilizing the stock price in the critical early months of public trading.'
          }
        },
        {
          id: 'qm_m10_l2',
          title: 'Venture Capital Math and Dilution',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Subsequent VC funding rounds dilute early investors\' ownership percentages, though anti-dilution provisions and preferred stock waterfalls protect institutional downside.',
          formula: 'Post-Money Valuation = Pre-Money Valuation + Investment Amount',
          drillQuestion: {
            id: 'qm_m10_l2_q1',
            prompt: 'If a startup has a pre-money valuation of $15 million and raises $5 million in a Series A, what percentage of the company do the new investors own?',
            options: ['33.3%', '25%', '50%', '20%'],
            correctIndex: 1,
            explanation: 'Post-Money = $15M + $5M = $20M. The new investors contributed $5M of the $20M total value, equating to 25% ownership (5 / 20).'
          }
        },
        {
          id: 'qm_m10_l3',
          title: 'Analyzing S-1 Filings and Pre-IPO Financials',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'The S-1 filing is a goldmine exposing a private company\'s true financials, unit economics, Customer Acquisition Cost (CAC), and specific risk factors.',
          drillQuestion: {
            id: 'qm_m10_l3_q1',
            prompt: 'In a tech company\'s S-1, a high LTV:CAC (Lifetime Value to Customer Acquisition Cost) ratio implies what?',
            options: [
              'The company is bleeding cash to acquire low-value users',
              'The company has highly efficient marketing and a strong business model',
              'The company relies entirely on hardware sales',
              'The company is violating SEC regulations'
            ],
            correctIndex: 1,
            explanation: 'A high LTV:CAC ratio (e.g., 4:1) means the company generates significantly more value from a customer than it costs to acquire them, indicating sustainable and scalable unit economics.'
          }
        },
        {
          id: 'qm_m10_l4',
          title: 'SPACs, Direct Listings, and Alternative Exits',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Direct listings bypass bank underwriting to offer existing shares directly, while SPACs offer a faster, albeit riskier, reverse-merger route to public markets.',
          drillQuestion: {
            id: 'qm_m10_l4_q1',
            prompt: 'Unlike a traditional IPO, what does a company executing a Direct Listing NOT do?',
            options: [
              'Become a publicly traded entity',
              'File documents with the SEC',
              'Issue new shares to raise fresh capital',
              'Allow employees to sell their shares'
            ],
            correctIndex: 2,
            explanation: 'In a Direct Listing, no new shares are created and no new capital is raised for the company; it simply allows existing private shareholders to sell their shares on the public exchange.'
          }
        }
      ]
    }
  ]
};




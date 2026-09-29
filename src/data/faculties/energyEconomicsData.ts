import { FrontierFaculty } from '../../types';

export const ENERGY_ECONOMICS_FACULTY: FrontierFaculty = {
  id: 'energy_economics',
  name: 'Faculty of Energy Economics & Macro Commodities',
  shortTitle: 'Energy & Commodities',
  iconName: 'Zap',
  emoji: '⚡',
  themeColor: 'amber',
  accentHex: '#f59e0b',
  glowClass: 'shadow-[0_0_35px_rgba(245,158,11,0.25)]',
  borderClass: 'border-amber-500/30 hover:border-amber-400/60',
  bgLightClass: 'bg-amber-500/10 text-amber-400',
  badgeClass: 'bg-amber-500/10 text-amber-300 border border-amber-500/30',
  headline: 'Power Grid Dynamics, Hydrocarbon Geopolitics & Nuclear Baseload Economics',
  description: 'Master commodity supply chains, energy grid arbitrage, critical mineral economics, and civilization-scale energy systems.',
  difficulty: 'Civilization Scale',
  estimatedHours: 110,
  totalXp: 3200,
  completionPercent: 0,
  simulatorName: 'Energy Grid & Commodity Dispatch Matrix',
  simulatorTag: 'Macro Economic Wargame',
  drillNodes: [],
  modules: [
    {
      id: 'energy_mod_1_grids_smr',
      code: '2.1',
      title: 'Global Energy Grids, SMR Nuclear Power & Fusion Economics',
      description: 'Analyze global power distribution, the advent of Small Modular Reactors, and the baseline economics of emerging nuclear technologies.',
      lessons: [
        {
          id: 'energy_1_1_base_load',
          title: 'Base-Load Economics & Grid Stability',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Base-load power must run continuously to meet minimum grid demand, requiring highly reliable, dispatchable energy sources.',
          formula: 'LCOE = Sum(Cost_t / (1+r)^t) / Sum(Energy_t / (1+r)^t)',
          drillQuestion: {
            id: 'dq_energy_1_1',
            prompt: 'Which metric is primarily used to compare the per-megawatt-hour cost of different energy generation technologies over their lifetimes?',
            options: [
              'Capital Expenditure (CapEx)',
              'Levelized Cost of Energy (LCOE)',
              'Marginal Cost of Dispatch',
              'Energy Return on Investment (EROI)'
            ],
            correctIndex: 1,
            explanation: 'LCOE accounts for capital, operating, and fuel costs over a plant\'s lifetime, allowing direct comparison between different energy sources.'
          }
        },
        {
          id: 'energy_1_2_smr_economics',
          title: 'Economics of Small Modular Reactors (SMRs)',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'SMRs reduce massive upfront capital risks through factory-based modular manufacturing and scalable deployment.',
          drillQuestion: {
            id: 'dq_energy_1_2',
            prompt: 'What is the primary economic advantage of SMRs over traditional large-scale nuclear reactors?',
            options: [
              'Higher fuel enrichment requirements',
              'Zero nuclear waste production',
              'Reduced capital risk through modular construction',
              'Lower thermal efficiency'
            ],
            correctIndex: 2,
            explanation: 'SMRs can be built in factories and transported to sites, lowering the immense upfront capital costs and construction delays of traditional reactors.'
          }
        },
        {
          id: 'energy_1_3_grid_interconnects',
          title: 'High-Voltage Direct Current (HVDC) Interconnects',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'HVDC lines enable long-distance power transmission with minimal line losses, linking disparate renewable sources to urban centers.',
          drillQuestion: {
            id: 'dq_energy_1_3',
            prompt: 'Why is HVDC preferred over HVAC for very long-distance underwater power cables?',
            options: [
              'HVDC has zero resistance',
              'HVDC cables are much cheaper to manufacture',
              'HVDC experiences lower capacitive losses over long distances',
              'HVDC uses lower voltages'
            ],
            correctIndex: 2,
            explanation: 'HVAC lines suffer from significant capacitive charging losses over long underwater or underground distances, making HVDC more efficient.'
          }
        },
        {
          id: 'energy_1_4_fusion_horizon',
          title: 'The Economic Horizon of Nuclear Fusion',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Commercial fusion requires extreme physics milestones (Q > 1), but promises effectively limitless base-load energy with minimal fuel costs.',
          formula: 'Q = Fusion_Power_Out / Heating_Power_In',
          drillQuestion: {
            id: 'dq_energy_1_4',
            prompt: 'In fusion economics, what does reaching a "Q-value greater than 1" (Q > 1) signify?',
            options: [
              'The reaction produces net electrical power for the grid',
              'The reaction produces more thermal energy than is injected to heat the plasma',
              'The reactor has paid off its capital costs',
              'The magnetic confinement field is stable'
            ],
            correctIndex: 1,
            explanation: 'Q > 1 (scientific breakeven) means the fusion reaction generates more thermal energy than the energy used to heat the plasma, though net electrical power requires much higher Q.'
          }
        },
        {
          id: 'energy_1_5_dispatch_curves',
          title: 'Merit Order & Economic Dispatch Curves',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Generators are dispatched in order of ascending marginal cost, with renewables (zero marginal cost) entering first.',
          drillQuestion: {
            id: 'dq_energy_1_5',
            prompt: 'Under the merit order effect, how do zero-marginal-cost renewables impact wholesale electricity prices during peak generation?',
            options: [
              'They shift the supply curve right, lowering wholesale prices',
              'They shift the supply curve left, raising wholesale prices',
              'They have no effect on wholesale prices',
              'They increase the marginal cost of all other generators'
            ],
            correctIndex: 0,
            explanation: 'Because they bid into the market at near-zero marginal cost, renewables displace more expensive generators, lowering the clearing price of electricity.'
          }
        },
        {
          id: 'energy_1_6_nuclear_fuel_cycle',
          title: 'The Nuclear Fuel Cycle & Uranium Markets',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'The uranium market is driven by long-term contracting and geopolitical constraints on conversion and enrichment capacity.',
          drillQuestion: {
            id: 'dq_energy_1_6',
            prompt: 'Which step in the nuclear fuel cycle is typically the most technologically constrained and sensitive to geopolitical chokepoints?',
            options: [
              'Uranium mining (U3O8)',
              'Milling',
              'Isotope enrichment (SWU)',
              'Waste disposal'
            ],
            correctIndex: 2,
            explanation: 'Enrichment requires complex centrifuge technology (measured in Separative Work Units - SWU) which is heavily regulated and concentrated in a few nations.'
          }
        }
      ]
    },
    {
      id: 'energy_mod_2_oil_gas_geopolitics',
      code: '2.2',
      title: 'Geopolitical Oil, Natural Gas & Rare-Earth Supply Chains',
      description: 'Navigate the geopolitical mechanics of the global hydrocarbon trade, LNG shipping, and rare-earth chokepoints.',
      lessons: [
        {
          id: 'energy_2_1_oil_pricing',
          title: 'Brent, WTI & Global Crude Differentials',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Crude oil is priced based on its physical characteristics (API gravity and sulfur content) and regional transport logistics.',
          formula: 'Spread = Price_Brent - Price_WTI',
          drillQuestion: {
            id: 'dq_energy_2_1',
            prompt: 'Why does "Light, Sweet" crude typically trade at a premium to "Heavy, Sour" crude?',
            options: [
              'It is rarer in the earth\'s crust',
              'It requires less refining complexity to produce high-value fuels like gasoline',
              'It has a higher energy density per barrel',
              'It produces zero carbon emissions when burned'
            ],
            correctIndex: 1,
            explanation: 'Light, sweet crude has low sulfur and yields higher amounts of gasoline and diesel with less intense refining, making it more valuable to refiners.'
          }
        },
        {
          id: 'energy_2_2_lng_economics',
          title: 'LNG Liquefaction & Global Gas Arbitrage',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Liquefied Natural Gas (LNG) disconnects gas from physical pipelines, creating a global, sea-borne arbitrage market.',
          drillQuestion: {
            id: 'dq_energy_2_2',
            prompt: 'What primarily drives the arbitrage opportunity in the global LNG market?',
            options: [
              'The difference between pipeline gas prices in exporting regions and spot prices in importing regions minus liquefaction and freight costs',
              'The difference in the energy density of gas versus oil',
              'The cost of regasification relative to pipeline tariffs',
              'The price of Brent crude'
            ],
            correctIndex: 0,
            explanation: 'LNG arbitrage exists when regional price spreads (e.g., US Henry Hub vs. Asian JKM) exceed the substantial costs of liquefying, shipping, and regasifying the gas.'
          }
        },
        {
          id: 'energy_2_3_opec_spare_capacity',
          title: 'OPEC+ and Spare Capacity Dynamics',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'OPEC\'s power rests on its spare production capacity, acting as the central bank of the global oil market to manage price volatility.',
          drillQuestion: {
            id: 'dq_energy_2_3',
            prompt: 'How does a low global "spare capacity" environment affect oil markets?',
            options: [
              'It suppresses prices due to high demand',
              'It makes prices highly sensitive to supply disruptions or geopolitical shocks',
              'It encourages OPEC to cut production further',
              'It forces refiners to shut down'
            ],
            correctIndex: 1,
            explanation: 'When spare capacity is low, the market has little buffer to replace lost barrels if a disruption occurs, leading to high price volatility and risk premiums.'
          }
        },
        {
          id: 'energy_2_4_rare_earth_monopolies',
          title: 'Rare-Earth Elements & Clean Tech Chokepoints',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Rare-earth elements are critical for permanent magnets in wind turbines and EV motors, with processing capacity highly concentrated geopolitically.',
          drillQuestion: {
            id: 'dq_energy_2_4',
            prompt: 'Despite being relatively abundant in the earth\'s crust, why are Rare-Earth Elements (REEs) strategically vulnerable?',
            options: [
              'They decay radioactively',
              'The chemical processing and separation phases are highly toxic, complex, and concentrated in a single nation (China)',
              'They can only be found in deep-sea nodules',
              'They expire if not used within a year'
            ],
            correctIndex: 1,
            explanation: 'The strategic chokepoint is not the mining of the ore, but the complex, environmentally hazardous separation and refinement process, dominated by China.'
          }
        },
        {
          id: 'energy_2_5_petrodollar_system',
          title: 'The Petrodollar & Global Macro Liquidity',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Pricing oil in USD creates structural global demand for dollars, recycling surplus capital into US Treasury markets.',
          drillQuestion: {
            id: 'dq_energy_2_5',
            prompt: 'What is the "Petrodollar Recycling" mechanism?',
            options: [
              'Using oil revenues to fund renewable energy projects',
              'The process where oil-exporting nations invest their surplus USD revenues into Western financial assets, primarily US Treasuries',
              'Converting oil into plastic products',
              'The IMF lending dollars to oil importers'
            ],
            correctIndex: 1,
            explanation: 'Petrodollar recycling refers to oil exporters taking the USD they earn and investing it back into US capital markets, providing liquidity and funding US deficits.'
          }
        }
      ]
    },
    {
      id: 'energy_mod_3_battery_chemistry',
      code: '2.3',
      title: 'Battery Chemistry, Lithium/Nickel Supply & Green Grid Storage',
      description: 'Evaluate the unit economics of battery storage, mineral supply chains, and their role in balancing renewable energy grids.',
      lessons: [
        {
          id: 'energy_3_1_battery_lcoe',
          title: 'Levelized Cost of Storage (LCOS)',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'LCOS measures the total cost of storing and discharging electricity, critical for evaluating grid-scale battery viability.',
          formula: 'LCOS = Total_Cost_of_Storage / Total_Discharged_Energy',
          drillQuestion: {
            id: 'dq_energy_3_1',
            prompt: 'Unlike power generation, what unique factor heavily impacts the Levelized Cost of Storage (LCOS) for batteries?',
            options: [
              'Cycle life and degradation rates',
              'Fuel transportation costs',
              'Thermodynamic Carnot efficiency',
              'Sunlight hours per day'
            ],
            correctIndex: 0,
            explanation: 'Batteries degrade over time with each charge/discharge cycle. The total number of cycles a battery can perform before replacement drastically impacts its lifetime economics.'
          }
        },
        {
          id: 'energy_3_2_lithium_brine_hardrock',
          title: 'Lithium Extraction: Brine vs. Hard Rock',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Lithium economics are split between slow, low-cost brine evaporation (South America) and faster, higher-cost spodumene mining (Australia).',
          drillQuestion: {
            id: 'dq_energy_3_2',
            prompt: 'Which of the following is a key economic characteristic of extracting lithium from salar brines compared to hard-rock mining?',
            options: [
              'It requires massive amounts of underground tunneling',
              'It has a much faster time-to-market from discovery to production',
              'It relies on solar evaporation, making it cheaper but very slow (12-18 months per batch)',
              'It yields pure lithium metal directly'
            ],
            correctIndex: 2,
            explanation: 'Brine extraction is capital and OPEX efficient because it uses solar energy for evaporation, but the process takes over a year to yield lithium salts, reducing supply elasticity.'
          }
        },
        {
          id: 'energy_3_3_battery_chemistry_tradeoffs',
          title: 'Cathode Chemistries: LFP vs. NMC',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'The EV market splits into LFP (cheap, durable, lower range) for mass market, and NMC (expensive, high energy density) for premium vehicles.',
          drillQuestion: {
            id: 'dq_energy_3_3',
            prompt: 'Why has Lithium Iron Phosphate (LFP) battery chemistry gained massive market share despite having lower energy density than NMC?',
            options: [
              'It operates at higher voltages',
              'It eliminates the need for expensive and ethically complex cobalt and nickel',
              'It charges instantly',
              'It weighs significantly less'
            ],
            correctIndex: 1,
            explanation: 'LFP uses iron and phosphate, which are vastly cheaper and more abundant than the nickel and cobalt required for NMC batteries, dramatically lowering costs.'
          }
        },
        {
          id: 'energy_3_4_nickel_class_1',
          title: 'Class 1 Nickel & The HPAL Process',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Batteries require high-purity Class 1 nickel, increasingly produced via complex HPAL processing of low-grade laterite ores.',
          drillQuestion: {
            id: 'dq_energy_3_4',
            prompt: 'High-Pressure Acid Leaching (HPAL) is used in the nickel industry to do what?',
            options: [
              'Convert high-grade sulfide ores into stainless steel',
              'Extract battery-grade nickel and cobalt from low-grade laterite ores',
              'Recycle old lithium-ion batteries',
              'Enrich uranium'
            ],
            correctIndex: 1,
            explanation: 'HPAL is a capital-intensive, technologically complex process used (notably in Indonesia) to turn abundant low-grade laterite ores into the high-purity chemicals needed for batteries.'
          }
        },
        {
          id: 'energy_3_5_grid_arbitrage',
          title: 'Grid Storage Arbitrage & Frequency Regulation',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Grid batteries generate revenue primarily through ancillary services (like frequency regulation) and time-shifting (arbitraging daily price swings).',
          drillQuestion: {
            id: 'dq_energy_3_5',
            prompt: 'In grid-scale battery economics, what is "frequency regulation"?',
            options: [
              'Charging at night and discharging during the day',
              'Providing sub-second bursts of power to maintain the grid\'s exact alternating current frequency (e.g., 60Hz)',
              'Upgrading the firmware of smart meters',
              'Selling power across international borders'
            ],
            correctIndex: 1,
            explanation: 'Because batteries can respond in milliseconds, they earn premium rates providing frequency regulation—instantly absorbing or injecting power to keep the grid stable at exactly 50 or 60 Hz.'
          }
        }
      ]
    },
    {
      id: 'energy_mod_4_macro_arbitrage',
      code: '2.4',
      title: 'Macro Energy Arbitrage & Carbon Credit Trading',
      description: 'Master the economics of energy trading, spark spreads, and carbon compliance markets.',
      lessons: [
        {
          id: 'energy_4_1_spark_spreads',
          title: 'Spark Spreads & Dark Spreads',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Spark spreads measure the profitability of a gas-fired power plant by comparing electricity prices to natural gas input costs.',
          formula: 'Spark Spread = Price_Electricity - (Price_Gas * Heat_Rate)',
          drillQuestion: {
            id: 'dq_energy_4_1',
            prompt: 'If a natural gas power plant has a very low "heat rate", what does this imply about its economics?',
            options: [
              'It is highly inefficient and needs high power prices to be profitable',
              'It is highly efficient, requiring less gas to produce a MWh, leading to a wider spark spread',
              'It relies on coal instead of gas',
              'It cannot operate during winter'
            ],
            correctIndex: 1,
            explanation: 'Heat rate is a measure of efficiency (BTU per kWh). A lower heat rate means the plant is more efficient, converting fuel to electricity more cheaply, expanding its profit margin (spark spread).'
          }
        },
        {
          id: 'energy_4_2_carbon_pricing',
          title: 'Cap-and-Trade vs. Carbon Taxes',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Cap-and-trade sets a fixed limit on emissions while the price floats; a carbon tax sets a fixed price while emissions float.',
          drillQuestion: {
            id: 'dq_energy_4_2',
            prompt: 'In a Cap-and-Trade system (like the EU ETS), what happens to the carbon price if economic activity booms, causing industries to emit more?',
            options: [
              'The carbon price stays the same, but the cap increases',
              'The carbon price rises as demand for a fixed number of allowances increases',
              'The government automatically issues more allowances',
              'The carbon price falls'
            ],
            correctIndex: 1,
            explanation: 'Because the number of allowances (the cap) is strictly limited, higher emissions demand forces the price of allowances up, incentivizing emission reductions.'
          }
        },
        {
          id: 'energy_4_3_clean_spark_spread',
          title: 'The Clean Spark Spread',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'The clean spark spread subtracts the cost of carbon allowances from the standard spark spread, internalizing emission costs.',
          formula: 'Clean Spark Spread = Electricity_Price - (Gas_Cost) - (Carbon_Cost * Emissions_Factor)',
          drillQuestion: {
            id: 'dq_energy_4_3',
            prompt: 'When carbon credit prices rise significantly, how does it affect the merit order between coal and natural gas?',
            options: [
              'It makes coal more competitive because coal is cheaper to mine',
              'It heavily penalizes coal (which has a higher emissions factor), pushing gas ahead of coal in the merit order',
              'It makes renewables less competitive',
              'It has no effect on power markets'
            ],
            correctIndex: 1,
            explanation: 'Coal emits roughly twice the CO2 per MWh as natural gas. High carbon prices destroy coal\'s profit margin (the clean dark spread), causing grid operators to dispatch cleaner natural gas instead.'
          }
        },
        {
          id: 'energy_4_4_vcm_markets',
          title: 'Voluntary Carbon Markets (VCM)',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'VCMs allow corporations to buy unregulated offsets (like forestry) to meet ESG goals, but face extreme scrutiny over "additionality".',
          drillQuestion: {
            id: 'dq_energy_4_4',
            prompt: 'In the context of carbon offsets, what does "additionality" mean?',
            options: [
              'Buying more credits than needed',
              'The principle that the emission reduction would not have occurred without the revenue from selling the carbon credit',
              'Planting trees in addition to cutting them down',
              'Adding carbon capture to an existing plant'
            ],
            correctIndex: 1,
            explanation: 'For a carbon offset to be valid, the project must be "additional"—meaning it only happened because of the offset funding. If a forest was never going to be cut down anyway, protecting it lacks additionality.'
          }
        },
        {
          id: 'energy_4_5_cross_border_tariffs',
          title: 'Carbon Border Adjustment Mechanism (CBAM)',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'CBAM applies carbon tariffs on imported goods to prevent "carbon leakage" (industries moving to countries with weak environmental laws).',
          drillQuestion: {
            id: 'dq_energy_4_5',
            prompt: 'What is the primary economic goal of a Carbon Border Adjustment Mechanism (CBAM)?',
            options: [
              'To ban all imports of steel and cement',
              'To level the playing field by taxing the embedded carbon of imports, preventing domestic industries from fleeing to jurisdictions without carbon pricing',
              'To subsidize foreign renewable energy',
              'To increase global oil prices'
            ],
            correctIndex: 1,
            explanation: 'CBAM ensures that foreign producers pay the same carbon cost as domestic producers, eliminating the economic incentive for companies to offshore their emissions to weakly-regulated countries.'
          }
        }
      ]
    },
    {
      id: 'energy_mod_5_renewables_hydrogen',
      code: '2.5',
      title: 'Solar, Wind & Hydrogen Economy',
      description: 'Analyze the scale economics of solar and wind, curtailment risks, and the physical reality of the green hydrogen transition.',
      lessons: [
        {
          id: 'energy_5_1_duck_curve',
          title: 'Solar Curtailment & The Duck Curve',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Massive solar penetration causes severe daytime oversupply and steep evening ramp-up demands, known as the "Duck Curve".',
          drillQuestion: {
            id: 'dq_energy_5_1',
            prompt: 'What operational challenge does the "Duck Curve" present to grid operators?',
            options: [
              'Generators freeze during winter months',
              'The need to rapidly ramp up dispatchable generation in the evening as solar generation drops but consumer demand peaks',
              'Too much wind power at night',
              'Birds impacting transmission lines'
            ],
            correctIndex: 1,
            explanation: 'As the sun sets, solar drops to zero exactly when people come home and use appliances. Grid operators must rapidly spin up fast-reacting plants (like gas peakers) to meet this steep net-demand ramp.'
          }
        },
        {
          id: 'energy_5_2_wind_capacity_factors',
          title: 'Wind Turbines: Capacity Factors & Scaling',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Wind power output scales with the cube of wind speed, making offshore wind highly attractive despite immense capital costs.',
          formula: 'Power = 0.5 * Air_Density * Swept_Area * (Velocity)^3',
          drillQuestion: {
            id: 'dq_energy_5_2',
            prompt: 'According to the wind power equation, if the wind speed doubles, by what factor does the potential power output increase?',
            options: [
              '2 times',
              '4 times',
              '8 times',
              '16 times'
            ],
            correctIndex: 2,
            explanation: 'Power output is proportional to the cube of the wind velocity (V^3). Therefore, doubling the wind speed (2^3) increases power output by a factor of 8.'
          }
        },
        {
          id: 'energy_5_3_hydrogen_colors',
          title: 'The Hydrogen Color Spectrum',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Hydrogen is categorized by its production method: Grey (fossil gas), Blue (gas with carbon capture), and Green (renewable electrolysis).',
          drillQuestion: {
            id: 'dq_energy_5_3',
            prompt: 'How is "Green Hydrogen" produced?',
            options: [
              'By reforming methane gas',
              'By gasifying coal',
              'By using renewable electricity to power electrolysis, splitting water into hydrogen and oxygen',
              'By capturing emissions from industrial chimneys'
            ],
            correctIndex: 2,
            explanation: 'Green hydrogen uses zero-carbon electricity (solar, wind) to power an electrolyzer, separating H2O with no carbon emissions in the process.'
          }
        },
        {
          id: 'energy_5_4_electrolyzer_capex',
          title: 'Green Hydrogen Unit Economics',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Green hydrogen economics require extremely cheap renewable power and high electrolyzer utilization to overcome high CAPEX.',
          drillQuestion: {
            id: 'dq_energy_5_4',
            prompt: 'What is the primary economic dilemma when sizing an electrolyzer for an off-grid solar farm?',
            options: [
              'Electrolyzers only run at night',
              'If sized to capture peak noon solar, the expensive electrolyzer sits idle most of the day, destroying capital efficiency',
              'Electrolyzers produce too much oxygen',
              'Solar panels degrade when connected to electrolyzers'
            ],
            correctIndex: 1,
            explanation: 'Electrolyzers are highly capital intensive. They need to run constantly (high capacity factor) to amortize their cost. Hooking them to intermittent solar means they sit idle during the night, driving up the cost of the hydrogen produced.'
          }
        },
        {
          id: 'energy_5_5_ammonia_shipping',
          title: 'Ammonia as an Energy Carrier',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Because liquid hydrogen is incredibly difficult to transport, turning it into Ammonia (NH3) is the favored method for global shipping.',
          drillQuestion: {
            id: 'dq_energy_5_5',
            prompt: 'Why is Ammonia (NH3) preferred over liquid Hydrogen (H2) for trans-oceanic energy shipping?',
            options: [
              'Ammonia weighs less than hydrogen',
              'Hydrogen must be cooled to near absolute zero (-253°C) making it expensive and prone to boil-off, whereas ammonia liquefies at a much warmer -33°C',
              'Ammonia produces oxygen when burned',
              'Ammonia cannot explode'
            ],
            correctIndex: 1,
            explanation: 'The extreme cryogenic requirements of liquid hydrogen make large-scale shipping technologically daunting. Ammonia is a widely traded chemical with existing infrastructure and much easier liquefaction requirements.'
          }
        }
      ]
    },
    {
      id: 'energy_mod_6_metal_futures',
      code: '2.6',
      title: 'Commodity Futures: Gold, Silver, Copper & Uranium',
      description: 'Explore the financialization of physical commodities, contango, backwardation, and base metal supercycles.',
      lessons: [
        {
          id: 'energy_6_1_futures_contango',
          title: 'Futures Curves: Contango & Backwardation',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Contango implies oversupply (future price > spot), while backwardation signals immediate physical shortage (spot > future price).',
          drillQuestion: {
            id: 'dq_energy_6_1',
            prompt: 'If a commodity market is in steep "backwardation," what is the primary incentive for a holder of physical inventory?',
            options: [
              'Store the commodity for a year to sell at a higher price',
              'Sell the physical commodity immediately into the spot market to capture the premium, drawing down inventories',
              'Buy more futures contracts',
              'Halt production'
            ],
            correctIndex: 1,
            explanation: 'Backwardation (Spot > Futures) indicates the market is desperate for physical supply right now. This incentivizes selling physical inventory immediately rather than paying storage costs for a lower future price.'
          }
        },
        {
          id: 'energy_6_2_copper_electrification',
          title: 'Copper: The Electrification Metal',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Copper demand is driven structurally by grid expansion and EVs, facing long-term deficits due to declining ore grades and lack of new discoveries.',
          drillQuestion: {
            id: 'dq_energy_6_2',
            prompt: 'What is meant by "declining ore grades" in the copper mining industry?',
            options: [
              'The copper is rusting before extraction',
              'Miners must dig significantly more tons of rock to extract the same amount of pure copper, increasing energy and capital costs',
              'The market price of copper is falling',
              'The copper conducts electricity less efficiently'
            ],
            correctIndex: 1,
            explanation: 'Decades ago, mines yielded high percentages of copper per ton of rock. Today, grades are much lower (often <1%), meaning exponentially more earth must be moved and processed to yield the same metal.'
          }
        },
        {
          id: 'energy_6_3_gold_real_rates',
          title: 'Gold and Real Interest Rates',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Gold produces no yield; therefore, its price is highly inversely correlated to real interest rates (nominal rates minus inflation).',
          formula: 'Real_Interest_Rate = Nominal_Yield - Expected_Inflation',
          drillQuestion: {
            id: 'dq_energy_6_3',
            prompt: 'Why does gold typically perform well when "real interest rates" are negative?',
            options: [
              'Because gold pays a high dividend',
              'Because the opportunity cost of holding non-yielding gold is removed when bonds are losing purchasing power to inflation',
              'Because central banks are forced to buy gold',
              'Because mining becomes cheaper'
            ],
            correctIndex: 1,
            explanation: 'When real rates are positive, investors prefer bonds for their yield. When inflation exceeds nominal rates (negative real rates), money parked in bonds loses value, making gold an attractive store of value.'
          }
        },
        {
          id: 'energy_6_4_uranium_contracting',
          title: 'Uranium Long-Term Contracting',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Unlike oil, uranium is primarily traded via multi-year contracts rather than spot markets, driven by utility risk-aversion.',
          drillQuestion: {
            id: 'dq_energy_6_4',
            prompt: 'Why are nuclear utilities highly price-insensitive when securing uranium supply contracts?',
            options: [
              'Uranium is subsidized by the government',
              'Fuel costs make up a very small percentage of a nuclear plant\'s total operating cost, but running out of fuel means losing massive revenue',
              'Uranium prices never fluctuate',
              'Utilities can pass 100% of the cost instantly to consumers'
            ],
            correctIndex: 1,
            explanation: 'In nuclear power, the massive costs are capital (building the plant). The uranium fuel itself is a tiny fraction of the LCOE. Therefore, utilities will pay almost any price to ensure they don\'t run out of fuel and idle a billion-dollar asset.'
          }
        },
        {
          id: 'energy_6_5_silver_bimetallic',
          title: 'Silver: Industrial vs. Monetary Demand',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Silver has a dual identity, trading as a monetary safe haven while seeing massive industrial consumption in solar photovoltaics (PV).',
          drillQuestion: {
            id: 'dq_energy_6_5',
            prompt: 'Which modern industrial application has fundamentally transformed the demand curve for physical silver?',
            options: [
              'Catalytic converters',
              'Photovoltaic (solar) cells, which use silver pastes for conductivity',
              'Jet turbine blades',
              'Lithium-ion batteries'
            ],
            correctIndex: 1,
            explanation: 'Silver is the best electrical conductor of all metals. The explosive growth of solar panels, which rely on silver conductive pastes to move electrons out of the silicon cell, consumes a large and growing share of global silver supply.'
          }
        }
      ]
    },
    {
      id: 'energy_mod_7_semiconductors',
      code: '2.7',
      title: 'Semiconductor Supply Chain & Chip Geopolitics',
      description: 'Analyze the hyper-concentrated semiconductor supply chain, fab economics, and the geopolitical battle for computational supremacy.',
      lessons: [
        {
          id: 'energy_7_1_moores_law_capex',
          title: 'Moore\'s Law & Foundry Capital Intensity',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Maintaining Moore\'s Law has pushed the cost of cutting-edge logic fabs to $20B+, restricting advanced manufacturing to just three companies globally.',
          drillQuestion: {
            id: 'dq_energy_7_1',
            prompt: 'Why are there so few companies capable of manufacturing cutting-edge (e.g., 3nm) logic chips?',
            options: [
              'Lack of global demand for advanced chips',
              'The extreme capital expenditures (CapEx) required to build fabs and the deep experiential learning curve act as massive barriers to entry',
              'Silicon is running out globally',
              'Software companies prefer older nodes'
            ],
            correctIndex: 1,
            explanation: 'Modern fabs cost upwards of $20 billion, requiring continuous high-volume production to amortize. The financial risk of falling behind is so severe that most firms abandoned manufacturing to become "fabless".'
          }
        },
        {
          id: 'energy_7_2_euv_lithography',
          title: 'ASML & EUV Lithography Monopoly',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'ASML (Netherlands) holds a 100% global monopoly on Extreme Ultraviolet (EUV) lithography machines, the ultimate chokepoint for advanced chips.',
          drillQuestion: {
            id: 'dq_energy_7_2',
            prompt: 'What is the function of EUV lithography in semiconductor manufacturing?',
            options: [
              'It slices silicon ingots into wafers',
              'It tests the chips for electrical faults',
              'It uses extremely short-wavelength light to print impossibly small transistor patterns onto silicon wafers',
              'It packages the bare die into plastic casing'
            ],
            correctIndex: 2,
            explanation: 'EUV lithography uses light with a wavelength of 13.5nm to draw billions of microscopic transistors. Without ASML\'s EUV machines, printing chips at 7nm and below is physically impossible at scale.'
          }
        },
        {
          id: 'energy_7_3_tsmc_geopolitics',
          title: 'TSMC and the Silicon Shield',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Taiwan produces over 90% of the world\'s most advanced logic chips, turning TSMC into a critical asset of global macroeconomic security.',
          drillQuestion: {
            id: 'dq_energy_7_3',
            prompt: 'What is the "Silicon Shield" theory regarding Taiwan?',
            options: [
              'Taiwan covers its military bases in silicon to avoid radar',
              'The reliance of both China and the US on Taiwan\'s semiconductor fabs deters military invasion due to the global economic collapse it would trigger',
              'Taiwanese chips cannot be hacked',
              'Taiwan has a monopoly on raw silicon sand'
            ],
            correctIndex: 1,
            explanation: 'The Silicon Shield theory suggests that because a disruption to TSMC would catastrophic to the global economy (including China\'s), the fabs act as a strategic deterrent against conflict.'
          }
        },
        {
          id: 'energy_7_4_memory_vs_logic',
          title: 'Commodity Memory (DRAM/NAND) vs. Logic',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Memory chips are heavily standardized commodities subject to brutal boom-and-bust cycles, whereas logic chips are customized and design-driven.',
          drillQuestion: {
            id: 'dq_energy_7_4',
            prompt: 'Why is the DRAM memory market characterized by intense boom-and-bust cycles?',
            options: [
              'Memory degrades rapidly over time',
              'DRAM is a standardized commodity; when demand rises, producers overbuild capacity, leading to eventual oversupply and price crashes',
              'Logic chips frequently replace memory chips',
              'It relies entirely on copper prices'
            ],
            correctIndex: 1,
            explanation: 'Because memory chips from different manufacturers are essentially interchangeable commodities, price is dictated purely by supply and demand. Fabs take years to build, so capacity expansions often overshoot demand.'
          }
        },
        {
          id: 'energy_7_5_chip_act_subsidies',
          title: 'Industrial Policy: The CHIPS Act',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Western nations are using massive subsidies to "onshore" fabs, prioritizing supply chain resilience over strict economic efficiency.',
          drillQuestion: {
            id: 'dq_energy_7_5',
            prompt: 'What economic trade-off is typically accepted when a government aggressively subsidizes the "onshoring" of semiconductor fabs?',
            options: [
              'Higher operational costs and lower capital efficiency in exchange for geopolitical supply chain security',
              'Lower global inflation',
              'Decreased demand for software engineers',
              'Cheaper consumer electronics'
            ],
            correctIndex: 0,
            explanation: 'Building fabs in regions like the US or EU is fundamentally more expensive than in East Asia due to labor, construction, and ecosystem costs. Subsidies bridge this gap, paying a premium for security.'
          }
        }
      ]
    },
    {
      id: 'energy_mod_8_water_agri',
      code: '2.8',
      title: 'Water Security, Food Commodities & Agribusiness',
      description: 'Examine the nexus of water rights, fertilizer inputs, and the macroeconomics of global food supply.',
      lessons: [
        {
          id: 'energy_8_1_virtual_water',
          title: 'Virtual Water Trade & Agriculture',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Exporting water-intensive crops (like alfalfa or almonds) from arid regions effectively acts as a mass export of regional water resources.',
          drillQuestion: {
            id: 'dq_energy_8_1',
            prompt: 'In resource economics, what is "virtual water"?',
            options: [
              'Water created through hydrogen combustion',
              'Water rights traded on blockchain exchanges',
              'The hidden volume of water required to produce, process, and transport a commodity or product',
              'Desalinated ocean water'
            ],
            correctIndex: 2,
            explanation: 'Virtual water refers to the embedded water footprint. For example, exporting a ton of beef effectively exports the millions of liters of water used to grow the feed for the cattle.'
          }
        },
        {
          id: 'energy_8_2_haber_bosch',
          title: 'Haber-Bosch & Nitrogen Fertilizers',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Global food production relies absolutely on synthetic nitrogen fertilizer, which inextricably links food prices to natural gas prices.',
          drillQuestion: {
            id: 'dq_energy_8_2',
            prompt: 'Why are global fertilizer prices (and thus food prices) highly correlated with natural gas prices?',
            options: [
              'Tractors run on natural gas',
              'The Haber-Bosch process uses natural gas (methane) as the primary feedstock to produce the hydrogen needed to synthesize ammonia (nitrogen fertilizer)',
              'Natural gas is used to dry the harvested grain',
              'Fertilizer must be shipped on LNG vessels'
            ],
            correctIndex: 1,
            explanation: 'Natural gas is not just an energy source for fertilizer plants; it is the chemical feedstock. The hydrogen stripped from methane is combined with atmospheric nitrogen to make ammonia.'
          }
        },
        {
          id: 'energy_8_3_potash_phosphates',
          title: 'Potash and Phosphate Monopolies',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Unlike nitrogen, which is synthesized from air, Potash (K) and Phosphate (P) must be mined, and reserves are highly concentrated geographically.',
          drillQuestion: {
            id: 'dq_energy_8_3',
            prompt: 'Which country controls roughly 70% of the world\'s known reserves of phosphate rock, a critical non-substitutable fertilizer ingredient?',
            options: [
              'United States',
              'Russia',
              'Morocco',
              'China'
            ],
            correctIndex: 2,
            explanation: 'Morocco (and the Western Sahara region it controls) holds massive, unmatched reserves of phosphate rock, giving it immense geopolitical leverage over global agricultural supply chains.'
          }
        },
        {
          id: 'energy_8_4_water_rights_markets',
          title: 'Water Rights and Pricing Regimes',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Water is often structurally underpriced by governments, leading to inefficient allocation and rapid depletion of aquifers.',
          drillQuestion: {
            id: 'dq_energy_8_4',
            prompt: 'What is a common economic consequence of governments pricing agricultural water significantly below its market clearing rate?',
            options: [
              'Farmers switch entirely to drought-resistant crops',
              'It encourages the over-extraction of aquifers and inefficient irrigation practices (like flood irrigation)',
              'Urban water prices plummet',
              'Desalination plants become highly profitable'
            ],
            correctIndex: 1,
            explanation: 'If a resource is artificially cheap, there is no economic incentive to conserve it. Farmers will grow water-intensive, low-value crops using inefficient methods, rapidly depleting water tables.'
          }
        },
        {
          id: 'energy_8_5_ag_futures',
          title: 'Grain Futures & Food Security',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Soft commodities (wheat, corn, soy) trade globally, where weather shocks in one hemisphere instantly cause price volatility in the other.',
          drillQuestion: {
            id: 'dq_energy_8_5',
            prompt: 'How do large food-importing nations typically use futures markets?',
            options: [
              'To speculate and cause price spikes',
              'To hedge against price volatility by locking in future purchase prices for critical staple crops',
              'To avoid paying import taxes',
              'To physically store grain at the exchange'
            ],
            correctIndex: 1,
            explanation: 'Nations or large corporations use futures to secure a guaranteed price for grains months in advance, protecting their populations or margins from sudden weather-induced price spikes.'
          }
        }
      ]
    },
    {
      id: 'energy_mod_9_policy_esg',
      code: '2.9',
      title: 'Energy Policy, Regulation & ESG Frameworks',
      description: 'Navigate the complex intersection of government policy, capital allocation, and environmental, social, and governance metrics.',
      lessons: [
        {
          id: 'energy_9_1_esg_capital_flows',
          title: 'ESG Mandates & Capital Starvation',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Strict ESG mandates can systematically starve traditional fossil fuel sectors of capital, leading to structural underinvestment and supply crunches.',
          drillQuestion: {
            id: 'dq_energy_9_1',
            prompt: 'If institutional investors broadly refuse to fund fossil fuel projects due to ESG mandates, what is the likely macroeconomic outcome in the medium term?',
            options: [
              'Immediate widespread adoption of fusion',
              'Supply of traditional energy falls faster than demand, leading to sustained price spikes and volatility',
              'Oil companies instantly convert to solar farms',
              'Energy prices drop to zero'
            ],
            correctIndex: 1,
            explanation: 'If demand for oil and gas remains steady but new capital investment is restricted, the natural decline rates of existing wells will cause supply shortages, driving up prices.'
          }
        },
        {
          id: 'energy_9_2_ira_subsidies',
          title: 'The US Inflation Reduction Act (IRA)',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'The IRA shifted climate policy from "sticks" (carbon taxes) to "carrots" (massive, uncapped tax credits for clean energy deployment).',
          drillQuestion: {
            id: 'dq_energy_9_2',
            prompt: 'What makes the tax credits in the US Inflation Reduction Act (IRA) uniquely powerful for energy developers?',
            options: [
              'They must be repaid with interest',
              'They are only available for coal plants',
              'Many are "uncapped," meaning if a project qualifies, the government must provide the credit regardless of total budget impact',
              'They replace all state-level taxes'
            ],
            correctIndex: 2,
            explanation: 'Unlike typical grants with a fixed budget, many IRA tax credits (like production tax credits) are uncapped. If you produce the green energy, you get the credit, providing immense certainty for long-term investments.'
          }
        },
        {
          id: 'energy_9_3_grid_interconnection_queues',
          title: 'Grid Permitting & Interconnection Queues',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'The biggest bottleneck for renewable energy is not technology or cost, but the years-long bureaucratic backlog to connect to the grid.',
          drillQuestion: {
            id: 'dq_energy_9_3',
            prompt: 'Why are hundreds of gigawatts of funded, cheap solar and wind projects currently stalled in the US and Europe?',
            options: [
              'Lack of sunshine and wind',
              'A shortage of available land',
              'Massive backlogs in the interconnection queues and lack of transmission capacity to carry the power',
              'OPEC interference'
            ],
            correctIndex: 2,
            explanation: 'Grids were not built to handle thousands of small, distributed power plants. Grid operators are overwhelmed with studies to ensure new projects won\'t destabilize the network, creating massive delays.'
          }
        },
        {
          id: 'energy_9_4_taxonomy_regulation',
          title: 'EU Green Taxonomy',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'The EU Taxonomy is a strict classification system defining exactly what economic activities can be legally marketed as "sustainable." ',
          drillQuestion: {
            id: 'dq_energy_9_4',
            prompt: 'Why did the inclusion of Nuclear and Natural Gas in the EU Green Taxonomy cause immense controversy?',
            options: [
              'Because they are renewable sources',
              'It allowed them to access ESG-labeled investment capital, angering purists who argue they produce waste or emissions',
              'It made them illegal to use in Europe',
              'It forced all cars to run on gas'
            ],
            correctIndex: 1,
            explanation: 'Including them as "transitional" sustainable activities allowed nuclear and gas projects to access vast pools of green financing, which climate activists argued was greenwashing.'
          }
        },
        {
          id: 'energy_9_5_critical_minerals_policy',
          title: 'Critical Minerals Security Policies',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Governments are forming "friend-shoring" alliances to secure battery metals, offering premiums for minerals mined and processed in allied nations.',
          drillQuestion: {
            id: 'dq_energy_9_5',
            prompt: 'What is the economic goal of "friend-shoring" critical mineral supply chains?',
            options: [
              'To find the absolute cheapest source of minerals globally',
              'To build supply chains exclusively among allied nations, prioritizing security and avoiding geopolitical adversaries, even if it costs more',
              'To mine asteroids',
              'To share mineral wealth equally among all nations'
            ],
            correctIndex: 1,
            explanation: 'Friend-shoring shifts the supply chain logic from pure cost-efficiency to geopolitical resilience, accepting higher costs to avoid dependency on rivals (like China) for critical inputs.'
          }
        }
      ]
    },
    {
      id: 'energy_mod_10_future_frontiers',
      code: '2.10',
      title: 'Nuclear Fusion Economics & Next-Gen Energy Sources',
      description: 'Look past current technologies to the economic frameworks of deep geothermal, advanced fission, space-based solar, and commercial fusion.',
      lessons: [
        {
          id: 'energy_10_1_deep_geothermal',
          title: 'Next-Generation Deep Geothermal',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Using fracking technology from the oil industry, Enhanced Geothermal Systems (EGS) unlock firm, zero-carbon baseload power anywhere on Earth.',
          drillQuestion: {
            id: 'dq_energy_10_1',
            prompt: 'How does Enhanced Geothermal (EGS) differ from traditional geothermal energy?',
            options: [
              'EGS uses magma directly',
              'Traditional geothermal requires natural hot springs; EGS drills deep into dry hot rock and fractures it to circulate water, making it deployable almost anywhere',
              'EGS is intermittent like solar',
              'EGS only works near active volcanoes'
            ],
            correctIndex: 1,
            explanation: 'Traditional geothermal is geographically limited to tectonic hot spots with natural underground aquifers. EGS artificially creates the reservoir by fracturing deep hot rock, vastly expanding its potential footprint.'
          }
        },
        {
          id: 'energy_10_2_space_solar_power',
          title: 'Space-Based Solar Power Economics',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Space-based solar promises 24/7 power beamed via microwaves, but is entirely contingent on drastic reductions in orbital launch costs.',
          drillQuestion: {
            id: 'dq_energy_10_2',
            prompt: 'What is the primary physical advantage of a solar farm located in geostationary orbit compared to one on Earth?',
            options: [
              'It can be built using extraterrestrial materials',
              'It experiences no nighttime or weather interference, providing continuous baseline power',
              'The solar panels are cheaper in space',
              'It uses fusion instead of fission'
            ],
            correctIndex: 1,
            explanation: 'In orbit, a solar array is unobstructed by the atmosphere and does not experience night (mostly), allowing it to generate steady, predictable baseload power unlike intermittent terrestrial solar.'
          }
        },
        {
          id: 'energy_10_3_advanced_fission_reactors',
          title: 'Gen IV Fission: Molten Salt & Fast Reactors',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Gen IV reactors use coolants like liquid sodium or molten salt to operate at high temperatures and low pressures, drastically improving safety and efficiency.',
          drillQuestion: {
            id: 'dq_energy_10_3',
            prompt: 'Why do Molten Salt Reactors (MSRs) operate at atmospheric pressure, and why is this an economic advantage?',
            options: [
              'Salt is cheaper than water',
              'Water isn\'t used as a coolant; salt remains liquid at very high temperatures without vaporizing, eliminating the need for massively expensive high-pressure containment domes',
              'They are built underwater',
              'They produce less electricity'
            ],
            correctIndex: 1,
            explanation: 'Traditional water-cooled reactors operate at immense pressure to keep water liquid at high heat, requiring thick, expensive steel and concrete containment. MSRs don\'t boil, slashing containment capital costs.'
          }
        },
        {
          id: 'energy_10_4_fusion_startups',
          title: 'The Commercial Fusion Landscape',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Private fusion startups are pursuing diverse pathways (Tokamaks, Stellarators, Laser Inertial) aiming for smaller, cheaper reactors than massive government projects like ITER.',
          drillQuestion: {
            id: 'dq_energy_10_4',
            prompt: 'What recent technological breakthrough has significantly accelerated the timeline for compact Tokamak fusion reactors?',
            options: [
              'The invention of the steam engine',
              'High-Temperature Superconducting (HTS) tape, which allows for vastly stronger magnetic confinement fields in a much smaller reactor volume',
              'Discovery of a new element',
              'Cold fusion in water'
            ],
            correctIndex: 1,
            explanation: 'HTS magnets can generate significantly stronger magnetic fields than traditional superconductors. Stronger fields confine the plasma much more efficiently, allowing the reactor to be scaled down in size and cost.'
          }
        },
        {
          id: 'energy_10_5_energy_return_eroi',
          title: 'Energy Return on Investment (EROI)',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'EROI measures how much energy is generated relative to the energy spent to acquire it; a high EROI is fundamentally required to sustain complex civilization.',
          formula: 'EROI = Energy_Returned / Energy_Invested',
          drillQuestion: {
            id: 'dq_energy_10_5',
            prompt: 'If a society relies on an energy source with an extremely low EROI (e.g., 2:1), what happens to its economy?',
            options: [
              'It experiences rapid economic growth',
              'Most of the society\'s labor and capital must be dedicated solely to acquiring energy, leaving little surplus for other activities like healthcare, education, or tech',
              'Energy becomes free',
              'Taxes drop to zero'
            ],
            correctIndex: 1,
            explanation: 'EROI dictates the "surplus" energy available to a society. Historically, humanity flourished when fossil fuels provided massive EROIs (e.g., 50:1), allowing people to specialize in non-energy-gathering professions.'
          }
        },
        {
          id: 'energy_10_6_kardashev_scale',
          title: 'The Kardashev Scale & Macro-Energy Horizons',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'The ultimate trajectory of global economics is defined by total energy harness; moving towards a Type I civilization requires an order-of-magnitude leap in dispatchable power.',
          drillQuestion: {
            id: 'dq_energy_10_6',
            prompt: 'According to the Kardashev Scale, what defines a "Type I" civilization?',
            options: [
              'The ability to harness all the energy of its host star',
              'The ability to harness all the energy available on its home planet',
              'The invention of the wheel',
              'The complete elimination of all energy use'
            ],
            correctIndex: 1,
            explanation: 'A Type I civilization can capture and utilize all the energy reaching its home planet from its parent star, roughly a million times more energy than Earth currently consumes.'
          }
        }
      ]
    }
  ]
};


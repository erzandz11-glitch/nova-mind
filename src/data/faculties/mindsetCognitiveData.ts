import { FrontierFaculty } from '../../types';

export const MINDSET_COGNITIVE_FACULTY: FrontierFaculty = {
  id: 'mindset_cognitive',
  name: 'Faculty of High-Order Mindset & Cognitive Warfare',
  shortTitle: 'Mindset & Cognitive',
  iconName: 'Brain',
  emoji: '🧠',
  themeColor: 'violet',
  accentHex: '#8b5cf6',
  glowClass: 'shadow-[0_0_35px_rgba(139,92,246,0.25)]',
  borderClass: 'border-violet-500/30 hover:border-violet-400/60',
  bgLightClass: 'bg-violet-500/10 text-violet-400',
  badgeClass: 'bg-violet-500/10 text-violet-300 border border-violet-500/30',
  headline: 'Neuroplasticity, Asymmetric Game Theory & Antifragile Mental Operating Systems',
  description: 'Master extreme cognitive resilience, stoic rationality, first-principles deduction, and sovereign psychological independence.',
  difficulty: 'Elite Sovereign',
  simulatorName: 'Cognitive Stress Test & Decision Matrix',
  simulatorTag: 'Neural Resilience Arena',
  estimatedHours: 130,
  totalXp: 4000,
  completionPercent: 0,
  drillNodes: [],
  modules: [
    {
      id: 'mod_mindset_1',
      code: '4.1',
title: 'Stoic Decision Matrix Under Crisis',
      description: 'Mastering emotional regulation and objective action in high-stakes environments.',
      lessons: [
        {
          id: 'mc_1_1',
          title: 'The Dichotomy of Control in Extreme Contexts',
          duration: '20 min',
          durationSeconds: 1200,
          completed: false,
          keyTakeaway: 'Focus absolute cognitive energy solely on variables you can manipulate; treat everything else as environmental noise.',
          drillQuestion: {
            id: 'dq_mc_1_1',
            prompt: 'In a sudden market crash affecting your portfolio, which action aligns with the Dichotomy of Control?',
            options: [
              'Obsessively monitoring the news to predict the bottom.',
              'Blaming institutional investors for market manipulation.',
              'Re-evaluating your asset allocation and executing pre-planned stop-losses.',
              'Waiting paralyzed in hopes that the market will quickly rebound.'
            ],
            correctIndex: 2,
            explanation: 'Re-evaluating and executing a plan focuses on your own actions and decisions, which are entirely within your control.'
          }
        },
        {
          id: 'mc_1_2',
          title: 'Premeditatio Malorum: Stress-Testing Reality',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Systematically visualize worst-case scenarios to neutralize emotional shock and engineer robust contingency plans.',
          drillQuestion: {
            id: 'dq_mc_1_2',
            prompt: 'What is the primary psychological benefit of Premeditatio Malorum?',
            options: [
              'It guarantees that bad things will never happen.',
              'It makes you inherently pessimistic and risk-averse.',
              'It reduces the cognitive shock of adverse events by pre-processing the emotional response.',
              'It aligns cosmic energy to prevent disaster through negative visualization.'
            ],
            correctIndex: 2,
            explanation: 'Premeditatio Malorum (premeditation of evils) prepares the mind to face adversity calmly by having already simulated the emotional response and tactical contingency.'
          }
        },
        {
          id: 'mc_1_3',
          title: 'Amor Fati: Weaponizing Adversity',
          duration: '20 min',
          durationSeconds: 1200,
          completed: false,
          keyTakeaway: 'Do not merely tolerate chaos; actively embrace it as the necessary fuel for your evolution.',
          drillQuestion: {
            id: 'dq_mc_1_3',
            prompt: 'How does Amor Fati differ from passive acceptance?',
            options: [
              'Passive acceptance expects things to improve; Amor Fati expects them to worsen.',
              'Amor Fati actively loves and leverages fate as an opportunity for growth, rather than just surviving it.',
              'Amor Fati is only applicable in minor inconveniences, not true tragedies.',
              'There is no difference; they both mean giving up control.'
            ],
            correctIndex: 1,
            explanation: 'Amor Fati translates to a love of fate—meaning every obstacle is embraced enthusiastically as a chance to practice virtue and strength.'
          }
        },
        {
          id: 'mc_1_4',
          title: 'Apatheia: The Architecture of Objective Judgement',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Strip events of their emotional framing; view facts mathematically to make sovereign decisions.',
          drillQuestion: {
            id: 'dq_mc_1_4',
            prompt: 'In Stoicism, what does Apatheia refer to?',
            options: [
              'A state of clinical depression and lethargy.',
              'Freedom from destructive passions and emotional turbulence.',
              'A complete lack of empathy for others.',
              'The inability to feel joy or happiness.'
            ],
            correctIndex: 1,
            explanation: 'Apatheia is the desired state of being free from irrational emotions (passions) that cloud objective judgment, not a lack of feeling.'
          }
        },
        {
          id: 'mc_1_5',
          title: 'The View from Above: Macro-Perspective Alignment',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Zoom out to a cosmic scale to diminish the perceived magnitude of current crises, regaining tactical clarity.',
          drillQuestion: {
            id: 'dq_mc_1_5',
            prompt: 'When applying "The View from Above", what cognitive shift occurs?',
            options: [
              'Hyper-focusing on the micro-details of the problem.',
              'Elevating your ego above your peers.',
              'Contextualizing immediate problems within the vastness of time and space to reduce panic.',
              'Ignoring the problem entirely because nothing matters.'
            ],
            correctIndex: 2,
            explanation: 'This technique re-frames your struggle by zooming out, proving that your immediate crisis is just a tiny blip, which instantly reduces anxiety.'
          }
        }
      ]
    },
    {
      id: 'mod_mindset_2',
      code: '4.2',
title: 'Neuroplasticity & Deep Flow States',
      description: 'Engineering the biological foundations for hyper-focus and rapid skill acquisition.',
      lessons: [
        {
          id: 'mc_2_1',
          title: 'The Neuroscience of Myelination',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Deep, deliberate practice wraps neural circuits in myelin, permanently upgrading execution speed and precision.',
          drillQuestion: {
            id: 'dq_mc_2_1',
            prompt: 'How does myelin improve cognitive and physical performance?',
            options: [
              'It creates new neurons in the brain stem.',
              'It acts as electrical insulation for axons, increasing the speed and efficiency of neural signals.',
              'It floods the brain with dopamine during tasks.',
              'It deletes old memories to make room for new ones.'
            ],
            correctIndex: 1,
            explanation: 'Myelin is a fatty layer that insulates axons, significantly accelerating the transmission of electrical signals in the neural pathways utilized during practice.'
          }
        },
        {
          id: 'mc_2_2',
          title: 'Triggers of the Flow State',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Flow requires a precise balance: the challenge must sit exactly at the upper edge of your current baseline competence.',
          formula: 'Flow = Challenge (High) ∩ Skill (High)',
          drillQuestion: {
            id: 'dq_mc_2_2',
            prompt: 'According to Mihaly Csikszentmihalyi, when does anxiety occur instead of flow?',
            options: [
              'When the skill level is high but the challenge is low.',
              'When both skill level and challenge are extremely low.',
              'When the challenge significantly exceeds the current skill level.',
              'When the environment is too quiet.'
            ],
            correctIndex: 2,
            explanation: 'Anxiety happens when the task is too difficult for your current skills. Flow happens when high skill meets a correspondingly high challenge.'
          }
        },
        {
          id: 'mc_2_3',
          title: 'Autonomic Regulation: Box Breathing & HRV',
          duration: '20 min',
          durationSeconds: 1200,
          completed: false,
          keyTakeaway: 'Control your breath to manually override the sympathetic nervous system, lowering cortisol and restoring cognitive bandwidth.',
          drillQuestion: {
            id: 'dq_mc_2_3',
            prompt: 'What physiological shift is primarily triggered by slow, controlled exhales (like in box breathing)?',
            options: [
              'Spike in adrenaline.',
              'Activation of the parasympathetic (rest and digest) nervous system.',
              'Activation of the sympathetic (fight or flight) nervous system.',
              'Immediate depletion of ATP in the muscles.'
            ],
            correctIndex: 1,
            explanation: 'Controlled breathing, specifically prolonged exhales, stimulates the vagus nerve and activates the parasympathetic nervous system, calming the body.'
          }
        },
        {
          id: 'mc_2_4',
          title: 'Dopamine Detox & Baseline Reset',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Starving the brain of cheap, unearned dopamine restores receptor sensitivity, making hard work feel intrinsically rewarding.',
          drillQuestion: {
            id: 'dq_mc_2_4',
            prompt: 'What is the goal of downregulating dopamine receptors through a "detox"?',
            options: [
              'To eliminate dopamine from the brain entirely.',
              'To lower your baseline tolerance so subtle, delayed rewards (like finishing a hard project) become motivating again.',
              'To increase the amount of dopamine released when scrolling social media.',
              'To induce a state of permanent lethargy.'
            ],
            correctIndex: 1,
            explanation: 'By removing supernormal stimuli, your brain\'s dopamine receptors reset, making normal, effortful tasks engaging and rewarding once more.'
          }
        },
        {
          id: 'mc_2_5',
          title: 'Ultradian Rhythms & Cognitive Sprints',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Align deep work with biological 90-minute ultradian cycles, followed by mandatory 20-minute neurological recovery protocols.',
          drillQuestion: {
            id: 'dq_mc_2_5',
            prompt: 'Why is pushing past a 90-minute deep work block without a break often counterproductive?',
            options: [
              'Because the brain runs out of glucose in exactly 90 minutes.',
              'It violates natural ultradian rhythms, leading to diminished returns, brain fog, and extended recovery times later.',
              'The Pomodoro technique forbids it.',
              'You will permanently damage your myelin sheaths.'
            ],
            correctIndex: 1,
            explanation: 'Human energy naturally oscillates in 90-120 minute cycles. Ignoring the trough phase leads to rapid cognitive decline and burnout for the rest of the day.'
          }
        }
      ]
    },
    {
      id: 'mod_mindset_3',
      code: '4.3',
title: 'Game Theory & Asymmetric Negotiation',
      description: 'Strategic interaction, leverage, and maximizing outcomes in competitive environments.',
      lessons: [
        {
          id: 'mc_3_1',
          title: 'Non-Zero-Sum Thinking in Business',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Seek synergistic outcomes where the pie is expanded, rather than zero-sum battles over a fixed pie.',
          formula: 'U(A) + U(B) > 0 (Positive-Sum Game)',
          drillQuestion: {
            id: 'dq_mc_3_1',
            prompt: 'Which of the following is a classic example of a positive-sum (non-zero-sum) interaction?',
            options: [
              'Two players splitting a $100 bill.',
              'A poker game where one player\'s winnings exactly equal the others\' losses.',
              'A trade where Country A trades surplus wheat for Country B\'s surplus steel, benefiting both economies.',
              'A tennis match.'
            ],
            correctIndex: 2,
            explanation: 'In trade based on comparative advantage, both parties gain value they didn\'t previously have, expanding the total utility.'
          }
        },
        {
          id: 'mc_3_2',
          title: 'BATNA & The Power of Walking Away',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Your absolute negotiation power is derived mathematically from the quality of your Best Alternative To a Negotiated Agreement.',
          drillQuestion: {
            id: 'dq_mc_3_2',
            prompt: 'If your BATNA in a job negotiation is highly lucrative, how does it affect your strategy?',
            options: [
              'It makes you desperate to accept their first offer.',
              'It gives you the leverage to make aggressive counter-offers because you are unaffected if the deal falls through.',
              'It forces you to compromise on your core values.',
              'It is irrelevant once you sit down at the table.'
            ],
            correctIndex: 1,
            explanation: 'A strong BATNA means you do not *need* this specific deal, giving you the supreme leverage of walking away if your terms aren\'t met.'
          }
        },
        {
          id: 'mc_3_3',
          title: 'The Prisoner\'s Dilemma & Trust Architecture',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Iterated games rely on reputation and reciprocity (Tit-for-Tat) to enforce cooperation and punish defection.',
          drillQuestion: {
            id: 'dq_mc_3_3',
            prompt: 'In an iterated Prisoner\'s Dilemma, what is the most robust strategy according to Axelrod\'s tournaments?',
            options: [
              'Always defect to maximize immediate gain.',
              'Always cooperate, no matter what.',
              'Tit-for-Tat: Cooperate first, then copy your opponent\'s last move.',
              'Randomize your choices to confuse the opponent.'
            ],
            correctIndex: 2,
            explanation: 'Tit-for-Tat is highly effective because it is nice (never defects first), retaliatory (punishes defection immediately), and forgiving (returns to cooperation if the opponent does).'
          }
        },
        {
          id: 'mc_3_4',
          title: 'Information Asymmetry & Signaling',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Use costly signaling to prove credibility when the counterparty lacks visibility into your true underlying value.',
          drillQuestion: {
            id: 'dq_mc_3_4',
            prompt: 'What constitutes a "costly signal" in game theory?',
            options: [
              'Telling someone you are very smart.',
              'An action that is easy for anyone to fake.',
              'An action that requires significant resources (time, money, risk) to perform, thereby proving authentic commitment or quality.',
              'Sending an expensive invoice.'
            ],
            correctIndex: 2,
            explanation: 'Costly signals cannot be easily faked by low-quality participants because the cost of faking it is too high, making the signal a credible proof of value.'
          }
        },
        {
          id: 'mc_3_5',
          title: 'Framing, Anchoring & Tactical Empathy',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Control the cognitive baseline of the negotiation by setting the initial anchor and framing the terms of discussion.',
          drillQuestion: {
            id: 'dq_mc_3_5',
            prompt: 'How does an "anchor" work in price negotiation?',
            options: [
              'It guarantees you will get exactly the price you ask for.',
              'It establishes a cognitive baseline; all subsequent counter-offers unconsciously adjust from that initial number.',
              'It physically forces the other party to remain at the table.',
              'It indicates that you are unwilling to negotiate further.'
            ],
            correctIndex: 1,
            explanation: 'Anchoring is a cognitive bias where human beings rely too heavily on the first piece of information offered. It sets the psychological bounds of the negotiation.'
          }
        }
      ]
    },
    {
      id: 'mod_mindset_4',
      code: '4.4',
title: 'Antifragility & Sovereign Immunity',
      description: 'Designing systems and mindsets that do not just survive volatility, but grow stronger from it.',
      lessons: [
        {
          id: 'mc_4_1',
          title: 'Fragile, Robust, and Antifragile Systems',
          duration: '20 min',
          durationSeconds: 1200,
          completed: false,
          keyTakeaway: 'Fragile breaks from chaos; Robust withstands chaos; Antifragile actively benefits and innovates from chaos.',
          drillQuestion: {
            id: 'dq_mc_4_1',
            prompt: 'Which biological system is a perfect example of antifragility?',
            options: [
              'A glass cup dropping on the floor.',
              'A steel beam supporting a bridge.',
              'The human muscular system under weight training (micro-tears leading to hypertrophy).',
              'A dead tree in the wind.'
            ],
            correctIndex: 2,
            explanation: 'Muscles break down under the stress of lifting weights but rebuild stronger than before to handle future stress—the definition of antifragility.'
          }
        },
        {
          id: 'mc_4_2',
          title: 'The Barbell Strategy for Risk Management',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Combine hyper-conservatism with hyper-aggression: protect 90% against ruin, and expose 10% to massive asymmetric upside.',
          formula: 'Barbell = (90% Zero-Risk Asset) + (10% High-Risk/High-Reward Asset)',
          drillQuestion: {
            id: 'dq_mc_4_2',
            prompt: 'Why avoid the "middle" (medium-risk) in the Barbell Strategy?',
            options: [
              'Because medium risk guarantees medium returns.',
              'Because medium risk often masks hidden tail risks (black swans) that can wipe you out, while capping your upside.',
              'Because medium risk is too boring.',
              'Because it takes too much time to manage.'
            ],
            correctIndex: 1,
            explanation: 'Medium-risk assets often carry unseen catastrophic risks without offering the unlimited upside of truly speculative bets, leading to the worst of both worlds during a crisis.'
          }
        },
        {
          id: 'mc_4_3',
          title: 'Via Negativa: Addition through Subtraction',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Improve your life, health, and business primarily by removing what is toxic, rather than adding new complexities.',
          drillQuestion: {
            id: 'dq_mc_4_3',
            prompt: 'An example of Via Negativa in business strategy would be:',
            options: [
              'Hiring five new consultants to find inefficiencies.',
              'Buying new software to track employee metrics.',
              'Firing the most toxic client who causes 80% of the team\'s stress.',
              'Expanding into three new untested markets.'
            ],
            correctIndex: 2,
            explanation: 'Via Negativa focuses on improvement by subtraction. Removing a massive negative (the toxic client) is often easier and more effective than adding a positive.'
          }
        },
        {
          id: 'mc_4_4',
          title: 'Skin in the Game & Alignment of Incentives',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Never trust advice from someone who does not suffer a penalty if they are wrong.',
          drillQuestion: {
            id: 'dq_mc_4_4',
            prompt: 'What happens to a system when decision-makers lack "Skin in the Game"?',
            options: [
              'It becomes perfectly objective and logical.',
              'Risks are transferred to others, leading to reckless decisions and systemic fragility.',
              'Profitability always goes up.',
              'Incentives are naturally aligned.'
            ],
            correctIndex: 1,
            explanation: 'Without personal downside risk, actors will take asymmetric bets where they keep the upside but pass the catastrophic downside (blowup) to the system or the public.'
          }
        },
        {
          id: 'mc_4_5',
          title: 'Embracing Volatility: The Convexity Mindset',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Position yourself in situations with bounded downside and theoretically unbounded upside (convexity).',
          drillQuestion: {
            id: 'dq_mc_4_5',
            prompt: 'A convex payoff curve means:',
            options: [
              'You can lose an infinite amount but only gain a little.',
              'Your losses are strictly capped, but your potential gains accelerate non-linearly.',
              'You will always break exactly even.',
              'Risk and reward are perfectly linear.'
            ],
            correctIndex: 1,
            explanation: 'Convexity implies asymmetric returns in your favor. If you are wrong, you lose a small defined amount. If you are right, the payoff scales exponentially.'
          }
        }
      ]
    },
    {
      id: 'mod_mindset_5',
      code: '4.5',
title: 'First Principles Thinking & Mental Models Library',
      description: 'Deconstruct reality to its fundamental axioms and reconstruct superior solutions.',
      lessons: [
        {
          id: 'mc_5_1',
          title: 'Reasoning from First Principles vs. Analogy',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Do not iterate on how things are currently done (analogy); boil the problem down to undisputed physical or mathematical truths and build up.',
          drillQuestion: {
            id: 'dq_mc_5_1',
            prompt: 'Which of the following describes reasoning by First Principles?',
            options: [
              '"Our competitor launched an AI feature, so we must add an AI feature."',
              '"Batteries are expensive because they always have been. We just have to accept it."',
              '"What are the fundamental material constituents of a battery? What is their spot market value? Can we combine them ourselves cheaper?"',
              '"Let\'s copy the leading brand\'s pricing model."'
            ],
            correctIndex: 2,
            explanation: 'Breaking a battery down into raw material costs and questioning the manufacturing process ignores the status quo (analogy) and relies on fundamental facts.'
          }
        },
        {
          id: 'mc_5_2',
          title: 'Inversion: Solving Forwards by Thinking Backwards',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Instead of asking how to achieve a goal, ask how to guarantee failure, then ruthlessly avoid those failure points.',
          drillQuestion: {
            id: 'dq_mc_5_2',
            prompt: 'Applying Inversion to the goal of "building a great product" would involve asking:',
            options: [
              '"What features do users love the most?"',
              '"How do we hire the best engineers?"',
              '"What are all the things that would guarantee this product is a complete disaster that nobody wants to use?"',
              '"How can we raise more venture capital?"'
            ],
            correctIndex: 2,
            explanation: 'Inversion flips the problem. By identifying everything that guarantees failure, you create a roadmap of traps to avoid, often leading to success by default.'
          }
        },
        {
          id: 'mc_5_3',
          title: 'Second-Order Thinking: The Law of Unintended Consequences',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'First-order thinking solves the immediate problem; second-order thinking asks "And then what?" to anticipate the cascading systemic effects.',
          drillQuestion: {
            id: 'dq_mc_5_3',
            prompt: 'A government puts a bounty on dead cobras to reduce the population. What is the likely Second-Order effect?',
            options: [
              'The cobra population drops to zero immediately.',
              'People begin breeding cobras to kill them and collect the bounty, ultimately increasing the cobra population.',
              'Cobras learn to hide better.',
              'The bounty is ignored by the public.'
            ],
            correctIndex: 1,
            explanation: 'This is the "Cobra Effect." First-order thinking assumes a bounty reduces snakes. Second-order thinking realizes humans will exploit the incentive, worsening the problem.'
          }
        },
        {
          id: 'mc_5_4',
          title: 'Occam\'s Razor & Parsimony',
          duration: '20 min',
          durationSeconds: 1200,
          completed: false,
          keyTakeaway: 'When confronted with multiple hypotheses that explain the data, the one requiring the fewest assumptions is statistically most likely to be true.',
          drillQuestion: {
            id: 'dq_mc_5_4',
            prompt: 'How is Occam\'s Razor practically applied to debugging a complex system failure?',
            options: [
              'Assume a malicious state-sponsored hacker orchestrated a sophisticated attack.',
              'Look for the most complex combination of unlikely variables.',
              'Test the simplest explanation first (e.g., a cable is unplugged or a typo in a config file).',
              'Rewrite the entire codebase from scratch.'
            ],
            correctIndex: 2,
            explanation: 'Occam\'s Razor dictates that you should not multiply entities beyond necessity. Always rule out the simplest, most common failures before assuming complex conspiracies.'
          }
        },
        {
          id: 'mc_5_5',
          title: 'Pareto Principle (80/20 Rule) Optimization',
          duration: '20 min',
          durationSeconds: 1200,
          completed: false,
          keyTakeaway: '80% of outputs come from 20% of inputs. Identify and ruthlessly scale the vital few; eliminate or delegate the trivial many.',
          drillQuestion: {
            id: 'dq_mc_5_5',
            prompt: 'If 80% of your revenue comes from 20% of your clients, how do you apply the Pareto Principle?',
            options: [
              'Spend equal time on all clients to be fair.',
              'Fire the 20% to diversify your base.',
              'Analyze the 20% to understand why they are profitable, double down on acquiring more like them, and deprioritize the bottom 80%.',
              'Lower your prices for the bottom 80% to encourage them to buy more.'
            ],
            correctIndex: 2,
            explanation: 'Optimization requires asymmetric effort allocation: maximize resources dedicated to the high-yield minority.'
          }
        },
        {
          id: 'mc_5_6',
          title: 'Circle of Competence & Intellectual Honesty',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Know exactly the perimeter of your actual knowledge. Operate fiercely within it; remain silent and learn when outside of it.',
          drillQuestion: {
            id: 'dq_mc_5_6',
            prompt: 'What is the danger of operating outside your Circle of Competence?',
            options: [
              'You might accidentally invent something brilliant.',
              'You succumb to the Dunning-Kruger effect, confidently making catastrophic errors because you don\'t know what you don\'t know.',
              'People will respect your bravery.',
              'There is no danger if you are naturally intelligent.'
            ],
            correctIndex: 1,
            explanation: 'Operating outside your competence without humility guarantees blind spots. Intelligence doesn\'t substitute for specific domain expertise.'
          }
        }
      ]
    },
    {
      id: 'mod_mindset_6',
      code: '4.6',
title: 'Emotional Intelligence & Social Dynamics Mastery',
      description: 'Navigating human operating systems with precision and empathy.',
      lessons: [
        {
          id: 'mc_6_1',
          title: 'Cognitive Empathy vs. Affective Empathy',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Affective empathy feels what others feel; cognitive empathy understands how they think. Use cognitive empathy to negotiate without emotional hijacking.',
          drillQuestion: {
            id: 'dq_mc_6_1',
            prompt: 'In a hostage negotiation, why is Cognitive Empathy heavily preferred over Affective Empathy?',
            options: [
              'Affective empathy makes you care too little about the hostage taker.',
              'Cognitive empathy allows you to understand the hostage taker\'s motivations precisely without being overwhelmed by their emotional state.',
              'Cognitive empathy is basically sociopathy.',
              'Affective empathy is too mathematical.'
            ],
            correctIndex: 1,
            explanation: 'Cognitive empathy is tactical perspective-taking. If you use affective empathy in high-stakes crises, you absorb the panic and lose objectivity.'
          }
        },
        {
          id: 'mc_6_2',
          title: 'The Amygdala Hijack & Refractory Periods',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'When triggered, the primitive brain shuts down the prefrontal cortex. You must engineer physical space to wait out the chemical refractory period.',
          drillQuestion: {
            id: 'dq_mc_6_2',
            prompt: 'What is the most effective immediate response when you sense an Amygdala Hijack occurring in yourself?',
            options: [
              'Continue arguing forcefully to establish dominance.',
              'Send an angry email while you have the energy.',
              'Create a physical or temporal pause (e.g., taking a walk) to let cortisol and adrenaline flush out of your system.',
              'Suppress the emotion permanently without addressing it later.'
            ],
            correctIndex: 2,
            explanation: 'An amygdala hijack is a physiological event. You cannot logic your way out of it while flooded with adrenaline; you must create a time buffer.'
          }
        },
        {
          id: 'mc_6_3',
          title: 'Social Status Dynamics & Hierarchical Signaling',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Understand implicit status games. High status is often signaled through stillness, brief communication, and lack of reactivity.',
          drillQuestion: {
            id: 'dq_mc_6_3',
            prompt: 'Which behavior is typically a signal of high social status or authority in a meeting?',
            options: [
              'Interrupting others constantly.',
              'Speaking very fast to ensure everything is heard.',
              'Being highly reactive to every minor critique.',
              'Speaking slowly, tolerating silence comfortably, and moving deliberately.'
            ],
            correctIndex: 3,
            explanation: 'Stillness, deliberate pacing, and non-reactivity indicate that the individual feels safe, secure in their position, and unthreatened by the environment.'
          }
        },
        {
          id: 'mc_6_4',
          title: 'Radical Candor: Care Personally, Challenge Directly',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'The highest form of respect in leadership is providing clear, unvarnished feedback built upon a foundation of genuine personal care.',
          drillQuestion: {
            id: 'dq_mc_6_4',
            prompt: 'According to the Radical Candor framework, what happens when you "Challenge Directly" but fail to "Care Personally"?',
            options: [
              'Ruinous Empathy',
              'Manipulative Insincerity',
              'Obnoxious Aggression',
              'Radical Candor'
            ],
            correctIndex: 2,
            explanation: 'Challenging without showing you care is Obnoxious Aggression. It may be true, but it breeds resentment and damages psychological safety.'
          }
        },
        {
          id: 'mc_6_5',
          title: 'Mirroring & Active Labeling',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Use mirroring (repeating the last 3 words) to build involuntary rapport, and labeling ("It seems like...") to disarm negative emotions.',
          drillQuestion: {
            id: 'dq_mc_6_5',
            prompt: 'If a client angrily says, "This project is a complete mess and we are bleeding money," what is the best "Labeling" response?',
            options: [
              '"No it\'s not, let me explain why..."',
              '"It sounds like you are feeling completely overwhelmed and terrified about the budget overruns."',
              '"I am sorry you feel that way."',
              '"Well, you should have approved the initial scope."'
            ],
            correctIndex: 1,
            explanation: 'Labeling an emotion ("It sounds like...") forces the counterpart\'s brain to evaluate the label, moving energy from the emotional amygdala to the logical prefrontal cortex.'
          }
        }
      ]
    },
    {
      id: 'mod_mindset_7',
      code: '4.7',
title: 'Time Architecture: Leverage, Delegation & Deep Work',
      description: 'Moving from time-management to energy-allocation and systemic leverage.',
      lessons: [
        {
          id: 'mc_7_1',
          title: 'The Archimedes Lever: Code, Capital, Content & Labor',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Separate your time from your output. Code and media provide permissionless infinite leverage; capital and labor provide permissioned leverage.',
          drillQuestion: {
            id: 'dq_mc_7_1',
            prompt: 'Why are Code and Content (Media) considered the highest forms of leverage in the modern era?',
            options: [
              'They require managing thousands of employees.',
              'They cost millions of dollars to start.',
              'They have a zero marginal cost of reproduction and work while you sleep without needing permission.',
              'They are guaranteed to make you famous.'
            ],
            correctIndex: 2,
            explanation: 'Once software is written or a video is recorded, it can serve 1 or 1,000,000 users with virtually no additional effort or cost.'
          }
        },
        {
          id: 'mc_7_2',
          title: 'Maker vs. Manager Schedule Matrix',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Managers operate in 30-minute intervals; Makers require uninterrupted 4-hour blocks. Mixing the two destroys deep work.',
          drillQuestion: {
            id: 'dq_mc_7_2',
            prompt: 'What happens when a software engineer (Maker) has a single 30-minute meeting placed directly in the middle of their afternoon?',
            options: [
              'It provides a nice refreshing break.',
              'It destroys the entire half-day because the cognitive cost of context-switching prevents entering a flow state before or after the meeting.',
              'It increases their coding speed.',
              'It has zero impact on output.'
            ],
            correctIndex: 1,
            explanation: 'Deep technical or creative work requires long blocks to load complex context into working memory. A mid-block interruption shatters that context.'
          }
        },
        {
          id: 'mc_7_3',
          title: 'The Eisenhower Matrix & Ruthless Elimination',
          duration: '20 min',
          durationSeconds: 1200,
          completed: false,
          keyTakeaway: 'Distinguish strictly between the Urgent and the Important. Eliminate the Urgent-but-Not-Important to reclaim strategic sovereignty.',
          drillQuestion: {
            id: 'dq_mc_7_3',
            prompt: 'According to the Eisenhower Matrix, what should you do with a task that is "Urgent but Not Important" (e.g., answering a ringing phone for a minor inquiry)?',
            options: [
              'Do it immediately yourself.',
              'Delegate it or automate it.',
              'Schedule it for next year.',
              'Ignore it completely and hope it vanishes.'
            ],
            correctIndex: 1,
            explanation: 'Urgent/Not Important tasks demand attention but don\'t drive core goals. They should be delegated or handled by systems to protect your time.'
          }
        },
        {
          id: 'mc_7_4',
          title: 'Asynchronous Communication Architecture',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Synchronous meetings drain collective intelligence. Default to heavily documented, asynchronous workflows to preserve deep work.',
          drillQuestion: {
            id: 'dq_mc_7_4',
            prompt: 'Which is a hallmark of a mature Asynchronous work culture?',
            options: [
              'Expecting a reply on Slack within 5 minutes at all times.',
              'Mandatory daily 2-hour zoom standups.',
              'Writing comprehensive memos and allowing team members 24 hours to digest and respond thoughtfully.',
              'Calling people unannounced to hash out ideas.'
            ],
            correctIndex: 2,
            explanation: 'Async culture values deep thought over fast reactions. Memos provide context, and delayed responses protect Maker schedules.'
          }
        },
        {
          id: 'mc_7_5',
          title: 'The Buy-Back Principle (Valuing Your Time)',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Assign a strict hourly dollar value to your time. Brutally outsource any task that can be done for less than your hourly rate.',
          formula: 'Hourly Target = Desired Annual Income / 2000',
          drillQuestion: {
            id: 'dq_mc_7_5',
            prompt: 'If your target value is $150/hour, how should you handle an administrative task that takes 2 hours and can be outsourced for $25/hour?',
            options: [
              'Do it yourself to save the $50 out of pocket.',
              'Outsource it for $50, buying back 2 hours of your time to deploy on $150/hour activities (netting +$250 in potential value).',
              'Spend 5 hours building an AI to do it for free.',
              'Procrastinate on it until it becomes an emergency.'
            ],
            correctIndex: 1,
            explanation: 'Time is the ultimate scarce asset. Arbitraging your time (paying $25 to save $150) is the foundational mechanic of wealth and leverage.'
          }
        }
      ]
    },
    {
      id: 'mod_mindset_8',
      code: '4.8',
title: 'Persuasion, Rhetoric & High-Stakes Communication',
      description: 'The architecture of influence and the psychology of mass belief.',
      lessons: [
        {
          id: 'mc_8_1',
          title: 'Cialdini\'s 6 Weapons of Influence',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Human software has predictable exploits: Reciprocity, Commitment, Social Proof, Authority, Liking, and Scarcity.',
          drillQuestion: {
            id: 'dq_mc_8_1',
            prompt: 'A software company offers a 14-day free trial that requires credit card info. Which principle of influence are they primarily leveraging to convert you to paid?',
            options: [
              'Authority',
              'Liking',
              'Commitment and Consistency (Endowment Effect)',
              'Social Proof'
            ],
            correctIndex: 2,
            explanation: 'Once you commit to the trial and integrate it into your life, the psychological drive for consistency (and avoiding the loss of your setup) makes you likely to stay.'
          }
        },
        {
          id: 'mc_8_2',
          title: 'The Aristotelian Triad: Ethos, Pathos, Logos',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'To persuade universally, you must establish credibility (Ethos), present unassailable logic (Logos), and strike an emotional resonance (Pathos).',
          drillQuestion: {
            id: 'dq_mc_8_2',
            prompt: 'If you present flawless data and charts (Logos) but fail to persuade an audience, what is most likely missing?',
            options: [
              'More data points.',
              'A louder speaking volume.',
              'Pathos (emotional connection to *why* the data matters to them) or Ethos (trust in your character).',
              'A longer presentation time.'
            ],
            correctIndex: 2,
            explanation: 'Logic alone rarely moves humans to action. They must trust the messenger (Ethos) and feel an emotional urgency (Pathos) to change behavior.'
          }
        },
        {
          id: 'mc_8_3',
          title: 'Steel-Manning the Opposition',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Never attack a weak version of your opponent\'s argument. Construct their strongest possible case, defeat it, and win absolute intellectual dominance.',
          drillQuestion: {
            id: 'dq_mc_8_3',
            prompt: 'What is the strategic advantage of "Steel-Manning" in a debate?',
            options: [
              'It makes you look weak and agreeable.',
              'It forces your opponent into a defensive posture by insulting them.',
              'It demonstrates supreme confidence and deep understanding, neutralizing their best weapons before dismantling them.',
              'It wastes time on irrelevant points.'
            ],
            correctIndex: 2,
            explanation: 'By articulating their argument better than they can, you earn profound credibility with observers and ensure your counter-argument destroys their actual foundation.'
          }
        },
        {
          id: 'mc_8_4',
          title: 'Narrative Warfare & Myth-Making',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Humans do not act on facts; they act on stories. He who controls the narrative architecture controls the behavior of the masses.',
          drillQuestion: {
            id: 'dq_mc_8_4',
            prompt: 'Why are narratives vastly more powerful than statistics in moving markets or voters?',
            options: [
              'Because humans evolved to remember and derive meaning from tribal storytelling, not spreadsheets.',
              'Because statistics are always completely accurate.',
              'Because narratives are usually shorter.',
              'Because narratives can be easily proven by science.'
            ],
            correctIndex: 0,
            explanation: 'Our cognitive wiring evolved around the campfire. A compelling story of "heroes and villains" bypasses the analytical brain and directly triggers emotional action.'
          }
        },
        {
          id: 'mc_8_5',
          title: 'Hypnotic Language Patterns & Pacing',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Use rhythm, pacing, and embedded commands to bypass critical conscious filters and implant ideas directly into the subconscious.',
          drillQuestion: {
            id: 'dq_mc_8_5',
            prompt: 'In conversational pacing, what is the sequence "Pace, Pace, Lead"?',
            options: [
              'Walk back and forth twice, then point.',
              'State two verifiable truths about the listener\'s current experience to build undeniable agreement, then seamlessly attach the suggestion you want them to accept.',
              'Speak quickly, then slowly, then shout.',
              'Ignore them twice, then give a command.'
            ],
            correctIndex: 1,
            explanation: 'By validating undeniable realities (Pacing), the listener\'s brain drops its guard, creating a "yes-state" that makes the subsequent new idea (Leading) easily accepted.'
          }
        }
      ]
    },
    {
      id: 'mod_mindset_9',
      code: '4.9',
title: 'Decision Science Under Uncertainty (Bayesian Thinking)',
      description: 'Navigating fog-of-war using probability, expected value, and constant updating.',
      lessons: [
        {
          id: 'mc_9_1',
          title: 'Expected Value (EV) Calculation',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Never judge a decision by its singular outcome. Judge the quality of the decision by its mathematically calculated Expected Value over 1000 iterations.',
          formula: 'EV = (Probability of Win * Payoff) - (Probability of Loss * Cost)',
          drillQuestion: {
            id: 'dq_mc_9_1',
            prompt: 'An investment costs $1,000. It has a 20% chance of returning $10,000 and an 80% chance of going to zero. What is the Expected Value of taking this bet?',
            options: [
              '$0',
              '+$1,000',
              '+$2,000',
              '-$1,000'
            ],
            correctIndex: 1,
            explanation: 'EV = (0.2 * $10,000) - $1,000 cost. Wait. (0.2 * $10,000) = $2,000 expected return. $2,000 - $1,000 cost = +$1,000 expected profit. It is a highly rational bet, even though you will lose 80% of the time.'
          }
        },
        {
          id: 'mc_9_2',
          title: 'Bayesian Updating in Fog of War',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Form strong priors, but hold them loosely. Continually update your probability matrix the moment new, verified data arrives.',
          formula: 'P(A|B) = [P(B|A) * P(A)] / P(B)',
          drillQuestion: {
            id: 'dq_mc_9_2',
            prompt: 'In Bayesian thinking, what is the deadliest cognitive error?',
            options: [
              'Changing your mind too frequently.',
              'Dogmatic attachment to your Prior probability, refusing to update your belief even when faced with heavily contradicting new evidence.',
              'Using math to solve problems.',
              'Admitting you were wrong.'
            ],
            correctIndex: 1,
            explanation: 'Refusing to update priors in the face of new data turns a hypothesis into a religion, guaranteeing strategic failure in dynamic environments.'
          }
        },
        {
          id: 'mc_9_3',
          title: 'Resulting: Separating Process from Outcome',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'A good decision can have a bad outcome due to variance (luck). Do not change a winning strategy just because of a short-term unlucky draw.',
          drillQuestion: {
            id: 'dq_mc_9_3',
            prompt: 'In poker, you play a hand perfectly but lose to a 1% statistical miracle on the final card. "Resulting" would mean:',
            options: [
              'Accepting the variance and playing the same way next time.',
              'Concluding that you played poorly just because you lost the money, and changing your strategy.',
              'Calculating the exact odds of the bad beat.',
              'Congratulating the opponent.'
            ],
            correctIndex: 1,
            explanation: '"Resulting" (a term popularized by Annie Duke) is the flaw of judging the quality of a decision strictly by its outcome, rather than the quality of the process.'
          }
        },
        {
          id: 'mc_9_4',
          title: 'Asymmetric Information & Base Rates',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Before estimating your specific chances of success, always anchor to the Base Rate (the historical average success rate of everyone attempting this).',
          drillQuestion: {
            id: 'dq_mc_9_4',
            prompt: 'You believe your new restaurant has a 90% chance of success. The Base Rate for new restaurants succeeding is 20%. What cognitive bias are you exhibiting?',
            options: [
              'Imposter Syndrome',
              'Base Rate Neglect (Optimism Bias)',
              'Anchoring Bias',
              'Hindsight Bias'
            ],
            correctIndex: 1,
            explanation: 'Base Rate Neglect occurs when you ignore statistical reality in favor of personal inside-view optimism. Your starting probability must anchor at 20% before adjusting for your unique edge.'
          }
        },
        {
          id: 'mc_9_5',
          title: 'The Kelly Criterion: Optimal Bet Sizing',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Never risk ruin. Use Kelly to mathematically determine exactly what percentage of your capital to allocate to maximize compound growth without blowing up.',
          formula: 'f* = p - (q / b)',
          drillQuestion: {
            id: 'dq_mc_9_5',
            prompt: 'What happens if you consistently bet MORE than the Kelly Criterion dictates on positive expected-value bets?',
            options: [
              'You get richer faster indefinitely.',
              'Volatility will eventually compound against you, guaranteeing that your bankroll eventually drops to zero (ruin).',
              'The casino kicks you out.',
              'Nothing, it just becomes a linear return.'
            ],
            correctIndex: 1,
            explanation: 'Overbetting Kelly mathematically guarantees ruin over infinite time horizons because drawdowns (volatility drag) destroy capital faster than it can compound.'
          }
        }
      ]
    },
    {
      id: 'mod_mindset_10',
      code: '4.10',
title: 'Leadership Psychology & Team Cognitive Dynamics',
      description: 'Scaling your cognitive frameworks across human networks.',
      lessons: [
        {
          id: 'mc_10_1',
          title: 'Extreme Ownership',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'There are no bad teams, only bad leaders. The sovereign leader takes absolute responsibility for all failures down the chain of command.',
          drillQuestion: {
            id: 'dq_mc_10_1',
            prompt: 'A junior employee fundamentally misunderstands your directive and ruins a client presentation. Under Extreme Ownership, who is at fault?',
            options: [
              'The junior employee for not listening.',
              'HR for hiring them.',
              'You, the leader, for failing to explain it clearly, failing to verify their understanding, or failing to train them adequately.',
              'The client for being too demanding.'
            ],
            correctIndex: 2,
            explanation: 'Extreme Ownership dictates that the leader owns everything in their world. Blaming subordinates removes your agency to fix the system.'
          }
        },
        {
          id: 'mc_10_2',
          title: 'Psychological Safety & Idea Meritocracy',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Create environments where bad ideas can be dismantled ruthlessly without destroying the ego of the person who presented them.',
          drillQuestion: {
            id: 'dq_mc_10_2',
            prompt: 'In a true Idea Meritocracy (a la Ray Dalio), how are decisions ultimately made?',
            options: [
              'By a completely equal democratic vote.',
              'The CEO unilaterally decides everything.',
              'Through believability-weighted decision making, where the best ideas win regardless of hierarchy, but proven experts have heavier vote weights.',
              'Whoever yells the loudest wins.'
            ],
            correctIndex: 2,
            explanation: 'Idea meritocracies detach ego from ideas and weigh input based on the track record (believability) of the person offering it, not their job title.'
          }
        },
        {
          id: 'mc_10_3',
          title: 'Commander\'s Intent vs. Micromanagement',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Communicate the desired end-state and the "why" with crystal clarity. Allow autonomous execution of the "how".',
          drillQuestion: {
            id: 'dq_mc_10_3',
            prompt: 'Why is "Commander\'s Intent" vastly superior to step-by-step micromanagement in a chaotic environment?',
            options: [
              'It allows leaders to take a vacation.',
              'Because plans break on contact with reality; if the team understands the ultimate goal, they can adapt tactics on the fly without waiting for orders.',
              'It forces subordinates to fail so you can replace them.',
              'It sounds cooler.'
            ],
            correctIndex: 1,
            explanation: 'In chaos, centralized control is too slow. Decentralized execution guided by a clear unifying objective (Commander\'s Intent) allows for rapid, agile responses.'
          }
        },
        {
          id: 'mc_10_4',
          title: 'Dunbar\'s Number & Organizational Scaling',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Human brains can only maintain ~150 stable social relationships. Beyond this, culture breaks down unless rigid processes and myths are instituted.',
          drillQuestion: {
            id: 'dq_mc_10_4',
            prompt: 'When a startup grows past 150 employees (Dunbar\'s Number), what typically happens if leadership does not actively build new systems?',
            options: [
              'Productivity automatically doubles due to network effects.',
              'Informal trust networks collapse, leading to silos, politics, and severe alignment issues.',
              'Everyone magically becomes best friends.',
              'The company immediately goes bankrupt.'
            ],
            correctIndex: 1,
            explanation: 'Once an organization exceeds cognitive limits of human connection, informal "tribal" cohesion fails. Formal hierarchy, clear KPIs, and strong corporate mythology become mandatory.'
          }
        }
      ]
    },
    {
      id: 'mod_mindset_11',
      code: '4.11',
title: 'Habit Engineering & Identity-Based Behavior Change',
      description: 'Hacking human architecture to make discipline automatic and inevitable.',
      lessons: [
        {
          id: 'mc_11_1',
          title: 'The Habit Loop: Cue, Craving, Response, Reward',
          duration: '20 min',
          durationSeconds: 1200,
          completed: false,
          keyTakeaway: 'To break a bad habit, make the cue invisible, the craving unattractive, the response difficult, and the reward unsatisfying.',
          drillQuestion: {
            id: 'dq_mc_11_1',
            prompt: 'You want to stop eating junk food at 10 PM. Which action intervenes at the "Response (Friction)" stage of the habit loop?',
            options: [
              'Feeling bad about yourself afterward.',
              'Reading a book about nutrition.',
              'Not buying junk food at the grocery store, forcing you to drive 20 minutes if you want it late at night.',
              'Setting an alarm for 10 PM.'
            ],
            correctIndex: 2,
            explanation: 'By removing it from the house, you drastically increase the friction (difficulty) of the response. The habit will likely die because the effort required is too high.'
          }
        },
        {
          id: 'mc_11_2',
          title: 'Identity Shift: The Core of Permanent Change',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'True behavior change is identity change. Do not aim to "read a book," aim to become a "reader." Actions follow identity.',
          drillQuestion: {
            id: 'dq_mc_11_2',
            prompt: 'Someone offers a cigarette to two people trying to quit. Person A says "No thanks, I\'m trying to quit." Person B says "No thanks, I\'m not a smoker." Why is Person B more likely to succeed?',
            options: [
              'Person B is lying to themselves.',
              'Person B has shifted their identity; they are no longer identifying as a smoker struggling to quit, but as a non-smoker acting in alignment with who they are.',
              'Person A is being more honest and therefore stronger.',
              'There is no psychological difference.'
            ],
            correctIndex: 1,
            explanation: 'Behavior that is incongruent with the self-image will not last. By changing the identity to "non-smoker," declining the cigarette requires no willpower—it is just who they are.'
          }
        },
        {
          id: 'mc_11_3',
          title: 'Environment Architecture > Willpower',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Willpower is a rapidly depleting battery. Design environments where doing the right thing is the path of least resistance.',
          drillQuestion: {
            id: 'dq_mc_11_3',
            prompt: 'Which is an example of Environment Architecture for deep work?',
            options: [
              'Staring at your phone but using willpower not to open social media.',
              'Telling yourself to focus really hard.',
              'Leaving your phone in another room and using a website blocker on your laptop before starting work.',
              'Drinking four cups of coffee.'
            ],
            correctIndex: 2,
            explanation: 'By structurally removing the distraction, you eliminate the need for willpower entirely. The environment dictates the behavior.'
          }
        },
        {
          id: 'mc_11_4',
          title: 'Implementation Intentions & Habit Stacking',
          duration: '20 min',
          durationSeconds: 1200,
          completed: false,
          keyTakeaway: 'Link new habits to established biological or environmental triggers using the formula: "After [Current Habit], I will [New Habit]."',
          drillQuestion: {
            id: 'dq_mc_11_4',
            prompt: 'Which is a correctly formulated Habit Stack?',
            options: [
              '"I will meditate more often."',
              '"I will meditate for 10 minutes at 8:00 AM."',
              '"After I pour my morning cup of coffee, I will immediately meditate for 2 minutes."',
              '"I will try to meditate when I feel stressed."'
            ],
            correctIndex: 2,
            explanation: 'Habit stacking ties the new behavior directly to a deeply ingrained daily action (pouring coffee), using the old habit as an automatic trigger for the new one.'
          }
        },
        {
          id: 'mc_11_5',
          title: 'The aggregation of Marginal Gains (1% Rule)',
          duration: '20 min',
          durationSeconds: 1200,
          completed: false,
          keyTakeaway: 'Success is not a monumental event; it is the compound interest of 1% daily improvements over an extended timeframe.',
          formula: '(1.01)^365 = 37.78x improvement',
          drillQuestion: {
            id: 'dq_mc_11_5',
            prompt: 'Mathematically, if you improve by 1% every day for a year, how much better will you be?',
            options: [
              '3.65 times better.',
              '10 times better.',
              'Nearly 38 times better.',
              'Exactly the same.'
            ],
            correctIndex: 2,
            explanation: 'Compound growth is exponential, not linear. 1.01 to the power of 365 yields 37.78, meaning small, consistent daily actions lead to staggering macro-level transformations.'
          }
        }
      ]
    },
    {
      id: 'mod_mindset_12',
      code: '4.12',
title: 'Philosophy of Wealth: Scarcity, Abundance & Sovereign Mindset',
      description: 'Reprogramming the operating system of value creation and capital acquisition.',
      lessons: [
        {
          id: 'mc_12_1',
          title: 'Scarcity vs. Abundance OS',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'The Scarcity OS views wealth as a finite pie to be stolen; the Abundance OS views wealth as infinite energy to be created through value.',
          drillQuestion: {
            id: 'dq_mc_12_1',
            prompt: 'How does an individual operating on a Scarcity OS view a colleague\'s promotion?',
            options: [
              'As proof that the company rewards hard work, motivating them to work harder.',
              'As a threat—a piece of the finite pie has been taken, meaning there is less success available for them.',
              'As an opportunity to learn from the colleague.',
              'With complete indifference.'
            ],
            correctIndex: 1,
            explanation: 'Scarcity mindset is zero-sum. If you win, I must lose. This leads to envy, hoarding, and toxic politics instead of value creation.'
          }
        },
        {
          id: 'mc_12_2',
          title: 'Wealth vs. Money vs. Status',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Seek Wealth (assets that earn while you sleep). Ignore Status (your rank in the social hierarchy). Use Money simply as a means to transfer Wealth.',
          drillQuestion: {
            id: 'dq_mc_12_2',
            prompt: 'According to Naval Ravikant, what is the fundamental difference between Wealth and Status?',
            options: [
              'Status is infinite, wealth is finite.',
              'Wealth is having assets that earn while you sleep (positive-sum); Status is your ranking in the social hierarchy (zero-sum).',
              'They are the exact same thing.',
              'Wealth requires a college degree, status does not.'
            ],
            correctIndex: 1,
            explanation: 'Status games are competitive—to go up, someone must go down. Wealth creation is cooperative—everyone can become wealthier through technological and economic growth.'
          }
        },
        {
          id: 'mc_12_3',
          title: 'Specific Knowledge & Unfair Advantages',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Arm yourself with specific knowledge that cannot be trained. If society can train you, society can easily replace you.',
          drillQuestion: {
            id: 'dq_mc_12_3',
            prompt: 'Which of the following is the best example of "Specific Knowledge"?',
            options: [
              'Knowing how to use Microsoft Excel.',
              'A basic degree in business administration.',
              'The innate ability to rapidly build trust and negotiate complex SaaS deals in the cybersecurity sector.',
              'Knowing how to drive a car.'
            ],
            correctIndex: 2,
            explanation: 'Specific knowledge is often highly specialized, deeply technical, or highly creative. It is built through extreme curiosity and direct experience, making it impossible to easily replicate or automate.'
          }
        },
        {
          id: 'mc_12_4',
          title: 'Asymmetric Bets & Optionality',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Structure your career and portfolio to maximize optionality. Expose yourself to black swan positive events with capped downside.',
          drillQuestion: {
            id: 'dq_mc_12_4',
            prompt: 'Why is joining an early-stage startup often considered an "asymmetric bet" for a young professional?',
            options: [
              'Because startups always succeed.',
              'The downside is capped (you just lose your time and go get another job), but the upside is potentially life-changing equity and rapid skill growth.',
              'Because it pays the highest base salary guaranteed.',
              'Because it requires zero effort.'
            ],
            correctIndex: 1,
            explanation: 'Asymmetric bets have known, bounded downsides but mathematically unbound upsides. This is the structural mechanism of outsized wealth creation.'
          }
        },
        {
          id: 'mc_12_5',
          title: 'The Sovereign Individual: Decentralization & Autonomy',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Ultimate freedom is the decoupling of your intellect, assets, and mobility from centralized, geographically constrained systems.',
          drillQuestion: {
            id: 'dq_mc_12_5',
            prompt: 'What characterizes a "Sovereign Individual" in the digital age?',
            options: [
              'Total reliance on a single corporation for income, healthcare, and identity.',
              'The ability to leverage code, capital, and global networks to remain highly mobile, location-independent, and cryptographically secure.',
              'Living off the grid in a cabin without the internet.',
              'Being a politician.'
            ],
            correctIndex: 1,
            explanation: 'Sovereignty in the modern age means utilizing technology to achieve jurisdictional arbitrage, financial independence, and complete autonomy over one\'s time and output.'
          }
        }
      ]
    }
  ]
};




import { FrontierFaculty } from '../../types';

export const DIGITAL_BUSINESS_FACULTY: FrontierFaculty = {
  id: 'digital_business' as any,
  name: 'Faculty of Digital Business & Sovereign Entrepreneurship',
  shortTitle: 'Business & Growth',
  iconName: 'Briefcase',
  emoji: '💼',
  themeColor: 'orange' as any,
  accentHex: '#f97316',
  glowClass: 'shadow-[0_0_35px_rgba(249,115,22,0.25)]',
  borderClass: 'border-orange-500/30 hover:border-orange-400/60',
  bgLightClass: 'bg-orange-500/10 text-orange-400',
  badgeClass: 'bg-orange-500/10 text-orange-300 border border-orange-500/30',
  headline: 'Build, Scale & Monetize Digital Ventures with Sovereign Independence',
  description: 'Master lean business model validation, SEO and viral growth loops, copywriting, agency client acquisition, and cash flow economics.',
  difficulty: 'Tactical' as any,
  estimatedHours: 90,
  totalXp: 2800,
  completionPercent: 0,
  simulatorName: 'Business Model & Growth Strategy Sandbox',
  simulatorTag: 'Entrepreneurial Decision Engine',
  drillNodes: [],
  modules: [
    {
      id: 'db-mod-1',
      code: '10.1',
title: 'Business Model Design & Lean Startup Methodology',
      description: 'Master the fundamentals of value creation, capturing mechanisms, and lean validation.',
      lessons: [
        {
          id: 'db-l1-1',
          title: 'The Anatomy of a Digital Business Model',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'A business model simply describes how an organization creates, delivers, and captures value.',
          drillQuestion: {
            id: 'db-q1-1',
            prompt: 'Which of the following is NOT one of the three core components of a business model?',
            options: ['Value Creation', 'Value Delivery', 'Value Capture', 'Value Destruction'],
            correctIndex: 3,
            explanation: 'Value destruction is not a core component; businesses exist to create, deliver, and capture value.'
          }
        },
        {
          id: 'db-l1-2',
          title: 'Value Proposition Design',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Your value proposition must directly address your target customer\'s most pressing pains and most desired gains.',
          drillQuestion: {
            id: 'db-q1-2',
            prompt: 'What is the primary goal of a Value Proposition?',
            options: ['To list product features', 'To match product benefits with customer pains and gains', 'To determine product pricing', 'To set the marketing budget'],
            correctIndex: 1,
            explanation: 'A strong value proposition perfectly aligns what you offer with what your customers truly need or want to achieve.'
          }
        },
        {
          id: 'db-l1-3',
          title: 'The Lean Startup: Build-Measure-Learn',
          duration: '20 min',
          durationSeconds: 1200,
          completed: false,
          keyTakeaway: 'The Build-Measure-Learn feedback loop is the core mechanism for turning ideas into products while minimizing waste.',
          drillQuestion: {
            id: 'db-q1-3',
            prompt: 'In the Lean Startup methodology, what is a Minimum Viable Product (MVP)?',
            options: ['A product with all planned features', 'The cheapest product you can build', 'A version of a new product which allows a team to collect the maximum amount of validated learning about customers with the least effort', 'A prototype only meant for internal testing'],
            correctIndex: 2,
            explanation: 'An MVP is designed specifically to test fundamental business hypotheses with real users as quickly as possible.'
          }
        },
        {
          id: 'db-l1-4',
          title: 'Identifying the Target Market & TAM/SAM/SOM',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'TAM, SAM, and SOM help you logically estimate the size and revenue potential of your target market.',
          formula: 'Market Share = SOM / SAM',
          drillQuestion: {
            id: 'db-q1-4',
            prompt: 'What does SOM stand for in market sizing?',
            options: ['Serviceable Obtainable Market', 'Standard Operational Model', 'Systematic Outbound Marketing', 'Sales Optimization Metric'],
            correctIndex: 0,
            explanation: 'SOM (Serviceable Obtainable Market) is the portion of the SAM that you can realistically capture in the short term.'
          }
        },
        {
          id: 'db-l1-5',
          title: 'Pricing Strategies for Digital Products',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Pricing should reflect the value delivered, not just the cost of production (value-based pricing).',
          drillQuestion: {
            id: 'db-q1-5',
            prompt: 'What is value-based pricing?',
            options: ['Pricing based on production cost plus a margin', 'Pricing slightly below competitors', 'Setting prices primarily based on the perceived or estimated value to the customer', 'Offering products for free to gain market share'],
            correctIndex: 2,
            explanation: 'Value-based pricing aligns your price with the economic value and psychological benefit your customer receives.'
          }
        },
        {
          id: 'db-l1-6',
          title: 'Revenue Models: Subscription, Freemium & Transactional',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Choosing the right revenue model depends heavily on your customer acquisition cost and customer lifetime value.',
          drillQuestion: {
            id: 'db-q1-6',
            prompt: 'Which revenue model relies on offering a basic service for free while charging for advanced features?',
            options: ['Subscription', 'Freemium', 'Transactional', 'Affiliate'],
            correctIndex: 1,
            explanation: 'Freemium models use a free basic tier as a lead generation tool to eventually upsell users to a premium paid tier.'
          }
        }
      ]
    },
    {
      id: 'db-mod-2',
      code: '10.2',
title: 'Digital Marketing: SEO, Content & Growth Hacking',
      description: 'Acquire users systematically through organic search, compounding content, and viral loops.',
      lessons: [
        {
          id: 'db-l2-1',
          title: 'SEO Fundamentals: On-Page & Off-Page',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'SEO is the practice of increasing the quantity and quality of traffic to your website through organic search engine results.',
          drillQuestion: {
            id: 'db-q2-1',
            prompt: 'Which of the following is considered an Off-Page SEO factor?',
            options: ['Title Tags', 'Meta Descriptions', 'Backlinks from other websites', 'Keyword density in content'],
            correctIndex: 2,
            explanation: 'Off-Page SEO involves actions taken outside of your own website, primarily building high-quality backlinks.'
          }
        },
        {
          id: 'db-l2-2',
          title: 'Content Marketing Strategy',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Effective content marketing focuses on creating, publishing, and distributing content for a targeted audience online to drive profitable customer action.',
          drillQuestion: {
            id: 'db-q2-2',
            prompt: 'What is a "Content Funnel"?',
            options: ['A tool to block bad content', 'A system that takes users from initial awareness through to conversion using tailored content at each stage', 'A method of writing articles faster', 'A way to syndicate content across networks'],
            correctIndex: 1,
            explanation: 'A content funnel maps different types of content (Top, Middle, Bottom of funnel) to the buyer\'s journey.'
          }
        },
        {
          id: 'db-l2-3',
          title: 'Growth Hacking & Viral Loops',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'A viral loop is a mechanism that encourages users to refer others to your product, theoretically creating exponential growth.',
          formula: 'Viral Coefficient (K) = (Number of Invites per User) * (Conversion Rate of Invites)',
          drillQuestion: {
            id: 'db-q2-3',
            prompt: 'If an average user invites 5 friends, and 20% of those friends sign up, what is the Viral Coefficient (K)?',
            options: ['0.5', '1.0', '5.0', '10.0'],
            correctIndex: 1,
            explanation: 'K = 5 * 0.20 = 1.0. A K-factor of > 1 means the product will grow exponentially without marketing spend.'
          }
        },
        {
          id: 'db-l2-4',
          title: 'Email Marketing & Automation',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Email remains one of the highest ROI marketing channels because you own the audience and can automate lifecycle messaging.',
          drillQuestion: {
            id: 'db-q2-4',
            prompt: 'What does "Drip Campaign" refer to in email marketing?',
            options: ['Emails that bounce back', 'A sequence of automated emails sent based on specific timelines or user actions', 'Sending emails with watermarks', 'Emails sent only to unengaged users'],
            correctIndex: 1,
            explanation: 'Drip campaigns are automated sequences designed to nurture leads or onboard users over time.'
          }
        },
        {
          id: 'db-l2-5',
          title: 'Marketing Analytics & Attribution',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Attribution modeling helps you understand which marketing channels are actually driving conversions.',
          codeSnippet: 'const calculateCAC = (marketingSpend, newCustomers) => marketingSpend / newCustomers;',
          drillQuestion: {
            id: 'db-q2-5',
            prompt: 'What does CAC stand for?',
            options: ['Customer Acquisition Cost', 'Calculated Average Conversion', 'Content Analytics Center', 'Consumer Action Cohort'],
            correctIndex: 0,
            explanation: 'CAC is the total cost of sales and marketing divided by the number of new customers acquired during that period.'
          }
        },
        {
          id: 'db-l2-6',
          title: 'A/B Testing & Conversion Rate Optimization (CRO)',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'CRO is the systematic process of increasing the percentage of website visitors who take a desired action.',
          drillQuestion: {
            id: 'db-q2-6',
            prompt: 'In A/B testing, what is the "Control"?',
            options: ['The new variation being tested', 'The existing, original version of the page', 'The tool used to run the test', 'The metric being optimized'],
            correctIndex: 1,
            explanation: 'The Control is the current baseline version. The "Variant" (or B) is tested against the Control (or A) to measure performance differences.'
          }
        }
      ]
    },
    {
      id: 'db-mod-3',
      code: '10.3',
title: 'Social Media Strategy & Personal Brand Building',
      description: 'Leverage attention platforms to build an audience, establish authority, and drive distribution.',
      lessons: [
        {
          id: 'db-l3-1',
          title: 'The Architecture of a Personal Brand',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'A personal brand is the unique combination of skills, experience, and personality that you want the world to see you for.',
          drillQuestion: {
            id: 'db-q3-1',
            prompt: 'Why is a personal brand considered a "moat" in business?',
            options: ['It requires a lot of money to build', 'It cannot be easily replicated or stolen by competitors', 'It guarantees immediate sales', 'It replaces the need for a good product'],
            correctIndex: 1,
            explanation: 'People connect with people. Your unique voice, story, and reputation are proprietary assets that competitors cannot simply copy.'
          }
        },
        {
          id: 'db-l3-2',
          title: 'Platform Selection: Where to Play',
          duration: '20 min',
          durationSeconds: 1200,
          completed: false,
          keyTakeaway: 'Do not be everywhere at once. Dominate one platform where your target audience naturally congregates before expanding.',
          drillQuestion: {
            id: 'db-q3-2',
            prompt: 'If you are building a B2B SaaS product, which platform is statistically the best starting point for personal branding?',
            options: ['TikTok', 'Snapchat', 'LinkedIn', 'Pinterest'],
            correctIndex: 2,
            explanation: 'LinkedIn is the premier professional networking platform, making it ideal for B2B relationship building and content distribution.'
          }
        },
        {
          id: 'db-l3-3',
          title: 'Content Pillars and Frameworks',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Content pillars ensure consistency and prevent burnout by giving you 3-4 core topics to rotate through systematically.',
          drillQuestion: {
            id: 'db-q3-3',
            prompt: 'What is a "Content Pillar"?',
            options: ['A piece of viral content', 'A core theme or topic that your brand consistently discusses', 'A physical column in an office', 'A software tool for scheduling posts'],
            correctIndex: 1,
            explanation: 'Content pillars form the foundation of your content strategy, ensuring you stay on-brand and relevant to your niche.'
          }
        },
        {
          id: 'db-l3-4',
          title: 'Audience Engagement & Community Building',
          duration: '20 min',
          durationSeconds: 1200,
          completed: false,
          keyTakeaway: 'An audience listens to you, but a community talks to each other. Building community creates lasting loyalty.',
          drillQuestion: {
            id: 'db-q3-4',
            prompt: 'What is the primary difference between an Audience and a Community?',
            options: ['Audience size is larger', 'Community involves peer-to-peer interaction, not just one-to-many broadcasting', 'Audiences pay money, communities are free', 'Communities are only offline'],
            correctIndex: 1,
            explanation: 'Communities foster connections between members, creating a network effect that increases the value of the group.'
          }
        },
        {
          id: 'db-l3-5',
          title: 'Monetizing Attention',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Attention is the currency of the internet. Once you have it, you can monetize via products, services, sponsorships, or paid communities.',
          drillQuestion: {
            id: 'db-q3-5',
            prompt: 'Which monetization strategy scales best for a creator with a large, engaged audience?',
            options: ['Selling 1-on-1 consulting by the hour', 'Creating and selling digital products or courses', 'Doing odd freelance jobs', 'Relying solely on platform ad revenue'],
            correctIndex: 1,
            explanation: 'Digital products have near-zero marginal cost of reproduction, allowing for infinite scale compared to trading time for money.'
          }
        }
      ]
    },
    {
      id: 'db-mod-4',
      code: '10.4',
title: 'Copywriting, Sales Psychology & Conversion',
      description: 'Master the art of writing words that persuade, influence, and drive profitable action.',
      lessons: [
        {
          id: 'db-l4-1',
          title: 'The Psychology of Persuasion',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'People buy based on emotion and justify with logic. Good copy addresses both.',
          drillQuestion: {
            id: 'db-q4-1',
            prompt: 'According to Cialdini, providing a free trial that makes a user feel obligated to buy relies on which principle?',
            options: ['Scarcity', 'Social Proof', 'Reciprocity', 'Authority'],
            correctIndex: 2,
            explanation: 'Reciprocity is the psychological urge to give something back when you receive something for free.'
          }
        },
        {
          id: 'db-l4-2',
          title: 'AIDA and PAS Copywriting Frameworks',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Frameworks like PAS (Problem, Agitation, Solution) structure your writing to systematically move readers toward action.',
          drillQuestion: {
            id: 'db-q4-2',
            prompt: 'In the AIDA framework, what does the \'D\' stand for?',
            options: ['Demand', 'Desire', 'Data', 'Delivery'],
            correctIndex: 1,
            explanation: 'AIDA stands for Attention, Interest, Desire, Action.'
          }
        },
        {
          id: 'db-l4-3',
          title: 'Writing High-Converting Headlines',
          duration: '20 min',
          durationSeconds: 1200,
          completed: false,
          keyTakeaway: 'The headline\'s only job is to get the first sentence read. If the headline fails, the rest of the copy doesn\'t matter.',
          drillQuestion: {
            id: 'db-q4-3',
            prompt: 'Which of the following is a classic technique for writing effective headlines?',
            options: ['Using complex industry jargon', 'Being as vague as possible', 'Combining a strong benefit with a specific curiosity gap', 'Writing at least three paragraphs'],
            correctIndex: 2,
            explanation: 'Effective headlines promise a clear benefit (utility) while sparking curiosity to compel the reader to click or read more.'
          }
        },
        {
          id: 'db-l4-4',
          title: 'Crafting Irresistible Offers',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'An offer is not just the product; it includes the price, bonuses, guarantees, and terms. Make it so good they feel stupid saying no.',
          drillQuestion: {
            id: 'db-q4-4',
            prompt: 'What is the primary purpose of a strong risk-reversal guarantee?',
            options: ['To increase the price', 'To remove the buyer\'s hesitation and fear of making a mistake', 'To comply with legal laws', 'To trick the customer'],
            correctIndex: 1,
            explanation: 'Guarantees (like a 30-day money-back guarantee) transfer the risk from the buyer to the seller, massively increasing conversion rates.'
          }
        },
        {
          id: 'db-l4-5',
          title: 'Landing Page Architecture',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'A landing page should have a 1:1 attention ratio, meaning there is only one objective and one call-to-action (CTA).',
          drillQuestion: {
            id: 'db-q4-5',
            prompt: 'Why should you typically remove top navigation menus from a dedicated sales landing page?',
            options: ['To save bandwidth', 'To prevent visitors from clicking away from the primary Call-To-Action (CTA)', 'Because it looks ugly', 'To improve SEO'],
            correctIndex: 1,
            explanation: 'Removing leaks (like navigation links) keeps the visitor focused solely on the conversion goal of the landing page.'
          }
        }
      ]
    },
    {
      id: 'db-mod-5',
      code: '10.5',
title: 'Freelancing, Agency Building & Client Acquisition',
      description: 'Transition from solo freelancer to agency owner by building scalable service delivery systems.',
      lessons: [
        {
          id: 'db-l5-1',
          title: 'Finding Your Niche & Service Offering',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Niching down allows you to charge premium prices because you become a specialized expert rather than a generalist commodity.',
          drillQuestion: {
            id: 'db-q5-1',
            prompt: 'Why is "Web Design for Dentists" a stronger positioning than "Web Design for Small Businesses"?',
            options: ['Dentists pay less', 'It is a specific niche that implies specialized knowledge of the dental industry\'s unique needs', 'Small businesses don\'t need websites', 'It is broader'],
            correctIndex: 1,
            explanation: 'Specific niches allow you to speak directly to a target market\'s specific pain points, positioning yourself as an expert rather than a generalist.'
          }
        },
        {
          id: 'db-l5-2',
          title: 'Outbound Client Acquisition Systems',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Consistent revenue requires a predictable outbound system (cold email, LinkedIn outreach, cold calling).',
          drillQuestion: {
            id: 'db-q5-2',
            prompt: 'In cold email outreach, what is the most important factor for success?',
            options: ['Having a colorful HTML template', 'Using a generic, mass-blast script', 'Highly targeted lists paired with personalized, relevant messaging', 'Sending at midnight'],
            correctIndex: 2,
            explanation: 'Relevance and targeting drive response rates in cold outreach. Generic spam gets ignored.'
          }
        },
        {
          id: 'db-l5-3',
          title: 'Pricing Services & Productization',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Productizing a service means packaging it with a set price, defined scope, and standardized process to make it scalable.',
          drillQuestion: {
            id: 'db-q5-3',
            prompt: 'What is the main benefit of "Productizing" a service?',
            options: ['You can charge hourly', 'It eliminates scope creep and allows for scalable, repeatable delivery', 'It makes the service highly customized for every client', 'You never have to talk to clients'],
            correctIndex: 1,
            explanation: 'Productized services have clear boundaries (fixed scope, fixed price), making them easier to sell, deliver, and eventually delegate.'
          }
        },
        {
          id: 'db-l5-4',
          title: 'The Sales Call: Discovery & Closing',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'A successful sales call focuses 80% on diagnosing the client\'s problem and 20% on prescribing your solution.',
          drillQuestion: {
            id: 'db-q5-4',
            prompt: 'During the discovery phase of a sales call, what should you do most?',
            options: ['Talk about your company history', 'Pitch your services immediately', 'Ask probing questions and actively listen to uncover the client\'s true pain points', 'Argue about pricing'],
            correctIndex: 2,
            explanation: 'Selling is about diagnosis. You cannot prescribe a solution (your service) until you deeply understand the problem.'
          }
        },
        {
          id: 'db-l5-5',
          title: 'From Freelancer to Agency: Delegation & SOPs',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'To scale beyond yourself, you must document your processes into Standard Operating Procedures (SOPs) and hire talent to execute them.',
          drillQuestion: {
            id: 'db-q5-5',
            prompt: 'What does SOP stand for in business operations?',
            options: ['Standard Operating Procedure', 'System Output Protocol', 'Service Oriented Platform', 'Sales Optimization Process'],
            correctIndex: 0,
            explanation: 'SOPs are step-by-step instructions compiled by an organization to help workers carry out complex routine operations.'
          }
        }
      ]
    },
    {
      id: 'db-mod-6',
      code: '10.6',
title: 'Product Management & Data-Driven Decisions',
      description: 'Build products people actually want by leveraging user feedback, analytics, and agile methodologies.',
      lessons: [
        {
          id: 'db-l6-1',
          title: 'The Role of the Product Manager',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'A PM sits at the intersection of Business, UX, and Technology, acting as the CEO of the product.',
          drillQuestion: {
            id: 'db-q6-1',
            prompt: 'Which of the following is NOT a primary domain of a Product Manager?',
            options: ['User Experience (UX)', 'Business Strategy', 'Technology/Engineering', 'Writing backend code in production'],
            correctIndex: 3,
            explanation: 'While technical understanding is crucial, PMs typically do not write production code; they define what needs to be built and why.'
          }
        },
        {
          id: 'db-l6-2',
          title: 'User Research & Customer Interviews',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'When doing user research, ask about past behavior rather than future intent. Past behavior is the best predictor of future behavior.',
          drillQuestion: {
            id: 'db-q6-2',
            prompt: 'Which question is best for uncovering real user behavior?',
            options: ['Would you use a feature that does X?', 'How much would you pay for this?', 'Can you tell me about the last time you experienced this problem?', 'Do you think this is a good idea?'],
            correctIndex: 2,
            explanation: 'Asking about past specific events ("the last time you...") yields factual data, whereas asking for future predictions yields unreliable hypotheticals.'
          }
        },
        {
          id: 'db-l6-3',
          title: 'Agile Methodology & Sprint Planning',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Agile development focuses on iterative progress, regular feedback, and adaptability rather than rigid, long-term planning.',
          drillQuestion: {
            id: 'db-q6-3',
            prompt: 'In Scrum, what is a "Sprint"?',
            options: ['Running fast', 'A time-boxed iteration (usually 2-4 weeks) during which a usable increment of a product is created', 'A quick meeting', 'A backlog of tasks'],
            correctIndex: 1,
            explanation: 'Sprints break down large development cycles into manageable, focused time-boxes to deliver continuous value.'
          }
        },
        {
          id: 'db-l6-4',
          title: 'Product Analytics: Tracking What Matters',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Focus on actionable metrics (like retention or conversion rates) rather than vanity metrics (like total registered users).',
          drillQuestion: {
            id: 'db-q6-4',
            prompt: 'Which of the following is an example of a "Vanity Metric"?',
            options: ['Daily Active Users (DAU)', 'Churn Rate', 'Cumulative Total App Downloads', 'Customer Acquisition Cost (CAC)'],
            correctIndex: 2,
            explanation: 'Cumulative downloads always go up and don\'t indicate if users are actually staying or finding value in the product.'
          }
        },
        {
          id: 'db-l6-5',
          title: 'Retention Strategies & Cohort Analysis',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Retention is the ultimate measure of product-market fit. Cohort analysis helps you track retention over time for specific groups of users.',
          formula: 'Retention Rate = ((CE - CN) / CS) * 100 [CE: Customers at End, CN: New Customers, CS: Customers at Start]',
          drillQuestion: {
            id: 'db-q6-5',
            prompt: 'What does a Cohort Analysis primarily show you?',
            options: ['How much money you made today', 'The behavior and retention of groups of users who share a common characteristic (like signup date) over time', 'Your server uptime', 'Your SEO ranking'],
            correctIndex: 1,
            explanation: 'Cohort analysis groups users by an event (like the week they joined) to see how their engagement degrades or sustains over time.'
          }
        }
      ]
    },
    {
      id: 'db-mod-7',
      code: '10.7',
title: 'Financial Literacy, Accounting & Tax',
      description: 'Understand the numbers that drive your business, manage cash flow, and optimize tax strategy.',
      lessons: [
        {
          id: 'db-l7-1',
          title: 'The Three Financial Statements',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'The Income Statement shows profitability, the Balance Sheet shows financial position, and the Cash Flow Statement shows actual cash movement.',
          drillQuestion: {
            id: 'db-q7-1',
            prompt: 'Which financial statement would you look at to see a company\'s Assets, Liabilities, and Equity at a specific point in time?',
            options: ['Income Statement', 'Cash Flow Statement', 'Balance Sheet', 'Statement of Retained Earnings'],
            correctIndex: 2,
            explanation: 'The Balance Sheet provides a snapshot of what a company owns (Assets) and owes (Liabilities) at a specific moment.'
          }
        },
        {
          id: 'db-l7-2',
          title: 'Cash Flow Management & Runway',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Profitable companies can still go bankrupt if they run out of cash. Managing cash flow is the most critical survival skill for founders.',
          formula: 'Runway = Cash Balance / Monthly Burn Rate',
          drillQuestion: {
            id: 'db-q7-2',
            prompt: 'If a startup has $100,000 in the bank and a net burn rate of $20,000 per month, what is its runway?',
            options: ['2 months', '5 months', '10 months', '12 months'],
            correctIndex: 1,
            explanation: '100,000 / 20,000 = 5. The startup has 5 months to become profitable or raise more funding before running out of cash.'
          }
        },
        {
          id: 'db-l7-3',
          title: 'Unit Economics: LTV & CAC',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'A business is fundamentally viable if the Customer Lifetime Value (LTV) significantly exceeds the Customer Acquisition Cost (CAC).',
          formula: 'LTV/CAC Ratio. Healthy SaaS benchmark is 3:1 or higher.',
          drillQuestion: {
            id: 'db-q7-3',
            prompt: 'If your CAC is $50 and your LTV is $200, what is your LTV:CAC ratio, and is it considered healthy for a SaaS business?',
            options: ['4:1 (Healthy)', '1:4 (Unhealthy)', '250:1 (Healthy)', '4:1 (Unhealthy)'],
            correctIndex: 0,
            explanation: '200 / 50 = 4. An LTV:CAC ratio of 4:1 is excellent, exceeding the standard 3:1 benchmark for a sustainable business.'
          }
        },
        {
          id: 'db-l7-4',
          title: 'Entity Structuring & Liability (LLCs & Corps)',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Setting up a formal business entity (like an LLC or C-Corp) protects your personal assets from business liabilities.',
          drillQuestion: {
            id: 'db-q7-4',
            prompt: 'What is the primary benefit of forming an LLC (Limited Liability Company)?',
            options: ['It guarantees business success', 'It completely eliminates all taxes', 'It separates your personal assets from your business liabilities', 'It allows you to print money'],
            correctIndex: 2,
            explanation: 'An LLC creates a "corporate shield" so if the business is sued, your personal assets (home, car, personal bank accounts) are generally protected.'
          }
        },
        {
          id: 'db-l7-5',
          title: 'Tax Optimization for Entrepreneurs',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Legal tax avoidance is your duty as a business owner. Understand deductions, depreciation, and tax-advantaged accounts.',
          drillQuestion: {
            id: 'db-q7-5',
            prompt: 'What constitutes a deductible business expense?',
            options: ['Any personal purchase', 'Only inventory', 'An expense that is both ordinary and necessary for your trade or business', 'Only expenses over $1,000'],
            correctIndex: 2,
            explanation: 'The IRS defines deductible business expenses as those that are "ordinary" (common in your industry) and "necessary" (helpful and appropriate for your trade).'
          }
        }
      ]
    },
    {
      id: 'db-mod-8',
      code: '10.8',
title: 'Scaling Operations, Hiring & Remote Teams',
      description: 'Transition from doing everything yourself to managing systems and leading high-performing teams.',
      lessons: [
        {
          id: 'db-l8-1',
          title: 'The Founder\'s Dilemma: Do vs. Delegate',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'To scale, founders must shift from working IN the business (execution) to working ON the business (strategy and systems).',
          drillQuestion: {
            id: 'db-q8-1',
            prompt: 'What is the "Opportunity Cost" of a founder doing low-level administrative work?',
            options: ['Zero, because they aren\'t paying someone else', 'The value of the high-leverage strategic work they could have been doing instead', 'The cost of the software used', 'A tax penalty'],
            correctIndex: 1,
            explanation: 'Every hour spent on $15/hr admin work is an hour not spent on $500/hr sales or product strategy.'
          }
        },
        {
          id: 'db-l8-2',
          title: 'Building Asynchronous Operations',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Asynchronous communication (writing, recorded videos) scales better than synchronous communication (meetings) in remote teams.',
          drillQuestion: {
            id: 'db-q8-2',
            prompt: 'Which of the following is an example of asynchronous communication?',
            options: ['A live Zoom meeting', 'A phone call', 'A documented Notion brief and a Loom video walkthrough', 'An in-person brainstorming session'],
            correctIndex: 2,
            explanation: 'Asynchronous communication does not require participants to be present at the same time, allowing deep work and global collaboration.'
          }
        },
        {
          id: 'db-l8-3',
          title: 'Hiring 101: Job Descriptions & Interviews',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Hire for traits and culture fit; train for specific skills. A bad hire is vastly more expensive than taking the time to find a good one.',
          drillQuestion: {
            id: 'db-q8-3',
            prompt: 'Why are "Test Projects" or paid trials often better than standard interviews?',
            options: ['They are cheaper', 'They show how a candidate actually performs real work rather than how well they answer hypothetical questions', 'They are required by law', 'They save time for the HR department'],
            correctIndex: 1,
            explanation: 'Interviews test interview skills. Test projects test actual job competency.'
          }
        },
        {
          id: 'db-l8-4',
          title: 'Key Performance Indicators (KPIs) & OKRs',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'OKRs (Objectives and Key Results) align company goals with measurable outcomes, ensuring everyone rows in the same direction.',
          drillQuestion: {
            id: 'db-q8-4',
            prompt: 'In the OKR framework, what is the difference between an Objective and a Key Result?',
            options: ['They are the same thing', 'Objectives are qualitative and inspiring; Key Results are quantitative and measurable', 'Objectives are for management; Key Results are for employees', 'Objectives are short term; Key Results are long term'],
            correctIndex: 1,
            explanation: 'The Objective sets the direction (e.g., "Dominate the European Market"), and the Key Results measure progress (e.g., "Hit $1M ARR in Europe").'
          }
        },
        {
          id: 'db-l8-5',
          title: 'The Exit Strategy: Acquisition & Selling',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Building a business with clean books, documented processes, and declining founder-dependence maximizes its valuation multiplier upon exit.',
          drillQuestion: {
            id: 'db-q8-5',
            prompt: 'Why does a business heavily dependent on the founder usually receive a lower valuation multiple?',
            options: ['Buyers don\'t like founders', 'If the founder leaves after the sale, the business operations and relationships might collapse', 'Founders take too much salary', 'It indicates the market is small'],
            correctIndex: 1,
            explanation: 'Acquirers buy future cash flows. If those cash flows are tied to the founder\'s personal involvement, the risk of the acquisition failing is very high.'
          }
        }
      ]
    }
  ]
};





import { FrontierFaculty } from '../../types';

export const BIOTECH_LONGEVITY_FACULTY: FrontierFaculty = {
  id: 'biotech_longevity',
  name: 'Faculty of Biotechnology, Longevity & Synthetic Biology',
  shortTitle: 'Biotech & Longevity',
  iconName: 'Dna',
  emoji: '🧬',
  themeColor: 'emerald',
  accentHex: '#10b981',
  glowClass: 'shadow-[0_0_35px_rgba(16,185,129,0.25)]',
  borderClass: 'border-emerald-500/30 hover:border-emerald-400/60',
  bgLightClass: 'bg-emerald-500/10 text-emerald-400',
  badgeClass: 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30',
  headline: 'Epigenetic Reprogramming, CRISPR Editing & Metabolic Longevity Engineering',
  description: 'Master computational biology, CRISPR gene editing, mRNA platforms, cellular rejuvenation, and biomarker optimization.',
  difficulty: 'Tactical',
  simulatorName: 'Biomarker Diagnostic & Longevity Protocol Lab',
  simulatorTag: 'Biological Intelligence Engine',
  estimatedHours: 110,
  totalXp: 3200,
  completionPercent: 0,
  drillNodes: [],
  modules: [
    {
      id: 'mod_cellular_reprogramming_longevity',
      code: '3.1',
      title: 'Cellular Reprogramming, Epigenetics & Longevity Biohacking',
      description: 'Understand the biological mechanisms of aging and the science of reversing it.',
      lessons: [
        {
          id: 'bt_longevity_1',
          title: 'The Hallmarks of Aging',
          duration: '25 mins',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Aging is driven by distinct biological mechanisms, including genomic instability, telomere attrition, and mitochondrial dysfunction.',
          drillQuestion: {
            id: 'dq_bt_1',
            prompt: 'Which of the following is considered one of the primary hallmarks of aging?',
            options: [
              'Increased melatonin production',
              'Telomere attrition',
              'Enhanced neurogenesis',
              'Optimized mitochondrial function'
            ],
            correctIndex: 1,
            explanation: 'Telomere attrition, the shortening of protective caps on chromosomes with each cell division, is a primary hallmark of aging.'
          }
        },
        {
          id: 'bt_longevity_2',
          title: 'Epigenetic Clocks and DNA Methylation',
          duration: '30 mins',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Epigenetic clocks measure biological age by analyzing patterns of DNA methylation across the genome.',
          drillQuestion: {
            id: 'dq_bt_2',
            prompt: 'What primary molecular mechanism do epigenetic clocks like Horvath\'s clock analyze to determine biological age?',
            options: [
              'RNA transcription rates',
              'Protein misfolding',
              'DNA methylation patterns',
              'Telomerase activity'
            ],
            correctIndex: 2,
            explanation: 'Epigenetic clocks measure biological age by tracking changes in DNA methylation, specifically at CpG sites.'
          }
        },
        {
          id: 'bt_longevity_3',
          title: 'Cellular Senescence and Senolytics',
          duration: '30 mins',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Senescent "zombie" cells secrete inflammatory factors (SASP); senolytic compounds aim to selectively clear them.',
          drillQuestion: {
            id: 'dq_bt_3',
            prompt: 'What is the primary function of senolytic therapies?',
            options: [
              'To induce cell division in all cells',
              'To selectively induce apoptosis in senescent cells',
              'To lengthen telomeres directly',
              'To increase the secretion of SASP'
            ],
            correctIndex: 1,
            explanation: 'Senolytics are designed to selectively clear senescent cells by inducing apoptosis, reducing systemic inflammation.'
          }
        },
        {
          id: 'bt_longevity_4',
          title: 'Yamanaka Factors and Cellular Reprogramming',
          duration: '35 mins',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Partial cellular reprogramming using Yamanaka factors (OSKM) can restore youthful epigenetic signatures without erasing cell identity.',
          formula: 'OSKM = Oct4, Sox2, Klf4, c-Myc (Transcription Factors)',
          drillQuestion: {
            id: 'dq_bt_4',
            prompt: 'Which combination of transcription factors is known as the Yamanaka factors?',
            options: [
              'OSKM (Oct4, Sox2, Klf4, c-Myc)',
              'CRISPR, Cas9, guideRNA',
              'NAD+, NMN, NR, Resveratrol',
              'mTOR, AMPK, Sirtuins, FOXO3'
            ],
            correctIndex: 0,
            explanation: 'The Yamanaka factors are a group of four transcription factors (Oct4, Sox2, Klf4, c-Myc) capable of inducing pluripotency.'
          }
        },
        {
          id: 'bt_longevity_5',
          title: 'Nutrient Sensing Pathways: mTOR and AMPK',
          duration: '30 mins',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Inhibiting mTOR (via rapamycin/fasting) and activating AMPK promotes autophagy and extends healthspan.',
          drillQuestion: {
            id: 'dq_bt_5',
            prompt: 'In the context of longevity, what is the desired modulation of the mTOR and AMPK pathways?',
            options: [
              'Inhibit both mTOR and AMPK',
              'Activate mTOR and inhibit AMPK',
              'Inhibit mTOR and activate AMPK',
              'Activate both mTOR and AMPK'
            ],
            correctIndex: 2,
            explanation: 'Longevity protocols typically aim to inhibit mTOR (reducing cellular proliferation) and activate AMPK (enhancing energy efficiency and autophagy).'
          }
        },
        {
          id: 'bt_longevity_6',
          title: 'NAD+ Metabolism and Sirtuins',
          duration: '25 mins',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Sirtuins are longevity proteins that require NAD+ to function; NAD+ levels decline with age and can be restored via precursors.',
          drillQuestion: {
            id: 'dq_bt_6',
            prompt: 'Which molecule serves as an essential coenzyme for sirtuin function?',
            options: [
              'ATP',
              'NAD+',
              'FAD',
              'Glucose'
            ],
            correctIndex: 1,
            explanation: 'Sirtuins are NAD+-dependent deacetylases, meaning they require NAD+ to carry out their enzymatic functions related to cellular health.'
          }
        }
      ]
    },
    {
      id: 'mod_crispr_mrna',
      code: '3.2',
      title: 'CRISPR Gene Editing & mRNA Platforms',
      description: 'Master the technologies rewriting the genetic code and developing next-gen therapeutics.',
      lessons: [
        {
          id: 'bt_crispr_1',
          title: 'CRISPR-Cas9 Fundamentals',
          duration: '25 mins',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'CRISPR-Cas9 acts as molecular scissors guided by an RNA sequence to make targeted cuts in DNA.',
          drillQuestion: {
            id: 'dq_bt_7',
            prompt: 'What specifies the exact location where the Cas9 nuclease will cut the DNA?',
            options: [
              'The PAM sequence alone',
              'The guide RNA (gRNA) matching the target DNA',
              'Random chance interactions',
              'The length of the Cas9 protein'
            ],
            correctIndex: 1,
            explanation: 'The guide RNA (gRNA) contains a sequence complimentary to the target DNA, directing Cas9 to the precise location for cleavage.'
          }
        },
        {
          id: 'bt_crispr_2',
          title: 'Base Editing and Prime Editing',
          duration: '30 mins',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Base and prime editing enable precise single-letter DNA changes without causing double-strand breaks, reducing off-target mutations.',
          drillQuestion: {
            id: 'dq_bt_8',
            prompt: 'How does Base Editing differ from traditional CRISPR-Cas9?',
            options: [
              'It completely removes large sections of chromosomes.',
              'It chemically converts one DNA letter to another without double-strand breaks.',
              'It relies entirely on viral vectors for delivery.',
              'It only works on RNA, not DNA.'
            ],
            correctIndex: 1,
            explanation: 'Base editing uses a modified Cas nuclease linked to a deaminase enzyme to chemically alter a single nucleotide base without severing the DNA double helix.'
          }
        },
        {
          id: 'bt_crispr_3',
          title: 'mRNA Vaccine Architecture',
          duration: '30 mins',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'mRNA therapies deliver genetic instructions to cells, utilizing lipid nanoparticles (LNPs) for delivery and modified nucleosides to avoid immune rejection.',
          drillQuestion: {
            id: 'dq_bt_9',
            prompt: 'What is the primary role of Lipid Nanoparticles (LNPs) in mRNA vaccines?',
            options: [
              'To replicate the mRNA inside the body',
              'To act as the primary antigen for the immune system',
              'To protect the mRNA from degradation and facilitate cellular entry',
              'To permanently alter the host\'s DNA'
            ],
            correctIndex: 2,
            explanation: 'LNPs encapsulate the fragile mRNA, protecting it from enzymatic degradation in the blood and helping it cross the cell membrane.'
          }
        },
        {
          id: 'bt_crispr_4',
          title: 'Designing gRNA for Gene Knockout',
          duration: '35 mins',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Effective gRNA design requires maximizing on-target efficiency while minimizing off-target binding across the genome.',
          codeSnippet: `def calculate_gc_content(sequence):\n    g_count = sequence.count('G')\n    c_count = sequence.count('C')\n    return (g_count + c_count) / len(sequence) * 100\n\n# Ideal gRNA GC content is often 40-60%\ngrna = "GATCGATCGATCGATC"\nprint(f"GC Content: {calculate_gc_content(grna)}%")`,
          drillQuestion: {
            id: 'dq_bt_10',
            prompt: 'When designing a guide RNA (gRNA), why is analyzing the entire host genome necessary?',
            options: [
              'To ensure the gRNA replicates properly',
              'To identify and avoid potential off-target binding sites',
              'To determine the total GC content of the organism',
              'To select the correct delivery vector'
            ],
            correctIndex: 1,
            explanation: 'Genome-wide analysis ensures the chosen gRNA sequence is unique to the target site, preventing unintended edits (off-target effects) elsewhere.'
          }
        },
        {
          id: 'bt_crispr_5',
          title: 'In Vivo vs Ex Vivo Gene Therapy',
          duration: '25 mins',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Ex vivo edits cells outside the body before reinfusion, while in vivo delivers editing machinery directly into the patient.',
          drillQuestion: {
            id: 'dq_bt_11',
            prompt: 'CAR-T cell therapy for cancer is primarily an example of which type of gene editing approach?',
            options: [
              'In vivo',
              'Ex vivo',
              'In silico',
              'Epigenetic'
            ],
            correctIndex: 1,
            explanation: 'CAR-T therapy involves extracting patient T-cells, engineering them outside the body (ex vivo) to target cancer, and then reinfusing them.'
          }
        }
      ]
    },
    {
      id: 'mod_compbio_ai_drug',
      code: '3.3',
      title: 'Computational Biology & AI Drug Discovery',
      description: 'Leverage machine learning and bioinformatics to accelerate the discovery of novel therapeutics.',
      lessons: [
        {
          id: 'bt_compbio_1',
          title: 'Bioinformatics and Genomic Data Parsing',
          duration: '25 mins',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Bioinformatics involves managing and analyzing large biological datasets, such as DNA sequences in FASTA/FASTQ formats.',
          codeSnippet: `def parse_fasta(file_path):\n    sequences = {}\n    with open(file_path, 'r') as f:\n        header = ''\n        for line in f:\n            line = line.strip()\n            if line.startswith('>'):\n                header = line[1:]\n                sequences[header] = ''\n            else:\n                sequences[header] += line\n    return sequences`,
          drillQuestion: {
            id: 'dq_bt_12',
            prompt: 'In a standard FASTA file, what character designates the start of a sequence header?',
            options: [
              '@',
              '>',
              '#',
              '$'
            ],
            correctIndex: 1,
            explanation: 'In the FASTA format, sequence headers (descriptions) always begin with the greater-than (>) symbol.'
          }
        },
        {
          id: 'bt_compbio_2',
          title: 'Protein Structure Prediction: AlphaFold',
          duration: '35 mins',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'AI models like AlphaFold predict a protein\'s 3D structure from its 1D amino acid sequence with near-experimental accuracy.',
          drillQuestion: {
            id: 'dq_bt_13',
            prompt: 'What was the primary breakthrough achieved by AlphaFold 2?',
            options: [
              'Creating synthetic DNA sequences from scratch',
              'Predicting protein 3D structures from amino acid sequences',
              'Curing targeted monogenic diseases in vivo',
              'Sequencing whole genomes in under an hour'
            ],
            correctIndex: 1,
            explanation: 'AlphaFold revolutionized structural biology by accurately predicting how proteins fold into 3D shapes based solely on their sequence.'
          }
        },
        {
          id: 'bt_compbio_3',
          title: 'Molecular Docking and Virtual Screening',
          duration: '30 mins',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Virtual screening uses physics-based or ML models to evaluate millions of small molecules for their binding affinity to a target protein.',
          formula: 'Binding Affinity (ΔG) = ΔH - TΔS',
          drillQuestion: {
            id: 'dq_bt_14',
            prompt: 'In molecular docking, what does a highly negative ΔG (Gibbs free energy) score indicate?',
            options: [
              'The molecule is highly toxic',
              'The molecule has a strong, spontaneous binding affinity to the target',
              'The molecule will not bind to the target',
              'The molecule degrades the protein instantly'
            ],
            correctIndex: 1,
            explanation: 'A more negative ΔG value indicates a spontaneous and thermodynamically favorable binding event, representing stronger affinity.'
          }
        },
        {
          id: 'bt_compbio_4',
          title: 'Generative AI for De Novo Drug Design',
          duration: '30 mins',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Generative models (like GANs and diffusion models) can invent entirely new chemical structures optimized for specific biological targets.',
          drillQuestion: {
            id: 'dq_bt_15',
            prompt: 'What is the primary goal of "de novo" drug design using Generative AI?',
            options: [
              'To find existing FDA-approved drugs for new diseases',
              'To generate completely novel molecular structures that do not exist in current databases',
              'To predict the side effects of known compounds',
              'To sequence patient genomes faster'
            ],
            correctIndex: 1,
            explanation: 'De novo (from scratch) design uses AI to create entirely new, unrecorded chemical entities tailored to bind to specific targets.'
          }
        },
        {
          id: 'bt_compbio_5',
          title: 'Pharmacogenomics and Personalized Medicine',
          duration: '25 mins',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Pharmacogenomics studies how an individual\'s genetic makeup affects their response to drugs, enabling precision dosing.',
          drillQuestion: {
            id: 'dq_bt_16',
            prompt: 'How does pharmacogenomics primarily influence drug prescription?',
            options: [
              'By ensuring all patients receive the exact same dose',
              'By relying entirely on the patient\'s blood type',
              'By tailoring drug choice and dosage based on genetic variants in metabolic enzymes',
              'By replacing traditional drugs with herbal supplements'
            ],
            correctIndex: 2,
            explanation: 'It utilizes genetic information, particularly variations in cytochrome P450 enzymes, to predict drug efficacy and toxicity per patient.'
          }
        }
      ]
    },
    {
      id: 'mod_neurobio_biomarkers',
      code: '3.4',
      title: 'Neurobiology & Biomarker Optimization',
      description: 'Understand the neurochemical foundations of performance and how to track vital biomarkers.',
      lessons: [
        {
          id: 'bt_neuro_1',
          title: 'The Dopaminergic System and Motivation',
          duration: '25 mins',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Dopamine is not just about pleasure; it mediates motivation, reward prediction error, and goal-directed behavior.',
          drillQuestion: {
            id: 'dq_bt_17',
            prompt: 'In neuroscience, what does "Reward Prediction Error" refer to regarding dopamine?',
            options: [
              'Dopamine dropping to zero when a task is finished',
              'The difference between expected reward and actual reward, driving learning',
              'An allergic reaction to high-dopamine foods',
              'The inability to feel pleasure from rewards'
            ],
            correctIndex: 1,
            explanation: 'Dopamine spikes when a reward is greater than expected and dips when it is less, teaching the brain which behaviors to repeat.'
          }
        },
        {
          id: 'bt_neuro_2',
          title: 'Serotonin, GABA, and Neurotransmitter Balance',
          duration: '30 mins',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Serotonin regulates mood and satisfaction, while GABA acts as the primary inhibitory neurotransmitter promoting calm.',
          drillQuestion: {
            id: 'dq_bt_18',
            prompt: 'Which of the following describes the primary role of GABA in the central nervous system?',
            options: [
              'Primary excitatory neurotransmitter',
              'Primary inhibitory neurotransmitter, reducing neuronal excitability',
              'Sole regulator of circadian rhythms',
              'Main neurotransmitter for muscle contraction'
            ],
            correctIndex: 1,
            explanation: 'GABA (Gamma-aminobutyric acid) blocks, or inhibits, certain brain signals and decreases activity in your nervous system, leading to calming effects.'
          }
        },
        {
          id: 'bt_neuro_3',
          title: 'Neuroplasticity and BDNF',
          duration: '25 mins',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Brain-Derived Neurotrophic Factor (BDNF) is a key protein that supports the survival of neurons and encourages the growth of new synapses (neuroplasticity).',
          drillQuestion: {
            id: 'dq_bt_19',
            prompt: 'Which lifestyle intervention is most robustly proven to increase systemic BDNF levels?',
            options: [
              'Prolonged sitting',
              'Aerobic exercise',
              'High sugar diets',
              'Sleep deprivation'
            ],
            correctIndex: 1,
            explanation: 'Vigorous aerobic exercise is one of the most effective and proven ways to naturally increase the production of BDNF in the brain.'
          }
        },
        {
          id: 'bt_neuro_4',
          title: 'Key Blood Biomarkers for Longevity',
          duration: '35 mins',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Optimal health tracking involves monitoring ApoB (cardiovascular risk), hs-CRP (inflammation), and HbA1c (metabolic health).',
          drillQuestion: {
            id: 'dq_bt_20',
            prompt: 'Why is ApoB often considered a superior marker to LDL cholesterol for assessing cardiovascular risk?',
            options: [
              'Because ApoB measures only HDL particles',
              'Because ApoB provides a direct count of all atherogenic (plaque-causing) particles',
              'Because ApoB measures blood glucose levels',
              'Because ApoB is cheaper to test'
            ],
            correctIndex: 1,
            explanation: 'Every atherogenic particle (LDL, VLDL, Lp(a)) contains exactly one ApoB molecule, so ApoB provides a precise count of total particle burden.'
          }
        },
        {
          id: 'bt_neuro_5',
          title: 'Continuous Glucose Monitoring (CGM) Analytics',
          duration: '30 mins',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'CGMs provide real-time data on glycemic variability, helping users flatten glucose spikes to prevent metabolic dysfunction.',
          codeSnippet: `def calculate_time_in_range(glucose_data, low_bound=70, high_bound=140):\n    in_range = sum(1 for val in glucose_data if low_bound <= val <= high_bound)\n    return (in_range / len(glucose_data)) * 100\n\ndata = [85, 90, 150, 110, 105, 160, 95]\nprint(f"Time in Range: {calculate_time_in_range(data):.1f}%")`,
          drillQuestion: {
            id: 'dq_bt_21',
            prompt: 'In continuous glucose monitoring, what is the significance of minimizing "Glycemic Variability"?',
            options: [
              'It ensures glucose remains consistently above 150 mg/dL',
              'It reduces oxidative stress and endothelial damage caused by sharp spikes and crashes',
              'It maximizes insulin resistance',
              'It allows for unlimited carbohydrate consumption'
            ],
            correctIndex: 1,
            explanation: 'High glycemic variability (large swings in blood sugar) generates reactive oxygen species, driving inflammation and aging.'
          }
        }
      ]
    },
    {
      id: 'mod_nutrition_microbiome',
      code: '3.5',
      title: 'Nutrition Science, Microbiome & Gut-Brain Axis',
      description: 'Explore the biochemical impact of diet and the critical role of gut flora in systemic health.',
      lessons: [
        {
          id: 'bt_nutri_1',
          title: 'Macronutrient Biochemistry',
          duration: '25 mins',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Proteins provide amino acids for repair, fats supply essential fatty acids and hormone precursors, and carbs provide rapid ATP.',
          drillQuestion: {
            id: 'dq_bt_22',
            prompt: 'Which essential macronutrient class acts as the foundational precursor for steroid hormones like testosterone and cortisol?',
            options: [
              'Complex Carbohydrates',
              'Dietary Dietary Fiber',
              'Dietary Fats (specifically Cholesterol)',
              'Branched-Chain Amino Acids'
            ],
            correctIndex: 2,
            explanation: 'Cholesterol, derived from dietary fats and endogenous synthesis, is the structural backbone of all steroid hormones.'
          }
        },
        {
          id: 'bt_nutri_2',
          title: 'The Gut Microbiome Composition',
          duration: '30 mins',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'A diverse gut microbiome, rich in taxa like Akkermansia and Bifidobacterium, is crucial for immunity and metabolic health.',
          drillQuestion: {
            id: 'dq_bt_23',
            prompt: 'What primary metabolic byproduct of gut bacteria fermenting dietary fiber is highly beneficial for colon health?',
            options: [
              'Lactic Acid',
              'Short-Chain Fatty Acids (SCFAs, e.g., Butyrate)',
              'Ethanol',
              'Ammonia'
            ],
            correctIndex: 1,
            explanation: 'SCFAs like butyrate serve as the primary energy source for colonocytes and exert potent anti-inflammatory effects systemically.'
          }
        },
        {
          id: 'bt_nutri_3',
          title: 'The Gut-Brain Axis and Vagus Nerve',
          duration: '30 mins',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'The gut and brain communicate bidirectionally via the vagus nerve and microbial metabolites, influencing mood and cognition.',
          drillQuestion: {
            id: 'dq_bt_24',
            prompt: 'Which major nerve acts as the primary neurological superhighway between the gut and the brain?',
            options: [
              'Sciatic Nerve',
              'Optic Nerve',
              'Vagus Nerve',
              'Trigeminal Nerve'
            ],
            correctIndex: 2,
            explanation: 'The vagus nerve is the main component of the parasympathetic nervous system and regulates bidirectional communication in the gut-brain axis.'
          }
        },
        {
          id: 'bt_nutri_4',
          title: 'Fasting and Autophagy',
          duration: '35 mins',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Fasting triggers autophagy, a cellular recycling program that degrades damaged proteins and organelles, extending healthspan.',
          drillQuestion: {
            id: 'dq_bt_25',
            prompt: 'Biochemically, what is the primary trigger that initiates the process of autophagy during fasting?',
            options: [
              'High insulin and high mTOR activation',
              'Depletion of intracellular ATP leading to AMPK activation and mTOR inhibition',
              'Elevated blood glucose levels',
              'Increased glycogen storage'
            ],
            correctIndex: 1,
            explanation: 'Nutrient deprivation decreases cellular energy (ATP), activating AMPK which subsequently inhibits mTOR, the primary negative regulator of autophagy.'
          }
        },
        {
          id: 'bt_nutri_5',
          title: 'Nutrigenomics',
          duration: '25 mins',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Nutrigenomics studies how specific foods and nutrients interact with our genes to alter gene expression and cellular function.',
          drillQuestion: {
            id: 'dq_bt_26',
            prompt: 'What is the focus of nutrigenomics?',
            options: [
              'How to extract pure DNA from food sources',
              'How specific nutrients affect gene expression and how genetic variation affects nutrient metabolism',
              'Engineering crops for higher yields',
              'Developing artificial, synthetic food substitutes'
            ],
            correctIndex: 1,
            explanation: 'Nutrigenomics bridges nutrition and genomics to understand how diet influences genetic expression and how genes dictate nutritional needs.'
          }
        },
        {
          id: 'bt_nutri_6',
          title: 'Exogenous Ketones and Metabolic Flexibility',
          duration: '30 mins',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Metabolic flexibility is the ability to efficiently switch between burning carbs and fats (ketones) based on availability.',
          drillQuestion: {
            id: 'dq_bt_27',
            prompt: 'What is the primary ketone body produced by the liver that serves as an alternative fuel for the brain?',
            options: [
              'Beta-hydroxybutyrate (BHB)',
              'Acetone',
              'Acetoacetate',
              'Pyruvate'
            ],
            correctIndex: 0,
            explanation: 'BHB is the most abundant and stable ketone body, efficiently crossing the blood-brain barrier to fuel neurons during glucose scarcity.'
          }
        }
      ]
    },
    {
      id: 'mod_sleep_circadian',
      code: '3.6',
      title: 'Sleep Engineering, Circadian Biology & HRV Optimization',
      description: 'Master the biology of recovery, circadian entrainment, and nervous system regulation.',
      lessons: [
        {
          id: 'bt_sleep_1',
          title: 'Circadian Rhythms and Melanopsin',
          duration: '25 mins',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'The suprachiasmatic nucleus (SCN) is the master clock, entrained primarily by blue/green light hitting melanopsin receptors in the eye.',
          drillQuestion: {
            id: 'dq_bt_28',
            prompt: 'Which specific photoreceptors in the retina are primarily responsible for non-image forming circadian entrainment?',
            options: [
              'Rods',
              'Cones',
              'Intrinsically photosensitive retinal ganglion cells (ipRGCs) containing melanopsin',
              'Macula lutea'
            ],
            correctIndex: 2,
            explanation: 'ipRGCs contain melanopsin and send light signals directly to the SCN to regulate circadian rhythms, independent of conscious vision.'
          }
        },
        {
          id: 'bt_sleep_2',
          title: 'Sleep Architecture: SWS and REM',
          duration: '30 mins',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Slow Wave Sleep (Deep Sleep) is vital for physical repair and glymphatic clearance, while REM sleep processes emotions and consolidates memory.',
          drillQuestion: {
            id: 'dq_bt_29',
            prompt: 'During which phase of sleep does the brain\'s glymphatic system become highly active to clear metabolic waste like amyloid-beta?',
            options: [
              'Stage 1 (Light Sleep)',
              'Stage 2',
              'Slow Wave Sleep (Stage 3/Deep Sleep)',
              'REM Sleep'
            ],
            correctIndex: 2,
            explanation: 'Glymphatic clearance of neurotoxic waste is exponentially increased during the synchronized, slow-wave activity of deep sleep.'
          }
        },
        {
          id: 'bt_sleep_3',
          title: 'Heart Rate Variability (HRV) as a Metric',
          duration: '30 mins',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'HRV measures the variation in time between heartbeats; higher HRV indicates a resilient, adaptable autonomic nervous system.',
          formula: 'RMSSD = Root Mean Square of Successive Differences (Standard HRV metric)',
          drillQuestion: {
            id: 'dq_bt_30',
            prompt: 'In terms of autonomic nervous system balance, what does a consistently low HRV typically indicate?',
            options: [
              'Parasympathetic dominance (extreme relaxation)',
              'Optimal recovery and readiness',
              'Sympathetic dominance (chronic stress or under-recovery)',
              'Perfect cardiovascular health'
            ],
            correctIndex: 2,
            explanation: 'Low HRV means the heart is beating rigidly like a metronome, indicating the "fight or flight" sympathetic system is dominating over the "rest and digest" system.'
          }
        },
        {
          id: 'bt_sleep_4',
          title: 'Adenosine and Sleep Pressure',
          duration: '25 mins',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Adenosine builds up in the brain while awake, creating "sleep pressure." Caffeine temporarily blocks adenosine receptors.',
          drillQuestion: {
            id: 'dq_bt_31',
            prompt: 'How does caffeine promote wakefulness at a neurochemical level?',
            options: [
              'By destroying adenosine molecules in the blood',
              'By acting as an antagonist, binding to and blocking adenosine receptors',
              'By directly stimulating the release of melatonin',
              'By converting adenosine back into ATP'
            ],
            correctIndex: 1,
            explanation: 'Caffeine has a similar shape to adenosine and occupies its receptors without activating them, masking the feeling of sleep pressure.'
          }
        },
        {
          id: 'bt_sleep_5',
          title: 'Thermal Regulation in Sleep',
          duration: '25 mins',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Core body temperature must drop by 1-2°F to initiate and maintain deep sleep, making a cool sleep environment critical.',
          drillQuestion: {
            id: 'dq_bt_32',
            prompt: 'Why does taking a warm bath or shower before bed paradoxically help lower core body temperature?',
            options: [
              'It forces the body to stop producing heat permanently',
              'It causes vasodilation in the extremities, radiating core heat outward and cooling the body',
              'It lowers the temperature of the water over time',
              'It dehydrates the body, which drops temperature'
            ],
            correctIndex: 1,
            explanation: 'Warm water brings blood to the surface of the skin (vasodilation). When you step out, that heat radiates away, causing a rapid drop in core temperature.'
          }
        }
      ]
    },
    {
      id: 'mod_hormone_optimization',
      code: '3.7',
      title: 'Hormone Optimization: Testosterone, Cortisol & Thyroid',
      description: 'Navigate the endocrine system and strategies to balance key performance hormones.',
      lessons: [
        {
          id: 'bt_hormone_1',
          title: 'The HPA Axis and Cortisol Dynamics',
          duration: '30 mins',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'The Hypothalamic-Pituitary-Adrenal (HPA) axis controls cortisol. Acute cortisol is necessary for alertness; chronic cortisol drives aging.',
          drillQuestion: {
            id: 'dq_bt_33',
            prompt: 'What is the "Cortisol Awakening Response" (CAR)?',
            options: [
              'A dangerous spike in stress hormones leading to panic attacks',
              'A natural, sharp increase in cortisol secretion immediately upon waking to promote alertness',
              'The complete suppression of cortisol in the morning',
              'The conversion of cortisol into melatonin'
            ],
            correctIndex: 1,
            explanation: 'CAR is a healthy, natural physiological response where cortisol spikes 30-45 minutes after waking to mobilize energy for the day.'
          }
        },
        {
          id: 'bt_hormone_2',
          title: 'Testosterone and Androgen Optimization',
          duration: '35 mins',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Testosterone is crucial for muscle mass, mood, and drive. It requires adequate sleep, zinc, magnesium, and dietary fats to synthesize.',
          drillQuestion: {
            id: 'dq_bt_34',
            prompt: 'Which enzyme is responsible for the conversion (aromatization) of testosterone into estrogen?',
            options: [
              '5-alpha reductase',
              'Aromatase',
              'Hexokinase',
              'Amylase'
            ],
            correctIndex: 1,
            explanation: 'Aromatase converts androgens like testosterone into estrogens. High body fat can increase aromatase activity, lowering testosterone.'
          }
        },
        {
          id: 'bt_hormone_3',
          title: 'Thyroid Function and Metabolism',
          duration: '25 mins',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'The thyroid regulates basal metabolic rate. T4 must be converted to the active form T3, a process dependent on selenium and iodine.',
          drillQuestion: {
            id: 'dq_bt_35',
            prompt: 'Which thyroid hormone is the biologically active form that heavily influences cellular metabolism?',
            options: [
              'Thyroid Stimulating Hormone (TSH)',
              'Thyroxine (T4)',
              'Triiodothyronine (T3)',
              'Reverse T3 (rT3)'
            ],
            correctIndex: 2,
            explanation: 'While the thyroid produces mostly T4, it is largely inactive until converted into T3, which directly affects metabolism at the cellular level.'
          }
        },
        {
          id: 'bt_hormone_4',
          title: 'Insulin Sensitivity and Glucagon',
          duration: '30 mins',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Insulin stores energy, while glucagon mobilizes it. High insulin sensitivity ensures minimal insulin is needed to clear blood glucose.',
          drillQuestion: {
            id: 'dq_bt_36',
            prompt: 'In opposition to insulin, what is the primary function of glucagon?',
            options: [
              'To force glucose into muscle cells',
              'To stimulate the liver to release stored glucose (glycogenolysis) into the bloodstream',
              'To convert glucose into fat',
              'To lower blood pressure'
            ],
            correctIndex: 1,
            explanation: 'Glucagon acts to raise blood sugar during fasting or exercise by signaling the liver to break down glycogen and release glucose.'
          }
        },
        {
          id: 'bt_hormone_5',
          title: 'Endocrine Disrupting Chemicals (EDCs)',
          duration: '25 mins',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'EDCs like BPA and phthalates mimic or block natural hormones, interfering with reproductive and metabolic pathways.',
          drillQuestion: {
            id: 'dq_bt_37',
            prompt: 'How do Xenoestrogens primarily disrupt the endocrine system?',
            options: [
              'They destroy estrogen receptors',
              'They mimic natural estrogen, binding to receptors and causing inappropriate cellular responses',
              'They increase the production of pure testosterone',
              'They block the absorption of vitamin D'
            ],
            correctIndex: 1,
            explanation: 'Xenoestrogens (found in many plastics) structurally resemble estrogen and can bind to estrogen receptors, causing endocrine dysfunction.'
          }
        }
      ]
    },
    {
      id: 'mod_nootropics_cognitive',
      code: '3.8',
      title: 'Nootropics, Adaptogens & Cognitive Enhancement',
      description: 'Explore compounds and protocols used to safely elevate cognitive function and stress resilience.',
      lessons: [
        {
          id: 'bt_nootropics_1',
          title: 'Principles of Nootropics',
          duration: '25 mins',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'True nootropics must enhance cognition while being neuroprotective and lacking significant toxicity or addictive properties.',
          drillQuestion: {
            id: 'dq_bt_38',
            prompt: 'Based on the original definition by Dr. Corneliu Giurgea, which of the following is a strict requirement for a compound to be considered a true nootropic?',
            options: [
              'It must act as a strong central nervous system stimulant',
              'It must cause a rapid surge in dopamine',
              'It must protect the brain and be virtually non-toxic',
              'It must require a prescription'
            ],
            correctIndex: 2,
            explanation: 'Giurgea\'s definition requires that a nootropic enhances learning/memory while possessing very low toxicity and protecting the brain against injury.'
          }
        },
        {
          id: 'bt_nootropics_2',
          title: 'Cholinergics and Memory',
          duration: '30 mins',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Acetylcholine is the primary neurotransmitter for learning and memory. Alpha-GPC and Citicoline supply choline to the brain.',
          drillQuestion: {
            id: 'dq_bt_39',
            prompt: 'Why are cholinesterase inhibitors (like Huperzine A) sometimes used as cognitive enhancers?',
            options: [
              'They increase the breakdown of acetylcholine',
              'They block the enzyme that degrades acetylcholine, leading to higher levels in the synaptic cleft',
              'They directly create new neurons',
              'They block cholinergic receptors'
            ],
            correctIndex: 1,
            explanation: 'By inhibiting acetylcholinesterase (the cleanup enzyme), these compounds allow acetylcholine to persist longer, enhancing memory pathways.'
          }
        },
        {
          id: 'bt_nootropics_3',
          title: 'Adaptogens and Stress Resilience',
          duration: '30 mins',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Adaptogens like Ashwagandha and Rhodiola Rosea help the body maintain homeostasis by modulating the HPA axis and cortisol release.',
          drillQuestion: {
            id: 'dq_bt_40',
            prompt: 'What is the defining characteristic of an adaptogen?',
            options: [
              'It forces cortisol levels to zero',
              'It nonspecifically increases the body\'s resistance to various stressors and helps restore homeostasis',
              'It acts as a potent sedative',
              'It only works on physical muscle fatigue'
            ],
            correctIndex: 1,
            explanation: 'Adaptogens "adapt" to what the body needs, buffering against stress by blunting extreme spikes or drops in stress hormones.'
          }
        },
        {
          id: 'bt_nootropics_4',
          title: 'L-Theanine and Caffeine Synergy',
          duration: '25 mins',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'L-Theanine (found in green tea) promotes alpha brain waves and relaxation, smoothing out the jittery effects of caffeine.',
          drillQuestion: {
            id: 'dq_bt_41',
            prompt: 'What specific type of brain wave is notably increased by the consumption of L-Theanine?',
            options: [
              'Delta waves (Deep sleep)',
              'Beta waves (Active focus)',
              'Alpha waves (Relaxed alertness)',
              'Gamma waves (High-level processing)'
            ],
            correctIndex: 2,
            explanation: 'L-Theanine crosses the blood-brain barrier and increases Alpha wave activity, promoting a state of calm, focused wakefulness.'
          }
        },
        {
          id: 'bt_nootropics_5',
          title: 'Racetams and AMPA Receptor Modulation',
          duration: '35 mins',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'The racetam family (e.g., Piracetam) modulates AMPA and NMDA glutamate receptors to enhance neuroplasticity and cognitive processing.',
          drillQuestion: {
            id: 'dq_bt_42',
            prompt: 'Which primary neurotransmitter system is most prominently modulated by the racetam class of nootropics?',
            options: [
              'Serotonergic system',
              'Glutamatergic system (AMPA/NMDA)',
              'Histaminergic system',
              'Endocannabinoid system'
            ],
            correctIndex: 1,
            explanation: 'Racetams primarily function as positive allosteric modulators of AMPA receptors, enhancing glutamate signaling critical for memory formation.'
          }
        }
      ]
    },
    {
      id: 'mod_synthetic_bio_computing',
      code: '3.9',
      title: 'Synthetic Biology & Biological Computing',
      description: 'Explore the frontier of engineering biological systems and DNA data storage.',
      lessons: [
        {
          id: 'bt_synbio_1',
          title: 'Introduction to Synthetic Biology',
          duration: '25 mins',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Synthetic biology treats biology as an engineering discipline, designing standard biological parts (BioBricks) to build new functions.',
          drillQuestion: {
            id: 'dq_bt_43',
            prompt: 'In synthetic biology, what is a "BioBrick"?',
            options: [
              'A synthetic cell made entirely of plastic',
              'A standardized DNA sequence with a specific function that can be mixed and matched',
              'A computational model of a protein',
              'A type of bioreactor'
            ],
            correctIndex: 1,
            explanation: 'BioBricks are standardized sequences of DNA (promoters, coding sequences, terminators) designed to be easily assembled into complex biological circuits.'
          }
        },
        {
          id: 'bt_synbio_2',
          title: 'Metabolic Engineering and Biomanufacturing',
          duration: '30 mins',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Microbes can be engineered to act as microscopic factories, producing everything from insulin to synthetic spider silk.',
          drillQuestion: {
            id: 'dq_bt_44',
            prompt: 'What is the primary goal of metabolic engineering in a biomanufacturing context?',
            options: [
              'To kill harmful bacteria',
              'To redesign a microbe\'s metabolic pathways to maximize the yield of a specific target chemical',
              'To make microbes visible to the naked eye',
              'To increase the speed of cellular division infinitely'
            ],
            correctIndex: 1,
            explanation: 'Metabolic engineering reroutes cellular metabolism, upregulating desired pathways and knocking out competing ones to optimize chemical production.'
          }
        },
        {
          id: 'bt_synbio_3',
          title: 'Genetic Logic Gates',
          duration: '35 mins',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Biologists can create boolean logic gates (AND, OR, NOT) using DNA and proteins to make cells process information and make decisions.',
          drillQuestion: {
            id: 'dq_bt_45',
            prompt: 'How would a biological "AND" gate function in a synthetic cell?',
            options: [
              'It produces an output if EITHER Input A or Input B is present',
              'It produces an output ONLY if BOTH Input A and Input B are present',
              'It stops producing an output if Input A is present',
              'It spontaneously produces an output with no inputs'
            ],
            correctIndex: 1,
            explanation: 'Just like in computing, a biological AND gate requires the simultaneous presence of two specific inputs (e.g., two different chemicals) to trigger gene expression.'
          }
        },
        {
          id: 'bt_synbio_4',
          title: 'DNA Data Storage',
          duration: '30 mins',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'DNA is an ultra-dense, highly stable medium for archiving digital data, translating binary (0s and 1s) into base pairs (A, C, T, G).',
          codeSnippet: `def binary_to_dna(binary_str):\n    # Simple encoding: 00=A, 01=C, 10=G, 11=T\n    mapping = {'00':'A', '01':'C', '10':'G', '11':'T'}\n    dna = ""\n    for i in range(0, len(binary_str), 2):\n        chunk = binary_str[i:i+2]\n        dna += mapping[chunk]\n    return dna\n\nprint(binary_to_dna("01100011")) # Output: CGAT`,
          drillQuestion: {
            id: 'dq_bt_46',
            prompt: 'Which of the following is a major advantage of using DNA for digital data storage?',
            options: [
              'Extremely fast read and write speeds compared to SSDs',
              'Incredible data density and longevity spanning thousands of years',
              'It can be plugged directly into standard USB ports',
              'It requires constant electrical power to maintain data'
            ],
            correctIndex: 1,
            explanation: 'DNA can store massive amounts of data in a microscopic volume and, if kept cool and dry, can last for millennia without degradation.'
          }
        },
        {
          id: 'bt_synbio_5',
          title: 'Xenobiology and Expanded Genetic Alphabets',
          duration: '25 mins',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Xenobiology explores creating life with unnatural base pairs (beyond A, T, C, G), expanding the possibilities of synthetic proteins.',
          drillQuestion: {
            id: 'dq_bt_47',
            prompt: 'What does expanding the genetic alphabet (adding unnatural base pairs) allow scientists to do?',
            options: [
              'Make DNA visible to the human eye',
              'Incorporate non-standard amino acids into proteins, creating entirely new protein functions',
              'Prevent DNA from ever mutating',
              'Translate DNA directly into English text'
            ],
            correctIndex: 1,
            explanation: 'By adding new letters to the DNA alphabet, cells can be programmed to use novel amino acids, vastly expanding the chemical diversity of engineered proteins.'
          }
        }
      ]
    },
    {
      id: 'mod_medai_diagnostics',
      code: '3.10',
      title: 'Medical AI, Diagnostics & Telemedicine Platforms',
      description: 'Understand how AI and digital health are transforming diagnostics and patient care.',
      lessons: [
        {
          id: 'bt_medai_1',
          title: 'Computer Vision in Radiology',
          duration: '30 mins',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Deep learning models (CNNs) can detect anomalies in X-rays, MRIs, and CT scans with accuracy matching or exceeding human radiologists.',
          drillQuestion: {
            id: 'dq_bt_48',
            prompt: 'Which type of neural network is most predominantly used for analyzing medical images like MRIs?',
            options: [
              'Recurrent Neural Networks (RNNs)',
              'Convolutional Neural Networks (CNNs)',
              'Generative Adversarial Networks (GANs)',
              'Long Short-Term Memory (LSTMs)'
            ],
            correctIndex: 1,
            explanation: 'CNNs are highly optimized for spatial data and image recognition, making them the standard architecture for radiology AI.'
          }
        },
        {
          id: 'bt_medai_2',
          title: 'Predictive Analytics and EHRs',
          duration: '30 mins',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'AI analyzes Electronic Health Records (EHRs) to predict patient deterioration, sepsis risk, and hospital readmission rates.',
          drillQuestion: {
            id: 'dq_bt_49',
            prompt: 'What is a significant challenge in applying machine learning to Electronic Health Records (EHRs)?',
            options: [
              'Computers cannot read text data',
              'EHR data is often unstructured, noisy, and suffers from missing values',
              'EHRs contain only images, no text',
              'It is mathematically impossible to predict health outcomes'
            ],
            correctIndex: 1,
            explanation: 'EHRs are notorious for being fragmented, containing unstructured clinical notes, and having missing or erroneous entries, making data preprocessing difficult.'
          }
        },
        {
          id: 'bt_medai_3',
          title: 'Wearables and Continuous Biometric Tracking',
          duration: '25 mins',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Smartwatches and rings collect continuous longitudinal data (HR, HRV, SpO2, temp), allowing AI to detect illness before symptoms appear.',
          drillQuestion: {
            id: 'dq_bt_50',
            prompt: 'How can wearable devices detect the onset of an infection (like COVID-19) before a patient feels sick?',
            options: [
              'By analyzing voice patterns',
              'By directly detecting the virus on the skin',
              'By monitoring subtle deviations in resting heart rate, HRV, and skin temperature baselines',
              'By injecting micro-sensors into the bloodstream'
            ],
            correctIndex: 2,
            explanation: 'Infections cause an immune response that slightly raises resting heart rate and temperature while lowering HRV, which wearables can detect days before overt symptoms.'
          }
        },
        {
          id: 'bt_medai_4',
          title: 'Natural Language Processing in Clinical Workflows',
          duration: '30 mins',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'NLP tools (like ambient clinical voice AI) transcribe doctor-patient conversations and automatically structure clinical notes, reducing burnout.',
          drillQuestion: {
            id: 'dq_bt_51',
            prompt: 'What is the primary benefit of "ambient clinical intelligence" for physicians?',
            options: [
              'It diagnoses the patient automatically',
              'It records the visit and automatically generates structured clinical documentation, saving hours of manual data entry',
              'It orders prescriptions without human oversight',
              'It physically examines the patient'
            ],
            correctIndex: 1,
            explanation: 'Ambient AI listens to the visit in the background and drafts the clinical note (SOAP note), drastically reducing the administrative burden on doctors.'
          }
        },
        {
          id: 'bt_medai_5',
          title: 'Federated Learning in Healthcare',
          duration: '35 mins',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Federated learning trains AI models across multiple hospitals without sharing raw patient data, preserving privacy and adhering to HIPAA.',
          drillQuestion: {
            id: 'dq_bt_52',
            prompt: 'How does Federated Learning protect patient privacy while training AI models?',
            options: [
              'By sending all patient data to a secure central database',
              'By encrypting the data so the AI can\'t read it',
              'By sending the AI model to the local hospital data, updating the model, and only sharing the learned weights back to the central server',
              'By only training models on synthetic, fake patients'
            ],
            correctIndex: 2,
            explanation: 'Federated learning decentralizes the training process. The raw data never leaves the hospital; only the mathematical model updates are shared.'
          }
        }
      ]
    }
  ]
};



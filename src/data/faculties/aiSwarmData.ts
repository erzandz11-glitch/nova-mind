import { FrontierFaculty, QuizQuestion } from '../../types';

export const AI_SWARMS_FACULTY: FrontierFaculty = {
  id: 'ai_autonomous_swarms',
  name: 'Faculty of Advanced AI & Autonomous Swarms',
  shortTitle: 'AI & Swarms',
  iconName: 'Bot',
  emoji: '🤖',
  themeColor: 'indigo',
  accentHex: '#6366f1',
  glowClass: 'shadow-[0_0_35px_rgba(99,102,241,0.25)]',
  borderClass: 'border-indigo-500/30 hover:border-indigo-400/60',
  bgLightClass: 'bg-indigo-500/10 text-indigo-400',
  badgeClass: 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/30',
  headline: 'Autonomous Multi-Agent Swarms, RAG Pipelines & AI Product Monetization',
  description: 'Master frontier LLM architectures, multi-agent swarm orchestration, prompt warfare defense, fine-tuning with LoRA, and building profitable AI Micro-SaaS.',
  difficulty: 'Production Grade',
  simulatorName: 'Adversarial Jailbreak & Swarm DAG',
  simulatorTag: 'Multi-Agent Neural Sandbox',
  estimatedHours: 140,
  totalXp: 4200,
  completionPercent: 0,
  drillNodes: [],
  modules: [
    {
      id: 'mod_llm_rag',
      code: '7.1',
      title: 'LLM Architectures & RAG Pipelines',
      description: 'Master Transformer architectures and production-grade Retrieval-Augmented Generation.',
      lessons: [
        {
          id: 'ai_llm_01',
          title: 'Transformer Architecture Deep Dive',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Transformers process sequential data non-sequentially using self-attention mechanisms, enabling massive parallelization.',
          codeSnippet: `import torch
import torch.nn as nn

class SelfAttention(nn.Module):
    def __init__(self, embed_size, heads):
        super(SelfAttention, self).__init__()
        self.embed_size = embed_size
        self.heads = heads
        self.head_dim = embed_size // heads

        assert (self.head_dim * heads == embed_size), "Embed size needs to be div by heads"

        self.values = nn.Linear(self.head_dim, self.head_dim, bias=False)
        self.keys = nn.Linear(self.head_dim, self.head_dim, bias=False)
        self.queries = nn.Linear(self.head_dim, self.head_dim, bias=False)
        self.fc_out = nn.Linear(heads * self.head_dim, embed_size)

    def forward(self, values, keys, query, mask):
        # Implementation of self-attention mechanism
        pass`,
          drillQuestion: {
            id: 'dq_ai_llm_01',
            prompt: 'What is the primary advantage of the self-attention mechanism in Transformers over RNNs?',
            options: [
              'It processes data strictly sequentially',
              'It allows parallel processing and captures long-range dependencies',
              'It requires significantly less memory during inference',
              'It inherently understands the absolute position of tokens'
            ],
            correctIndex: 1,
            explanation: 'Self-attention allows the model to look at all tokens in the sequence simultaneously, enabling parallelization and better handling of long-range dependencies compared to the sequential nature of RNNs.'
          }
        },
        {
          id: 'ai_llm_02',
          title: 'Foundations of RAG',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Retrieval-Augmented Generation (RAG) grounds LLM outputs in external knowledge, reducing hallucinations.',
          codeSnippet: `from langchain.chains import RetrievalQA
from langchain.llms import OpenAI
from langchain.vectorstores import FAISS

# Assuming 'vectorstore' is previously initialized FAISS index
qa_chain = RetrievalQA.from_chain_type(
    llm=OpenAI(temperature=0),
    chain_type="stuff",
    retriever=vectorstore.as_retriever()
)
result = qa_chain.run("What are the latest fiscal policies?")`,
          drillQuestion: {
            id: 'dq_ai_llm_02',
            prompt: 'How does RAG primarily mitigate LLM hallucinations?',
            options: [
              'By increasing the parameter count of the LLM',
              'By providing retrieved contextual facts directly in the prompt',
              'By fine-tuning the model on specific datasets',
              'By using a lower temperature setting'
            ],
            correctIndex: 1,
            explanation: 'RAG fetches relevant documents and prepends them to the LLM prompt, forcing the model to generate answers grounded in the provided factual context.'
          }
        },
        {
          id: 'ai_llm_03',
          title: 'Advanced Chunking Strategies',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Semantic chunking improves retrieval quality by keeping related concepts together rather than relying on arbitrary text lengths.',
          codeSnippet: `from langchain.text_splitter import RecursiveCharacterTextSplitter

text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200,
    length_function=len,
    separators=["\\n\\n", "\\n", " ", ""]
)
docs = text_splitter.create_documents([raw_text])`,
          drillQuestion: {
            id: 'dq_ai_llm_03',
            prompt: 'Why is chunk overlap important when preparing documents for a vector database?',
            options: [
              'It reduces the total number of chunks',
              'It ensures context is not lost at the boundaries between chunks',
              'It makes embedding generation faster',
              'It decreases the storage requirements of the vector database'
            ],
            correctIndex: 1,
            explanation: 'Chunk overlap prevents crucial information or context from being split arbitrarily between two chunks, ensuring the retriever captures complete thoughts.'
          }
        },
        {
          id: 'ai_llm_04',
          title: 'Hybrid Search and Re-ranking',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Combining dense vector search with sparse keyword search and applying a cross-encoder re-ranker yields state-of-the-art retrieval performance.',
          codeSnippet: `from sentence_transformers import CrossEncoder
import numpy as np

reranker = CrossEncoder('cross-encoder/ms-marco-MiniLM-L-6-v2')
query = "How to install python?"
documents = ["Download from python.org", "Snakes are reptiles", "Use apt-get install python3"]

# Score pairs of (query, document)
scores = reranker.predict([[query, doc] for doc in documents])
best_doc_idx = np.argmax(scores)`,
          drillQuestion: {
            id: 'dq_ai_llm_04',
            prompt: 'What is the purpose of a cross-encoder in a search pipeline?',
            options: [
              'To generate vector embeddings for documents',
              'To perform the initial fast retrieval phase',
              'To precisely score and re-rank a small set of retrieved candidates',
              'To generate the final natural language answer'
            ],
            correctIndex: 2,
            explanation: 'Cross-encoders process the query and document together to capture deep semantic interactions, making them highly accurate for re-ranking candidates, though too slow for initial large-scale retrieval.'
          }
        },
        {
          id: 'ai_llm_05',
          title: 'GraphRAG: Knowledge Graphs in AI',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'GraphRAG extracts entities and relationships into a knowledge graph, enabling LLMs to answer complex multi-hop reasoning questions over large corpora.',
          drillQuestion: {
            id: 'dq_ai_llm_05',
            prompt: 'In what scenario does GraphRAG significantly outperform standard vector-based RAG?',
            options: [
              'Answering simple factual questions',
              'Summarizing a single short document',
              'Synthesizing information scattered across multiple documents requiring multi-hop reasoning',
              'Writing creative fiction'
            ],
            correctIndex: 2,
            explanation: 'GraphRAG builds structured representations of entities and their relationships, excelling at "connecting the dots" across entire datasets where standard RAG might fail to retrieve the right combination of separate chunks.'
          }
        },
        {
          id: 'ai_llm_06',
          title: 'Evaluating RAG Systems (RAGAS)',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'RAG systems must be quantitatively evaluated across dimensions like context precision, context recall, and answer faithfulness.',
          codeSnippet: `from ragas import evaluate
from ragas.metrics import faithfulness, answer_relevancy, context_precision

# Assuming 'dataset' contains question, answer, contexts, and ground_truth
result = evaluate(
    dataset,
    metrics=[
        faithfulness,
        answer_relevancy,
        context_precision,
    ],
)
print(result)`,
          drillQuestion: {
            id: 'dq_ai_llm_06',
            prompt: 'Which RAG metric measures whether the generated answer can be inferred entirely from the retrieved context?',
            options: [
              'Context Precision',
              'Answer Relevancy',
              'Context Recall',
              'Faithfulness'
            ],
            correctIndex: 3,
            explanation: 'Faithfulness (or groundedness) measures if the claims made in the generated answer are strictly supported by the retrieved contexts, penalizing hallucinations.'
          }
        }
      ]
    },
    {
      id: 'mod_swarms',
      code: '7.X',
      title: 'Multi-Agent Swarms',
      description: 'Design and deploy collaborative AI agent networks to solve complex tasks.',
      lessons: [
        {
          id: 'ai_swarm_01',
          title: 'Introduction to Autonomous Agents',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'An autonomous agent combines an LLM with memory, planning capabilities, and tools to execute complex goals independently.',
          drillQuestion: {
            id: 'dq_ai_swarm_01',
            prompt: 'What distinguishes an "Agent" from a standard LLM chatbot?',
            options: [
              'Agents use smaller models',
              'Agents only output structured JSON',
              'Agents have the ability to use tools, maintain state, and reason about a sequence of actions',
              'Agents do not require prompts'
            ],
            correctIndex: 2,
            explanation: 'Agents are designed with agency; they use the LLM as a reasoning engine to decide which tools to call, analyze the tool output, and plan subsequent steps to achieve a goal.'
          }
        },
        {
          id: 'ai_swarm_02',
          title: 'CrewAI Framework Fundamentals',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'CrewAI structures multi-agent systems by defining specific roles, goals, and backstories for agents, assembling them into tasks and crews.',
          codeSnippet: `from crewai import Agent, Task, Crew

researcher = Agent(
    role='Senior Researcher',
    goal='Uncover groundbreaking technologies in AI',
    backstory='You are a tech-savvy researcher.',
    verbose=True
)

task = Task(
    description='Identify the next big trend in AI.',
    agent=researcher,
    expected_output='A bulleted list of 3 trends.'
)

crew = Crew(agents=[researcher], tasks=[task])
result = crew.kickoff()`,
          drillQuestion: {
            id: 'dq_ai_swarm_02',
            prompt: 'In CrewAI, what is the purpose of providing a "backstory" to an Agent?',
            options: [
              'It provides context for the LLM to adopt a specific persona and reasoning style',
              'It serves as the authentication token for the API',
              'It dictates the programming language the agent will use',
              'It defines the hard timeout limits for the agent'
            ],
            correctIndex: 0,
            explanation: 'The backstory grounds the agent in a specific persona, influencing how it interprets data, interacts with other agents, and formulates its responses.'
          }
        },
        {
          id: 'ai_swarm_03',
          title: 'LangGraph & Stateful Workflows',
          duration: '40 min',
          durationSeconds: 2400,
          completed: false,
          keyTakeaway: 'LangGraph enables cyclic, stateful multi-agent workflows modeled as graphs, essential for tasks requiring reflection and human-in-the-loop.',
          codeSnippet: `from langgraph.graph import StateGraph, END
from typing import TypedDict, Annotated
import operator

class AgentState(TypedDict):
    messages: Annotated[list, operator.add]

workflow = StateGraph(AgentState)

# Add nodes and edges
workflow.add_node("agent", call_model)
workflow.add_node("tools", execute_tools)
workflow.add_conditional_edges("agent", should_continue)
workflow.add_edge("tools", "agent")

app = workflow.compile()`,
          drillQuestion: {
            id: 'dq_ai_swarm_03',
            prompt: 'What is a key capability introduced by LangGraph compared to standard linear LangChain chains?',
            options: [
              'Faster token generation',
              'The ability to model cyclical graphs (loops) for reflection and retry logic',
              'Built-in support for vector databases',
              'Automatic model fine-tuning'
            ],
            correctIndex: 1,
            explanation: 'LangGraph allows for cyclic computational steps, which are crucial for agentic behaviors where an agent might need to critique its own output and loop back to revise it.'
          }
        },
        {
          id: 'ai_swarm_04',
          title: 'Agentic Design Patterns',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Common patterns include Reflection, Tool Use, Planning (Plan-and-Solve), and Multi-Agent Collaboration.',
          drillQuestion: {
            id: 'dq_ai_swarm_04',
            prompt: 'Which agent design pattern involves the agent creating a step-by-step itinerary before executing any actions?',
            options: [
              'ReAct',
              'Plan-and-Solve',
              'Reflection',
              'Zero-shot tool use'
            ],
            correctIndex: 1,
            explanation: 'The Plan-and-Solve pattern explicitely separates the planning phase from execution, reducing the likelihood of the agent getting stuck in loops during complex tasks.'
          }
        },
        {
          id: 'ai_swarm_05',
          title: 'Building Custom Agent Tools',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Custom tools extend agent capabilities; they require clear descriptions and well-defined schemas so the LLM knows exactly when and how to invoke them.',
          codeSnippet: `from langchain.tools import tool

@tool
def calculate_shipping_cost(weight: float, destination: str) -> float:
    """Calculates shipping cost based on weight in kg and destination country."""
    base_rate = 10.0
    if destination.lower() == 'international':
        return base_rate + (weight * 5.0)
    return base_rate + (weight * 2.0)`,
          drillQuestion: {
            id: 'dq_ai_swarm_05',
            prompt: 'Why is the docstring (description) of a tool critical when working with LLM agents?',
            options: [
              'It is required by Python syntax',
              'It allows developers to read the code easier',
              'The LLM uses this description to decide if and when to call the tool',
              'It automatically generates the UI for the tool'
            ],
            correctIndex: 2,
            explanation: 'The agent relies entirely on the semantic description of the tool to understand its purpose and parameters, driving the decision-making process.'
          }
        },
        {
          id: 'ai_swarm_06',
          title: 'Deploying Swarms to Production',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Production multi-agent systems require robust error handling, rate limit management, observability (LangSmith/Phoenix), and human-in-the-loop fallback.',
          drillQuestion: {
            id: 'dq_ai_swarm_06',
            prompt: 'What is a primary challenge when deploying multi-agent swarms to production?',
            options: [
              'Managing cascading failures and infinite loops if agents hallucinate or fail to use tools correctly',
              'Finding an LLM that can understand English',
              'Storing the codebase on GitHub',
              'Generating a user interface'
            ],
            correctIndex: 0,
            explanation: 'Agents acting autonomously can easily enter infinite retry loops or cause cascading errors if one agent outputs bad data to another, requiring strict guardrails and observability.'
          }
        }
      ]
    },
    {
      id: 'mod_microsaas',
      code: '7.X',
      title: 'AI Micro-SaaS Blueprint',
      description: 'End-to-end architecture and implementation for scalable AI-first SaaS products.',
      lessons: [
        {
          id: 'ai_saas_01',
          title: 'Identifying AI SaaS Opportunities',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'The best AI Micro-SaaS products solve narrow, painful workflow problems by replacing manual cognitive tasks with automated AI pipelines.',
          drillQuestion: {
            id: 'dq_ai_saas_01',
            prompt: 'What is the "Thin Wrapper" problem in AI SaaS?',
            options: [
              'Using a UI that is too minimalistic',
              'Building a product that merely passes user input to an LLM API without adding proprietary value or workflows',
              'Writing code without sufficient comments',
              'Offering a freemium tier that is too generous'
            ],
            correctIndex: 1,
            explanation: 'A thin wrapper provides little defense against competitors or the foundational models themselves (like ChatGPT), as it lacks unique workflows, specialized data, or domain-specific UX.'
          }
        },
        {
          id: 'ai_saas_02',
          title: 'Tech Stack Selection',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'A modern AI stack typically involves Next.js/React, a serverless database (Supabase/Vercel Postgres), and an AI orchestration layer (Vercel AI SDK).',
          drillQuestion: {
            id: 'dq_ai_saas_02',
            prompt: 'Why is streaming responses (using technologies like Vercel AI SDK) critical for AI SaaS applications?',
            options: [
              'It reduces the cost of the LLM API',
              'It improves perceived performance by showing text as it generates, reducing user wait time',
              'It is the only way to communicate with OpenAI',
              'It encrypts the data in transit'
            ],
            correctIndex: 1,
            explanation: 'LLM generation can take several seconds. Streaming the tokens to the UI as they are generated keeps the user engaged and dramatically improves perceived latency.'
          }
        },
        {
          id: 'ai_saas_03',
          title: 'Building AI Features with Vercel AI SDK',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Vercel AI SDK standardizes streaming and UI integration across different LLM providers using simple hooks like useChat and useCompletion.',
          codeSnippet: `import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div>
      {messages.map(m => <div key={m.id}>{m.role}: {m.content}</div>)}
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleInputChange} />
      </form>
    </div>
  );
}`,
          drillQuestion: {
            id: 'dq_ai_saas_03',
            prompt: 'In Vercel AI SDK, what does the `useChat` hook manage?',
            options: [
              'Only the network request to the LLM',
              'User authentication for chat applications',
              'The state of the conversation, user input, and automatic streaming UI updates',
              'Database connections for storing messages'
            ],
            correctIndex: 2,
            explanation: '`useChat` abstracts away the complexity of managing message arrays, handling input state, and merging streamed chunks into the UI in real-time.'
          }
        },
        {
          id: 'ai_saas_04',
          title: 'Monetization and Rate Limiting',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'AI API costs scale linearly with usage; strict rate limiting and credit-based monetization models are essential to protect margins.',
          codeSnippet: `import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "1 d"),
  analytics: true,
});

// Inside API Route
const { success } = await ratelimit.limit(userId);
if (!success) return new Response("Rate limit exceeded", { status: 429 });`,
          drillQuestion: {
            id: 'dq_ai_saas_04',
            prompt: 'Why is a flat-rate subscription without usage limits dangerous for an AI SaaS?',
            options: [
              'It is too hard to implement in Stripe',
              'Users might exploit the system, incurring LLM API costs that exceed their subscription fee',
              'It confuses users',
              'Flat rates are illegal for AI services'
            ],
            correctIndex: 1,
            explanation: 'Because every generation costs you money via the LLM API, heavy users on an unlimited plan can quickly cause the business to lose money, necessitating credit systems or hard caps.'
          }
        },
        {
          id: 'ai_saas_05',
          title: 'Go-to-Market Strategy',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Launch fast via programmatic SEO, niche communities, and building in public to validate the specific workflow pain point.',
          drillQuestion: {
            id: 'dq_ai_saas_05',
            prompt: 'Which strategy is most effective for acquiring early users for a niche AI Micro-SaaS?',
            options: [
              'Expensive Super Bowl ads',
              'Cold calling enterprise CEOs',
              'Programmatic SEO and engaging in targeted communities (Reddit, niche forums)',
              'Waiting for viral word of mouth'
            ],
            correctIndex: 2,
            explanation: 'Micro-SaaS products solve specific problems, so targeting the places where those problems are discussed (communities) or searched for (SEO) yields high-intent early adopters.'
          }
        }
      ]
    },
    {
      id: 'mod_prompt_eng',
      code: '7.4',
      title: 'Prompt Engineering Masterclass',
      description: 'Advanced techniques for steering model behavior, including CoT, ToT, and Few-Shot.',
      lessons: [
        {
          id: 'ai_prompt_01',
          title: 'System Prompts and Persona Design',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'The System Prompt sets the foundational constraints, tone, and operational boundaries for the LLM before any user input is processed.',
          drillQuestion: {
            id: 'dq_ai_prompt_01',
            prompt: 'What is the primary role of a System Prompt?',
            options: [
              'To ask the specific question the user wants answered',
              'To establish the global behavior, constraints, and persona of the AI',
              'To provide few-shot examples',
              'To format the output as JSON'
            ],
            correctIndex: 1,
            explanation: 'The system prompt instructs the model on how it should behave globally across the entire conversation, overriding or contextualizing user inputs.'
          }
        },
        {
          id: 'ai_prompt_02',
          title: 'Few-Shot Prompting',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Providing examples (n-shot) in the prompt is the most reliable way to enforce complex formatting or stylistic requirements.',
          codeSnippet: `Prompt:
Extract the sentiment and keywords.

Text: "I absolutely loved this product, it works great!"
Sentiment: Positive
Keywords: loved, product, works great

Text: "Terrible experience, broke on first use."
Sentiment: Negative
Keywords: terrible, experience, broke

Text: "The battery life is okay, but the screen is amazing."
Sentiment:`,
          drillQuestion: {
            id: 'dq_ai_prompt_02',
            prompt: 'Why does Few-Shot prompting improve model performance on formatting tasks?',
            options: [
              'It trains the model weights dynamically',
              'It gives the model a concrete pattern to mimic, reducing ambiguity in instructions',
              'It increases the context window size',
              'It bypasses safety filters'
            ],
            correctIndex: 1,
            explanation: 'Showing the model exactly what you want via examples is often more effective than trying to describe the format in abstract instructions.'
          }
        },
        {
          id: 'ai_prompt_03',
          title: 'Chain-of-Thought (CoT) Reasoning',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Forcing the model to output its intermediate reasoning steps ("think step-by-step") significantly improves performance on logic and math tasks.',
          drillQuestion: {
            id: 'dq_ai_prompt_03',
            prompt: 'How does Chain-of-Thought prompting improve accuracy?',
            options: [
              'It uses a specialized reasoning model API',
              'It allocates more compute tokens to the generation process, allowing the model to build up context before reaching the final answer',
              'It forces the user to think harder',
              'It suppresses hallucinations programmatically'
            ],
            correctIndex: 1,
            explanation: 'By generating intermediate reasoning steps, the model effectively gives itself "scratchpad" space. The output of early tokens informs the generation of later tokens, leading to better conclusions.'
          }
        },
        {
          id: 'ai_prompt_04',
          title: 'Tree of Thoughts (ToT)',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Tree of Thoughts extends CoT by exploring multiple reasoning paths concurrently and evaluating them, similar to search algorithms.',
          drillQuestion: {
            id: 'dq_ai_prompt_04',
            prompt: 'What concept does Tree of Thoughts (ToT) introduce that standard Chain of Thought lacks?',
            options: [
              'Sequential reasoning',
              'Few-shot examples',
              'Branching alternative paths, self-evaluation, and backtracking',
              'System instructions'
            ],
            correctIndex: 2,
            explanation: 'ToT treats reasoning as a search problem over a tree of possible thoughts, allowing the model to generate multiple branches, evaluate their promise, and backtrack if a path seems flawed.'
          }
        },
        {
          id: 'ai_prompt_05',
          title: 'Enforcing Structured Output (JSON)',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Use strict schema definitions and API-level features (like OpenAI Response Formats) to guarantee perfectly parsed JSON outputs.',
          codeSnippet: `import OpenAI from "openai";
const openai = new OpenAI();

const response = await openai.chat.completions.create({
  model: "gpt-4-turbo",
  messages: [{ role: "user", content: "Extract user info: John is 25." }],
  response_format: { type: "json_object" }
});`,
          drillQuestion: {
            id: 'dq_ai_prompt_05',
            prompt: 'When requesting JSON output, what is a best practice alongside setting `response_format: { type: "json_object" }`?',
            options: [
              'Use a temperature of 1.5',
              'Explicitly instruct the model to output JSON and provide the exact schema in the system prompt',
              'Avoid using few-shot examples',
              'Only use legacy models'
            ],
            correctIndex: 1,
            explanation: 'Even with JSON mode enabled, the model needs to know the structure you expect. The API feature just ensures the output is valid JSON syntax; your prompt dictates the schema.'
          }
        },
        {
          id: 'ai_prompt_06',
          title: 'Prompt Injection and Defenses',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Prompt injection occurs when user input subverts the system prompt. Defenses include data delimiters, LLM moderation layers, and strict input parsing.',
          drillQuestion: {
            id: 'dq_ai_prompt_06',
            prompt: 'Which technique is commonly used to separate trusted system instructions from untrusted user input?',
            options: [
              'Increasing the temperature',
              'Using distinct delimiter tokens (e.g., `<USER_INPUT>...</USER_INPUT>`) around the untrusted data',
              'Deleting the system prompt',
              'Translating input to another language'
            ],
            correctIndex: 1,
            explanation: 'Delimiters clearly demarcate the boundaries of user data, making it harder for the user to trick the model into interpreting their data as system-level instructions.'
          }
        }
      ]
    },
    {
      id: 'mod_finetuning',
      code: '7.X',
      title: 'Fine-Tuning & Custom Models',
      description: 'Learn to adapt open-weights models to specific domains using PEFT and LoRA.',
      lessons: [
        {
          id: 'ai_fine_01',
          title: 'When to Fine-Tune vs. RAG',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Use RAG for injecting knowledge and facts; use Fine-Tuning for teaching form, style, or specific tasks.',
          drillQuestion: {
            id: 'dq_ai_fine_01',
            prompt: 'Which scenario is BEST suited for Fine-Tuning rather than RAG?',
            options: [
              'Answering questions about a company\'s internal documents updated daily',
              'Teaching the model to output a proprietary, highly specific programming language syntax',
              'Providing the latest news headlines',
              'Building a customer support bot over a large knowledge base'
            ],
            correctIndex: 1,
            explanation: 'Fine-tuning alters the internal weights to learn patterns, tone, and syntax, which is ideal for specialized languages. RAG is better for rapidly changing factual knowledge.'
          }
        },
        {
          id: 'ai_fine_02',
          title: 'Data Preparation for Fine-Tuning',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Fine-tuning data must be high-quality, formatted as prompt-completion pairs, and representative of the exact task distribution.',
          codeSnippet: `import json

dataset = [
    {"messages": [{"role": "system", "content": "You are a helpful assistant."}, {"role": "user", "content": "Hi"}, {"role": "assistant", "content": "Hello!"}]},
    # ... more examples
]

with open("train.jsonl", "w") as f:
    for item in dataset:
        f.write(json.dumps(item) + "\\n")`,
          drillQuestion: {
            id: 'dq_ai_fine_02',
            prompt: 'Why is the ChatML or Message format preferred for instruction tuning?',
            options: [
              'It uses fewer tokens',
              'It aligns the training data structure with the exact format used during inference for chat applications',
              'It is the only format supported by Python',
              'It prevents overfitting'
            ],
            correctIndex: 1,
            explanation: 'Training the model using the exact structural markers (roles, system prompts) it will see in production ensures it learns the conversational structure properly.'
          }
        },
        {
          id: 'ai_fine_03',
          title: 'Parameter-Efficient Fine-Tuning (PEFT) & LoRA',
          duration: '40 min',
          durationSeconds: 2400,
          completed: false,
          keyTakeaway: 'Low-Rank Adaptation (LoRA) freezes the base model weights and trains a small set of adapter weights, drastically reducing compute requirements.',
          drillQuestion: {
            id: 'dq_ai_fine_03',
            prompt: 'What is the primary advantage of LoRA over full-parameter fine-tuning?',
            options: [
              'It achieves much higher accuracy',
              'It allows fine-tuning massive models on consumer-grade GPUs by drastically reducing trainable parameters',
              'It removes the need for a dataset',
              'It makes the model run faster during inference'
            ],
            correctIndex: 1,
            explanation: 'LoRA uses low-rank matrices to approximate weight updates, reducing the number of trainable parameters by orders of magnitude, making fine-tuning highly memory-efficient.'
          }
        },
        {
          id: 'ai_fine_04',
          title: 'Using Unsloth for Faster Training',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Frameworks like Unsloth optimize the math kernels (Triton) for Llama/Mistral, achieving 2x faster fine-tuning with less VRAM.',
          codeSnippet: `from unsloth import FastLanguageModel
import torch

model, tokenizer = FastLanguageModel.from_pretrained(
    model_name = "unsloth/llama-3-8b-bnb-4bit",
    max_seq_length = 2048,
    dtype = None,
    load_in_4bit = True,
)

model = FastLanguageModel.get_peft_model(
    model,
    r = 16,
    target_modules = ["q_proj", "k_proj", "v_proj", "o_proj"],
    lora_alpha = 16,
    lora_dropout = 0,
)`,
          drillQuestion: {
            id: 'dq_ai_fine_04',
            prompt: 'In the context of LoRA, what does the parameter `r` (rank) control?',
            options: [
              'The learning rate',
              'The dimensionality of the low-rank matrices, impacting the expressiveness and size of the adapter',
              'The batch size',
              'The temperature of the model'
            ],
            correctIndex: 1,
            explanation: 'The rank `r` determines the size of the low-rank matrices (A and B). A higher `r` increases the number of parameters and expressiveness, but requires more memory.'
          }
        },
        {
          id: 'ai_fine_05',
          title: 'Merging Adapters and Quantization (GGUF)',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'After training, LoRA adapters can be merged back into the base model and quantized to GGUF format for efficient CPU/Edge deployment (llama.cpp).',
          drillQuestion: {
            id: 'dq_ai_fine_05',
            prompt: 'What is the purpose of converting a model to the GGUF format?',
            options: [
              'To increase the parameter count',
              'To optimize the model for running efficiently on CPUs and edge devices using quantization',
              'To prepare it for further fine-tuning',
              'To upload it to an OpenAI endpoint'
            ],
            correctIndex: 1,
            explanation: 'GGUF is specifically designed for llama.cpp, allowing large quantized models to be loaded and run efficiently on consumer hardware, including CPUs.'
          }
        }
      ]
    },
    {
      id: 'mod_cv',
      code: '7.X',
      title: 'Computer Vision in the AI Era',
      description: 'Object detection, segmentation, and multimodal models.',
      lessons: [
        {
          id: 'ai_cv_01',
          title: 'Vision Transformers (ViT)',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Vision Transformers split images into patches, treating them like tokens in an NLP model, achieving state-of-the-art results in image classification.',
          drillQuestion: {
            id: 'dq_ai_cv_01',
            prompt: 'How does a Vision Transformer (ViT) process an image compared to a CNN?',
            options: [
              'It uses sliding convolutional filters',
              'It flattens the entire image into a single 1D array',
              'It divides the image into a grid of patches, flattens them, and processes them with self-attention',
              'It converts the image to text first'
            ],
            correctIndex: 2,
            explanation: 'ViTs treat image patches exactly like words in a sentence, relying on self-attention to learn relationships between different patches of the image.'
          }
        },
        {
          id: 'ai_cv_02',
          title: 'YOLOv10 and Real-Time Object Detection',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'The YOLO (You Only Look Once) architecture family provides extremely fast, real-time object detection suitable for edge deployment.',
          codeSnippet: `from ultralytics import YOLO

# Load a pretrained YOLO model
model = YOLO('yolov8n.pt')

# Perform inference on an image
results = model('path/to/image.jpg')

# Print bounding box coordinates
for result in results:
    boxes = result.boxes
    print(boxes.xyxy) # x1, y1, x2, y2 format`,
          drillQuestion: {
            id: 'dq_ai_cv_02',
            prompt: 'Why are YOLO architectures preferred for video stream analysis over models like Faster R-CNN?',
            options: [
              'They have higher theoretical accuracy',
              'They perform bounding box regression and classification in a single forward pass, making them incredibly fast',
              'They require no training data',
              'They are native to Python'
            ],
            correctIndex: 1,
            explanation: 'YOLO formulates object detection as a single regression problem, vastly speeding up inference time compared to two-stage detectors.'
          }
        },
        {
          id: 'ai_cv_03',
          title: 'Segment Anything Model (SAM)',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Meta\'s SAM is a foundation model for segmentation that can "cut out" any object in any image with zero-shot transfer, guided by prompts.',
          drillQuestion: {
            id: 'dq_ai_cv_03',
            prompt: 'What makes the Segment Anything Model (SAM) unique?',
            options: [
              'It is the smallest vision model available',
              'It can be prompted interactively (via points, boxes, or text) to segment objects it has never explicitly been trained on',
              'It only works on medical images',
              'It generates text descriptions of images'
            ],
            correctIndex: 1,
            explanation: 'SAM is a zero-shot foundation model that responds to visual prompts (like clicking on an object) to generate highly accurate segmentation masks on the fly.'
          }
        },
        {
          id: 'ai_cv_04',
          title: 'Multimodal LLMs (GPT-4V, Claude 3 Vision)',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Modern LLMs natively understand images by integrating vision encoders, allowing for complex visual reasoning, OCR, and diagram analysis.',
          codeSnippet: `import OpenAI from "openai";
const openai = new OpenAI();

const response = await openai.chat.completions.create({
  model: "gpt-4-vision-preview",
  messages: [
    {
      role: "user",
      content: [
        { type: "text", text: "What's in this image?" },
        { type: "image_url", image_url: { url: "https://example.com/image.jpg" } }
      ],
    }
  ],
});`,
          drillQuestion: {
            id: 'dq_ai_cv_04',
            prompt: 'How do models like GPT-4V typically process images?',
            options: [
              'They run optical character recognition and only read text',
              'They use a separate system to caption the image, then read the caption',
              'They use a vision encoder (like CLIP) to convert the image into embeddings that the LLM processes alongside text tokens',
              'They convert the image pixels directly into ASCII art'
            ],
            correctIndex: 2,
            explanation: 'Multimodal models project visual features directly into the same latent space as text, allowing the LLM to "see" and reason about the image jointly with text.'
          }
        },
        {
          id: 'ai_cv_05',
          title: 'Edge Deployment with TensorRT',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Deploying vision models to hardware like Jetson requires optimization frameworks like TensorRT for layer fusion and precision calibration (FP16/INT8).',
          drillQuestion: {
            id: 'dq_ai_cv_05',
            prompt: 'What is a primary optimization technique performed by TensorRT?',
            options: [
              'Generating synthetic training data',
              'Fusing multiple neural network layers into a single kernel to reduce memory bandwidth overhead',
              'Automatically labeling datasets',
              'Increasing the resolution of input images'
            ],
            correctIndex: 1,
            explanation: 'TensorRT optimizes inference by combining operations (layer fusion) and reducing precision, drastically accelerating execution on NVIDIA hardware.'
          }
        }
      ]
    },
    {
      id: 'mod_voice',
      code: '7.X',
      title: 'Voice AI & Conversational Agents',
      description: 'Build real-time, highly expressive voice interfaces.',
      lessons: [
        {
          id: 'ai_voice_01',
          title: 'Speech-to-Text (STT) with Whisper',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'OpenAI\'s Whisper architecture revolutionized ASR (Automatic Speech Recognition) by training on massive multi-lingual datasets, providing extreme robustness to accents and noise.',
          codeSnippet: `import whisper

model = whisper.load_model("base")
result = model.transcribe("audio.mp3")
print(result["text"])`,
          drillQuestion: {
            id: 'dq_ai_voice_01',
            prompt: 'What architectural approach makes Whisper so robust?',
            options: [
              'It relies on rules-based linguistic grammar trees',
              'It is trained as an end-to-end Transformer on a massive scale of weakly supervised audio-text pairs',
              'It only uses clean, studio-recorded audio for training',
              'It requires speaker enrollment before transcribing'
            ],
            correctIndex: 1,
            explanation: 'Whisper\'s strength comes from deep learning on 680,000 hours of noisy, real-world data, allowing the Transformer to learn robust representations without hand-crafted features.'
          }
        },
        {
          id: 'ai_voice_02',
          title: 'Text-to-Speech (TTS) with ElevenLabs',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Modern TTS systems like ElevenLabs use deep generative models to produce highly emotional, human-like speech with instant voice cloning.',
          drillQuestion: {
            id: 'dq_ai_voice_02',
            prompt: 'What distinguishes generative TTS from traditional concatenative TTS?',
            options: [
              'Generative TTS pieces together pre-recorded syllables',
              'Generative TTS synthesizes raw audio waveforms using neural networks, allowing for emotional inflection and dynamic pacing',
              'Generative TTS sounds more robotic but is faster',
              'Generative TTS cannot clone voices'
            ],
            correctIndex: 1,
            explanation: 'Instead of gluing audio snippets together, neural TTS models learn the latent representation of speech, enabling them to generate completely new, expressive audio waveforms.'
          }
        },
        {
          id: 'ai_voice_03',
          title: 'Real-Time Voice Streaming Pipelines',
          duration: '40 min',
          durationSeconds: 2400,
          completed: false,
          keyTakeaway: 'Real-time conversational agents require ultra-low latency, achieved by streaming STT chunks to the LLM, and streaming LLM token chunks directly to the TTS engine via WebSockets.',
          drillQuestion: {
            id: 'dq_ai_voice_03',
            prompt: 'Where does the primary latency bottleneck usually occur in a Voice AI pipeline?',
            options: [
              'The user speaking',
              'The time to first token (TTFT) of the LLM and the subsequent TTS synthesis',
              'The STT transcription',
              'The microphone hardware'
            ],
            correctIndex: 1,
            explanation: 'While STT is fast, waiting for the LLM to generate a response and then waiting for TTS to synthesize it creates an unnatural delay. Streaming mitigates this.'
          }
        },
        {
          id: 'ai_voice_04',
          title: 'Handling Interruption and Turn-Taking',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Voice Activity Detection (VAD) is crucial for knowing when a user starts or stops speaking, enabling the system to gracefully handle interruptions (barge-in).',
          codeSnippet: `import webrtcvad

vad = webrtcvad.Vad()
vad.set_mode(3) # Aggressive mode for noise

# Check if frame contains speech
is_speech = vad.is_speech(audio_frame, sample_rate=16000)`,
          drillQuestion: {
            id: 'dq_ai_voice_04',
            prompt: 'What is the role of VAD in a voice agent?',
            options: [
              'To generate the voice of the agent',
              'To detect when the user is speaking versus when there is silence, triggering system responses or stopping current playback',
              'To translate languages',
              'To transcribe the text'
            ],
            correctIndex: 1,
            explanation: 'VAD algorithms rapidly classify audio frames as speech or silence, which is required to know when to start transcribing or when to abort the AI\'s speech if the user interrupts.'
          }
        },
        {
          id: 'ai_voice_05',
          title: 'Building a Twilio Voice Agent',
          duration: '40 min',
          durationSeconds: 2400,
          completed: false,
          keyTakeaway: 'Integrating AI with telephony requires handling bidirectional media streams (TwiML and Media Streams) via WebSockets.',
          drillQuestion: {
            id: 'dq_ai_voice_05',
            prompt: 'When integrating an AI agent with phone calls via Twilio, what protocol is used to stream the raw audio back and forth?',
            options: [
              'REST APIs',
              'WebSockets (Media Streams)',
              'GraphQL',
              'Webhooks'
            ],
            correctIndex: 1,
            explanation: 'Twilio Media Streams open a persistent WebSocket connection, allowing bidirectional streaming of raw audio chunks (often mulaw format) in real-time.'
          }
        }
      ]
    },
    {
      id: 'mod_automation',
      code: '7.X',
      title: 'AI-Powered Automation',
      description: 'Connect AI models to thousands of apps using n8n and Make.com.',
      lessons: [
        {
          id: 'ai_auto_01',
          title: 'Introduction to n8n for AI',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'n8n is an open-source workflow automation tool that provides native nodes for LangChain, making it trivial to build complex RAG and Agentic pipelines visually.',
          drillQuestion: {
            id: 'dq_ai_auto_01',
            prompt: 'What is a major advantage of n8n over Zapier when building AI workflows?',
            options: [
              'It has a better color scheme',
              'It offers native LangChain nodes (agents, memory, tools) and can be self-hosted for data privacy',
              'It only runs on Windows',
              'It uses less RAM'
            ],
            correctIndex: 1,
            explanation: 'n8n\'s Advanced AI capabilities allow you to visually wire up vector stores, LLMs, and tools, while self-hosting ensures sensitive data isn\'t passed through a third-party automation SaaS.'
          }
        },
        {
          id: 'ai_auto_02',
          title: 'Automating Content Pipelines',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Chain nodes together: fetch RSS -> summarize with LLM -> generate image with DALL-E -> post to Social Media.',
          drillQuestion: {
            id: 'dq_ai_auto_02',
            prompt: 'In a visual automation workflow, what is the purpose of passing JSON data between nodes?',
            options: [
              'To encrypt the payload',
              'To ensure the output of one step (e.g., LLM summary) can be dynamically referenced as the input variable in the next step (e.g., Slack message)',
              'To save database space',
              'To prevent API rate limits'
            ],
            correctIndex: 1,
            explanation: 'Visual builders rely on structured JSON payloads moving through the graph; you map fields from previous nodes into the input parameters of subsequent nodes.'
          }
        },
        {
          id: 'ai_auto_03',
          title: 'Web Scraping and Extraction',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Combine Puppeteer/Playwright headless browsers with LLM vision or HTML-to-Markdown tools to extract structured data from unstructured websites.',
          codeSnippet: `// Example usage of an extraction API (e.g., Firecrawl or similar concept)
const response = await fetch('https://api.firecrawl.dev/v0/scrape', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer API_KEY' },
  body: JSON.stringify({ url: 'https://example.com', formats: ['markdown'] })
});
const data = await response.json();`,
          drillQuestion: {
            id: 'dq_ai_auto_03',
            prompt: 'Why is converting HTML to Markdown preferred before sending scraped data to an LLM?',
            options: [
              'Markdown looks better in the terminal',
              'It strips away heavy HTML boilerplate and tags, preserving the semantic structure while drastically reducing token count',
              'LLMs cannot read HTML',
              'Markdown is more secure'
            ],
            correctIndex: 1,
            explanation: 'HTML contains massive amounts of styling and structural syntax that consume valuable tokens without adding informational value. Markdown retains the headers and links but in a dense format.'
          }
        },
        {
          id: 'ai_auto_04',
          title: 'Building Custom API Endpoints via Webhooks',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'You can use Webhook triggers in n8n/Make to create rapid, scalable API endpoints that execute complex AI logic without writing backend code.',
          drillQuestion: {
            id: 'dq_ai_auto_04',
            prompt: 'How does a Webhook trigger node function in an automation platform?',
            options: [
              'It scrapes a website on a schedule',
              'It listens for incoming HTTP POST/GET requests and starts the workflow, allowing you to trigger AI tasks from external apps',
              'It generates random numbers',
              'It blocks malicious traffic'
            ],
            correctIndex: 1,
            explanation: 'A webhook provides a unique URL. When your SaaS or script sends data to this URL, it acts as the entry point, passing the payload into your automation workflow.'
          }
        },
        {
          id: 'ai_auto_05',
          title: 'Error Handling and Retries',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'LLM APIs will fail or timeout. Robust workflows use try-catch routing and exponential backoff retry logic.',
          drillQuestion: {
            id: 'dq_ai_auto_05',
            prompt: 'What is exponential backoff?',
            options: [
              'Increasing the LLM temperature on failure',
              'Waiting progressively longer periods between retry attempts after an API failure (e.g., 1s, 2s, 4s)',
              'Deleting the workflow if it fails twice',
              'Downgrading to a smaller model'
            ],
            correctIndex: 1,
            explanation: 'Exponential backoff prevents you from hammering a struggling API. If a request fails, you wait a short time, and if it fails again, you double the wait time, reducing load.'
          }
        }
      ]
    },
    {
      id: 'mod_gen_media',
      code: '7.X',
      title: 'Generative Art & Media Production',
      description: 'Master Stable Diffusion, Midjourney, and AI Video.',
      lessons: [
        {
          id: 'ai_media_01',
          title: 'Diffusion Models Explained',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Diffusion models generate images by iteratively removing noise from a canvas, guided by text embeddings from a CLIP model.',
          drillQuestion: {
            id: 'dq_ai_media_01',
            prompt: 'What is the core process of a Diffusion model during image generation?',
            options: [
              'Stitching together parts of existing images',
              'Starting with pure Gaussian noise and iteratively applying a neural network to denoise it into a structured image',
              'Applying a single mathematical formula to pixels',
              'Translating pixels directly from text characters'
            ],
            correctIndex: 1,
            explanation: 'The reverse diffusion process takes a tensor of random noise and gradually predicts and subtracts the noise over several steps, guided by the text prompt.'
          }
        },
        {
          id: 'ai_media_02',
          title: 'Stable Diffusion & ComfyUI',
          duration: '40 min',
          durationSeconds: 2400,
          completed: false,
          keyTakeaway: 'ComfyUI is a node-based interface that provides granular control over the Stable Diffusion pipeline, enabling advanced workflows like image-to-image and inpainting.',
          drillQuestion: {
            id: 'dq_ai_media_02',
            prompt: 'Why do advanced users prefer ComfyUI over simple web interfaces?',
            options: [
              'It requires no installation',
              'It allows exact visual routing of latent tensors, conditions, and models, enabling highly customized and reproducible generation pipelines',
              'It uses fewer GPU resources',
              'It has built-in monetization'
            ],
            correctIndex: 1,
            explanation: 'ComfyUI exposes the underlying architecture of diffusion pipelines, allowing creators to inject control nets, mix models, and build complex multi-step workflows.'
          }
        },
        {
          id: 'ai_media_03',
          title: 'ControlNet for Precise Composition',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'ControlNet allows you to condition image generation on structural inputs like edge maps (Canny), depth maps, or human poses (OpenPose).',
          drillQuestion: {
            id: 'dq_ai_media_03',
            prompt: 'If you want an AI-generated character to stand in exactly the same pose as a reference photo, which technology should you use?',
            options: [
              'Increasing the text prompt length',
              'Using a LoRA',
              'Using ControlNet with an OpenPose preprocessor',
              'Using a higher CFG scale'
            ],
            correctIndex: 2,
            explanation: 'ControlNet extracts specific structural information (like a stick-figure skeleton via OpenPose) from a reference image and forces the diffusion model to adhere to that structure.'
          }
        },
        {
          id: 'ai_media_04',
          title: 'AI Video Generation (Sora, Runway)',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Video models extend diffusion into the temporal dimension, requiring massive compute to maintain consistency across frames.',
          drillQuestion: {
            id: 'dq_ai_media_04',
            prompt: 'What is the most significant challenge in AI video generation compared to image generation?',
            options: [
              'Color accuracy',
              'Temporal consistency (preventing objects from morphing or flickering from one frame to the next)',
              'Resolution size',
              'Audio synchronization'
            ],
            correctIndex: 1,
            explanation: 'Generating a single frame is easy; ensuring that the subject, background, and physics remain coherent and logical across sequential frames is highly complex.'
          }
        },
        {
          id: 'ai_media_05',
          title: 'Audio & Music Generation (Suno/Udio)',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Modern AI music generators use Transformer models to predict audio tokens, enabling full vocal and instrumental track generation from text descriptions.',
          drillQuestion: {
            id: 'dq_ai_media_05',
            prompt: 'How do models like Suno handle lyrics generation along with the music?',
            options: [
              'They require you to sing the melody first',
              'They treat audio tokens and text tokens in a unified sequence-to-sequence model, allowing joint generation of vocals and instrumentation',
              'They use a separate TTS system layered over MIDI files',
              'They only generate instrumental music'
            ],
            correctIndex: 1,
            explanation: 'By converting audio into discrete tokens (similar to text), these models can predict the next audio token based on both the text prompt and the previous musical context.'
          }
        }
      ]
    },
    {
      id: 'mod_ethics',
      code: '7.X',
      title: 'AI Ethics, Safety & Alignment',
      description: 'Build responsible AI and defend against adversarial attacks.',
      lessons: [
        {
          id: 'ai_ethics_01',
          title: 'Alignment & RLHF',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Reinforcement Learning from Human Feedback (RLHF) aligns raw foundational models to human preferences, making them helpful, honest, and harmless.',
          drillQuestion: {
            id: 'dq_ai_ethics_01',
            prompt: 'What is the role of the "Reward Model" in RLHF?',
            options: [
              'To generate the final text',
              'To score the LLM\'s outputs based on how well they align with human preferences, guiding the reinforcement learning process',
              'To pay users for data',
              'To translate languages'
            ],
            correctIndex: 1,
            explanation: 'Humans rank model outputs, and a separate Reward Model is trained on this data. This Reward Model is then used to automatically evaluate and fine-tune the main LLM via PPO.'
          }
        },
        {
          id: 'ai_ethics_02',
          title: 'Adversarial Jailbreaks',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Jailbreaking involves crafting prompts that bypass an LLM\'s safety guardrails, often using roleplay, base64 encoding, or hypothetical scenarios.',
          drillQuestion: {
            id: 'dq_ai_ethics_02',
            prompt: 'What is a "DAN" (Do Anything Now) prompt an example of?',
            options: [
              'A vector embedding',
              'A roleplay-based adversarial jailbreak designed to override safety instructions',
              'A legitimate API key request',
              'A system optimization'
            ],
            correctIndex: 1,
            explanation: 'DAN prompts instruct the model to adopt a persona that is explicitly told to ignore its original safety training, exploiting the model\'s instruction-following capabilities.'
          }
        },
        {
          id: 'ai_ethics_03',
          title: 'Red Teaming AI Systems',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Red Teaming involves systematically attacking your own AI system to discover vulnerabilities, prompt injections, and data leakage before deployment.',
          drillQuestion: {
            id: 'dq_ai_ethics_03',
            prompt: 'In the context of AI, what is Red Teaming?',
            options: [
              'Optimizing the hardware servers',
              'Designing the UI for the chat interface',
              'Proactively acting as an adversary to test the model for safety vulnerabilities and biases',
              'Writing documentation'
            ],
            correctIndex: 2,
            explanation: 'Red teaming is a security practice where testers intentionally try to break the system (e.g., extracting PII or generating toxic content) to identify flaws.'
          }
        },
        {
          id: 'ai_ethics_04',
          title: 'Bias and Fairness in Datasets',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Models amplify the biases present in their training data; mitigating this requires careful dataset auditing and debiasing techniques.',
          drillQuestion: {
            id: 'dq_ai_ethics_04',
            prompt: 'If an AI hiring tool systematically scores resumes from a specific demographic lower, what is the most likely root cause?',
            options: [
              'The model uses too many parameters',
              'The historical training data contained biased hiring decisions that the model learned to replicate',
              'The temperature setting is too low',
              'The API is rate limited'
            ],
            correctIndex: 1,
            explanation: 'Machine learning models are pattern matchers. If historical data reflects human bias, the model will learn that bias as a statistical feature unless explicitly corrected.'
          }
        }
      ]
    },
    {
      id: 'mod_vector_db',
      code: '7.X',
      title: 'Vector Databases & Search',
      description: 'Deep dive into high-dimensional data storage and retrieval.',
      lessons: [
        {
          id: 'ai_vdb_01',
          title: 'Embeddings and Latent Space',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Embeddings map text, images, or audio into dense arrays of numbers where semantic similarity is represented by geometric proximity in latent space.',
          drillQuestion: {
            id: 'dq_ai_vdb_01',
            prompt: 'In a vector space, how is semantic similarity between two sentences typically measured?',
            options: [
              'By comparing the length of the strings',
              'By calculating the Cosine Similarity or Euclidean distance between their embedding vectors',
              'By checking for exact word matches',
              'By hashing the strings'
            ],
            correctIndex: 1,
            explanation: 'Models place semantically related concepts close together in high-dimensional space. Distance metrics like Cosine Similarity measure the angle between vectors to determine relatedness.'
          }
        },
        {
          id: 'ai_vdb_02',
          title: 'Pinecone, Weaviate & Qdrant',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Purpose-built vector databases handle indexing and querying millions of high-dimensional vectors at millisecond latency.',
          drillQuestion: {
            id: 'dq_ai_vdb_02',
            prompt: 'Why use a Vector Database instead of storing embeddings in a standard SQL database?',
            options: [
              'Vector databases are free',
              'Vector databases use specialized indexing algorithms (like HNSW) to perform fast approximate nearest neighbor (ANN) searches at scale',
              'SQL databases cannot store arrays',
              'Vector databases automatically generate the text responses'
            ],
            correctIndex: 1,
            explanation: 'Performing exact distance calculations against millions of vectors is computationally impossible in real-time. Vector DBs use indexing graphs to quickly approximate the closest neighbors.'
          }
        },
        {
          id: 'ai_vdb_03',
          title: 'HNSW Algorithm Explained',
          duration: '40 min',
          durationSeconds: 2400,
          completed: false,
          keyTakeaway: 'Hierarchical Navigable Small World (HNSW) is the dominant algorithm for approximate nearest neighbor search, balancing search speed and accuracy.',
          drillQuestion: {
            id: 'dq_ai_vdb_03',
            prompt: 'How does the HNSW algorithm achieve fast search times?',
            options: [
              'It compares the query against every single vector in the database',
              'It constructs a multi-layered graph where upper layers have long-range links for fast routing, and bottom layers have dense links for precise local search',
              'It compresses vectors into 1-bit integers',
              'It uses a relational B-tree'
            ],
            correctIndex: 1,
            explanation: 'HNSW is inspired by skip-lists. It drops down through hierarchical graph layers, quickly zooming in on the correct neighborhood before doing precise local comparisons.'
          }
        },
        {
          id: 'ai_vdb_04',
          title: 'Metadata Filtering',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Combining vector similarity search with traditional metadata filtering (e.g., pre-filtering by date or author) ensures precise, scoped results.',
          codeSnippet: `// Example Qdrant Query with metadata filtering
const response = await client.search('collection_name', {
  vector: query_embedding,
  limit: 5,
  filter: {
    must: [
      { key: "department", match: { value: "engineering" } },
      { key: "year", range: { gte: 2023 } }
    ]
  }
});`,
          drillQuestion: {
            id: 'dq_ai_vdb_04',
            prompt: 'What is the challenge with "Post-filtering" in vector search?',
            options: [
              'It is too fast',
              'If you retrieve top-K nearest vectors and then filter them, you might end up with zero results if none of the top vectors match the filter criteria',
              'It corrupts the vector data',
              'It requires a larger GPU'
            ],
            correctIndex: 1,
            explanation: 'Post-filtering applies the metadata rule after the vector search. If the top 10 most similar documents don\'t match your metadata filter, you return nothing. Modern DBs use pre-filtering or single-stage filtering.'
          }
        },
        {
          id: 'ai_vdb_05',
          title: 'pgvector for PostgreSQL',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'pgvector is an extension that adds vector capabilities to Postgres, ideal for apps that want to keep relational data and embeddings in the same database.',
          codeSnippet: `-- SQL querying with pgvector
SELECT id, content, embedding <=> '[0.1, 0.2, ...]' AS distance
FROM documents
ORDER BY embedding <=> '[0.1, 0.2, ...]'
LIMIT 5;`,
          drillQuestion: {
            id: 'dq_ai_vdb_05',
            prompt: 'What does the `<=>` operator typically represent in a pgvector query?',
            options: [
              'Less than or equal to',
              'Cosine distance calculation',
              'String concatenation',
              'Inner product'
            ],
            correctIndex: 1,
            explanation: 'In pgvector, `<=>` is the operator specifically mapped to calculating the Cosine distance between two vectors, allowing you to ORDER BY semantic similarity.'
          }
        }
      ]
    },
    {
      id: 'mod_products',
      code: '7.X',
      title: 'Building AI Products: Prototype to Revenue',
      description: 'Product management, UX design, and scaling for AI applications.',
      lessons: [
        {
          id: 'ai_prod_01',
          title: 'AI UX: Beyond the Chatbot',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'The best AI products do not look like chat interfaces; they embed AI seamlessly into existing user workflows and standard UI components (Generative UI).',
          drillQuestion: {
            id: 'dq_ai_prod_01',
            prompt: 'What is Generative UI?',
            options: [
              'Using AI to generate CSS code',
              'Streaming structured data from an LLM to dynamically render interactive, contextual React components rather than just plain text',
              'A UI that randomly changes colors',
              'Using Midjourney to design mockups'
            ],
            correctIndex: 1,
            explanation: 'Generative UI (like Vercel AI SDK\'s UI generation) parses LLM output to render actual interactive widgets (e.g., rendering a functional stock chart instead of text describing the stock).'
          }
        },
        {
          id: 'ai_prod_02',
          title: 'Managing Token Budgets and Latency',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Optimizing context windows by truncating history, using summarization, and choosing faster models (e.g., Claude 3 Haiku) is crucial for UX and margins.',
          drillQuestion: {
            id: 'dq_ai_prod_02',
            prompt: 'If a user has a massive chat history, how should you manage the context window to save costs?',
            options: [
              'Pass the entire history every time',
              'Periodically run a background LLM task to summarize old messages, passing the summary + recent messages to the context window',
              'Delete the database',
              'Tell the user to start a new chat'
            ],
            correctIndex: 1,
            explanation: 'Rolling summaries drastically reduce the token payload sent with each request, preserving the "memory" of the conversation while keeping latency and costs low.'
          }
        },
        {
          id: 'ai_prod_03',
          title: 'Caching AI Responses',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Semantic caching (using vector similarity) can serve instant, free responses for queries that are conceptually identical to previously asked questions.',
          drillQuestion: {
            id: 'dq_ai_prod_03',
            prompt: 'How does Semantic Caching differ from standard Redis caching?',
            options: [
              'It is slower',
              'It uses exact string matching',
              'It embeds the user query and checks for vector similarity against previous queries, returning a cached hit even if the phrasing is slightly different',
              'It only works for images'
            ],
            correctIndex: 2,
            explanation: 'Because users ask the same question in different ways, exact string matching fails. Semantic caching checks if the meaning is close enough to reuse a previous expensive LLM generation.'
          }
        },
        {
          id: 'ai_prod_04',
          title: 'Telemetry and LLM Observability',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Use tools like LangSmith or Helicone to trace LLM calls, monitor token usage, and capture user feedback (thumbs up/down) for continuous improvement.',
          drillQuestion: {
            id: 'dq_ai_prod_04',
            prompt: 'Why is traditional application monitoring (like Datadog) insufficient for AI features?',
            options: [
              'It cannot track CPU usage',
              'It does not capture complex prompt inputs, intermediate chain steps, tool calls, and subjective output quality metrics',
              'It is too expensive',
              'It cannot run in the cloud'
            ],
            correctIndex: 1,
            explanation: 'LLM observability tools are specifically designed to visualize the "trace" of a multi-step agent workflow, showing exactly what data was passed to the prompt at every step.'
          }
        },
        {
          id: 'ai_prod_05',
          title: 'Pricing Models for AI Products',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Align pricing with value and compute cost. Hybrid models (base subscription + usage-based credits) protect against edge cases while providing predictable revenue.',
          drillQuestion: {
            id: 'dq_ai_prod_05',
            prompt: 'Why is a credit-based system highly recommended for AI SaaS?',
            options: [
              'It looks like a video game',
              'It aligns the user\'s consumption directly with your variable API costs, ensuring you maintain a gross margin on heavy users',
              'It avoids using Stripe',
              'It guarantees a flat revenue curve'
            ],
            correctIndex: 1,
            explanation: 'Since AI API costs scale directly with usage, a credit system ensures that users who consume more compute pay proportionally more, protecting your profitability.'
          }
        }
      ]
    }
  ]
};





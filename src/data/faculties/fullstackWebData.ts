import { FrontierFaculty, FrontierFacultyLesson, FrontierFacultyModule } from '../../types';

export const FULLSTACK_WEB_FACULTY: FrontierFaculty = {
  id: 'fullstack_web_mobile' as any,
  name: 'Faculty of Full-Stack Web & Mobile Engineering',
  shortTitle: 'Web & Mobile',
  iconName: 'Globe',
  emoji: '🌐',
  themeColor: 'teal' as any,
  accentHex: '#14b8a6',
  glowClass: 'shadow-[0_0_35px_rgba(20,184,166,0.25)]',
  borderClass: 'border-teal-500/30 hover:border-teal-400/60',
  bgLightClass: 'bg-teal-500/10 text-teal-400',
  badgeClass: 'bg-teal-500/10 text-teal-300 border border-teal-500/30',
  headline: 'Master Modern Web Architecture, React Ecosystem & Mobile Development',
  description: 'Master full-stack web development, React/Next.js ecosystem, database architecture, API security, and mobile app deployment.',
  difficulty: 'Production Grade' as any,
  simulatorName: 'Full-Stack Code & Deploy Sandbox',
  simulatorTag: 'Live Development Environment',
  estimatedHours: 120,
  totalXp: 3500,
  completionPercent: 0,
  drillNodes: [],
  modules: [
    {
      id: 'mod_fsw_1',
      code: '9.1',
title: 'HTML, CSS & Responsive Design Mastery',
      description: 'Master semantic web structure and modern CSS layout techniques including Flexbox, Grid, and responsive design patterns.',
      lessons: [
        {
          id: 'les_fsw_1_1',
          title: 'Semantic HTML5 and Accessibility',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Using correct HTML elements (like <nav>, <article>, <main>) instead of <div>s improves SEO and makes sites usable for screen readers.',
          codeSnippet: `<main>\n  <article>\n    <header>\n      <h1>The Future of Web</h1>\n    </header>\n    <section aria-labelledby="intro-heading">\n      <h2 id="intro-heading">Introduction</h2>\n      <p>Semantic HTML is crucial...</p>\n    </section>\n  </article>\n</main>`,
          drillQuestion: {
            id: 'dq_fsw_1_1',
            prompt: 'Which HTML5 element is most appropriate for a standalone piece of content that could be distributed independently from the rest of the page?',
            options: ['<section>', '<div>', '<article>', '<main>'],
            correctIndex: 2,
            explanation: '<article> is designed for self-contained content that makes sense on its own, like a blog post or news story.'
          }
        },
        {
          id: 'les_fsw_1_2',
          title: 'Modern CSS Architectures',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'CSS Custom Properties (variables) enable dynamic theming and help maintain consistent design systems without preprocessors.',
          codeSnippet: `:root {\n  --primary-color: #14b8a6;\n  --spacing-md: 1rem;\n}\n\n.card {\n  background-color: var(--primary-color);\n  padding: var(--spacing-md);\n}`,
          drillQuestion: {
            id: 'dq_fsw_1_2',
            prompt: 'What is a major advantage of CSS Custom Properties (variables) over Sass/LESS variables?',
            options: ['They compile faster', 'They can be updated dynamically at runtime via JavaScript or media queries', 'They support deeper nesting', 'They automatically prefix browser vendors'],
            correctIndex: 1,
            explanation: 'Unlike preprocessor variables which compile to static values, CSS Custom Properties live in the DOM and can be changed on the fly with JS or CSS media queries.'
          }
        },
        {
          id: 'les_fsw_1_3',
          title: 'Advanced Flexbox Layouts',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Flexbox excels at 1-dimensional layouts (rows OR columns), distributing space dynamically among items based on flex-grow and flex-shrink.',
          codeSnippet: `.container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.item {\n  flex: 1 1 auto; /* grow, shrink, basis */\n}`,
          drillQuestion: {
            id: 'dq_fsw_1_3',
            prompt: 'In the shorthand property "flex: 0 1 auto", what does the "0" represent?',
            options: ['flex-basis', 'flex-shrink', 'flex-grow', 'flex-direction'],
            correctIndex: 2,
            explanation: 'The shorthand order is flex-grow, flex-shrink, and flex-basis. So "0" means the item will not grow to fill available space.'
          }
        },
        {
          id: 'les_fsw_1_4',
          title: 'CSS Grid for Complex UIs',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'CSS Grid is the ultimate tool for 2-dimensional layouts (rows AND columns), allowing precise placement of elements independent of source order.',
          codeSnippet: `.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n}`,
          drillQuestion: {
            id: 'dq_fsw_1_4',
            prompt: 'Which CSS Grid property combination creates a responsive grid that wraps items automatically without media queries?',
            options: ['grid-template-columns: repeat(3, 1fr)', 'grid-auto-flow: dense', 'grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))', 'display: inline-grid'],
            correctIndex: 2,
            explanation: 'auto-fit combined with minmax() tells the browser to create as many columns as will fit at a minimum width, expanding to fill remaining space.'
          }
        },
        {
          id: 'les_fsw_1_5',
          title: 'Responsive & Fluid Typography',
          duration: '20 min',
          durationSeconds: 1200,
          completed: false,
          keyTakeaway: 'Fluid typography scales smoothly between viewports using the CSS clamp() function, reducing the need for multiple media queries.',
          codeSnippet: `h1 {\n  /* Scales from 1.5rem to 3rem between viewport widths */\n  font-size: clamp(1.5rem, 5vw, 3rem);\n}`,
          drillQuestion: {
            id: 'dq_fsw_1_5',
            prompt: 'What are the three arguments passed to the CSS clamp() function?',
            options: ['minimum, maximum, fallback', 'minimum, preferred, maximum', 'base, scalar, maximum', 'preferred, minimum, maximum'],
            correctIndex: 1,
            explanation: 'clamp() takes a minimum value, a preferred value (usually viewport-relative), and a maximum value.'
          }
        },
        {
          id: 'les_fsw_1_6',
          title: 'Tailwind CSS in Production',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Utility-first CSS frameworks like Tailwind promote rapid UI development and zero unused CSS in production through purge configurations.',
          codeSnippet: `<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">\n  <div class="text-xl font-medium text-black">ChitChat</div>\n  <p class="text-gray-500">You have a new message!</p>\n</div>`,
          drillQuestion: {
            id: 'dq_fsw_1_6',
            prompt: 'How does Tailwind CSS ensure a small CSS bundle size in production?',
            options: ['By compressing class names', 'By using inline styles exclusively', 'By scanning template files and purging unused utility classes', 'By loading styles asynchronously via JS'],
            correctIndex: 2,
            explanation: 'Tailwind scans your HTML/JS/JSX files to find the classes you actually use and removes everything else from the final CSS bundle.'
          }
        }
      ]
    },
    {
      id: 'mod_fsw_2',
      code: '9.2',
title: 'JavaScript & TypeScript Deep Dive',
      description: 'Progress from JS fundamentals to advanced asynchronous patterns, functional concepts, and robust typing with TypeScript.',
      lessons: [
        {
          id: 'les_fsw_2_1',
          title: 'Execution Context & Closures',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Closures occur when a function "remembers" its lexical scope even when executed outside that scope, essential for data privacy and callbacks.',
          codeSnippet: `function createCounter() {\n  let count = 0;\n  return function() {\n    return ++count;\n  };\n}\nconst counter = createCounter();\nconsole.log(counter()); // 1`,
          drillQuestion: {
            id: 'dq_fsw_2_1',
            prompt: 'What allows the inner function in a closure to access variables from its outer function after the outer function has returned?',
            options: ['Global scope binding', 'Lexical environment retention', 'Hoisting', 'The "this" keyword'],
            correctIndex: 1,
            explanation: 'Functions in JS maintain a reference to their lexical environment (the scope in which they were defined), preventing those variables from being garbage collected.'
          }
        },
        {
          id: 'les_fsw_2_2',
          title: 'Asynchronous JavaScript: Promises & Event Loop',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'The event loop processes the microtask queue (Promises) before the macrotask queue (setTimeout), ensuring fast asynchronous operations execute promptly.',
          codeSnippet: `console.log('1');\nsetTimeout(() => console.log('2'), 0);\nPromise.resolve().then(() => console.log('3'));\nconsole.log('4');\n// Output: 1, 4, 3, 2`,
          drillQuestion: {
            id: 'dq_fsw_2_2',
            prompt: 'In what order are tasks processed by the JavaScript Event Loop?',
            options: ['Macrotasks, then Synchronous code, then Microtasks', 'Synchronous code, then Microtasks, then Macrotasks', 'Microtasks, then Macrotasks, then Synchronous code', 'Synchronous code, then Macrotasks, then Microtasks'],
            correctIndex: 1,
            explanation: 'Synchronous code runs first on the call stack. Then the event loop clears the microtask queue (Promises) before picking up the next macrotask (setTimeout/setInterval).'
          }
        },
        {
          id: 'les_fsw_2_3',
          title: 'Functional Array Methods & Immutability',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Methods like map, filter, and reduce enable declarative data transformations without mutating the original arrays, reducing side effects.',
          codeSnippet: `const users = [{id: 1, active: true}, {id: 2, active: false}];\nconst activeIds = users\n  .filter(u => u.active)\n  .map(u => u.id); // [1]`,
          drillQuestion: {
            id: 'dq_fsw_2_3',
            prompt: 'Which array method is best used to accumulate a single value (like a sum or an object) from an array of elements?',
            options: ['map()', 'filter()', 'reduce()', 'forEach()'],
            correctIndex: 2,
            explanation: 'reduce() iterates over the array applying a callback function to accumulate a single resulting value.'
          }
        },
        {
          id: 'les_fsw_2_4',
          title: 'TypeScript Fundamentals: Types & Interfaces',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'TypeScript catches structural errors at compile time. Interfaces describe object shapes, while Types can also define unions, intersections, and primitives.',
          codeSnippet: `interface User {\n  id: number;\n  name: string;\n  email?: string; // Optional\n}\n\ntype Status = 'active' | 'inactive' | 'suspended';`,
          drillQuestion: {
            id: 'dq_fsw_2_4',
            prompt: 'What is a key difference between a "type" alias and an "interface" in TypeScript?',
            options: ['Interfaces can only be used for classes', 'Types cannot use inheritance/intersection', 'Interfaces can be merged through declaration merging, while types cannot', 'Types are evaluated at runtime'],
            correctIndex: 2,
            explanation: 'Multiple interfaces with the same name will merge their properties (declaration merging). Type aliases cannot be changed or merged after being defined.'
          }
        },
        {
          id: 'les_fsw_2_5',
          title: 'TypeScript Generics & Utility Types',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Generics allow creating reusable, type-safe components that work with a variety of types rather than a single one.',
          codeSnippet: `interface ApiResponse<T> {\n  data: T;\n  status: number;\n}\n\nconst userRes: ApiResponse<User> = {\n  data: { id: 1, name: 'Alice' },\n  status: 200\n};`,
          drillQuestion: {
            id: 'dq_fsw_2_5',
            prompt: 'What does the utility type Partial<T> do in TypeScript?',
            options: ['Removes null and undefined from T', 'Makes all properties of T optional', 'Extracts function return types from T', 'Makes all properties of T readonly'],
            correctIndex: 1,
            explanation: 'Partial<T> constructs a type with all properties of T set to optional, very useful for update/patch operations.'
          }
        },
        {
          id: 'les_fsw_2_6',
          title: 'Advanced Types & Narrowing',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Type narrowing (via guards like typeof, in, or custom predicates) helps TS refine unions to more specific types for safe property access.',
          codeSnippet: `function printId(id: string | number) {\n  if (typeof id === 'string') {\n    console.log(id.toUpperCase());\n  } else {\n    console.log(id.toFixed(2));\n  }\n}`,
          drillQuestion: {
            id: 'dq_fsw_2_6',
            prompt: 'Which TypeScript feature allows you to define a custom function that acts as a type guard returning a boolean?',
            options: ['Type Assertions (as)', 'Type Predicates (arg is Type)', 'Intersection Types', 'Mapped Types'],
            correctIndex: 1,
            explanation: 'A type predicate is a return type annotation like `obj is SpecificType`, telling the compiler that if the function returns true, the object is indeed that type.'
          }
        }
      ]
    },
    {
      id: 'mod_fsw_3',
      code: '9.3',
title: 'React, Next.js & Modern Frontend Architecture',
      description: 'Build complex, scalable user interfaces using React hooks, server-side rendering with Next.js, and advanced state management.',
      lessons: [
        {
          id: 'les_fsw_3_1',
          title: 'React Hooks In-Depth',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Hooks manage state and side effects in functional components. The dependency array in useEffect controls exactly when effects re-run to prevent infinite loops.',
          codeSnippet: `useEffect(() => {\n  const fetchUser = async () => {\n    const data = await api.getUser(id);\n    setUser(data);\n  };\n  fetchUser();\n}, [id]); // Re-runs ONLY if id changes`,
          drillQuestion: {
            id: 'dq_fsw_3_1',
            prompt: 'What happens if you omit the dependency array in a useEffect hook?',
            options: ['The effect runs only once on mount', 'The effect runs on every render of the component', 'The effect never runs', 'The effect throws an error'],
            correctIndex: 1,
            explanation: 'Omitting the array causes the effect to run after every single render, which can lead to severe performance issues or infinite loops if state is updated inside.'
          }
        },
        {
          id: 'les_fsw_3_2',
          title: 'Advanced State Management (Zustand/Redux Toolkit)',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Global state managers solve "prop drilling". Zustand provides a minimalist hook-based approach, while Redux Toolkit enforces structured, predictable flux architectures.',
          codeSnippet: `import { create } from 'zustand';\n\nconst useStore = create((set) => ({\n  count: 0,\n  inc: () => set((state) => ({ count: state.count + 1 })),\n}));`,
          drillQuestion: {
            id: 'dq_fsw_3_2',
            prompt: 'What problem does Global State Management primarily solve in React?',
            options: ['Server-side rendering hydration issues', 'Prop drilling across deeply nested components', 'CSS encapsulation', 'Routing between pages'],
            correctIndex: 1,
            explanation: 'Global state allows components to access state directly without having to pass props down through multiple layers of intermediate components (prop drilling).'
          }
        },
        {
          id: 'les_fsw_3_3',
          title: 'Next.js App Router & Server Components',
          duration: '40 min',
          durationSeconds: 2400,
          completed: false,
          keyTakeaway: 'React Server Components (RSC) render on the server, sending zero JS to the client, leading to faster loads and built-in secure data fetching.',
          codeSnippet: `// Server Component (default in Next.js App Router)\nexport default async function ProductPage({ params }) {\n  const product = await db.query('SELECT * FROM products WHERE id = ?', params.id);\n  return <ProductDisplay data={product} />;\n}`,
          drillQuestion: {
            id: 'dq_fsw_3_3',
            prompt: 'In Next.js App Router, which directive must be added to a file to use React hooks like useState?',
            options: ['"use server"', '"use client"', '"use state"', '"use react"'],
            correctIndex: 1,
            explanation: 'By default, components are Server Components. Adding "use client" marks the file as a Client Component, enabling interactive hooks and DOM APIs.'
          }
        },
        {
          id: 'les_fsw_3_4',
          title: 'Data Fetching & Caching Strategies',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Modern tools like React Query or Next.js fetch() extensions cache API responses to minimize network requests, handle loading/error states, and manage revalidation.',
          codeSnippet: `const { data, isLoading } = useQuery({\n  queryKey: ['todos'],\n  queryFn: fetchTodos,\n  staleTime: 60000, // Data fresh for 1 minute\n});`,
          drillQuestion: {
            id: 'dq_fsw_3_4',
            prompt: 'In caching strategies, what does Stale-While-Revalidate (SWR) mean?',
            options: ['Block the UI until data is fetched', 'Serve cached data immediately, then fetch fresh data in the background to update the cache', 'Only fetch data if the user refreshes the page', 'Cache data permanently until the server explicitly deletes it'],
            correctIndex: 1,
            explanation: 'SWR provides a fast UI by showing stale data from the cache instantly, while silently verifying/updating the data with the server behind the scenes.'
          }
        },
        {
          id: 'les_fsw_3_5',
          title: 'Performance Optimization & Suspense',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'React.Suspense coordinates async boundaries, showing fallback UIs while lazy-loaded components or async data are resolving, preventing UI blocking.',
          codeSnippet: `import { Suspense, lazy } from 'react';\nconst HeavyChart = lazy(() => import('./HeavyChart'));\n\n<Suspense fallback={<Spinner />}>\n  <HeavyChart />\n</Suspense>`,
          drillQuestion: {
            id: 'dq_fsw_3_5',
            prompt: 'What is the primary benefit of using React.lazy() in a single-page application?',
            options: ['It caches components in local storage', 'It prevents CSS styles from leaking', 'It splits the JS bundle, loading code only when the component is rendered', 'It automatically memoizes component props'],
            correctIndex: 2,
            explanation: 'React.lazy() enables code-splitting. The browser downloads the component code only when it is needed, drastically reducing the initial load time.'
          }
        },
        {
          id: 'les_fsw_3_6',
          title: 'Accessibility (a11y) in React',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Building accessible UIs means managing focus correctly during route changes/modals, using ARIA attributes, and ensuring keyboard navigability.',
          codeSnippet: `function Modal({ isOpen, onClose }) {\n  const modalRef = useRef(null);\n  useEffect(() => {\n    if (isOpen) modalRef.current?.focus();\n  }, [isOpen]);\n  return <div role="dialog" aria-modal="true" tabIndex={-1} ref={modalRef}>...</div>;\n}`,
          drillQuestion: {
            id: 'dq_fsw_3_6',
            prompt: 'Why is managing focus crucial when a custom modal dialogue opens in a React app?',
            options: ['To trigger CSS transitions properly', 'To trap focus inside the modal so keyboard/screen-reader users do not accidentally interact with the background', 'To clear React state variables', 'To speed up DOM rendering'],
            correctIndex: 1,
            explanation: 'Focus trapping ensures users relying on keyboards or screen readers remain inside the active modal context, providing a secure and logical navigation flow.'
          }
        }
      ]
    },
    {
      id: 'mod_fsw_4',
      code: '9.4',
title: 'Node.js, Express & Backend API Design',
      description: 'Build robust, scalable backend services and REST/GraphQL APIs with Node.js and the Express ecosystem.',
      lessons: [
        {
          id: 'les_fsw_4_1',
          title: 'Node.js Event Loop & Non-Blocking I/O',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Node.js achieves high concurrency on a single thread using asynchronous I/O offloaded to the OS, managed by the libuv event loop.',
          codeSnippet: `const fs = require('fs');\n// Non-blocking\nfs.readFile('large-file.txt', (err, data) => {\n  console.log('File read complete');\n});\nconsole.log('Moving on to next task...');`,
          drillQuestion: {
            id: 'dq_fsw_4_1',
            prompt: 'What makes Node.js well-suited for I/O-heavy applications like web servers?',
            options: ['Multi-threading for every incoming request', 'Its non-blocking, event-driven architecture that avoids waiting for operations like DB queries to finish', 'Built-in relational database integration', 'Strict static typing out of the box'],
            correctIndex: 1,
            explanation: 'Node.js delegates I/O tasks to the system kernel and continues executing code. When the I/O task finishes, its callback enters the event loop queue.'
          }
        },
        {
          id: 'les_fsw_4_2',
          title: 'Express Middleware & Routing',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Express apps are essentially a pipeline of middleware functions. Request and Response objects flow through them in sequence using next().',
          codeSnippet: `app.use((req, res, next) => {\n  console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.url}\`);\n  next(); // Pass control to next middleware\n});`,
          drillQuestion: {
            id: 'dq_fsw_4_2',
            prompt: 'What happens if a middleware function in Express does not call next() and does not end the response (e.g., res.send())?',
            options: ['Express throws an error automatically', 'The request is skipped and the next one is processed', 'The client request will hang indefinitely until it times out', 'The request loops back to the first middleware'],
            correctIndex: 2,
            explanation: 'If a middleware neither sends a response nor calls next(), the request lifecycle stalls, causing the client connection to hang and eventually time out.'
          }
        },
        {
          id: 'les_fsw_4_3',
          title: 'RESTful API Design Principles',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'REST APIs should use resource-oriented URLs, standard HTTP methods (GET, POST, PUT, DELETE), and proper HTTP status codes to communicate outcomes.',
          codeSnippet: `// Good REST design\napp.get('/api/users', getUsers);\napp.post('/api/users', createUser);\napp.get('/api/users/:id', getUserById);\napp.delete('/api/users/:id', deleteUser);`,
          drillQuestion: {
            id: 'dq_fsw_4_3',
            prompt: 'Which HTTP status code is most appropriate for a successful POST request that creates a new resource?',
            options: ['200 OK', '201 Created', '204 No Content', '301 Moved Permanently'],
            correctIndex: 1,
            explanation: '201 Created is the standard RESTful response code specifically indicating that a request has succeeded and a new resource has been created.'
          }
        },
        {
          id: 'les_fsw_4_4',
          title: 'Error Handling & Validation',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Centralized error handling middleware intercepts thrown errors uniformly, while validation libraries (like Zod) sanitize data before business logic executes.',
          codeSnippet: `// Centralized Error Handler in Express\napp.use((err, req, res, next) => {\n  console.error(err.stack);\n  res.status(err.status || 500).json({ error: err.message });\n});`,
          drillQuestion: {
            id: 'dq_fsw_4_4',
            prompt: 'How does Express identify a middleware function specifically designed for error handling?',
            options: ['By the file name it is placed in', 'By its position at the top of the middleware stack', 'By accepting exactly 4 arguments: (err, req, res, next)', 'By calling app.error() instead of app.use()'],
            correctIndex: 2,
            explanation: 'Express recognizes error-handling middleware specifically by its signature having exactly four arguments: (err, req, res, next).'
          }
        },
        {
          id: 'les_fsw_4_5',
          title: 'GraphQL Basics & Apollo Server',
          duration: '40 min',
          durationSeconds: 2400,
          completed: false,
          keyTakeaway: 'GraphQL prevents over-fetching and under-fetching by allowing clients to request exactly the data they need through a strongly-typed schema.',
          codeSnippet: `const typeDefs = \`\n  type User {\n    id: ID!\n    name: String!\n  }\n  type Query {\n    users: [User]\n  }\n\`;`,
          drillQuestion: {
            id: 'dq_fsw_4_5',
            prompt: 'What primarily solves the "over-fetching" problem in GraphQL?',
            options: ['Its use of a single endpoint', 'The client specifies exactly which fields to return in the query', 'The server caches responses automatically', 'It uses WebSockets for faster data transfer'],
            correctIndex: 1,
            explanation: 'Unlike REST where endpoints return fixed data structures, GraphQL lets the client declare exactly which fields it wants, meaning no unnecessary data is sent over the network.'
          }
        }
      ]
    },
    {
      id: 'mod_fsw_5',
      code: '9.5',
title: 'Database Design: PostgreSQL, MongoDB & Supabase',
      description: 'Master data modeling, ORMs, and the tradeoffs between relational and NoSQL databases.',
      lessons: [
        {
          id: 'les_fsw_5_1',
          title: 'Relational Modeling & Normalization',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Normalization reduces data redundancy and improves data integrity by splitting tables and defining foreign key relationships.',
          codeSnippet: `CREATE TABLE orders (\n  id SERIAL PRIMARY KEY,\n  user_id INT REFERENCES users(id) ON DELETE CASCADE,\n  total_amount DECIMAL(10,2),\n  created_at TIMESTAMP DEFAULT NOW()\n);`,
          drillQuestion: {
            id: 'dq_fsw_5_1',
            prompt: 'What is the primary goal of the First Normal Form (1NF) in database design?',
            options: ['Eliminating transitive dependencies', 'Ensuring each column contains atomic (indivisible) values and rows are unique', 'Creating foreign keys for every table', 'Adding indexes to speed up reads'],
            correctIndex: 1,
            explanation: '1NF requires that a table has a primary key, and each column contains atomic data (e.g., no comma-separated lists inside a single cell).'
          }
        },
        {
          id: 'les_fsw_5_2',
          title: 'Advanced SQL: Joins, Indexes & Transactions',
          duration: '40 min',
          durationSeconds: 2400,
          completed: false,
          keyTakeaway: 'Indexes drastically speed up SELECT queries but slow down INSERT/UPDATE operations. Transactions ensure ACID properties (Atomicity, Consistency, Isolation, Durability).',
          codeSnippet: `BEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT;`,
          drillQuestion: {
            id: 'dq_fsw_5_2',
            prompt: 'What happens if an error occurs halfway through a transaction before the COMMIT statement is reached?',
            options: ['The completed steps are saved, the rest are skipped', 'The transaction is automatically Rolled Back, undoing all partial changes', 'The database locks permanently', 'The transaction continues in a new thread'],
            correctIndex: 1,
            explanation: 'Transactions are atomic. If any part fails, the entire transaction is rolled back so the database state remains consistent and uncorrupted.'
          }
        },
        {
          id: 'les_fsw_5_3',
          title: 'Prisma ORM & Type-Safe Queries',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Prisma generates a type-safe query builder directly from your database schema, ensuring TS catches invalid queries at compile time.',
          codeSnippet: `const users = await prisma.user.findMany({\n  where: { active: true },\n  include: { posts: true } // Joins relation\n});`,
          drillQuestion: {
            id: 'dq_fsw_5_3',
            prompt: 'What is a major benefit of Prisma over traditional SQL query builders like Knex?',
            options: ['It uses less memory', 'It auto-generates full TypeScript types matching your schema for strict type-checking', 'It does not require a database connection', 'It runs queries synchronously'],
            correctIndex: 1,
            explanation: 'Prisma introspects your schema to generate customized TS types, so if you try to select a column that doesn\'t exist, the TypeScript compiler will throw an error.'
          }
        },
        {
          id: 'les_fsw_5_4',
          title: 'NoSQL & MongoDB Fundamentals',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'NoSQL databases like MongoDB use flexible, schema-less JSON-like documents, excelling at unstructured data and rapid horizontal scaling.',
          codeSnippet: `// Mongoose Schema\nconst UserSchema = new mongoose.Schema({\n  username: String,\n  tags: [String], // Array directly in doc\n  metadata: { age: Number }\n});`,
          drillQuestion: {
            id: 'dq_fsw_5_4',
            prompt: 'When is embedding documents in MongoDB typically preferred over referencing (like foreign keys)?',
            options: ['When the embedded data is updated frequently and independently', 'When there is a "contains" or "has-a" relationship and the nested data is frequently read together with the parent', 'When the array of embedded documents can grow infinitely large', 'To implement strict ACID compliance'],
            correctIndex: 1,
            explanation: 'Embedding is best for 1-to-few relationships where data is accessed together (e.g., an address inside a user profile), avoiding secondary queries.'
          }
        },
        {
          id: 'les_fsw_5_5',
          title: 'Supabase & Backend-as-a-Service',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Supabase provides a hosted Postgres database paired with auto-generated REST/GraphQL APIs, Auth, and Realtime subscriptions, drastically speeding up development.',
          codeSnippet: `// Supabase Realtime Subscription\nconst { data } = await supabase\n  .from('messages')\n  .on('INSERT', payload => console.log('New message!', payload.new))\n  .subscribe();`,
          drillQuestion: {
            id: 'dq_fsw_5_5',
            prompt: 'How does Supabase handle security if the client can directly query the database via the auto-generated API?',
            options: ['By relying entirely on front-end validation', 'Through PostgreSQL Row Level Security (RLS) policies based on the authenticated user', 'By blocking all UPDATE and DELETE requests', 'Using IP address whitelisting'],
            correctIndex: 1,
            explanation: 'Supabase leverages standard PostgreSQL Row Level Security (RLS) to ensure that users can only read, update, or delete rows that their JWT tokens authorize them to.'
          }
        },
        {
          id: 'les_fsw_5_6',
          title: 'Database Migrations & Evolution',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Database migrations are version-controlled scripts that track structural schema changes over time, allowing teams to safely update production databases.',
          codeSnippet: `-- V1__Create_users_table.sql\nCREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(255));\n\n-- V2__Add_email_column.sql\nALTER TABLE users ADD COLUMN email VARCHAR(255) UNIQUE;`,
          drillQuestion: {
            id: 'dq_fsw_5_6',
            prompt: 'Why is it critical to use Migration files rather than manually updating a database schema via a GUI tool?',
            options: ['It is required by all databases', 'Migrations provide version control, repeatable deployments, and easy rollbacks for schema changes', 'Manual updates are slower', 'GUI tools cannot add indexes'],
            correctIndex: 1,
            explanation: 'Like git for code, migrations track the history of the database schema, ensuring all environments (dev, staging, prod) stay perfectly in sync automatically.'
          }
        }
      ]
    },
    {
      id: 'mod_fsw_6',
      code: '9.6',
title: 'Authentication, Authorization & Security Patterns',
      description: 'Implement secure login systems, OAuth, JWTs, role-based access control, and protect against common vulnerabilities.',
      lessons: [
        {
          id: 'les_fsw_6_1',
          title: 'Passwords, Hashing & Salting',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Never store plain-text passwords. Always hash them using algorithms like bcrypt or Argon2, which include a unique "salt" to prevent rainbow table attacks.',
          codeSnippet: `const bcrypt = require('bcrypt');\nconst saltRounds = 10;\n// Hashing\nconst hash = await bcrypt.hash(myPlaintextPassword, saltRounds);\n// Verification\nconst match = await bcrypt.compare(loginPassword, hash);`,
          drillQuestion: {
            id: 'dq_fsw_6_1',
            prompt: 'What is the purpose of "salting" a password before hashing it?',
            options: ['To make the hashing process faster', 'To ensure that two users with the same password have different hashes', 'To allow the password to be decrypted later', 'To enforce password complexity rules'],
            correctIndex: 1,
            explanation: 'A salt is a random string added to the password before hashing. It guarantees unique hashes even for identical passwords, thwarting precomputed dictionary (rainbow table) attacks.'
          }
        },
        {
          id: 'les_fsw_6_2',
          title: 'JWTs (JSON Web Tokens) & Sessions',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'JWTs are stateless and self-contained tokens used for API auth. Unlike traditional session IDs, the server verifies JWTs mathematically without database lookups.',
          codeSnippet: `const jwt = require('jsonwebtoken');\nconst token = jwt.sign({ userId: 123 }, process.env.JWT_SECRET, { expiresIn: '1h' });\n// Payload is readable, signature proves authenticity`,
          drillQuestion: {
            id: 'dq_fsw_6_2',
            prompt: 'Which part of a JWT ensures that the token has not been tampered with?',
            options: ['The Header', 'The Payload', 'The Signature', 'The Expiry Date'],
            correctIndex: 2,
            explanation: 'The Signature is generated using a secret key held by the server. If a malicious user alters the Payload, the Signature validation will fail.'
          }
        },
        {
          id: 'les_fsw_6_3',
          title: 'OAuth2.0 & Social Login',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'OAuth allows users to grant third-party applications access to their data without sharing their passwords, relying on access tokens and refresh tokens.',
          codeSnippet: `// Typical OAuth flow callback\napp.get('/auth/google/callback', async (req, res) => {\n  const { code } = req.query;\n  const tokens = await exchangeCodeForTokens(code);\n  res.cookie('token', tokens.id_token);\n});`,
          drillQuestion: {
            id: 'dq_fsw_6_3',
            prompt: 'In OAuth 2.0, what is the role of a Refresh Token?',
            options: ['To verify the user\'s email address', 'To encrypt data sent over the network', 'To obtain a new Access Token when the current one expires without requiring re-login', 'To log out the user across all devices'],
            correctIndex: 2,
            explanation: 'Access Tokens have short lifespans for security. Refresh Tokens are long-lived and securely stored, used solely to silently fetch new Access Tokens.'
          }
        },
        {
          id: 'les_fsw_6_4',
          title: 'Role-Based Access Control (RBAC)',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'RBAC restricts system access based on assigned roles (Admin, User, Editor). Middleware can easily intercept requests to enforce these permissions.',
          codeSnippet: `function requireRole(role) {\n  return (req, res, next) => {\n    if (req.user.role !== role) return res.status(403).send('Forbidden');\n    next();\n  }\n}\napp.delete('/users', requireRole('ADMIN'), deleteUsers);`,
          drillQuestion: {
            id: 'dq_fsw_6_4',
            prompt: 'What is the primary difference between Authentication (AuthN) and Authorization (AuthZ)?',
            options: ['AuthZ uses JWTs, AuthN uses sessions', 'AuthN verifies WHO you are; AuthZ determines WHAT you are allowed to do', 'AuthN is for APIs, AuthZ is for frontends', 'There is no difference'],
            correctIndex: 1,
            explanation: 'Authentication verifies identity (e.g., logging in). Authorization checks permissions (e.g., can this logged-in user delete a post?).'
          }
        },
        {
          id: 'les_fsw_6_5',
          title: 'Defending against XSS & CSRF',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Prevent Cross-Site Scripting (XSS) by escaping user input. Prevent Cross-Site Request Forgery (CSRF) using Anti-CSRF tokens or SameSite cookie attributes.',
          codeSnippet: `// Using SameSite attribute in Express to mitigate CSRF\nres.cookie('session_id', 'value', {\n  httpOnly: true,\n  secure: true,\n  sameSite: 'strict'\n});`,
          drillQuestion: {
            id: 'dq_fsw_6_5',
            prompt: 'How does an HTTP-Only cookie help mitigate XSS (Cross-Site Scripting) attacks?',
            options: ['It encrypts the cookie data', 'It prevents the cookie from being sent over non-HTTPS connections', 'It blocks malicious JavaScript (like document.cookie) from accessing the cookie', 'It automatically sanitizes HTML inputs'],
            correctIndex: 2,
            explanation: 'The httpOnly flag instructs the browser that the cookie must not be accessible via JavaScript. If an attacker injects a script via XSS, they still cannot steal the session token.'
          }
        }
      ]
    },
    {
      id: 'mod_fsw_7',
      code: '9.7',
title: 'React Native & Cross-Platform Mobile Development',
      description: 'Leverage your React skills to build native iOS and Android applications with React Native and Expo.',
      lessons: [
        {
          id: 'les_fsw_7_1',
          title: 'React Native vs Web React',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'React Native uses native UI components (View, Text) instead of HTML elements (div, span) and compiles JS logic to drive native iOS/Android views via a bridge.',
          codeSnippet: `import { View, Text, StyleSheet } from 'react-native';\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <Text>Hello Native World!</Text>\n    </View>\n  );\n}`,
          drillQuestion: {
            id: 'dq_fsw_7_1',
            prompt: 'Instead of using a <div> for a container element, what core component should you use in React Native?',
            options: ['<Container>', '<Section>', '<View>', '<Box>'],
            correctIndex: 2,
            explanation: 'The <View> component is the fundamental UI building block in React Native, analogous to the <div> in web development.'
          }
        },
        {
          id: 'les_fsw_7_2',
          title: 'Styling & Flexbox in Native',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'React Native styles are written in JS objects using camelCase. Flexbox is the default layout engine, but it defaults to column direction instead of row.',
          codeSnippet: `const styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    flexDirection: 'row', // Overriding default 'column'\n    justifyContent: 'center',\n    alignItems: 'center',\n  }\n});`,
          drillQuestion: {
            id: 'dq_fsw_7_2',
            prompt: 'What is a key difference in how Flexbox operates in React Native compared to CSS on the web?',
            options: ['React Native does not support flex-wrap', 'flex-direction defaults to "column" in React Native instead of "row"', 'React Native uses integers for percentages', 'justify-content aligns items on the cross axis'],
            correctIndex: 1,
            explanation: 'To match the vertical scrolling nature of mobile devices, React Native sets the default flex-direction to column.'
          }
        },
        {
          id: 'les_fsw_7_3',
          title: 'Navigation: React Navigation',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Mobile navigation differs from URLs; it uses Stacks, Tabs, and Drawers to push and pop screens, preserving the state of previous screens in memory.',
          codeSnippet: `import { createNativeStackNavigator } from '@react-navigation/native-stack';\nconst Stack = createNativeStackNavigator();\n\n<Stack.Navigator>\n  <Stack.Screen name="Home" component={HomeScreen} />\n  <Stack.Screen name="Details" component={DetailsScreen} />\n</Stack.Navigator>`,
          drillQuestion: {
            id: 'dq_fsw_7_3',
            prompt: 'In a Stack Navigator, what happens when a user navigates from "Home" to "Details"?',
            options: ['The Home component is completely unmounted and destroyed', 'The Details screen is pushed on top, and Home remains mounted in the background', 'The app opens a new browser tab', 'The state of Home is reset to default'],
            correctIndex: 1,
            explanation: 'Stack navigation works like a stack of cards. The previous screen remains mounted underneath, preserving its state for when the user hits the "Back" button.'
          }
        },
        {
          id: 'les_fsw_7_4',
          title: 'Device APIs & Expo SDK',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'The Expo SDK provides easy-to-use JavaScript wrappers around complex native APIs like Camera, Location, Push Notifications, and File System.',
          codeSnippet: `import * as Location from 'expo-location';\n\nlet { status } = await Location.requestForegroundPermissionsAsync();\nif (status === 'granted') {\n  let location = await Location.getCurrentPositionAsync({});\n}`,
          drillQuestion: {
            id: 'dq_fsw_7_4',
            prompt: 'Why is it necessary to request permissions before using Device APIs like the Camera or Location?',
            options: ['To initialize the hardware sensors', 'Because iOS and Android OS enforce strict privacy rules requiring explicit user consent', 'To download the necessary Expo modules', 'To check if the device supports the feature'],
            correctIndex: 1,
            explanation: 'Modern mobile operating systems mandate that apps secure explicit permission from the user before accessing sensitive personal data or device hardware.'
          }
        },
        {
          id: 'les_fsw_7_5',
          title: 'Performance & The Native Bridge',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Avoid passing heavy data too frequently across the asynchronous JS-to-Native bridge. Use libraries like Reanimated that run animations directly on the UI thread.',
          codeSnippet: `// Using react-native-reanimated to avoid bridge traffic\nconst animatedStyle = useAnimatedStyle(() => {\n  return {\n    transform: [{ translateX: sharedValue.value }]\n  };\n});`,
          drillQuestion: {
            id: 'dq_fsw_7_5',
            prompt: 'What performance bottleneck does the "JS Bridge" introduce in traditional React Native?',
            options: ['It causes memory leaks', 'Serialization and asynchronous communication between JS and Native threads can drop frames during heavy animations', 'It prevents access to native hardware', 'It blocks the JS event loop entirely'],
            correctIndex: 1,
            explanation: 'In older RN architectures, every frame of an animation driven by JS required sending serialized data over the bridge to the Native thread, which could easily cause lag. Modern tools bypass this.'
          }
        }
      ]
    },
    {
      id: 'mod_fsw_8',
      code: '9.8',
title: 'Testing, Debugging & Performance Optimization',
      description: 'Ensure application reliability through automated testing and optimize performance for real-world scenarios.',
      lessons: [
        {
          id: 'les_fsw_8_1',
          title: 'Unit Testing with Jest',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Unit tests isolate individual functions to ensure they output correct results for given inputs. Mocking dependencies prevents external factors from failing tests.',
          codeSnippet: `test('adds 1 + 2 to equal 3', () => {\n  expect(sum(1, 2)).toBe(3);\n});\n\n// Mocking a module\njest.mock('./api');\napi.fetchData.mockResolvedValue('fake data');`,
          drillQuestion: {
            id: 'dq_fsw_8_1',
            prompt: 'What is the purpose of "mocking" in unit tests?',
            options: ['To make the tests run slower and simulate real latency', 'To replace external dependencies with controlled fakes so you only test the unit\'s logic', 'To skip tests that are failing', 'To write tests automatically'],
            correctIndex: 1,
            explanation: 'Mocking replaces things like database calls or network requests with dummy functions, ensuring your unit test only evaluates the specific logic of the function being tested.'
          }
        },
        {
          id: 'les_fsw_8_2',
          title: 'React Testing Library (RTL)',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'RTL encourages testing UI components the way users interact with them (finding elements by text or role) rather than asserting on internal state or implementation details.',
          codeSnippet: `import { render, screen, fireEvent } from '@testing-library/react';\n\nrender(<Button label="Submit" />);\nfireEvent.click(screen.getByRole('button', { name: /submit/i }));\nexpect(handleClick).toHaveBeenCalled();`,
          drillQuestion: {
            id: 'dq_fsw_8_2',
            prompt: 'Why does React Testing Library prefer querying by ARIA Roles (getByRole) over CSS classes or IDs?',
            options: ['Roles are faster for the CPU to parse', 'Roles ensure your app is accessible and simulate how a user (or screen reader) finds elements', 'CSS classes are removed during testing', 'Roles are required by Jest'],
            correctIndex: 1,
            explanation: 'By testing through accessibility interfaces, you guarantee both that the user can find the element and that it is properly marked up for assistive technologies.'
          }
        },
        {
          id: 'les_fsw_8_3',
          title: 'End-to-End (E2E) Testing with Playwright',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'E2E testing automates real browsers to simulate user journeys from start to finish, ensuring the frontend, backend, and database integrate correctly.',
          codeSnippet: `test('user can log in', async ({ page }) => {\n  await page.goto('/login');\n  await page.fill('[name="email"]', 'user@test.com');\n  await page.click('button[type="submit"]');\n  await expect(page).toHaveURL('/dashboard');\n});`,
          drillQuestion: {
            id: 'dq_fsw_8_3',
            prompt: 'Which scenario is most appropriate for an End-to-End (E2E) test?',
            options: ['Checking if a utility function correctly formats dates', 'Verifying a React component renders specific props', 'Simulating a user adding an item to a cart and completing checkout', 'Testing a database query in isolation'],
            correctIndex: 2,
            explanation: 'E2E tests validate entire user flows spanning multiple systems (UI, network, database) to ensure the application works holistically as a user would experience it.'
          }
        },
        {
          id: 'les_fsw_8_4',
          title: 'Frontend Performance & Core Web Vitals',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Google Core Web Vitals (LCP, FID, CLS) measure real-world user experience. Optimizing images, code-splitting, and reducing main-thread blocking improves these scores.',
          codeSnippet: `// Using Next.js Image component for automatic optimization\nimport Image from 'next/image';\n\n<Image \n  src="/hero.jpg" \n  alt="Hero" \n  width={1200} \n  height={800} \n  priority \n/>`,
          drillQuestion: {
            id: 'dq_fsw_8_4',
            prompt: 'What does Cumulative Layout Shift (CLS) measure in Core Web Vitals?',
            options: ['How fast the largest image loads', 'The delay before the browser responds to a click', 'The visual stability of the page (unexpected movement of content)', 'The time it takes to parse JavaScript'],
            correctIndex: 2,
            explanation: 'CLS measures unexpected layout shifts (e.g., an ad loads late and pushes text down while you are reading). Lower CLS means a stable, non-frustrating UX.'
          }
        },
        {
          id: 'les_fsw_8_5',
          title: 'Advanced Debugging Techniques',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Use browser DevTools (Network, Performance, Memory tabs) and IDE step-through debuggers rather than relying solely on console.log to find complex bugs.',
          codeSnippet: `function calculateTax(total) {\n  debugger; // Pauses execution in DevTools\n  return total * 0.2;\n}`,
          drillQuestion: {
            id: 'dq_fsw_8_5',
            prompt: 'What happens when the browser encounters a `debugger;` statement in JavaScript?',
            options: ['It throws a syntax error', 'It prints the current memory usage to the console', 'It pauses code execution if developer tools are open, allowing you to inspect variables', 'It restarts the JavaScript engine'],
            correctIndex: 2,
            explanation: 'The `debugger` statement acts as a hardcoded breakpoint. If DevTools is open, the browser halts execution exactly at that line.'
          }
        }
      ]
    },
    {
      id: 'mod_fsw_9',
      code: '9.9',
title: 'UI/UX Design Principles & Design Systems',
      description: 'Bridge the gap between design and engineering by mastering design principles, Figma, and component libraries.',
      lessons: [
        {
          id: 'les_fsw_9_1',
          title: 'Visual Hierarchy & Spacing',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Good design directs the user\'s eye using size, color, and whitespace. Consistent spacing scales (e.g., 4px/8px grids) create professional layouts.',
          codeSnippet: `// A standard 8px spacing scale in Tailwind CSS config\nmodule.exports = {\n  theme: {\n    spacing: { '1': '8px', '2': '16px', '3': '24px', '4': '32px' }\n  }\n}`,
          drillQuestion: {
            id: 'dq_fsw_9_1',
            prompt: 'Why do designers commonly use an 8-point grid system for spacing?',
            options: ['It is required for mobile devices', 'Because 8 divides cleanly on most screen resolutions and scales nicely (8, 16, 24, 32)', 'Because CSS only supports multiples of 8', 'It creates asymmetrical layouts'],
            correctIndex: 1,
            explanation: 'The 8pt grid ensures consistent rhythm and sharp rendering on various screen pixel densities, as 8 is easily divisible and scales predictably.'
          }
        },
        {
          id: 'les_fsw_9_2',
          title: 'Color Theory & Accessibility',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Color combinations must meet WCAG contrast ratios (e.g., 4.5:1 for normal text) to be readable for visually impaired users. Color should never be the only indicator of information.',
          codeSnippet: `.error-message {\n  color: #d32f2f; /* Red */\n  /* Adding an icon ensures color isn't the only indicator */\n}\n\n/* Ensure contrast: Dark red on light background */`,
          drillQuestion: {
            id: 'dq_fsw_9_2',
            prompt: 'According to WCAG guidelines, why is it bad practice to indicate an error solely by changing a border color to red?',
            options: ['Red is not supported on all monitors', 'Colorblind users may not perceive the change; additional cues like icons or text are necessary', 'It takes too much CSS to implement', 'Red usually means success in some cultures'],
            correctIndex: 1,
            explanation: 'Information conveyed with color must also be conveyed through another means (like a text label or icon) to accommodate colorblind users.'
          }
        },
        {
          id: 'les_fsw_9_3',
          title: 'Microinteractions & Animation',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Subtle animations (like button hovers or loading states) provide critical feedback to the user, making apps feel responsive and polished. Keep animations under 300ms.',
          codeSnippet: `.btn {\n  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.btn:active {\n  transform: scale(0.95);\n}`,
          drillQuestion: {
            id: 'dq_fsw_9_3',
            prompt: 'What is the primary purpose of a microinteraction (like a heart icon filling with color when clicked)?',
            options: ['To entertain the user', 'To demonstrate CSS skills', 'To provide immediate, clear feedback about the result of a user action', 'To slow down the application'],
            correctIndex: 2,
            explanation: 'Microinteractions confirm to the user that the system received their input and processed it, removing uncertainty.'
          }
        },
        {
          id: 'les_fsw_9_4',
          title: 'Figma for Developers',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Developers must understand how to inspect Figma files to extract exact values for typography, colors, padding, and export SVG assets efficiently.',
          codeSnippet: `// Extracting SVG from Figma to React\nexport const IconArrow = () => (\n  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">\n    <path d="M5 12h14" stroke="currentColor" strokeWidth="2"/>\n  </svg>\n);`,
          drillQuestion: {
            id: 'dq_fsw_9_4',
            prompt: 'In Figma, what feature is analogous to a React Component, allowing designers to reuse UI elements?',
            options: ['Frames', 'Auto Layout', 'Main Components & Instances', 'Vector Networks'],
            correctIndex: 2,
            explanation: 'A Main Component in Figma defines the base design, and Instances are copies of it. Updating the Main Component updates all Instances, exactly like React components.'
          }
        },
        {
          id: 'les_fsw_9_5',
          title: 'Building a Design System',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'A Design System is a centralized collection of reusable components, design tokens, and guidelines that ensures consistency across massive applications.',
          codeSnippet: `// Design Tokens\nexport const tokens = {\n  colors: { primary: '#14b8a6', surface: '#ffffff' },\n  typography: { fontBase: 'Inter, sans-serif' }\n};`,
          drillQuestion: {
            id: 'dq_fsw_9_5',
            prompt: 'What are "Design Tokens" in the context of a Design System?',
            options: ['Premium assets bought from design stores', 'Named entities that store visual design attributes (like color codes or spacing values) in a platform-agnostic way', 'JWTs used for design authentication', 'Figma plugins'],
            correctIndex: 1,
            explanation: 'Design tokens extract hardcoded values (like `#14b8a6`) into semantic variables (like `color.brand.primary`) that can be used across CSS, iOS, and Android platforms.'
          }
        },
        {
          id: 'les_fsw_9_6',
          title: 'Component Driven Development (Storybook)',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Storybook allows developers to build and test UI components in isolation outside of the main application, serving as living documentation.',
          codeSnippet: `// Button.stories.jsx\nimport { Button } from './Button';\n\nexport default { title: 'Components/Button', component: Button };\n\nexport const Primary = () => <Button primary>Click Me</Button>;`,
          drillQuestion: {
            id: 'dq_fsw_9_6',
            prompt: 'What is a major advantage of using Storybook?',
            options: ['It automatically writes unit tests for you', 'It replaces React', 'It allows you to develop UI components in an isolated environment without needing to start the full app backend or deal with complex routing', 'It deploys your application to production'],
            correctIndex: 2,
            explanation: 'By isolating components, Storybook makes it easy to work on UI variations and edge cases without navigating deep into a running application to trigger them.'
          }
        }
      ]
    },
    {
      id: 'mod_fsw_10',
      code: '9.10',
title: 'Deployment, Hosting & Production Operations',
      description: 'Take your apps from local development to scalable production environments using modern CI/CD and cloud platforms.',
      lessons: [
        {
          id: 'les_fsw_10_1',
          title: 'Docker & Containerization',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Docker packages an application and its dependencies into a standardized unit (container), eliminating the "it works on my machine" problem.',
          codeSnippet: `# Dockerfile for Node.js App\nFROM node:18-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install --production\nCOPY . .\nCMD ["node", "server.js"]`,
          drillQuestion: {
            id: 'dq_fsw_10_1',
            prompt: 'What is the fundamental difference between a Docker Container and a Virtual Machine (VM)?',
            options: ['Containers bundle the full operating system; VMs do not', 'Containers share the host operating system kernel; VMs include their own full guest operating system', 'VMs are faster to start than containers', 'Containers can only run Linux applications'],
            correctIndex: 1,
            explanation: 'Containers are lightweight because they share the underlying OS kernel, whereas VMs must boot up an entire guest operating system, using much more memory and CPU.'
          }
        },
        {
          id: 'les_fsw_10_2',
          title: 'CI/CD Pipelines (GitHub Actions)',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Continuous Integration / Continuous Deployment (CI/CD) automates testing, building, and deploying code every time a commit is pushed to a branch.',
          codeSnippet: `name: Node.js CI\non: [push]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v3\n    - run: npm ci\n    - run: npm test`,
          drillQuestion: {
            id: 'dq_fsw_10_2',
            prompt: 'What is the primary goal of Continuous Integration (CI)?',
            options: ['To automatically scale servers up during high traffic', 'To merge code changes frequently and automatically run tests to catch bugs early', 'To write tests automatically', 'To host static websites'],
            correctIndex: 1,
            explanation: 'CI practices require developers to merge code often. Automated builds and tests run on every merge, ensuring that the main branch remains stable and bug-free.'
          }
        },
        {
          id: 'les_fsw_10_3',
          title: 'Serverless Edge vs Traditional Hosting',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Traditional servers are always running. Serverless functions spin up on-demand to handle requests, while Edge computing runs functions in CDNs physically closer to the user.',
          codeSnippet: `// Next.js Edge API Route\nexport const config = { runtime: 'edge' };\n\nexport default function handler(req) {\n  return new Response(JSON.stringify({ location: 'Edge Node' }));\n}`,
          drillQuestion: {
            id: 'dq_fsw_10_3',
            prompt: 'What is a common drawback (trade-off) of using Serverless Functions (like AWS Lambda)?',
            options: ['You have to manually update the operating system', '"Cold starts" can cause delayed response times for the first request after a period of inactivity', 'They cannot connect to databases', 'You pay a fixed monthly cost regardless of traffic'],
            correctIndex: 1,
            explanation: 'When a serverless function hasn\'t been called recently, the cloud provider spins it down. The next request triggers a "cold start" to boot it up again, adding latency.'
          }
        },
        {
          id: 'les_fsw_10_4',
          title: 'Vercel, Railway & Modern PaaS',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Platform-as-a-Service (PaaS) providers handle server provisioning, load balancing, and SSL certificates automatically, allowing developers to focus purely on code.',
          codeSnippet: `// Deployment via CLI\n$ vercel --prod\n// Vercel automatically detects Next.js, builds it, and distributes it globally to a CDN.`,
          drillQuestion: {
            id: 'dq_fsw_10_4',
            prompt: 'In a modern Git-based deployment workflow (like Vercel or Netlify), what triggers a preview deployment?',
            options: ['Pushing code to the production server via FTP', 'Creating a Pull Request to the main branch', 'Manually clicking "Deploy" in the dashboard', 'Updating the database schema'],
            correctIndex: 1,
            explanation: 'Modern platforms automatically listen to Git events. When a Pull Request is opened, they automatically deploy a unique preview URL for that specific branch so the team can review it.'
          }
        },
        {
          id: 'les_fsw_10_5',
          title: 'Monitoring, Logging & Alerts',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Production systems require observability. Tools like Datadog or Sentry capture runtime errors, track API latency, and alert you before users notice issues.',
          codeSnippet: `import * as Sentry from "@sentry/node";\n\nSentry.init({ dsn: "https://example@sentry.io/123" });\n\ntry {\n  dangerousOperation();\n} catch (error) {\n  Sentry.captureException(error);\n}`,
          drillQuestion: {
            id: 'dq_fsw_10_5',
            prompt: 'Why are standard `console.log` statements insufficient for monitoring a production Node.js backend?',
            options: ['console.log slows down the event loop permanently', 'They crash the server if called too often', 'Logs are ephemeral, unsearchable, and do not provide context like stack traces or user sessions automatically', 'Node.js ignores console.log in production environments'],
            correctIndex: 2,
            explanation: 'Proper monitoring services aggregate logs, provide searchable dashboards, capture full stack traces, and can trigger alerts (e.g., Slack messages) when error rates spike.'
          }
        }
      ]
    }
  ]
};




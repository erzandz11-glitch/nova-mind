import { FrontierFaculty, FrontierFacultyLesson, FrontierFacultyModule } from '../../types';

export const GAME_DEV_MEDIA_FACULTY: FrontierFaculty = {
  id: 'game_dev_media' as any,
  name: 'Faculty of Game Development & Interactive Media',
  shortTitle: 'Game Dev',
  iconName: 'Gamepad2',
  emoji: '🎮',
  themeColor: 'fuchsia' as any,
  accentHex: '#d946ef',
  glowClass: 'shadow-[0_0_35px_rgba(217,70,239,0.25)]',
  borderClass: 'border-fuchsia-500/30 hover:border-fuchsia-400/60',
  bgLightClass: 'bg-fuchsia-500/10 text-fuchsia-400',
  badgeClass: 'bg-fuchsia-500/10 text-fuchsia-300 border border-fuchsia-500/30',
  headline: 'Build Games, Master Interactive Systems & Ship Creative Products',
  description: 'Master Godot 4, Unity, 3D math, physics, pixel art, multiplayer netcode, and game production pipelines.',
  difficulty: 'Tactical' as any,
  estimatedHours: 90,
  totalXp: 2800,
  completionPercent: 0,
  simulatorName: 'Game Logic & State Machine Sandbox',
  simulatorTag: 'Interactive Development Arena',
  drillNodes: [],
  modules: [
    {
      id: 'gdev_mod_1',
      code: '8.1',
title: 'Godot 4 & GDScript 2.0 Fundamentals',
      description: 'Master the Godot node system, scenes, and write efficient GDScript.',
      lessons: [
        {
          id: 'gdev_1_1',
          title: 'Nodes & Scene Trees',
          duration: '20 min',
          durationSeconds: 1200,
          completed: false,
          keyTakeaway: 'In Godot, everything is a Node, and Nodes are composed into reusable Scenes to build the game tree.',
          drillQuestion: {
            id: 'gdev_1_1_q',
            prompt: 'What is the fundamental building block in Godot engine?',
            options: ['Prefabs', 'Nodes', 'Actors', 'GameObjects'],
            correctIndex: 1,
            explanation: 'Godot organizes games around a tree of Nodes, where each node provides a specific piece of functionality.'
          }
        },
        {
          id: 'gdev_1_2',
          title: 'GDScript 2.0 Syntax',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'GDScript 2.0 introduces strong typing, first-class callables, and properties for clean game logic.',
          codeSnippet: `extends CharacterBody2D\n\n@export var speed: float = 300.0\n\nfunc _physics_process(delta: float) -> void:\n    var direction := Input.get_vector("ui_left", "ui_right", "ui_up", "ui_down")\n    velocity = direction * speed\n    move_and_slide()`,
          drillQuestion: {
            id: 'gdev_1_2_q',
            prompt: 'In GDScript 2.0, what does the @export annotation do?',
            options: ['Compiles the script to C++', 'Exposes the variable to the Godot Editor Inspector', 'Makes a variable global', 'Exports the game project'],
            correctIndex: 1,
            explanation: '@export exposes variables to the editor so designers can easily tweak them without opening code.'
          }
        },
        {
          id: 'gdev_1_3',
          title: 'Signals & Callables',
          duration: '20 min',
          durationSeconds: 1200,
          completed: false,
          keyTakeaway: 'Signals implement the Observer pattern, allowing nodes to communicate without tight coupling.',
          codeSnippet: `signal health_changed(new_health: int)\n\nfunc take_damage(amount: int):\n    health -= amount\n    health_changed.emit(health)`,
          drillQuestion: {
            id: 'gdev_1_3_q',
            prompt: 'What software design pattern do Godot Signals implement?',
            options: ['Singleton', 'Observer', 'Factory', 'Strategy'],
            correctIndex: 1,
            explanation: 'Signals use the Observer pattern, emitting events that other connected nodes (observers) can react to.'
          }
        },
        {
          id: 'gdev_1_4',
          title: 'Physics & Collisions',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'PhysicsBody nodes and CollisionShapes define how objects interact with the engine\'s physics simulation.',
          drillQuestion: {
            id: 'gdev_1_4_q',
            prompt: 'Which Godot node type is best for player characters that need custom movement logic but must collide with walls?',
            options: ['RigidBody2D', 'Area2D', 'CharacterBody2D', 'StaticBody2D'],
            correctIndex: 2,
            explanation: 'CharacterBody2D (formerly KinematicBody2D) allows precise code-driven movement while stopping at colliders.'
          }
        },
        {
          id: 'gdev_1_5',
          title: 'UI & Control Nodes',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Control nodes are specifically designed for UI, handling anchors, margins, and responsive layouts.',
          drillQuestion: {
            id: 'gdev_1_5_q',
            prompt: 'What base class do all UI elements in Godot inherit from?',
            options: ['Node2D', 'Control', 'Widget', 'CanvasItem'],
            correctIndex: 1,
            explanation: 'Control is the base node for all GUI elements, providing layout anchors and margins.'
          }
        },
        {
          id: 'gdev_1_6',
          title: 'Animation Player & State Machines',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'AnimationPlayer can animate almost any property of any node, making it powerful for complex visual states.',
          drillQuestion: {
            id: 'gdev_1_6_q',
            prompt: 'What can an AnimationPlayer animate in Godot?',
            options: ['Only sprite frames', 'Only node positions', 'Almost any property of any node', 'Only UI elements'],
            correctIndex: 2,
            explanation: 'AnimationPlayer is versatile and can keyframe virtually any property, including collision shapes, script variables, and positions.'
          }
        }
      ]
    },
    {
      id: 'gdev_mod_2',
      code: '8.2',
title: 'Unity & C# Game Programming',
      description: 'Learn the component-based architecture of Unity and robust C# patterns.',
      lessons: [
        {
          id: 'gdev_2_1',
          title: 'MonoBehaviour & Components',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Unity uses an Entity-Component model where GameObjects act as containers for functional scripts called Components.',
          codeSnippet: `using UnityEngine;\n\npublic class Rotator : MonoBehaviour {\n    public float speed = 100f;\n    void Update() {\n        transform.Rotate(Vector3.up * speed * Time.deltaTime);\n    }\n}`,
          drillQuestion: {
            id: 'gdev_2_1_q',
            prompt: 'What is the base class from which every Unity script component derives?',
            options: ['GameObject', 'MonoBehaviour', 'ScriptableObject', 'ComponentBehavior'],
            correctIndex: 1,
            explanation: 'MonoBehaviour is the base class that allows scripts to attach to GameObjects and receive lifecycle events like Update().'
          }
        },
        {
          id: 'gdev_2_2',
          title: 'C# Events & Actions',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'C# delegates and events provide a type-safe way to decouple systems like UI and gameplay logic.',
          codeSnippet: `using System;\n\npublic class Player : MonoBehaviour {\n    public static event Action<int> OnScoreChanged;\n    private int score;\n    public void AddScore(int amount) {\n        score += amount;\n        OnScoreChanged?.Invoke(score);\n    }\n}`,
          drillQuestion: {
            id: 'gdev_2_2_q',
            prompt: 'What does the "?." operator do in "OnScoreChanged?.Invoke()"?',
            options: ['Throws an error if null', 'Invokes asynchronously', 'Checks if null and only invokes if subscribers exist', 'Loops through all subscribers'],
            correctIndex: 2,
            explanation: 'The null-conditional operator "?." prevents a NullReferenceException if the event has no subscribers.'
          }
        },
        {
          id: 'gdev_2_3',
          title: 'Coroutines & Async/Await',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Coroutines allow logic to span multiple frames without blocking the main thread.',
          codeSnippet: `using System.Collections;\n\npublic IEnumerator SpawnWaves() {\n    yield return new WaitForSeconds(2f);\n    SpawnEnemy();\n    yield return null; // Wait 1 frame\n}`,
          drillQuestion: {
            id: 'gdev_2_3_q',
            prompt: 'What keyword does a Coroutine use to pause execution and return control to Unity?',
            options: ['await', 'yield return', 'break', 'pause'],
            correctIndex: 1,
            explanation: 'Coroutines return IEnumerator and use "yield return" to pause execution until a condition is met (like waiting seconds or frames).'
          }
        },
        {
          id: 'gdev_2_4',
          title: 'ScriptableObjects for Data',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'ScriptableObjects store shared data as assets outside of scenes, reducing memory footprint.',
          codeSnippet: `[CreateAssetMenu(fileName = "NewItem", menuName = "Inventory/Item")]\npublic class ItemData : ScriptableObject {\n    public string itemName;\n    public Sprite icon;\n    public int maxStack;\n}`,
          drillQuestion: {
            id: 'gdev_2_4_q',
            prompt: 'Why are ScriptableObjects better than GameObjects for storing item stats?',
            options: ['They run faster in Update', 'They are saved as assets, avoiding data duplication across instances', 'They can render 3D models', 'They bypass the Garbage Collector'],
            correctIndex: 1,
            explanation: 'ScriptableObjects live in the project assets, so 100 goblins can reference a single ScriptableObject for stats instead of copying the data 100 times.'
          }
        },
        {
          id: 'gdev_2_5',
          title: 'Object Pooling',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Object pooling prevents frequent Instantiate and Destroy calls, eliminating gameplay stutter from garbage collection.',
          drillQuestion: {
            id: 'gdev_2_5_q',
            prompt: 'What performance issue does Object Pooling primarily solve?',
            options: ['GPU memory limits', 'Network latency', 'CPU spikes from Garbage Collection (GC)', 'Physics engine collision bugs'],
            correctIndex: 2,
            explanation: 'Frequent instantiation and destruction allocates memory rapidly, triggering the Garbage Collector which causes noticeable frame drops.'
          }
        },
        {
          id: 'gdev_2_6',
          title: 'Unity New Input System',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'The New Input System abstracts raw inputs into logical actions, making cross-platform controls easy.',
          drillQuestion: {
            id: 'gdev_2_6_q',
            prompt: 'What concept replaces raw hardcoded button checks in the New Input System?',
            options: ['Input Actions', 'KeyBindings', 'Hardware Maps', 'PollEvents'],
            correctIndex: 0,
            explanation: 'Input Actions map hardware inputs (like Spacebar or Gamepad A) to logical actions (like "Jump").'
          }
        }
      ]
    },
    {
      id: 'gdev_mod_3',
      code: '8.3',
title: '3D Mathematics, Physics & Shaders',
      description: 'Understand vectors, quaternions, rigidbodies, and the math behind rendering.',
      lessons: [
        {
          id: 'gdev_3_1',
          title: 'Vector Math for Gameplay',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Dot products find angles and visibility, while cross products find orthogonal axes like normals.',
          codeSnippet: `// Check if enemy is in front of player\nVector3 dirToEnemy = (enemy.position - player.position).normalized;\nfloat dot = Vector3.Dot(player.forward, dirToEnemy);\nif (dot > 0.5f) { // Within ~60 degree cone }`,
          drillQuestion: {
            id: 'gdev_3_1_q',
            prompt: 'If the Dot Product of two normalized direction vectors is 1, what does this mean?',
            options: ['They point in exactly opposite directions', 'They are perpendicular', 'They point in exactly the same direction', 'They are parallel but unnormalized'],
            correctIndex: 2,
            explanation: 'A dot product of 1 between normalized vectors means the angle between them is 0 degrees; they point the same way.'
          }
        },
        {
          id: 'gdev_3_2',
          title: 'Quaternions & Rotations',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Quaternions represent 3D rotations mathematically to avoid gimbal lock.',
          drillQuestion: {
            id: 'gdev_3_2_q',
            prompt: 'Why do modern game engines use Quaternions instead of Euler angles for internal rotations?',
            options: ['They are easier to read', 'They prevent Gimbal Lock', 'They compute 2D rotation faster', 'They require less memory'],
            correctIndex: 1,
            explanation: 'Euler angles can suffer from Gimbal Lock (losing a degree of freedom when axes align). Quaternions solve this mathematically.'
          }
        },
        {
          id: 'gdev_3_3',
          title: 'Physics Integration (FixedUpdate)',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Physics calculations must occur in fixed, reliable time steps independent of visual frame rate.',
          drillQuestion: {
            id: 'gdev_3_3_q',
            prompt: 'Where should you apply forces to a Rigidbody in Unity?',
            options: ['Update()', 'LateUpdate()', 'FixedUpdate()', 'Awake()'],
            correctIndex: 2,
            explanation: 'FixedUpdate() runs synchronously with the physics engine step, ensuring deterministic and stable physics.'
          }
        },
        {
          id: 'gdev_3_4',
          title: 'Shader Basics (GLSL / HLSL)',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Vertex shaders move vertices on screen, while fragment/pixel shaders determine the color of the rendered pixels.',
          codeSnippet: `void fragment() {\n    // Simple Godot spatial shader\n    vec3 color = texture(my_texture, UV).rgb;\n    ALBEDO = color * vec3(1.0, 0.0, 0.0); // Tint red\n}`,
          drillQuestion: {
            id: 'gdev_3_4_q',
            prompt: 'In a standard rendering pipeline, which shader runs first?',
            options: ['Fragment Shader', 'Vertex Shader', 'Compute Shader', 'Geometry Shader'],
            correctIndex: 1,
            explanation: 'The Vertex Shader processes the 3D model geometry points first, passing data to the Fragment/Pixel shader to color the spaces between them.'
          }
        },
        {
          id: 'gdev_3_5',
          title: 'Raycasting & Spatial Queries',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Raycasts shoot an invisible line through the physics world to detect collisions, useful for shooting, line-of-sight, and ground checks.',
          drillQuestion: {
            id: 'gdev_3_5_q',
            prompt: 'What is a common use-case for a Raycast in a First-Person Shooter?',
            options: ['Rendering shadows', 'Calculating GUI scale', 'Hitscan weapon firing', 'Network synchronization'],
            correctIndex: 2,
            explanation: 'Hitscan weapons like snipers instantly check if a bullet hits a target by casting a ray from the camera forward.'
          }
        }
      ]
    },
    {
      id: 'gdev_mod_4',
      code: '8.4',
title: 'Pixel Art, Sprite Animation & Visual Design',
      description: 'Create compelling 2D assets, manage palettes, and animate character sprites.',
      lessons: [
        {
          id: 'gdev_4_1',
          title: 'Color Palettes & Readability',
          duration: '20 min',
          durationSeconds: 1200,
          completed: false,
          keyTakeaway: 'Limited palettes force cohesion, while contrast ensures gameplay elements are easily readable against backgrounds.',
          drillQuestion: {
            id: 'gdev_4_1_q',
            prompt: 'What is "Hue Shifting" in pixel art?',
            options: ['Changing the color depth to 8-bit', 'Shifting the hue towards cool/warm colors as value changes', 'Making everything neon', 'Animating palette swaps rapidly'],
            correctIndex: 1,
            explanation: 'Hue shifting changes the actual hue (e.g., from red to purple-red in shadows) rather than just making the red darker, resulting in richer art.'
          }
        },
        {
          id: 'gdev_4_2',
          title: 'Sprite Sheets & Texture Atlases',
          duration: '20 min',
          durationSeconds: 1200,
          completed: false,
          keyTakeaway: 'Packing multiple sprites into a single texture atlas minimizes GPU draw calls.',
          drillQuestion: {
            id: 'gdev_4_2_q',
            prompt: 'Why use a Sprite Sheet instead of individual image files for animations?',
            options: ['Reduces the file size of the game significantly', 'Reduces GPU draw calls and overhead', 'Makes the game 3D compatible', 'Simplifies collision detection'],
            correctIndex: 1,
            explanation: 'Loading one large image (Sprite Sheet) requires only one draw call, dramatically improving rendering performance.'
          }
        },
        {
          id: 'gdev_4_3',
          title: '12 Principles of Animation in Games',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Anticipation and Follow-through are critical for giving weight and punchiness to game attacks and jumps.',
          drillQuestion: {
            id: 'gdev_4_3_q',
            prompt: 'Which animation principle helps players react to an enemy attack before it hits?',
            options: ['Squash and Stretch', 'Exaggeration', 'Anticipation', 'Staging'],
            correctIndex: 2,
            explanation: 'Anticipation provides a visual wind-up (like drawing a sword back) signaling to the player that an attack is coming.'
          }
        },
        {
          id: 'gdev_4_4',
          title: 'Tilemaps & Level Assembly',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Tilemaps allow rapid level creation using grid-based reusable tiles, often supporting autotiling logic.',
          drillQuestion: {
            id: 'gdev_4_4_q',
            prompt: 'What is "Autotiling"?',
            options: ['Generating levels procedurally', 'Automatically selecting the correct corner/edge tile based on neighbor tiles', 'Animating tiles automatically', 'Auto-saving tilemaps'],
            correctIndex: 1,
            explanation: 'Autotiling evaluates a tile\'s neighbors and automatically applies the correct sprite (like corners or straight walls) to speed up design.'
          }
        },
        {
          id: 'gdev_4_5',
          title: 'Post-Processing for 2D',
          duration: '20 min',
          durationSeconds: 1200,
          completed: false,
          keyTakeaway: 'Bloom, color grading, and CRT filters can dramatically modernize and stylize flat 2D pixel art.',
          drillQuestion: {
            id: 'gdev_4_5_q',
            prompt: 'Which post-processing effect creates a glowing halo around bright pixels?',
            options: ['Vignette', 'Chromatic Aberration', 'Bloom', 'Depth of Field'],
            correctIndex: 2,
            explanation: 'Bloom bleeds bright light into surrounding pixels, simulating real-world camera lens glow.'
          }
        }
      ]
    },
    {
      id: 'gdev_mod_5',
      code: '8.5',
title: 'Game Design Theory, UX & Player Psychology',
      description: 'Craft engaging core loops, balanced mechanics, and intuitive user experiences.',
      lessons: [
        {
          id: 'gdev_5_1',
          title: 'The Core Gameplay Loop',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'The core loop is the central sequence of actions a player repeats (e.g., Fight -> Loot -> Upgrade).',
          drillQuestion: {
            id: 'gdev_5_1_q',
            prompt: 'What is the primary purpose of a Core Gameplay Loop?',
            options: ['To add microtransactions', 'To create a satisfying, repeatable cycle that drives engagement', 'To define network protocols', 'To optimize game rendering'],
            correctIndex: 1,
            explanation: 'A strong core loop ensures the fundamental minute-to-minute gameplay is fun and inherently motivates the player to keep playing.'
          }
        },
        {
          id: 'gdev_5_2',
          title: 'Flow State & Pacing',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Csikszentmihalyi\'s Flow requires balancing player skill with game challenge to prevent boredom or anxiety.',
          drillQuestion: {
            id: 'gdev_5_2_q',
            prompt: 'If a game\'s challenge significantly exceeds a player\'s skill level, what state do they enter according to Flow theory?',
            options: ['Boredom', 'Apathy', 'Flow', 'Anxiety/Frustration'],
            correctIndex: 3,
            explanation: 'When challenge outpaces skill, players feel anxious and frustrated, often leading to them quitting.'
          }
        },
        {
          id: 'gdev_5_3',
          title: 'Game Balance & Spreadsheet Math',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Balancing involves mathematical models (like DPS calculations) and playtesting to ensure no single strategy dominates.',
          drillQuestion: {
            id: 'gdev_5_3_q',
            prompt: 'What does "DPS" stand for when balancing weapons?',
            options: ['Data Per Second', 'Damage Per Second', 'Direct Player Statistics', 'Distance Per Step'],
            correctIndex: 1,
            explanation: 'Damage Per Second normalizes weapon damage over time, allowing designers to compare a slow, high-damage hammer to a fast, low-damage dagger.'
          }
        },
        {
          id: 'gdev_5_4',
          title: 'UX/UI for Games',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Game UI should communicate critical info (health, ammo) intuitively without distracting from gameplay.',
          drillQuestion: {
            id: 'gdev_5_4_q',
            prompt: 'What is "Diegetic UI" in game design?',
            options: ['UI that lives strictly in menus', 'UI integrated into the game world itself (like a health meter on a character\'s backpack)', 'UI that flashes red', 'UI optimized for mobile'],
            correctIndex: 1,
            explanation: 'Diegetic UI exists within the narrative space of the game, increasing immersion (e.g., Dead Space health bars).'
          }
        },
        {
          id: 'gdev_5_5',
          title: 'Onboarding & Tutorials',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'The best tutorials teach mechanics through level design and safe experimentation rather than walls of text.',
          drillQuestion: {
            id: 'gdev_5_5_q',
            prompt: 'Which tutorial approach is generally considered superior in game design?',
            options: ['A 10-page text manual', 'Pop-up windows pausing the game frequently', 'Teaching mechanics organically through level design', 'A separate 30-minute tutorial level'],
            correctIndex: 2,
            explanation: 'Organic teaching (like forcing a player to jump over a pit to proceed) teaches mechanics through play without breaking immersion.'
          }
        }
      ]
    },
    {
      id: 'gdev_mod_6',
      code: '8.6',
title: 'Multiplayer Networking & Backend',
      description: 'Explore client-server architecture, netcode, and backend services for games.',
      lessons: [
        {
          id: 'gdev_6_1',
          title: 'Client-Server Architecture',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Authoritative servers prevent cheating by validating all client inputs before updating the game state.',
          drillQuestion: {
            id: 'gdev_6_1_q',
            prompt: 'In an Authoritative Server architecture, who makes the final decision on whether a bullet hit a target?',
            options: ['The shooter\'s client', 'The victim\'s client', 'The Server', 'The local physics engine'],
            correctIndex: 2,
            explanation: 'The Server holds the ultimate truth to prevent hacked clients from falsely claiming they hit a target.'
          }
        },
        {
          id: 'gdev_6_2',
          title: 'Client Prediction & Interpolation',
          duration: '35 min',
          durationSeconds: 2100,
          completed: false,
          keyTakeaway: 'Prediction hides latency by moving the local player immediately, correcting if the server disagrees.',
          drillQuestion: {
            id: 'gdev_6_2_q',
            prompt: 'Why do multiplayer games use Client Prediction?',
            options: ['To reduce server costs', 'To hide network latency and make inputs feel instantly responsive', 'To encrypt data', 'To load levels faster'],
            correctIndex: 1,
            explanation: 'Without prediction, players would press "forward" and wait for a round-trip server ping before their character moved on screen.'
          }
        },
        {
          id: 'gdev_6_3',
          title: 'RPCs & State Synchronization',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Remote Procedure Calls (RPCs) trigger functions across the network, while State Sync continually updates variable values.',
          drillQuestion: {
            id: 'gdev_6_3_q',
            prompt: 'Which tool is best for sending a one-off event like "Play Explosion Effect"?',
            options: ['State Synchronization', 'RPC (Remote Procedure Call)', 'Database Query', 'HTTP GET'],
            correctIndex: 1,
            explanation: 'RPCs are perfect for transient, one-time events, whereas State Sync is for continuous data like player positions.'
          }
        },
        {
          id: 'gdev_6_4',
          title: 'Matchmaking & Lobbies',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Matchmaking services group players by skill (MMR) and latency, creating a session before connecting to a game server.',
          drillQuestion: {
            id: 'gdev_6_4_q',
            prompt: 'What does MMR stand for in matchmaking?',
            options: ['Massive Multiplayer Rendering', 'Matchmaking Rating', 'Minimum Match Requirement', 'Memory Management Routine'],
            correctIndex: 1,
            explanation: 'Matchmaking Rating (MMR) represents a player\'s skill level to ensure fair and balanced games.'
          }
        },
        {
          id: 'gdev_6_5',
          title: 'Backend Services (BaaS)',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Backend-as-a-Service platforms (PlayFab, Nakama, Firebase) handle auth, leaderboards, and saving player data securely.',
          drillQuestion: {
            id: 'gdev_6_5_q',
            prompt: 'Why use a BaaS for player save data instead of local device storage?',
            options: ['It improves framerates', 'It allows cross-progression and prevents easy local save editing', 'It generates 3D models', 'It eliminates latency'],
            correctIndex: 1,
            explanation: 'Cloud saves via a BaaS prevent players from modifying local text files to cheat, and allows them to play on multiple devices.'
          }
        }
      ]
    },
    {
      id: 'gdev_mod_7',
      code: '8.7',
title: 'Mobile Game Monetization & Publishing',
      description: 'Learn the business of games: ad integration, IAPs, analytics, and store submission.',
      lessons: [
        {
          id: 'gdev_7_1',
          title: 'F2P & In-App Purchases (IAP)',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Free-to-play games rely on converting a small percentage of players (whales) via cosmetics or convenience IAPs.',
          drillQuestion: {
            id: 'gdev_7_1_q',
            prompt: 'What is a "Consumable" In-App Purchase?',
            options: ['Unlocking the full game', 'Removing ads forever', 'Buying 100 Gems', 'A cosmetic skin'],
            correctIndex: 2,
            explanation: 'Consumables (like gems or gold) can be used up and bought again, unlike non-consumables (like removing ads).'
          }
        },
        {
          id: 'gdev_7_2',
          title: 'Ad Monetization (Rewarded Video)',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Rewarded video ads offer the highest eCPM and user satisfaction because they are opt-in.',
          drillQuestion: {
            id: 'gdev_7_2_q',
            prompt: 'Why are Rewarded Ads preferred over Interstitial (pop-up) ads?',
            options: ['They load faster', 'They are cheaper to implement', 'Players choose to watch them for a reward, improving retention', 'They do not require internet'],
            correctIndex: 2,
            explanation: 'Opt-in rewarded ads respect the user\'s choice, generally resulting in better reviews and higher engagement than forced pop-ups.'
          }
        },
        {
          id: 'gdev_7_3',
          title: 'Key Metrics (LTV, CAC, Retention)',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'A mobile game is profitable if LTV (Lifetime Value) exceeds CAC (Customer Acquisition Cost).',
          drillQuestion: {
            id: 'gdev_7_3_q',
            prompt: 'If CAC is $2.00 and LTV is $1.50, what should you do?',
            options: ['Increase marketing spend', 'Stop marketing and improve the game\'s monetization or retention', 'Add more servers', 'Change the game engine'],
            correctIndex: 1,
            explanation: 'You are losing 50 cents per user. You must improve the game to increase LTV or find cheaper users before scaling marketing.'
          }
        },
        {
          id: 'gdev_7_4',
          title: 'A/B Testing & Analytics',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Data analytics track where players quit (churn), while A/B testing scientifically validates design changes.',
          drillQuestion: {
            id: 'gdev_7_4_q',
            prompt: 'What is a "funnel" in game analytics?',
            options: ['A physics collision shape', 'A 3D rendering pipeline', 'A series of steps tracked to see where users drop off (e.g., Tutorial steps)', 'A marketing budget allocation'],
            correctIndex: 2,
            explanation: 'Funnels track linear progression. If 100 people start the tutorial and only 40 finish step 3, you know step 3 needs fixing.'
          }
        },
        {
          id: 'gdev_7_5',
          title: 'App Store Optimization (ASO)',
          duration: '20 min',
          durationSeconds: 1200,
          completed: false,
          keyTakeaway: 'ASO is SEO for app stores: optimizing icons, screenshots, and keywords to drive organic downloads.',
          drillQuestion: {
            id: 'gdev_7_5_q',
            prompt: 'Which visual element is statistically most critical for ASO conversion rates?',
            options: ['The privacy policy', 'The developer name', 'The Game Icon', 'The internal bundle ID'],
            correctIndex: 2,
            explanation: 'The game icon is the first impression. A highly legible, attractive icon vastly increases click-through rates on the store.'
          }
        }
      ]
    },
    {
      id: 'gdev_mod_8',
      code: '8.8',
title: 'Narrative Design & World Building',
      description: 'Integrate storytelling seamlessly into mechanics, environments, and dialogue.',
      lessons: [
        {
          id: 'gdev_8_1',
          title: 'Ludonarrative Dissonance',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Dissonance occurs when a game\'s gameplay mechanics conflict with its story (e.g., a pacifist hero murdering hundreds in gameplay).',
          drillQuestion: {
            id: 'gdev_8_1_q',
            prompt: 'How do you avoid Ludonarrative Dissonance?',
            options: ['Remove gameplay entirely', 'Ensure the mechanics and the story themes support each other', 'Use more cutscenes', 'Only make puzzle games'],
            correctIndex: 1,
            explanation: 'Harmonizing mechanics and narrative (Ludonarrative Resonance) means the gameplay actions reinforce the story\'s themes.'
          }
        },
        {
          id: 'gdev_8_2',
          title: 'Environmental Storytelling',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'The physical space (props, lighting, blood stains) can tell a story without a single line of dialogue.',
          drillQuestion: {
            id: 'gdev_8_2_q',
            prompt: 'Which of these is an example of environmental storytelling?',
            options: ['An audio log playing a voice', 'A pop-up text box', 'Two skeletons clutching each other in a locked room', 'A narrator speaking'],
            correctIndex: 2,
            explanation: 'Skeletons in a locked room let the player deduce what happened visually, engaging their imagination.'
          }
        },
        {
          id: 'gdev_8_3',
          title: 'Branching Dialogue Systems',
          duration: '30 min',
          durationSeconds: 1800,
          completed: false,
          keyTakeaway: 'Dialogue trees often use variables and state flags to track player choices and branch accordingly.',
          drillQuestion: {
            id: 'gdev_8_3_q',
            prompt: 'What is the "Illusion of Choice" in narrative design?',
            options: ['When dialogue options are invisible', 'When multiple dialogue options lead to the exact same outcome', 'When choices crash the game', 'When a game has no story'],
            correctIndex: 1,
            explanation: 'To save on development scope, designers often offer choices that "flavor" the moment but merge back into the main storyline.'
          }
        },
        {
          id: 'gdev_8_4',
          title: 'Character Arcs & Lore Bibles',
          duration: '20 min',
          durationSeconds: 1200,
          completed: false,
          keyTakeaway: 'A lore bible maintains consistency across a game world, grounding characters in a believable reality.',
          drillQuestion: {
            id: 'gdev_8_4_q',
            prompt: 'What is the primary function of a Lore Bible during production?',
            options: ['To sell to fans later', 'To act as a single source of truth for all writers and artists to maintain consistency', 'To generate procedural code', 'To pitch to publishers'],
            correctIndex: 1,
            explanation: 'It ensures that if artist A draws a faction symbol, and writer B writes their history, they both align with the established canon.'
          }
        },
        {
          id: 'gdev_8_5',
          title: 'Pacing Narrative Beats',
          duration: '25 min',
          durationSeconds: 1500,
          completed: false,
          keyTakeaway: 'Narrative must breathe; follow high-intensity action with quiet exposition to prevent player fatigue.',
          drillQuestion: {
            id: 'gdev_8_5_q',
            prompt: 'Why should intense boss fights be followed by "down time"?',
            options: ['To let the GPU cool down', 'To prevent emotional fatigue and allow the narrative stakes to process', 'To force players to watch ads', 'To make the game artificially longer'],
            correctIndex: 1,
            explanation: 'Constant intensity is numbing. Pacing involves a roller-coaster of tension and release to make dramatic moments impactful.'
          }
        }
      ]
    }
  ]
};


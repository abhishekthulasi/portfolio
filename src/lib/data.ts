export interface Project {
    id: string;
    title: string;
    tagline: string;
    problem: string;
    solution: string;
    tech: string[];
    tier: 'Systems' | 'Scale' | 'Tools';
    year: string;
    links?: { label: string; url: string, type?: 'github' | 'external' }[];
}

export interface ADR {
    id: string;
    title: string;
    date: string;
    status: string;
    tags: string[];
    context: string;
    decision: string;
    rationale: string[];
}

export const projects: Project[] = [
    // --- TIER 1: SYSTEMS (The Architect) ---
    {
        id: 'quantum-arcadia-infra',
        title: 'Quantum Arcadia Infrastructure',
        tagline: 'Multi-Platform Orchestration & Delivery Engine.',
        problem: 'Delivering and scaling a massive multi-platform application required highly scalable backend infrastructure, memory-safe binary patching to minimize bandwidth, and seamless cross-platform identity management.',
        solution: 'Architected a Golang modular monolith orchestrated via Docker to manage highly concurrent state. Built a custom delivery engine in Rust utilizing BLAKE3 hashing and binary delta-patching. Secured the entire ecosystem with a passwordless FIDO2/WebAuthn edge-deployed portal using Svelte and Cloudflare.',
        tech: ['Rust', 'Golang', 'Flutter', 'Docker', 'Svelte', 'FIDO2/WebAuthn', 'Unity'],
        tier: 'Systems',
        year: '2026',
        links: [
            { label: 'Architecture Log', url: '/architecture', type: 'external' },
            { label: 'View Platform', url: 'https://www.quantumarcadia.com', type: 'external' },
        ]
    },
    {
        id: 'localsync',
        title: 'LocalSync',
        tagline: 'Cloudless Sync. Your Storage. Your Limits.',
        problem: 'Cloud storage offers convenience at the cost of recurring fees, internet dependency, and privacy trade-offs. It leaves local hardware underutilized.',
        solution: 'A local-first synchronization engine that bridges devices directly over Wi-Fi. Built with Rust for minimal resource footprint in the backend and Flutter for a ubiquitous frontend. Zero latency. Zero monthly fees.',
        tech: ['Local-First', 'Rust', 'Flutter'],
        tier: 'Systems',
        year: '2026',
        links: [{ label: 'View Source', url: 'https://github.com/abhishekthulasi/localsync', type: 'github' }]
    },
    {
        id: 'generic-api',
        title: 'Enterprise Polymorphic API',
        tagline: 'Write Once, Handle Anything.',
        problem: 'Salesforce REST APIs are notoriously rigid. Building custom endpoints for every new data object creates technical debt and repetitive maintenance.',
        solution: 'Engineered a polymorphic architecture that accepts dynamic object types along with multiple children. It uses dependency injection (Apex) to allow custom logic injection before/after upsertion without altering the core API contract. Abstracting the complexity of the platform.',
        tech: ['Design Patterns', 'Apex'],
        tier: 'Systems',
        year: '2025',
        links: [{ label: 'View Source', url: 'https://github.com/abhishekthulasi/salesforce-generic-rest-api', type: 'github' }, { label: 'View Demo', url: 'https://www.linkedin.com/posts/abhishek-thulasi-860656258_salesforce-apex-salesforcedeveloper-activity-7381644575653756928-Gl2O', type: 'external' }]
    },
    {
        id: 'chat-architecture',
        title: 'Chat Web-App From Scratch',
        tagline: 'Stripping away the abstractions.',
        problem: 'Modern chat libraries hide the complexity of WebSocket management. I wanted to understand the raw engineering costs of real-time concurrency.',
        solution: 'A full-duplex chat system built without "magic" libraries. The backend uses Golang goroutines for massive concurrency. The frontend uses a custom synchronization protocol between SurrealDB and client-side IndexedDB for a true offline-first architecture.',
        tech: ['Golang', 'Svelte', 'SurrealDB'],
        tier: 'Systems',
        year: '2024',
        links: [{ label: 'View Source', url: 'https://github.com/abhishekthulasi/chat-backend', type: 'github' }]
    },

    // --- TIER 2: SCALE (The Proven Engineer) ---
    {
        id: 'pidilite',
        title: 'Enterprise Contractor App',
        tagline: 'Engineering for 1 Million Users.',
        problem: 'Managing a fragmented workforce of contractors across a massive geographic area is operationally chaotic.',
        solution: 'Helped develop the mobile ecosystem for India\'s largest adhesive manufacturer. The system handles daily operations for 1M+ users, focusing on extreme fault tolerance.',
        tech: ['Flutter Mobile', 'CI/CD'],
        tier: 'Scale',
        year: '2024',
        links: []
    },
    {
        id: 'scan-to-sf',
        title: 'OCR Automation Engine',
        tagline: 'Zero Downtime Migration.',
        problem: 'A sudden deprecation of Salesforce\'s native scanning tool threatened to disrupt the lead-gen workflow of hundreds of sales reps.',
        solution: 'Built a drop-in replacement using Flutter, OCR and Google\'s Gemini API. Leveraged Salesforce to handle complex relationship mapping in a single transaction. Shipped in <30 days; reduced manual entry time by 90%.',
        tech: ['Gemini & OCR', 'Flutter', 'Salesforce'],
        tier: 'Scale',
        year: '2024',
        links: []
    },
    {
        id: 'bengaluru-dreamin',
        title: 'Bengaluru Dreamin Quest',
        tagline: 'Gamifying Human Connection.',
        problem: 'Conference engagement is usually passive. We needed a system to incentivize 500+ participants to actually connect with each other.',
        solution: 'Developed a QR-based scoring engine. Every interaction (booth visit, connection, lecture) translated into points and real rewards in real-time. The system successfully became the primary driver for participant interaction.',
        tech: ['Experience Cloud', 'Apex', 'LWC'],
        tier: 'Scale',
        year: '2024',
        links: [{ label: 'View Website', url: 'https://bengalurudreamin.com/about-us/', type: 'external' }]
    },
    {
        id: 'muledreamin',
        title: 'MuleDreamin App',
        tagline: 'Real-Time Event Orchestration.',
        problem: 'Conference attendees often miss sessions due to static schedules and lack of real-time updates.',
        solution: 'A Flutter-based event companion backed by Firebase. Delivers push-based updates on lecture status and schedule changes instantly to all devices.',
        tech: ['Flutter', 'Firebase', 'Real-time DB'],
        tier: 'Scale',
        year: '2023',
        links: []
    },

    // --- TIER 3: TOOLS (The Problem Solver) ---
    {
        id: 'prime-accel',
        title: 'Ad Accelerator',
        tagline: 'Automating the Annoyance.',
        problem: 'I was bored and wanted to solve the minor annoyance of unskippable ads disrupting the viewing experience.',
        solution: 'Regulatory guidelines require ads to be distinguishable, forcing platforms to render predictable UI elements—specifically an "Ad" label and timer. I built a Chrome extension that detects these specific DOM patterns and fast-forwards the playback rate.',
        tech: ['Chrome Extension', 'JavaScript'],
        tier: 'Tools',
        year: '2025',
        links: [{ label: 'View Source', url: 'https://github.com/abhishekthulasi/prime-video-ad-accelerator', type: 'github' }]
    },
    {
        id: 'lwc-combobox',
        title: 'Advanced LWC Combobox',
        tagline: 'Fixing Standard UI Limitations.',
        problem: 'The standard Salesforce Lightning combobox lacked search and multi-select, forcing developers into hacky workarounds.',
        solution: 'An open-source, reusable LWC component that fills the gap providing a better user experience.',
        tech: ['LWC'],
        tier: 'Tools',
        year: '2023',
        links: [{ label: 'View Source', url: 'https://github.com/abhishekthulasi/advanced-lightning-combobox', type: 'github' }, { label: 'View Demo', url: 'https://www.linkedin.com/posts/abhishek-thulasi-860656258_salesforcedeveloper-salesforcelightning-lwc-activity-7142375999190589440-a4VM', type: 'external' }]
    }
];

export const adrs: ADR[] = [
    {
        id: "adr-001",
        title: "ADR 001: Selection of In-Memory Data Store (Valkey vs. Redis)", //
        date: "March 2026", //
        status: "Accepted", //
        tags: ["Docker", "Valkey", "Cost-Optimization"],
        context: "For the Quantum Arcadia backend, we require a fast, in-memory data store to handle temporary OTP codes, rate-limiting, and ephemeral game lobby party management.", //
        decision: "Use Valkey (deployed via Docker containers) as our primary in-memory data store instead of Redis.", //
        rationale: [
            "Valkey provides an approximate 33% reduction in caching infrastructure costs while maintaining the exact same performance and API signature.", //
            "Because we are a bootstrapped startup, optimizing our monthly cloud burn rate is a top priority.", //
            "Valkey is a complete drop-in replacement, allowing the Golang backend to use standard Redis client libraries with zero code modification." //
        ]
    },
    {
        id: "adr-002",
        title: "ADR 002: Selection of Unity Dependency Injection Framework (VContainer vs. Zenject)", //
        date: "March 2026", //
        status: "Accepted", //
        tags: ["Unity", "Dependency Injection", "Performance"],
        context: "We must manage complex global systems across a massive number of scenes and downloadable city modules. Heavy frameworks cause tight coupling and performance degradation on mobile VR hardware.", //
        decision: "Use VContainer strictly applied to the 'Invisible Layer' (Global Architecture/Systems) and not to the 'Visible Layer' (Gameplay/Content).", //
        rationale: [
            "Performance: VContainer avoids reflection overhead, resolving dependencies 5–10x faster than Zenject with very little memory allocation.", //
            "Maintainability: Utilizing the Composition Root model (LifetimeScope) allows us to explicitly wire up the core architecture in one place.", //
            "Separation of Concerns: Prevents DI from infecting gameplay scripts, maintaining Unity's fast, prefab-based workflow." //
        ]
    },
    {
        id: "adr-003",
        title: "ADR 003: Selection of Game Launcher Tech Stack (Rust + Flutter)", //
        date: "March 2026", //
        status: "Accepted", //
        tags: ["Rust", "Flutter", "Cross-Platform"],
        context: "Quantum Arcadia requires a standalone cross-platform Game Launcher that handles authentication handoffs, social features, and high-speed binary delta patching to avoid redownloading 20GB game files.", //
        decision: "Build using a Flutter Frontend connected to a Rust Core via flutter_rust_bridge.", //
        rationale: [
            "Ubiquitous Frontend: Flutter allows us to build the UI once and deploy to Windows and Android natively.", //
            "Systems-Level Performance: Rust's zero-cost abstractions and lack of garbage collection ensure the patching engine (BLAKE3, xdelta3) runs at maximum disk I/O speed.", //
            "Platform Isolation: Allows us to utilize native intents on Android and avoid bloating the APK with unnecessary binaries." //
        ]
    },
    {
        id: "adr-004",
        title: "ADR 004: Selection of Web Portal Tech Stack (Svelte 5 + Cloudflare)", //
        date: "March 2026", //
        status: "Accepted", //
        tags: ["Svelte", "Cloudflare", "Cost-Optimization"],
        context: "We need a web portal for marketing and identity (FIDO2/WebAuthn). The current Wix solution costs ~$450/month and lacks the programmatic flexibility required for custom cryptographic auth flows.", //
        decision: "Migrate to Svelte 5 deployed on Cloudflare Pages utilizing adapter-cloudflare.", //
        rationale: [
            "Cost Efficiency: Cloudflare Pages provides unlimited free bandwidth and free SSL, eliminating the $450/month overhead.", //
            "Performance: Svelte compiles to highly optimized vanilla HTML/CSS/JS, providing near-instant load times.", //
            "Edge Computing: We can securely proxy /api/* requests directly to our AWS Golang backend via Cloudflare Workers with zero cold starts." //
        ]
    },
    {
        id: "adr-005",
        title: "ADR 005: Selection of Primary Database (AWS PostgreSQL)", //
        date: "March 2026", //
        status: "Accepted", //
        tags: ["AWS", "PostgreSQL", "Database"],
        context: "The backend requires a persistent database to store relational identity data alongside highly dynamic, schema-less game data (player inventory). The backend compute services are hosted in AWS.", //
        decision: "Use Amazon Aurora/RDS PostgreSQL deployed within our AWS VPC.", //
        rationale: [
            "Egress Cost Mitigation: Keeping the database inside the same AWS VPC as our Golang compute instances ensures zero-cost internal data transfer.", //
            "Hybrid Data Structures: PostgreSQL handles relational security logic flawlessly while its JSONB columns allow us to store deeply nested, dynamic game objects without rigid migrations." //
        ]
    },
    {
        id: "adr-006",
        title: "ADR 006: Selection of CI/CD Build Orchestration (Jenkins Build Farm)", //
        date: "March 2026", //
        status: "Accepted", //
        tags: ["CI/CD", "Jenkins", "Automation"],
        context: "Scaling the development team requires strict pipeline automation to prevent bad assets from entering the main branch. We need a feedback loop of <10 minutes for Pull Request validation.", //
        decision: "Orchestrate a self-hosted Jenkins Pipeline utilizing a local Build Farm paired with a Unity Accelerator on the local network.", //
        rationale: [
            "Guaranteed Feedback Loops: Jenkins can instantly reject PRs that violate our Golden Rules (e.g., Triangles > 12,000) using custom build scripts.", //
            "Cost vs. Scale: Utilizing local high-CPU machines bypasses the per-minute billing of cloud build providers.", //
            "Unity Accelerator: Placing an Accelerator on the same network caches Asset Imports, cutting checkout-to-build times exponentially." //
        ]
    },
    {
        id: "adr-007",
        title: "ADR 007: Selection of Backend Architecture (Golang Modular Monolith)", //
        date: "March 2026", //
        status: "Accepted", //
        tags: ["Golang", "AWS", "WebSockets"],
        context: "The backend acts as the 'Director', handling both stateless HTTP traffic and highly stateful, long-lived connections. We need an architecture that minimizes latency and prevents operational bloat.", //
        decision: "Build a Golang Modular Monolith deployed via AWS App Runner (or Fargate).", //
        rationale: [
            "Tracer Bullet Philosophy: A single repository drastically accelerates iteration speed for a startup team, avoiding Service Discovery nightmares.", //
            "Shared Memory Performance: Validating a token via the Identity Service performs in microseconds using shared memory, avoiding the network latency of microservices.", //
            "Go's lightweight goroutines natively handle massive WebSocket concurrency without needing a specialized language like Erlang." //
        ]
    }
];
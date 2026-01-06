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

export const projects: Project[] = [
    // --- TIER 1: SYSTEMS (The Architect) ---
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
        id: 'gamedev',
        title: 'Quantum Arcadia',
        tagline: 'VR with Real-World Consequences.',
        problem: 'Virtual Reality often isolates users from the real world, creating a "walled garden" experience that lacks real-world consequence.',
        solution: 'Designing the architecture for a "Reality-First" VR MMO. We\'re building a bridge where in-game actions—like entering a virtual hotel—trigger real-world API calls to hotel booking systems and services. VR as an interface, not an escape.',
        tech: ['Unity', 'C#', 'System Design'],
        tier: 'Systems',
        year: '2026',
        links: [{ label: 'View Website', url: 'https://www.quantumarcadia.com', type: 'external' }]
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
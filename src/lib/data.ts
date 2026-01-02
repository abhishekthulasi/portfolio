export interface Project {
    id: string;
    title: string;
    tagline: string;
    problem: string;
    solution: string;
    tech: string[];
    tier: 'Systems' | 'Scale' | 'Tools';
    links?: { label: string; url: string }[];
}

export const projects: Project[] = [
    // --- TIER 1: SYSTEMS (The Architect) ---
    {
        id: 'localsync',
        title: 'LocalSync',
        tagline: 'Your Storage. Your Limits.',
        problem: 'Cloud storage offers convenience at the cost of recurring fees, internet dependency, and privacy trade-offs. It leaves local hardware underutilized.',
        solution: 'A local-first synchronization engine that bridges devices directly over Wi-Fi. I utilized Rust for backend and Flutter for frontend, ensuring all platform compatibility, native speed and indendependent of internet.',
        tech: ['Cross Platform', 'Rust', 'Flutter'],
        tier: 'Systems',
        links: [{ label: 'View Code', url: 'https://github.com/abhishekthulasi/localsync' }]
    },
    {
        id: 'gamedev',
        title: 'Quantum Arcadia',
        tagline: 'Partner & CTO',
        problem: 'VR often isolates users from the real world instead of enhancing it.',
        solution: 'Building a reality where users explore real cities with friends. We are creating a bridge where actions in the virtual world—like visiting a hotel lobby—connect to real-world services and booking systems.',
        tech: ['Unity', 'C#', 'Technical Leadership'],
        tier: 'Systems',
        links: [{ label: 'View Website', url: 'https://www.quantumarcadia.com' }]
        // links: [] // Add link if public
    },
    {
        id: 'generic-api',
        title: 'Enterprise Polymorphic API',
        tagline: 'Abstracting Complexity.',
        problem: 'Standard Salesforce REST APIs are rigid. Building custom endpoints for every object is repetitive and creates unnecessary complexity.',
        solution: 'A flexible architecture that accepts any object type and adapts its logic dynamically. It allows dynamic injection of custom logic (Apex) before or after upsertion without changing the API contract. Simple on the surface, complex under the hood.',
        tech: ['Design Patterns', 'Apex'],
        tier: 'Systems',
        links: [{ label: 'View Architecture', url: 'https://github.com/abhishekthulasi/salesforce-generic-rest-api' }]
    },

    // --- TIER 2: SCALE (The Proven Engineer) ---
    {
        id: 'pidilite',
        title: 'Enterprise Contractor App',
        tagline: 'Engineering for 1 Million Users.',
        problem: 'Managing a fragmented workforce of contractors across a massive geographic area is operationally chaotic.',
        solution: 'Lead Developer for India\'s largest adhesive manufacturer\'s contractor app. Engineered the mobile ecosystem that handles daily operations for over 1 million active users. Learned the discipline of scale.',
        tech: ['Flutter Mobile', 'Scalable Architecture', 'CI/CD'],
        tier: 'Scale',
        links: []
    },
    {
        id: 'bengaluru-dreamin',
        title: 'Bengaluru Dreamin Quest',
        tagline: 'Fostering Connection at Scale.',
        problem: 'Large conferences often suffer from low engagement. We needed a way to motivate 500+ participants to actually connect with each other.',
        solution: 'Developed a QR-based scoring system that gamified networking. Every connection and lecture attended translated into points and real rewards. The scoring engine became the primary driver for participant interaction.',
        tech: ['Experience Cloud', 'LWC', 'Apex'],
        tier: 'Scale',
        links: [{ label: 'View Website', url: 'https://bengalurudreamin.com/about-us/' }]
    },
    {
        id: 'muledreamin',
        title: 'MuleDreamin App',
        tagline: 'Connecting Communities.',
        problem: 'Conference attendees often miss sessions due to static schedules and lack of real-time updates.',
        solution: 'A Flutter-based event companion with Firebase Realtime Database. Delivers live lecture status, event tracking, and instant updates to hundreds of attendees.',
        tech: ['Flutter', 'Firebase', 'Real-time DB'],
        tier: 'Scale',
        links: []
    },

    // --- TIER 3: HACKS (The Problem Solver) ---
    {
        id: 'prime-accel',
        title: 'Prime Video Ad Accelerator',
        tagline: 'Respecting Your Time.',
        problem: 'I was bored and wanted to solve a minor annoyance. I noticed that legally, ads must admit they are ads by showing a timer.',
        solution: 'A simple chrome extension that looks for this undeniable, legally required ad pattern. When it detects the timer, it fast-forwards playback. A selfish, simple tool that just works.',
        tech: ['DOM Manipulation', 'Chrome Extension'],
        tier: 'Tools',
        links: [{ label: 'View Source', url: 'https://github.com/abhishekthulasi/prime-video-ad-accelerator' }]
    },
    {
        id: 'lwc-combobox',
        title: 'Advanced LWC Combobox',
        tagline: 'Fixing the Standard UI.',
        problem: 'The standard Salesforce Lightning combobox lacked search and multi-select, forcing developers to build hacky workarounds.',
        solution: 'An open-source, reusable LWC component that fills the gap. Now a community standard for developers needing better form controls.',
        tech: ['LWC', 'JavaScript', 'Ease of Use'],
        tier: 'Tools',
        links: [{ label: 'View Demo', url: '#' }] // Add LinkedIn link here
    }
];
<script lang="ts">
    import AdrCard from "$lib/components/AdrCard.svelte";
    import { adrs } from "$lib/data";
</script>

<svelte:head>
    <title>Architecture Log | Abhishek Thulasi</title>
    <meta name="description" content="Technical decisions and infrastructure architecture for Quantum Arcadia." />
</svelte:head>

<main class="min-h-screen bg-white dark:bg-black selection:bg-gray-200 dark:selection:bg-gray-800 pt-12">
    <div class="max-w-2xl mx-auto px-6 sm:px-8">
        
        <a href="/" class="inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors mb-8 group">
            <span class="group-hover:-translate-x-1 transition-transform">←</span>
            Back to Portfolio
        </a>

        <div class="mb-10">
            <h1 class="text-3xl sm:text-4xl font-bold tracking-tight text-black dark:text-white mb-3">
                Architecture Log
            </h1>
            <p class="text-gray-500 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                A transparent look into the technical trade-offs, infrastructure choices, and performance optimizations made while scaling Quantum Arcadia's systems.
            </p>
        </div>

        <div class="space-y-2">
            {#each adrs as adr (adr.id)}
                <AdrCard {adr} />
            {/each}
        </div>

        <footer class="py-12 text-center text-xs text-gray-500 dark:text-gray-400 mt-8 border-t border-gray-100 dark:border-gray-900">
            &copy; {new Date().getFullYear()} Abhishek Thulasi. Built with SvelteKit.
        </footer>
    </div>
</main>
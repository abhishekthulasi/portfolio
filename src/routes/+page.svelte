<script lang="ts">
    import Hero from "$lib/components/Hero.svelte";
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import AstuteSection from "$lib/components/AstuteSection.svelte";
    import { projects } from "$lib/data";

    const filters = ["All", "Systems", "Scale", "Tools"] as const;

    let activeFilter = $state<"All" | "Systems" | "Scale" | "Tools">("All");

    let filteredProjects = $derived(
        activeFilter === "All"
            ? projects
            : projects.filter((p) => p.tier === activeFilter),
    );
</script>

<div
    class="min-h-screen bg-white dark:bg-black selection:bg-gray-200 dark:selection:bg-gray-800"
>
    <div class="max-w-2xl mx-auto px-6 sm:px-8">
        <Hero />

        <div
            class="sticky top-0 z-10 bg-white/80 dark:bg-black/80 backdrop-blur-md py-4 mb-8 border-b border-gray-100 dark:border-gray-900 -mx-6 px-6 sm:-mx-8 sm:px-8"
        >
            <div class="flex gap-2 overflow-x-auto no-scrollbar">
                {#each filters as filter}
                    <button
                        onclick={() => (activeFilter = filter)}
                        class="px-4 py-1.5 rounded-full text-sm font-medium transition-all whitespace-nowrap
             {activeFilter === filter
                            ? 'bg-black text-white dark:bg-white dark:text-black'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800'}"
                    >
                        {filter}
                    </button>
                {/each}
            </div>
        </div>

        <div class="space-y-2 min-h-[50vh]">
            {#each filteredProjects as project (project.id)}
                <ProjectCard {project} />
            {/each}

            {#if filteredProjects.length === 0}
                <div class="py-20 text-center text-gray-400">
                    No projects found in this category.
                </div>
            {/if}
        </div>

        <AstuteSection />

        <footer
            class="py-12 text-center text-xs text-gray-400 dark:text-gray-600"
        >
            &copy; {new Date().getFullYear()} Abhishek Thulasi. Built with SvelteKit.
        </footer>
    </div>
</div>

<style>
    /* Hide scrollbar for the filter tabs but keep functionality */
    .no-scrollbar::-webkit-scrollbar {
        display: none;
    }
    .no-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
</style>

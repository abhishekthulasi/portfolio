<script lang="ts">
    import Hero from "$lib/components/Hero.svelte";
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import AstuteSection from "$lib/components/AstuteSection.svelte";
    import { projects } from "$lib/data";

    const filters = ["All", "Systems", "Scale", "Tools"] as const;

    let activeFilter = $state<"All" | "Systems" | "Scale" | "Tools">("All");
    let openProjectIds = $state(new Set<string>());

    let scrollAnchor = $state<HTMLElement>();

    let filteredProjects = $derived(
        activeFilter === "All"
            ? projects
            : projects.filter((p) => p.tier === activeFilter),
    );

    $effect(() => {
        activeFilter;

        if (typeof window !== "undefined" && scrollAnchor) {
            scrollAnchor.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });

    let hasOpenVisibleProjects = $derived(
        filteredProjects.some((p) => openProjectIds.has(p.id)),
    );

    function toggleProject(id: string) {
        const newSet = new Set(openProjectIds);
        if (newSet.has(id)) newSet.delete(id);
        else newSet.add(id);
        openProjectIds = newSet;
    }

    function expandAll() {
        for (const project of filteredProjects) {
            openProjectIds.add(project.id);
        }
        openProjectIds = new Set(openProjectIds);
    }

    function collapseAll() {
        for (const project of filteredProjects) {
            openProjectIds.delete(project.id);
        }
        openProjectIds = new Set(openProjectIds);
    }
</script>

<svelte:head>
    <title>Abhishek Thulasi | Software Engineer</title>
    <meta
        name="description"
        content="Portfolio of Abhishek Thulasi - Systems, Scale, and Tools. Engineering complexity to deliver simplicity."
    />
</svelte:head>

<div
    class="min-h-screen bg-white dark:bg-black selection:bg-gray-200 dark:selection:bg-gray-800"
>
    <div class="max-w-2xl mx-auto px-6 sm:px-8">
        <Hero />

        <span bind:this={scrollAnchor} class="block h-0 w-0 invisible"></span>

        <div
            class="sticky top-0 z-10 bg-white/80 dark:bg-black/80 backdrop-blur-md py-4 mb-8 border-b border-gray-100 dark:border-gray-900 -mx-6 px-6 sm:-mx-8 sm:px-8"
        >
            <div
                class="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
                <div
                    class="flex gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0"
                >
                    {#each filters as filter}
                        <button
                            onclick={() => (activeFilter = filter)}
                            class="cursor-pointer px-4 py-2 rounded-2xl text-sm font-medium transition-all whitespace-nowrap outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white
                            {activeFilter === filter
                                ? 'bg-black text-white dark:bg-white dark:text-black'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800'}"
                        >
                            {filter}
                        </button>
                    {/each}
                </div>

                <div
                    class="flex gap-3 text-xs font-medium text-gray-500 dark:text-gray-400 shrink-0"
                >
                    {#if !hasOpenVisibleProjects}
                        <button
                            onclick={expandAll}
                            class="hover:text-black dark:hover:text-white transition-colors cursor-pointer outline-none focus-visible:underline"
                        >
                            Expand All
                        </button>
                    {:else}
                        <button
                            onclick={collapseAll}
                            class="hover:text-black dark:hover:text-white transition-colors cursor-pointer outline-none focus-visible:underline"
                        >
                            Collapse All
                        </button>
                    {/if}
                </div>
            </div>
        </div>

        <div class="space-y-4">
            {#if filteredProjects.length === 0}
                <div class="py-12 text-center text-gray-400">
                    <p>No projects found in this category.</p>
                    <button
                        onclick={() => (activeFilter = "All")}
                        class="mt-2 text-sm text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                    >
                        Reset filters
                    </button>
                </div>
            {/if}

            {#each filteredProjects as project (project.id)}
                <ProjectCard
                    {project}
                    isOpen={openProjectIds.has(project.id)}
                    onToggle={() => toggleProject(project.id)}
                />
            {/each}
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
    .no-scrollbar::-webkit-scrollbar {
        display: none;
    }
    .no-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
</style>

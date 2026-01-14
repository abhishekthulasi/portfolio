<script lang="ts">
    import { tick } from "svelte";
    import Hero from "$lib/components/Hero.svelte";
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import AstuteSection from "$lib/components/AstuteSection.svelte";
    import { projects } from "$lib/data";

    const filters = ["All", "Systems", "Scale", "Tools"] as const;

    let activeFilter = $state<"All" | "Systems" | "Scale" | "Tools">("All");
    let openProjectIds = $state(new Set<string>());

    let scrollAnchor = $state<HTMLElement>();
    let projectsContainer = $state<HTMLElement>();

    let filteredProjects = $derived(
        activeFilter === "All"
            ? projects
            : projects.filter((p) => p.tier === activeFilter),
    );

    let hasOpenVisibleProjects = $derived(
        filteredProjects.some((p) => openProjectIds.has(p.id)),
    );

    function toggleProject(id: string) {
        const newSet = new Set(openProjectIds);
        if (newSet.has(id)) newSet.delete(id);
        else newSet.add(id);
        openProjectIds = newSet;
    }

    async function toggleFilter(selectedFilter: typeof activeFilter) {
        if (activeFilter === selectedFilter) return;

        if (!projectsContainer) {
            activeFilter = selectedFilter;
            return;
        }

        // 1. Lock Height to prevent scroll jumping
        const startHeight = projectsContainer.offsetHeight;
        projectsContainer.style.height = `${startHeight}px`;
        projectsContainer.style.overflow = "hidden";

        // 2. Update State
        activeFilter = selectedFilter;
        await tick(); // Allow Svelte to render the new (likely shorter) list

        // 3. Measure Natural Height
        // We momentarily unlock the height to see how tall the NEW content wants to be.
        // This happens in the same frame, so the user won't see a flash.
        projectsContainer.style.height = "auto";
        const targetHeight = projectsContainer.offsetHeight;

        // 4. Animate Height
        projectsContainer.style.height = `${startHeight}px`;
        projectsContainer.offsetHeight; // Force reflow

        // Duration matches the staggered animation feel (800ms)
        projectsContainer.style.transition =
            "height 800ms cubic-bezier(0.25, 0.8, 0.25, 1)";
        projectsContainer.style.height = `${targetHeight}px`;

        // 5. Scroll to Top
        scrollAnchor?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        // 6. Cleanup after animation
        setTimeout(() => {
            if (projectsContainer) {
                projectsContainer.style.height = "";
                projectsContainer.style.transition = "";
                projectsContainer.style.overflow = "";
            }
        }, 800);
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

    const schema = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        mainEntity: {
            "@type": "Person",
            name: "Abhishek Thulasi",
            jobTitle: "Systems Engineer",
            url: "https://abhishekthulasi.com",
            sameAs: [
                "https://github.com/abhishekthulasi",
                "https://www.linkedin.com/in/abhishek-thulasi-860656258",
            ],
        },
    };
</script>

<svelte:head>
    <title>Abhishek Thulasi | Systems Engineer</title>
    <meta
        name="description"
        content="Portfolio of Abhishek Thulasi - Systems, Scale, and Tools."
    />
    {@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
</svelte:head>

<main
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
                            onclick={() => toggleFilter(filter)}
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

        <div class="space-y-4" bind:this={projectsContainer}>
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
            class="py-12 text-center text-xs text-gray-500 dark:text-gray-400"
        >
            &copy; {new Date().getFullYear()} Abhishek Thulasi. Built with SvelteKit.
        </footer>
    </div>
</main>

<style>
    .no-scrollbar::-webkit-scrollbar {
        display: none;
    }
    .no-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
</style>

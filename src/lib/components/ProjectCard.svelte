<script lang="ts">
    import type { Project } from "$lib/data";

    export let project: Project;

    let isOpen = false;

    function toggle() {
        isOpen = !isOpen;
    }
</script>

<button
    on:click={toggle}
    class="w-full text-left group relative border-b border-gray-200 dark:border-gray-800 py-8 transition-colors hover:bg-gray-50 dark:hover:bg-gray-900/50 focus:outline-none"
    aria-expanded={isOpen}
>
    <div class="flex justify-between items-baseline">
        <div class="space-y-1">
            <h3
                class="text-xl font-bold text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
            >
                {project.title}
            </h3>
            <p class="text-gray-500 dark:text-gray-400 font-mono text-sm">
                {project.tagline}
            </p>
        </div>

        <div class="hidden sm:flex gap-2">
            {#each project.tech as t}
                <span
                    class="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded"
                >
                    {t}
                </span>
            {/each}
        </div>
    </div>

    <div
        class="grid transition-all duration-300 ease-in-out overflow-hidden"
        style="grid-template-rows: {isOpen ? '1fr' : '0fr'};"
    >
        <div
            class="min-h-0 opacity-0 transition-opacity duration-300 delay-75"
            class:opacity-100={isOpen}
        >
            <div class="pt-6 pb-2 sm:grid sm:grid-cols-12 gap-8">
                <div class="sm:col-span-5 mb-4 sm:mb-0">
                    <h4
                        class="text-xs uppercase tracking-wider text-gray-400 mb-2"
                    >
                        The Problem
                    </h4>
                    <p
                        class="text-gray-800 dark:text-gray-200 text-sm leading-relaxed"
                    >
                        {project.problem}
                    </p>
                </div>

                <div class="sm:col-span-7">
                    <h4
                        class="text-xs uppercase tracking-wider text-gray-400 mb-2"
                    >
                        The Solution
                    </h4>
                    <p
                        class="text-gray-800 dark:text-gray-200 text-sm leading-relaxed"
                    >
                        {project.solution}
                    </p>

                    {#if project.links && project.links.length > 0}
                        <div class="mt-4 flex gap-4">
                            {#each project.links as link}
                                <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    on:click|stopPropagation
                                    class="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline decoration-2 underline-offset-4"
                                >
                                    {link.label} →
                                </a>
                            {/each}
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    </div>
</button>

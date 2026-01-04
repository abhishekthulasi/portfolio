<script lang="ts">
    import { slide } from "svelte/transition";
    import type { Project } from "$lib/data";
    import Icon from "./Icon.svelte";

    let {
        project,
        isOpen,
        onToggle,
    }: {
        project: Project;
        isOpen: boolean;
        onToggle: () => void;
    } = $props();

    let contentId = $derived(`project-content-${project.id}`);
</script>

<article
    class="rounded-2xl p-4 transition-all duration-300 border border-transparent
    {isOpen
        ? 'bg-gray-50 dark:bg-gray-900/40 border-gray-200 dark:border-gray-800'
        : 'hover:bg-gray-50 dark:hover:bg-gray-900/50'}"
>
    <button
        onclick={onToggle}
        class="w-full text-left group relative p-5 focus:outline-none cursor-pointer rounded-2xl focus-visible:ring-2 focus-visible:ring-blue-500/50"
        aria-expanded={isOpen}
        aria-controls={contentId}
    >
        <div class="flex justify-between items-start gap-4">
            <div class="space-y-1 grow">
                <div class="flex items-center gap-3">
                    <h3
                        class="text-xl font-bold text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                    >
                        {project.title}
                    </h3>

                    <span
                        class="text-[10px] font-mono px-2 py-0.5 rounded-full border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400"
                    >
                        {project.year}
                    </span>
                </div>

                <p class="text-gray-500 dark:text-gray-400 font-medium text-sm">
                    {project.tagline}
                </p>
            </div>

            <div class="flex flex-col items-end gap-3 shrink-0">
                <div
                    class="text-gray-400 transition-transform duration-300 {isOpen
                        ? 'rotate-180'
                        : ''}"
                    aria-hidden="true"
                >
                    <Icon name="chevron-down" class="w-5 h-5" />
                </div>

                <div
                    class="hidden sm:flex flex-wrap justify-end gap-1.5 max-w-50"
                >
                    {#each project.tech as t}
                        <span
                            class="text-[10px] bg-white
                            dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 px-1.5 py-0.5 rounded-md"
                        >
                            {t}
                        </span>
                    {/each}
                </div>
            </div>
        </div>
    </button>

    {#if isOpen}
        <div id={contentId} transition:slide={{ duration: 300, axis: "y" }}>
            <div class="px-5 pb-6 pt-0">
                <div
                    class="h-px w-full bg-gray-200 dark:bg-gray-800 mb-6"
                ></div>

                <div class="sm:grid sm:grid-cols-12 gap-8">
                    <div class="sm:col-span-5 mb-6 sm:mb-0">
                        <h4
                            class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 flex items-center gap-2"
                        >
                            The Problem
                        </h4>
                        <p
                            class="text-gray-800 dark:text-gray-200 text-sm leading-relaxed"
                        >
                            {project.problem}
                        </p>
                    </div>

                    <div class="sm:col-span-7 flex flex-col h-full">
                        <h4
                            class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3"
                        >
                            The Solution
                        </h4>
                        <p
                            class="text-gray-800 dark:text-gray-200 text-sm leading-relaxed mb-6"
                        >
                            {project.solution}
                        </p>

                        {#if project.links && project.links.length > 0}
                            <div class="mt-auto flex flex-wrap gap-3">
                                {#each project.links as link}
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors
                                        bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200
                                        dark:hover:bg-gray-700"
                                    >
                                        <Icon
                                            name={link.type === "github"
                                                ? "github"
                                                : "external"}
                                        />
                                        {link.label}
                                    </a>
                                {/each}
                            </div>
                        {/if}
                    </div>
                </div>
            </div>
        </div>
    {/if}
</article>

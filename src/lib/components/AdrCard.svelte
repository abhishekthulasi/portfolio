<script lang="ts">
    import { slide } from "svelte/transition";
    import Icon from "./Icon.svelte";
    import type { ADR } from "$lib/data";

    let { adr }: { adr: ADR } = $props();

    let isOpen = $state(false);
    let contentId = $derived(`adr-content-${adr.id}`);

    function toggle() {
        isOpen = !isOpen;
    }
</script>

<article
    class="rounded-2xl p-4 transition-all duration-300 border border-transparent mb-4
    {isOpen
        ? 'bg-gray-50 dark:bg-gray-900/40 border-gray-200 dark:border-gray-800'
        : 'hover:bg-gray-50 dark:hover:bg-gray-900/50 border-gray-100 dark:border-gray-900'}"
>
    <button
        onclick={toggle}
        class="w-full text-left group relative p-5 focus:outline-none cursor-pointer rounded-2xl focus-visible:ring-2 focus-visible:ring-blue-500/50"
        aria-expanded={isOpen}
        aria-controls={contentId}
    >
        <div class="flex justify-between items-start gap-4">
            <div class="space-y-1 grow">
                <div class="flex items-center gap-3 mb-2">
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100/50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                        {adr.status}
                    </span>
                    <span class="text-[10px] font-mono text-gray-500 dark:text-gray-400">
                        {adr.date}
                    </span>
                </div>
                
                <h3 class="text-xl font-bold text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {adr.title}
                </h3>

                <div class="flex flex-wrap gap-1.5 mt-3">
                    {#each adr.tags as tag}
                        <span class="text-[10px] bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 px-1.5 py-0.5 rounded-md">
                            {tag}
                        </span>
                    {/each}
                </div>
            </div>

            <div class="flex flex-col items-end gap-3 shrink-0">
                <div class="text-gray-400 transition-transform duration-300 {isOpen ? 'rotate-180' : ''}" aria-hidden="true">
                    <Icon name="chevron-down" class="w-5 h-5" />
                </div>
            </div>
        </div>
    </button>

    {#if isOpen}
        <div id={contentId} transition:slide={{ duration: 300, axis: "y" }}>
            <div class="px-5 pb-6 pt-0">
                <div class="h-px w-full bg-gray-200 dark:bg-gray-800 mb-6"></div>

                <div class="space-y-6">
                    <div>
                        <h4 class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Context</h4>
                        <p class="text-gray-800 dark:text-gray-200 text-sm leading-relaxed">{adr.context}</p>
                    </div>
                    
                    <div>
                        <h4 class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Decision</h4>
                        <p class="text-blue-600 dark:text-blue-400 font-medium text-sm leading-relaxed">{adr.decision}</p>
                    </div>

                    <div>
                        <h4 class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Rationale</h4>
                        <ul class="list-disc pl-5 space-y-2 text-gray-800 dark:text-gray-200 text-sm leading-relaxed marker:text-gray-400">
                            {#each adr.rationale as point}
                                <li>{point}</li>
                            {/each}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    {/if}
</article>
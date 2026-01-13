<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";
	import { page } from "$app/state";

	let { children } = $props();

	let canonicalPath = $derived(
		page.url.pathname === "/" ? "" : page.url.pathname.replace(/\/$/, ""),
	);

	const websiteSchema = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: "Abhishek Thulasi Portfolio",
		url: "https://abhishekthulasi.com",
		author: {
			"@type": "Person",
			name: "Abhishek Thulasi",
		},
	};
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<link rel="canonical" href="https://abhishekthulasi.com{canonicalPath}" />

	{@html `<script type="application/ld+json">${JSON.stringify(websiteSchema)}</script>`}
</svelte:head>

{@render children()}

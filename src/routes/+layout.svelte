<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Person",
			"name": "Abhishek Thulasi",
			"url": "https://abhishekthulasi.com",
			"jobTitle": "Systems Engineer",
			"sameAs": [
				"https://github.com/abhishekthulasi",
				"https://www.linkedin.com/in/abhishek-thulasi-860656258"
			]
		}
	</script>
</svelte:head>

{@render children()}

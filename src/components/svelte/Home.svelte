<script lang="ts">
  // This page is in svelte just because 🤷‍♂️
  import type { CollectionEntry } from "astro:content";

  export let posts: CollectionEntry<"blog">[];
</script>

<h3>Hello there</h3>

{#each posts as post}
  <a href={post.slug}>
    <p>{post.data.title}</p>
  </a>
{/each}

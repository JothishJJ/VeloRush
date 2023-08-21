<script lang="ts">
  // This page is in svelte just because 🤷‍♂️
  import type { CollectionEntry } from "astro:content";
  import FormattedDate from "../shared/FormattedDate.svelte";

  export let posts: CollectionEntry<"blog">[];
</script>

<section class="text-center py-8 px-4 md:px-40 lg:px-80">
  <h1 class="text-5xl md:text-7xl pt-4 pb-2 font-display">
    Wellcome to VeloRush
  </h1>
  <ul class="flex flex-col gap-10 pt-16">
    <li class="md:text-left p-2 border-2 rounded-lg">
      <h2 class="text-2xl font-display font-semibold">The Bug Stops Here</h2>
      <p>
        Welcome to 'The Bug Stops Here,' your one-stop destination for
        programming insights, tips, and solutions. Delve into a world where
        coding challenges are conquered, bugs are squashed, and new horizons are
        explored. Our programming blog features a curated selection of articles
        that cover a wide range of languages, tools, and techniques.
      </p>
    </li>
    <li class="md:text-right p-2 border-2 rounded-lg">
      <h2 class="text-2xl font-display font-semibold">
        Unlock the World of Programming
      </h2>
      <p>
        Welcome to our programming blog, a haven for coding enthusiasts and
        aspiring developers. Immerse yourself in a world of algorithms,
        languages, and innovative solutions. Our platform is a treasure trove of
        coding tutorials, in-depth technical analyses, and hands-on experiences
        shared by seasoned programmers.
      </p>
    </li>
    <li class="md:text-left p-1 border-2 rounded-lg">
      <h2 class="text-2xl font-display font-semibold">Ctrl+Code+Create</h2>
      <p>
        Engage the ultimate power sequence – Ctrl+Code+Create – as you enter our
        programming blog. Here, the keystrokes of innovation are transformed
        into lines of code that shape the digital world. Uncover coding
        tutorials, project insights, and programming paradigms that empower you
        to craft excellence in your software endeavors.
      </p>
    </li>
  </ul>
</section>

<section class="py-8 px-4 md:px-40 lg:px-80">
  <div class="grid lg:grid-cols-2 grid-cols-1 gap-4">
    {#each posts as post}
      <a
        href={post.slug}
        class="font-display rounded-lg border-2 border-neutral-800 hover:border-blue-500 p-2"
      >
        <h3 class="text-2xl font-display font-semibold">{post.data.title}</h3>
        <p class="line-clamp-4">{post.data.description}</p>
        <small><FormattedDate myDate={post.data.pubDate} /></small>
      </a>
    {/each}
  </div>
</section>

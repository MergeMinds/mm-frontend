<script>
  import Navbar from '$lib/modules/Navbar.svelte';
  import '../app.css';
  import { ModeWatcher } from 'mode-watcher';
</script>

<ModeWatcher />
<Navbar />

<main
  class="container mx-auto py-12 2xl:border-x-[1px] 2xl:border-gray-300 2xl:dark:border-zinc-700">
  <slot />
</main>

<style lang="postcss">
  :global(body) {
    @apply 2xl:border-b-[1px] 2xl:border-gray-300 2xl:dark:border-zinc-700;
  }
</style>

<script>
  import ThemeProvider from '$lib/components/ThemeProvider.svelte';
  import '../app.css';
</script>

<ThemeProvider>
  <slot />
</ThemeProvider>

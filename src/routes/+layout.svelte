<script>
  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
  import '../app.css';

  const client = new QueryClient()
</script>

<QueryClientProvider {client}>
  <slot />
</QueryClientProvider>

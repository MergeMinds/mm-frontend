<script lang="ts">
  import { createQuery } from '@tanstack/svelte-query';
  import { fetchHealthChecker } from '$api/healthchecker';

  let healthCheckerQuery = createQuery<{ message: string }, Error>({
    queryKey: ['healthCheker'],
    queryFn: () => fetchHealthChecker(),
  });
</script>

<p class="text-lg font-bold">Hello, MergeMinds!</p>

{#if $healthCheckerQuery.isLoading}
  Loading healthChecker message...
{:else if $healthCheckerQuery.error}
  Error fetching healthChecker
{:else}
  {$healthCheckerQuery.data?.message}
{/if}

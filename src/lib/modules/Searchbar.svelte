<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { SearchIcon } from 'lucide-svelte';

  export let filter: string;
  export let handleSubmit: () => Promise<void>;
</script>

<form
  on:submit|preventDefault={handleSubmit}
  class="flex flex-row items-center gap-1">
  <Input
    type="text"
    placeholder="Найти нужный курс..."
    class="h-12"
    bind:value={filter} />
  <Button
    type="submit"
    variant="secondary"
    class="h-12">
    <SearchIcon />
  </Button>
</form>

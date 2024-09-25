<script lang="ts">
  import { theme } from '$lib/stores/themeStore';
  import { Button } from '$lib/components/ui/button';

  const toggleTheme = (): void => {
    theme.toggleTheme();
  };

  const toggleContrast = (): void => {
    theme.toggleContrast();
  };
</script>

<div class="flex space-x-2">
  <Button on:click={toggleTheme}>
    {$theme.mode === 'light' ? 'Тёмная тема' : 'Светлая тема'}
  </Button>
  <Button on:click={toggleContrast}>
    {$theme.contrast === 'normal' ? 'Высокий контраст' : 'Обычный контраст'}
  </Button>
</div>

<script lang="ts">
  import { onMount } from 'svelte';
  import { theme } from '$lib/stores/themeStore';
  import type { ThemeState } from '$lib/types/theme';

  let currentTheme: ThemeState;

  const updateThemeClasses = (): void => {
    document.documentElement.classList.toggle('dark', currentTheme.mode === 'dark');
    document.documentElement.classList.toggle('high-contrast', currentTheme.contrast === 'high');
  };

  theme.subscribe((value) => {
    currentTheme = value;
    if (typeof window !== 'undefined') {
      updateThemeClasses();
    }
  });

  onMount(updateThemeClasses);
</script>

<div class:high-contrast={currentTheme.contrast === 'high'}>
  <slot />
</div>

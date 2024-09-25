import { writable } from 'svelte/store';
import type { ThemeState, ThemeMode, ThemeContrast } from '$lib/types/theme';

const createThemeStore = () => {
  const { subscribe, update } = writable<ThemeState>({
    mode: 'light',
    contrast: 'normal',
  });

  return {
    subscribe,
    setMode: (mode: ThemeMode) => update((theme) => ({ ...theme, mode })),
    setContrast: (contrast: ThemeContrast) => update((theme) => ({ ...theme, contrast })),
    toggleTheme: () =>
      update((theme) => ({
        ...theme,
        mode: theme.mode === 'light' ? 'dark' : 'light',
      })),
    toggleContrast: () =>
      update((theme) => ({
        ...theme,
        contrast: theme.contrast === 'normal' ? 'high' : 'normal',
      })),
  };
};

export const theme = createThemeStore();

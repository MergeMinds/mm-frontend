export type ThemeMode = 'light' | 'dark';
export type ThemeContrast = 'normal' | 'high';

export interface ThemeState {
  mode: ThemeMode;
  contrast: ThemeContrast;
}

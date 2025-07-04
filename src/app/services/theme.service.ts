import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storageKey = 'theme';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  setTheme(theme: 'light' | 'dark') {
    if (!isPlatformBrowser(this.platformId)) return;

    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${theme}-theme`);
    localStorage.setItem(this.storageKey, theme);
  }

  loadTheme() {
    //localStorage não está disponível no ambiente de renderização
    //verificar se está rodando no navegador antes de acessar localStorage
    //if (!isPlatformBrowser(this.platformId)) return;

    const savedTheme = localStorage.getItem(this.storageKey) as 'light' | 'dark' | null;
    this.setTheme(savedTheme || 'light');
  }

  toggleTheme() {
    //if (!isPlatformBrowser(this.platformId)) return;

    const isDark = document.body.classList.contains('dark-theme');
    this.setTheme(isDark ? 'light' : 'dark');
  }

  get currentTheme(): 'light' | 'dark' {
    //if (!isPlatformBrowser(this.platformId)) return 'light';

    return document.body.classList.contains('dark-theme') ? 'dark' : 'light';
  }
}

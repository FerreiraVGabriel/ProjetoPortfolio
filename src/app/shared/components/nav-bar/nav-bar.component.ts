import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon'; 
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isNavbarCollapsed = true;
  isDarkTheme = false;

  constructor(
    private themeService: ThemeService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadTheme();
    }
  }

  loadTheme() {
    this.themeService.loadTheme();
    this.isDarkTheme = this.themeService.currentTheme === 'dark';
  }

  changeTheme() {
    this.themeService.toggleTheme();
    this.isDarkTheme = this.themeService.currentTheme === 'dark';
  }

  // changeLanguage(event: Event) {
  // const selectElement = event.target as HTMLSelectElement;
  // const lang = selectElement.value;
  // this.translate.use(lang);
  // }

}

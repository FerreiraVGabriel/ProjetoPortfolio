import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon'; 
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ThemeService } from '../../../services/theme.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    TranslateModule,
    MatSelectModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isNavbarCollapsed = true;
  isDarkTheme = false;
  languages = [
    { label: 'Português', value: 'pt', flag: 'assets/img/br.png' },
    { label: 'English', value: 'en', flag: 'assets/img/usa.png' }
  ];

  constructor( public translate: TranslateService,
    private themeService: ThemeService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    translate.addLangs(['en', 'pt']);
    translate.setDefaultLang('pt');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|pt/) ? browserLang : 'pt');
  }

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

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }


  getFlag(lang: string): string {
    return this.languages.find(l => l.value === lang)?.flag || '';
  }

  getLabel(lang: string): string {
    return this.languages.find(l => l.value === lang)?.label || '';
  }


  // changeLanguage(event: Event) {
  // const selectElement = event.target as HTMLSelectElement;
  // const lang = selectElement.value;
  // this.translate.use(lang);
  // }

}

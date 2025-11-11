import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { AboutMeComponent } from './features/about-me/about-me.component';
import { SkillsComponent } from "./features/skills/skills.component";
import { HistoryComponent } from "./features/history/history.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, AboutMeComponent, SkillsComponent, HistoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-portfolio';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { AboutMeComponent } from './features/about-me/about-me.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavBarComponent, AboutMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-portfolio';
}

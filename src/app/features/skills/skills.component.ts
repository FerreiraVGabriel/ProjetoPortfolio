import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  imports: [TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  frontendSkills = ['Angular', 'AngularJS', 'TypeScript', 'HTML', 'CSS', 'Bootstrap'];
  backendSkills = ['.NET', 'Entity Framework', 'SQL Server', 'ASP.NET Core'];
  otherSkills = ['Docker', 'Git', 'Azure', 'Firebase'];
}

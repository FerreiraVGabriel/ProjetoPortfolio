import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-history',
  imports: [TranslateModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  timeline = [
    {
      period: '2023 - Atual',
      role: 'Desenvolvedor Full Stack na Genyx Solar Power',
      description: 'Atuação em sistemas com Angular e .NET 8, foco em responsividade, performance e boas práticas.'
    },
    {
      period: '2021 - 2023',
      role: 'Desenvolvedor Full Stack Freelancer',
      description: 'Projetos independentes com foco em CRM, controle financeiro e dashboards interativos.'
    },
    {
      period: '2018 - 2021',
      role: 'Desenvolvedor Júnior',
      description: 'Apoio em manutenção de sistemas internos e desenvolvimento de funcionalidades em AngularJS e ASP.NET.'
    },
    {
      period: '2017 - 2017',
      role: 'Desenvolvedor Full Stack Freelancer',
      description: 'Projetos independentes com foco em CRM, controle financeiro e dashboards interativos.'
    },
    {
      period: '2015 - 2017',
      role: 'Desenvolvedor Júnior',
      description: 'Apoio em manutenção de sistemas internos e desenvolvimento de funcionalidades em AngularJS e ASP.NET.'
    }
  ];
}

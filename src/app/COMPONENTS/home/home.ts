import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from '../../SERVICES/counter.service';
import { SERVICES } from '../services/services';
import { RESUME } from '../resume/resume';
import { Work } from '../work/work';
import { CONTACT } from '../contact/contact';

@Component({
  selector: 'app-home',
  imports: [CommonModule, SERVICES, RESUME, Work, CONTACT],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HOME implements OnInit {
  yearsExp = 0;
  happyClients = 0;
  projectsCompleted = 0;
  codeCommits = 0;
  showSkills = false;

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.startCounters();
  }

  startCounters(): void {
    this.counterService.animateCounters([
      {
        getter: () => this.yearsExp,
        setter: (value) => (this.yearsExp = value),
        target: 2,
        increment: 1,
        duration: 200,
      },
      {
        getter: () => this.happyClients,
        setter: (value) => (this.happyClients = value),
        target: 4,
        increment: 1,
        duration: 200,
      },
      {
        getter: () => this.projectsCompleted,
        setter: (value) => (this.projectsCompleted = value),
        target: 6,
        increment: 1,
        duration: 180,
      },
      {
        getter: () => this.codeCommits,
        setter: (value) => (this.codeCommits = value),
        target: 200,
        increment: 5,
        duration: 20,
      },
    ]);
  }

  openLink(platform: string): void {
    const links: Record<string, string> = {
      github: 'https://github.com/moazallam1',
      linkedin: 'https://www.linkedin.com/in/moazallam/',
      upwork:
        'https://www.upwork.com/freelancers/~0182e89c6ec207baab?mp_source=share',
      mostaqle: 'https://mostaql.com/u/Moaz_allam_11',
    };
    const url = links[platform];
    if (url) window.open(url, '_blank');
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from '../../SERVICES/counter.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HOME implements OnInit {
  yearsExp = 0;
  projectsCompleted = 0;
  technologiesMastered = 0;
  codeCommits = 0;

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.startCounters();
  }

  startCounters(): void {
    this.counterService.animateCounters([
      {
        getter: () => this.yearsExp,
        setter: (value) => this.yearsExp = value,
        target: 2,
        increment: 1,
        duration: 200
      },
      {
        getter: () => this.projectsCompleted,
        setter: (value) => this.projectsCompleted = value,
        target: 15,
        increment: 1,
        duration: 150
      },
      {
        getter: () => this.technologiesMastered,
        setter: (value) => this.technologiesMastered = value,
        target: 8,
        increment: 1,
        duration: 150
      },
      {
        getter: () => this.codeCommits,
        setter: (value) => this.codeCommits = value,
        target: 500,
        increment: 10,
        duration: 20
      }
    ]);
  }

  openLink(platform: string) {
    const links: any = {
      github: "https://github.com/moazallam1",
      linkedin: "https://www.linkedin.com/in/moazallam/",
      upwork: "https://www.upwork.com/freelancers/~0182e89c6ec207baab?mp_source=share",
      mostaqle: "https://mostaql.com/u/Moaz_allam_11",
    };

    const url = links[platform];

    if (url) {
      window.open(url, "_blank");
    }
  }
}

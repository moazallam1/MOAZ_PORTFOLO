import { Component, OnInit, signal } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { NAVBAR } from "./COMPONENTS/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NAVBAR],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('MOAZ');
  
  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}
  
  ngOnInit(): void {
    initFlowbite();
    this.setDefaultSEO();
  }

  setDefaultSEO(): void {
    this.titleService.setTitle('MOAZ ALLAM - Angular Frontend Developer | Web Development');
    
    this.metaService.updateTag({
      name: 'description',
      content: 'I\'m MOAZ ALLAM, a passionate Angular Frontend Developer specializing in building beautiful, responsive, and high-performance web applications.'
    });

    this.metaService.updateTag({
      name: 'keywords',
      content: 'Angular Developer, Frontend Developer, Web Developer, TypeScript, Web Design'
    });

    this.metaService.updateTag({
      property: 'og:title',
      content: 'MOAZ ALLAM - Angular Frontend Developer'
    });

    this.metaService.updateTag({
      property: 'og:description',
      content: 'Passionate Frontend Developer specializing in Angular and modern web technologies.'
    });
  }
}

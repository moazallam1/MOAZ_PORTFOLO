import { Component, OnInit, signal } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { NAVBAR } from "./COMPONENTS/navbar/navbar";
import { SpaceBackgroundComponent } from "./COMPONENTS/space-background/space-background.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NAVBAR, SpaceBackgroundComponent],
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
    this.titleService.setTitle('MOAZ ALLAM | معاذ علام - Angular Frontend Developer | Portfolio بورتفوليو');
    
    this.metaService.updateTag({
      name: 'description',
      content: 'MOAZ ALLAM (معاذ علام) - Professional Angular Frontend Developer from Alexandria, Egypt. Building modern, responsive web applications. 15+ projects completed. مطور واجهات أمامية محترف متخصص في Angular و TypeScript - بورتفوليو معاذ مصطفى علام'
    });

    this.metaService.updateTag({
      name: 'keywords',
      content: 'MOAZ ALLAM, معاذ علام, Moaz Allam, معاذ مصطفى علام, بورتفوليو معاذ, مطور واجهات أمامية, مطور ويب, Angular Developer, Frontend Developer, Web Developer, TypeScript, مطور انجولار, مبرمج مصري, اسكندرية, portfolio, بورتفوليو, تصميم مواقع, برمجة مواقع, HTML5, CSS3, JavaScript, Responsive Design, مطور مستقل, Freelance Developer'
    });

    this.metaService.updateTag({
      property: 'og:title',
      content: 'MOAZ ALLAM | معاذ علام - Angular Frontend Developer Portfolio'
    });

    this.metaService.updateTag({
      property: 'og:description',
      content: 'Professional Angular Frontend Developer from Egypt. 15+ completed projects. مطور واجهات أمامية محترف - بورتفوليو معاذ علام'
    });

    this.metaService.updateTag({
      property: 'og:image',
      content: 'https://moazallam.com/IMAGES/HERO_IMG.png'
    });

    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://moazallam.com/'
    });

    this.metaService.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });

    this.metaService.updateTag({
      name: 'twitter:title',
      content: 'MOAZ ALLAM | معاذ علام - Angular Frontend Developer'
    });

    this.metaService.updateTag({
      name: 'twitter:description',
      content: 'Professional Angular Frontend Developer. 15+ projects. مطور واجهات أمامية محترف'
    });

    this.metaService.updateTag({
      name: 'twitter:image',
      content: 'https://moazallam.com/IMAGES/HERO_IMG.png'
    });
  }
}

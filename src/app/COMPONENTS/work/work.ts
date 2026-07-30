import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  mainImage: string;
  liveLink: string;
}

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work.html',
  styleUrl: './work.css',
})
export class Work implements OnInit {
  currentProjectIndex = 0;

  projects: Project[] = [
    {
      id: 1,
      title: 'Dr. Elsonny — Weight Loss Clinic',
      description: 'A professional medical clinic website for Dr. Mostafa Elsonny, specialized in weight loss and non-surgical treatments. Features include online appointment booking, services showcase, doctor profile, and a fully responsive Arabic UI with smooth user experience.',
      technologies: ['Angular 19', 'TypeScript', 'Tailwind CSS', 'Bootstrap'],
      mainImage: '/IMAGES/Elsonny.png',
      liveLink: 'https://elsonny.net',
    },
    {
      id: 2,
      title: 'Marmar Store',
      description: 'A modern and fully responsive e-commerce platform built with Angular and TypeScript for showcasing shoes, slippers, and socks. Includes category-based product browsing, smooth navigation, mobile-friendly design, and an intuitive shopping experience.',
      technologies: ["Angular 19", "TypeScript", "Tailwind CSS", "Bootstrap"],
      mainImage: '/IMAGES/MARMAR.png',
      liveLink: 'https://marmarstore.vercel.app/',
    },
    {
      id: 3,
      title: 'Ampere',
      description: 'A modern and fully responsive corporate website built with Angular and TypeScript for an engineering and contracting company. Showcases MEP services, solar energy solutions, renovation projects, smart systems, and safety solutions with a clean professional UI.',
      technologies: ["Angular 19", "TypeScript", "Tailwind CSS", "Bootstrap"],
      mainImage: '/IMAGES/Ampere.png',
      liveLink: 'https://ampere-website.vercel.app/',
    },
    {
      id: 4,
      title: 'Rekaz',
      description: 'A professional and fully responsive corporate website built with Angular and TypeScript for a digital marketing agency. Showcases branding services, performance marketing, SEO strategies, social media management, and business growth solutions with a modern and clean UI.',
      technologies: ['Angular 19', 'TypeScript', 'Tailwind CSS', 'Bootstrap'],
      mainImage: '/IMAGES/Rekaz.png',
      liveLink: 'https://www.rakaznexus.com/',
    },
    {
      id: 5,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform developed using Angular 19 and TypeScript. Features include product browsing, shopping cart, user authentication, and secure checkout process with full responsive design.',
      technologies: ['Angular 19', 'TypeScript', 'Tailwind CSS'],
      mainImage: '/IMAGES/blog-img-1.jpeg',
      liveLink: 'https://e-commerce-without-loggin-system.vercel.app/#/home',
    }
  ];

  ngOnInit() {
    // Display first project
  }

  get currentProject(): Project {
    return this.projects[this.currentProjectIndex];
  }

  openProjectLink() {
    if (this.currentProject.liveLink) {
      window.open(this.currentProject.liveLink, '_blank');
    }
  }

  previousProject() {
    this.currentProjectIndex = (this.currentProjectIndex - 1 + this.projects.length) % this.projects.length;
  }

  nextProject() {
    this.currentProjectIndex = (this.currentProjectIndex + 1) % this.projects.length;
  }

  goToProject(index: number) {
    this.currentProjectIndex = index;
  }
}

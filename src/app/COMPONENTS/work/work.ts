import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  mainImage: string;
  liveLink: string;
  githubLink: string;
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
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform developed using Angular 19 and TypeScript. Features include product browsing, shopping cart, user authentication, and secure checkout process with full responsive design.',
      technologies: ['Angular 19', 'TypeScript', 'Tailwind CSS'],
      mainImage: '/IMAGES/blog-img-1.jpeg',
      liveLink: 'https://e-commerce-khaki-ten.vercel.app/',
      githubLink: 'https://github.com/moazallam1/ECommerce'
    },
    {
      id: 2,
      title: 'Recipe Application',
      description: 'A recipe application that allows users filter recipes, view detailed instructions. Built with Angular and TypeScript, featuring a user-friendly interface and responsive design.',
      technologies: ['Angular', 'TypeScript', 'Bootstrap'],
      mainImage: "https://www.themealdb.com/images/media/meals/kgfh3q1763075438.jpg",
      liveLink: 'https://moazrecipe.vercel.app/',
      githubLink: 'https://github.com/moazallam1/Recipe'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A personal portfolio website built with HTML, CSS, and Bootstrap to provide a clean and responsive design.',
      technologies: ["HTML", "CSS", "Bootstrap"],
      mainImage: '/IMAGES/daniels_.jpg',
      liveLink: 'https://moaz-daniels.netlify.app/',
      githubLink: 'https://github.com/moazallam1/Daniels'
    }
  ];

  ngOnInit() {
    // Display first project
  }

  get currentProject(): Project {
    return this.projects[this.currentProjectIndex];
  }

  openProjectLink(type: 'live' | 'github') {
    const url = type === 'live' ? this.currentProject.liveLink : this.currentProject.githubLink;
    if (url) {
      window.open(url, '_blank');
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

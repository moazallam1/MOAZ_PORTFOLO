import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.html',
  styleUrl: './resume.css',
})
export class RESUME implements OnInit {
  
  ngOnInit() {
    this.initializeTabSwitching();
  }

  initializeTabSwitching() {
    const buttons = document.querySelectorAll('.resume-nav-btn') as NodeListOf<HTMLButtonElement>;
    const contents = document.querySelectorAll('.resume-content') as NodeListOf<HTMLElement>;

    buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
        const tabName = button.getAttribute('data-tab');

        // Remove active class and reset styles from all buttons
        buttons.forEach(btn => {
          btn.classList.remove('active');
          btn.style.background = '';
          btn.style.color = '';
          btn.style.boxShadow = '';
          btn.style.borderColor = '';
        });

        // Hide all contents
        contents.forEach(content => content.classList.add('hidden'));

        // Add active class to clicked button and apply styles
        button.classList.add('active');
        button.style.background = '#38B28B';
        button.style.color = '#000';
        button.style.boxShadow = '0 0 20px rgba(56, 178, 139, 0.4)';
        button.style.borderColor = '#38B28B';

        // Show corresponding content
        const activeContent = document.querySelector(`[data-content="${tabName}"]`) as HTMLElement;
        if (activeContent) {
          activeContent.classList.remove('hidden');
        }
      });
    });
  }

}

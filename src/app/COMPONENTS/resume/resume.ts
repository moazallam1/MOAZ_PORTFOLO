import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.html',
  styleUrl: './resume.css',
})
export class RESUME implements OnInit {
  private progressBarsAnimated = false;

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
        button.style.background = '#FF6B35';
        button.style.color = '#ffffff';
        button.style.boxShadow = '0 4px 16px rgba(255, 107, 53, 0.35)';
        button.style.borderColor = '#FF6B35';

        // Show corresponding content
        const activeContent = document.querySelector(`[data-content="${tabName}"]`) as HTMLElement;
        if (activeContent) {
          activeContent.classList.remove('hidden');
        }

        // Animate progress bars if skills tab is clicked
        if (tabName === 'skills') {
          this.animateProgressBars();
        } else {
          this.progressBarsAnimated = false;
        }
      });
    });
  }

  private animateProgressBars() {
    if (this.progressBarsAnimated) return;

    const progressBars = document.querySelectorAll('.progress-bar') as NodeListOf<HTMLElement>;
    const percentageTexts = document.querySelectorAll('.skill-percentage') as NodeListOf<HTMLElement>;

    progressBars.forEach((bar, index) => {
      const targetWidth = parseInt(bar.getAttribute('data-width') || '0');
      const targetText = percentageTexts[index];
      let currentWidth = 0;
      const increment = targetWidth / 50; // Animate over 50 steps

      const interval = setInterval(() => {
        currentWidth += increment;
        if (currentWidth >= targetWidth) {
          currentWidth = targetWidth;
          clearInterval(interval);
        }
        bar.style.width = currentWidth + '%';
        targetText.textContent = Math.round(currentWidth) + '%';
      }, 30);
    });

    this.progressBarsAnimated = true;
  }
}

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills implements AfterViewInit {
  @ViewChild('skillsSection', { static: false }) skillsSection!: ElementRef;

  ngAfterViewInit(): void {
    if (this.skillsSection) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animateSkills();
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 }); // 20% visível

      observer.observe(this.skillsSection.nativeElement);
    }
  }

  animateSkills(): void {
    const progressBars = this.skillsSection.nativeElement.querySelectorAll('.progress');

    progressBars.forEach((progressEl: HTMLElement) => {
      const percent = progressEl.dataset['percent'] || '0%';
      const bar = progressEl.querySelector('.progress-bar') as HTMLElement;
      if (bar) {
        bar.style.transition = 'width 1s ease';
        bar.style.width = percent;
        console.log(percent);
      }
    });
  }
}

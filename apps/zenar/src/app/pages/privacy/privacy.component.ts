import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent, HeaderComponent } from '@zenar/ui-kit';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyComponent implements OnInit {
  sectionIds = [
    'introduction',
    'information',
    'how-we-use',
    'disclosure',
    'contact',
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.highlightActiveSection();
  }

  ngOnInit(): void {
    this.highlightActiveSection();
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  highlightActiveSection() {
    let activeSectionId = '';
    this.sectionIds.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 300 && rect.bottom >= 300) {
          activeSectionId = sectionId;
        }
      }
    });

    this.setActiveLink(activeSectionId);
  }

  setActiveLink(activeSectionId: string) {
    const links = document.querySelectorAll('.sections ul li');

    links.forEach((link) => {
      link.classList.remove('active');
    });

    if (activeSectionId) {
      const activeLink = document.getElementById(
        `link-${activeSectionId}`
      )?.parentElement;

      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  }
}

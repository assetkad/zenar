import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent, HeaderComponent } from '@zenar/ui-kit';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './howItWorks.component.html',
  styleUrl: './howItWorks.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HowItWorksComponent {}

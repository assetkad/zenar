import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent, HeaderComponent } from '@zenar/ui-kit';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, MatButtonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'zenar-header',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatInputModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(private route: Router) {}

  redirectToSignup() {
    this.route.navigate(['register']);
  }

  redirectToLogin() {
    this.route.navigate(['login']);
  }
}

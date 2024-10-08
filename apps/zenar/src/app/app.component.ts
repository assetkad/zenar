import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'zenar';

  constructor(private route: Router) {}

  redirectToSignup() {
    this.route.navigate(['register']);
  }
}

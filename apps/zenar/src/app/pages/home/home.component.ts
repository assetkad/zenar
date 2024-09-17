import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ThemeService } from '../../services/theme.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  CarouselComponent,
  FooterComponent,
  HeaderComponent,
} from '@zenar/ui-kit';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    RouterLink,
    CarouselComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  slides: { src: string }[] = [];

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.slides[0] = {
      src: '../../assets/sliderHome/message.png',
    };
    this.slides[1] = {
      src: '../../assets/sliderHome/message2.png',
    };
    this.slides[2] = {
      src: '../../assets/sliderHome/message3.png',
    };
    this.slides[3] = {
      src: '../../assets/sliderHome/message4.png',
    };
    this.slides[4] = {
      src: '../../assets/sliderHome/message5.png',
    };
    this.slides[5] = {
      src: '../../assets/sliderHome/message6.png',
    };
    this.slides[6] = {
      src: '../../assets/sliderHome/message7.png',
    };
    this.slides[7] = {
      src: '../../assets/sliderHome/message8.png',
    };
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'zenar-ui-kit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-kit.component.html',
  styleUrl: './ui-kit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiKitComponent {}

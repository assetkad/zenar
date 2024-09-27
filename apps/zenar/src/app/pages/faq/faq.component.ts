import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf, NgSwitch } from '@angular/common';
import { FooterComponent, HeaderComponent } from '@zenar/ui-kit';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';

interface TreeNode {
  name: string;
  children?: TreeNode[];
}
@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    MatTreeModule,
    MatIconModule,
    NgIf,
    NgSwitch,
    NgFor,
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqComponent {
  dataSource: TreeNode[] = [
    {
      name: 'General Information',
      children: [
        { name: 'What is ZENAR?' },
        {
          name: 'What types of devices can be covered under ZENAR protection plans?',
        },
      ],
    },
    {
      name: 'Plan and Pricing',
      children: [{ name: 'Something' }, { name: 'Something lorem' }],
    },
    {
      name: 'Another tag',
      children: [{ name: 'Something' }, { name: 'Something lorem' }],
    },
  ];

  // Переменная для отслеживания индекса раскрытого узла
  expandedNodeIndex: number | null = 0;

  toggleNode(index: number): void {
    // Если узел уже раскрыт, закрываем его
    if (this.expandedNodeIndex === index) {
      this.expandedNodeIndex = null;
    } else {
      // Иначе раскрываем новый узел и закрываем остальные
      this.expandedNodeIndex = index;
    }
  }

  // Метод для проверки, раскрыт ли узел
  isExpanded(index: number): boolean {
    return this.expandedNodeIndex === index;
  }
}

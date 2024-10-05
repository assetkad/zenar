import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, NgFor, NgIf, NgSwitch } from '@angular/common';
import { FooterComponent, HeaderComponent } from '@zenar/ui-kit';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';

interface TreeNode {
  name: string;
  children?: TreeNode[];
}
@Component({
  selector: 'app-faq',
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
  sectionIds = [
    'information',
    'plans-and-pricing',
    'claims',
    'security',
    'refunds',
    'support',
  ];

  dataSource: TreeNode[] = [
    {
      name: 'General Information',
      children: [
        { name: 'What is ZENAR?' },
        {
          name: 'What types of devices can be covered under ZENAR protection plans?',
        },
        {
          name: 'When does my coverage start?',
        },
        { name: 'How long does the protection last?' },
        {
          name: 'Can I buy ZENAR protection after purchasing a device?',
        },
        {
          name: 'How do I register for ZENAR protection?',
        },
        {
          name: 'Can I purchase protection for a device not bought from a ZENAR partner?',
        },
        {
          name: 'What is the difference between ZENAR and an extended warranty?',
        },
        {
          name: 'I already have the manufacturer’s guarantee. Why do I need ZENAR?',
        },
      ],
    },
    {
      name: 'Plan and Pricing',
      children: [{ name: 'Something' }, { name: 'Something lorem' }],
    },
    {
      name: 'Claims',
      children: [{ name: 'Something' }, { name: 'Something lorem' }],
    },
    {
      name: 'Device Security and Data',
      children: [{ name: 'Something' }, { name: 'Something lorem' }],
    },
    {
      name: 'Refunds and Compensation',
      children: [{ name: 'Something' }, { name: 'Something lorem' }],
    },
    {
      name: 'Account and Technical Support',
      children: [{ name: 'Something' }, { name: 'Something lorem' }],
    },
  ];

  expandedNodeIndex: number | null = 0;

  toggleNode(index: number): void {
    if (this.expandedNodeIndex === index) {
      this.expandedNodeIndex = null;
    } else {
      this.expandedNodeIndex = index;
    }
  }

  isExpanded(index: number): boolean {
    return this.expandedNodeIndex === index;
  }
}

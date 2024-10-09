import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent, HeaderComponent } from '@zenar/ui-kit';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-coverage-plans',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    MatButtonModule,
    FooterComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './coverage-plans.component.html',
  styleUrl: './coverage-plans.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoveragePlansComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      price: [''],
      currency: ['usd'],
      plan: ['basic'],
    });
  }

  selectPlan(plan: string) {
    this.myForm.patchValue({ plan });
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}

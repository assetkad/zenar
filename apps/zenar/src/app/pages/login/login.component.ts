import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  NgModel,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

/**
 * Use this type to make any interface to FormGroup.
 *
 * @description
 * - All objects except for Date will become FormGroups
 * - All primitives and Date will become FormControls
 * - All arrays will become FormArrays. Note: if your control accepts values as an array,
 * you should implement separate interface for the form.
 */
export type TypedFormModel<T> = [T] extends [Array<unknown>]
  ? FormArray<TypedFormModel<T[number]>>
  : [T] extends [Date]
  ? FormControl<T>
  : [T] extends [object]
  ? FormGroup<{ [key in keyof T]: TypedFormModel<T[key]> }>
  : FormControl<T>;

export interface LoginModel {
  email: string;
  password: string;
  remember: boolean;
}

export interface LanguageModel {
  name: string;
}

export type LoginModelForm = TypedFormModel<LoginModel>;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    MatSelectModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  form!: LoginModelForm;

  languages: LanguageModel[] = [
    { name: 'English' },
    { name: 'Russian' },
    { name: 'Uzbek' },
  ];

  hide = true;
  selectedLanguage: { name: string } = this.languages[0];

  constructor(public http: HttpClient, private fb: NonNullableFormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: this.fb.control('', {
        validators: Validators.required,
      }),
      password: this.fb.control('', {
        validators: Validators.required,
      }),
      remember: this.fb.control(false),
    });
  }

  get emailInput() {
    return this.form.controls.email;
  }
  get passwordInput() {
    return this.form.controls.password;
  }

  onLanguageChange(language: LanguageModel): void {
    this.selectedLanguage = language;
  }

  login() {
    this.http
      .post('http://api.zenar.world:8080/api/users/login', {
        email: this.form.controls.email.value,
        password: this.form.controls.password.value,
      })
      .subscribe({
        next: (res) => {
          console.log(res);
        },
      });
  }
}

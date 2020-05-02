import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'testControls';
  form: FormGroup;

  allBlogTypes = [null, 1, 2];

  allCities: any = [
    'Florida',
    'South Dakota',
    'Tennessee',
    'Michigan',
    'New York',
  ];

  constructor(protected readonly fb: FormBuilder) {
    this.form = this.fb.group({
      name1: [
        'default value',
        {
          validators: [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(10),
          ],
        },
      ],
      name2: [null],
      description1: [null, { validators: [Validators.required] }],
      description2: [null],
      active1: [null, { validators: [Validators.required] }],
      active2: [null],
      brightness1: [null, { validators: [Validators.required] }],
      brightness2: [null],
      date1: [null, { validators: [Validators.required] }],
      date2: [null],
      costs1: [null, { validators: [Validators.required] }],
      costs2: [null],
      blogType1: [null, [Validators.required]],
      blogType2: [null],
      cities1: [null, [Validators.required]],
      cities2: [null],
    });
  }

  ngOnInit(): void {
    this.form.patchValue({
      name1: null,
      name2: null,
      description1: null,
      description2: null,
      active1: null,
      active2: null,
      date1: null,
      date2: null,
      costs1: null,
      costs2: null,
      blogType1: null,
      blogType2: null,
      cities1: null,
      cities2: null,
    });
  }

  saveMe() {
    console.warn(this.form.value);
  }

  showErrors() {
    for (const control in this.form.controls) {
      if (this.form.controls.hasOwnProperty(control)) {
        const element = this.form.controls[control];
        if (!!element?.errors) {
          for (const error in element.errors) {
            if (element.errors.hasOwnProperty(error)) {
              const err = element.errors[error];
              console.warn(control, error, err);
            }
          }
        }
      }
    }
  }
}

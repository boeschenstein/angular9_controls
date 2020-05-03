import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'testControls Angular 9';
  form: FormGroup;

  allBlogTypes = [null, 1, 2];

  allCategories = [
    { key: '1', value: 'Cat 1' },
    { key: '2', value: 'Cat 2' },
    { key: '3', value: 'Cat 3' },
  ];

  allCities: any = ['Bern', 'Zürich', 'Luzern', 'Frauenfeld', 'Basel'];

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
      category1: [null, [Validators.required]],
      category2: [null],
      cities1: [null, [Validators.required]],
      cities2: [null],
    });
  }

  ngOnInit(): void {
    this.setEmptyValues();
  }

  setEmptyValues(): void {
    this.form.patchValue({
      name1: null,
      name2: null,
      description1: null,
      description2: null,
      active1: null,
      active2: null,
      brightness1: null,
      brightness2: null,
      date1: null,
      date2: null,
      costs1: null,
      costs2: null,
      blogType1: null,
      blogType2: null,
      category1: null,
      category2: null,
      cities1: null,
      cities2: null,
    });
  }

  setValues() {
    this.form.patchValue({
      name1: 'name 1',
      name2: 'name 2',
      description1: 'desc 1',
      description2: 'desc 2',
      active1: true,
      active2: false,
      brightness1: 'black',
      brightness2: '',
      date1: new Date().toISOString().split('T')[0], // remove time portion
      date2: '2019-05-30',
      costs1: 123.456,
      costs2: -1234.5678,
      blogType1: 1,
      blogType2: 2,
      category1: '3',
      category2: '2',
      cities1: ['Bern', 'Zürich'],
      cities2: ['Basel'],
    });
  }
  setMandatoryValues() {
    this.form.patchValue({
      name1: 'name 1',
      name2: null,
      description1: 'desc 1',
      description2: null,
      active1: true,
      active2: null,
      brightness1: 'black',
      brightness2: null,
      date1: new Date().toISOString().split('T')[0], // remove time portion
      date2: null,
      costs1: 123.456,
      costs2: null,
      blogType1: 1,
      blogType2: null,
      category1: '3',
      category2: null,
      cities1: ['Bern', 'Zürich'],
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

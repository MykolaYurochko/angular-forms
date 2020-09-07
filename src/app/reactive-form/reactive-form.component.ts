import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {

  form: FormGroup;

  get emailsArr() {
    return this.form.get('emails') as FormArray;
  }
  constructor() {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      emails: new FormArray([new FormControl('', [Validators.required, Validators.email])]),
      pass: new FormControl('', Validators.required)
    }, this.passValidator.bind(this));
  }

  addItem() {
    this.emailsArr.push(new FormControl('', [Validators.required, Validators.email]));
  }

  removeItem(i: number) {
    this.emailsArr.removeAt(i);
  }

  submit() {
    console.log(this.form.value);
  }

  passValidator(form: FormGroup): null | object {
    const { value: pass } = form.controls.pass;
    const lower = /[a-z]/g;
    const upper = /[A-Z]/g;
    const numbers = /[0-9]/g;
    return pass.match(lower) && pass.match(upper) && pass.match(numbers)
      ? null
      : { passError: true };
  }
}

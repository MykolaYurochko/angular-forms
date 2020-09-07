import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-driven-form',
  templateUrl: './driven-form.component.html',
  styleUrls: ['./driven-form.component.scss']
})

export class DrivenFormComponent {

  @ViewChild('myForm') myForm: NgForm;

  submit() {
    console.log(this.myForm.value);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {

  reactForm: FormGroup;
  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.email, Validators.required, this.ValidateEmail]);
  constructor() { }

  ngOnInit() {
    this.reactForm = new FormGroup({
      name: this.name,
      email: this.email
    });
  }

  savedata(data) {
    console.log(data);
  }
  ValidateEmail(Custom: AbstractControl) {
    if (Custom.value === ('vitheesh@gmail.com')) {
      return null;
    } else {
      return {validUrl: true};
    }
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  Name;
  Email;
  constructor() {
   }

  ngOnInit() {
  }
savedata(data) {
  console.log(data);
}
}

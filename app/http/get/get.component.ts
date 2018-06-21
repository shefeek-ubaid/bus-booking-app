import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../../shared/services/ajax.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  constructor(private dataSer: AjaxService) { }

  ngOnInit() {
  }

  getData() {
   this.dataSer.getBusList().subscribe(
    res => {
      console.log(res);
    }

   );
  }
}

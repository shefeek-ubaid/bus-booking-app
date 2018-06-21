import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges, OnDestroy {

  value = 0;
  constructor() { }

  ngOnInit() {
    console.log('on init ');
  }
  ngOnChanges(): void {
    console.log('on change ');
  }
  ngOnDestroy(): void {
    console.log('on destroy ');
  }

  changeValue() {
    this.value = 1;
  }
}

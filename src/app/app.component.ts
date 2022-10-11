import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Parent Child Commnication ';
  arryaItem = [];
  // arryaItem:[] = []
  constructor() {}

  ngOnInit() {
    this.arryaItem = [
      {
      name:"Pankaj",
      emplyeId:"5000",
      designation:'Angular developper1'
    },
    {
      name:"Bisht",
      emplyeId:"7000",
      designation:'Angular developper'
    },
    {
      name:"Bisht",
      emplyeId:"7000",
      designation:'Angular Advance developper'
    }
  ];
    console.log(this.arryaItem)
  }
  // userbind:string = "Chetu"
}

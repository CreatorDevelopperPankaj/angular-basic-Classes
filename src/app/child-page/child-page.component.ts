import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child-page',
  templateUrl: './child-page.component.html',
  styleUrls: ['./child-page.component.css'],
})
export class ChildPageComponent implements OnInit, OnChanges {
  @Input() arryaItem: object;
  getInputCurrentValues = [];
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.getInputCurrentValues = changes.arryaItem.currentValue;
    console.log(this.getInputCurrentValues);
  }
  ngOnInit() {}
}

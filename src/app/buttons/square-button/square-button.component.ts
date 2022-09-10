import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-square-button',
  templateUrl: './square-button.component.html',
  styleUrls: ['./square-button.component.less'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SquareButtonComponent implements OnInit {
  @Input()
  buttonText: string = 'Click';
  constructor() {}

  ngOnInit(): void {}
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square-button',
  templateUrl: './square-button.component.html',
  styleUrls: ['./square-button.component.less'],
})
export class SquareButtonComponent implements OnInit {
  @Input()
  buttonText: string = 'Click';
  constructor() {}

  ngOnInit(): void {}
}

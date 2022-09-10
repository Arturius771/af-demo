import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquareButtonComponent } from './square-button/square-button.component';

@NgModule({
  declarations: [SquareButtonComponent],
  imports: [CommonModule],
  exports: [SquareButtonComponent],
})
export class ButtonsModule {}

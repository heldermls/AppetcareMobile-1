import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestePage } from './teste';

@NgModule({
  declarations: [
    TestePage,
  ],
  imports: [
    IonicPageModule.forChild(TestePage),
  ],
  exports: [
    TestePage
  ]
})
export class TestePageModule {}

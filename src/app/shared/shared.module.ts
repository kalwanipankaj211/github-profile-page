import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppMaterialModule} from './app-material/app-material.module';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [AppMaterialModule],
  declarations: []
})
export class SharedModule { }

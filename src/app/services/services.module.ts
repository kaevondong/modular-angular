import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesRoutingModule } from './services-routing.module';
import { HighlightDirective } from './services-home/highlight.directive';


@NgModule({
  declarations: [
    HighlightDirective
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }

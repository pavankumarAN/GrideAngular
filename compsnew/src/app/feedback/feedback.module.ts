import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackRoutingModule } from './feedback-routing.module';
import { FeedbackHomeComponent } from './feedback-home/feedback-home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [FeedbackHomeComponent],
  imports: [
    CommonModule,
    FeedbackRoutingModule,
    SharedModule
  ]
})
export class FeedbackModule { }

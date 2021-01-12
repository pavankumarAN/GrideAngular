import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedbackHomeComponent } from './feedback-home/feedback-home.component';


const routes: Routes = [
  {path:'', component:FeedbackHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbackRoutingModule { }

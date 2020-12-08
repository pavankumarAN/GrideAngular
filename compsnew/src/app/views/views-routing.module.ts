import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewsHomeComponentComponent } from './views-home-component/views-home-component.component';


const routes: Routes = [
  {
    path:'',
    component: ViewsHomeComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }

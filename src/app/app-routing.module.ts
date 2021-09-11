import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './blank/blank.component';
import { FirstComponent } from './first/first.component';
import { InvalidComponent } from './invalid/invalid.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  {path:'',component:BlankComponent},
  {path:'First', component : FirstComponent},
  {path:'Second', component :SecondComponent},
  {path:'**',component:InvalidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

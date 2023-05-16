import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './car/car.component';
import { CarDetailsComponent } from './car-details/car-details.component';

const routes: Routes = [
  {path:'', component: CarComponent},
  {path:'car', component: CarDetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

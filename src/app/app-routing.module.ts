import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: MyDashboardComponent},
  { path: 'bookings', component: BookingsComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

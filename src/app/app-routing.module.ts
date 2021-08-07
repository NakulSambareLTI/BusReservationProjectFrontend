import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { changePassword } from './change-password/changePassword';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { SeatReservationComponent } from './seat-reservation/seat-reservation.component';
const routes: Routes = [
  { path: 'dashboard', component: MyDashboardComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'change-password',component:ChangePasswordComponent},
  {path: 'seat-reservation',component:SeatReservationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

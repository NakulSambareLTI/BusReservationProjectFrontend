import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { ChangePasswordComponent } from './change-password/change-password.component';
import { changePassword } from './change-password/changePassword';
=======
import { BookingsComponent } from './bookings/bookings.component';
>>>>>>> 1efd571f1b47f6677b6b72619263fb5ba3f71c4f
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { SeatReservationComponent } from './seat-reservation/seat-reservation.component';
const routes: Routes = [
  { path: 'dashboard', component: MyDashboardComponent},
<<<<<<< HEAD
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'change-password',component:ChangePasswordComponent},
  {path: 'seat-reservation',component:SeatReservationComponent}
=======
  { path: 'bookings', component: BookingsComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
>>>>>>> 1efd571f1b47f6677b6b72619263fb5ba3f71c4f
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

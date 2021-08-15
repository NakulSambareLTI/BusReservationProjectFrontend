import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminOperationsComponent } from './admin-operations/admin-operations.component';



import { BookingsComponent } from './bookings/bookings.component';
import { CancelReservationComponent } from './cancel-reservation/cancel-reservation.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeedbackComponent } from './feedback/feedback.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';

import { SeatReservationComponent } from './seat-reservation/seat-reservation.component';
import { TermsofuseComponent } from './termsofuse/termsofuse.component';
import { WalletComponent } from './wallet/wallet.component';
const routes: Routes = [
  { path: 'dashboard', component: MyDashboardComponent},

  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {path: 'seat-reservation',component:SeatReservationComponent},
  {path : 'termsofuse',component : TermsofuseComponent},
  {path: 'aboutus',component: AboutComponent},
  {path: 'feedback',component: FeedbackComponent},
  {path: 'contactus',component:ContactUsComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'login',component:LoginComponent},
  { path: 'bookings', component: BookingsComponent},
  {path : 'changePassword', component : ChangePasswordComponent},
  {path : 'home',component : HomeComponent},
  {path : 'wallet',component : WalletComponent},
  {path : 'payment',component : PaymentComponent},
  {path : 'admin-login',component : AdminLoginComponent},
  {path : 'admin-operations',component : AdminOperationsComponent},
  {path : 'cancel-reservation',component : CancelReservationComponent}






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';


import { NgbModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { BookingsComponent } from './bookings/bookings.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HomeComponent } from './home/home.component';
import { TermsofuseComponent } from './termsofuse/termsofuse.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { WalletComponent } from './wallet/wallet.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { SeatReservationComponent } from './seat-reservation/seat-reservation.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminOperationsComponent } from './admin-operations/admin-operations.component';
import { CancelReservationComponent } from './cancel-reservation/cancel-reservation.component';
@NgModule({
  declarations: [
    AppComponent,
    MyDashboardComponent,
    BookingsComponent,
    ChangePasswordComponent,
    HomeComponent,
    TermsofuseComponent,
    AboutComponent,
    ContactUsComponent,
    FeedbackComponent,
    WalletComponent,
    RegisterComponent,
    LoginComponent,
    SeatReservationComponent,
    PaymentComponent,
    AdminLoginComponent,
    AdminOperationsComponent,
    CancelReservationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbAlertModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

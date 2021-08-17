import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Wallet } from './wallet/wallet';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  baseURL: String = 'http://localhost:8085/CustomerWallet/';
  constructor(private myhttp: HttpClient) { }




  createWallet(cWallet: Wallet): Observable<any> {
    console.log('calling create wallet')
    //console.log(this.baseURL + "createWallet" + email + "/" + pin);
    return this.myhttp.post<any>(this.baseURL + "createWallet", cWallet);
  }


  addBalance(cWallet: Wallet): Observable<any> {
    console.log('calling add balance')
    console.log(this.baseURL + "addbalance", cWallet);
    return this.myhttp.post<any>(this.baseURL + "addBalance", cWallet);
  }

wallet : Wallet = new Wallet();
  procesWalletPayment(wallet : Wallet): Observable<any>
  {


    console.log("process payment");
    return this.myhttp.post<any>(this.baseURL +"processWalletPayment",wallet);
  }

}






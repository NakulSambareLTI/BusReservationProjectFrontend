import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { WalletService } from '../wallet.service';
import { Wallet } from './wallet';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {




  walletDescription: boolean = false;
  createWallet: boolean = false;
  addMoney: boolean = false;

  walletobj: Wallet = new Wallet();

  userEmail : string;
  constructor(private custWalletservice: WalletService) {
    /*  this.walletobj.registeredEmail = "";
      this.walletobj.walletPin = "";
      this.walletobj.walletAmount = 0;
     */
      this.userEmail = sessionStorage.getItem('userKey');
      console.log("User email",this.userEmail);
  }

  walletDescriptionMethod() {
    this.walletDescription = true;
    this.createWallet = false;
    this.addMoney = false;
  }

  createWalletMethod() {
    this.walletDescription = false;
    this.createWallet = true;
    this.addMoney = false;
  }
 confirmPin : string;

  persistWallet() {
    if (this.confirmPin == this.walletobj.walletPin) {
      console.log('in persist');
      this.custWalletservice.createWallet(this.walletobj).subscribe(data => console.log(data), error => console.log(error));
    }
    else {
      console.log('Please enter the same pin in both the feilds');
    }
  }

  addAmount() {
    console.log('in add amount');
    this.custWalletservice.addBalance(this.walletobj).subscribe(data => console.log(data), error => console.log(error));
      alert("Money added to your wallet")
  }

  addMoneytMethod() {
    this.walletDescription = false;
    this.createWallet = false;
    this.addMoney = true;

  }

  ngOnInit(): void {
  }



}




import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  walletDescription : boolean=false;
  createWallet : boolean =false;
  addMoney : boolean = false;
  constructor() { }
  walletDescriptionMethod()
  {
    this.walletDescription=true;
    this.createWallet=false;
    this.addMoney=false;
  }

  createWalletMethod()
  {
    this.walletDescription=false;
    this.createWallet=true;
    this.addMoney=false;
  }

 addMoneytMethod()
  {
    this.walletDescription=false;
    this.createWallet=false;
    this.addMoney=true;
  }
  ngOnInit(): void {
  }

}

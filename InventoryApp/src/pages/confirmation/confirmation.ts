import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PageDetails } from '../../model/pageDetails';
import { Constants } from '../../app/constants';
import { StateProvider } from '../../providers/state/state';

@IonicPage()
@Component({
  selector: 'page-confirmation',
  templateUrl: 'confirmation.html',
  providers: [StateProvider]
})

export class ConfirmationPage {
  pageDetails: PageDetails;
  pageName: string;
  vin: string;
  constants = new Constants();
  @Input() secondsRemaining: number;

  constructor(private navCtrl: NavController, private navParams: NavParams, 
    private stateProvider: StateProvider) {
      this.vin = this.navParams.get(this.constants.VIN_LITERAL);
      this.pageDetails = this.stateProvider.getPageDetails(this.navParams.get(this.constants.PAGE_NAME_LITERAL));
  }

  ionViewDidLoad() {
    this.secondsRemaining = this.constants.TOTAL_COUNTDOWN_SECONDS;
    this.countdown();
  }

  goToHomePage() {
    this.navCtrl.popToRoot();
    this.secondsRemaining = 0;
  }

  countdown() {
    setTimeout(() => {
      if(this.secondsRemaining > 1) {
        this.secondsRemaining -= 1; 
        this.countdown(); 
      } else { 
        if(this.secondsRemaining == 1) {
          this.goToHomePage();
        }
      } 
    }, 1000);
  }
}


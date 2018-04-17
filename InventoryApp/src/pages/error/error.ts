import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PageDetails } from '../../model/pageDetails';
import { StateProvider } from '../../providers/state/state';
import { Constants } from '../../app/constants';

@IonicPage()
@Component({
  selector: 'page-error',
  templateUrl: 'error.html',
  providers: [StateProvider]
})

export class ErrorPage {
  pageDetails: PageDetails;
  constants = new Constants();

  constructor(private navCtrl: NavController, private navParams: NavParams,
    private stateProvider: StateProvider) { 
      this.pageDetails = this.stateProvider.getErrorDetails(this.navParams.get(this.constants.ERROR_LITERAL));
  }

  goToHomePage() {
    this.navCtrl.popToRoot();
  }
}

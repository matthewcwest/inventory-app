import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

import { HomePage } from '../home/home';
import { ActionsPage } from '../actions/actions';
import { VehicleDetails } from '../../model/vehicleDetails';
import { Constants } from '../../app/constants';

import { VinHandlerProvider } from '../../providers/vin-handler/vin-handler';

@IonicPage()
@Component({
  selector: 'page-manual-vin',
  templateUrl: 'manual-vin.html',
  providers: [VinHandlerProvider]
})

export class ManualVinPage {
  vehicleDetails = new VehicleDetails();
  constants = new Constants();

  constructor(public navCtrl: NavController, private vinHandlerProvider: VinHandlerProvider,
    private nativePageTransitions: NativePageTransitions) {
  }

  enterVIN(vin) {
    if(vin == null) { return }    
    let vehicleDetails = new VehicleDetails(vin,null,null,null,false);
    this.vinHandlerProvider.getVINState(vehicleDetails)
        .then(csv => {
            this.navCtrl.push(ActionsPage, { vehicleDetails: vehicleDetails, currentVehicleState: csv });
        });
  }

  goToHomePage(){
    let options: NativeTransitionOptions = {
      direction: this.constants.DIRECTION_DOWN
     };
     this.nativePageTransitions.slide(options);
     this.navCtrl.push(HomePage, {}, {animate: false});
  }
}

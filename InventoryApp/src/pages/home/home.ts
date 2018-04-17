import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';

import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { Flashlight } from '@ionic-native/flashlight';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

import { ManualVinPage } from '../manual-vin/manual-vin';
import { ActionsPage } from '../actions/actions';
import { VehicleDetails } from '../../model/vehicleDetails';
import { Constants } from '../../app/constants';

import { VinHandlerProvider } from '../../providers/vin-handler/vin-handler';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [VinHandlerProvider, Flashlight, BarcodeScanner]
})

export class HomePage {
  manualVinPage = ManualVinPage;
  options: BarcodeScannerOptions = { showTorchButton: true };
  vehicleDetails: VehicleDetails;
  constants = new Constants();

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner,
    private vinHandlerProvider: VinHandlerProvider, private flashlight: Flashlight,
    private nativePageTransitions: NativePageTransitions, public viewCtrl: ViewController) {
      if (this.navCtrl != null) {
        this.navCtrl.popToRoot();
      }
  }

  processBarcode() {
    this.flashlight.switchOn();
    this.barcodeScanner.scan(this.options)
        .then((result) => {
                this.flashlight.switchOff();
                if (!result.cancelled) {
                    let vin = result.text;
                    let vehicleDetails = new VehicleDetails(this.trimVIN(vin, this.constants.VIN_TRIM_CHARACTER), null, null, null, true);
                    this.vinHandlerProvider.getVINState(vehicleDetails)
                            .then(csv => {
                                this.navCtrl.push(ActionsPage, { vehicleDetails: vehicleDetails, currentVehicleState: csv });
                                this.vehicleDetails = vehicleDetails;
                    });
                }
        });
  }

  trimVIN(string, charToRemove) {
    while (string.charAt(0) == charToRemove) {
      string = string.substring(1);
    }
    return string;
  }

  goToManualVIN(){
    let options: NativeTransitionOptions = {
      direction: this.constants.DIRECTION_UP
     };
     this.nativePageTransitions.slide(options);
     this.navCtrl.push(ManualVinPage, {}, {animate: false});
  }
}
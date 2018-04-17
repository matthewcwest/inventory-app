import { Injectable } from '@angular/core';
import { AlertController, NavController, LoadingController, Loading } from 'ionic-angular';
import { HttpProvider } from '../http/http';

import { VinValidationProvider } from '../vin-validation/vin-validation';
import { VehicleDetails } from '../../model/vehicleDetails';
import { CurrentVehicleState } from '../../model/currentVehicleState';
import { Objects } from '../../model/objects';
import { Constants } from '../../app/constants';
import { ErrorPage } from '../../pages/error/error';

@Injectable()
export class VinHandlerProvider {
    currentVehicleState = new CurrentVehicleState();
    objects = new Objects();
    constants = new Constants();
    loading: Loading;

    constructor(private httpProvider: HttpProvider, private alertCtrl: AlertController,
        private navCtrl: NavController, private vinValidationProvider: VinValidationProvider,
        private loadingCtrl: LoadingController) {
    }

    getVINState(details: VehicleDetails) {
        if(this.loadingCtrl != null) {
            this.loading = this.loadingCtrl.create({
                spinner: this.constants.LOADING_CONTROLLER_SPINNER_NAME,
                content: this.constants.LOADING_CONTROLLER_CONTENT,
                dismissOnPageChange: true
            });
            this.loading.present();
        }
        return new Promise<CurrentVehicleState>((resolve, reject) => {
            this.vinValidationProvider.validateVin(details.VIN)
                .then(() => {
                    this.httpProvider.sendGetRequest(details.VIN)
                        .subscribe(
                            data => {
                                this.currentVehicleState.isInInventory = data['IsInInventory'];
                                this.currentVehicleState.vehicleState = data['VehicleState'];
                                if (this.loadingCtrl != null){ this.loading.dismiss(); }                           
                                resolve(this.currentVehicleState);
                            }, 
                            err => {
                                if (this.loadingCtrl != null) { this.loading.dismiss(); }                           
                                if (err.status != null && err.status == this.constants.WIFI_ERROR_NUMBER) {
                                    this.navCtrl.push(ErrorPage, { error: this.constants.WIFI_ERROR_DESCRIPTOR });
                                } else {
                                    this.navCtrl.push(ErrorPage);
                                }
                            }
                        );
                    }
                )
                .catch(() => {
                    if (this.loadingCtrl != null) { this.loading.dismiss(); }                    
                    let alert = this.alertCtrl.create(this.objects.INVALID_VIN_MODAL_DATA);
                    alert.present();
                });
        });
    }
}
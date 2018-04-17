import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';

import { HomePage } from '../home/home';
import { ConfirmationPage } from '../confirmation/confirmation';
import { ErrorPage } from '../error/error';

import { MenuItem } from '../../model/menuItem';
import { VehicleDetails } from '../../model/vehicleDetails';
import { CurrentVehicleState } from '../../model/currentVehicleState';
import { Constants } from '../../app/constants';

import { GeolocationProvider } from '../../providers/geolocation/geolocation';
import { HttpProvider } from '../../providers/http/http';
import { MenuProvider } from '../../providers/menu/menu';

@IonicPage()
@Component({
  selector: 'page-actions',
  templateUrl: 'actions.html',
  providers: [GeolocationProvider, HttpProvider, MenuProvider]
})

export class ActionsPage {
  homePage = HomePage;
  loading: Loading;
  menuItems: Array<MenuItem>;
  vehicleDetails = new VehicleDetails();
  currentVehicleState: CurrentVehicleState;
  constants = new Constants();

  constructor(public navCtrl: NavController, private navParams: NavParams, 
    private geoLocationProvider: GeolocationProvider, private httpProvider: HttpProvider, 
    private menuProvider: MenuProvider, private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    this.vehicleDetails = this.navParams.get(this.constants.VEHICLE_DETAILS_LITERAL);
    this.currentVehicleState = this.navParams.get(this.constants.CURRENT_VEHICLE_STATE_LITERAL);
    this.menuItems = this.menuProvider.getMenuItems(this.currentVehicleState);
  }

  goToHomePage() {
    this.navCtrl.popToRoot();
  }

  goToSelectedItem(item) {
      if (this.loadingCtrl != null) {
        this.loading = this.loadingCtrl.create({
            spinner: this.constants.LOADING_CONTROLLER_SPINNER_NAME,
            content: this.constants.LOADING_CONTROLLER_CONTENT,
            dismissOnPageChange: true
        });
        this.loading.present();
    }
    this.vehicleDetails.VehicleState = item.state;
    this.geoLocationProvider.getLocation()
      .then((resp) => {
        this.vehicleDetails.CurrentLatitude = resp.coords.latitude;
        this.vehicleDetails.CurrentLongitude = resp.coords.longitude;
        this.httpProvider.sendPostRequest(this.vehicleDetails)
            .subscribe(
              data => {
                if (this.loadingCtrl != null) { this.loading.dismiss(); }            
                this.navCtrl.push(ConfirmationPage, { vin: this.vehicleDetails.VIN, pageName: item.title });
              },
              err => {
                if (this.loadingCtrl != null) { this.loading.dismiss(); }            
                if (err.status == this.constants.WIFI_ERROR_NUMBER) {
                  this.navCtrl.push(ErrorPage, { error: this.constants.WIFI_ERROR_DESCRIPTOR });
                } else {
                  this.navCtrl.push(ErrorPage);
                }
            });
      }).catch((error) => {
        if (this.loadingCtrl != null) { this.loading.dismiss(); }            
        this.navCtrl.push(ErrorPage);
      });
  }
}
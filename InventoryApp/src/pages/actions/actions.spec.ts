import { AlertController, IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { CurrentVehicleState } from '../../model/currentVehicleState';
import { ActionsPage } from '../actions/actions';
import { ErrorPage } from '../error/error';
import { ConfirmationPage } from '../confirmation/confirmation';
import { setTimeout } from 'core-js/library/web/timers';

import { MockHttpProvider } from '../../providers/http/mockhttp';
import { MockVinHandlerProvider } from '../../providers/vin-handler/mock-vin-handler';
import { VinValidationProvider } from '../../providers/vin-validation/vin-validation';
import { MenuProvider } from '../../providers/menu/menu';
import { MockGeolocationProvider } from '../../providers/geolocation/mockgeolocation';
import { Constants } from '../../app/constants';

describe('ActionsPage', () => {
    let actions: ActionsPage;
    let alertCtrl: AlertController;
    let navCtrl: NavController;
    let loadingCtrl: LoadingController;
    let httpProvider: MockHttpProvider;
    let vinHandlerProvider: MockVinHandlerProvider;
    let navParams: NavParams;
    let geoLocationProvider: MockGeolocationProvider;
    let geolocation: Geolocation;
    let menuProvider: MenuProvider;
    let vinValidationProvider: VinValidationProvider;
    let constants: Constants;

    beforeEach(() => { 
        constants = new Constants();
        vinHandlerProvider = new MockVinHandlerProvider(httpProvider, alertCtrl, navCtrl, vinValidationProvider, loadingCtrl); 
        geoLocationProvider = new MockGeolocationProvider(geolocation);
        actions = new ActionsPage(navCtrl, navParams, geoLocationProvider, httpProvider, menuProvider, loadingCtrl);
    });

    it(('should execute goToSelectedItem and navigate to the ConfirmationPage'), () => {
        actions.vehicleDetails.VIN = constants.GOOD_VIN;
        actions.goToSelectedItem({state: constants.CHECK_IN_MENU_STATE, title: constants.CHECK_IN_MENU_TITLE});
        setTimeout(() => {
            expect(typeof actions.navCtrl[0]).toEqual(typeof ConfirmationPage);
            expect(actions.vehicleDetails.CurrentLatitude).toEqual(35.908);
            expect(actions.vehicleDetails.CurrentLongitude).toEqual(-86.665);}, 500);
    });    
});
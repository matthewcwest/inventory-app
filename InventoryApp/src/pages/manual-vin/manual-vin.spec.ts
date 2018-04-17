import { HTTP, HTTPResponse } from '@ionic-native/http';
import { AlertController, NavController, LoadingController } from 'ionic-angular';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';

import { ActionsPage } from '../actions/actions';
import { ErrorPage } from '../error/error';
import { ManualVinPage } from './manual-vin';

import { MockVinHandlerProvider } from '../../providers/vin-handler/mock-vin-handler';
import { MockHttpProvider } from '../../providers/http/mockhttp';
import { VinValidationProvider } from '../../providers/vin-validation/vin-validation';
import { Constants } from '../../app/constants';

describe('ManualVinPage', () => {
    let manual: ManualVinPage;
    let vinhandler: MockVinHandlerProvider;
    let httpProvider: MockHttpProvider;
    let vinValidationProvider: VinValidationProvider;
    let alertCtrl: AlertController;
    let navCtrl: NavController;
    let loadingCtrl: LoadingController;
    let constants: Constants;
    let nativePageTransitions: NativePageTransitions;

    beforeEach(() => { 
        constants = new Constants();
        vinhandler = new MockVinHandlerProvider(httpProvider, alertCtrl, navCtrl, vinValidationProvider, loadingCtrl); 
        manual = new ManualVinPage(navCtrl, vinhandler, nativePageTransitions);
    });

    it(('should simulate the manual input of a valid VIN and navigate to the ActionsPage'), () => {
        manual.enterVIN(constants.GOOD_VIN);
        setTimeout(() => {
            expect(typeof manual.navCtrl[0]).toEqual(typeof ActionsPage);
            expect(manual.vehicleDetails.Scanned).toEqual(false);
            expect(manual.vehicleDetails.VIN).toEqual(constants.EMPTY_STRING);}, 500);
    });

    it(('should simulate the manual input of an invalid VIN and navigate to the ErrorPage'), () => {
        manual.enterVIN(constants.BAD_VIN);
        setTimeout(() => {
            expect(typeof manual.navCtrl[0]).toEqual(typeof ErrorPage);
            expect(manual.vehicleDetails.Scanned).toEqual(false);
            expect(manual.vehicleDetails.VIN).toEqual(constants.EMPTY_STRING);}, 500);
    });
});
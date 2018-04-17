import { HTTP, HTTPResponse } from '@ionic-native/http';
import { AlertController, IonicPage, NavController, LoadingController, ViewController } from 'ionic-angular';
import { MockFlashlight } from '../../providers/mockflashlight';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

import { MockBarcodeScanner } from '../../providers/mockbarcodescanner';
import { MockVinHandlerProvider } from '../../providers/vin-handler/mock-vin-handler';
import { MockHttpProvider } from '../../providers/http/mockhttp';
import { VinValidationProvider } from '../../providers/vin-validation/vin-validation';

import { ActionsPage } from '../actions/actions';
import { ErrorPage } from '../error/error';
import { HomePage } from './home';
import { setTimeout } from 'core-js/library/web/timers';
import { Constants } from '../../app/constants';

describe('HomePage', () => {
    let home: HomePage;
    let scanner: MockBarcodeScanner;
    let httpProvider: MockHttpProvider;
    let vinHandlerProvider: MockVinHandlerProvider;
    let vinValidationProvider: VinValidationProvider;
    let alertCtrl: AlertController;
    let loadingCtrl: LoadingController;
    let navCtrl: NavController;
    let viewCtrl: ViewController;
    let flashlight: MockFlashlight;
    let constants: Constants;
    let nativePageTransitions: NativePageTransitions;

    beforeEach(() => { 
        constants = new Constants();
        scanner = new MockBarcodeScanner();
        flashlight = new MockFlashlight();
        viewCtrl = new ViewController();
        vinHandlerProvider = new MockVinHandlerProvider(httpProvider, alertCtrl, navCtrl, vinValidationProvider, loadingCtrl); 
        home = new HomePage(navCtrl, scanner, vinHandlerProvider, flashlight, nativePageTransitions, viewCtrl);
    });

    it(('should simulate the barcode scan of a valid VIN and navigate to the ActionsPage'), () => {
        home.processBarcode();
        setTimeout(() => {
            expect(home.options.showTorchButton).toEqual(true);
            expect(typeof home.navCtrl[0]).toEqual(typeof ActionsPage);
            expect(home.vehicleDetails.VIN).toEqual(constants.GOOD_VIN);}, 500);
    });

    it(('should simulate the barcode scan of an invalid VIN and navigate to the ErrorPage'), () => {
        home.options = { showTorchButton: false };
        home.processBarcode();
        setTimeout(() => {
            expect(home.options.showTorchButton).toEqual(false);
            expect(typeof home.navCtrl[0]).toEqual(typeof ErrorPage);
            expect(home.vehicleDetails.VIN).toEqual(constants.BAD_VIN);}, 500);
    });
});
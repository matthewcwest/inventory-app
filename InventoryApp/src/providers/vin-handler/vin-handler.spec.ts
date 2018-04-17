import { AlertController, NavController, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { VinHandlerProvider } from './vin-handler';
import { VinValidationProvider } from '../vin-validation/vin-validation';
import { CurrentVehicleState } from '../../model/currentVehicleState';
import { VehicleDetails } from '../../model/vehicleDetails';
import { MockHttpProvider } from '../http/mockhttp';
import { Constants } from '../../app/constants';

describe('VinHandlerProvider', () => {
    let constants: Constants;
    let vinHandlerProvider: VinHandlerProvider;
    let httpProvider: MockHttpProvider;
    let alertCtrl: AlertController;
    let loadingCtrl: LoadingController;
    let navCtrl: NavController;
    let vinValidationProvider: VinValidationProvider;
    let vehicleDetails: VehicleDetails;
    let http: HttpClient;
    let cvsPromise = new Promise<CurrentVehicleState>((resolve, reject) => {
        resolve();
    });

    beforeEach(() => {
        constants = new Constants();
        httpProvider = new MockHttpProvider(http);
        vinValidationProvider = new VinValidationProvider();
        vinHandlerProvider = new VinHandlerProvider(httpProvider, alertCtrl, navCtrl, vinValidationProvider, loadingCtrl);
    });

    it('getVINState() should return a Promise<CurrentVehicleState> object ', () => {
        vehicleDetails = new VehicleDetails(constants.GOOD_VIN, constants.VEHICLE_STATE_CHECKED_IN, constants.TEST_LATITUDE_VALUE, constants.TEST_LONGITUDE_VALUE, true);
        expect(typeof vinHandlerProvider.getVINState(vehicleDetails)).toEqual(typeof cvsPromise);
    });
});
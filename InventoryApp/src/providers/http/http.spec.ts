import { HttpClient } from '@angular/common/http';
import { MockHttpProvider } from './mockhttp';
import { VinValidationProvider } from '../../providers/vin-validation/vin-validation';
import { resolve, reject } from 'q';
import { VehicleDetails } from '../../model/vehicleDetails';
import { CurrentVehicleState } from '../../model/currentVehicleState';
import { Constants } from '../../app/constants';
import { Observable } from 'rxjs/Observable';

describe('HttpProvider without the TestBed', () => {
    let service: MockHttpProvider;
    let http: HttpClient;
    let vinValidationProvider: VinValidationProvider;
    let constants: Constants;

    let getResponse = new Observable<CurrentVehicleState>();
    let postResponse = new Observable<Object>();

    beforeEach(() => { service = new MockHttpProvider(http); constants = new Constants(); });
   
    it('#sendGetRequest should return an Observable<CurrentVehicleState>', () => {
      expect(typeof service.sendGetRequest(constants.GOOD_VIN)).toEqual(typeof getResponse);
    });

    it('#sendPostRequest should return an Observable<Object>', () => {
      let details = new VehicleDetails(constants.EMPTY_STRING, constants.CHECK_IN_MENU_STATE, 10, 10, false);
      expect(typeof service.sendPostRequest(details)).toEqual(typeof postResponse);
    });    
  });
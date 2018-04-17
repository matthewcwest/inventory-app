import { Injectable } from '@angular/core';

import { CurrentVehicleState } from '../../model/currentVehicleState';
import { HttpProvider } from './http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MockHttpProvider extends HttpProvider {

    sendGetRequest(vin) {
        return new Observable<CurrentVehicleState>();
    }

    sendPostRequest(vehicleDetails) {
        return new Observable<Object>();
    }
}
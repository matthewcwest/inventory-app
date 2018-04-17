import { Injectable } from '@angular/core';

import { VehicleDetails } from '../../model/vehicleDetails';
import { CurrentVehicleState } from '../../model/currentVehicleState';
import { VinHandlerProvider } from '../../providers/vin-handler/vin-handler';

@Injectable()
export class MockVinHandlerProvider extends VinHandlerProvider {
    getVINState(details: VehicleDetails) {
        return new Promise<CurrentVehicleState>((resolve, reject) => {
            resolve(new CurrentVehicleState(true, details.VehicleState));
        });
    }
}
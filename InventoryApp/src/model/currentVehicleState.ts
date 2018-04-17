import { Constants } from '../app/constants';

export class CurrentVehicleState {
        constants = new Constants();

        constructor(
                public isInInventory?: boolean,
                public vehicleState?: string
        ){}
        
        reset(){
                this.vehicleState = null;
                this.isInInventory = null;
        }

        isValid() {
                return this.vehicleState != null && this.vehicleState.length > 0;
        }
}
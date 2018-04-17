export class VehicleDetails {
    constructor(
        public VIN?: string,
        public VehicleState?: string,
        public CurrentLatitude?: number,
        public CurrentLongitude?: number,
        public Scanned?: boolean
    ){}

    reset() {
        this.VIN = '';
        this.VehicleState = null;
        this.CurrentLatitude = null;
        this.CurrentLongitude = null;
        this.Scanned = null;
    }
}
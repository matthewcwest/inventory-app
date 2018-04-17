import { Injectable } from '@angular/core';
import { GeolocationMock } from '@ionic-native-mocks/geolocation';
import { GeolocationProvider } from './geolocation';

@Injectable()
export class MockGeolocationProvider extends GeolocationProvider {

  getLocation() {
      let gm = new GeolocationMock();
      return gm.getCurrentPosition();
  }
}

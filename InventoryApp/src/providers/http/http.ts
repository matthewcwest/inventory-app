import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Constants } from '../../app/constants';
import { CurrentVehicleState } from '../../model/currentVehicleState';
import { Objects } from '../../model/objects';

@Injectable()
export class HttpProvider { 
  constants = new Constants();
  objects = new Objects();
  headers: HttpHeaders;
  
  constructor(private http: HttpClient) { 
    this.headers = new HttpHeaders().set(this.constants.AUTHORIZATION_LITERAL, this.objects.AUTHORIZATON_HEADER);
    this.headers = this.headers.append(this.constants.CACHE_CONTROL_HEADER_NAME, this.constants.CACHE_CONTROL_HEADER_VALUE);
  }

  sendGetRequest(vin) {
    return this.http.get<CurrentVehicleState>(this.constants.ROOT_URL + this.constants.GET_PATH + vin, { headers: this.headers });
  }

  sendPostRequest(vehicleDetails) {
    return this.http.post(this.constants.ROOT_URL + this.constants.POST_PATH, vehicleDetails, { headers: this.headers });
  }
}
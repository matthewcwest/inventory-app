import { Injectable } from '@angular/core';

import { Constants } from '../../app/constants';
import { Objects } from '../../model/objects';

@Injectable()
export class StateProvider {
  objects = new Objects();
  constants = new Constants();

  constructor() {}

  getPageDetails(pageName) {
    return pageName == this.constants.CONFIRM_INV_MENU_TITLE ? this.objects.CONFIRM_PAGE_DETAILS :
        (pageName == this.constants.CHECK_IN_MENU_TITLE ?  this.objects.CHECK_IN_PAGE_DETAILS : this.objects.CHECK_OUT_PAGE_DETAILS); 
  }

  getErrorDetails (errorName) {
    return errorName == this.constants.WIFI_ERROR_DESCRIPTOR ? this.objects.WIFI_ERROR_PAGE_DETAILS : this.objects.GENERIC_ERROR_PAGE_DETAILS;
  }
}

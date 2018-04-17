import { Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ErrorPage } from '../../pages/error/error';

import { Constants } from '../../app/constants';
import { MenuItem } from '../../model/menuItem';
import { CurrentVehicleState } from '../../model/currentVehicleState';
import { Objects } from '../../model/objects';

@Injectable()
export class MenuProvider {
  items = new Array<MenuItem>();
  objects = new Objects();
  constants = new Constants();

  constructor(private navCtrl: NavController) { }

  getMenuItems(currentVehicleState: CurrentVehicleState) {
    if (currentVehicleState.isInInventory) {
      switch (currentVehicleState.vehicleState.toLowerCase()) {
        case this.constants.VEHICLE_STATE_CHECKED_IN:
        case this.constants.VEHICLE_STATE_CONFIRMED:
          this.items.push(this.objects.CONFIRM_INV_MENU_ITEM);
          this.items.push(this.objects.CHECK_OUT_MENU_ITEM);
          break;

        case this.constants.VEHICLE_STATE_CHECKED_OUT:
          this.items.push(this.objects.CHECK_IN_MENU_ITEM);
          break;

        default:
          this.navCtrl.push(ErrorPage);
      }
    }
    else {
      this.items.push(this.objects.CHECK_IN_MENU_ITEM);
    }

    return this.items;
  }
}
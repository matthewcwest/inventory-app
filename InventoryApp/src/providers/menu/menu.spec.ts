import { NavController } from 'ionic-angular';

import { MenuProvider } from './menu';
import { MenuItem } from "../../model/menuItem";
import { Objects } from '../../model/objects';
import { CurrentVehicleState } from '../../model/currentVehicleState';

describe('MenuProvider without the TestBed', () => {
    let service: MenuProvider;
    let objects: Objects;
    let navctrl: NavController;

    beforeEach(() => { service = new MenuProvider(navctrl); objects = new Objects(); });
   
    it('#getMenuItems with true & "checked in" should return an array with one CONFIRM_INV_MENU_ITEM object and one CHECK_OUT_MENU_ITEM object', () => {
        service.getMenuItems(new CurrentVehicleState(true, objects.constants.VEHICLE_STATE_CHECKED_IN));
        expect(service.items).toEqual(new Array<MenuItem>(objects.CONFIRM_INV_MENU_ITEM, objects.CHECK_OUT_MENU_ITEM));
    });
   
    it('#getMenuItems with true & "inventory confirmed" should return an array with one CONFIRM_INV_MENU_ITEM object and one CHECK_OUT_MENU_ITEM object', () => {
        service.getMenuItems(new CurrentVehicleState(true, objects.constants.VEHICLE_STATE_CONFIRMED));
        expect(service.items).toEqual(new Array<MenuItem>(objects.CONFIRM_INV_MENU_ITEM, objects.CHECK_OUT_MENU_ITEM));
    });

    it('#getMenuItems with true & "checked out" should return an array with one CHECK_IN_MENU_ITEM object', () => {
        service.getMenuItems(new CurrentVehicleState(true, objects.constants.VEHICLE_STATE_CHECKED_OUT));
        expect(service.items).toEqual(new Array<MenuItem>(objects.CHECK_IN_MENU_ITEM));
    });

    it('#getMenuItems with false should return an array with one CHECK_IN_MENU_ITEM object', () => {
        service.getMenuItems(new CurrentVehicleState(false, objects.constants.BAD_PAGE_TITLE));
        expect(service.items).toEqual(new Array<MenuItem>(objects.CHECK_IN_MENU_ITEM));
    });
  });
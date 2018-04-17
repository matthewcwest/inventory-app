import { MenuItem } from "../model/menuItem";
import { PageDetails } from "../model/pageDetails";
import { Constants } from "../app/constants"

export class Objects {
    constants: Constants = new Constants();

    constructor() { }

    readonly AUTHORIZATON_HEADER = this.constants.BASIC_LITERAL + btoa(this.constants.API_KEY_LITERAL + ":" + this.constants.API_KEY);

    readonly CONFIRM_PAGE_DETAILS: PageDetails = new PageDetails(null, this.constants.CONFIRM_INV_TITLE, this.constants.CONFIRM_INV_DESCR);
    readonly CHECK_IN_PAGE_DETAILS: PageDetails = new PageDetails(null, this.constants.CHECK_IN_TITLE, this.constants.CHECK_IN_DESCR);
    readonly CHECK_OUT_PAGE_DETAILS: PageDetails = new PageDetails(null, this.constants.CHECK_OUT_TITLE, this.constants.CHECK_OUT_DESCR);

    readonly WIFI_ERROR_PAGE_DETAILS: PageDetails = new PageDetails(this.constants.WIFI_ERROR_ICON, this.constants.WIFI_ERROR_TITLE, this.constants.WIFI_ERROR_DESCR, this.constants.WIFI_ERROR_FOOTER);
    readonly GENERIC_ERROR_PAGE_DETAILS: PageDetails = new PageDetails(this.constants.GENERIC_ERROR_ICON, this.constants.GENERIC_ERROR_TITLE, this.constants.GENERIC_ERROR_DESCR, this.constants.GENERIC_ERROR_FOOTER);
    
    readonly CONFIRM_INV_MENU_ITEM: MenuItem = new MenuItem(this.constants.CONFIRM_INV_MENU_TITLE,
        this.constants.CONFIRM_INV_MENU_ICON, this.constants.CONFIRM_INV_MENU_COLOR,
        this.constants.CONFIRM_INV_MENU_SIZE, this.constants.CONFIRM_INV_MENU_STATE);

    readonly CHECK_OUT_MENU_ITEM: MenuItem = new MenuItem(this.constants.CHECK_OUT_MENU_TITLE,
        this.constants.CHECK_OUT_MENU_ICON, this.constants.CHECK_OUT_MENU_COLOR,
        this.constants.CHECK_OUT_MENU_SIZE, this.constants.CHECK_OUT_MENU_STATE);

    readonly CHECK_IN_MENU_ITEM: MenuItem = new MenuItem(this.constants.CHECK_IN_MENU_TITLE,
        this.constants.CHECK_IN_MENU_ICON, this.constants.CHECK_IN_MENU_COLOR,
        this.constants.CHECK_IN_MENU_SIZE, this.constants.CHECK_IN_MENU_STATE);

    readonly INVALID_VIN_MODAL_DATA =  {
            title: this.constants.INVALID_VIN_MODAL_TITLE,
            subTitle: this.constants.INVALID_VIN_MODAL_SUBTITLE,
            buttons: this.constants.INVALID_VIN_MODAL_BUTTON_ARRAY
    };
}
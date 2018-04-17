export class Constants {
    readonly API_KEY_LITERAL = "ApiKey";
    readonly API_KEY = "testkey";
    readonly ROOT_URL = "https://test.test.com/Event/";
    readonly GET_PATH = "GetVehicleState/";
    readonly POST_PATH = "SetVehicleState";
    readonly BASIC_LITERAL = "Basic ";
    readonly AUTHORIZATION_LITERAL = "Authorization";
    readonly ERROR_LITERAL = "error";
    readonly JSON_LITERAL = "json";
    readonly VIN_LITERAL = "vin";
    readonly PAGE_NAME_LITERAL = "pageName";
    readonly VEHICLE_DETAILS_LITERAL = "vehicleDetails";
    readonly CURRENT_VEHICLE_STATE_LITERAL = "currentVehicleState";
    readonly CONFIRM_INV_TITLE = "On the Lot";
    readonly CONFIRM_INV_DESCR = "This vehicle has been marked as on the lot.";
    readonly CHECK_IN_TITLE = "Checked In";
    readonly CHECK_IN_DESCR = "This vehicle is now in inventory.";
    readonly CHECK_OUT_TITLE = "Checked Out";
    readonly CHECK_OUT_DESCR = "This vehicle has been marked as off the lot.";

    readonly WIFI_ERROR_DESCRIPTOR = "wifi";
    readonly WIFI_ERROR_NUMBER = 3;
    readonly WIFI_ERROR_ICON = "ios-wifi";
    readonly WIFI_ERROR_TITLE = "No Connection";
    readonly WIFI_ERROR_DESCR = "Your app has lost connection to the internet. Please reconnect to continue";
    readonly WIFI_ERROR_FOOTER = "RECONNECT";

    readonly VIN_TRIM_CHARACTER = "I";
    readonly INVALID_VIN_MODAL_TITLE = 'Invalid VIN!';
    readonly INVALID_VIN_MODAL_SUBTITLE = 'The VIN you have entered is not valid. Please re-enter the VIN.';
    readonly INVALID_VIN_MODAL_BUTTON_ARRAY = ['OK'];

    readonly GENERIC_ERROR_ICON = "md-warning";
    readonly GENERIC_ERROR_TITLE = "Something Broke";
    readonly GENERIC_ERROR_DESCR = "An error occured, and your last action was not processed. Please try again.";
    readonly GENERIC_ERROR_FOOTER = "TRY AGAIN";

    readonly CONFIRM_INV_MENU_TITLE = "Confirm Inventory";
    readonly CONFIRM_INV_MENU_ICON = "md-checkmark";
    readonly CONFIRM_INV_MENU_COLOR = "green";
    readonly CONFIRM_INV_MENU_SIZE = "30px";
    readonly CONFIRM_INV_MENU_STATE = "Inventory Confirmed";

    readonly CHECK_IN_MENU_TITLE = "Check In";
    readonly CHECK_IN_MENU_ICON = "md-arrow-round-down";
    readonly CHECK_IN_MENU_COLOR = "green";
    readonly CHECK_IN_MENU_SIZE = "30px";
    readonly CHECK_IN_MENU_STATE = "Checked In";

    readonly CHECK_OUT_MENU_TITLE = "Check Out";
    readonly CHECK_OUT_MENU_ICON = "md-arrow-round-up";
    readonly CHECK_OUT_MENU_COLOR = "red";
    readonly CHECK_OUT_MENU_SIZE = "30px";
    readonly CHECK_OUT_MENU_STATE = "Checked Out";

    readonly VEHICLE_STATE_CHECKED_IN = "checked in";
    readonly VEHICLE_STATE_CHECKED_OUT = "checked out";
    readonly VEHICLE_STATE_CONFIRMED = "inventory confirmed";

    readonly LOADING_CONTROLLER_SPINNER_NAME = "crescent";
    readonly LOADING_CONTROLLER_CONTENT = "Working...";
    
    readonly DIRECTION_UP = "up";
    readonly DIRECTION_DOWN = "down";
    
    readonly BAD_PAGE_TITLE = 'xyz';
    readonly EMPTY_STRING = "";
    readonly GOOD_VIN = '4S4BP67C254326627';
    readonly BAD_VIN = 'JJJJJJJJJJJJJJJJJ';
    readonly CACHE_CONTROL_HEADER_NAME = 'Cache-Control';
    readonly CACHE_CONTROL_HEADER_VALUE = 'no-cache';
    readonly TOTAL_COUNTDOWN_SECONDS = 15;

    readonly TEST_LATITUDE_VALUE = 35.4;
    readonly TEST_LONGITUDE_VALUE = -86.7;

    constructor() {}
}
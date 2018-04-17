import { StateProvider } from './state';
import { Objects } from '../../model/objects';

describe('StateProvider without the TestBed', () => {
    let service: StateProvider;
    let objects: Objects;

    beforeEach(() => { service = new StateProvider(); objects = new Objects(); });
   
    it('#getErrorDetails with "wifi" should return WIFI_ERROR_PAGE_DETAILS object', () => {
      expect(service.getErrorDetails(objects.constants.WIFI_ERROR_DESCRIPTOR)).toEqual(objects.WIFI_ERROR_PAGE_DETAILS);
    });
   
    it('#getErrorDetails with a bad page title should return GENERIC_ERROR_PAGE_DETAILS object', () => {
        expect(service.getErrorDetails(objects.constants.BAD_PAGE_TITLE)).toEqual(objects.GENERIC_ERROR_PAGE_DETAILS);
    });

    it('#getPageDetails with "Confirm Inventory" should return CONFIRM_PAGE_DETAILS object', () => {
        expect(service.getPageDetails(objects.constants.CONFIRM_INV_MENU_TITLE)).toEqual(objects.CONFIRM_PAGE_DETAILS);
    });

    it('#getPageDetails with "Check In" should return CHECK_IN_PAGE_DETAILS object', () => {
        expect(service.getPageDetails(objects.constants.CHECK_IN_MENU_TITLE)).toEqual(objects.CHECK_IN_PAGE_DETAILS);
    });

    it('#getPageDetails with "Check Out" should return CHECK_OUT_PAGE_DETAILS object', () => {
        expect(service.getPageDetails(objects.constants.CHECK_OUT_MENU_TITLE)).toEqual(objects.CHECK_OUT_PAGE_DETAILS);
    });   
  });
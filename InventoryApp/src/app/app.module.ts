import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner} from '@ionic-native/barcode-scanner';
import { Geolocation } from '@ionic-native/geolocation';
import { HTTP } from '@ionic-native/http';
import { Keyboard } from '@ionic-native/keyboard';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ActionsPage } from '../pages/actions/actions';
import { ConfirmationPage } from '../pages/confirmation/confirmation';
import { ManualVinPage } from '../pages/manual-vin/manual-vin';
import { ErrorPage } from '../pages/error/error';

import { HttpProvider } from '../providers/http/http';
import { GeolocationProvider } from '../providers/geolocation/geolocation';
import { StateProvider } from '../providers/state/state';
import { VinValidationProvider } from '../providers/vin-validation/vin-validation';
import { MenuProvider } from '../providers/menu/menu';
import { VinHandlerProvider } from '../providers/vin-handler/vin-handler';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ActionsPage,
    ConfirmationPage,
    ManualVinPage,
    ErrorPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, 
    ActionsPage,
    ConfirmationPage,
    ManualVinPage,
    ErrorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    Geolocation,
    HTTP,
    NativePageTransitions,
    Keyboard,
    HttpProvider,
    GeolocationProvider,
    StateProvider,
    VinValidationProvider,
    MenuProvider,
    VinHandlerProvider
  ]
})
export class AppModule {}

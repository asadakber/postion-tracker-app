import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Device } from '@ionic-native/device';
import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAaQn4SfLJN1Gnv12hIg2GIIrlfgdq0pFk",
  authDomain: "near-by-places-app.firebaseapp.com",
  databaseURL: "https://near-by-places-app.firebaseio.com",
  projectId: "near-by-places-app",
  storageBucket: "near-by-places-app.appspot.com",
  messagingSenderId: "982381618564"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Device,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

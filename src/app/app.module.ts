import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { MaincontentPage } from '../pages/maincontent/maincontent';
import { MaincontentgPage } from '../pages/maincontentg/maincontentg';
import { PasswordresetPage } from '../pages/passwordreset/passwordreset';
import { GuestinfoPage } from '../pages/guestinfo/guestinfo';
import { UserreqPage } from '../pages/userreq/userreq';
import { AboutcPage } from '../pages/aboutc/aboutc';
import { ContactPage } from '../pages/contact/contact';
import { FaqsPage } from '../pages/faqs/faqs';
import { RateaPage } from '../pages/ratea/ratea';
import { RatesPage } from '../pages/rates/rates';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { AuthProvider } from '../providers/auth';
//import { ReactiveFormsModule } from '@angular/forms';
//import { FormControl, FormGroup, Validators } from '@angular/forms';
import firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

//import { SmileRateComponent } from './smile-rate/smile-rate';
//import { SmileRate } from './smile-rate';
//import { SmileRateModule } from '../../components/smile-rate';
const firebaseAuth = {
  apiKey: "AIzaSyAHwtZv-TcvfmpGmPpVEa1oEyWMyR9m0b4",
  authDomain: "corpc-86603.firebaseapp.com",
  databaseURL: "https://corpc-86603.firebaseio.com",
  projectId: "corpc-86603",
  storageBucket: "corpc-86603.appspot.com",
  messagingSenderId: "474871595787"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutcPage,
    ContactPage,
    FaqsPage,
    RatesPage,
    RateaPage
  ],
  imports: [
    BrowserModule,
  //  ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutcPage,
    ContactPage,
    FaqsPage,
    RatesPage,
    RateaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

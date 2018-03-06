import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
//import { AuthProvider } from '../providers/auth/auth';
import { LoginPage } from './login';
//import firebase from 'firebase';
//import { AngularFireModule } from 'angularfire2';
//import { AngularFireDatabaseModule } from 'angularfire2/database';
//import { AngularFireAuthModule } from 'angularfire2/auth';
//import { ReactiveFormsModule } from '@angular/forms';
//import { FormControl, FormGroup, Validators } from '@angular/forms';
@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
  //  ReactiveFormsModule,
    IonicPageModule.forChild(LoginPage),
  ],
  exports: [LoginPage]
})
export class LoginPageModule {}

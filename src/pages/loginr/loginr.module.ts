import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginrPage } from './loginr';

@NgModule({
  declarations: [
    LoginrPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginrPage),
  ],
})
export class LoginrPageModule {}

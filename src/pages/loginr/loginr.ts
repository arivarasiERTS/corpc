import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User} from '../../models/user';

/**
 * Generated class for the LoginrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loginr',
  templateUrl: 'loginr.html',
})
export class LoginrPage {
  user = {} as User;

    constructor(private afAuth: AngularFireAuth,
      public navCtrl: NavController, public navParams: NavParams) {
    }
    async loginUser(user: User){
      try{
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
        console.log(result);
        this.navCtrl.setRoot('MaincontentPage');
      }
      catch(e){
        console.error(e);
      }
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad LoginrPage');
    }

}

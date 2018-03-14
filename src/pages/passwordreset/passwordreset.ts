import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User} from '../../models/user';
import firebase from 'firebase';
/**
 * Generated class for the PasswordresetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-passwordreset',
  templateUrl: 'passwordreset.html',
})
export class PasswordresetPage {
user = {} as User;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordresetPage');
  }
openLogin(){
  this.navCtrl.push('LoginPage');
}
reset(user){
  var promise = new Promise((resolve,reject)=> {
    firebase.auth().sendPasswordResetEmail(user.mailid).then(() => {
        resolve({success: true});
      }).catch((err) => {
        reject(err);
      })  })
      return promise;
}
}

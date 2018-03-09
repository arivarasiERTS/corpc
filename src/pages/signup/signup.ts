import { AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { AngularFireAuthModule } from 'angularfire2/auth';
import {User} from '../../models/user';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth,private afDatabase: AngularFireDatabase,
     public navCtrl: NavController, public navParams: NavParams) {
  }

//  ionViewDidLoad() {
//    console.log('ionViewDidLoad SignupPage');
//  }

async registerUser(user: User){
  try{
  const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    console.log(result);
    this.afAuth.authState.subscribe(auth => {
      this.afDatabase.list('user').push(this.user)
      .then(() => this.navCtrl.setRoot('LoginPage'));
    })
  }
  catch(e){
    console.error(e);
  }
}
}

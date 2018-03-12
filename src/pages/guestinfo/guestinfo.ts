//import { AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { AngularFireAuthModule } from 'angularfire2/auth';
import {User} from '../../models/user';
/**
 * Generated class for the GuestinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-guestinfo',
  templateUrl: 'guestinfo.html',
})
export class GuestinfoPage {

  user = {} as User;

  constructor(private afDatabase: AngularFireDatabase,
     public navCtrl: NavController, public navParams: NavParams) {
  }

//  ionViewDidLoad() {
//    console.log('ionViewDidLoad SignupPage');
//  }

async guestUser(user: User){
 try{
//  const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  //  console.log(result);
  //  this.afAuth.authState.subscribe(auth => {
      this.afDatabase.list('user').push(this.user)
  //    .then(() => this.navCtrl.setRoot('LoginrPage'));
  //  })
  }
  catch(e){
    console.error(e);
  }
}
}

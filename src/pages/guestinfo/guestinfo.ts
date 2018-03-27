//import { AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';
import { AngularFireAuth} from 'angularfire2/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
//import { AngularFireAuthModule } from 'angularfire2/auth';
import {Reqs} from '../../models/reqs';
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

  reqs = {} as Reqs;

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase,
     public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

//  ionViewDidLoad() {
//    console.log('ionViewDidLoad SignupPage');
//  }

async guestUser(reqs: Reqs){
 try{
//  const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  //  console.log(result);
  //  this.afAuth.authState.subscribe(auth => {
   let loader=this.loadingCtrl.create({
      content: 'Sending'
    });
    loader.present();
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afDatabase.list('reqs').push(this.reqs)
      .then(() =>
      this.navCtrl.push('UserreqPage'));
    }
    )
      loader.dismiss();
  //    .then(() => this.navCtrl.setRoot('LoginrPage'));
  //  })
  }
  catch(e){
    console.error(e);
  }
}
}

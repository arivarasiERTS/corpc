import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';
import firebase from 'firebase';
/**
 * Generated class for the MaincontentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maincontent',
  templateUrl: 'maincontent.html',
})
export class MaincontentPage {

  constructor(private afAuth: AngularFireAuth,private afDatabase: AngularFireDatabase, private toast: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad MaincontentPage');
this.afAuth.authState.subscribe(data => {
if(data.email && data.uid){
  this.toast.create({
    message: 'Login Successful',
   duration: 3000,
   position: 'top'
 }).present();
}
else{
  this.toast.create({
    message: 'Authentication error',
   duration: 3000,
   position: 'top'
 }).present();
}
})

  }
  userReq()
  {
    this.navCtrl.push('UserreqPage');
  }
  logoutUser(){
  firebase.auth().signOut().then(() => {
      this.navCtrl.setRoot('LoginPage');
    });
    this.toast.create({
      message: 'Logged out',
     duration: 3000,
     position: 'top'
   }).present();
  }
}

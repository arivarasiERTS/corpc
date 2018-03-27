import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';
import firebase from 'firebase';
//import {ChatProvider} from '../../providers/chat/chat';
import {Reqs} from '../../models/reqs';
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
reqs = {} as Reqs;
//firedata = firebase.database().ref('/user');
  constructor(private afAuth: AngularFireAuth, private toast: ToastController, public navCtrl: NavController, public navParams: NavParams, private afDatabase: AngularFireDatabase) {

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


  async userReq(reqs: Reqs)
  {

try{
/*  let loader=this.loadingCtrl.create({
    content: 'Please wait'
  });
  loader.present();*/
  const result = await this.afAuth.authState.take(1).subscribe(auth => {
    this.afDatabase.list('reqs').push(this.reqs)
        .then(() => this.navCtrl.push('UserreqPage'));

  console.log(result);
})
}
catch(e){
  //  loader.dismiss();
  console.error(e);
}
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

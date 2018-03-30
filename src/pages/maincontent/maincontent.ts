import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
//import { AngularFireAuth} from 'angularfire2/auth';
//import { AngularFireDatabase} from 'angularfire2/database';
import firebase from 'firebase';
import { AuthProvider } from '../../providers/auth/auth';
//import {ChatProvider} from '../../providers/chat/chat';
//import {Reqs} from '../../models/reqs';
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
//reqs = {} as Reqs;
//firedata = firebase.database().ref('/user');
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad MaincontentPage');

  }




  logoutUser(){
  firebase.auth().signOut().then(() => {
      this.navCtrl.setRoot('LoginPage');
    });
      }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';
import firebase from 'firebase';
import {ChatProvider} from '../../providers/chat/chat';
//import {User} from '../../models/user';
/**
 * Generated class for the UserreqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userreq',
  templateUrl: 'userreq.html',
})
export class UserreqPage {
user: any;
newmessage;
allmessages = [];
constructor(public chatservice: ChatProvider, public events: Events, public navCtrl: NavController, public navParams: NavParams) {
this.user = this.chatservice.user;
this.events.subscribe('newmessage', () => {
this.allmessages = [];
this.allmessages = this.chatservice.messages;
})
}
ionViewDidLoad() {
  this.chatservice.getmessages();
}
addmessage(){
this.chatservice.addnewmessage(this.newmessage);
}
}

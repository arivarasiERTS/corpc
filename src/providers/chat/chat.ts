import { Injectable } from '@angular/core';
import firebase from 'firebase';
import {Events} from 'ionic-angular';
import {User} from '../../models/user';
/*
  Generated class for the ChatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class ChatProvider {
  user = {} as User;
firereqs= firebase.database().ref('/requests');
messages =[];
  constructor(public events: Events) {
  }


addnewmessage(msg){
        this.firereqs.child(firebase.auth().currentUser.uid).push({
        //sentby: firebase.auth().currentUser.name,
        message: msg,
        timestamp: firebase.database.ServerValue.TIMESTAMP
      })
}

getmessages(){
  this.messages = [];
  let temp;
  this.firereqs.child(firebase.auth().currentUser.uid).on('value', (snapshot) => {
    this.messages = [];
    temp = snapshot.val();
    for(var tempkey in temp){
      this.messages.push(temp[tempkey]);
    }
  //  this.events.publish('newmessage');
  })
}



}

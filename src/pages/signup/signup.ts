import { AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
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
     public navCtrl: NavController, public navParams: NavParams, public toastctrl: ToastController, public loadingCtrl: LoadingController) {
  }

//  ionViewDidLoad() {
//    console.log('ionViewDidLoad SignupPage');
//  }
openLogin(){
  this.navCtrl.push('LoginPage');
}
async registerUser(user: User){
  try{
    var toaster=this.toastctrl.create({
      duration: 3000,
      position: 'bottom'
    });
if(this.user.password.length < 6){
      toaster.setMessage('Password is not strong. Minimum 6 characters is required');
      toaster.present();
    }
    let loader=this.loadingCtrl.create({
      content: 'Please wait'
    });
    loader.present();
  const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    console.log(result);
    loader.dismiss();
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afDatabase.list('user').push(this.user)
      .then(() => this.navCtrl.setRoot('LoginPage'));
    })
  }
  catch(e){
      loader.dismiss();
    console.error(e);
  }
}
}

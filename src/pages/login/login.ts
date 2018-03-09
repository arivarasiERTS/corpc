import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User} from '../../models/user';
//import { ReactiveFormsModule } from '@angular/forms';
//import { FormControl, FormGroup, Validators } from '@angular/forms';
//import { AuthProvider } from '../providers/auth';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

user = {} as User;

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }
  async loginUser(user: User){
    try{
    const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      console.log(result);
      this.navCtrl.setRoot('MaincontentPage');
    }
    catch(e){
      console.error(e);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  openSignUp() {
    this.navCtrl.push('SignupPage');
  }
}

  /**export class LoginPage implements OnInit {
      loginForm: FormGroup;

      constructor(private auth: AuthProvider, private formBuilder: FormBuilder, private navCtrl: NavController, private navParams: NavParams) {}

      ngOnInit() {
          this.initLoginForm();
      }

      initLoginForm() {
          this.loginForm = this.formBuilder.group({
              email: ['', [Validators.required, Validators.email]],
              password: ['', [Validators.required]]
          });
      }

      register() {
          this.auth.register(this.loginForm.value)
          .then(response => {
              this.navCtrl.setRoot(MaincontentPage);
          })
          .catch(error => {
              // handle error by showing alert
          })
      }

      login() {
          this.auth.login(this.loginForm.value)
          .then(response => {
              this.navCtrl.setRoot(MaincontentPage);
          })
          .catch(error => {
              // handle error by showing alert
          })
      }
      logout() {
        this.auth.logout()
        .then(response => {
            this.navCtrl.setRoot(LoginPage);
        });
    }
  }

//}**/

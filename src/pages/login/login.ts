import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { EventosPage } from '../eventos/eventos';
import { SignupPage } from '../signup/signup';
import { LoginTo } from '../../Negocio/Models/login.to';
import { AuthNegocio } from '../../Negocio/BO/auth.negocio';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public login:LoginTo;
  constructor(
    public navCtrl: NavController,
    private _negocio: AuthNegocio,
    private loagindCtrl: LoadingController,
    private dialog: AlertController,
  ) {
    this.login = new LoginTo();
    this.login.email = "teste.rafa@grr.la";
    this.login.password = "Paicon@123";
  }

  goToEventos(params){
    if (!params) params = {};
    this.navCtrl.push(EventosPage);
  }
  
  goToSignup(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage,params);
  }

  async DoLogin() {
    let load = this.loagindCtrl.create();
    load.present()
    let resp = (await this._negocio.DoLogin(this.login.email, this.login.password));
    load.dismiss();
    if (resp.status) {
      this.goToEventos(null);
    }else{
      this.dialog.create({
        message:resp.message
      }).present()
    }

  }
}

import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { EventosPage } from '../eventos/eventos';
import { DetalhesEventoPage } from '../detalhes-evento/detalhes-evento';
import { EventoAlteradoPage } from '../evento-alterado/evento-alterado';
import { FeedbackPage } from '../feedback/feedback';
import { SignupPage } from '../signup/signup';
import { EmpresaCadastradaPage } from '../empresa-cadastrada/empresa-cadastrada';
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

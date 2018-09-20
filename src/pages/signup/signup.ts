import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { EmpresaCadastradaPage } from '../empresa-cadastrada/empresa-cadastrada';
import { Empresa } from '../../Negocio/Models/Empresa';
import { AuthNegocio } from '../../Negocio/BO/auth.negocio';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  empresa:Empresa;

  constructor(
    public navCtrl: NavController,
    private _authNegocio: AuthNegocio,
    private loadingCtrl: LoadingController,
    private dialog: AlertController
  ) {
    this.empresa = new Empresa()
  }
  goToEmpresaCadastrada(params){
    if (!params) params = {};
    this.navCtrl.push(EmpresaCadastradaPage);
  }

  async Cadastrar(){
    let load = this.loadingCtrl.create();
    load.present()
    var resp = (await this._authNegocio.Registrar(this.empresa))
    load.dismiss();
    if (resp.ok) {
      this.navCtrl.push(EmpresaCadastradaPage);
    } else {
      console.error(resp);
      this.dialog.create({
        message: "Erro ao efetuar o cadastro [" + resp.error + "]"
      }).present();
    }
  }
}

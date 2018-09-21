import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-empresa-cadastrada',
  templateUrl: 'empresa-cadastrada.html'
})
export class EmpresaCadastradaPage {

  constructor(public navCtrl: NavController) {
  }

  Voltar(){
    this.navCtrl.goToRoot(null);
  }
  
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventosPage } from '../eventos/eventos';

@Component({
  selector: 'page-evento-alterado',
  templateUrl: 'evento-alterado.html'
})
export class EventoAlteradoPage {

  constructor(public navCtrl: NavController) {
  }

  goToEventos(params){
    if (!params) params = {};
    this.navCtrl.push(EventosPage);
  }
  
}

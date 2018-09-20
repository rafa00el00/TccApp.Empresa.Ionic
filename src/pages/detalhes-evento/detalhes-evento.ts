import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { EventoAlteradoPage } from '../evento-alterado/evento-alterado';
import { Evento } from '../../Negocio/Models/evento';
import { EventoTo } from '../../Negocio/Models/evento.to';
import { EventoNegocio } from '../../Negocio/BO/evento.negocio';

@Component({
  selector: 'page-detalhes-evento',
  templateUrl: 'detalhes-evento.html'
})
export class DetalhesEventoPage  implements OnInit {

  codEvento:number;
  evento:Evento;
  constructor(
    public navCtrl: NavController,
    private _navParams :NavParams,
    private _eventoNegocio:EventoNegocio,
    private loadingCtrl:LoadingController

  ) {
    this.evento = new Evento();
  this.codEvento = _navParams.get("codEvento");
    
  }

  async ngOnInit(){
    let load = this.loadingCtrl.create();
    load.present();
    this.evento = (await this._eventoNegocio.GetEvento(this.codEvento));
    load.dismiss();
  }
  goToEventoAlterado(params){
    if (!params) params = {};
    this.navCtrl.push(EventoAlteradoPage);
  }
}

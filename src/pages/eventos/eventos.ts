import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { DetalhesEventoPage } from '../detalhes-evento/detalhes-evento';
import { EventoAlteradoPage } from '../evento-alterado/evento-alterado';
import { FeedbackPage } from '../feedback/feedback';
import { NovoEventoPage } from '../novo-evento/novo-evento';
import { EventoTo } from '../../Negocio/Models/evento.to';
import { EventoNegocio } from '../../Negocio/BO/evento.negocio';

@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html'
})
export class EventosPage implements OnInit {
  eventos: EventoTo[];
  
  constructor(
    public navCtrl: NavController,
    private _eventoNegocio:EventoNegocio,
    private loadingCtrl:LoadingController

  ) {
  }
  
  
  async ngOnInit() {
    let load = this.loadingCtrl.create();
    load.present();
    this.eventos = new Array<EventoTo>();
    this.eventos = (await this._eventoNegocio.GetEventos())
    load.dismiss();
    
  }

  async doRefresh(refresher){
    this.eventos = [];
    this.eventos = (await this._eventoNegocio.GetEventos());
    refresher.complete();

  }

  async doInfinite(infiniteScroll){
    let evs = (await this._eventoNegocio.GetEventos());
    this.eventos = this.eventos.concat(evs);
    infiniteScroll.complete();
  }
  
  goToDetalhesEvento(params){
    if (!params) params = {};
    this.navCtrl.push(DetalhesEventoPage,params);
  }
  goToEventoAlterado(params){
    if (!params) params = {};
    this.navCtrl.push(EventoAlteradoPage,params);
  }
  goToFeedback(params){
    if (!params) params = {};
    this.navCtrl.push(FeedbackPage,params);
  }

  goToNovoEvento(){
    this.navCtrl.push(NovoEventoPage);
  }
}

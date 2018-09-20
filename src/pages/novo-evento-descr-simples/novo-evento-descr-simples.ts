import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { NovoEventoFinalizarPage } from '../novo-evento-finalizar/novo-evento-finalizar';
import { NovoEventoSalvoPage } from '../novo-evento-salvo/novo-evento-salvo';
import { EventosPage } from '../eventos/eventos';
import { DetalhesEventoPage } from '../detalhes-evento/detalhes-evento';
import { EventoAlteradoPage } from '../evento-alterado/evento-alterado';
import { FeedbackPage } from '../feedback/feedback';
import { Evento } from '../../Negocio/Models/evento';
import { EventoNegocio } from '../../Negocio/BO/evento.negocio';

@Component({
  selector: 'page-novo-evento-descr-simples',
  templateUrl: 'novo-evento-descr-simples.html'
})
export class NovoEventoDescrSimplesPage {

  evento:Evento;
  constructor(
    public navCtrl: NavController,
    private _navParams:NavParams,
    private _eventoNegocio:EventoNegocio,
    private _loadingCtrl:LoadingController,
    private _alertCtrl:AlertController
  ) {
    this.evento = _navParams.get("evento");
  }
  goToNovoEventoFinalizar(params){
    if (!params) params = {evento:this.evento};
    this.navCtrl.push(NovoEventoFinalizarPage,params);
  }goToNovoEventoSalvo(params){
    if (!params) params = {};
    this.navCtrl.push(NovoEventoSalvoPage);
  }goToEventos(params){
    if (!params) params = {};
    this.navCtrl.push(EventosPage);
  }goToDetalhesEvento(params){
    if (!params) params = {};
    this.navCtrl.push(DetalhesEventoPage);
  }goToEventoAlterado(params){
    if (!params) params = {};
    this.navCtrl.push(EventoAlteradoPage);
  }goToFeedback(params){
    if (!params) params = {};
    this.navCtrl.push(FeedbackPage);
  }
}

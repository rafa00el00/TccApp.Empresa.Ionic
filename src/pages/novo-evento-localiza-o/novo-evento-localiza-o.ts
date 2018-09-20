import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { NovoEventoDescrSimplesPage } from '../novo-evento-descr-simples/novo-evento-descr-simples';
import { NovoEventoFinalizarPage } from '../novo-evento-finalizar/novo-evento-finalizar';
import { NovoEventoSalvoPage } from '../novo-evento-salvo/novo-evento-salvo';
import { EventosPage } from '../eventos/eventos';
import { DetalhesEventoPage } from '../detalhes-evento/detalhes-evento';
import { EventoAlteradoPage } from '../evento-alterado/evento-alterado';
import { FeedbackPage } from '../feedback/feedback';
import { Evento } from '../../Negocio/Models/evento';
import { EventoNegocio } from '../../Negocio/BO/evento.negocio';

@Component({
  selector: 'page-novo-evento-localiza-o',
  templateUrl: 'novo-evento-localiza-o.html'
})
export class NovoEventoLocalizaOPage {

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
  goToNovoEventoDescrSimples(params){
    if (!params) params = {evento: this.evento};
    this.navCtrl.push(NovoEventoDescrSimplesPage,params);
  }goToNovoEventoFinalizar(params){
    if (!params) params = {};
    this.navCtrl.push(NovoEventoFinalizarPage);
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

import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { NovoEventoLocalizaOPage } from '../novo-evento-localiza-o/novo-evento-localiza-o';
import { NovoEventoDescrSimplesPage } from '../novo-evento-descr-simples/novo-evento-descr-simples';
import { NovoEventoFinalizarPage } from '../novo-evento-finalizar/novo-evento-finalizar';
import { NovoEventoSalvoPage } from '../novo-evento-salvo/novo-evento-salvo';
import { EventosPage } from '../eventos/eventos';
import { DetalhesEventoPage } from '../detalhes-evento/detalhes-evento';
import { EventoAlteradoPage } from '../evento-alterado/evento-alterado';
import { FeedbackPage } from '../feedback/feedback';
import { EventoNegocio } from '../../Negocio/BO/evento.negocio';
import { Evento } from '../../Negocio/Models/evento';

@Component({
  selector: 'page-novo-evento-publico-alvo',
  templateUrl: 'novo-evento-publico-alvo.html'
})
export class NovoEventoPublicoAlvoPage implements OnInit {
  

  TagsList:Array<string>;
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

  async ngOnInit() {
    let load = this._loadingCtrl.create();
    load.present();

    try {
      this.TagsList = (await this._eventoNegocio.GetPublicoAlvoRecomendacao(this.evento.tags));
    } catch (error) {
      
    }
    load.dismiss();
  }
  
  goToNovoEventoLocalizaO(params){
    if (!params) params = {evento: this.evento};
    this.navCtrl.push(NovoEventoLocalizaOPage,params);
  }goToNovoEventoDescrSimples(params){
    if (!params) params = {};
    this.navCtrl.push(NovoEventoDescrSimplesPage);
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

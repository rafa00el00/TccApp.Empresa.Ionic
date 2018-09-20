import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController, NavParams } from 'ionic-angular';
import { NovoEventoPublicoAlvoPage } from '../novo-evento-publico-alvo/novo-evento-publico-alvo';
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
  selector: 'page-novo-evento-tags',
  templateUrl: 'novo-evento-tags.html'
})
export class NovoEventoTagsPage implements OnInit {
  

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
      this.TagsList = (await this._eventoNegocio.GetTagsFromText(this.evento.descricao));
    } catch (error) {
      
    }
    load.dismiss();
  }

  goToNovoEventoPublicoAlvo(params){
    if (!params) params = {evento: this.evento};
    this.navCtrl.push(NovoEventoPublicoAlvoPage,params);
  }goToNovoEventoLocalizaO(params){
    if (!params) params = {};
    this.navCtrl.push(NovoEventoLocalizaOPage);
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

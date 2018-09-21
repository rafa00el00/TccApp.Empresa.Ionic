import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { NovoEventoSalvoPage } from '../novo-evento-salvo/novo-evento-salvo';
import { EventosPage } from '../eventos/eventos';
import { DetalhesEventoPage } from '../detalhes-evento/detalhes-evento';
import { EventoAlteradoPage } from '../evento-alterado/evento-alterado';
import { FeedbackPage } from '../feedback/feedback';
import { Evento } from '../../Negocio/Models/evento';
import { EventoNegocio } from '../../Negocio/BO/evento.negocio';

@Component({
  selector: 'page-novo-evento-finalizar',
  templateUrl: 'novo-evento-finalizar.html'
})
export class NovoEventoFinalizarPage {

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
  async Concluir(){
    let load = this._loadingCtrl.create();

    load.present();

    try {
      let resp =( await this._eventoNegocio.PostEvento(this.evento));
      if(resp.ok){
        this.goToNovoEventoSalvo(null);
        load.dismiss();
        return;
      }else{
        this._alertCtrl.create({
          message: 'Não foi possivel terminar o cadastro do evento, devido a' + resp.objeto.message
        }).present();
      }
    } catch (error) {
      this._alertCtrl.create({
        message: 'Falha ao criar um Evento. Erro['+ error.message +']'
      }).present();
    }

    load.dismiss();
  }
  goToNovoEventoSalvo(params){
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

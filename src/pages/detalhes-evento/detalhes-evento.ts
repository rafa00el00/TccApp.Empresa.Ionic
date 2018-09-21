import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { EventoAlteradoPage } from '../evento-alterado/evento-alterado';
import { Evento } from '../../Negocio/Models/evento';
import { EventoTo } from '../../Negocio/Models/evento.to';
import { EventoNegocio } from '../../Negocio/BO/evento.negocio';

@Component({
  selector: 'page-detalhes-evento',
  templateUrl: 'detalhes-evento.html'
})
export class DetalhesEventoPage implements OnInit {

  codEvento: number;
  evento: Evento;
  constructor(
    public navCtrl: NavController,
    private _navParams: NavParams,
    private _eventoNegocio: EventoNegocio,
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController

  ) {
    this.evento = new Evento();
    this.codEvento = _navParams.get("codEvento");

  }

  async ngOnInit() {
    let load = this._loadingCtrl.create();
    load.present();
    this.evento = (await this._eventoNegocio.GetEvento(this.codEvento));
    load.dismiss();
  }

  async AlterarEvento() {
    let load = this._loadingCtrl.create();
    load.present();
    try {

      let resp = (await this._eventoNegocio.PutEvento(this.evento));
      if (resp.ok) {
        this.goToEventoAlterado(null);
      } else {
        this._alertCtrl.create({
          message: "Não foi possivel alterar o evento"
        }).present();
      }

    } catch (error) {
      this._alertCtrl.create({
        message: "Não foi possivel alterar o evento"
      }).present();
      console.error(error);

    }
    load.dismiss();
  }
  goToEventoAlterado(params) {
    if (!params) params = {};
    this.navCtrl.push(EventoAlteradoPage);
  }
}

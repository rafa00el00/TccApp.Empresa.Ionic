import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NovoEventoTagsPage } from '../novo-evento-tags/novo-evento-tags';
import { NovoEventoPublicoAlvoPage } from '../novo-evento-publico-alvo/novo-evento-publico-alvo';
import { NovoEventoLocalizaOPage } from '../novo-evento-localiza-o/novo-evento-localiza-o';
import { NovoEventoDescrSimplesPage } from '../novo-evento-descr-simples/novo-evento-descr-simples';
import { NovoEventoFinalizarPage } from '../novo-evento-finalizar/novo-evento-finalizar';
import { NovoEventoSalvoPage } from '../novo-evento-salvo/novo-evento-salvo';
import { EventosPage } from '../eventos/eventos';
import { DetalhesEventoPage } from '../detalhes-evento/detalhes-evento';
import { EventoAlteradoPage } from '../evento-alterado/evento-alterado';
import { FeedbackPage } from '../feedback/feedback';
import { Evento } from '../../Negocio/Models/evento';

@Component({
  selector: 'page-novo-evento',
  templateUrl: 'novo-evento.html'
})
export class NovoEventoPage {

  evento: Evento;
  constructor(public navCtrl: NavController) {
    this.evento = new Evento();
  }


  goToNovoEventoTags(params) {
    if (!params) params = { evento: this.evento };
    this.navCtrl.push(NovoEventoTagsPage, params);
  } goToNovoEventoPublicoAlvo(params) {
    if (!params) params = {};
    this.navCtrl.push(NovoEventoPublicoAlvoPage);
  } goToNovoEventoLocalizaO(params) {
    if (!params) params = {};
    this.navCtrl.push(NovoEventoLocalizaOPage);
  } goToNovoEventoDescrSimples(params) {
    if (!params) params = {};
    this.navCtrl.push(NovoEventoDescrSimplesPage);
  } goToNovoEventoFinalizar(params) {
    if (!params) params = {};
    this.navCtrl.push(NovoEventoFinalizarPage);
  } goToNovoEventoSalvo(params) {
    if (!params) params = {};
    this.navCtrl.push(NovoEventoSalvoPage);
  } goToEventos(params) {
    if (!params) params = {};
    this.navCtrl.push(EventosPage);
  } goToDetalhesEvento(params) {
    if (!params) params = {};
    this.navCtrl.push(DetalhesEventoPage);
  } goToEventoAlterado(params) {
    if (!params) params = {};
    this.navCtrl.push(EventoAlteradoPage);
  } goToFeedback(params) {
    if (!params) params = {};
    this.navCtrl.push(FeedbackPage);
  }
}

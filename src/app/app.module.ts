import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { EventosPage } from '../pages/eventos/eventos';
import { DetalhesEventoPage } from '../pages/detalhes-evento/detalhes-evento';
import { EventoAlteradoPage } from '../pages/evento-alterado/evento-alterado';
import { NovoEventoSalvoPage } from '../pages/novo-evento-salvo/novo-evento-salvo';
import { EmpresaCadastradaPage } from '../pages/empresa-cadastrada/empresa-cadastrada';
import { SignupPage } from '../pages/signup/signup';
import { FeedbackPage } from '../pages/feedback/feedback';
import { LoginPage } from '../pages/login/login';
import { NovoEventoPage } from '../pages/novo-evento/novo-evento';
import { NovoEventoTagsPage } from '../pages/novo-evento-tags/novo-evento-tags';
import { NovoEventoPublicoAlvoPage } from '../pages/novo-evento-publico-alvo/novo-evento-publico-alvo';
import { NovoEventoLocalizaOPage } from '../pages/novo-evento-localiza-o/novo-evento-localiza-o';
import { NovoEventoDescrSimplesPage } from '../pages/novo-evento-descr-simples/novo-evento-descr-simples';
import { NovoEventoFinalizarPage } from '../pages/novo-evento-finalizar/novo-evento-finalizar';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NegocioModule } from '../Negocio/negocio.module';

@NgModule({
  declarations: [
    MyApp,
    EventosPage,
    DetalhesEventoPage,
    EventoAlteradoPage,
    NovoEventoSalvoPage,
    EmpresaCadastradaPage,
    SignupPage,
    FeedbackPage,
    LoginPage,
    NovoEventoPage,
    NovoEventoTagsPage,
    NovoEventoPublicoAlvoPage,
    NovoEventoLocalizaOPage,
    NovoEventoDescrSimplesPage,
    NovoEventoFinalizarPage
  ],
  imports: [
    BrowserModule,
    NegocioModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EventosPage,
    DetalhesEventoPage,
    EventoAlteradoPage,
    NovoEventoSalvoPage,
    EmpresaCadastradaPage,
    SignupPage,
    FeedbackPage,
    LoginPage,
    NovoEventoPage,
    NovoEventoTagsPage,
    NovoEventoPublicoAlvoPage,
    NovoEventoLocalizaOPage,
    NovoEventoDescrSimplesPage,
    NovoEventoFinalizarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
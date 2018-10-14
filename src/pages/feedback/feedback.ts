import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { FeedbackNegocio } from '../../Negocio/BO/feedback.negocio';

@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html'
})
export class FeedbackPage implements OnInit {
  feedbacks: any;
 

  constructor(
    public navCtrl: NavController,
    private _navParams: NavParams,
    private _loadingCtrl : LoadingController,
    private _alertCtrl:AlertController,
    private _feedbackNegocio:FeedbackNegocio,
  ) {
  }

  async ngOnInit(): Promise<void> {
    let codEvento = this._navParams.get('codEvento');

    try {
      this.feedbacks = (await this._feedbackNegocio.GetFeedBackPorEvento(codEvento));

    } catch (error) {
      console.error(error);
    }
  }
  
}

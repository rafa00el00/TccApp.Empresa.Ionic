import { FeedbackService } from "../Services/feedback.service";
import { Feedback } from "../Models/feedback";
import { Injectable } from "@angular/core";

@Injectable()
export class FeedbackNegocio{

    constructor(
        private _feedbackService : FeedbackService
    ) {
    }

    public GetFeedBackPorEvento(codEvento: number) {
        return this._feedbackService.GetFeedBackPorEvento(codEvento);
    }
    public GetFeedbackUsuarioEvento(codEvento: number) {
        return this._feedbackService.GetFeedbackUsuarioEvento(codEvento);
    }

    public PostFeedback(feed: Feedback) {
        return this._feedbackService.PostFeedback(feed);
    }

}
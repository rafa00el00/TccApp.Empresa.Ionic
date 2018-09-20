import { HttpHelper } from "./http.helper";
import { Injectable } from "@angular/core";
import { Feedback } from "../Models/feedback";

@Injectable()
export class FeedbackService {

    baseUrl: string;


    constructor(
        private http: HttpHelper
    ) {
        this.baseUrl = http.baseUrl + "/Feedback";
    }


    public GetFeedBackPorEvento(codEvento: number) {
        return this.http.Get(this.baseUrl + "/Evento/" + codEvento)
            .then(r => JSON.parse(r.data));
    }
    public GetFeedbackUsuarioEvento(codEvento: number) {
        return this.http.Get(this.baseUrl + "/Usuario/" + codEvento)
            .then(r => JSON.parse(r.data));
    }

    public PostFeedback(feed: Feedback) {
        return this.http.Post(this.baseUrl + "/",feed)
        .then(r => JSON.parse(r.data));
    }



}
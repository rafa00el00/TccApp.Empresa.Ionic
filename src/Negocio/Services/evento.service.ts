import { HttpHelper } from "./http.helper";
import { Injectable } from "@angular/core";
import { Evento } from "../Models/evento";

@Injectable()
export class EventoService {

    baseUrl: string;


    constructor(
        private http: HttpHelper
    ) {
        this.baseUrl = http.baseUrl + "/Evento";
    }

    public GetEvento(codEvento: number) {
        return this.http.Get(this.baseUrl + "/" + codEvento).then(r => {
            return JSON.parse(r.data);
        });
    }

    public GetEventos() {
        return this.http.Get(this.baseUrl + "/Empresa").then(r => {
            return JSON.parse(r.data);
        });
    }

    public GetTagsFromText(text: string) {
        return this.http.Post(this.baseUrl + "/Rake", { texto: text }).then(r => {
            return JSON.parse(r.data);
        });
    }

    public GetPublicoAlvoRecomendacao(tags: Array<string>) {
        return this.http.Post(this.baseUrl + "/RecomendacaoPublicoAlvo", { tags: tags }).then(r => {
            return JSON.parse(r.data);
        });
    }

    PostEvento(evento: Evento): any {
        return this.http.Post(this.baseUrl, evento);
    }

}
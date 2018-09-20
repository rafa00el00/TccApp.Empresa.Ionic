import { EventoService } from "../Services/evento.service";
import { Injectable } from "@angular/core";
import { Evento } from "../Models/evento";
import { ReadPropExpr } from "@angular/compiler";
import { JsonPipe } from "@angular/common";

@Injectable()
export class EventoNegocio{

    constructor(
        private _eventoService : EventoService
    ) {
    }

   
    public GetEvento(codEvento:number){
        return this._eventoService.GetEvento(codEvento);
    }

    public GetEventos(){
        return this._eventoService.GetEventos();
    }

    public GetTagsFromText(text:string){
        return this._eventoService.GetTagsFromText(text);
    }

    public GetPublicoAlvoRecomendacao(tags:Array<string>){
        return this._eventoService.GetPublicoAlvoRecomendacao(tags);
        }

        public PostEvento(evento:Evento){
            return this._eventoService.PostEvento(evento)
            .then(resp =>{
                return {ok:true, objeto: JSON.parse(resp.data) };
            })
        }


}
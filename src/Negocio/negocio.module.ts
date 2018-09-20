import { NgModule } from "@angular/core";
import { AuthService } from "./Services/auth.service";
import { EventoService } from "./Services/evento.service";
import { AuthNegocio } from "./BO/auth.negocio";
import { EventoNegocio } from "./BO/evento.negocio";
import { HttpHelper } from "./Services/http.helper";
import { HTTP } from '@ionic-native/http'
import { FeedbackService } from "./Services/feedback.service";
import { FeedbackNegocio } from "./BO/feedback.negocio";
@NgModule({
    imports:[
        
        
    ],
    providers:[
        HTTP,
        
        HttpHelper,
        AuthService,
        EventoService,
        FeedbackService,

        AuthNegocio,
        EventoNegocio,
        FeedbackNegocio, 

    ],
    
})
export class NegocioModule{
}
import { HttpHelper } from "./http.helper";
import { Injectable } from "@angular/core";
import { Empresa } from "../Models/Empresa";

@Injectable()
export class AuthService{
    
    private baseUrl :string;
    
    constructor(
        private http:HttpHelper
    ) {
        this.baseUrl = http.baseUrl;
    }

    DoLogin(email: string, senha: string): any {
        return this.http.Post(this.baseUrl + "/Auth/DoLogin/Empresa",{
            email,password: senha
        });
    }

    Registrar(usuario:Empresa){
        return this.http.Post(this.baseUrl + "/Auth/Empresa",usuario);
    }

    GetUserInfo(){
        return this.http.Get(this.baseUrl + "Auth/Empresa");
    }
}
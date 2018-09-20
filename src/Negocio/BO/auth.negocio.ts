import { AuthService } from "../Services/auth.service";
import { Injectable } from "@angular/core";
import { IfObservable } from "rxjs/observable/IfObservable";
import { Empresa } from "../Models/Empresa";
import { SharedService } from "../Shared.service";

@Injectable()
export class AuthNegocio {
  

    constructor(
        private _authService: AuthService
    ) {
    }

    public async DoLogin(email: string, senha: string) {

        if (!email || !senha) {
            return { status: false, message: "Informe o Usuario ou Senha" };
        }
        var resp = (await this._authService.DoLogin(email, senha));
        
        if (resp.ok){
            SharedService.token = JSON.parse(resp.resp.data).access_token;
            return { status: true, message: "Login Efetuado", objeto: resp };
        }
        else
            return { status: false, message: "Usario ou senha incorretos" };
    }

    Registrar(usuario: Empresa): any {
       return this._authService.Registrar(usuario);
      }

    GetUsuarioLogado(){
        return this._authService.GetUserInfo().then(r => JSON.parse(r.data));
    }
}
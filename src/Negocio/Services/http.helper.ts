import { Injectable } from "@angular/core";
import { HTTP } from '@ionic-native/http'
import { Header } from "ionic-angular";
import { SharedService } from "../Shared.service";

@Injectable()
export class HttpHelper {

    public baseUrl: string = "http://192.168.137.1:5000/api";
    constructor(
        private http: HTTP
    ) {
    }


    private header() {
        this.http.setDataSerializer("json");
        this.http.setHeader("Accept", "Accept", "application/json");
        this.http.setHeader("Content-Type", "Content-Type", "application/json");
        this.http.setHeader("Authorization", "Authorization", "Bearer " + SharedService.token);
        this.http.setHeader("Tipo", "Tipo", "empresa");

        return {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + SharedService.token,
            "Tipo": "empresa"
        };
    }
    public Get(url: string): Promise<any> {

        return this.http.get(url, {}, this.header());
    }

    public Post(url: string, content: any): Promise<any> {

        return this.http.post(url, content, this.header())
            .then(resp => {
                return { ok: true, resp };
            }).catch(resp => {
                return { ok: false, resp };
            });
    }

    public Patch(url: string, content: any): Promise<any> {
        return this.http.patch(url, content, this.header());
    }
}
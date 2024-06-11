import { Injectable } from "@angular/core"
import { MedecinService } from "../medecin.service"
import { Observable } from "rxjs"
import { environment } from "../../../environments/environment.development"
import { HttpClient } from "@angular/common/http"
import { RestResponse } from "../../core/models/rest.response"
import { Medecin } from "../../core/models/medecin.model"

@Injectable({
    providedIn: 'root'
})
export class MedecinServiceImpl implements MedecinService {
    private ApiUrl=`${environment.API}/medecinRest`
    constructor(private http:HttpClient) { }
    

    findAll(page: number=0): Observable<RestResponse<Medecin[]>> {
        return this.http.get<RestResponse<Medecin[]>>(`${this.ApiUrl}?page=${page}`)
    }
}
import { Injectable } from "@angular/core"
import { environment } from "../../../environments/environment"
import { RvService } from "../Rv.service"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { RestResponse } from "../../core/models/rest.response"
import { Rv, RvCreate } from "../../core/models/Rv.model"

@Injectable({
    providedIn: 'root'
})
export class RvServiceImpl implements RvService {
    
    private ApiUrl=`${environment.API}/rvRest`
    constructor(private http:HttpClient) { }
    getSessionByUsername(name: string): Observable<RestResponse<Rv[]>> {
        const url=`${this.ApiUrl}/patient/${name}`
        return this.http.get<RestResponse<Rv[]>>(url)
    }

     create(rv: RvCreate): Observable<RestResponse<RvCreate>> {
        console.log("ok")
        return this.http.post<RestResponse<RvCreate>>(`${this.ApiUrl}`,rv)
     }
    

    findAll(page: number=0): Observable<RestResponse<Rv[]>> {
        return this.http.get<RestResponse<Rv[]>>(`${this.ApiUrl}?page=${page}`)
    }
}
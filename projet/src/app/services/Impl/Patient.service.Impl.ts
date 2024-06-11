import { HttpClient } from "@angular/common/http"
import { environment } from "../../../environments/environment.development"
import { PatientService } from "../patient.service"
import { Observable } from "rxjs"
import { RestResponse } from "../../core/models/rest.response"
import { Patient } from "../../core/models/patient.model"
import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export class PatientServiceImpl implements PatientService {
    private ApiUrl=`${environment.API}/patientRest`
    constructor(private http:HttpClient) { }
    

    findAll(page: number=0): Observable<RestResponse<Patient[]>> {
        return this.http.get<RestResponse<Patient[]>>(`${this.ApiUrl}?page=${page}`)
    }
}
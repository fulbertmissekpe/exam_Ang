import { Observable } from "rxjs";
import { Rv, RvCreate } from "../core/models/Rv.model";
import { RestResponse } from "../core/models/rest.response";
import { Service } from "./service";

export interface RvService extends Service<Rv[]>{
    create(mod: RvCreate): Observable<RestResponse<RvCreate>>;
    getSessionByUsername(username: string): Observable<RestResponse<Rv[]>>;
}
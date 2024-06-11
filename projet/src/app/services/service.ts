import { Observable } from "rxjs";
import { RestResponse } from "../core/models/rest.response";

export interface Service<O> {
    findAll(page:number,keyword:string | null):Observable<RestResponse<O>>;
}
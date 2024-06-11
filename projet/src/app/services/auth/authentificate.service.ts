import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../../environments/environment.development';
import { RestResponse } from '../../core/models/rest.response';
import { AuthentificationRequest, TokenResponse } from '../../core/models/authentification';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentificateService {
  
    isAuthentificated: boolean=true
    username:string|null=null
    roles:string[]=[]
    type:string|null=null
    private isBrowser: boolean=false;
    private apiUrl=`${environment.API}`
         constructor(private http:HttpClient,private router: Router,
          @Inject(PLATFORM_ID) private platformId:any
         ) { 
              this.isBrowser = isPlatformBrowser(platformId);
          }
    login(data: AuthentificationRequest): Observable<RestResponse<TokenResponse>> {
      return this.http.post<RestResponse<TokenResponse>>(`${this.apiUrl}/login`, data);
    }
    logout(): void {
      localStorage.removeItem('token');
      // Rediriger vers la page de connexion
      this.router.navigate(['/login']);
    }
    getAuthToken():string{
        if(this.isBrowser) {
          return localStorage.getItem('token')??"";
        }
        return "";
    }



}

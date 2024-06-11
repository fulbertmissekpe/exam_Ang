import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthentificateService } from '../../services/auth/authentificate.service';




export const tokenInterceptor: HttpInterceptorFn = (request, next) => {

  const authToken = inject(AuthentificateService).getAuthToken();
        const req=request.clone({
         headers:request.headers.set("Authorization",`Bearer ${authToken}`)
      })
  

  return next(req);
};

import { Routes } from '@angular/router';
import { ListeRvComponent } from './pages/liste-rv/liste-rv.component';
import { FormRvComponent } from './pages/form-rv/form-rv.component';
import { ListePatientComponent } from './pages/patient/liste-patient/liste-patient.component';
import { FormPatientComponent } from './pages/patient/form-patient/form-patient.component';
import { LoginComponent } from './pages/login/login.component';



export const routes: Routes = [
    
    {
        path:"rendezVous",
          children:[
            {
                path: "",
                component: ListeRvComponent
            },
            {
              path:"form",
              component:FormRvComponent
            }
        ]
    },
    {
      path:"login",
      component:LoginComponent

    },
    {
        path:"patient",
          children:[
            {
                path: "",
                component: ListePatientComponent
            },
            {
              path:"form",
              component:FormPatientComponent
            }
        ]
    },
    
    {path:'',
        redirectTo:'/login',
        pathMatch: 'full',
    },
    

];

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RvServiceImpl } from '../../services/Impl/Rv.service.impl';

import { RvCreate } from '../../core/models/Rv.model';
import { Router } from '@angular/router';
import { PatientServiceImpl } from '../../services/Impl/Patient.service.Impl';
import { MedecinServiceImpl } from '../../services/Impl/medecin.service.impl';
import { RestResponse } from '../../core/models/rest.response';
import { Patient } from '../../core/models/patient.model';
import { Medecin } from '../../core/models/medecin.model';
import { MenuComponent } from '../menu/menu.component';


@Component({
  selector: 'app-form-rv',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule,MenuComponent],
  templateUrl: './form-rv.component.html',
  styleUrl: './form-rv.component.css'
})
export class FormRvComponent {
  constructor(private rv:RvServiceImpl,private router:Router,
    private patientService:PatientServiceImpl,private medecinService:MedecinServiceImpl){}

    responsePatient?:RestResponse<Patient[]> 
  responseMedecin?:RestResponse<Medecin[]>
  errors: any;
  rvCreate:RvCreate={
    patient:"rrrr",
    medecin:"",
    dateHeure:"",
    specialite:"",
  }

  onSubmit() {
    console.log()
    console.log(this.rvCreate.dateHeure)
    this.rv.create(this.rvCreate).subscribe(data=>{
      console.log(data.statuts)
      if(data.statuts==201){
        this.router.navigateByUrl("/rendezVous")
      }else{
        this.errors=data.results
      }
    })
  }

  ngOnInit(page:number=0): void {
    this.medecinService.findAll(page).subscribe(data=>{
      this.responseMedecin=data
    });
    this.patientService.findAll(page).subscribe(data=>{
      this.responsePatient=data
    });
  }

}

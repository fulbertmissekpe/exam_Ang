import { Component, OnInit } from '@angular/core';
import { RestResponse } from '../../../core/models/rest.response';
import { Patient } from '../../../core/models/patient.model';
import { PaginationModel } from '../../../core/models/pagination.model';
import { PatientServiceImpl } from '../../../services/Impl/Patient.service.Impl';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PaginationComponent } from '../../../core/components/pagination/pagination.component';

@Component({
  selector: 'app-liste-patient',
  standalone: true,
  imports: [CommonModule,RouterLink,PaginationComponent],
  templateUrl: './liste-patient.component.html',
  styleUrl: './liste-patient.component.css'
})
export class ListePatientComponent implements OnInit{
  response?:RestResponse<Patient[]> 
  dataPagination:PaginationModel={
    pages: [],
    currentPage: 0
  }

  constructor(private patient:PatientServiceImpl){}
  ngOnInit(): void {
    this.refresh();
   
  }
  refresh(page:number=0){
    this.patient.findAll(page).subscribe(data=>{
    
      this.response=data
      this.dataPagination.pages=data.pages!
      this.dataPagination.currentPage=data.currentPage!
    });
  }
  paginate(page: number) {
    this.refresh(page);
  }
}

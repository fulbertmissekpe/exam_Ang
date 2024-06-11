import { Component, OnInit } from '@angular/core';
import { RestResponse } from '../../core/models/rest.response';
import { Rv } from '../../core/models/Rv.model';
import { PaginationModel } from '../../core/models/pagination.model';
import { RvService } from '../../services/Rv.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PaginationComponent } from '../../core/components/pagination/pagination.component';
import { RvServiceImpl } from '../../services/Impl/Rv.service.impl';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-liste-rv',
  standalone: true,
  imports: [CommonModule,RouterLink,PaginationComponent,MenuComponent],
  templateUrl: './liste-rv.component.html',
  styleUrl: './liste-rv.component.css'
})
export class ListeRvComponent implements OnInit{
  response?:RestResponse<Rv[]> 
  dataPagination:PaginationModel={
    pages: [],
    currentPage: 0
  }

  constructor(private rv:RvServiceImpl){}
  ngOnInit(): void {
    this.refresh();
   
  }
  refresh(page:number=0){
    console.log(localStorage.getItem('auth')!)
    console.log("ok")
    this.rv.getSessionByUsername(localStorage.getItem('auth')!).subscribe(data=>{
      console.log(data)
      this.response=data
      this.dataPagination.pages=data.pages!
      this.dataPagination.currentPage=data.currentPage!
    });
  }
  paginate(page: number) {
    this.refresh(page);
  }

}

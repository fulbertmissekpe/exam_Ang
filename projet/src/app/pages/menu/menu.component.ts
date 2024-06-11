import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { AuthentificateService } from '../../services/auth/authentificate.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  constructor(
    
    private authService: AuthentificateService,
    
  ) {
    
  }
  localStorage:string | null=null ;
  onLogoutClick(): void {
    this.authService.logout();
  }
  ngOnInit(): void {
   
    this.localStorage= this.authService.type;
   
  }


}

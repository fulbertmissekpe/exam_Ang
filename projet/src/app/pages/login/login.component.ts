import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificateService } from '../../services/auth/authentificate.service';
import { RestResponse } from '../../core/models/rest.response';
import { TokenResponse } from '../../core/models/authentification';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthentificateService,
    private router: Router
  ) {
    this.form = this.fb.group({
      username: '',
      password: '',
    });
  }

  ngOnInit(): void {}

  onSubmit() {
   
    let data = this.form.getRawValue();
    this.authService.login(data).subscribe((res: RestResponse<TokenResponse>) => {
    
        this.authService.isAuthentificated=true;
        this.authService.username=res.results.username
        this.authService.roles=res.results.roles
        this.authService.type=res.results.type
        localStorage.setItem('auth',this.authService.username)
        localStorage.setItem('type',this.authService.type)
        localStorage.setItem("token",res.results.token)
        console.log(this.authService.username)
        this.router.navigateByUrl('/rendezVous');
     
    });
  }
}

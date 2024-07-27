import { Component } from '@angular/core';
import { DefaultLoginLayoultComponent } from '../../components/default-login-layoult/default-login-layoult.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    DefaultLoginLayoultComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup

  constructor(
    private router: Router,
    private loginService: LoginService
  ){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  submit(){
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe({
        next: () => console.log("sucesso"),
        error: () => console.log("erro")
      })
  }

  navigate(){
    this.router.navigate(["/signup"])
  }

}

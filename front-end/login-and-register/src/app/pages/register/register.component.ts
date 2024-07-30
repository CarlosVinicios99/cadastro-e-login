import { Component } from '@angular/core';
import { DefaultLoginLayoultComponent } from '../../components/default-login-layoult/default-login-layoult.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    DefaultLoginLayoultComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerForm!: FormGroup

  constructor(
    private router: Router,
    private toastService: ToastrService
  ){
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  /*
  submit(){
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe({
        next: () => this.toastService.success("Login realizado com sucesso!"),
        error: () => this.toastService.error("Erro inesperado! Tente novamente mais tarde")
      })
  }
  */

  navigate(){
    this.router.navigate(["/login"])
  }

}

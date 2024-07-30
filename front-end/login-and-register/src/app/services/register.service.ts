import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { RegisterResponse } from '../types/register-response';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  register(name: string, email: string, password: string, passwordConfirm: string){
    return this.httpClient.post<RegisterResponse>(
      "http://localhost:8080/auth/register",
      {
        email,
        name,
        password,
        passwordConfirm
      }
    ).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("auth-token", value.name)
      })
    )
  }
}

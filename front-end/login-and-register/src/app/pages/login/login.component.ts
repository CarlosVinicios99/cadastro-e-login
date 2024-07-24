import { Component } from '@angular/core';
import { DefaultLoginLayoultComponent } from '../../components/default-login-layoult/default-login-layoult.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DefaultLoginLayoultComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}

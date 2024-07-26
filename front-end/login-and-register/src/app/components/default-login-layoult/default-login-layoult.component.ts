import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-login-layoult',
  standalone: true,
  imports: [],
  templateUrl: './default-login-layoult.component.html',
  styleUrl: './default-login-layoult.component.scss'
})
export class DefaultLoginLayoultComponent {
  @Input() title: string = ""
  @Input() primaryBtnText = ""
  @Input() secondaryBtnText = ""
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-login-layoult',
  standalone: true,
  imports: [],
  templateUrl: './default-login-layoult.component.html',
  styleUrl: './default-login-layoult.component.scss'
})
export class DefaultLoginLayoultComponent {
  @Input() title: string = ""
  @Input() primaryBtnText: string = ""
  @Input() secondaryBtnText: string = ""
  @Input() disablePrimaryBtn: boolean = true
  @Output("submit") onSubmit = new EventEmitter()
  @Output("navigate") onNavigate = new EventEmitter()

  submit(){
    this.onSubmit.emit();
  }

  navigate(){
    this.onNavigate.emit()
  }
}

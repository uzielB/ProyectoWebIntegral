import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent { 
  formRegister!: FormGroup;
    private fb=inject (FormBuilder);
    
    
  constructor(){
    this.formRegister = this.fb.group({
          nombrecom: [],
          user: [],
          email: [],
          password: [],
          confirmPass:[]
        })
  }
  register(){
    localStorage.setItem('token', JSON.stringify(this.formRegister.value))
  }
}

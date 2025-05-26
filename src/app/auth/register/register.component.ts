import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  formRegister!: FormGroup;
    private fb=inject (FormBuilder);
    
    
  constructor(){
    this.formRegister = this.fb.group({
          nombrecom: [],
          user: [],
          email: [],
          password: [],
          confirmpassword: [],
          confirmPass:[]
        })
  }
  register(){
    localStorage.setItem('token', JSON.stringify(this.formRegister.value))
  }
 }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Security } from 'src/app/utils/security.util';
import { CustomValidator } from 'src/app/validators/custom.validator';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  
  public form: FormGroup;
  public busy!: boolean;

  constructor(private router: Router,private service: DataService, private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', Validators.compose([
        Validators.minLength(14),
        Validators.maxLength(15),
        Validators.required,
        CustomValidator.isCpf
      ])],
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required,
      ])]
    });
  }

  ngOnInit() {        
    const token = Security.getToken();
    if (token) {
      this.busy = true;
      this.service.refreshToken().subscribe({
        next :(data: any) => {
        this.setUser(data.customer, data.token);
        this.busy = false;
      },
        error :(err) => {
          console.log(err);
          localStorage.clear();
          this.busy = false;
        }
    });
    }
    else {
      this.busy = false;
      console.log('No token');
    }
  }

  submit() {
    this.busy = true;    
    this.service.authenticate(this.form.value).subscribe((data: any) => { this.setUser(data.customer, data.token) },
      (err) => {
        console.log(err);
        this.busy = false;
      }
    );
    this.busy = false;
  }

  setUser(user: any, token : any) {
    
    Security.set(user, token);
    console.log(user, token);
    this.router.navigate(['/']);
  }

}

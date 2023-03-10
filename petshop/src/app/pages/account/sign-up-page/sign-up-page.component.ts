import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { CustomValidator } from 'src/app/validators/custom.validator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {
  public form: FormGroup;
  public busy = false;  

  constructor(
    private router: Router,
    private service: DataService,
    private fb: FormBuilder,      
  ) {
    this.form = this.fb.group({
      name: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(80),
        Validators.required
      ])],
      document: ['', Validators.compose([
        Validators.minLength(14),
        Validators.maxLength(14),
        Validators.required,
        CustomValidator.isCpf(),
      ])],
      email: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(120),
        Validators.required,
        CustomValidator.EmailValidator
      ])],
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])]
    });
  }

  ngOnInit() {
  }

  submit() {
    this.busy = true;
    this
      .service
      .create(this.form.value)
      .subscribe(
        (data: any) => {               
          Swal.fire('Cadastrado com Sucesso', '', 'success')  
          this.busy = true;
          this.router.navigate(['/login']);
        },
        (err) => {
          console.log(err);
          this.busy = false;
        }
      );
  }

}

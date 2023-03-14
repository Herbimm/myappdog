import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { CustomValidator } from 'src/app/validators/custom.validator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reset-password-page',
  templateUrl: './reset-password-page.component.html',
  styleUrls: ['./reset-password-page.component.css']
})

export class ResetPasswordPageComponent implements OnInit {
  public form: FormGroup;
  public busy = false;

  constructor(
    private router: Router,
    private service: DataService,
    private fb: FormBuilder,      
  ) {
    this.form = this.fb.group({      
      email: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(120),
        Validators.required,
        CustomValidator.EmailValidator
      ])]      
    });
  }

  ngOnInit() {

  }

  submit() {
    this.busy = true;
    this.service.resetPassword(this.form?.value).subscribe((data) => {
      this.busy = false;
      this.router.navigate(['/login']);
      Swal.fire('Código enviado', '', 'success');
    },
      (err) => {
        console.log(err);
      })
  }

}

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ImpApiService } from 'src/Service/imp-api.service';
import { auth } from 'src/app/constant/Routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private router: Router,
    private FormBuilder: FormBuilder,
    private impApiService: ImpApiService,
  ) { }

  formData!: FormGroup;
  submitted = false;

  ngOnInit(): void {
    this.formData = this.FormBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^05[0-9]{8}$/)]],
      password: ['', [Validators.required, Validators.pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}/)]],
      confirmation: ['', [Validators.required]],
    },
    {
      validator: this.mustMatch('password', 'confirmation')
    });
  }

  mustMatch(password: string, confirmation: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmationControl = formGroup.controls[confirmation];

      if (confirmationControl.errors && !confirmationControl.errors['mustMatch']) {
        return;
      }

      if (passwordControl.value !== confirmationControl.value) {
        confirmationControl.setErrors({ mustMatch: true });
      } else {
        confirmationControl.setErrors(null);
      }
    };
  }

  get formDataGet() {
    return this.formData.controls;
  }

  signUp() {
    this.submitted = true;
    if (this.formData.invalid) {
      return;
    }

    const formData = new FormData();
    formData.append('username', this.formData.value.username);
    formData.append('email', this.formData.value.email);
    formData.append('phone', this.formData.value.phone);
    formData.append('password', this.formData.value.password);
    formData.append('confirmation', this.formData.value.confirmation);

    console.log(this.formData);

    this.impApiService.post(auth.register, formData).subscribe(data => {
      if (data.message == "Account successfully created") {
        localStorage.setItem('email', this.formData.value.email);
        console.log(localStorage.getItem('email'));
      }
    });

    this.router.navigate(['/auth/login']);
  }
}

import { auth } from './../../constant/Routes';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ImpApiService } from 'src/Service/imp-api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private FormBuilder: FormBuilder,
    private router: Router,
    private impApiService: ImpApiService,
    private modalService: NgbModal
  ) { }

  formData!: FormGroup;
  submitted = false;

  ngOnInit(): void {
    this.formData = this.FormBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}/)]],
    });
  }

  get formDataGet() {
    return this.formData.controls;
  }

  logIn() {
    this.submitted = true;
    if (this.formData.invalid) {
      return;
    }

    const formData = new FormData();
    formData.append('email', this.formData.value.email);
    formData.append('password', this.formData.value.password);

    console.log(this.formData);

    this.impApiService.post(auth.login, formData).subscribe(data => {
      if (data.message == "Account successfully created") {
        localStorage.setItem('email', this.formData.value.email);
        console.log(localStorage.getItem('email'));
      }
    });

    this.router.navigate(['/apps/pages/home']);
  }

  open(content: any) {
    this.modalService.open(content, { centered: true})
  };

  open1(content1: any) {
    this.modalService.open(content1, { centered: true })
  }

  close() {
    location.reload()
  }
}

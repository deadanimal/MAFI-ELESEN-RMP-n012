import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { NotifyService } from 'src/app/shared/handler/notify/notify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Image
  imgLogo = 'assets/img/logo/mafi-logo.png'

  // Form
  focusUsername
  focusPassword
  loginForm: FormGroup
  loginFormMessages = {
    'username': [
      { type: 'required', message: 'Email diperlukan' },
      { type: 'email', message: 'Sila masukkan email yang sah'}
    ],
    'password': [
      { type: 'required', message: 'Kata laluan diperlukan' },
      { type: 'minLength', message: 'Kata laluan sekurang-kurangnya 8 aksara' }
    ]
  }

  constructor(
    private authService: AuthService,
    private notifyService: NotifyService,
    private formBuilder: FormBuilder,
    private loadingBar: LoadingBarService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ]))
    })
  }

  login() {
    this.loadingBar.start()
    this.loadingBar.complete()
    this.successMessage()
    if (this.loginForm.value.username == 'admin') {
      this.authService.userRole = 1
      localStorage.setItem('userRole', '1');
      this.navigatePage('dashboard-admin')
    }
    else if (this.loginForm.value.username == 'user') {
      this.authService.userRole = 2
      localStorage.setItem('userRole', '2');
      this.navigatePage('dashboard-user')
    }
  }

  navigatePage(path: String) {
    if (path == 'login') {
      return this.router.navigate(['/auth/login'])
    }
    else  if (path == 'forgot') {
      return this.router.navigate(['/auth/forgot'])
    }
    else  if (path == 'register') {
      return this.router.navigate(['/auth/register'])
    }
    else if (path == 'dashboard-admin') {
      return this.router.navigate(['/admin/dashboard'])
    }
    else if (path == 'dashboard-user') {
      return this.router.navigate(['/user/dashboard'])
    }
  }

  successMessage() {
    let title = 'Log masuk sekarang'
    let message = 'Berjaya'
    this.notifyService.openToastr(title, message)
  }

}

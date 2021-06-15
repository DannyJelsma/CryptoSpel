import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  public username = 'username';
  public password = 'password';

  @ViewChild('form')
  private form: NgForm;

  constructor(
    private authService: AuthService,
    private router: Router
    // private validationService: FormService,
  ) {}

  public login(): void {
    this.authService.authenticate(this.username, this.password).subscribe(() => {
      // this.navCtrl.setRoot(HomePage);
      this.router.navigate(['']);
      console.log('success!');
    }, (error: HttpErrorResponse) => {
      console.log(error);
      // this.credentialsCheck(error);
      // this.validationService.validate(this.form, error);
    });
  }

  ngOnInit(): void {}
}

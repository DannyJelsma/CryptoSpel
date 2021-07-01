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
  public errorMessage = '';

  @ViewChild('form')
  private form: NgForm;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  public login(): void {
    this.authService.authenticate(this.username, this.password).subscribe(() => {
      this.router.navigate(['']);
    }, (error: HttpErrorResponse) => {
      console.log(error);
      this.errorMessage = error.error.messages[0];
    });
  }

  ngOnInit(): void {}
}

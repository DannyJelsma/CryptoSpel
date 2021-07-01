import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../_models/user';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  public user: UserModel = new UserModel();
  public errorMessage = '';


  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  register(): void {
    this.authService.createUser(this.user).subscribe((user) => {
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.error.messages[0];
      // this.validationService.validate(this.form, error);
    });
  }

}

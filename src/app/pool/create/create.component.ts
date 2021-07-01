import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {environment} from '@environment';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  createPoolForm = new FormGroup({
    name: new FormControl(''),
    budget: new FormControl(''),
    end_date: new FormControl(''),
  });

  public errorMessage = '';

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {}

  submitForm(): void {
    // do HTTP request
    // => success -> redirect to pool with id
    // => no success -> show error

    let { name, budget, end_date } = this.createPoolForm.value;
    end_date = new Date(end_date).getTime();
    console.log({
      name,
      budget,
      end_date,
    });
    this.errorMessage = 'Please fill the required inputs';
    this.http
      .post(`${environment.backendUrl}/pool/create`, {
        name,
        budget,
        end_date,
      })
      .subscribe((response: any) => {
        const { pool } = response;
        this.router.navigate([`pool/${pool}/dashboard`]);
      });
  }
}

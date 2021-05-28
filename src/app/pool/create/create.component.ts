import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  submitForm() {
    // redirect user to the pool
    this.router.navigate(['pool/1/dashboard']);
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss'],
})
export class JoinComponent implements OnInit {
  constructor(
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.parent.params.subscribe((params) => {
      let { id: pool } = params;
      this.http
        .post(`http://localhost:3000/pool/join/${pool}`, {})
        .subscribe(() => this.router.navigate([`pool/${pool}/dashboard`]));
    });
  }
}

import { UserService } from './../../pool/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

// interface Breadcrumb {
//   name: string;
// }

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
})
export class AppLayoutComponent implements OnInit {
  hasLoaded = false;
  pool_id: string;
  user: PoolModel.UserData;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  getPoolData(): void {
    this.userService
      .getPoolData(this.pool_id)
      .then((user) => {
        this.user = user;
        this.hasLoaded = true;
      })
      .catch(console.error);
  }

  ngOnInit(): void {
    // set pool_id if available
    this.route.params.subscribe((params) => {
      let { id: pool } = params;
      this.pool_id = pool;
    });

    if (this.pool_id) {
      // retrieve user information from service
      this.getPoolData();
    }
  }
}

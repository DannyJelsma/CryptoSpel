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
  // breadcrumbs: Breadcrumb[] = [];

  constructor(private router: Router) {}

  // Home / Dashboard / Currency / Bitcoin

  ngOnInit(): void {
    // this.breadcrumbs = this.router.url
    //   .split('/')
    //   .slice(3)
    //   .map((i) => {
    //     i = i.charAt(0).toUpperCase() + i.slice(1, i.length);
    //     return {
    //       name: i,
    //     };
    //   });
  }
}

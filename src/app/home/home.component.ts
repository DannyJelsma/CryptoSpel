import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {environment} from '@environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pools: UserModel.Pool[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get(`${environment.backendUrl}/pool/list`, {})
      .subscribe(({ pools: foundPools }: any) => {
        this.pools = foundPools.map((i: UserModel.Pool) => {
          const dateNow = new Date().getTime();
          const dateEnd = new Date(i.end_date).getTime();
          i.ends_in_days = Math.floor(
            (dateEnd - dateNow) / (1000 * 60 * 60 * 24)
          );
          return i;
        });
      });
  }
}

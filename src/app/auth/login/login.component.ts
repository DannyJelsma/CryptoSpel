import {Component, Input, OnInit} from '@angular/core';

const validTypes = [
  'text',
  'password',
  'email',
  'number',
  'url',
  'tel',
  'search',
  'range',
  'color',
  'date',
  'time',
  'datetime',
  'datetime-local',
  'month',
  'week'
];

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() value: string;
  @Input() type = 'text';
  @Input() required: false;
  @Input() placeholder: '';
  @Input() floating = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}

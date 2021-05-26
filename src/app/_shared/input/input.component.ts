
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
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
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

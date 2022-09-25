import { Component, Input, OnInit } from '@angular/core';
import { IAction } from '../shared/action';

import * as moment from 'moment';
@Component({
  selector: 'ap-action-card',
  templateUrl: './action-card.component.html',
  styleUrls: ['./action-card.component.css'],
})
export class ActionCardComponent implements OnInit {
  constructor() {}

  dateNow!: string;
  color!: string;
  colors: string[] = ['#976f23', '#a8aaad', '#3c8732'];
  icon!: string;
  icons: string[] = ['fa fa-inbox', 'fa fa-gear', 'fa fa-list'];
  defaultName: string = 'UNKNOWN';
  defaultImage: string =
    'https://dummyimage.com/500x500/ccc2cc/000000&text=USER';

  @Input() action!: IAction;
  ngOnInit(): void {
    // this.dateNow = new Date(this.action.date);
    this.dateNow = moment(this.action.date).format('hh:mm A');

    this.color =
      'background-color: ' +
      this.colors[Math.floor(Math.random() * this.colors.length)];
    this.icon = this.icons[Math.floor(Math.random() * this.icons.length)];
  }
}

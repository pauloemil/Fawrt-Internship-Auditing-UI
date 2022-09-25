import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ap-action-card-circular-header',
  templateUrl: './action-card-circular-header.component.html',
  styleUrls: ['./action-card-circular-header.component.css'],
})
export class ActionCardCircularHeaderComponent implements OnInit {
  constructor() {}
  @Input() icon!: string;
  @Input() dateNow!: string;
  @Input() color!: string;

  ngOnInit(): void {}
}

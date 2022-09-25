import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SelectorsService } from '../shared/providers/selectors.service';
import {
  IActionSelector,
  IParameterSelector,
  IApplicationSelector,
} from '../shared/selector';
import { IParameterList } from '../shared/parameterList';
import { EventEmitterService } from '../shared/providers/event-emitter.service';

@Component({
  selector: 'ap-actions-search',
  templateUrl: './actions-search.componentTest.html',
  styleUrls: ['./actions-search.component.css'],
})
export class ActionsSearchComponent implements OnInit {
  sub!: Subscription;
  actionTypes!: IActionSelector[];
  parameterTypes!: IParameterSelector[];
  applications!: IApplicationSelector[];

  userName: string = '';
  businessEntityName: string = '';
  actionTypeId: number = 0;
  parameterTypeId: number = 0;
  applicationName: string = '';
  parameterValue: string = '';

  constructor(
    private selectorService: SelectorsService,
    private eventEmitterService: EventEmitterService
  ) {}

  ngOnInit(): void {
    this.selectorService.getSelectors().subscribe({
      next: (selectors) => {
        this.actionTypes = selectors.actionTypes;
        this.parameterTypes = selectors.parameterTypes;
        this.applications = selectors.applications;
        console.log(this.actionTypes);
        console.log(this.parameterTypes);
        console.log(this.applications, 'apps');
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  ChangeActionType(e: any) {
    this.actionTypeId = e.target.value;
    console.log(e.target.value);
  }
  ChangeParameterType(e: any) {
    this.parameterTypeId = e.target.value;
    console.log(e.target.value);
  }
  ChangeApplication(e: any) {
    this.applicationName = e.target.value;
  }
  renewActionsResult() {
    let parameterList: IParameterList = {
      user_name: this.userName,
      application_name: this.applicationName,
      business_entity_name: this.businessEntityName,
      action_type_id: this.actionTypeId,
      parameter: {
        id: this.parameterTypeId,
        value: this.parameterValue,
      },
    };
    this.eventEmitterService.onSearchButtonClick(parameterList);
  }
}

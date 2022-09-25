import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IAction } from '../shared/action';
import { ActionsService } from '../shared/providers/actions.service';
import { EventEmitterService } from '../shared/providers/event-emitter.service';
import { IParameterList } from '../shared/parameterList';

@Component({
  selector: 'ap-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  constructor(
    private actionService: ActionsService,
    private eventEmitterService: EventEmitterService
  ) {}

  sub!: Subscription;
  total_count!: number;
  page_size!: number;
  page_number!: number;
  actions: IAction[] = [];
  parameterString: string = '?';

  ngOnInit(): void {
    this.sub = this.actionService
      .getActions('')
      // .getActions('?parameterTypeId=1&parameterValue=paulo1')
      .subscribe({
        next: (actionsInfo) => {
          this.actions = actionsInfo.actions;
          this.total_count = actionsInfo.total_count;
          this.page_size = actionsInfo.page_size;
          this.page_number = actionsInfo.page_number;
          console.log('====>', actionsInfo);
        },
        error: (err) => {
          console.error(err);
        },
      });
    if (this.eventEmitterService.subsVar == undefined) {
      this.eventEmitterService.subsVar =
        this.eventEmitterService.invokeRenewActionsFunction.subscribe(
          (parameterList: IParameterList) => {
            this.renewActions(parameterList);
          }
        );
    }
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  renewActions(parameterList: IParameterList) {
    this.parameterString = '?';
    if (parameterList.user_name) {
      this.parameterString += '&user_name=' + parameterList.user_name;
    }
    if (parameterList.application_name) {
      this.parameterString +=
        '&application_name=' + parameterList.application_name;
    }
    if (parameterList.business_entity_name) {
      this.parameterString +=
        '&business_entity_name=' + parameterList.business_entity_name;
    }
    if (parameterList.action_type_id && parameterList.action_type_id != 0) {
      this.parameterString += '&action_type_id=' + parameterList.action_type_id;
    }
    if (
      parameterList.parameter.id &&
      parameterList.parameter.id != 0 &&
      parameterList.parameter.value
    ) {
      this.parameterString +=
        '&parameter_type_id=' + parameterList.parameter.id;
      this.parameterString +=
        '&parameter_value=' + parameterList.parameter.value;
    }
    // alert(parameterString);
    this.callActions(this.parameterString);
  }
  onPagenationChange(e: any) {
    console.log(e, 'THISISSPARTA');
    this.page_number = e;
    this.callActions(this.parameterString + '&page_number=' + this.page_number);
  }
  callActions(parameterString: string) {
    this.sub = this.actionService.getActions(parameterString).subscribe({
      next: (actionsInfo) => {
        this.actions = actionsInfo.actions;
        this.total_count = actionsInfo.total_count;
        this.page_size = actionsInfo.page_size;
        this.page_number = actionsInfo.page_number;
        console.log('====>', actionsInfo);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}

import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { IParameterList } from '../../shared/parameterList';

@Injectable({
  providedIn: 'root',
})
export class EventEmitterService {
  invokeRenewActionsFunction = new EventEmitter();
  subsVar!: Subscription;
  constructor() {}
  onSearchButtonClick(parameterList: IParameterList) {
    this.invokeRenewActionsFunction.emit(parameterList);
  }
}

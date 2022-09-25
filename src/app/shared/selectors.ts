import {
  IActionSelector,
  IParameterSelector,
  IApplicationSelector,
} from './selector';

export interface ISelectors {
  parameterTypes: IParameterSelector[];
  actionTypes: IActionSelector[];
  applications: IApplicationSelector[];
}

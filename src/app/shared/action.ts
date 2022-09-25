import { IUser } from './user';

export interface IAction {
  action_id: number;
  description_en: string;
  description_ar: string;
  date: string;
  user: IUser;
  //   userName: string;
  //   userPhoto: string;
}

export interface IActionInfo {
  total_count: number;
  page_size: number;
  page_number: number;
  actions: IAction[];
}

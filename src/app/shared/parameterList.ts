export interface IParameterList {
  user_name: string;
  application_name: string;
  business_entity_name: string;
  action_type_id: number;
  parameter: {
    id: number;
    value: string;
  };
}

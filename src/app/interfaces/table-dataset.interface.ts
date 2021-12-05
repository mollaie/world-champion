import { Observable } from 'rxjs';

export interface IDataSet {
  schema: Array<ITableSchema>;
  data$?: Observable<ITableDataContract>;
}

export interface ITableSchema {
  title: string;
  type: TableSchemaType;
  field: string;
  order: number;
}

export interface ITableDataContract {
  limit: number;
  offset: number;
  total: number;
  data: Array<any>;
}

export type TableSchemaType =
  | 'String'
  | 'HyperLink'
  | 'AutoNumber'
  | 'Date'
  | 'Time'
  | 'Number';

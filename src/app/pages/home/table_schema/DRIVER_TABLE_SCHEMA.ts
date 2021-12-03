import { ITableSchema } from 'src/app/interfaces/table-dataset.interface';

export const DRIVER_TABLE_SCHEMA: Array<ITableSchema> = [
  {
    field: 'code',
    order: 0,
    title: 'Code',
    type: 'String',
  },
  {
    field: 'name',
    order: 0,
    title: 'Name',
    type: 'String',
  },
  {
    field: 'dateOfBirth',
    order: 0,
    title: 'Date Of Birth',
    type: 'Date',
  },
  {
    field: 'nationality',
    order: 0,
    title: 'Nationality',
    type: 'String',
  },
];

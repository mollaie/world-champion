import { ITableSchema } from 'src/app/interfaces/table-dataset.interface';

export const CONSTRUCTOR_TABLE_SCHEMA: Array<ITableSchema> = [
  {
    field: 'name',
    order: 0,
    title: 'Name',
    type: 'String',
  },
  {
    field: 'nationality',
    order: 0,
    title: 'Nationality',
    type: 'String',
  },
  {
    field: 'url',
    order: 0,
    title: 'More Info',
    type: 'HyperLink',
  },
];

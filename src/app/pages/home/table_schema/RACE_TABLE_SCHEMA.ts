import { ITableSchema } from 'src/app/interfaces/table-dataset.interface';

export const RACE_TABLE_SCHEMA: Array<ITableSchema> = [
  {
    field: 'round',
    order: 0,
    title: 'Round',
    type: 'Number',
  },
  {
    field: 'raceName',
    order: 0,
    title: 'Race Name',
    type: 'HyperLink',
  },
  {
    field: 'date',
    order: 0,
    title: 'Date',
    type: 'Date',
  },
  {
    field: 'time',
    order: 0,
    title: 'Hour',
    type: 'String',
  },
  {
    field: 'country',
    order: 0,
    title: 'Round',
    type: 'String',
  },
  {
    field: 'locality',
    order: 0,
    title: 'Location',
    type: 'HyperLink',
  },
];

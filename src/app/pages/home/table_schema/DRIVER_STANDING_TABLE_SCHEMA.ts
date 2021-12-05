import { ITableSchema } from 'src/app/interfaces/table-dataset.interface';

export const DRIVER_STANDING_TABLE_SCHEMA: Array<ITableSchema> = [
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
  {
    field: 'wins',
    order: 0,
    title: 'Winds',
    type: 'Number',
  },
  {
    field: 'points',
    order: 0,
    title: 'Points',
    type: 'Number',
  },
  {
    field: 'position',
    order: 0,
    title: 'Position',
    type: 'Number',
  },
];

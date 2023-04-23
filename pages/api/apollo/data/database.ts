import { Status } from '../dataTypes/dataType';
export const statuses: Status[] = [
  {
    id: '2',
    body: 'inviting coworkers',
    author: 'jack',
    createdAt: new Date(2021, 4, 2).toISOString(),
  },
  {
    id: '1',
    body: 'just setting up my app',
    author: 'jack',
    createdAt: new Date(2021, 4, 1).toISOString(),
  },
];

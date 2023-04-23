import { Status } from '../dataTypes/dataType';
import { statuses } from '@@/pages/api/apollo/data/database';

export const resolvers = {
  Query: {
    statuses() {
      return listStatuses();
    },
    // getAuthors() {

    // },
    hello() {
      return 'Hello World!';
    },
  },
};

const listStatuses = (): Status[] => statuses;

import { QueryBuilder } from './QueryBuilder';

export interface Query {
  queryBuilder: QueryBuilder;
  execute(): String;
}

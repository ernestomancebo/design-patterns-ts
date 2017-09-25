import { Query } from './Query';

export interface QueryBuilder {
  fromTable(fromTable: string): QueryBuilder;
  whereClause(whereClause: string): QueryBuilder;

  getFromTable(): string[];
  getWhereClause(): string[];

  build(): Query;
}

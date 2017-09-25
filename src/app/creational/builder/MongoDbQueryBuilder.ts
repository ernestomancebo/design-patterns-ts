import { MongoDbQuery } from './MongoDbQuery';
import { QueryBuilder } from './QueryBuilder';
import { Query } from './Query';

export class MongoDbQueryBuilder implements QueryBuilder {

  private fromTableList: string[] = [];
  private whereClauseList: string[] = [];

  fromTable(fromTable: string): QueryBuilder {
    const me = this;
    me.fromTableList.push(fromTable);

    return me;
  }

  whereClause(whereClause: string): QueryBuilder {
    const me = this;
    me.whereClauseList.push(whereClause);

    return me;
  }

  getFromTable(): string[] {
    return this.fromTableList;
  }

  getWhereClause(): string[] {
    return this.whereClauseList;
  }

  build(): Query {
    const me = this;

    let queryString: string = 'SELECT *'

    if (me.fromTableList.length < 0) {
      throw 'At least one FROM table is needed';
    }

    let from: string = me.fromTableList.pop();

    queryString = queryString.concat(' FROM ');
    while (from != null) {
      queryString = queryString.concat(from);
      from = me.fromTableList.pop();

      if (from != null) {
        queryString = queryString.concat(', ');
      }
    }

    let where: string = me.whereClauseList.pop();

    if (where != null) {
      queryString = queryString.concat(' WHERE ');
    }

    while (where != null) {
      queryString = queryString.concat(where);
      where = me.whereClauseList.pop();

      if (where != null) {
        queryString = queryString.concat(' AND ');
      }
    }

    return new MongoDbQuery(me, queryString);
  }

}

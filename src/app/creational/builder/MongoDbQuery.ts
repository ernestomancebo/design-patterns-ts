import { MongoDbQueryBuilder } from './MongoDbQueryBuilder';
import { QueryBuilder } from './QueryBuilder';
import { Query } from './Query';

export class MongoDbQuery implements Query {

  private querystring: string;
  queryBuilder: QueryBuilder = null;

  constructor(queryBuilder: QueryBuilder, queryString: string) {
    const me = this;
    me.queryBuilder = queryBuilder;
    me.querystring = queryString;
  }

  execute(): String {
    return this.querystring;
  }

}

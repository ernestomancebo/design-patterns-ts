import { MongoDbQueryBuilder } from './MongoDbQueryBuilder';
import { SqlDbQueryBuilder } from './SqlDbQueryBuilder';
import { Query } from './Query';
import tape = require('tape');

tape('Assert query builders', (assert) => {
  const SQL_QUERY = "SELECT * FROM MYSQL";
  const MONGO_QUERY = "SELECT * FROM MONGODB, COUCHDB WHERE TYPE = 'NOSQL'";

  let query: Query = null;

  query = new SqlDbQueryBuilder().fromTable("MYSQL").build();

  assert.equals(SQL_QUERY, query.execute());

  query = new MongoDbQueryBuilder()
    .fromTable('COUCHDB')
    .fromTable('MONGODB')
    .whereClause('TYPE = \'NOSQL\'')
    .build();

  assert.equals(MONGO_QUERY, query.execute());
  assert.end();
});

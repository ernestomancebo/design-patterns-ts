import { Preferences } from './singleton';
import tape = require('tape');

tape('Assert singleton', (assert) => {
  let singleton1: Preferences = Preferences.getInstance();
  let singleton2: Preferences = Preferences.getInstance();
  let singleton3: Preferences = Preferences.getInstance();

  const movie1 = 'The Last Warrior';
  const movie2 = 'Moana';

  assert.equal(null, singleton1.getFavoriteMovie());

  singleton2.setFavoriteMovie(movie1);
  assert.equal(movie1, singleton3.getFavoriteMovie());

  singleton3.setFavoriteMovie(movie2);
  assert.equal(movie2, singleton1.getFavoriteMovie());

  assert.end();
});

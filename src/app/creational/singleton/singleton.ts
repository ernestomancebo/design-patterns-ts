export class Preferences {
  private static instance: Preferences = null;
  private favoriteMovie: string = null;

  private constructor() {
  }

  public getFavoriteMovie(): string {
    return this.favoriteMovie;
  }

  public setFavoriteMovie(newMovie: string): void {
    this.favoriteMovie = newMovie;
  }

  public static getInstance(): Preferences {
    const me = this;
    if (me.instance == null) {
      me.instance = new Preferences();
    }

    return me.instance;
  }
}

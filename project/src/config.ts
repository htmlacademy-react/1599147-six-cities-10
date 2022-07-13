export enum AppRoute {
  Login = '/login',
  Error = '/404',
  Favorites = '/favorites',
  Main = '/',
  Room = '/offer/:id ',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

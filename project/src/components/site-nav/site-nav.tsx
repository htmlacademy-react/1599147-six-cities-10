import {Link} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../config';

type SiteNavPropsType = {
  // eslint-disable-next-line react/no-unused-prop-types
  authorizationStatus: AuthorizationStatus;
  email?: string;
  favoriteCount?: number;
}

function SignOut(): JSX.Element {
  return (
    <li className="header__nav-item">
      <a className="header__nav-link" href="/">
        <span className="header__signout">Sign out</span>
      </a>
    </li>
  );
}

function NotLoggedNav(): JSX.Element {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__login">Sign in</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function LoggedNav(props: SiteNavPropsType): JSX.Element {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">{props.email}</span>
            <span className="header__favorite-count">{props.favoriteCount}</span>
          </Link>
        </li>
        <SignOut />
      </ul>
    </nav>
  );
}

function SiteNav(): JSX.Element {
  const navProps: SiteNavPropsType = {
    authorizationStatus: AuthorizationStatus.Auth,
    email: 'Oliver.conner@gmail.com',
    favoriteCount: 3
  };
  return (
    navProps.authorizationStatus === AuthorizationStatus.Auth
      ? <LoggedNav {...navProps} />
      : <NotLoggedNav />
  );
}

export default SiteNav;

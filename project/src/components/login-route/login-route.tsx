import {Navigate} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../config';

type LoginRouteProps = {
   authorizationStatus: AuthorizationStatus;
   children: JSX.Element;
}

function LoginRoute(props: LoginRouteProps): JSX.Element {
  const { authorizationStatus, children } = props;
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? <Navigate to={AppRoute.Main} />
      : children
  );
}

export default LoginRoute;

import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../config';
import MainPage from '../../pages/main-page/main-page';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Property from '../../pages/property/property';
import ErrorPage from '../../pages/error-page/error-page';

type AppPropsTypes = {
   placesCount: number;
 }

function App({ placesCount }: AppPropsTypes): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage placesCount={placesCount} />} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Error} element={<ErrorPage />} />
        <Route path={AppRoute.Room} element={<Property />} />
        <Route path={AppRoute.Favorites} element={<Favorites />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

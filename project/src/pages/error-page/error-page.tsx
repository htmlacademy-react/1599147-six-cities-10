import Logo from '../../components/logo/logo';
import SiteNav from '../../components/site-nav/site-nav';

function ErrorPage(): JSX.Element {
  return (
    <div className="page error">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <SiteNav />
          </div>
        </div>
      </header>
      <main>
        <h1>Ошибка 404</h1>
        <p> Страница не найдена</p>
      </main>
    </div>
  );

}

export default ErrorPage;

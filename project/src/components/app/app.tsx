import MainPage from '../../pages/main-page/main-page';

type AppPropsTypes = {
   placesCount: number;
 }

function App({ placesCount }: AppPropsTypes): JSX.Element {

  return (
    <MainPage placesCount = { placesCount } />
  );
}

export default App;

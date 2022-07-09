import MainPage from '../../pages/main-page/main-page';

type AppPropsTypes = {
   placesCount: number;
 }

function App({ placesCount }: AppPropsTypes): JSX.Element {
  // return <p>Hello, world!</p>;
  return (
    <MainPage placesCount = { placesCount } />
  );
}

export default App;

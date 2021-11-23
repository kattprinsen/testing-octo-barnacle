import DropDown from './components/DropDown/DropDown';

function App() {

  const data = {
    title: 'Country',
    header: 'Select a country',
    item: ['Malmö', 'Stockholm', 'Köpenhamn']
  }

  return (
    <>
    <DropDown {...data} />
    </>
  );
}

export default App;

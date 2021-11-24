import DropDown from './components/DropDown/DropDown';

function App() {

  const data = {
    title: 'Country',
    header: 'Select a country',
    items: ['Malmö', 'Stockholm', 'Köpenhamn']
  }

  return (
    <>
    <DropDown {...data} />
    </>
  );
}

export default App;

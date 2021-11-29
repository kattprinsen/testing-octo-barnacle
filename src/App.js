import DropDown from './components/DropDown/DropDown';

function App() {

  const countryData = {
    title: 'Country',
    header: 'Select a country',
    items: ['Sweden', 'Norge', 'Danmark']
  }

  const nodeData = {
    title: 'Node',
    header: 'Select a node',
    items: ['Malmö', 'Stockholm', 'Köpenhamn']
  }

  return (
    <>
    <DropDown {...countryData} />
    <DropDown {...nodeData} />

    </>
  );
}

export default App;

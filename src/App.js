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

  const flowData = {
    title: 'Flow',
    header: 'Select a flow',
    items: ['Order pickup', 'Delivery', 'In-store']
  }

  return (
    <>
    <DropDown {...countryData} />
    <DropDown {...nodeData} />
    <DropDown {...flowData} />
    </>
  );
}

export default App;

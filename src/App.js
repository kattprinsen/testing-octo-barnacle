import DropDown from './components/DropDown/DropDown';
import Button from './components/Button/Button';

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


function App() {

  console.log(nodeData);

  return (
    <>
    <DropDown {...countryData} />
    <DropDown {...nodeData} />
    <DropDown {...flowData} />
    <Button />
    </>
  );
}

export default App;

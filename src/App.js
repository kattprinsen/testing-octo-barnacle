import React, { useState, useEffect } from 'react';
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

  const [country, setCountry] = useState(null);
  const [node, setNode] = useState(null);
  const [flow, setFlow] = useState(null);

  useEffect(() => {
    console.log('country was changed');
  }, [country]);

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

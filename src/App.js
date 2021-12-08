import React, { useState } from 'react';
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

  return (
    <>
    <DropDown {...countryData} setClicked={setCountry} />
    <DropDown {...flowData} setClicked={setFlow} />
    <DropDown {...nodeData} setClicked={setNode} />
    <Button countries={country} flows={flow} nodes={node} />
    <p>Country: {country}</p>
    <p>Flow: {flow}</p>
    <p>Node: {node}</p>
    </>
  );
}

export default App;

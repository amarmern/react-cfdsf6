import React, { useState } from 'react';
import './style.css';
import ChildComponent from './ChildComponent';

export default function App(props) {
  const [value, setValue] = useState('');

  const onchange = data => {
    setValue(data);
    console.log('Form>', data);
  };
  return (
    <div>
      <ChildComponent
        data={value}
        onchange={e => {
          onchange(e);
        }}
      />
    </div>
  );
}

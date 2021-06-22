import React, { useState } from 'react';
import './style.css';

export default function ChildComponent(props) {
  const record = [
    { id: 'a', name: 'Learn React', complete: false },
    { id: 'b', name: 'Learn Firebase', complete: false },
    { id: 'c', name: 'Learn GraphQL', complete: false }
  ];
  const [list, setList] = useState(record);
  const [state, setState] = useState({ id: 'a', name: '', complete: false });

  const handleChangecheck = event => {
    props.onchange(event.target.value);
  };

  const handleChange = event => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value
    });
  };

  return (
    <div>
      <p> Child Component </p>
      <ul>
        {list.map(item => (
          <li key={item.id}>
            <input
              type="checkbox"
              value={item.name}
              onChange={handleChangecheck}
            />
            {item.name}
          </li>
        ))}
      </ul>

      <form>
        <input
          type="text"
          onChange={handleChange}
          value={state.name}
          name="name"
        />
        <input
          type="text"
          onChange={handleChange}
          value={state.complete}
          name="complete"
        />
      </form>
    </div>
  );
}

import React, { useState, useEffect } from 'react';

import './style.css';

export default function Horay() {
  const [datas, setData] = useState({});

  const handle = (e) => {
    const name = e.target.value;
    const value = e.target.value;
    setData(
      ...(values) => {
        [name], value;
      }
    );
  };

  return (
    <>
      <form onSubmit>
        <label>
          Name: <input type="text" />
        </label>
        <label>
          Class:
          <input type="text" />
        </label>
        <input type="submit" />
      </form>
    </>
  );
}

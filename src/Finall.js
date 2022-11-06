import React, { useState, useEffect } from 'react';

import './style.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAI_INZwFFOjmq22y-W0T_jc2X4kn6jJU0',
  authDomain: 'let-begin.firebaseapp.com',
  projectId: 'let-begin',
  storageBucket: 'let-begin.appspot.com',
  messagingSenderId: '121552752485',
  appId: '1:121552752485:web:071a8d09ba800608291b8c',
  measurementId: 'G-DNXZRYYFK0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//our imports
import { getDatabase, set, ref, child, remove } from 'firebase/database';

export default function Horay() {
  const [datas, setData] = useState({});

  const handle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((values) => ({ ...values, [name]: value }));
  };
  const handlesub = (e) => {
    e.preventDefault();
    alert(`Welcome, ${datas.un} from ${datas.uc}, ${datas.uadd}, ${datas.ur}`);
  };

  //using fire here
  const db = getDatabase();

  // inserted data
  const sets = () => {
    set(ref(db, 'the student' + datas.ur), {
      Namest: datas.un,
      Classst: datas.uc,
      Addr: datas.uadd,
    })
      .then(() => {
        alert('Data sucess save');
      })
      .catch(error);
    {
      alert('Unsucessful:' + error);
    }
  };

  return (
    <>
      <form onSubmit={handlesub}>
        <label>
          Name:
          <input
            name="un"
            value={datas.un || ''}
            type="text"
            onChange={handle}
          />
        </label>
        <label>
          Roll-no:
          <input
            name="ur"
            type="text"
            value={datas.ur || ''}
            onChange={handle}
          />
        </label>
        <label>
          Class:
          <input
            name="uc"
            type="text"
            value={datas.uc || ''}
            onChange={handle}
          />
        </label>
        <label>
          Addr
          <input
            name="uadd"
            type="text"
            value={datas.uadd || ''}
            onChange={handle}
          />
        </label>
        <input type="submit" />
        <button onClick={sets}>selbtn</button>
        <button>upbtn</button>
        <button>delbtn</button>
      </form>
    </>
  );
}

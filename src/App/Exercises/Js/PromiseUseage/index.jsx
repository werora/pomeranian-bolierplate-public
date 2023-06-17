import './styles.css';
import React, { useState, useEffect } from 'react';

export function PromiseUsage() {
  const [data, setData] = useState(null);

  const getJokes = async () => {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      console.log('Response before .json():', response);
      const data = await response.json();
      console.log('Response after .json():', data);
      const joke = data;

      setData(joke);
    } catch (err) {
      console.log(err, 'err');
    }
  };

  useEffect(() => {
    getJokes();
  }, []);

  return (
    <div>
      <p>{data?.value}</p>
      <button onClick={getJokes}>Get Data!</button>
    </div>
  );
}

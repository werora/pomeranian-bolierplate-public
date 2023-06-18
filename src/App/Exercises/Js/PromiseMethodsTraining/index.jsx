import React from 'react';

export function PromiseTraining() {
  const fetchDataFast = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve({ id: 1, time: 300 });
      }, 300)
    );

  const fetchDataLong = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve({ id: 2, time: 700 });
      }, 700)
    );

  const fetchDataError = () =>
    new Promise((resolve, reject) =>
      setTimeout(() => {
        reject(new Error('Błąd pobierania danych'));
      }, 500)
    );

  const handlePromiseAllFastLong = async () => {
    const results = await Promise.all([fetchDataFast(), fetchDataLong()]);
    console.log('Promise.all for fetchDataFast and fetchDataLong:', results);
  };

  const handlePromiseAllFastLongError = async () => {
    try {
      const results = await Promise.all([
        fetchDataFast(),
        fetchDataLong(),
        fetchDataError(),
      ]);
      console.log('Promise.all for fetchDataFast, fetchDataLong, and fetchDataError:', results);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePromiseAllSettledFastLong = async () => {
    const results = await Promise.allSettled([fetchDataFast(), fetchDataLong()]);
    console.log('Promise.allSettled for fetchDataFast and fetchDataLong:', results);
  };

  const handlePromiseAllSettledFastLongError = async () => {
    const results = await Promise.allSettled([
      fetchDataFast(),
      fetchDataLong(),
      fetchDataError(),
    ]);
    console.log('Promise.allSettled for fetchDataFast, fetchDataLong, and fetchDataError:', results);
  };

  const handlePromiseAnyFastLong = async () => {
    try {
      const result = await Promise.any([fetchDataFast(), fetchDataLong()]);
      console.log('Promise.any for fetchDataFast and fetchDataLong:', result);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePromiseAnyFastLongError = async () => {
    try {
      const result = await Promise.any([
        fetchDataFast(),
        fetchDataLong(),
        fetchDataError(),
      ]);
      console.log('Promise.any for fetchDataFast, fetchDataLong, and fetchDataError:', result);
    } catch (error) {
      console.error(error);
    } finally {
        console.log('No error occured in handlePromiseRaceFastLongError')
    }
  };

  const handlePromiseRaceFastLongError = async () => {
    try {
      const result = await Promise.race([
        fetchDataFast(),
        fetchDataLong(),
        fetchDataError(),
      ]);
      console.log('Promise.race for fetchDataFast, fetchDataLong, and fetchDataError:', result);
    } catch (error) {
      console.error(error);
    } finally {
      console.log('No error occured in handlePromiseRaceFastLongError')
    }
  };

  const handlePromiseRaceLongError = async () => {
    try {
      const result = await Promise.race([
        fetchDataLong(), fetchDataError()]);
      console.log('Promise.race for fetchDataLong and fetchDataError:', result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <p>Buttony:</p>
      <button onClick={handlePromiseAllFastLong}>Promise.all (fetchDataFast, fetchDataLong)</button>
      <button onClick={handlePromiseAllFastLongError}>Promise.all (fetchDataFast, fetchDataLong, fetchDataError)</button>
      <button onClick={handlePromiseAllSettledFastLong}>Promise.allSettled (fetchDataFast, fetchDataLong)</button>
      <button onClick={handlePromiseAllSettledFastLongError}>Promise.allSettled (fetchDataFast, fetchDataLong, fetchDataError)</button>
      <button onClick={handlePromiseAnyFastLong}>Promise.any (fetchDataFast, fetchDataLong)</button>
      <button onClick={handlePromiseAnyFastLongError}>Promise.any (fetchDataFast, fetchDataLong, fetchDataError)</button>
      <button onClick={handlePromiseRaceFastLongError}>Promise.race (fetchDataFast, fetchDataLong, fetchDataError)</button>
      <button onClick={handlePromiseRaceLongError}>Promise.race (fetchDataLong, fetchDataError)</button>
    </div>
  );
}

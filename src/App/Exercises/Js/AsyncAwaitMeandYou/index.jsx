import './styles.css';

async function doSomethingAsync () {
  //logic 
}

const doSomethingAsyncArrowFunc = async () => {
  //logic 
}

export function Async() {

const greeting = new Promise((resolve,reject) => {
resolve('Hello');
});

const handleGreeting = () => {
greeting
.then((res) => {
  console.log('Greeting done:', res);
  })
  .catch((err) => {
    console.log('Greeting error:', err);
  })
  .finally(() => {
    console.log('The Promise is settled, meaning it has been resolved or rejected'); 
  })
};

// async await 

const handleGreetingAsync = async () => {
 //  const value = await greeting 
  // console.log('Greeting from async done', value);
  try {
    const res = await greeting;
    console.log('Greeting from done:', res); 
  }
  catch (err) {
    console.lof('Greeting from error', err);
  }

  finally {
    console.log('The Promise from async/await is settled,meaning it has been resolver or rejected')
  };
};

// --------------------------------------------async await with return ------------------------------
// -----------------async await jest nowszą formą!!------------------------ 
// jak używamy async await - używamy catch lub then - nie dwóch! --- 

// Finally, when returning a Promise inside an async function, you don't need to use await. So the following is acceptable syntax.

const getGreeting = async () => {
  return greeting 
};


// However, there's one exeception to this rule: you do need to write return await if your're looking to handle
// the Promise being rejected in a try ... catch block. 

const getGreetingisTrytoCatch = async () => {
  try { 
    return await greeting; 
  }
  catch (err) {
    console.lof('Greeting from error', err);
  }

  finally {
    console.log('The Promise from async/await is settled,meaning it has been resolver or rejected')
  };
};


  return <div>
    <button onClick={handleGreeting}>Hello promise!</button>
    <button oncClick={handleGreetingAsync}>Hello promise from async/await</button>
    </div>;
}

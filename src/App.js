import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  const increment2 = () => {
    setCount(previousCount => previousCount + 1)
  }
  const decrement2 = () => {
    setCount(previousCount => previousCount - 1)
  }
  const reset = () => {
    setCount(0)
  }
  const double = () => {
    setCount(nextCount => nextCount * 2)
  }
  const three = () => {
    setCount( (previousCount) => 
      previousCount % 3 === 0 ? previousCount / 3 : previousCount
    )
  }

  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={double}>Double</button>
        <button onClick={three}>Three</button>
      </div>
    </>
  );
}

export default App;

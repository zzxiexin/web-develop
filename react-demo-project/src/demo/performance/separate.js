import { useState } from 'react';

export default function CountWrapper({ children }) {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };

  return (
    <div className='App' title={count}>
      <p onClick={add}>{count}</p>
      {children}
    </div>
  );
}

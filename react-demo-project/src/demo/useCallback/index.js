import { useState, memo, useCallback } from 'react';
const Child = memo(() => {
  console.log('child render');
  return <div>child</div>;
});
const Parent = () => {
  const [num, setNum] = useState(0);
  // const log = (args) => {
  //   console.log(...args);
  // };
  const log = useCallback((args) => {
    console.log(...args);
  }, []);
  return (
    <div>
      {num}
      <button onClick={() => setNum(num + 1)}>click me</button>
      <Child log={log} />
    </div>
  );
};

export default Parent;

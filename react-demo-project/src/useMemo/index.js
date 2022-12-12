import React, { useState, useMemo, memo } from 'react';
const Child = memo(({ value }) => {
  console.log('memo child render');
  return <div>{value}</div>;
});
const Parent = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const expensiveCalc = () => {
    return num1 + num2;
  };
  const value = useMemo(() => expensiveCalc(), [num2]);
  return (
    <div>
      <button onClick={() => setNum1(num1 + 1)}>{num1}</button>
      <Child value={value} />
    </div>
  );
};
export default Parent;

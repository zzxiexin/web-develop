import { useState } from 'react';
export default function NoSeparate() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };

  return (
    <div className='App'>
      <p onClick={add}>{count}</p>
      <Children />
    </div>
  );
}

function Children() {
  console.log('子组件渲染');
  return <div>子组件</div>;
}

import './index.css';
import React, { useRef, useEffect } from 'react';

export const ComponentInput = React.forwardRef((props, ref) => (
  <div>
    custome input:
    <div>{props?.name}</div>
    <input ref={ref} {...props} />
  </div>
));

const NormalInput = () => {
  const domRef = useRef();
  const componentInput = useRef();
  useEffect(() => {
    // console.log(domRef?.current?.__proto__);
    // console.log(componentInput?.current);
    domRef?.current?.focus();
    componentInput?.current?.focus();
  }, []);
  return (
    <div>
      <input ref={domRef} type='text' placeholder='' />
      <ComponentInput ref={componentInput} name='xinxin' />
    </div>
  );
};

export default NormalInput;

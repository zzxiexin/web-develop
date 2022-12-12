import { useSelector, useDispatch } from 'react-redux';
// import store from '../../store';
import { increment, decrement } from '../../store/module/counter';
import { getMovieData } from '../../store/module/async_module';
const Counter = () => {
  // 通过useSelector直接拿到store中定义的value
  const { value } = useSelector((store) => store.counter);
  const { list } = useSelector((store) => store.movie);
  // 通过useDispatch 派发事件
  const dispatch = useDispatch();
  return (
    <div>
      @reduxjs/toolkit:
      {value}
      <button onClick={() => dispatch(increment({ value: 1 }))}>+</button>
      <button onClick={() => dispatch(decrement({ value: 2 }))}>-</button>
      <br />
      @reduxjs/toolkit thunk:
      <button onClick={() => dispatch(getMovieData())}>获取数据</button>
      <ul>
        {list.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Counter;

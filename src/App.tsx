import { Outlet } from 'react-router-dom';
import { increment, decrement, selectCount } from '@myStore/slices/count';
import { useAppDispatch, useAppSelector } from '@myStore/hooks';
import './App.less';

function App() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>APP</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <Outlet></Outlet>
    </div>
  );
}

export default App;

import './App.css';
import Ref from './useRef';
import UseCallback from './useCallback';
import UseMemo from './useMemo';
import ProviderCompoment, { ConsumerComponent } from './useContext';
import CounterRedux from './components/counter/index';
import animateJson from './json/animation.json';
import Lottie from 'react-lottie';
import SeparateDemo from './demo/performance/separate';
import SeparateChild from './demo/performance/separate-child';
import NoSeparate from './demo/performance/no-separate';
const a = 1
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animateJson,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        json animation:
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
          isStopped={false}
          isPaused={false}
        />
        <hr />
        ref focus:
        <Ref />
        <hr />
        usecallback 性能优化：
        <UseCallback />
        <hr />
        memo优化：
        <UseMemo />
        <hr />
        UseContext:
        <ProviderCompoment>
          <ConsumerComponent />
        </ProviderCompoment>
        <hr />
        <CounterRedux />
        <hr />
        组件分离优化：
        <SeparateDemo>
          <SeparateChild />
        </SeparateDemo>
        <hr />
        组件未分离：
        <NoSeparate />
      </header>
    </div>
  );
}

export default App;

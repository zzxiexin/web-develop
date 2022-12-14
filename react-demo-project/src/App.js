import './App.css';
import Ref from './demo/useRef';
import UseCallback from './demo/useCallback';
import UseMemo from './demo/useMemo';
import ProviderCompoment, { ConsumerComponent } from './demo/useContext';
import CounterRedux from './components/counter/index';
import animateJson from './json/animation.json';
import Lottie from 'react-lottie';
import SeparateDemo from './demo/performance/separate';
import SeparateChild from './demo/performance/separate-child';
import NoSeparate from './demo/performance/no-separate';
import LifeDemo from './demo/life_demo/life_demo';
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
        {/* json animation:
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
          isStopped={false}
          isPaused={false}
        /> */}
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
        <hr />
        <LifeDemo />
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import '../styles/css/App.css'
// import '../styles/css/App.css';
import ElapsedTimeDisplay from './ElapsedTimeDisplay';
import Buttons from './Buttons';
import LapsList from './LapsList';
import { useSelector } from 'react-redux';
import { startedTimeSelector } from '../redux/selectors/startedTimeSelector';
import { pausedTimeSelector } from '../redux/selectors/pausedTimeSelector';

function App() {
  const startedTime:number = useSelector(startedTimeSelector);
  const pausedTime:number | undefined = useSelector(pausedTimeSelector);

  return (
    <div className="App">
      <ElapsedTimeDisplay startedTime={startedTime} pausedTime={pausedTime} />
      <Buttons />
      <LapsList />
    </div>
  );
}

export default App;

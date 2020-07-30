import React from 'react';
import './App.css';
import ElapsedTimeDisplay from './components/ElapsedTimeDisplay';
import Buttons from './components/Buttons';
import LapsList from './components/LapsList';
import { useSelector } from 'react-redux';
import { startedTimeSelector } from './redux/selectors/startedTimeSelector';
import { pausedTimeSelector } from './redux/selectors/pausedTimeSelector';

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

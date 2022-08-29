import React from 'react';
import Board from './board/Board';
import Screen from './screen/Screen';

function App() {
  return (
    <div className="bg-gray-700 flex flex-wrap gap-[10px] justify-center content-center w-[100vw] h-[100vh] ">
      <Screen/>
      <Board/>
     
    </div>
  );
}

export default App;

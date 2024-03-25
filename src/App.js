import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0)

  function clickedToIncreaseNumber() {
    setCounter(counter + 1);
  }


  return (
    <div className="h-screen w-screen bg-white flex flex-row">
     <div class="h-full bg-orange-500 w-64 px-3 py-5">
        <div class="flex flex-row gap-5 items-center justify-center">
          <div class="h-12 w-12 rounded-full bg-red-500">

          </div>
          <div class="flex flex-col">
            <span class="text-gray-600 text-sm">
              ADMIN
            </span>
            <span class="text-sm">
              Andrew Smith
            </span>
          </div>
        </div>
        <div class="py-10 flex flex-col gap-3 ml-6">
          <div class="bg-white p-3">
            <span class="text-blue-500 text-sm font-semibold">Dashboard</span>
          </div>
          <div class="p-3">
            <span class="text-sm font-semibold">Inventeory,....</span>
          </div>
          <div class="p-3">
            <span class="text-sm font-semibold">Inventeory,....</span>
          </div>
          <div class="p-3">
            <span class="text-sm font-semibold">Inventeory,....</span>
          </div>
          <div class="p-3">
            <span class="text-sm font-semibold">Inventeory,....</span>
          </div>
          
        </div>
     </div>
    </div>
  );
}

export default App;

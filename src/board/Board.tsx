import { updateCalculatedValue } from '../slices/calcSlice'
import { toggleMode } from '../slices/themeSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { useState, useEffect } from 'react'

type initialStateProp = {
  time: string[]
}
const initialState: initialStateProp = {
  time: [],
}

const Board = () => {

  const {inputValue, displayValue} = useSelector((state:RootState) => state.cal)

  const {mode} = useSelector((state:RootState) => state.theme)

  const [time, setTime ] = useState(initialState)
  
  const dispatch = useDispatch()

  // useEffect(() => {
    
    // minute = setMinute(clock.getMinutes)
  //   const time = setInterval(() => {setTime(new Date().toLocaleTimeString)},1000)

  //   return () => {clearInterval(time)}
  
    
  //  },[])

  const themeChange = (mode:string) => {
    dispatch(toggleMode(mode))
  }

  const handleClick = (value:string) => {
    dispatch(updateCalculatedValue(value))
  
  }
  
 

  return (
    <div className={` flex flex-col items-center bg-gray-700 ${mode === 'mode2' ? 'bg-gray-200' : mode === 'mode3' ? 'bg-[#170f2a]' : "" } h-screen p-6`}>
      <div className={`w-full md:w-96`}>
        <div className={`flex items-center justify-between text-white ${mode === 'mode2' ? 'text-black' : mode === 'mode3' ? 'text-yellow-400' : ''}`}>
        <div className={`justify-self-center mt-4 font-bold`}>Calc</div>
        {/* <div className={`flex items-center mt-4 rounded-full bg-gray-400 text-black`}><span className={` rounded-full px-1  ${mode === 'mode3' ? 'bg-purple-900 text-yellow-400':''} `}>{time}</span></div> */}
        <div className={` flex justify-between`}><span className='self-center mt-4 mr-4 text-xs uppercase'>theme</span>
      <div>
        <div className={`flex flex-row justify-around`}><span>1</span><span>2</span><span>3</span></div>
        <div className={`flex flex-row justify-around rounded-full ${!mode?'bg-gray-800':''} ${mode ==='mode1'? 'bg-gray-800': mode ==='mode2' ?'bg-gray-300':mode === 'mode3' ? 'bg-[#1f1536]' : ""} items-center w-20 h-7 mb-2 toggle`}><span onClick={()=>themeChange("mode1")} className={`w-4 h-4 rounded-lg ${!mode?'bg-red-800':''} ${mode === 'mode1' ? 'bg-red-800':""}`}></span><span onClick={()=>themeChange("mode2")} className={`w-4 h-4 rounded-lg ${!mode?'bg-gray-800':''} ${mode === 'mode2' ? 'bg-red-600':""}`}></span><span onClick={()=>themeChange("mode3")} className={`w-4 h-4 rounded-lg ${!mode?'bg-gray-800':''} ${mode === 'mode3' ? 'bg-cyan-400':""}`}></span></div>
      </div>
      </div>
      </div>
      <div className={`bg-gray-800 text-white rounded`}>
        <input disabled className={`bg-gray-800 outline-none w-full text-right px-4 ${mode === 'mode2' ? 'bg-gray-100 text-black': mode === 'mode3' ? 'text-yellow-400 bg-[#1f1536]' : ""}`} value={inputValue}/>
        <input disabled className={`bg-gray-800 outline-none w-full text-right px-4 ${mode === 'mode2' ? 'bg-gray-100 text-black':mode === 'mode3' ? 'text-yellow-400 bg-[#1f1536]' : ""}`} value={displayValue}/>
      </div>
      <div className={`bg-gray-800 grid grid-cols-4 gap-4 text-center  p-4 mt-2 rounded ${mode === 'mode2' ? 'bg-gray-300': mode === 'mode3' ? 'text-yellow-400 bg-[#1f1536]': ""}`}> 
          <button onClick={()=>handleClick( '7')} className={` bg-stone-200 rounded ${mode === 'mode3' ? 'bg-purple-800':'' }`}>7</button>
          <button onClick={()=>handleClick('8')} className = {` bg-stone-200   rounded ${mode === 'mode3' ? 'bg-purple-800':'' }`}>8</button>
          <button onClick={()=>handleClick('9')} className={`bg-stone-200  rounded ${mode === 'mode3' ? 'bg-purple-800':'' }`}>9</button>
          <button onClick={()=>handleClick('del')} className={`bg-gray-400 text-white uppercase  rounded ${mode ==='mode2' ? 'bg-cyan-700 text-white': mode === 'mode3' ? ' text-white bg-purple-900':''}`}>del</button>
          <button onClick={()=>handleClick('4')} className={`bg-stone-200  rounded ${mode === 'mode3' ? 'bg-purple-800':'' }`}>4</button>
          <button onClick={()=>handleClick('5')} className={`bg-stone-200  rounded ${mode === 'mode3' ? 'bg-purple-800':'' }`}>5</button>
          <button onClick={()=>handleClick('6')} className={`bg-stone-200  rounded ${mode === 'mode3' ? 'bg-purple-800':'' }`}>6</button>
          <button onClick={()=>handleClick('+')} className={`bg-stone-200  rounded ${mode === 'mode3' ? 'bg-purple-800':'' }`}>+</button>
          <button onClick={()=>handleClick('1')} className={`bg-stone-200  rounded ${mode === 'mode3' ? 'bg-purple-800':'' }`}>1</button>
          <button onClick={()=>handleClick('2')} className={`bg-stone-200  rounded ${mode === 'mode3' ? 'bg-purple-800':'' }`}>2</button>
          <button onClick={()=>handleClick('3')} className={`bg-stone-200  rounded ${mode === 'mode3' ? 'bg-purple-800':'' }`}>3</button>
          <button onClick={()=>handleClick('-')} className={`bg-stone-200  rounded ${mode === 'mode3' ? 'bg-purple-800':'' }`}>-</button>
          <button onClick={()=>handleClick('.')} className={`bg-stone-200  rounded ${mode === 'mode3' ? 'bg-purple-800':'' }`}>.</button>
          <button onClick={()=>handleClick('0')} className={`bg-stone-200  rounded ${mode === 'mode3' ? 'bg-purple-800':'' }`}>0</button>
          <button onClick={()=>handleClick('/')} className={`bg-stone-200  rounded ${mode === 'mode3' ? 'bg-purple-900':'' }`}>/</button>
          <button onClick={()=>handleClick('*')} className={`bg-stone-200  rounded ${mode === 'mode3' ? 'bg-purple-900':'' }`}>x</button>
          <button onClick={()=>handleClick('reset')} className={`bg-gray-400 text-white rounded uppercase col-span-2 ${mode === 'mode2' ? 'bg-cyan-700 text-white': mode === 'mode3' ? 'text-white bg-purple-900':''}`}>reset</button>
          <button onClick={()=>handleClick('=')} className={`bg-red-600 rounded col-span-2 ${mode === 'mode2' ? 'bg-orange-700 text-white': mode === 'mode3' ? 'text-black bg-cyan-400':''}`}>=</button>
      </div>
      </div>
      </div>
    // </div>
  )
}


export default Board
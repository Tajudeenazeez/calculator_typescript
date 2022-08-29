import { calculateSlice } from "../slices/calcSlice"
import type { RootState } from "../store"
import { useSelector } from "react-redux"




const Screen = () => {
  const {inputValue, displayValue} = useSelector((state:RootState) => state.cal)
  
  return (
    <div className=' flex   justify-center  w-[100vw]  h-1/6  relative'>
        <div className='text-white text-xs absolute left-[35%] top-[-50%]'>calc</div>
        <input disabled type='text' value={displayValue} className='p-[2px] absolute left-[35%] top-[20%] outline-none w-[30%] text-white text-right bg-gray-900'/>
        <input disabled type='text' value={inputValue} className='p-[2px]  absolute left-[35%] bottom-[2%] outline-none w-[30%] text-right text-white bg-gray-900'/>
    </div>
  )
}

// 'rounded-[5px] text-right text-[#fff] w-[30vw] h-[4vh] pt-[4px] pr-[4px] bg-gray-900'

export default Screen
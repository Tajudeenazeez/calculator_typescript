import { updateCalculatedValue } from '../slices/calcSlice'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../store'



const Board = () => {

  const inputValue = useSelector((state: RootState) => state.cal.inputValue)

  const dispatch = useDispatch()

  const handleClick = (value:string) => {
    dispatch(updateCalculatedValue(value))
  
  }


  return (
    <div className="flex flex-wrap justify-center gap-[10px] text-center text-[#fff] 
      bg-gray-900 w-[30vw] h-[60vh] py-[10px] rounded-[5px] text-xs">        
        <div onClick={()=>handleClick( '7')} className="bg-white w-1/6 h-[25px] pt-[4px] text-black rounded-[2px]">7</div>
        <div onClick={()=>handleClick('8')} className="bg-white w-1/6 h-[25px]  pt-[4px]  text-black rounded-[2px]">8</div>
        <div onClick={()=>handleClick('9')} className="bg-white w-1/6 h-[25px] pt-[4px]  text-black rounded-[2px]">9</div>
        <div onClick={() =>handleClick('del')} className="bg-white w-1/6 h-[25px] pt-[4px]  text-black rounded-[2px]">del</div>
        <div onClick={()=>handleClick('4')} className="bg-white w-1/6 h-[25px] pt-[4px]  text-black rounded-[2px]">4</div>
        <div onClick={()=>handleClick('5')} className="bg-white w-1/6 h-[25px] pt-[4px]  text-black rounded-[2px]">5</div>
        <div onClick={()=>handleClick('6')} className="bg-white w-1/6 h-[25px] pt-[4px]  text-black rounded-[2px]">6</div>
        <div onClick={() =>handleClick('+')} className="bg-white w-1/6 h-[25px] pt-[4px]  text-black rounded-[2px]">+</div>
        <div onClick={()=>handleClick('1')} className="bg-white w-1/6 h-[25px] pt-[4px]  text-black rounded-[2px]">1</div>
        <div onClick={()=>handleClick('2')} className="bg-white w-1/6 h-[25px] pt-[4px]  text-black rounded-[2px]">2</div>
        <div onClick={()=>handleClick('3')} className="bg-white w-1/6 h-[25px] pt-[4px]  text-black rounded-[2px]">3</div>
        <div onClick={() =>handleClick('-')} className="bg-white w-1/6 h-[25px]  pt-[4px] text-black rounded-[2px]">-</div>
        <div onClick={() =>handleClick('.')} className="bg-white w-1/6 h-[25px] pt-[4px]  text-black rounded-[2px]">.</div>
        <div onClick={()=>handleClick('0')} className="bg-white w-1/6 h-[25px] pt-[4px]  text-black rounded-[2px]">0</div>
        <div onClick={() =>handleClick('/')} className="bg-white w-1/6 h-[25px] pt-[4px]  text-black rounded-[2px]">/</div>
        <div onClick={() =>handleClick('*')} className="bg-white w-1/6 h-[25px] pt-[4px]  text-black rounded-[2px]">x</div>
        <div onClick={() =>handleClick('reset')} className="bg-gray-400 w-[38%] pt-[4px]  h-[25px] text-black rounded-[2px] ">reset</div>
        <div onClick={() =>handleClick('=')} className="bg-red-600 w-[38%] h-[25px]  pt-[4px] text-black rounded-[2px]">=</div>





    </div>
  )
}


export default Board
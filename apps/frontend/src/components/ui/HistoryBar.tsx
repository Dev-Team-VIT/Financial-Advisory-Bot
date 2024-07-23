import React from 'react'
import d_icon from '/delete.svg'
type Props = {
    text:string,
}

function HistoryBar({text}: Props) {
  return (
    <section className='bg-[#D9D9D9] rounded-[10px]'>
        <div className='flex flex-row justify-between items-center px-5 p-5'>
            <p className='text-lg'>{text}</p>
            <img src={d_icon} alt="icon" className='cursor-pointer w-[30px]' />
        </div>
    </section>
  )
}

export default HistoryBar;
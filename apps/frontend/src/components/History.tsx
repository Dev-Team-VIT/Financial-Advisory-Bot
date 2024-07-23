import React from 'react'
import h_icon from '/history.svg';
import { Separator } from './ui/separator';
import HistoryBar from './ui/HistoryBar';
type Props = {}

function History({}: Props) {
  return (
    <>
        <section className='w-[30vw] h-[90vh] bg-background rounded-lg p-5'>
            <div className="header flex flex-row justify-between p-[20px]">
                <h2 className='font-bold text-xl'>Your History</h2>
                <img src={h_icon} alt="" />
            </div>
            <Separator></Separator>
            <div className="history-container py-5">
                <HistoryBar text='Suggest me how to invest in big companies'></HistoryBar>
            </div>
        </section>
        
    </>
  )
}

export default History;
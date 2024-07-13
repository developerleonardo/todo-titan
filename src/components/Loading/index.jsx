import React from 'react'

const Loading = () => {
    return (
        <div className='w-full flex flex-col gap-3 pt-6 h-full'>
            <div className='border border-slate-200 p-3 rounded-xl flex justify-between w-full h-full bg-slate-200 animate-pulse'>
                <div className=' flex justify-between w-full h-5 '></div>
            </div>
            <div className='border border-slate-200 p-3 rounded-xl flex justify-between w-full h-full bg-slate-200 animate-pulse'>
                <div className=' flex justify-between w-full h-5 '></div>
            </div>
            <div className='border border-slate-200 p-3 rounded-xl flex justify-between w-full h-full bg-slate-200 animate-pulse'>
                <div className=' flex justify-between w-full h-5 '></div>
            </div>
            <div className='border border-slate-200 p-3 rounded-xl flex justify-between w-full h-full bg-slate-200 animate-pulse'>
                <div className=' flex justify-between w-full h-5 '></div>
            </div>
            <div className='border border-slate-200 p-3 rounded-xl flex justify-between w-full h-full bg-slate-200 animate-pulse'>
                <div className=' flex justify-between w-full h-5 '></div>
            </div>
        </div>
    )
}

export { Loading }
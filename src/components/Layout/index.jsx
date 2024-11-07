import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className='relative p-6 flex flex-col gap-4 justify-center items-center w-full h-screen bg-white md:h-3/4 md:rounded-lg md:w-[540px]'>
        { children }
    </div>
  )
}

export { Layout }
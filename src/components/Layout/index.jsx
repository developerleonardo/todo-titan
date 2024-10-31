import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className='relative p-6 mt-4 flex flex-col gap-4 justify-center items-center max-w-md m-auto'>
        { children }
    </div>
  )
}

export { Layout }
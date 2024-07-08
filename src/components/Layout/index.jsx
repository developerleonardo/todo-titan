import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className='p-6 mt-4 flex flex-col gap-4 justify-center items-center'>
        { children }
    </div>
  )
}

export { Layout }
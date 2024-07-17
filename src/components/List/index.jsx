import React from 'react'

const List = ({ children }) => {
  return (
    <div className='w-full flex flex-col gap-3 pt-6 max-w-screen-lg h-[calc(100vh-280px)] overflow-y-auto'>
        {children}
    </div>
  )
}

export { List }
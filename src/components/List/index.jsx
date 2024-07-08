import React from 'react'

const List = ({ children }) => {
  return (
    <div className='w-full flex flex-col gap-3 pt-6'>
        {children}
    </div>
  )
}

export { List }
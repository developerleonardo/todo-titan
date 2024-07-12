import React, { useContext } from 'react'
import { PlusCircleIcon } from '@heroicons/react/16/solid'
import { TodoContext } from '../Context'

const TabBar = () => {
  const { setIsOpenModal } = useContext(TodoContext);
  return (
    <div className='fixed left-0 right-0 bottom-0 bg-tertiary h-16 z-10 p-4 flex items-center justify-center'>
      <PlusCircleIcon className='w-8 h-8 text-white' onClick={() => setIsOpenModal(true)}></PlusCircleIcon>
    </div>
  )
}

export { TabBar }
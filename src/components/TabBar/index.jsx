import React, { useContext } from 'react'
import { PlusCircleIcon } from '@heroicons/react/16/solid'
import { TodoContext } from '../Context'

const TabBar = () => {
  const { setIsOpenModal } = useContext(TodoContext);
  return (
    <>
      <div className='absolute left-0 right-0 bottom-0 bg-tertiary h-16 z-10 p-4 flex items-center justify-center md:hidden'>
        <PlusCircleIcon className='w-8 h-8 text-white' onClick={() => setIsOpenModal(true)}></PlusCircleIcon>
      </div>
      <button className='hidden md:inline-block w-full bg-tertiary text-white p-4 rounded-lg text-xl font-semibold hover:bg-light-green' onClick={() => setIsOpenModal(true)}>
        New Task
      </button>
    </>
  )
}

export { TabBar }
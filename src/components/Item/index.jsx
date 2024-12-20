import React, { useContext } from 'react'
import { ArchiveBoxXMarkIcon, CheckIcon } from '@heroicons/react/16/solid'
import { TodoContext } from '../Context'

const Item = (props) => {
  const { text, value } = props
  const { completeTask, deleteTask } = useContext(TodoContext)

  if (value) {
    return (
      <div className='bg-tertiary text-white p-3 rounded-xl flex justify-between'>
        <p>
          <CheckIcon className='w-6 h-6 text-[#6AED24] hover:cursor-pointer' onClick={() => completeTask(text)} />
        </p>
        <p className='line-through'>{text}</p>
        <p>
          <ArchiveBoxXMarkIcon className='w-6 h-6 text-white hover:cursor-pointer hover:text-red-300' onClick={() => deleteTask(text)}></ArchiveBoxXMarkIcon>
        </p>
      </div>
    )
  }
  return (
    <div className='bg-primary p-3 rounded-xl flex justify-between'>
      <p>
        <CheckIcon className='w-6 h-6 text-gray-600 hover:cursor-pointer hover:text-light-green' onClick={() => completeTask(text)} />
      </p>
      <p>{text}</p>
      <p>
        <ArchiveBoxXMarkIcon className='w-6 h-6 text-gray-600 hover:cursor-pointer hover:text-red-300' onClick={() => deleteTask(text)}></ArchiveBoxXMarkIcon>
      </p>
    </div>
  )
}

export { Item }
import React from 'react'
import { ArchiveBoxXMarkIcon, CheckIcon } from '@heroicons/react/16/solid'

const Item = (props) => {
  const { text, value } = props
  return (
    <div className='bg-primary p-3 rounded-xl flex justify-between'>
      <p>
        <CheckIcon className='w-6 h-6 text-secondary' />
      </p>
      <p>{text}</p>
      <p>
        <ArchiveBoxXMarkIcon className='w-6 h-6 text-secondary'></ArchiveBoxXMarkIcon>
      </p>
    </div>
  )
}

export { Item }
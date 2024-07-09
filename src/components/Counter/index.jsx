import React, { useContext } from 'react'
import { TodoContext } from '../Context'

const Counter = () => {
  const { totalTodos, completedTodos } = useContext(TodoContext);
  return (
    <>
      <h1 className='font-extrabold text-2xl text-secondary pt-6'>TO-DO TITAN</h1>
      <h2 className='font-light'>You have completed {completedTodos} of {totalTodos} To-Dos</h2>
    </>
  )
}

export { Counter }
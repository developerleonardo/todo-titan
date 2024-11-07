import React, { useContext } from 'react'
import { TodoContext } from '../Context'

const Counter = () => {
  const { totalTodos, completedTodos } = useContext(TodoContext);
  const renderCounter = () => {
    if (totalTodos >= 1 && totalTodos === completedTodos) {
      return <h2 className='font-bold text-tertiary text-lg'>You have completed all of your To-Dos! 🥳</h2>
    } else {
      return <h2 className='font-light'>You have completed {completedTodos} out of {totalTodos} To-Dos</h2>
    }
  }
  return (
    <>
      <h1 className='font-extrabold text-4xl text-secondary pt-6'>TO-DO TITAN</h1>
      {renderCounter()}
    </>
  )
}

export { Counter }
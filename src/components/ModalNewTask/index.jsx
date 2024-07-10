import React from 'react'

const ModalNewTask = () => {
  return (
    <div className='fixed top-0 right-0 bottom-0 left-0 bg-modal'>
      <dialog className='w-4/5 absolute flex top-[200px] h-[400px] rounded-md'>
      <img src="./img/robot-todo.png" alt="robot with a to do paper" className='w-64 h-64 -top-40 absolute left-10' />
        <form method="dialog" className='flex flex-col w-full h-full items-center p-6 gap-4 mt-12'>
          <h2 className='text-secondary font-extrabold text-2xl'>Add a new To-Do</h2>
          <textarea className='w-full h-48 border-2 p-2 resize-none' placeholder='Read my favorite book' />
          <div className='flex gap-6 w-full pt-3 justify-center'>
            <button formMethod='dialog' className='border-2 w-[120px] rounded-lg hover:bg-secondary hover:text-white p-1'>Create</button>
            <button className='border-2 w-[120px] rounded-lg hover:bg-secondary hover:text-white p-1'>Cancel</button>
          </div>
        </form>
      </dialog>
    </div>
  )
}

export { ModalNewTask }
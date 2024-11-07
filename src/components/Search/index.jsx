import React, { useContext, useState } from 'react'
import { TodoContext } from '../Context'

const Search = () => {
    const { setSearchedTask } = useContext(TodoContext);
    return (
        <input 
        type="text" 
        className='mt-2 p-2 w-full border-2 rounded-xl' 
        placeholder='Search a task'
        onChange={(event) => setSearchedTask(event.target.value)}
         />
    )
}
export { Search }
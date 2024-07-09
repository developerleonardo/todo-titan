import React, { useContext, useState } from 'react'
import { TodoContext } from '../Context'

const Search = () => {
    const { setSearchedTask } = useContext(TodoContext);
    return (
        <input 
        type="text" 
        className=' p-2 w-[300px] border-2' 
        placeholder='Search a task'
        onChange={(event) => setSearchedTask(event.target.value)}
         />
    )
}
export { Search }
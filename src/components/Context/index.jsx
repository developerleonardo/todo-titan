import { createContext, useState } from "react";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
    const defaultTodos = [
        { text: "Go to the gym", value: true },
        { text: "Read my favorite book", value: true },
        { text: "Do my homework", value: false },
        { text: "Walking my dog", value: false },
        { text: "Code my new App", value: false },
        { text: "Go shopping", value: false },
    ]
    const [todos, setTodos] = useState(defaultTodos);
    const [searchedTask, setSearchedTask] = useState('');
    const totalTodos = todos.length;
    const completedTodos = todos.filter(todo => todo.value === true).length;

    return (
        <TodoContext.Provider value={{
            todos,
            setTodos,
            totalTodos,
            completedTodos,
            defaultTodos,
            searchedTask,
            setSearchedTask
            //searchTask

        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }
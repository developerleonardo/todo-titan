import { createContext, useEffect, useState } from "react";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [searchedTask, setSearchedTask] = useState('');
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem("TASKS_V1");
                let parsedItem;
                if (!localStorageItem) {
                    localStorage.setItem("TASKS_V1", JSON.stringify([]));
                    parsedItem = [];
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setTodos(parsedItem);
                }
                setLoading(false);
            } catch (error) {
                console.error("Something went wrong");
            }
        }, 2000);
    }, [])

    const totalTodos = todos.length;
    const completedTodos = todos.filter(todo => todo.value === true).length;

    const completeTask = (text) => {
        const newTodos = [...todos];
        const index = newTodos.findIndex(todo => todo.text === text);
        newTodos[index].value = !newTodos[index].value;
        setTodos(newTodos);
        localStorage.setItem("TASKS_V1", JSON.stringify(newTodos));
    }
    const deleteTask = (text) => {
        const newTodos = [...todos];
        const index = newTodos.findIndex(todo => todo.text === text);
        newTodos.splice(index, 1);
        setTodos(newTodos);
        localStorage.setItem("TASKS_V1", JSON.stringify(newTodos));
    }

    const addEmoji = (text) => {
        const listOfEmojis = {
            running: "🏃‍♂️",
            shopping: "🛒",
            swimming: "🏊‍♀️",
            cooking: "👨‍🍳",
            study: "👩‍💻",
            code: "👩‍💻",
            working: "👨‍💼👩‍💼",
            walk: "🚶‍♀️",
            bath: "🛀",
            sleep: "🛌",
            dancing: "💃",
            surf: "🏄‍♀️",
            bike: "🚴‍♂️",
            gym: "💪",
            party: "🎈",
            soccer: "⚽",
            football: "🏈",
            golf: "⛳",
            skate: "⛸",
            videogames: "🎮",
            singing: "🎤",
            music: "🎵",
            paino: "🎹",
            movies: "🎬",
            cinema: "🎬",
            beach: "🏖",
            travel: "✈",
            dog: "🐕",
            cat: "🐈‍",
            read: "👀"
        }
        for (const [keyword, emoji] of Object.entries(listOfEmojis)) {
            if (text.toLowerCase().includes(keyword)) {
                return `${text} ${emoji}`
            }
        }
        return text;
    }

    const saveTask = (task) => {
        if (task.text.length) {
            const taskWithEmoji = {...task, text: addEmoji(task.text)}
            localStorage.setItem("TASKS_V1", JSON.stringify([...todos, taskWithEmoji]));
            setTodos([...todos, taskWithEmoji]);
        } else {
            alert("You should type a task");
        }
    }

    const filteredTasks = todos.filter((todo) => {
        return searchedTask === '' || todo.text.toLowerCase().includes(searchedTask.toLowerCase())
    });

    return (
        <TodoContext.Provider value={{
            todos,
            setTodos,
            totalTodos,
            completedTodos,
            searchedTask,
            setSearchedTask,
            completeTask,
            deleteTask,
            isOpenModal,
            setIsOpenModal,
            saveTask,
            loading,
            filteredTasks,
            addEmoji

        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }
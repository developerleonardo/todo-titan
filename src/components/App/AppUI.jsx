import React, { useContext } from 'react'
import { Counter } from '../Counter'
import { Item } from '../Item'
import { Layout } from '../Layout'
import { List } from '../List'
import { TabBar } from '../TabBar'
import { Search } from '../Search'
import { TodoContext } from '../Context'
import { ModalNewTask } from '../ModalNewTask'

const AppUI = () => {
    const { todos, searchedTask } = useContext(TodoContext);
    return (
        <>
            <Layout>
                <Counter />
                <Search />
                <List>
                    {
                        todos.filter((todo) => {
                            return searchedTask === '' || todo.text.toLowerCase().includes(searchedTask.toLowerCase())
                        }).map((item, index) => {
                            return <Item
                                key={index}
                                text={item.text}
                                value={item.value} />
                        })
                    }
                </List>
            </Layout>
            <TabBar />
            <ModalNewTask />
        </>
    )
}

export { AppUI }
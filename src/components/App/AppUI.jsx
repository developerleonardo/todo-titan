import React, { useContext } from 'react'
import { Counter } from '../Counter'
import { Item } from '../Item'
import { Layout } from '../Layout'
import { List } from '../List'
import { TabBar } from '../TabBar'
import { Search } from '../Search'
import { TodoContext } from '../Context'
import { ModalNewTask } from '../ModalNewTask'
import { Loading } from '../Loading'
import { EmptyTask } from '../EmptyTask'
import { NoResultsFound } from '../NoResultsFound'

const AppUI = () => {
    const { todos, loading, filteredTasks } = useContext(TodoContext);
    return (
        <>
            <Layout>
                <Counter />
                <Search />
                <List>
                    {
                        loading ? <Loading /> :
                            filteredTasks.map((item, index) => {
                                return <Item
                                    key={index}
                                    text={item.text}
                                    value={item.value} />
                            })
                    }
                    {
                        filteredTasks.length === 0 && !loading && todos.length > 0 && <NoResultsFound />
                    }
                    {
                        todos.length === 0 && !loading && <EmptyTask />
                    }
                </List>
                <TabBar />
            </Layout>
            <ModalNewTask />
        </>
    )
}

export { AppUI }
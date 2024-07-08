import './App.css'
import { Counter } from './components/Counter'
import { Item } from './components/Item'
import { Layout } from './components/Layout'
import { List } from './components/List'
import { TabBar } from './components/TabBar'

function App() {

  return (
    <>
      <Layout>
        <Counter />
        <List>
          <Item />
          <Item />
          <Item />
        </List>
      </Layout>
      <TabBar />
    </>
  )
}

export default App

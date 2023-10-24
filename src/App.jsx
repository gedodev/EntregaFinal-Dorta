import {NavBar} from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
// import {Routes, Route, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <ItemListContainer greeting='Hi'/>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App

import {NavBar} from './components/NavBar/NavBar'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import {NotFound} from './components/NotFound/NotFound'
import{ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import {Footer} from './components/Footer/Footer'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import CartComponentContext from './context/CartContext/CartContext'


function App() {
  return (
    <CartComponentContext>
    <BrowserRouter>
      <NavBar/>
      <main>
        <Routes>
          <Route exact path='/' element={<ItemListContainer/>}/>
          <Route exact path='/category/:id' element={<ItemListContainer />}/>
          <Route exact path='/item/:id' element={<ItemDetailContainer />}/>
          <Route exact path='*' element={<NotFound/>}/>
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
    </CartComponentContext>
  )
}

export default App

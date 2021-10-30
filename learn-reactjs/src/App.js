import logo from './logo.svg'
// import { Counter } from './features/counter/Counter'
// import { Recipes } from './react-element/recipe'
// import { Rating } from './rate-star/index'
import { Menu } from './navbar/index'
// import { Menu1 } from './chuong-11/index'
import './App.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        {/* <Counter /> */}
        {/* <Recipes /> */}
        {/* <Rating /> */}
        <Menu />
      </header>
    </div>
  )
}

export default App


import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signup from './Screens/Signup';
import Login from './Screens/Login';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Signup/>} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App

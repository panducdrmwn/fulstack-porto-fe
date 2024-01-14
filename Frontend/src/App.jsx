import { Route, Routes} from 'react-router-dom';
import {Toaster} from 'react-hot-toast'
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/Home';


function App() {

  return (
    <>
    <Toaster position='top-center' toastOptions={{duration: 3000}}/>
     <Routes>
     <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<SignUp/>}/>
     </Routes>
    </>
  )
}

export default App

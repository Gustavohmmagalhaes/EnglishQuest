import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {HomePage} from '../pages/homePage/HomePage';
import { ProgressPage } from '../pages/progressPage/ProgressPage';
import { GoalsPage } from '../pages/goalsPage/GoalsPage';
import LoginPage from '../pages/loginPage/LoginPage';
import RegisterPage from '../pages/registerPage/RegisterPage';
import ChangePassword from '../pages/changePassword/changePassword';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/home'  element={<HomePage/>}/>
        <Route  path='/'  element={<LoginPage/>}/>
        <Route  path='/register'  element={<RegisterPage/>}/>
        <Route  path='/progress'  element={<ProgressPage/>}/>
        <Route  path='/goals'  element={<GoalsPage/>}/>
        <Route  path='/changePassword'  element={<ChangePassword/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

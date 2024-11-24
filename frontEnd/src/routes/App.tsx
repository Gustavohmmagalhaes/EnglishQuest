import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/homePage/HomePage';
import { ProgressPage } from '../pages/progressPage/ProgressPage';
import { GoalsPage } from '../pages/goalsPage/GoalsPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/'  element={<HomePage/>}   />
        <Route  path='/progress'  element={<ProgressPage/>}   />
        <Route  path='/goals'  element={<GoalsPage/>}   />
      </Routes>
    </BrowserRouter>
  )
}

export default App

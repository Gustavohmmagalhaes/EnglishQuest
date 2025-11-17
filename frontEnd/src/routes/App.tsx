import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/homePage/HomePage';
import { ProgressPage } from '../pages/progressPage/ProgressPage';
import { GoalsPage } from '../pages/goalsPage/GoalsPage';
import LoginPage from '../pages/loginPage/LoginPage';
import RegisterPage from '../pages/registerPage/RegisterPage';
import ChangePassword from '../pages/changePassword/changePassword';
import AdminRoute from '../components/loginAdmin/AdminRoute';
import AdminDashboard from '../pages/adminDashboard/AdminDashboard';
import GuestRoute from '../components/loginAdmin/GuestRoute';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GuestRoute />}>
          <Route path='/' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/changePassword' element={<ChangePassword />} />
        </Route>

        {/* ROTAS PARA USUÁRIOS LOGADOS (Não protegidas por GuestRoute) */}
        <Route path='/home' element={<HomePage />} />
        <Route path='/progress' element={<ProgressPage />} />
        <Route path='/goals' element={<GoalsPage />} />

        {/* Rota de ADMIN (Protegida por AdminRoute, que já está ok) */}
        <Route path='/admin' element={<AdminRoute />}>
          <Route path='dashboardAdmin' element={<AdminDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

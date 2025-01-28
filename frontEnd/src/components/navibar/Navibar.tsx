import Logo from '../../assets/coffee.svg'
import Progress from '../../assets/trending-up.svg'
import Goal from '../../assets/calendar.svg'
import Home from '../../assets/home.svg'
import Settings from '../../assets/sliders.svg'
import Logout from '../../assets/log-out.svg'
import { Link } from 'react-router-dom';
import 'normalize.css';
import './Navibar.css';
import { useState} from 'react'

export function Navibar() {

  const[ispath, setPath] = useState(location.pathname);

  const handleLinkClick  = (path: string) =>{
    setPath(path);
  }

  return (
    <div className='total'>
      <section className='navibar'>

        <section className='navibarLogo'>
          <img className= "logo" src={Logo} alt='logo da pagina'></img>
          <h2>ENGLISHQUEST</h2>
        </section>

        <section className='navibarLinks'>
          <div className='home'>
            <img className= "homeImg" src={Home} alt='logo do icone home'></img>
            <Link to="/" onClick={()=>handleLinkClick} className= {ispath === '/' ? 'bold': 'normal'} >Home</Link>
          </div>
          <div className='progress'>
            <img className= "progressImg" src={Progress} alt='logo do icone progress'></img>
            <Link to="/progress" onClick={()=>handleLinkClick} className= {ispath === '/progress' ? 'bold': 'normal'}>Progress</Link>
          </div>
          <div className='goal'>
            <img className= "goalImg" src={Goal} alt='logo do icone Weekly Goal '></img>
            <Link to="/goals" onClick={()=>handleLinkClick} className= {ispath === '/goals' ? 'bold': 'normal'}>Weekly Goal</Link>
          </div> 
        </section>

        <section className='navibarFooter'>
          <div className='settings'>
              <img className= "settingsImg" src={Settings} alt='logo do icone settings'></img>
              <a href="/">Settings</a>
            </div>
            <div className='logout'>
              <img className= "logoutImg" src={Logout} alt='logo do icone logout '></img>
              <a href="/">Logout</a>
            </div> 
        </section> 
        
      </section>
    
    </div>
  )
}


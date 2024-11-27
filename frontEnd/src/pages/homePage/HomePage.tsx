import {Navibar} from "../../components/navibar/Navibar"
import {Header} from "../../components/header/Header"
import  {HomeContent}  from "../../components/homeContent/HomeContent"
import './HomePage.css'

export function HomePage() {
  return (

    <div className=" contentTotal ">

        <Navibar/>

        <section className="mainContent">

            <Header/>
            <HomeContent/>
            
        </section>

    </div>
  )
}




import Navbar from "../../components/Navbar";
import {BsFlower2} from 'react-icons/bs'
import AboutSec from "../../components/AboutSec";
import About1sec from "../../components/About1sec";
import Team from "../../components/Team";
import History from "../../components/History";


export default function Aboutus(){
    return(
        <div>
            <Navbar/>
            <div className="bg-back mt-1">
          
              <div className=" grid sm:grid-cols-2 md:grid-cols-5 row-1">
                  <div className=" grid sm:col-span-1 md:col-span-2">
                     <img src="/img/pone.png"/>
                  </div>
                  <div className="grid sm:col-span-1 md:col-span-1 ">
                      <div className="flex row  justify-center items-center ">
                          <div>
                      <h1 className="text-nogoon text-4xl ">Бидний тухай</h1>
                      <h1 className=" mt-2 grid text-center">Нүүр {">"} Бидний тухай</h1>
                      </div>
                      </div>
                  </div>
               </div>
              </div>
            <div>
                <div>
                    <h1 className="text-center mt-10 text-2xl font-gentium">Бидний Түүх</h1>
                    <div className="grid justify-center mt-">
                            <div className="flex items-center">
                                <div className="border border-slate-400 mr-4 w-40"></div>
                                <div> <BsFlower2 color="fuchsia"  size={35}/></div>
                                <div className="border border-slate-800 ml-4 w-40"></div>
                            </div>
                        </div>
                    <h1 className="font-hurricane text-3xl text-center text-fuchsia">We History</h1>
                    <History/>
                    <About1sec/>
                    <AboutSec/>
                    <Team/>
                </div>
            </div>
        </div>
    )
}
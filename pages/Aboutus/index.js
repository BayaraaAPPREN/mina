



import Navbar from "../../components/Navbar";
import { BsFlower1 } from 'react-icons/bs';
import {BsFlower2} from 'react-icons/bs'
import ServiceCard from "../../components/ServiceCard";
import Slider from "../../components/Slider";
import Carousel from "../../components/Carousel";
import AboutSec from "../../components/AboutSec";
import About1sec from "../../components/About1sec";
import Team from "../../components/Team";


export default function Aboutus(){
    return(
        <div>
            <Navbar/>
            <div className="bg-back mt-1">
                        <link rel="preconnect" href="https://fonts.googleapis.com"/>
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Gentium+Plus&family=Great+Vibes&family=Hurricane&display=swap" rel="stylesheet"></link>
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
                    <div className="grid xs:grid-cols-1 md:grid-cols-2 justify-center mt-10 mb-20">
                       <div className="grid col-span-1">
                           <div className="flex justify-center">
                               <div className="h-96 bg-[url('/img/background1.png')]">
                                      <img className="h-80 " src="/img/pone.png"/>
                               </div>
                           </div>
                       </div>
                       <div className="grid col-span-1">
                           <div className="flex justify-center">
                               <div className="mr-40 mt-10">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
                                <p>Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!</p>
                                <p>Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!</p>
                                <p>Consequatur rerum amet fuga expedita sunt et tempora saepe? Iusto nihil explicabo perferendis quos provident delectus ducimus necessitatibus reiciendis optio tempora unde earum doloremque commodi laudantium ad nulla vel odio?</p>
                               </div>
                           </div>
                       </div>
                    </div>
                    <About1sec/>
                    <AboutSec/>
                    <Team/>
                </div>
            </div>
        </div>
    )
}
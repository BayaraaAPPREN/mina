

import Navbar from "../../components/Navbar";
import { BsFlower1 } from 'react-icons/bs';
import {BsFlower2} from 'react-icons/bs'
import ServiceCard from "../../components/ServiceCard";
import Slider from "../../components/Slider";
import Carousel from "../../components/Carousel";


export default function Product(){
    return(
        <div>
            <Navbar/>
            <div className="bg-back  mt-1">
                        <link rel="preconnect" href="https://fonts.googleapis.com"/>
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Gentium+Plus&family=Great+Vibes&family=Hurricane&display=swap" rel="stylesheet"></link>
              <div className=" grid grid-cols-5 row-1">
                  <div className=" grid col-span-2">
                     <img src="/img/pone.png"/>
                  </div>
                  <div className="grid col-span-1 ">
                      <div className="mt-28">
                      <h1 className="text-nogoon  text-4xl text-center ">Бүтээгдэхүүн</h1>
                      <h1 className=" mt-2 grid text-center">Нүүр {">"} Бүтээгдэхүүн</h1>
                      </div>
                  </div>
               </div>
              </div>
            <div>
                <div>
                    <h1 className="text-center mt-10 text-2xl font-gentium">Онцлох Бүтээгдэхүүн</h1>
                    <div className="grid justify-center my-2">
                        <div className="flex items-center">
                            <div className="inline-block">
                                <div className="inline-block">
                                <BsFlower1 color="fuchsia"  size={15}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1 className="font-hurricane text-3xl text-center text-fuchsia">Recommended</h1>
                    <div className="flex justify-center text-center mt-10 mb-20">
                       <div className="">
                           hh
                       </div>
                    </div>
                    <div className="flex items-center justify-center cursor-pointer">
                          <h1 className="text-center mr-2 hover:text-fuchsia">БУСАД БҮТЭЭГДЭХҮҮН</h1>
                          <img src="/img/icon/arrow.png"/>
                    </div>
                </div>
                <div className="bg-back mt-10 mb-5">
                    <h1 className="text-center mt-10 text-3xl font-gentium pt-10">Бүтээгдэхүүний Онцлог</h1>
                        <div className="grid justify-center mt-">
                            <div className="flex items-center">
                                <div className="border border-slate-400 mr-4 w-40"></div>
                                <div> <BsFlower2 color="fuchsia"  size={35}/></div>
                                <div className="border border-slate-800 ml-4 w-40"></div>
                            </div>
                        </div>
                        <h1 className="font-hurricane text-3xl text-center text-fuchsia">Cosmetic Care Solutions</h1>
                        <div className="grid grid-cols-6 mt-10">
                            <div className="grid col-span-1"></div>
                            <div className="grid col-span-2">
                                <div className="pb-20">
                                    <div className="flex justify-center items-center">
                                        <div className=" mr-2">
                                        {/* <GiTwirlyFlower color="fuchsia"  size={35}/> */}
                                        <img src="/img/icon/skinpro1.png"  className="h-12 w-12"/>
                                        </div>
                                        <h1 className="text-lg">Байгалын гаралтай орц найрлага</h1>
                                    </div>
                                    <div className="flex justify-center">
                                        <p className="ml-20 w-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel mi quam. Fusce vehicula vitae mauris sit amet tempor donec consectetur.</p>
                                    </div>

                                    <div className="flex justify-center items-center mt-8">
                                        <div className=" mr-2">
                                           <img src="img/icon/skinpro2.png"  className="h-12 w-12"/>
                                        </div>
                                        <h1 className="text-lg">Байгалын гаралтай орц найрлага</h1>
                                    </div>

                                    <div className="flex justify-center">
                                        <p className="ml-20 w-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel mi quam. Fusce vehicula vitae mauris sit amet tempor donec consectetur.</p>
                                    </div>

                                    <div className="flex justify-center items-center mt-8">
                                        <div className=" mr-2">
                                           <img src="img/icon/skinpro3.png" className="h-12 w-12"/>
                                        </div>
                                        <h1 className="text-lg">Байгалын гаралтай орц найрлага</h1>
                                    </div>
                                    <div className="flex justify-center">
                                        <p className="ml-20 w-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel mi quam. Fusce vehicula vitae mauris sit amet tempor donec consectetur.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="grid col-span-2">
                                <div className="flex justify-center">
                                      <img className=" pb-20" src="/img/imgg.png"/>
                                </div>
                            </div>
                        </div>
                   </div>
                <div className="container mb-20">
                    <Slider/>
                    <Carousel/>
                </div>
            </div>
        </div>
    )
}
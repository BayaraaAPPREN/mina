



import Navbar from "../../components/Navbar";
import {BsFlower2} from 'react-icons/bs'
import Footer from "../../components/Footer";


export default function Contactus(){
    return(
        <div>
            <Navbar/>
            <div className="bg-back mt-1">
          
              <div className=" grid sm:grid-cols-2 md:grid-cols-5 row-1">
                  <div className=" grid sm:col-span-1 md:col-span-2">
                     <img src="/img/pone.png"/>
                  </div>
                  <div className="grid sm:col-span-1 md:col-span-2 ">
                      <div className="flex row  justify-center items-center ">
                      <div>
                      <h1 className="text-nogoon text-4xl ">Бидэнтэй холбогдох</h1>
                      <h1 className=" mt-2 grid text-center mb-10">Нүүр {">"} Бидэнтэй холбогдох</h1>
                      </div>
                      </div>
                  </div>
               </div>
              </div>
            <div>
                <div>
                    <h1 className="text-center mt-10 text-2xl font-gentium">Манай Хаяг</h1>
                    <div className="grid justify-center mt-">
                            <div className="flex items-center">
                                <div className="border border-slate-400 mr-4 w-40"></div>
                                <div> <BsFlower2 color="fuchsia"  size={35}/></div>
                                <div className="border border-slate-800 ml-4 w-40"></div>
                            </div>
                        </div>
                    <h1 className="font-hurricane text-3xl text-center text-fuchsia">Our Address </h1>
                   <div className="flex justify-center">
                      <img className="xs:px-2 md:px-20 block" src="/img/maps.png"/>
                   </div>
                   <div className="mt-10 mb-20">
                      <div className="flex flex-wrap justify-center">
                                <div className="px-10 mt-4">
                                    <div className="flex">
                                        <div className=" h-10 px-4  rounded-full">
                                            <img className="h-10" src="/icon/phon.png"/>
                                        </div>
                                        <div>
                                            <h1 className="font-bold">Утас</h1>
                                            <div>
                                                <h1>(+976) 7777-5888</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex mt-8">
                                        <div className=" h-10 px-4  rounded-full">
                                            <img className="h-10" src="/icon/placeholder.png"/>
                                        </div>
                                        <div>
                                            <h1 className="font-bold">Хаяг</h1>
                                            <div>
                                                <h1>Bayanzurkh district, Peace avenue, Millenium </h1>
                                                <h1>Plaza 4th floor 407 13381 Ulaanbaatar, Mongolia </h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex mt-8">
                                        <div className=" h-10 px-4  rounded-full">
                                            <img className="h-10" src="/icon/email.png"/>
                                        </div>
                                        <div>
                                            <h1 className="font-bold">Цахим шуудан</h1>
                                            <div>
                                                <h1>info@minadermatologist.com</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex mt-8">
                                        <div className=" h-10 px-4  rounded-full">
                                            <img className="h-10" src="/icon/clock.png"/>
                                        </div>
                                        <div>
                                            <h1 className="font-bold">Цагийн хуваарь</h1>  
                                            <div>
                                                <h1>Даваа - Ням: 10:00 - 20:00</h1>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="mt-4">
                                    <div className="px-2">
                                        <div className="bg-red1 px-8 py-2 rounded-md">
                                            <h1 className="text-white">Бидэнд хэлэх санал хүсэлт байвал бичиж үлдээнэ үү</h1>
                                        </div>
                                    </div>
                                    <div className="flex ">
                                        <div className="mt-4 mx-2">
                                           <input placeholder="Нэр*" className="bg-white appearance-none border border-gray rounded w-full py-2 px-2  text-gray-700 leading-tight focus:outline-none focus:bg-slate focus:border-slate" type="text" />
                                        </div>
                                        <div className="mt-4 mx-2">
                                           <input placeholder="Утас*" className="bg-white appearance-none border border-gray rounded w-full py-2 px-2  text-gray-700 leading-tight focus:outline-none focus:bg-slate focus:border-slate" type="text" />
                                        </div>
                                    </div>
                                    <div className="mt-4 mx-2">
                                           <textarea placeholder="Зурвас*" className="bg-white appearance-none border border-gray rounded w-full py-2 px-2  text-gray-700 leading-tight focus:outline-none focus:bg-slate focus:border-slate" type="text" />
                                    </div>
                                    <button className="bg-nogoon text-white rounded-md px-6 py-2 mx-2 mt-4">
                                        Илгээх
                                    </button>
                                </div>
                      </div>

                      
                   </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
import Navbar from "../../components/Navbar";
import { BsFlower2 } from 'react-icons/bs';
import ProductService from "../../components/ProductService";
import Service6 from "../../components/Service6/index"
import Footer from "../../components/Footer";
// import Carousel from "../../components/Carousel/index"

export default function Service(){
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
                      <h1 className="text-nogoon text-4xl ">Үйлчилгээ</h1>
                      <h1 className=" mt-2 grid text-center">Нүүр {">"} Үйлчилгээ</h1>
                      </div>
                      </div>
                  </div>
               </div>
              </div>
            <ProductService/>
            <div >
                <div className="bg-back">
                    <h1 className="text-center pt-10 text-2xl font-gentium">Санал болгож буй үйлчилгээ</h1>
                    <div className="grid justify-center mt-">
                            <div className="flex items-center">
                                <div className="border border-slate-400 mr-4 w-40"></div>
                                <div> <BsFlower2 color="fuchsia"  size={35}/></div>
                                <div className="border border-slate-800 ml-4 w-40"></div>
                            </div>
                        </div>
                    <h1 className="font-hurricane text-3xl text-center ">Service</h1>
                  <div className="">
                    <Service6/>
                  </div>
                </div>
            </div>
            {/* <Carousel/> */}
            <Footer/>
        </div>
    )
}
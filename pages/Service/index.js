import Navbar from "../../components/Navbar";
import { BsFlower2 } from 'react-icons/bs';
import ProductService from "../../components/ProductService";


export default function Service(){
    return(
        <div>
            <Navbar/>
            <div className="bg-back mt-1">
                       
              <div className=" grid grid-cols-5 row-1">
                  <div className=" grid col-span-2">
                     <img src="/img/pone.png"/>
                  </div>
                  <div className="grid col-span-1 ">
                      <div className="mt-28">
                      <h1 className="text-nogoon  text-4xl text-center ">Үйлчилгээ</h1>
                      <h1 className=" mt-2 grid text-center">Нүүр {">"} Үйлчилгээ</h1>
                      </div>
                  </div>
               </div>
              </div>
            <ProductService/>
            <div >
                <div className="bg-back">
                    <h1 className="text-center pt-10 text-2xl font-gentium">Welcome to Skin Laundry</h1>
                    <div className="grid justify-center mt-">
                            <div className="flex items-center">
                                <div className="border border-slate-400 mr-4 w-40"></div>
                                <div> <BsFlower2 color="fuchsia"  size={35}/></div>
                                <div className="border border-slate-800 ml-4 w-40"></div>
                            </div>
                        </div>
                    <h1 className="font-hurricane text-3xl text-center ">Easy to Give. Delicious to Enjoy</h1>
                    {/* <div>
                       <ServiceCard/>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
import Navbar from "../../components/Navbar";
import { BsFlower1 } from 'react-icons/bs';
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
            {/* <div>
                <div>
                    <h1 className="text-center mt-10 text-2xl font-gentium">Welcome to Skin Laundry</h1>
                    <div className="grid justify-center my-2">
                        <div className="flex items-center">
                            <div className="inline-block">
                                <div className="inline-block">
                                <BsFlower1 color="fuchsia"  size={15}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1 className="font-hurricane text-3xl text-center ">Easy to Give. Delicious to Enjoy</h1>
                    <div className="flex justify-center text-center mt-10 mb-20">
                        <div className="inline-block mt-4">
                            <div className="inline-block mx-10">
                                <img className="object-center" src="/img/icon/skin1.png"/>
                                <h1 className="">Swimming pools</h1>
                                <h1>EXERCISE</h1>
                            </div>
                            <div className="inline-block mx-10">
                                <img src="/img/icon/skin2.png"/>
                                <h1>Swimming pools</h1>
                                <h1>EXERCISE</h1>
                            </div>
                            <div className="inline-block mx-10">
                                <img src="/img/icon/skin3.png"/>
                                <h1>Swimming pools</h1>
                                <h1>EXERCISE</h1>
                            </div>
                            <div className="inline-block mx-10">
                                <img src="/img/icon/skin4.png"/>
                                <h1>Swimming pools</h1>
                                <h1>EXERCISE</h1>
                            </div>
                            <div className="inline-block mx-10">
                                <img src="/img/icon/skin5.png"/>
                                <h1>Swimming pools</h1>
                                <h1>EXERCISE</h1>
                            </div>
                            <div className="inline-block mx-10">
                                <img src="/img/icon/skin6.png"/>
                                <h1>Swimming pools</h1>
                                <h1>EXERCISE</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <ProductService/>
            <div >
                <div className="bg-back">
                    <h1 className="text-center pt-10 text-2xl font-gentium">Welcome to Skin Laundry</h1>
                    <div className="grid justify-center my-2">
                        <div className="flex items-center">
                            <div className="inline-block">
                                <div className="inline-block">
                                <BsFlower1 color="fuchsia"  size={15}/>
                                </div>
                            </div>
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
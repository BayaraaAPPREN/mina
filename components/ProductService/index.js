
import { BsFlower2 } from 'react-icons/bs';
export default function ProductService(){
    return(
        <div>
                <div>
                    <h1 className="text-center mt-10 text-2xl font-gentium">Welcome to Skin Laundry</h1>
                      <div className="grid justify-center mt-">
                            <div className="flex items-center">
                                <div className="border border-slate-400 mr-4 w-40"></div>
                                <div> <BsFlower2 color="fuchsia"  size={35}/></div>
                                <div className="border border-slate-800 ml-4 w-40"></div>
                            </div>
                        </div>
                    <h1 className="font-hurricane text-3xl text-center ">Easy to Give. Delicious to Enjoy</h1>
                    <div className="flex justify-center text-center mt-10 mb-20">
                        <div className="inline-block mt-4">
                            <div className="inline-block mx-10">\
                                <div className='flex justify-center'>
                                  <img className="object-center" src="/img/icon/skin1.png"/>
                                </div>
                                <h1 className="">Swimming pools</h1>
                                <h1>EXERCISE</h1>
                            </div>
                            <div className="inline-block mx-10">
                                <div className='flex justify-center'>
                                   <img src="/img/icon/skin2.png"/>
                                </div>
                                <h1>Swimming pools</h1>
                                <h1>EXERCISE</h1>
                            </div>
                            <div className="inline-block mx-10">
                                <div className='flex justify-center'>
                                   <img src="/img/icon/skin3.png"/>
                                </div>
                                <h1>Swimming pools</h1>
                                <h1>EXERCISE</h1>
                            </div>
                            <div className="inline-block mx-10">
                               <div className='flex justify-center'>
                                  <img src="/img/icon/skin4.png"/>
                                </div>
                                <h1>Swimming pools</h1>
                                <h1>EXERCISE</h1>
                            </div>
                            <div className="inline-block mx-10">
                                <div className='flex justify-center'>  
                                  <img src="/img/icon/skin5.png"/>
                                </div>
                                <h1>Swimming pools</h1>
                                <h1>EXERCISE</h1>
                            </div>
                            <div className="inline-block mx-10">
                                <div className='flex justify-center'>
                                    <img src="/img/icon/skin6.png"/>
                                </div>
                                <h1>Swimming pools</h1>
                                <h1>EXERCISE</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
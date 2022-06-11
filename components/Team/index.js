
import {BsFlower2} from 'react-icons/bs'

export default function Team(){
    return(
        <div>
            <div>
                    <h1 className="text-center mt-10 text-2xl font-gentium">Манай Баг</h1>
                    <div className="grid justify-center mt-">
                            <div className="flex items-center">
                                <div className="border border-slate-400 mr-4 w-40"></div>
                                <div> <BsFlower2 color="fuchsia"  size={35}/></div>
                                <div className="border border-slate-800 ml-4 w-40"></div>
                            </div>
                    </div>
                    <h1 className="font-hurricane text-3xl text-center text-fuchsia">My Team</h1>
                    <div className='grid xs:grid-cols-3 md:grid-cols-5 '>
                        <div className='grid col-span-1 xs:invisible hidden md:block md:visible'></div>
                        <div className='grid col-span-1'>
                           <div className='flex justify-center'>
                               <div className='m-4'>
                                   <img src='/img/member.png'/>
                                   <h1 className='text-center'>Ж. Эгшиглэн</h1>
                                   <h1 className='text-center text-fuchsia'>Ерөнхий эмч</h1>
                                   <div className='flex justify-center m-2'>
                                     <div className='border w-20  border-fuchsia'></div>
                                   </div>
                               </div>
                           </div>
                        </div>
                        <div className='grid col-span-1'>
                           <div className='flex justify-center'>
                               <div className='m-4'>
                                   <img src='/img/member.png'/>
                                   <h1 className='text-center'>Ж. Эгшиглэн</h1>
                                   <h1 className='text-center text-fuchsia'>Ерөнхий эмч</h1>
                                   <div className='flex justify-center m-2'>
                                     <div className='border w-20  border-fuchsia'></div>
                                   </div>
                               </div>
                           </div>
                        </div>
                        <div className='grid col-span-1'>
                           <div className='flex justify-center'>
                               <div className='m-4'>
                                  <img src='/img/member.png'/>
                                  <h1 className='text-center'>Ж. Эгшиглэн</h1>
                                  <h1 className='text-center text-fuchsia'>Ерөнхий эмч</h1>
                                  <div className='flex justify-center m-2'>
                                     <div className='border w-20  border-fuchsia'></div>
                                   </div>
                               </div>
                           </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}
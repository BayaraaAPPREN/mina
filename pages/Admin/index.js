
import { useRouter } from 'next/router';
import { auth } from '../../firebase'
import DialogJob from '../../components/DialogJob';


 function Admin(){
    

    const router = useRouter()
    const logout = async () => {
        auth.signOut()
        router.push("/Login")
      };
    return(
        <div className=''>
            <div class="min-h-screen justify-center bg-[url('/img/backno.png')]">
                    <div className='grid sm:grid-cols-1 md:grid-cols-5 font-serif justify-center'>
                        <div className='grid col-span-1 sm:invisible md:visible md:block sm:hidden'></div>
                        <div className='grid col-span-1  m-4 '>
                            <div className='grid justify-center bg-slate-200'>
                                <img src='/zurag.jpg' className='rounded-full mt-4 h-32 w-32 grid justify-center'/>
                                <h1 className='text-center mb-6 mt-4'>username</h1>
                            </div>
                            <div className='bg-slate-200 mt-8'>
                                {/* <h1 className='m-4'>Цэс</h1> */}
                                <div className='ml-4 mb-4'><DialogJob/></div>
                                <div className='ml-8 mt-10 mb-10'>
                                    <h1 className='cursor-pointer' onClick={logout}>Гарах</h1>
                                </div>
                            </div>
                        </div>
                        <div className='grid col-span-2 bg-slate-200 m-4'>
                            <div className='grid justify-center'>
                               <div className='inline-block text-xs'>
                                   <div className='inline-block mr-40'>
                                     <h1 className='mt-4 grid justify-start'>Таны орууласан зарууд</h1>
                                   </div>
                                   <div className='inline-block ml-10'>
                                    <div className=' '>
                                    hh
                                    </div>
                                   </div>
                               </div>
                            </div>
                        </div>
                    </div>
           </div>
        </div>
    )
}
export default  Admin
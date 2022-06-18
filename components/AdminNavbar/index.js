
import Link from 'next/link'

export default function Navbar() {
  return (
   <div className='bg-back w-full'> 
     <div className='grid justify-center items-center'>
        <div className='flex items-center mb-4 mt-2 '>
          <div className='inline-block'>
              <img className='h-20' src='/img/noTextT.png '/>
          </div> 
         
          <div className='inline-block ml-8 cursor-pointer'>
             <Link href="/">
              <h1 className='md:text-4xl xs:xl'>SKIN LAUNDRY</h1>
              </Link>
          </div>
          <div className='ml-10 bg-nogoon rounded-3xl px-4 py-4 hover:bg-green-500 cursor-pointer transition delay-75'>
              <h1 className='text-sm uppercase text-white '>Админ хуудас</h1>
          </div>
          
        </div>
     </div>
   </div>
  )
}

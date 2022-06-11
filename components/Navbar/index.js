
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
              <h1 className='md:text-4xl xs:xl'>SKIN LAUNDRY</h1>
          </div>
          <div className='ml-20 cursor-pointer xs:invisible hidden md:block md:visible'>
              <Link href="/">
                <h1 className=''>Нүүр</h1>
              </Link>
          </div>
          <div className='ml-10 cursor-pointer xs:invisible hidden md:block md:visible'>
              <Link href="/Aboutus">
              <h1 className=' active:border-b-2 active:border-b-nogoon border-transparent focus:border-transparent focus:ring-0'>Бидний тухай</h1>
              </Link>
          </div>
          <div className='ml-10 cursor-pointer xs:invisible hidden md:block md:visible'>
              <Link href="/Service">
              <h1 className=''>Үйлчилгээ</h1>
              </Link>
          </div>
          <div className='ml-10 cursor-pointer xs:invisible hidden md:block md:visible'>
              <Link href="/Product">
              <h1 className=''>Бүтээгдэхүүн</h1>
              </Link>
          </div>
          <Link href="/Contactus">
          <div className='ml-10 bg-nogoon rounded-3xl px-4 py-4 hover:bg-green-500 cursor-pointer transition delay-75'>
              <h1 className='text-sm uppercase text-white '>Бидэнтэй холбогдох</h1>
          </div>
          </Link>
        </div>
     </div>
   </div>
  )
}

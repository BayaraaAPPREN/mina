
import Link from 'next/link'
import Menuu from '../Menu'


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
          <div className='xs:visible hidden xs:block md:invisible ml-16'>
            <div class="dropdown dropdown-end">
              <button  tabindex="0">
                <img src="https://img.icons8.com/material-outlined/24/000000/menu--v4.png"/>
              </button>
              <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href='/'>Нүүр</a></li>
                <li><a href='/Aboutus'>Бидний тухай</a></li>
                <li><a href='/Service'>Үйлчилгээ</a></li>
                <li><a href='/Product'>Бүтээгдэхүүн</a></li>
                <li><a href='/Aboutus'>Бидэнтэй холбогдох</a></li>
              </ul>
            </div>
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
          <div className=' xs:invisible hidden md:block md:visible'>
          <Link href="/Contactus">
          <div className='ml-10 bg-nogoon rounded-3xl px-4 py-4 hover:bg-green-500 cursor-pointer transition delay-75 '>
              <h1 className='text-sm uppercase text-white '>Бидэнтэй холбогдох</h1>
          </div>
          </Link>
          </div>
        </div>
     </div>
   </div>
  )
}

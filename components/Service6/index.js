import Link from 'next/link'



export default function Service6(){
  return(
    <div className="pb-4 mb-2">
    <div className="flex justify-center text-center mt-4 mb-2">
      <div className="inline-block mt-4">
          <div className="inline-block mx-4">
          <div className='flex justify-center'>
            <Link href="/Botox">
            <div className="card w-96 bg-base-100 shadow-xl">
                 <div className='bg-zurag1 bg-cover w-96 bg-center h-60 transform duration-1000 hover:scale-125 cursor-pointer hover:bg-transparent  text-2xl  fill-transparent text-white hover:text-3xl hover:text-black hover:bg-nogoon'>
                    <div className='flex justify-center items-center'>
                      <h1 className='mt-24'>Ботокс</h1>
                    </div>
                 </div>
                </div>
                </Link>
              </div>
          </div>
          <div className="inline-block mx-4 mt-2">
              <div className='flex '>
              <Link href="/Filler">
              <div className="card w-96 bg-base-100 shadow-xl">
                 <div className='bg-zurag1 bg-cover w-96 bg-center h-60 transform duration-1000 hover:scale-125 cursor-pointer hover:bg-transparent  text-2xl  fill-transparent text-white hover:text-3xl hover:text-black hover:bg-nogoon'>
                    <div className='flex justify-center items-center'>
                      <h1 className='mt-24'>Филлер</h1>
                    </div>
                 </div>
                </div>
                </Link>
              </div>
          </div>
          <div className="inline-block mx-4 mt-2">
          <div className='flex justify-center'>
          <Link href="/Tattoo">
          <div className="card w-96 bg-base-100 shadow-xl">
                 <div className='bg-zurag1 bg-cover w-96 bg-center h-60 transform duration-1000 hover:scale-125 cursor-pointer hover:bg-transparent  text-2xl  fill-transparent text-white hover:text-3xl hover:text-black hover:bg-nogoon'>
                    <div className='flex justify-center items-center'>
                      <h1 className='mt-24'>Шивээс</h1>
                    </div>
                 </div>
                </div>
                </Link>
              </div>
          </div>
      </div>
    </div>
    <div className="flex justify-center text-center  mb-20">
    <div className="inline-block mt-2">
        <div className="inline-block mx-4">
        <div className='flex justify-center'>
        <Link href="/Dusluud">
        <div className="card w-96 bg-base-100 shadow-xl">
                 <div className='bg-zurag1 bg-cover w-96 bg-center h-60 transform duration-1000 hover:scale-125 cursor-pointer hover:bg-transparent  text-2xl  fill-transparent text-white hover:text-3xl hover:text-black hover:bg-nogoon'>
                    <div className='flex justify-center items-center'>
                      <h1 className='mt-24'>Дархлаа дэмжих дусалууд</h1>
                    </div>
                 </div>
                </div>
                </Link>
              </div>
        </div>
        <div className="inline-block mx-4 mt-2">
        <div className='flex justify-center'>
        <Link href="/SkinCare">
        <div className="card w-96 bg-base-100 shadow-xl">
                 <div className='bg-zurag1 bg-cover w-96 bg-center h-60 transform duration-1000 hover:scale-125 cursor-pointer hover:bg-transparent  text-2xl  fill-transparent text-white hover:text-3xl hover:text-black hover:bg-nogoon'>
                    <div className='flex justify-center items-center'>
                      <h1 className='mt-24'>Арьс арчилгаа</h1>
                    </div>
                 </div>
                </div>
        </Link>
              </div>
        </div>
        <div className="inline-block mx-4 mt-2">
        <div className='flex justify-center'>
        <Link href="/SkinBooster">
        <div className="card w-96 bg-base-100 shadow-xl">
                 <div className='bg-zurag1 bg-cover w-96 bg-center h-60 transform duration-1000 hover:scale-125 cursor-pointer hover:bg-transparent  text-2xl  fill-transparent text-white hover:text-3xl hover:text-black hover:bg-nogoon'>
                    <div className='flex justify-center items-center'>
                      <h1 className='mt-24'>Скин бүүстер</h1>
                    </div>
                 </div>
                </div>
                </Link>
              </div>
        </div>
    </div>
  </div>
  </div>
  )
}
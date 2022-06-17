import Link from 'next/link'



export default function Service6(){
  return(
    <div className="pb-4">
    <div className="flex justify-center text-center mt-4 mb-2">
      <div className="inline-block mt-4">
          <div className="inline-block mx-4">
          <div className='flex justify-center'>
            <Link href="/Botox">
          <div className="card w-96 bg-base-100 shadow-xl">
               <figure><img className="transform duration-1000 hover:scale-125 cursor-pointer" src="/img/skinnn.jpg" alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="card-title ml-20">
                      Ботокс
                      <div className="badge badge-secondary">BOTOX</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">Service</div> 
                      <div className="badge badge-outline">Botox</div>
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
                  <figure><img className="transform duration-1000 hover:scale-125 cursor-pointer" src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="card-title ml-20">
                      Филлер
                      <div className="badge badge-secondary">FILLER</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">Service</div> 
                      <div className="badge badge-outline">Filler</div>
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
                  <figure><img className="transform duration-1000 hover:scale-125 cursor-pointer" src="/img/skinnn.jpg" alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="card-title ml-24">
                      Шивээс
                      <div className="badge badge-secondary">TATTOO</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">Service</div> 
                      <div className="badge badge-outline">Tattoo</div>
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
        <figure><img className="transform duration-1000 hover:scale-125 cursor-pointer" src="/img/skinnn.jpg" alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="card-title ml-4">
                      Дархлаа дэмжих дусалууд
                      <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">Service</div> 
                      <div className="badge badge-outline">New</div>
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
        <figure><img className="transform duration-1000 hover:scale-125 cursor-pointer" src="/img/skinnn.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title ml-10">
              Арьс арчилгаа
              <div className="badge badge-secondary">SKIN CARE</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Service</div> 
              <div className="badge badge-outline">Skin care</div>
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
        <figure><img className="transform duration-1000 hover:scale-125 cursor-pointer" src="/img/skinnn.jpg" alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      Shoes!
                      <div className="badge badge-secondary uppercase">Skin booster</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">Fashion</div> 
                      <div className="badge badge-outline">Products</div>
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


export default function Footer(){
    return(
        <div className="">
            <div className="flex flex-wrap justify-center py-20 bg-back">
                <div className="">
                        <div className="flex flex-wrap">
                            <img className="ml-4 h-40" src="/noTextT.png"/>
                            <div>
                               <h1 className="mx-8 text-4xl">SKIN LAUNDRY</h1>
                               <div className="mt-4 flex">
                                  <a href="https://www.facebook.com/skinlaundrymn">
                                    <img className="h-10 ml-10" src="/icon/facebook.png"/>
                                  </a>
                                  <a href="https://www.instagram.com/minadermatologist/">
                                     <img className="h-10 mx-4" src="/icon/instagram.png"/>
                                  </a>
                               </div>
                            </div>
                            <div className="flex flex-wrap">
                                <div className="mt-4 mx-8">
                                    <h1 className=" uppercase font-bold font-mono">Шуурхай холбоос</h1>
                                    <h2>Бидний тухай</h2>
                                    <h2>Үйлчилгээ</h2>
                                    <h2>Бүтээгдэхүүн</h2>
                                    <h2>Бидэнтэй холбогдох</h2>
                                </div>
                                <div className="mt-4 mx-8">
                                    <h1 className=" uppercase font-bold font-mono">Үйлчилгээ</h1>
                                    <h2>Ботокс</h2>
                                    <h2>Филлер</h2>
                                    <h2>Шивээс</h2>
                                    <h2>Дархлаа дэмжих дусалууд</h2>
                                    <h2>Арьс арчилгаа</h2>
                                    <h2>Скин бүүстер</h2>
                                </div>
                                <div className="mt-4 mx-8">
                                    <h1 className=" uppercase font-bold font-mono">холбогдох</h1>
                                    <h2>Хаяг :  Баянзүрх дүүрэг, MILLENIUM PLAZA 4 давхар</h2>
                                    <h2>407 тоот, Монгол улс, Улаанбаатар хот</h2>
                                    <h2>Утас : 7777-5888</h2>
                                    <h2>Цахим хаяг : info@minadermatologist.com</h2>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className="w-full bg-nogoon">
                <div className="py-8 text-center">
                    <h1 className="xs:text-xs md:text-2xl text-white">Зохиогчийн эрх хуулиар хамгаалагдсан. 2022 он. Скин лаундри ХХК</h1>
                </div>
            </div>
        </div>
    )
}
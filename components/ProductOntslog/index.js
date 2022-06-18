
import { BsFlower2 } from 'react-icons/bs'

export default function ProductOntslog(){
    return(
        <div className="flex justify-center flex-wrap bg-back mb-2">
        <div className="flex items-center justify-center flex-wrap">
            <div className="mb-20">
            <h1 className="text-center mt-10 text-3xl font-gentium pt-10">Бүтээгдэхүүний Онцлог</h1>
                        <div className="grid justify-center mt-">
                            <div className="flex items-center">
                                <div className="border border-slate-400 mr-4 w-40"></div>
                                <div> <BsFlower2 color="fuchsia"  size={35}/></div>
                                <div className="border border-slate-800 ml-4 w-40"></div>
                            </div>
                        </div>
                        <h1 className="font-hurricane text-3xl text-center text-fuchsia">Cosmetic Care Solutions</h1>
                <div className="flex justify-center items-center">
                    <div className=" mr-2">
                    <img src="/img/icon/skinpro1.png"  className="h-12 w-12"/>
                    </div>
                    <h1 className="text-lg">Байгалын гаралтай орц найрлага</h1>
                </div>
                <div className="flex justify-center">
                    <p className="ml-20 w-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel mi quam. Fusce vehicula vitae mauris sit amet tempor donec consectetur.</p>
                </div>

                <div className="flex justify-center items-center mt-8">
                    <div className=" mr-2">
                        <img src="img/icon/skinpro2.png"  className="h-12 w-12"/>
                    </div>
                    <h1 className="text-lg">Байгалын гаралтай орц найрлага</h1>
                </div>

                <div className="flex justify-center">
                    <p className="ml-20 w-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel mi quam. Fusce vehicula vitae mauris sit amet tempor donec consectetur.</p>
                </div>

                <div className="flex justify-center items-center mt-8">
                    <div className=" mr-2">
                        <img src="img/icon/skinpro3.png" className="h-12 w-12"/>
                    </div>
                    <h1 className="text-lg">Байгалын гаралтай орц найрлага</h1>
                </div>
                <div className="flex justify-center">
                    <p className="ml-20 w-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel mi quam. Fusce vehicula vitae mauris sit amet tempor donec consectetur.</p>
                </div>
            </div>
            <div className="mx-20 flex-wrap">
                <img className=" pb-20" src="/img/imgg.png"/>
            </div>
        </div>
    </div>
    )
}
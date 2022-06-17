import Dialog from "../Dialog/index";


export default function Section(){
    return(
        <div className="bg-back mt-1">
            <div className='grid justify-center items-center'>
                <div className='flex justify-center items-center flex-wrap py-28'>
                    <div className="inline-block">
                        <h1 className="text-4xl ">Glow Your Face &</h1>
                        <h1 className="text-4xl">Vitality With Our </h1>
                        <h1 className="mt-4">Culpa fuga animi libero quae. Perspiciatis </h1>
                        <h1 className="">fugiat nemo dicta</h1>
                        <div className="flex-col inline-block">
                            <div className="inline-block bg-nogoon text-white px-4 py-2 rounded-3xl mt-4 hover:bg-green-500 cursor-pointer">
                                <button>ДЭЛГЭРЭНГҮЙ</button>
                            </div>
                            <div className="inline-block ml-8 mr-5 cursor-pointer ">
                                <div>
                                <Dialog/> 
                                </div>
                                {/* <div className="border-2 border-green rounded-full w-14 h-14 p-4 grid items-center">
                                    <img className="hover:bg-white" src="/img/icon/icon.png"/>
                                </div> */}
                            </div>
                            <div className="inline-block">
                                <h1 className="text-sm">Танилцуулга видьео</h1>
                            </div>
                        </div>
                    </div>
                    <div className="ml-8">
                        <img className="h-80" src="/img/backno1.png"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
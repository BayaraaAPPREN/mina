import DialogJob from "../DialogJob";


 function AdminProduct(){
    return(
        <div>
           <div className="grid md:grid-cols-4 lg:grid-cols-6 mt-10">
            <div className="grid col-span-1"> </div>
            <div className="grid col-span-4">
                <div className="inline-block">
                   <h1 className="inline-block mr-8">Бүтээгдэхүүн</h1> 
                   <button className="bg-nogoon px-6 inline-block hover:bg-green py-2 rounded-lg text-white"><DialogJob/></button>
                </div>
                <div className="bg-back rounded-lg">
                   <h1>hh</h1>
                </div>
            </div>
           </div>
        </div>
    )
}

export default AdminProduct
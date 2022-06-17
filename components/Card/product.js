
const AdminProductComp = ({ jobSalary, title, img }) => {
    return(
        <div className="p-4">
            <div class="card w-60 bg-base-100 shadow-xl">
            <figure><img className="h-40" src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <div className="flex">
                   <h1 className="mx-4 ">Нэр :</h1>
                   <h1>{title}</h1>
                </div>
                <div className="flex">
                   <h1 className="mx-4">Үнэ :</h1>
                   <h1>{jobSalary} ₮</h1>
                </div>
                <button className="bg-red mx-8 text-white rounded-lg">Хасах</button>
            </div>
            </div>
        </div>
    )
}
export default AdminProductComp 
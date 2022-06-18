
import {deleteDoc, doc} from "firebase/firestore"
import {db} from "../../firebase"

const AdminProductComp = ({ id, jobSalary, title, img }) => {

    const deleteProduct = async (id, e)=> {
        e.stopPropagation();
        const docRef = doc(db, "product", id);
        await deleteDoc(docRef);
        alert("error" `ustlaa ${id} deleted`)
    }

    return(
        <div className="p-4">
            <div className="card w-60 bg-base-100 shadow-xl">
            <figure><img className="h-40" src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="flex">
                   <h1 className="mx-4 ">Нэр :</h1>
                   <h1>{title}</h1>
                </div>
                <div className="flex">
                   <h1 className="mx-4">Үнэ :</h1>
                   <h1>{jobSalary} ₮</h1>
                </div>
                <button className="bg-red mx-8 text-white rounded-lg" onClick={e => deleteProduct(id, e)}>Устгах</button>
            </div>
            </div>
        </div>
    )
}
export default AdminProductComp 
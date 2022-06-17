import AdminProductComp from "../Card/product";
import AdminDialogPropduct from "../AdminDialogPropduct";

import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase"
import { useState } from "react"


 function AdminService(){
   const [zar, setZar] = useState([])

   const collectionRef = collection(db , "service")
           const q = query(collectionRef, orderBy("timestamp", "desc"));
           const unsubscribe = onSnapshot(q, (querySnapshot) => {
               setZar(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id,
               timestamp: doc.data().
               timestamp?.toDate().getTime()})))
               return(
                   unsubscribe
               )
           });
    return(
        <div>
           <div className="grid md:grid-cols-4 lg:grid-cols-6 mt-10">
            <div className="grid col-span-1"> </div>
            <div className="grid col-span-4">
                <div className="inline-block mb-8">
                   <h1 className="inline-block mr-8">Бүтээгдэхүүн</h1>
                   <button className="bg-nogoon px-6 inline-block py-2 rounded-lg text-white"><AdminDialogPropduct/></button>
                </div>
                <div className="bg-back rounded-lg">
                <div className="flex justify-center text-center mt-10 mb-20">
                       <div className="">
                       <div className="grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
                                    {zar.map(zar => <AdminProductComp key={zar.id}
                                        title={zar.title}
                                        img={zar.img}
                                        jobSalary={zar.jobSalary}
                                    />
                                    )}
                        </div>
                       </div>
                    </div>
                </div>
            </div>
           </div>
        </div>
    )
}

export default AdminService
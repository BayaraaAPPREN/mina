
import {deleteDoc, doc, setDoc} from "firebase/firestore"
import {db} from "../../firebase"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
// import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
// import { useEffect } from "react"

const AdminProductComp = ({ id, jobSalary, title, img }) => {
    let [isOpen, setIsOpen] = useState(false)
    const [zar, setZar] = useState([])
    const [myid, setmyid] = useState()

    // useEffect(() => {
    //     const collectionRef = collection(db , "product")
    //     const q = query(collectionRef, orderBy("timestamp", "desc"));
    //     const unsubscribe = onSnapshot(q, (querySnapshot) => {
    //         setZar(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id,
    //         timestamp: doc.data().
    //         timestamp?.toDate().getTime()})))
    //         return(
    //             unsubscribe
    //         )
    //     });
    //   });

    function closeModal() {
        setIsOpen(false)
      }
      function openModal(id) {
        console.log(id)
        setIsOpen(true)
        setmyid(id)
      }

      const Save = async () => {
        const docReff = doc(db, "product", myid);
        await setDoc(docReff, {
            title: zar.title,
            jobSalary: zar.jobSalary
          });
      }

    const deleteProduct = async (id, e)=> {
        e.stopPropagation();
        const docRef = doc(db, "product", id);
        await deleteDoc(docRef);
        // alert("error" `ustlaa ${id} deleted`)
    }

    return(
        <div className="p-4">
            <div className="card w-60 bg-base-100 shadow-xl">
            <figure><img className="h-40" src={img} alt="zurag"/></figure>
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
                <button className="bg-slate mx-8 text-black rounded-lg" onClick={e => openModal(id, e)}>Засварлах</button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                            as="h3"
                            className="text-lg font-medium leading-6 text-gray-900"
                        >
                            Засварлах
                        </Dialog.Title>
                        <div className="mt-2">
                            <input placeholder={title}
                            value={zar.title}
                            onChange={ e => setZar({...zar, title:e.target.value})}
                            />
                            <input placeholder={jobSalary}
                            value={zar.jobSalary}
                            onChange={ e => setZar({...zar, jobSalary:e.target.value})}
                            />
                            <input type="file"/>
                        </div>

                        <div className="mt-4">
                            <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={Save}
                            >
                             Илгээх
                            </button>
                        </div>
                        </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
                </Dialog>
            </Transition>
            </div>
        </div>
    )
}
export default AdminProductComp 
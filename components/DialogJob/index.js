import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useEffect } from 'react'
import { db } from '../../firebase'
import { addDoc, collection, serverTimestamp } from "@firebase/firestore"
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase";

export default function DialogJob() {
  const [zar, setZar] = useState({ title: "", detail: "", jobSalary: "", type: "", img: ""});
  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);
  let [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState("");
  const [sort, setSort] = useState("");

  const onSubmit = async () => {
   
    const collectionRef = collection(db, "product")
    const docRef = await addDoc(collectionRef, {...zar, timestamp:
    serverTimestamp() })
    setZar({ title: '', detail: '', jobSalary: '', type: '', img: '',})
    console.log(zar.img)
    alert('Амжилттай нийтэллээ!!! баяр хүргэе')
    setIsOpen(false)
}
// useEffect((e) => {
//   console.log(value)
// }, [sort]);
const handleSubmit = (e) => {
  console.log("hh")
  e.preventDefault()
  const file = e.target[0]?.files[0]
  if (!file) return;
  const storageRef = ref(storage, `files/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on("state_changed",
    (snapshot) => {
      const progress =
        Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      setProgresspercent(progress);
    },
    (error) => {
      alert(error);
    },
    () => {
      console.log("zurag orj bn")
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setImgUrl(downloadURL)
        console.log(downloadURL)
        setZar({...zar, img:downloadURL})
      });
    }
  );
}
function logValue() {
  console.log(zar.type);
}


  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  

  return (
    <>
      <div className="mt-4">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-lime-500 px-2 py-2 text-sm font-medium text-white hover:bg-lime-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 "
        >
            Цагийн ажлын зар оруулах
        </button>
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
                    Цагын ажлын зараа оруулаарай
                  </Dialog.Title>
                  <div className="mt-2 text-sm text-gray-500">
                    <h1 className='mb-2'>Гарчиг</h1>
                    <input id="title" type="text" name="title" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Гарчиг"
                    value={zar.title}
                    onChange={ e => setZar({...zar, title:e.target.value})}
                    />
                  </div>

                  <div className="mt-2 text-sm text-gray-500">
                    <h1 className='mb-2'>Нэмэлт мэдээлэл</h1>
                    <textarea id="title" type="text" name="title" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Нэмэлт мэдээлэл" 
                    value={zar.detail}
                    onChange={ e => setZar({...zar, detail:e.target.value})}
                    />
                  </div>

                  <div className="mt-2 text-sm text-gray-500">
                    <h1 className='mb-2'>Зураг</h1>
                    <div>                  
                    <form onSubmit={handleSubmit} className='form'>
                      <input type='file'
                       onChange={ e => 
                        setZar({...zar, img:e.target.value})
                      }
                      />
                      <button type='submit' className='bg-lime-600 text-white hover:bg-lime-800 transition delay-75 rounded-sm py-2 px-4'>Дараарай</button>
                    </form>
                    { 
                      !imgUrl &&
                      <div className='outerbar'>
                        <div className='innerbar text-lg ' style={{ width: `${progresspercent}%` }}>{progresspercent}%</div>
                      </div>
                    }
                    </div>
                  </div>

                  <div className="mt-2 text-sm text-gray-500">
                    <h1 className='mb-2'>Цагын ажлын хөлс</h1>
                    <input id="title" type="text" name="title" className="text-sm placeholder:text-xs sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" 
                    value={zar.jobSalary}
                    onChange={ e => setZar({...zar, jobSalary:e.target.value})}
                    placeholder="Цагын ажлын хөлс" />
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    <h1 className='mb-2'>Зарын хэлбэр</h1>
                    <select id="title" type="text" name="title" className="text-sm placeholder:text-xs sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Ажлын зар бол ажлын хөлс / Түрээсийн зар бол түрээслэх үнэ" 
                    value={zar.type}
                    onChange={ e => setZar({...zar, type:e.target.value})}
                    >
                      <option selected value="CHECK" className='rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 '>Сонгоорой</option>
                      <option value="SUPERMARKET" className='rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 '>Дэлгүүр орох</option>
                      <option value="PAPER" className='rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 '> Бичиг баримт хүргэлт </option>
                      <option value="BUSAD" className='rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 '>Бусад</option>
                    </select>
                  </div>

                  <div className="mt-4 grid justify-center  ">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-200 px-20 py-2 text-sm font-medium transition delay-75 text-blue-900 hover:bg-lime-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={onSubmit}
                    >
                      Нийтлэх
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useEffect } from 'react'
import { db } from '../../firebase'
import { addDoc, collection, serverTimestamp } from "@firebase/firestore"
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase";

 function AdminDialogService() {
  const [zar, setZar] = useState({ title: "", detail: "", jobSalary: "", type: "", img: ""});
  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);
  let [isOpen, setIsOpen] = useState(false)

  const onSubmit = async () => {
   
    const collectionRef = collection(db, "service")
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
        setProgresspercent(progress);
        
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
      <div className="">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md  text-sm font-sans text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 "
        >
            Нэмэх
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
            <div className="fixed inset-0 bg-nogoon bg-opacity-25" />
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
                    className="text-lg font-sans leading-6 text-gray"
                  >
                    Үйлчилгээгээ оруулаарай
                  </Dialog.Title>
                  <div className="mt-2 text-sm text-gray">
                    <h1 className='mb-2'>Үйлчилгээний нэр</h1>
                    <input id="title" type="text" name="title" className="text-sm sm:text-base placeholder-graybudeg pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Үйлчилгээний нэр"
                    value={zar.title}
                    onChange={ e => setZar({...zar, title:e.target.value})}
                    />
                  </div>

                  <div className="mt-2 text-sm text-gray">
                    <h1 className='mb-2'>Нэмэлт мэдээлэл</h1>
                    <textarea id="title" type="text" name="title" className="text-sm sm:text-base placeholder-gray pl-10 pr-4 rounded-lg border border-gray w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Нэмэлт мэдээлэл" 
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
                      <button type='submit' className='bg-nogoon text-white hover:bg-green transition delay-75 rounded-sm py-2 px-4'>Дараарай</button>
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
                    <h1 className='mb-2'>Үйлчилгээний үнэ</h1>
                    <input id="title" type="text" name="title" className="text-sm placeholder:text-xs sm:text-base placeholder-gray pl-10 pr-4 rounded-lg border border-gray w-full py-2 focus:outline-none focus:border-blue-400" 
                    value={zar.jobSalary}
                    onChange={ e => setZar({...zar, jobSalary:e.target.value})}
                    placeholder="Үйлчилгээний үнэ" />
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    <h1 className='mb-2'>Үйлчилгээний төрөл</h1>
                    <select id="title" type="text" name="title" className="text-sm placeholder:text-xs sm:text-base placeholder-gray pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-silver" placeholder="Ажлын зар бол ажлын хөлс / Түрээсийн зар бол түрээслэх үнэ" 
                    value={zar.type}
                    onChange={ e => setZar({...zar, type:e.target.value})}
                    >
                      <option selected value="CHECK" className='rounded-lg border border-gray w-full py-2 focus:outline-none focus:border-silver '>Сонгоорой</option>
                      <option value="BOTOX" className='rounded-lg border border-gray w-full py-2 focus:outline-none focus:border-silver '>Ботокс</option>
                      <option value="FILLER" className='rounded-lg border border-gray w-full py-2 focus:outline-none focus:border-silver '> Филлер </option>
                      <option value="TATTOO" className='rounded-lg border border-gray w-full py-2 focus:outline-none focus:border-silver '>Шивээс</option>
                      <option value="DUSAL" className='rounded-lg border border-gray w-full py-2 focus:outline-none focus:border-silver '>Дусал</option>
                      <option value="ARIS" className='rounded-lg border border-gray w-full py-2 focus:outline-none focus:border-silver '> Арьс арчилгаа </option>
                      <option value="BOOSTER" className='rounded-lg border border-gray w-full py-2 focus:outline-none focus:border-silver '>Skin booster</option>
                    </select>
                  </div>

                  <div className="mt-4 grid justify-center  ">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-back px-20 py-2 text-sm font-sans transition delay-75 text-blue-900 hover:bg-nogoon hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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

export default AdminDialogService
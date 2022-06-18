



import Navbar from "../../components/Navbar";
import {BsFlower2} from 'react-icons/bs'
import Card from "../../components/Card/botox";

import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { db } from "../../firebase"
import { useState } from "react"
import Footer from "../../components/Footer/index"


export default function Botox(){
    const [zar, setZar] = useState([])

    const collectionRef = collection(db , "service")
            const q = query(collectionRef, orderBy("timestamp", "desc"),  where('type', '==', 'BOTOX'));
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
            <Navbar/>
            <div className="bg-back mt-1">
          
              <div className=" grid sm:grid-cols-2 md:grid-cols-5 row-1">
                  <div className=" grid sm:col-span-1 md:col-span-2">
                     <img src="/img/pone.png"/>
                  </div>
                  <div className="grid sm:col-span-1 md:col-span-1 ">
                      <div className="flex row  justify-center items-center ">
                          <div>
                      <h1 className="text-nogoon text-4xl ">Ботокс</h1>
                      <h1 className=" mt-2 grid text-center">Үйлчилгээ {">"} Ботокс</h1>
                      </div>
                      </div>
                  </div>
               </div>
              </div>
            <div>
            <h1 className="text-center mt-10 text-2xl font-gentium">Ботокс</h1>
                    <div className="grid justify-center mt-">
                            <div className="flex items-center">
                                <div className="border border-slate-400 mr-4 w-40"></div>
                                <div> <BsFlower2 color="fuchsia"  size={35}/></div>
                                <div className="border border-slate-800 ml-4 w-40"></div>
                             </div>
                        </div>
                         <h1 className="font-hurricane text-3xl text-center text-fuchsia">Botox</h1>
                         <div className="flex justify-center text-center mt-10 mb-20">

                            <div className="flex justify-center text-center mt-10 mb-20">
                              <div className="">
                               <div className="grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
                                            {zar.map(zar => <Card key={zar.id}
                                                title={zar.title}
                                                img={zar.img}
                                                detail={zar.detail}
                                                jobSalary={zar.jobSalary}
                                                timestamp={zar.timestamp}
                                                id={zar.id}
                                            />
                                            )}
                                </div>
                              </div>
                            </div>
                    </div>
            </div>
            <Footer/>
        </div>
    )
}
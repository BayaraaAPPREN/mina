



import Navbar from "../../components/Navbar";
import { useState } from 'react'
import { useRouter } from 'next/router';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase'

export default function Login(){
    const router = useRouter()
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const login = async () => {
        try {
          const user = await signInWithEmailAndPassword( auth, loginEmail, loginPassword );
          console.log(user);
          router.push("/Admin")
        } catch (error) {
          console.log(error.message);
          alert("Нууц үг нэвтрэх нэрээ шалгана уу!!!")
        }
      };
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
                      <h1 className="text-nogoon text-4xl ">Нэвтрэх</h1>
                      </div>
                      </div>
                  </div>
               </div>
              </div>
            <div className="my-10">
               <div className="flex justify-center ">
                 <input type="text" placeholder="Нэвтрэх нэр" class="input input-bordered input-accent w-full max-w-xs"
                  value={loginEmail}
                  onChange={(e) => {
                     setLoginEmail(e.target.value);
                  }}
                 />
               </div>
               <div className="flex justify-center mt-4">
                 <input type="password" placeholder="Нууц үг" class="input input-bordered input-accent w-full max-w-xs"
                  value={loginPassword}
                  onChange={(e) => {
                      setLoginPassword(e.target.value);
                  }}
                 />
               </div>
               <div className="flex justify-center mt-4">
                  <button className="btn btn-accent tex" onClick={login} >Нэвтрэх</button>
               </div>
            </div>
        </div>
    )
}
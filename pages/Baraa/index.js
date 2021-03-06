import AdminNavbar from '../../components/AdminNavbar/index'
import AdminProduct from '../../components/AdminProduct'
import { useRouter } from 'next/router';
import AdminService from '../../components/AdminService'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebase'
import React, { useEffect } from 'react'

 function Baraa(){
     const router = useRouter()
     useEffect(() => {
     onAuthStateChanged(auth, (user) => {
       
          if (user) {
              const uid = user.uid;
              console.log(user.uid)
              // ...
          } else {
              router.push("/Login")
          }
        });
          });

    return(
    <div>
         <AdminNavbar/>
         <AdminProduct/>
         <AdminService/>
    </div>
    )
}
export default  Baraa
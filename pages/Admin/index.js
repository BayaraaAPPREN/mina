import AdminNavbar from '../../components/AdminNavbar/index'
import AdminProduct from '../../components/AdminProduct'
// import AdminSection from '../../components/AdminSection'
import AdminService from '../../components/AdminService'

 function Admin(){
    return(
    <div>
         <AdminNavbar/>
         {/* <AdminSection/> */}
         <AdminProduct/>
         <AdminService/>
    </div>
    )
}
export default  Admin
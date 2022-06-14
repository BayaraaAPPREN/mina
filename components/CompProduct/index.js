import moment from "moment"
import { AiFillStar } from 'react-icons/ai';
import { GrStar } from  'react-icons/gr';

const CompProduct = ({ id, jobSalary, title, detail, img }) => {
    return(
        <div className="">
            <div className="">
                <div className="grid justify-center">
                    <img className="p-2 mx-4 transform duration-1000 hover:scale-125 cursor-pointer" src={img}/>
                    <h1 className=" text-lg text-center mb-1 ">{title}</h1>
                    <div className="flex justify-center mb-2">
                       <GrStar size={20}/>
                       <GrStar size={20}/>
                       <GrStar size={20}/>
                       <GrStar size={20}/>
                       <GrStar size={20}/>
                    </div>
                    <h1 className="hover:bg-red rounded-lg hover:text-white mx-10 py-2 cursor-pointer transition delay-75">{jobSalary} ₮ </h1>
                </div>
            </div>
        </div>
    )
}
export default CompProduct 
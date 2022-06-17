
    const Card = ({ id, jobSalary, title, detail, img }) => {
    return(

<div className="">
<div className="">
    <div className="grid justify-center">
        <img className="p-2 mx-4 h-72 transform duration-1000 hover:scale-125 cursor-pointer rounded-lg" src={img}/>
        <h1 className=" text-lg text-center mb-1 ">{title}</h1>
        <h1 className="mx-8 text-xl text-nogoon mt-4 mb-8">{detail}</h1>
        <h1 className="hover:bg-red rounded-lg hover:text-white mx-20 py-2 cursor-pointer transition delay-75 bg-nogoon text-white">{jobSalary} ₮ </h1>
    </div>
</div>
</div>
    )
}
export default Card 
import Circles from "../Circular units/Circles";
function Complaint(){
    return <div className=" grid grid-cols-1 m-12 h-1/2 items-center">
    
    <div className="mb-16">
    <h1 className=" text-6xl">
        Have a Concern?
    </h1>
    <button className=" max-w-max border-solid my-4 border-black border-2 rounded-3xl px-4 p-1 hover:font-semibold hover:p-2">
        File Your Complaint here
    </button>
    </div>


    <h1 className="text-3xl">
        What do you want to report?
    </h1>
    <div className="flex justify-between"> 
        <Circles title={"Assault"} detail={" this will be the text inside the circleand another text and another"}/>
        <Circles title={"Assault"} detail={" this will be the text inside the circleand another text and another"}/>
        <Circles title={"Assault"} detail={" this will be the text inside the circleand another text and another"}/>
    </div>
    </div>
}export default Complaint;
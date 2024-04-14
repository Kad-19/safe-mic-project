import Circles from "./Circular units/Circles";
import ComplaintBlock from "./Collapsible/ComplaintBlock";
function Complaint(){
    const complaints = [
        {
            title: "Slow Internet Speed",
            description: "I am experiencing very slow internet speed, making it difficult to browse or stream videos."
        },
        {
            title: "Noisy Neighbors",
            description: "My neighbors are constantly making loud noises late at night, disturbing my sleep."
        },
        {
            title: "High Electricity Bills",
            description: "I have noticed a sudden increase in my electricity bills, despite not using any additional appliances."
        },
        {
            title: "Poor Road Conditions",
            description: "The roads in our neighborhood are filled with potholes and are poorly maintained, causing damage to vehicles."
        },
        {
            title: "Trash Collection Issue",
            description: "The garbage collection in our area has been irregular lately, resulting in overflowing bins and bad odor."
        }
    ];
    
    // Example usage:
    console.log(complaints[0].title); // Output: Slow Internet Speed
    console.log(complaints[0].description); // Output: I am experiencing very slow internet speed, making it difficult to browse or stream videos.
    
    return <div className=" grid grid-cols-1 m-12 items-center w-[80%] mx-auto">
    
    <div className="mb-16 h-1/2">
    <h1 className=" text-6xl">
        Have a Concern?
    </h1>
        <button className=" max-w-max border-solid my-4 border-foreground border-2 rounded-3xl px-4 p-1 hover:font-semibold hover:px-8">
            File Your Complaint here
        </button>
    </div>


    <h1 className="text-3xl">
        What do you want to report?
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> 
        <Circles title={"Grade"} detail={" If you feel like the grade you got doesn't reflect on work you have done. And there be  another motive behind it"}/>
        <Circles title={"Services"} detail={"If you are dissatisfied with the service you are receiving and there is clear violation of policies or standards"}/>
        <span className='md:hidden lg:flex'><Circles title={"Harrasment"} detail={" If you are being harassed by students or teachers"}/></span>
    </div>
    <div className="h-screem grid grid-cols-1 place-items-center">
        {
            complaints.map((obj,index)=><ComplaintBlock title={obj.title} content={obj.description}/>)
        }
    </div>

    </div>
}export default Complaint;
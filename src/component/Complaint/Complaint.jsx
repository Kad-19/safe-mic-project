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
    
    return <div className=" grid grid-cols-1 m-12 items-center">
    
    <div className="mb-16 h-1/2">
    <h1 className=" text-6xl">
        Have a Concern?
    </h1>
        <button className=" max-w-max border-solid my-4 border-black border-2 rounded-3xl px-4 p-1 hover:font-semibold hover:px-8">
            File Your Complaint here
        </button>
    </div>


    <h1 className="text-3xl">
        What do you want to report?
    </h1>
    <div className="flex flex-wrap justify-around overflow-wrap"> 
        <Circles title={"Assault"} detail={" this will be the text inside the circleand another text and another"}/>
        <Circles title={"Assault"} detail={" this will be the text inside the circleand another text and another"}/>
        <Circles title={"Assault"} detail={" this will be the text inside the circleand another text and another"}/>
    </div>
    <div className="h-screem grid grid-cols-1 place-items-center m-12">
        {
            complaints.map((obj,index)=><ComplaintBlock title={obj.title} content={obj.description}/>)
        }
    </div>

    </div>
}export default Complaint;
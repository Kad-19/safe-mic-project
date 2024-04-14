import { Fetcher } from "./Fetcher";
import { PopUp } from "./PopUp";
import useFetch from "./useFetch";

export const Permission=(props)=>{
    const { isLoading, data } = useFetch(`all/users/${props.id}`, true);

    if (isLoading) {
      return <h2>is loading..</h2>
    }
    if(data){
      console.log(data);
    }
    return(
        <>
        {
        data?.data.is_staff?<><Fetcher/><PopUp/></>:"you must be an admin to access this"
        }
        </>
    ) 
}
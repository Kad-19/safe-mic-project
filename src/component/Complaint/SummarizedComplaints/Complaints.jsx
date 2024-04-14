import { Fetcher } from "./Fetcher";
import { Permission } from "./Permission";
import { PopUp } from "./PopUp";
import useFetch from "./useFetch";

export const Complaints=()=>{
    const { isLoading, data } = useFetch('auth/users/me/', true);

    if (isLoading) {
      return <h2>is loading..</h2>
    }
    return <Permission id={data?.data.id} />
}
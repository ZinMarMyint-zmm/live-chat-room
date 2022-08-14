import { ref } from "vue";
import {auth} from "../firebase/config"
let error = ref(null);
let logoutUser =async()=>{
    try{
        await auth.signOut();
        console.log("user logged out")
    }catch(err){
        error.value = err.message;
        console.log(error.value)
    }
}

let useLogout = ()=>{

    return {error,logoutUser}
}
export default useLogout;
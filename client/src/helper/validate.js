import toast  from "react-hot-toast"
/**Validate usetrname */
function usernameVerify(error = {},values){
    if(!values.username){
        error.username =  toast.error('Username Required ... !')

    }else if(values)
}
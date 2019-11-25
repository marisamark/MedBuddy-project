import axios from "axios";

export default {
    saveUser : function(newUser)
    {
        return axios.post("/api/user", newUser)
    },
    loginUser : function (loginDetails)
    {
        return axios.post("/api/user/login", loginDetails)
    }
}
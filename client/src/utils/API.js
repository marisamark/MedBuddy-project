import axios from "axios";

export default {
    saveUser : function(newUser)
    {
        return axios.post("/api/user", newUser)
    }
}
import { axiosInstance } from ".";

export const LoginUser = async (user) => {
    try {
        const response = await axiosInstance.post("/api/users/login", user);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

export const RegisterUser = async (user) => {
    try {
        const response = await axiosInstance.post("/api/users/register", user);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

export const GetCurrentUser = async () =>{
    try{
        const  response = await axiosInstance.get("/api/users/get-current-user");
        return response.data;
    }

    catch(error){
        return error.response.data;

    }
}
import { use, useState } from "react";
import { useNavigate } from "react-router-dom";
import { register as registerRequest } from "../../services";
import toast from "react-hot-toast";

export const useRegister = () =>{

    const [isLoading, setIsloadign] = useState(false);

    const navigate = useNavigate();

    const register = async(email,password,username) =>{

        setIsloadign(true)

        const response = await registerRequest({email,password,username})

        setIsloadign(false)

        if(response.error){
            return toast.error(response.error?.response?.data || 'Ocurrio un error al registrarte intentalo mas tarde')
        }

        const {userDetails} = response.data

        localStorage.setItem('user', JSON.stringify(userDetails));

        toast.success('Se ha registrado al usuario con exito');

        navigate('/')
    }
    return{
        register,
        isLoading
    }
}
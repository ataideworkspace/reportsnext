
import { Fab, Input } from "@mui/material";
import { FaSave } from 'react-icons/fa';
import { useState } from 'react';


export const Login = (props) => {

    const [pass, setPass] = useState(1650)



    const handleRegister = () => {
        // let response = await fetch(`https://pbetonapi.herokuapp.com/api/v1/gravel/auth/${pass}`)
        // let list = await response.json()
        // alert(list)
        //Auth(list)

        if (pass === 1650) {
            props.retorno('gravel')
        }
    }




    if (props.sect == 'login') {
        return (
            <>
                <label>Login</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Input type="password" size="sm" value={pass} /> &nbsp;&nbsp;&nbsp;
                <Fab variant="extended">
                    <FaSave color="green" onClick={() => handleRegister()} />
                </Fab>
            </>
        )
    }
}

import { Fab, Input } from "@mui/material";
import { FaSave } from 'react-icons/fa';
import { useState } from 'react';


export const Login = (props) => {

    const [pass, setPass] = useState()


    const handleRegister = () => {

        fetch(`https://pbetonapi.herokuapp.com/api/v1/gravel/auth/${pass}`)
            .then(response => response.json())
            .then(commits => Auth(commits));
    }

    const Auth = (data) => {
        if (data === '') {
            alert("vérifiez vos informations d'identification")
        } else {
            if (data[0][1] === 'office' && parseInt(pass) === data[0][2]) {
                props.retorno('gravel')
            } else {
                alert("vérifiez vos informations d'identification")
            }

        }
    }

    if (props.sect == 'login') {
        return (
            <>
                <label>Login</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Input type="password" size="sm" onChange={(e) => setPass(e.target.value)} /> &nbsp;&nbsp;&nbsp;
                <Fab variant="extended">
                    <FaSave color="green" onClick={() => handleRegister()} />
                </Fab>
            </>
        )
    }
}
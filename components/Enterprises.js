import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from '../styles/General.module.css'
import { Fab } from "@mui/material";
import { FaEdit } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export const Enterprises = (props) => {



    const [data_enterprises, setDataEnterprises] = useState([])
    const [data_users, setDataUsers] = useState([])
    const [data_trucks, setDataTrucks] = useState([])

    useEffect(() => {
        fetchEnterprises()
        fetchUsers()
        fetchTrucks()
    }, []);

    const fetchEnterprises = async () => {
        let response = await fetch('https://pbetonapi.herokuapp.com/api/v1/gravel/enterprises');
        let list = await response.json()
        setDataEnterprises(list)
    }

    const fetchUsers = async () => {
        let response = await fetch('https://pbetonapi.herokuapp.com/api/v1/gravel/users');
        let list = await response.json()
        setDataUsers(list)
    }

    const fetchTrucks = async () => {
        let response = await fetch('https://pbetonapi.herokuapp.com/api/v1/gravel/trucks');
        let list = await response.json()
        setDataTrucks(list)
    }

    if (props.sect == 'enterprises') {
        return (
            <>
                <h3>TRANSPORTEURS</h3>
                <br></br>
                <div className={styles.row}>
                    <div className={styles.column} >
                        Transporteur<br /><br />
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead >
                                    <TableRow>
                                        <TableCell align="center" >#Ref</TableCell>
                                        <TableCell align="center">Enterprise</TableCell>
                                        <TableCell align="center">Adresse</TableCell>
                                        <TableCell align="center">Email</TableCell>
                                        <TableCell align="center">Edition</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data_enterprises.map((gravel) => (
                                        <TableRow key={gravel[0]}>
                                            <TableCell align="center">{gravel[0]}</TableCell>
                                            <TableCell align="center">{gravel[1]}</TableCell>
                                            <TableCell align="center">{gravel[2]}</TableCell>
                                            <TableCell align="center">{gravel[3]}</TableCell>
                                            <TableCell align="center">
                                                <Fab variant="extended">
                                                    <FaEdit color="blue" />
                                                </Fab>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br></br>
                        Camions<br /><br />
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead >
                                    <TableRow>
                                        <TableCell align="center">Numero</TableCell>
                                        <TableCell align="center">Plaques</TableCell>
                                        <TableCell align="center">Type</TableCell>
                                        <TableCell align="center">Enterprise</TableCell>
                                        <TableCell align="center">Edition</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data_trucks.map((truck) => (
                                        <TableRow key={truck[0]}>
                                            <TableCell align="center">{truck[1]}</TableCell>
                                            <TableCell align="center">{truck[4]}</TableCell>
                                            <TableCell align="center">{truck[2]}</TableCell>
                                            <TableCell align="center">{truck[3]}</TableCell>

                                            <TableCell align="center">
                                                <Fab variant="extended">
                                                    <FaEdit color="blue" />
                                                </Fab>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    <div className={styles.column} >
                        Chauffeurs<br /><br />
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead >
                                    <TableRow>
                                        <TableCell align="center" >#Ref</TableCell>
                                        <TableCell align="center">Utilisateur</TableCell>
                                        <TableCell align="center">Nom</TableCell>
                                        <TableCell align="center">Enterprise</TableCell>
                                        <TableCell align="center">Edition</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data_users.map((product) => (
                                        <TableRow key={product[0]}>
                                            <TableCell align="center">{product[0]}</TableCell>
                                            <TableCell align="center">{product[1]}</TableCell>
                                            <TableCell align="center">{product[3]}</TableCell>
                                            <TableCell align="center">{product[2]}</TableCell>
                                            <TableCell align="center">
                                                <Fab variant="extended">
                                                    <FaEdit color="blue" />
                                                </Fab>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </>
        )
    }
}
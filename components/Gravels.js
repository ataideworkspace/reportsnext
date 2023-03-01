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

export const Gravels = (props, data_gravels, data_gravel_products) => {

    data_gravels = props.data_gravels
    data_gravel_products = props.data_gravel_products

    if (props.sect == 'gravel') {
        return (
            <>
                <h3>GRAVIERES</h3>
                <br></br>
                <div className={styles.row}>
                    <div className={styles.column} >
                        Enterprise<br /><br />
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead >
                                    <TableRow>
                                        <TableCell align="center" >#Ref</TableCell>
                                        <TableCell align="center">Gravière</TableCell>
                                        <TableCell align="center">Adresse</TableCell>
                                        <TableCell align="center">Email</TableCell>
                                        <TableCell align="center">Edition</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data_gravels.data.map((gravel) => (
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
                    </div>
                    <div className={styles.column} >
                        Produit<br /><br />
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead >
                                    <TableRow>
                                        <TableCell align="center" >#Ref</TableCell>
                                        <TableCell align="center">Désignation</TableCell>
                                        <TableCell align="center">Gravière</TableCell>
                                        <TableCell align="center">Edition</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data_gravel_products.data.map((product) => (
                                        <TableRow key={product[0]}>
                                            <TableCell align="center">{product[0]}</TableCell>
                                            <TableCell align="center">{product[1]}</TableCell>
                                            <TableCell align="center">{product[3]}</TableCell>
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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Fab, Input, Select, MenuItem, FormControl } from "@mui/material";
import { FaEdit, FaTrashAlt, FaSave } from 'react-icons/fa';
import { useState, useEffect } from 'react';



export const Orders = (props) => {

    let data_gravels = props.data_gravels
    let data_enterprises = props.data_enterprises
    let data_users = props.data_users
    let data_trucks = props.data_trucks
    let data_centrals = props.data_centrals


    const [gravel, setGravel] = useState('')
    const [product, setProduct] = useState('')
    const [enterprise, setEnterprise] = useState('')
    const [user, setUser] = useState('')
    const [truck, setTruck] = useState('')
    const [ton, setTon] = useState(0)
    const [dat, setDat] = useState('')
    const [order, setOrder] = useState('')
    const [central, setCentral] = useState('')
    const [listOrders, setListOrders] = useState([])
    const [data_products, setDataProducts] = useState([])


    useEffect(() => {
        fetchList()
        fetchProducts()
    }, []);


    const fetchList = async () => {
        let response = await fetch('https://pbetonapi.herokuapp.com/api/v1/gravel/list_services');
        let list = await response.json()
        setListOrders(list)
    }
    const fetchProducts = async () => {
        let response = await fetch('https://pbetonapi.herokuapp.com/api/v1/gravel/products');
        let list = await response.json()
        setDataProducts(list)
    }


    const handleRegister = () => {

        let arr = [dat, central, order, gravel, product, ton, enterprise, user, truck]
        let arrData = []
        arr.forEach((arr, index) => {
            if (arr === '' || arr === 0)
                arrData.push(index + 1)
        });
        if (arrData != '') {
            alert(`Remplir les champs ${arrData}`)
        } else {

            fetch(`https://pbetonapi.herokuapp.com/api/v1/gravel/order_create`, {
                method: 'POST',
                body: JSON.stringify({
                    date: dat,
                    order_number: order,
                    product_id: product,
                    weight: ton,
                    gravel_id: gravel,
                    central_id: central,
                    truck_id: truck,
                    driver_id: user,
                    enterprise_id: enterprise
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => fetchList())
                .then((json) => console.log('ok'));
        }
    }

    const handleDelete = (id) => {

        fetch(`https://pbetonapi.herokuapp.com/api/v1/gravel/delete_service/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.text()) // or res.json()
            .then(res => fetchList())
    }

    const handleEdit = () => {
        console.log('ok')
    }


    if (props.sect == 'orders') {
        return (
            <>
                <h3>BULLETINS</h3>
                <br></br>
                Nouveau bulletin<br></br><br></br>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead >
                            <TableRow>
                                <TableCell align="center">(1) Date</TableCell>
                                <TableCell align="center">(2) Centrale</TableCell>
                                <TableCell align="center">(3) Bulletin</TableCell>
                                <TableCell align="center">(4) Gravier</TableCell>
                                <TableCell align="center">(5) Produit</TableCell>
                                <TableCell align="center">(6) Poids</TableCell>
                                <TableCell align="center">(7) Enterprise</TableCell>
                                <TableCell align="center">(8) Chauffeur</TableCell>
                                <TableCell align="center">(9) Camion</TableCell>
                                <TableCell align="center">Enregistrer</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            <TableRow>
                                <TableCell align="center">
                                    <Input type="date" size="sm"
                                        onChange={(e) => setDat(e.target.value)}
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
                                        <Select
                                            labelId="select-gravel-label"
                                            id="select-central-new"
                                            value={central}
                                            label=""
                                            autoWidth
                                            onChange={(e) => setCentral(e.target.value)}>
                                            {data_centrals.data.map((data_centrals) => (
                                                <MenuItem key={data_centrals[0]} value={data_centrals[0]}>{data_centrals[1]}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell align="center">
                                    <Input type="number" size="sm"
                                        onChange={(e) => setOrder(e.target.value)} />
                                </TableCell>
                                <TableCell align="center">
                                    <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
                                        <Select
                                            labelId="select-gravel-label"
                                            id="select-gravel-new"
                                            value={gravel}
                                            label=""
                                            autoWidth
                                            onChange={(e) => setGravel(e.target.value)}>
                                            {data_gravels.data.map((data_gravels) => (
                                                <MenuItem key={data_gravels[0]} value={data_gravels[0]}>{data_gravels[1]}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell align="center">
                                    <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
                                        <Select
                                            labelId="select-product-label"
                                            id="select-product"
                                            value={product}
                                            label=""
                                            autoWidth
                                            onChange={(e) => setProduct(e.target.value)}>
                                            {data_products.filter(data_products => gravel == data_products[2]).map((data_products) => (
                                                <MenuItem key={data_products[0]} value={data_products[0]}>{data_products[1]}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell align="center">
                                    <Input
                                        placeholder='00.00'
                                        type='number'
                                        slotProps={{
                                            input: {
                                                min: 1,
                                                max: 30,
                                                step: 0.01,
                                            },
                                        }}
                                        defaultValue={ton}
                                        size="sm"
                                        onChange={(e) => setTon(e.target.value)}
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
                                        <Select
                                            labelId="select-central-label"
                                            id="select-product"
                                            value={enterprise}
                                            label=""
                                            autoWidth
                                            onChange={(e) => setEnterprise(e.target.value)}>
                                            {data_enterprises.data.map((data_enterprises) => (
                                                <MenuItem key={data_enterprises[0]} value={data_enterprises[0]}>{data_enterprises[1]}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell align="center">
                                    <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
                                        <Select
                                            labelId="select-user-label"
                                            id="select-user"
                                            value={user}
                                            label=""
                                            autoWidth
                                            onChange={(e) => setUser(e.target.value)}>
                                            {data_users.data.filter(data_users => enterprise == data_users[4]).map((data_users) => (
                                                <MenuItem key={data_users[0]} value={data_users[0]}>{data_users[3]}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell align="center">
                                    <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
                                        <Select
                                            labelId="select-truck-label"
                                            id="select-truck"
                                            value={truck}
                                            label=""
                                            autoWidth
                                            onChange={(e) => setTruck(e.target.value)}>
                                            {data_trucks.data.filter(data_trucks => enterprise == data_trucks[3]).map((data_trucks) => (
                                                <MenuItem key={data_trucks[0]} value={data_trucks[0]}>{data_trucks[4]}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell align="center">
                                    <Fab variant="extended">
                                        <FaSave color="green" onClick={() => handleRegister()} />
                                    </Fab>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <br></br>
                Liste de bulletins
                <br></br><br></br>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead >
                            <TableRow>
                                <TableCell align="center">Date</TableCell>
                                <TableCell align="center">Centrale</TableCell>
                                <TableCell align="center">Bulletin</TableCell>
                                <TableCell align="center">Gravier</TableCell>
                                <TableCell align="center">Produit</TableCell>
                                <TableCell align="center">Poids</TableCell>
                                <TableCell align="center">Enterprise</TableCell>
                                <TableCell align="center">Chauffeur</TableCell>
                                <TableCell align="center">Camion</TableCell>
                                <TableCell align="center">Effacer</TableCell>
                                <TableCell align="center">Modifier</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {listOrders.map((service) => (
                                <TableRow key={service[0]}>
                                    <TableCell align="center">{service[1]}</TableCell>
                                    <TableCell align="center">{service[2]}</TableCell>
                                    <TableCell align="center">{service[3]}</TableCell>
                                    <TableCell align="center">{service[4]}</TableCell>
                                    <TableCell align="center">{service[5]}</TableCell>
                                    <TableCell align="center">{service[6]}</TableCell>
                                    <TableCell align="center">{service[7]}</TableCell>
                                    <TableCell align="center"> {service[8]}</TableCell>
                                    <TableCell align="center"> {service[9]}</TableCell>
                                    <TableCell align="center">
                                        <Fab variant="extended" onClick={() => handleDelete(service[0])}>
                                            <FaTrashAlt color="red" />
                                        </Fab>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Fab variant="extended" onClick={() => handleEdit()}>
                                            <FaEdit color="blue" />
                                        </Fab>
                                    </TableCell>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                </TableContainer>
            </>

        )
    }
}
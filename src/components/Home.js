import React, { Fragment } from "react";
import { Button, Table } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import Employees from "./Employees";
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {

    let history = useNavigate()

    const handleDelete = (Id) => {
        let index = Employees.map((e) =>{
            return e.Id
        }).indexOf(Id)

        Employees.splice(index, 1)

        history('/')
    }

    return(
        <div>
            <Fragment>
                <div style={{margin: "10rem"}}>
                    <Table striped bordered hover size='sm'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Employees && Employees.length > 0 ? 
                                Employees.map((item) => {
                                    return(
                                        <tr>
                                            <td>{item.Name}</td>
                                            <td>{item.Age}</td>
                                            <td>
                                                <Button onClick={() => alert(item.Id)}>Edit</Button>
                                                &nbsp;
                                                <Button onClick={() => handleDelete(item.Id)}>Delete</Button>
                                            </td>
                                        </tr>
                                    )
                                }) : "No data found"
                            }
                        </tbody>
                    </Table>
                </div>
            </Fragment>
        </div>
    )
}

export default Home

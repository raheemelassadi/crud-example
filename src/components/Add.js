import { React, useState } from "react"
import { Button, Form } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Employees from "./Employees"
import { v4 as uuid } from "uuid"
import { useNavigate } from "react-router-dom"

const Add = () => {

    const [name, setName] = useState('')
    const [age, ssetAge] = useState('')

    let history = useNavigate()

    return(
        <div>
            <Form className="d-grid gap-2" style={{margin: "15rem"}}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)}>

                    </Form.Control>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Add



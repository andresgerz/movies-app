import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'


export default class Find extends Component {

    render() {
        
        return(
            <div className="wrapper-find">
            
                <Form>
                    <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter movie" />
                    </Form.Group>
                
                    <Button variant="primary" type="submit">
                    Find
                    </Button>
                </Form>

                <style jsx>{`
                
                .wrapper-find {
                    margin: 100px;
                }
                
                `}
                
                </style>

            </div>

    )
}
}
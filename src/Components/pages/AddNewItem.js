import "./styles/Contact.css"
import React, { useContext }from 'react'
import {Context} from '../pages/hoc/Store'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useFormik } from 'formik';

const AddNewItem = () => {

const [ state, dispatch ] = useContext(Context);

const formik = useFormik({
    initialValues: {
    itemName: 'Enter Item Name',
    itemDescription: 'Enter Item Description',
    price: 'Enter Item Price',
    imageUrl: 'Enter Item ImageUrl',
    },
    onSubmit: values => {
        console.log(values);
        dispatch({
            type: 'ADD_NEW_ITEM',
            payload: {
            title : values.itemName, 
            description: values.itemDescription,
            price:values.price,
            imageUrl: values.imageUrl,
            key: "values.title",
            id: values.title
            }
        });
    },
  });

return (
<Container className = "AddNewItemBox">
    <Form onSubmit={formik.handleSubmit}>
                <Form.Group as={Col} md="5" controlId="validationFormik01">
                <Form.Label>Item Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="itemName"
                        value={formik.values.itemName}
                        onChange={formik.handleChange}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="5" controlId="validationFormik02">
                <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        name="itemDescription"
                        value={formik.values.itemDescription}
                        onChange={formik.handleChange}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="5" controlId="validationFormik03">
                <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="text"
                        name="price"
                        value={formik.values.price}
                        onChange={formik.handleChange}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="5" controlId="validationFormik04">
                <Form.Label>Image Url</Form.Label>
                    <Form.Control
                        type="text"
                        name="imageUrl"
                        value={formik.values.imageUrl}
                        onChange={formik.handleChange}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Button className = "modalButton" type="submit">Submit New Item</Button>
            </Form>
</Container>
)
}
export default AddNewItem
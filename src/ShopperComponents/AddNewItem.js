import "./styles/AddNewItem.css";
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ShopperJumbo from '../Components/ShopperJumbo';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Thumb from '../Components/Thumb';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert'

const AddNewItem = () => {

    const user = useParams().user;
    const formData =  new FormData();
    const [image, setImage] = useState()
    const [show, setShow] = useState(false);
    const { register, handleSubmit, errors } = useForm()
    const [ isSubmitting , updateIsSubmitting ] = useState(false)

    const onSubmit = async userData => {
        updateIsSubmitting(true)
        formData.set('title', userData.itemname);
        formData.set('description', userData.description);
        formData.set('price', parseFloat(userData.price).toFixed(2));
        formData.append('image', image)
        
        try{
            axios({
                method: 'post',
                url: `/api/products/${user}`,
                data: formData,
              })
            .then( response => {    
                updateIsSubmitting(false)
                setShow(true)
                 });
        } catch (err) {
            alert(err.message)
            updateIsSubmitting(false)
                    }
    } 

    const handleChange = (e) => {
        setImage(e.target.files[0])
      }

    return (
        <Container className = "add-new-item-container">
            <ShopperJumbo />
            <Card className='add-new-item-box'>
                <Card.Title>Add New Item</Card.Title>
                    <Form onSubmit={handleSubmit(onSubmit)}>

                <Form.Group controlId="formItemName">    
                    <Form.Label> Item Name </Form.Label>
                    <Form.Control type="text" placeholder="Enter Item Name" name="itemname" ref={register({ required: true, maxLength: 20 })} />
                    {errors.itemname &&
                    errors.itemname.type === "required" &&
                    <p className="error-text">This field is required</p>}
                    {errors.itemname &&
                    errors.itemname.type === "maxLength" &&
                    <p className="error-text">Item name cannot be more than 20 characters</p>}
                    <Form.Text className="text-muted">
                    Field is required and cannot be more than 20 characters
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formItemDescription">
                    <Form.Label> Description </Form.Label>
                    <Form.Control type="text" as="textarea" rows="4" placeholder="Enter Description" name="description" ref={register({ required: true, minLength : 100 })} />
                    {errors.description &&
                    errors.description.type === "required" &&
                    <p className="error-text">This field is required</p>}
                    {errors.description &&
                    errors.description.type === "minLength" &&
                    <p className="error-text">You need to put atleast 100 characters in the description</p>}
                    <Form.Text className="text-muted">
                    Field is required and must be more than 100 characters
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formItemPrice">
                    <Form.Label> Price </Form.Label>
                    <Form.Control type="text" name="price" placeholder="00.00"ref={register({ required: true, pattern: /^[0-9]+([\,|\.]{0,1}[0-9]{2}){0,1}$/})} />
                    {errors.price &&
                    errors.price.type === "required" &&
                    <p className="error-text">This field is required</p>}
                    {errors.price &&
                    errors.price.type === "pattern" &&
                    <p className="error-text">Please input valid price</p>}
                    <Form.Text className="text-muted">
                    Only valid prices can be used
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formItemImage">
                    <Form.Label> Image </Form.Label>
                    <Form.Control type ="file" name="file" ref={register({ required: true})} onChange={handleChange}/>
                    {errors.file &&
                    errors.file.type === "required" &&
                    <p className="error-text">This field is required</p>}
                    <Form.Text className="text-muted">
                    Only jpeg, jpg and png will upload, any others will throw errors
                    </Form.Text>
                </Form.Group>

                <Thumb file={image}/>
                <Row>
                {isSubmitting? <Button variant="primary" disabled>
                        <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                            /> </Button> : 
                <Button type="submit"> SUBMIT ITEM </Button>}
                </Row>
                </Form>
            </Card>
            <Alert className = "added-to-cart-alert" variant="info" show={show} onClose={() => setShow(false)} dismissible>
            <Alert.Heading>New Item Added</Alert.Heading>
            </Alert>
</Container>
        )
}

export default AddNewItem
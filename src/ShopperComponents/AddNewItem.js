import "./styles/AddNewItem.css"
import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import ShopperJumbo from '../Components/ShopperJumbo'
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import Thumb from '../Components/Thumb'

const AddNewItem = () => {

    const user = useParams().user;
    const formData =  new FormData();
    const [image, setImage] = useState()
    const { register, handleSubmit, errors } = useForm()
    const [ isSubmitting , updateIsSubmitting ] = useState(false)

    const onSubmit = async userData => {
        formData.set('title', userData.itemname);
        formData.set('description', userData.description);
        formData.set('price', userData.price);
        formData.append('image', image)
        
        try{
            axios({
                method: 'post',
                url: `/api/products/${user}`,
                data: formData,
              })
            .then( response => {    
                console.log(response.status)
                 });
        } catch (err) {
            alert(err.message)
                    }
    } 

    const handleChange = (e) => {
        setImage(e.target.files[0])
      }

    return (
        <Container className = "AddNewItemBox">
            <ShopperJumbo />
            <Card className='AuthenticationPageBox'>
                <Card.Title>Sign up</Card.Title>
                    <form onSubmit={handleSubmit(onSubmit)}>
                <Card.Text>
                    <label> Item Name </label>
                    <input name="itemname" ref={register({ required: true, maxLength: 20 })} />
                    {errors.itemname &&
                    errors.itemname.type === "required" &&
                    "This field is required"}
                    {errors.itemname &&
                    errors.itemname.type === "maxLength" &&
                    "Item name cannot be more than 20 characters"}
                </Card.Text>
                <Card.Text>
                    <label> Description </label>
                    <input name="description" ref={register({ required: true, minLength : 100 })} />
                    {errors.description &&
                    errors.description.type === "required" &&
                    "This field is required"}
                    {errors.description &&
                    errors.description.type === "minLength" &&
                    "You need to put atleast 100 characters in the description"}
                </Card.Text>
                <Card.Text>
                    <label> Price </label>
                    <input type="text" name="price" ref={register({ required: true, pattern: /^[0-9]+([\,|\.]{0,1}[0-9]{2}){0,1}$/})} />
                    {errors.price &&
                    errors.price.type === "required" &&
                    "This field is required"}
                    {errors.price &&
                    errors.price.type === "pattern" &&
                    "Please input valid price"}
                </Card.Text>
                <Card.Text>
                    <label> Image </label>
                    <input type ="file" name="file" ref={register({ required: true})} onChange={handleChange}/>
                    {errors.file &&
                    errors.file.type === "required" &&
                    "This field is required"}
                </Card.Text>
                <Thumb file={image}/>
                <Button type="submit" onClick={() => {}}> SUBMIT ITEM </Button>
                </form>
            </Card>
</Container>
        )
}

export default AddNewItem
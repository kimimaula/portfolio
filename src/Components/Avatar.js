import './styles/Avatar.css'
import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container'

const Avatar = (props) => {

    const [image, setImage] = useState()

    useEffect(()=>{
        setImage(props.image)
    },[props.image])

    return(
        <Container className="avatar-container">
        <Image className="avatar-img" src={`http://localhost:5000/${image}`} roundedCircle/>
        </Container>
    )
}

export default Avatar;
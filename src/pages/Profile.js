import './styles/Profile.css'
import React from 'react'
import Container from 'react-bootstrap/Container'
import useCurrentUser from '../hooks/useCurrentUser'
import { useParams } from 'react-router-dom';
import Axios from 'axios';

const Profile = () => {

const user = useParams().user;

 const [data, loading] = useCurrentUser(
     `http://localhost:5000/api/user/${user}`
   );

async function test() {
    console.log(data.image)
}

return (
    <Container className ="profile-box">
    <div>
        <p>{data.username}</p>
        <img src = {`http://localhost:5000/${data.image}`} alt= {data.username} />
        <p></p>
        <button onClick = {() => test()} >test</button>
    </div>
    </Container>
    )
}
export default Profile;
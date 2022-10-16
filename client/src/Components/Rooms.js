import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Rooms() {
    const{house_id}=useParams()
//     const[houseName,setHouseName]=useState([])
// const[location,setLocation]=useState([])
const[rooms,setRooms]=useState([])
const [roomNumber,setRoomNumber]=useState([])
const[price,setPrice]=useState([])
const[tenantNames,setTenantNames]=useState([])
const [errors,setErrors]=useState([])
const [house,setHouse]=useState([])


    useEffect(() => {
        fetch(`/houses/${house_id}`)
          .then((r) => r.json())
          .then((r)=>setHouse(r));
      }, []);  
      useEffect(() => {
        fetch(`/rooms`)
          .then((r) => r.json())
          .then((r)=>setRooms(r));
      }, []);  


      function handleSubmit(e) {
        e.preventDefault();
        // setIsLoading(true);
        fetch("/rooms", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
room_number : roomNumber,
price,
tenant_names: tenantNames,
house_id : house_id

           
        
        }),
        }).then((r) => {
        //   setIsLoading(false);
          if (r.ok) {
            r.json().then((room) => setRooms([...rooms,room]))
          
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
      }


  
  return (
    <>
       <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicRoomNumber">
        <Form.Label>RoomNumber address</Form.Label>
        <Form.Control type="string" placeholder="Enter RoomNumber" value={roomNumber}  onChange={(e) => setRoomNumber(e.target.value)}/>
 
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasictenantNames" >
        <Form.Label>tenantNames</Form.Label>
        <Form.Control type="string" placeholder="tenantNames" value={tenantNames}  onChange={(e) => setTenantNames(e.target.value)}/>
      </Form.Group>
     

      <Form.Group className="mb-3" controlId="formBasicteprice">
        <Form.Label>price</Form.Label>
        <Form.Control type="number" placeholder="room price" value={price}   onChange={(e) => setPrice(e.target.value)}/>
   </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <br></br>
   
{rooms.length > 0 ?
rooms.map((room)=>(
    <Grid item xs={3} key={room.id}>
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       <AccountCircleIcon/>
        </Typography>
        Room Number
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           {room.room_number}
          </Typography>
       
        Tenant names
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           {room.tenant_names}
          </Typography>
      Date taken
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {room.created_at}
        </Typography>
        price
        <Typography variant="body2">
          {room.price}
          <br />
      
        </Typography>
      </CardContent>
      <CardActions>
     
      </CardActions>
 
    </Card>

  </Grid>


))




:
<h2>no rooms available</h2>


}
    
</Grid>
    </Box>



 
        
 
    
    </>
    
  )
}

export default Rooms
import React, { useEffect, useState } from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
function Dashboard() {
const[houseName,setHouseName]=useState([])
const[location,setLocation]=useState([])
const[houses,setHouses]=useState([])
const[error,setErrors]=useState([])

useEffect(() => {
    fetch("/houses")
      .then((r) => r.json())
      .then((r)=>setHouses(r));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    // setIsLoading(true);
    fetch("/houses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        house_name : houseName
        , location }),
    }).then((r) => {
    //   setIsLoading(false);
      if (r.ok) {
        r.json().then((house) => setHouses([...houses,house]))
        setHouseName([])
        setLocation([])
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }



 

  


  return (
    <>
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email house name</Form.Label>
        <Form.Control type="text" placeholder="Enter house name" value={houseName}   onChange={(e) => setHouseName(e.target.value)}/>
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasiclocation">
        <Form.Label>location</Form.Label>
        <Form.Control type="text" placeholder="location" value={location}   onChange={(e) => setLocation(e.target.value)}/>
      </Form.Group>
   
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <br></br>

    <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={2}>

{houses.length > 0 ?

houses.map((house)=>(
    <Grid item xs={3} key={houses.id}>
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z"/></g></svg>
        </Typography>
        houseName
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           {house.house_name}
          </Typography>
      Date added
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {house.created_at}
        </Typography>
        location
        <Typography variant="body2">
          {house.location}
          <br />
      
        </Typography>
      </CardContent>
      <CardActions>
        <NavLink to={`/${house.id}`}>
        <Button size="small">view Rooms taken</Button>
        </NavLink>
      </CardActions>
 
    </Card>

  </Grid>

))
    

        :

        <h2>no houses</h2>
}
     
       
     
      </Grid>
    </Box>





    </>
  )
}

export default Dashboard
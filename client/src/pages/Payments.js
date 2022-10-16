
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function Payments({user}) {
    const[rooms,setRooms]=useState([])
const [payments,setPayments]=useState([])
const[message,setMessage]=useState([])
const [roomId,setRoomId]=useState([])
const [erros,setErrors]=useState([])
    useEffect(() => {
        fetch(`/rooms`)
          .then((r) => r.json())
          .then((r)=>setRooms(r));
      }, []);  

      useEffect(() => {
        fetch(`/payments`)
          .then((r) => r.json())
          .then((r)=>setPayments(r));
      }, []);  

      function handleSubmit(e) {
        e.preventDefault();
        // setIsLoading(true);
        setMessage([])
        setRoomId([])
        fetch("/payments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            message,
            room_id : roomId }),
        }).then((r) => {
        //   setIsLoading(false);
          if (r.ok) {
            
            r.json().then((payment) => setPayments([...payments,payment]))
          
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
      }


function handleDelete (key){
    fetch(`https://localhost:3000/payments/${key}`,
     { method: 'DELETE' })
    onItemDelete(key)
}

function onItemDelete (key){
    const updatedItems = payments.filter((item)=> item.id !== key)
    setPayments(updatedItems)
  }  




  return (
   <>
   
   <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>message</Form.Label>
        <Form.Control type="text" placeholder="Enter message" value={message}   onChange={(e) => setMessage(e.target.value)}/>
      
      </Form.Group>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small" >
      <InputLabel id="demo-select-small">tenant</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={roomId}
        label="room"
        onChange={(e) => setRoomId(e.target.value)}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        { rooms.length > 0 ?
        rooms.map((room)=>(
            <MenuItem value={room.id}  key={room.id}>{room.tenant_names}</MenuItem>
        ))

      

        :
        <MenuItem >no room</MenuItem>

}

      </Select>
    </FormControl>

    
   
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>room id</TableCell>
            <TableCell align="right">paydate</TableCell>
            <TableCell align="right">message</TableCell>
            {/* <TableCell align="right">cut</TableCell> */}
         
          </TableRow>
        </TableHead>
        <TableBody>
          {payments.length > 0 ?
          payments.map((payment) => (
         
            <TableRow
              key={payment.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {payment.room_id}
              </TableCell>
              <TableCell align="right">{payment.created_at}</TableCell>
              <TableCell align="right">{payment.message}</TableCell>
              {/* <TableCell align="right"><Button onClick={(key)=>handleDelete(key)}>delete</Button></TableCell> */}
            </TableRow>
          ))
          : <h2>no payments</h2>
    
    
    
        }
        </TableBody>
     

      </Table>
    </TableContainer>
 





   
   
   
   </>
  )
}

export default Payments
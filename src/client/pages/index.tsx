import React, { useEffect } from 'react';
import { NextPage } from 'next';
import socket from 'socket.io-client'
import axios from 'axios';

const Index: NextPage = () => {
  useEffect(() => {
    const io = socket('http://localhost:3000')
    io.on('init' , (e) => {
      console.log('init event received')
      console.log(e)
    })
    io.on('retry' , (e) => {
      console.log('retry event received')
      console.log(e)
    })
  }, [])
  return <>
    <h1>Cita Previa</h1>
    <button onClick={() => {
      console.log('hitting /api')
      axios
        .get('http://localhost:3000/api')
        .then(({data}) => {
          console.log('response from /api', data)
        })
    }}>Hit /api</button>
  </>;
};

export default Index;
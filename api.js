const express = require('express')

const app=express()

app.listen(3000,()=>{
    console.log('servidor OK en puerto 5000');
})

app.get('/',(req,res)=>{
        res.status(200).send('SERVIDOR DE NODE CON EXPRESS TRABAJANDO')
})




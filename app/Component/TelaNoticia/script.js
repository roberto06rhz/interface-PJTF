const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors)


app.get('/', function(request, response){
     response.json({
        message: 'fala, meu nobre!'
     })
})
app.get('/deputado', function(request, response){
   response.send('hello')
})

app.listen(3002, ()=>{
    console.log('Servidor iniciado! :D')
})

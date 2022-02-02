const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

//connection to monogdb connection
mongoose.connect("mongodb+srv://rohit:iAC6i2zRiT3cFe9@cluster0.x1khx.mongodb.net/mongodb?retryWrites=true&w=majority")
mongoose.connection.once('open', ()=>{
  console.log('connected to databse');
})


app.use('/graphql',graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(4000, ()=> {
  console.log('now listening request on port 4000')
});
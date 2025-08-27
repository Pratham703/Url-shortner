const express = require('express');
const app = express();
const connect = require('./connect');
connect();
const cors = require('cors');
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const urlRoute = require('./routes/url');
app.use('/url', urlRoute);
app.use('/api', urlRoute);
app.get('/api',urlRoute)
// app.get('/test',(req,res)=>{
//     res.status(200).json({message: "Server Initiated"});
// })

app.get('/',(req,res)=>{
    console.log('All Good');

})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
const mongoose= require('mongoose');

const mongoURI= "mongodb+srv://patel:EBZXUWjnk7vRhE2G@cluster0.6ujfo.mongodb.net/Adarsh?retryWrites=true&w=majority"
const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log('Connected to Mongo successfully')
    })
}
module.exports= connectToMongo;
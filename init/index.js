const mongoose=require("mongoose");
const initData=require("./data");
const Listing = require("../models/listing.js");

main().then(()=>{
    console.log("Connected to db");
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/WanderLust");
}

const initDB = async()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({
        ...obj,owner : "6ad6483d238b5891025eb1fa",
    }))
    await Listing.insertMany(initData.data);
    console.log("Data was initialized")
}

initDB();
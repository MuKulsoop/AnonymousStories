import mongoose from "mongoose"

const Connection = async (username , password) => {
    const DB_URL = `mongodb://${username}:${password}@ac-h2agvux-shard-00-00.wwjvuel.mongodb.net:27017,ac-h2agvux-shard-00-01.wwjvuel.mongodb.net:27017,ac-h2agvux-shard-00-02.wwjvuel.mongodb.net:27017/?ssl=true&replicaSet=atlas-wb8qm8-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`
    try{
        await mongoose.connect( DB_URL )
        console.log("The database is successfully connected.")
    } catch ( error ){
        console.log("Error while connecting the database", error)
    }
}

export default Connection;
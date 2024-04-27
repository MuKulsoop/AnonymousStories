import express from "express";
import dotenv from "dotenv"
import Connection from "./db/db.js";
import router from "./routes/routes.js";
import cors from "cors"
import bodyParser from "body-parser"
const app = express();

dotenv.config();

const PORT = 8000;

app.listen(PORT, () => console.log(`Server is running at PORT ${PORT}`));
app.use(cors());
app.use(bodyParser.json({extended : true}))
app.use('/', router)

const User = process.env.DB_USERNAME
const pass = process.env.DB_PASSWORD

Connection( User , pass);
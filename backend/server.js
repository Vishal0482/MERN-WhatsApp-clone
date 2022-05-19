import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Message from "./schema/dbMessage.js";


const app = express();
const port = process.env.PORT || 9000;
app.use(cors());
app.use(express.json());

const connection_url = "mongodb://localhost:27017/whatsappdb";

mongoose.connect(connection_url);

// const db = mongoose.connection;

// db.once("open", () => {
//     console.log("DB connected");

//     const msgCollection = db.collection('messagecontents');
//     const changeStream = msgCollection.watch();
//     console.log(changeStream);

//     // changeStream.on('change', change => {
//     //     console.log(change);
//     // });
// });

app.get('/', (req, res) => {
    res.status(200).send('hello world');
});

app.get('/messages/sync', (req, res) => {

    Message.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).send(data);
        }
    })
})

app.post('/messages/new', (req, res) => {
    const dbMessage = req.body;

    Message.create(dbMessage, (err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(201).send(data);
        }
    })
})

app.listen(port, () => {
    console.log("Listing on localhost: ", port);
})
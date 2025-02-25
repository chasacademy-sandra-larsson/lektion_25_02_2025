//const express = require("express") // common js
import express from "express";
import cors from "cors"
//import bodyParser from "body-parser" // Gamla sättet

const app = express()
const PORT = 3000;

// Middleware
app.use(cors()); // Denna gör att andra kan göra requests till din backend

app.use(express.json()); // Den hör gör så att man kan hantera inkommande JSON-data
//app.use(bodyParser())// Gamla sättet 

// Routes - endpoint - behöver URL och HTTP-metod för att triggas
app.get("/whatever", (request, response) => {
    response.send("Hej från rutt / med metod GET")
});


// Som att skicka data med ett formulär!
app.post("/whatever", (req, res) => {
    const {firstname, lastname} = req.body;
    res.json({ message: `Hello from /whatever with a POST-request and ${firstname} ${lastname}`})
});


// Att uppdatera en record 
app.put("/whatever", (req, res) => {
    const { lastname } = req.body
    res.json({ message: `Hello from /whatever with a PUT-request and updated ${lastname}`})
})

app.delete("/whatever", (req, res) => {
    res.json({message: "A delete request was made to this server"})
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
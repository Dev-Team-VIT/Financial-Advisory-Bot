import express from "express"
import { validate } from "./middleware"
import { router } from "./routes";

const app = express()

app.use(express.json());

// app.use(cors({

// }))

app.use("/api/v1", router)

export const validateCustomerIds = ["alpha123", "kwjd07", "hack1899"]

app.get("/", (req, res)=> {
    res.send("Hello")
})

app.post("/dashboard", validate, (req, res) => {
    const {customerId} = req.body

    const newUser = customerId
    
    res.status(200).json({
        message: "CustomerId received",
        newUser: newUser
    });
})

app.listen(3000, ()=> {
    console.log("Server started");
    
})
import express from "express"
import router from "./app/routes"

const app = express()

// Middlewares
app.use(express.json())
app.use("/api", router)


app.get("/", (_req, res) => {
    res.send("GenAI Study Buddy server is running!")
})

export default app;
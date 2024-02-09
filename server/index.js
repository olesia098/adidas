import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import usersRouters from "./routes/users.js";

const app = express();
const PORT = 5001;

app.use(bodyParser.json());
app.use(cors({
  origin: "http://localhost:3000",  // Указываем, что разрешены запросы с этого источника
}));

app.use('/users', usersRouters);

app.get("/", (req, res) => {
    console.log('[TEST]!');
    res.send('Hello from Homepage.');
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost${PORT}`));


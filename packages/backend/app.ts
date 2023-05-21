import express from "express";
const app: express.Application = express();

const port = 8080;

// middleware
app.use(express.json());

app.listen(port, () => {
  console.log(`Server listening on port ${port}....`);
});

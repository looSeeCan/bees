import express from "express";
import path from "node:path";

const app = express();

app.use(express.static(path.join(process.cwd(), "public")));

app.get("/", (req, res) => {
  res.sendFile(`${process.cwd()}/public/index.html`);
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

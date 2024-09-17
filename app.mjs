import express from "express";
import path from "node:path";

const app = express();

app.use(express.static(path.join(process.cwd(), "dist")));

app.get("*", (req, res) => {
  res.sendFile(`${process.cwd()}, "dist", "index.html"`);
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

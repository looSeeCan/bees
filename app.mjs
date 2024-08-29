import express from "express";
import path from "node:path";

const app = express();

app.use(express.static(path.join(process.cwd(), "src", "public")));

app.get("/", (req, res) => {
  // res.sendFile("index.html");
  // res.sendfile(path.join(__dirname, "index.html"));
  res.sendFile(`${process.cwd()}/src/public/index.html`);
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Listening on port${PORT}`);
});

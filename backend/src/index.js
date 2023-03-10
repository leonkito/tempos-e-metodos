const express = require("express");
const bodyParser = require("body-parser");
const v1TakeRouter = require("./v1/routes/TakeRoutes");
// const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(bodyParser.json());
app.use("/v1/takes", v1TakeRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
  // V1SwaggerDocs(app, PORT);
});
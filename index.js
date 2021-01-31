const app = require('express')()
const server = require('http').createServer(app);
const bodyParser = require('body-parser')
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggeroptions = require('./Libs/swaggeroptions')
const swaggerDocs = swaggerJsDoc(swaggeroptions);
const urlRoute = require("./Routers/urlrouter");
var cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use("/", urlRoute);
app.use( "/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
});

module.exports.app = app
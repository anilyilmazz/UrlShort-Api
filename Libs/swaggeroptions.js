const swaggerOptions = {
    swaggerDefinition: {
      info: {
        version: "1.0.0",
        title: "Url Shortener API",
        description: "Url Shortener API Information",
        contact: {
          name: "Url Shortener Developer"
        },
        servers: ["http://localhost:3000"]
      }
    },
    apis: ["Routers/urlrouter.js"]
};
module.exports = swaggerOptions;
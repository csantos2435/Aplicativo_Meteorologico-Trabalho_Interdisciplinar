const controller = require('../controllers/weather-controller');
const schema = require('../schema/weather-schema');
const routes = [
    {
        method: "GET",
        path: "/weathers",
        handler: controller.getFoods
    },
    {
        method: "POST",
        path: "/weathers",
        options: {
            handler: controller.create,
            validate: schema.postFood
        }
    }
];

module.exports = routes;
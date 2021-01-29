const UrlController = require("../Controllers/urlcontroller");
const express = require("express");
const router = express.Router();
/**
 * @swagger
 * /:
 *  get:
 *    tags:
 *       - Url
 *    parameters:
 *       - in : query
 *         name : url
 *         description: Shorturl
 *         example: 9218a
 *    description: get long url
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/',UrlController.geturl);


/**
 * @swagger
 * /:
 *  post:   
 *    description: create short url
 *    tags:
 *       - Url
 *    parameters:
 *      - in: body
 *        name: url
 *        description: Long url
 *        schema:
 *          type: object
 *          required:
 *            - url
 *          properties:
 *            url:
 *              type: string
 *              example : google.com
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post("/", UrlController.create);


module.exports = router; 
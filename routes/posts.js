const express = require('express');
const router = express.Router();

let posts = [];


/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       required:
 *         - title
 *         - content
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the post
 *         title:
 *           type: string
 *           description: The title of the Post
 *         content:
 *           type: string
 *           description: The content of the Post
 *       example:
 *         id: 1
 *         title: John Doe
 *         content: content abc
 */


/**
 * @swagger
 * /posts:
 *   get:
 *     tags:
 *       - posts
 *     summary: Retrieves a list of posts
 *     responses:
 *       200:
 *         description: A list of posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Post'
 */
router.get('/posts', (req, res) => {
    res.json(posts);
})


/**
 * @swagger
 * /posts:
 *   post:
 *     tags:
 *       - posts
 *     summary: Creates a new posts
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       201:
 *         description: The posts was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 */
router.post('/posts', (req, res) => {
    const post = { id: posts.length + 1, ...req.body };
    posts.push(post);
    res.status(201).json(post);
});


module.exports = router;
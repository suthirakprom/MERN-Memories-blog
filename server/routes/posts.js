import express from 'express';

// import from the controller folder to get all the logic
import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts)
router.post('/', createPost)

export default router;
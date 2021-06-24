import express from "express";

import { getPosts, createPost , updatePost , deletePost , likePost} from "../controllers/posts.js";
import { createPostValidation } from "../middleware/validationMiddleware.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPostValidation , createPost);
router.patch("/:id" , updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/likePost" , likePost)

export default router;

import express from "express"
import { signUpUser, loginUser } from "../controller/user.controller.js"
import { uploadImage, getimage } from "../controller/image.controller.js"
import { createPost, getAllPosts, getPost } from "../controller/post.controller.js"
import { authenticateToken } from "../controller/jwt.controller.js"
import upload from "../utils/upload.js"
const router = express.Router()


router.post("/signUp", signUpUser)
router.post("/login", loginUser)
router.post("/file/upload" , upload.single('file') ,uploadImage)
router.post("/create" , authenticateToken ,createPost)
router.get("/file/:filename", getimage )
router.get("/posts" , authenticateToken ,getAllPosts)
router.get('/post/:id', authenticateToken, getPost)


export default router;
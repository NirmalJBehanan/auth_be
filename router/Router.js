import express from "express"
import { forgetpassword, login, register, resetpassword, verifyTokens } from "../controller/Controller.js";

const router = express.Router();
router.post("/register",register)
router.post("/login",login)
router.post("/forgetpassword",forgetpassword)
router.get("/verifytoken",verifyTokens)
router.put("/resetpassword",resetpassword)

export default router;
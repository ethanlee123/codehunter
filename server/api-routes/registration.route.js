import express from "express";
import { addUser } from "../models/users.js";

const router = express.Router();

router.post("/", async (req, res) => {
    var response = await addUser(req);
    response = JSON.stringify(response);
    res.send(response);
});

export default router;

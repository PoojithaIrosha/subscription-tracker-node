import {Router} from "express";

const authRouter = Router();

authRouter.post('/login', (req, res) => {
    res.send({ message: 'Logged in!' });
})

export default authRouter;
import express from 'express';
import {PORT} from './config/env.js';
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.router.js";

const app = express();

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);

app.get('/', (req, res) => {
    res.send("Subscription Tracker API");
});

app.listen(PORT, () => {
    console.log(`Subscription Server started on port ${PORT}`);
})
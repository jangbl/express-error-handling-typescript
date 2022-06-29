import { NextFunction, Request, Response, Router } from "express";
import { InsufficientFundsError } from "../errors/insufficient-funds-error";

const router = Router();
router.post("/withdraw", (req: Request, res: Response, next: NextFunction) => {
    throw new InsufficientFundsError(200, 100);
});


// if you want to throw an error within an async function
// you need to have the 'express-async-errors' package included
router.post("/withdraw-async", async (req: Request, res: Response, next: NextFunction) => {
    throw new InsufficientFundsError(500, 400);
})

export default router;
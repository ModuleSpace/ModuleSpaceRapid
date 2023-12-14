import { Request, Response } from "express";

export default function Main(req: Request, res: Response, next: () => void) {
    console.log(req.path);
    next();
}

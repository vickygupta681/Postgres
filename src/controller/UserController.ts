import { NextFunction, Request, Response } from "express"
import { User } from "../entity/User"

export class UserController {

    async create (req: Request, res: Response) {
        const user = User.create(req.body)
        (req.body)
    }

}
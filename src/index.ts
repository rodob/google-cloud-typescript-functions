import {Request, Response} from 'express'

exports.helloGET = ((req: Request, res: Response) => {
    console.log("Hello from Cloud Functions")
    res.send('Hello from Cloud Functions!')
})
import { Request, Response } from 'express'
import { Service } from './service'

export class Controller {
    constructor(private service: Service) {
    }

    // [done]
    getTodoList = async (req: Request, res: Response) => {
        try {
            const returnedTodoList = await this.service.readTodoList()
            res.status(200).json(returnedTodoList)
        } catch (e) {
            res.status(500).json({
                result: false,
                msg: e.toString()
            })
        }
    }

    // [done] Note: 1-id, 2-content, 3-dueDate 4-inputDate 5-picture
    postTodoList = async (req: Request, res: Response) => {
        try {
            if (!req.body.id) {
                res.status(401).json({
                    result: false,
                    msg: 'Missing Data',
                });
                return;
            }
            const {id, item, content, dueDate, startDate, startTime, endDate, endTime, category, assignedTo, status} = req.body;
            res.status(200).json(await this.service.addTodoList(id, item, content, dueDate, startDate, startTime, endDate, endTime, category, assignedTo, status))

        } catch (e) {
            console.log(e);
            res.status(500).json({
                result: false,
                msg: toString(),
                log: e.toString()
            })
        }
    }

    // [done] Note: 1-id, 2-content, 3-dueDate 4-inputDate 5-picture
    putTodoList = async (req: Request, res: Response) => {
        try {
            if (!req.params.id) {
                res.status(401).json({
                    result: false,
                    msg: 'Missing id',
                });
                return;
            }
            // const { username, password } = req.body;
            res.status(200).json(
                await this.service.updateTodoList(
                    req.params.id,
                    req.body.item,
                    req.body.content,
                    req.body.dueDate,
                    req.body.startDate,
                    req.body.startTime,
                    req.body.endDate,
                    req.body.endTime,
                    req.body.category,
                    req.body.assignedTo,
                    req.body.status
                )
            )
        } catch (e) {
            console.log(e);
            res.status(500).json({
                result: false,
                msg: toString(),
            })
        }
    }

    // [done] Note: 1-id, 2-content, 3-dueDate 4-inputDate 5-picture
    deleteTodoList = async (req: Request, res: Response) => {
        try {
            if (!req.params.id) {
                res.status(401).json({
                    result: false,
                    msg: 'Missing id',
                });
                return;
            }
            // await this.service.deleteTodoList(req.params.id)
            res.status(200).json(await this.service.deleteTodoList(req.params.id))
        } catch (e) {
            console.log(e);
            res.status(500).json({
                result: false,
                msg: toString(),
            })
        }
    }

    getLogin = async (req: Request, res: Response) => {
        try {
            const readLogin = await this.service.readLogin()
            res.status(200).json(readLogin)
        } catch (e) {
            res.status(500).json({
                result: false,
                msg: e.toString()
            })
        }
    }
   
    postLogin = async (req: Request, res: Response) => {
        try {
            if (!req.body.id) {
                res.status(401).json({
                    result: false,
                    msg: 'Missing Data',
                });
                return;
            }
            const {id, FirstName, LastName, EmailAddress, Password} = req.body;
            res.status(200).json(await this.service.addLogin(id, FirstName, LastName, EmailAddress, Password))

        } catch (e) {
            console.log(e);
            res.status(500).json({
                result: false,
                msg: toString(),
                log: e.toString()
            })
        }
    }

    putLogin = async (req: Request, res: Response) => {
        try {
            if (!req.params.id) {
                res.status(401).json({
                    result: false,
                    msg: 'Missing id',
                });
                return;
            }
            // const { username, password } = req.body;
            res.status(200).json(
                await this.service.updateLogin(
                    req.params.id,
                    req.body.FirstName,
                    req.body.LastName,
                    req.body.EmailAddress,
                    req.body.Password
                )
            )
        } catch (e) {
            console.log(e);
            res.status(500).json({
                result: false,
                msg: toString(),
            })
        }
    }

    // [done] Note: 1-id, 2-content, 3-dueDate 4-inputDate 5-picture
    deleteLogin = async (req: Request, res: Response) => {
        try {
            if (!req.params.id) {
                res.status(401).json({
                    result: false,
                    msg: 'Missing id',
                });
                return;
            }
            // await this.service.deleteTodoList(req.params.id)
            res.status(200).json(await this.service.deleteLogin(req.params.id))
        } catch (e) {
            console.log(e);
            res.status(500).json({
                result: false,
                msg: toString(),
            })
        }
    }

    getWhoLogin = async (req: Request, res: Response) => {
        try {
            const readWhoLogin = await this.service.readWhoLogin()
            res.status(200).json(readWhoLogin)
        } catch (e) {
            res.status(500).json({
                result: false,
                msg: e.toString()
            })
        }
    }

    putWhoLogin = async (req: Request, res: Response) => {
        try {
            if (!req.params.id) {
                res.status(401).json({
                    result: false,
                    msg: 'Missing id',
                });
                return;
            }
            // const { username, password } = req.body;
            res.status(200).json(
                await this.service.updateWhoLogin(
                    req.params.id,
                    req.body.userName,
                    req.body.login
                )
            )
        } catch (e) {
            console.log(e);
            res.status(500).json({
                result: false,
                msg: toString(),
            })
        }
    }
}
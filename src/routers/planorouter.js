import { Router } from "express";
import { 
    store,
    index,
    update,
    destroy
 } from "../controllers/planocontroller.js"
 const router = Router()

 router.get('/', index)
 router.post('/',  store)
 router.put('/:id', update)
 router.delete('/:id', destroy)

 export default router
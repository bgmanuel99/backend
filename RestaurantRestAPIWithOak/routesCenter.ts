// @ts-ignore
import { Router } from "https://deno.land/x/oak@v6.3.1/mod.ts"
// @ts-ignore
import { getStatus } from "./Controllers/getStatus.ts"
// @ts-ignore
import { putDesk } from "./Controllers/putDesk.ts"

const router = new Router()

router.get("/status", getStatus)
router.put("/desks", putDesk)

export { router as default }
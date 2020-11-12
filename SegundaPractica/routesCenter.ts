// @ts-ignore
import { Router } from "https://deno.land/x/oak@v6.3.1/mod.ts"
// @ts-ignore
import { getCharacters, getCharacter, deleteCharacter} from "./controllers/characters.ts"
// @ts-ignore
import putSwitchStatus from "./controllers/switchStatus.ts"
// @ts-ignore
import getStatus from "./controllers/status.ts"

const router = new Router()

router.get("/characters", getCharacters)
router.get("/characters/:id", getCharacter)
router.get("/status", getStatus)
router.put("/switchStatus/:id", putSwitchStatus)
router.delete("/character/:id", deleteCharacter)

export { router as default }
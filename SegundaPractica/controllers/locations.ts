// @ts-ignore
import { Router, helpers } from 'https://deno.land/x/oak/mod.ts'

const router = new Router()

router.get("/locations", (ctx) => {
    ctx.response.body = Array.from(ctx.state.models.locations.values())
})

router.get("/locations/:locationId", (ctx) => {
    const { locationId } = helpers.getQuery(ctx, { mergeParams: true})
    ctx.response.body = ctx.state.models.locations.get(Number(locationId))
})

export default router
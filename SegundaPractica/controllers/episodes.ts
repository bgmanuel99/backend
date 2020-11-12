// @ts-ignore
import { Router, helpers } from 'https://deno.land/x/oak/mod.ts'

const router = new Router()

router.get("/episodes", (ctx) => {
    ctx.response.body = Array.from(ctx.state.models.episodes.values())
})

router.get("/episodes/:episodeId", (ctx) => {
    const { episodeId } = helpers.getQuery(ctx, { mergeParams: true })
    ctx.response.body = ctx.state.models.episodes.get(Number(episodeId))
})

export default router
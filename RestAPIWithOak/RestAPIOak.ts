// @ts-ignore
import { Application } from 'https://deno.land/x/oak/mod.ts'
// @ts-ignore
import models from "./Models/index.ts"
// @ts-ignore
import routes from './Routes/index.ts'
 
const port = 8000
const app = new Application()

const main = async () => {
    app.use(async (ctx, next) => {
        ctx.state = {
            models,
            me: models.users.get('1'),
        };
        await next();
    });

    app.use(routes.session.allowedMethods())
    app.use(routes.session.routes())
    app.use(routes.user.allowedMethods())
    app.use(routes.user.routes())
    app.use(routes.message.allowedMethods())
    app.use(routes.message.routes())
    
    app.addEventListener('listen', () => {
        console.log(`Listening on: localhost:${port}`)
    });
    
    await app.listen({ port })
}

main()
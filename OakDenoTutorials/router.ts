// @ts-ignore
import { Application, Router } from 'https://deno.land/x/oak/mod.ts';

const port = 8000;
const app = new Application();
const router = new Router();

const main = async () => {
    /* Crear dominios con un router en el host
    const router = new Router();
    const routerOne = new Router();
    const routerTwo = new Router();

    router.get('/', (ctx) => {
        ctx.response.body = 'Hello Deno';
    })

    routerOne.get('/1', (ctx) => {
        ctx.response.body = 'Hello Deno 1';
    });

    routerTwo.get('/2', (ctx) => {
        ctx.response.body = 'Hello Deno 2';
    });

    app.use(router.routes());
    app.use(router.allowedMethods());
    
    app.use(routerOne.routes());
    app.use(routerOne.allowedMethods());
    
    app.use(routerTwo.routes());
    app.use(routerTwo.allowedMethods());
    */

    // Creacion de dominios con un router de manera concatenada
    router.get('/', (ctx) => {
        ctx.response.body = 'Hello Deno';
    }).get('/1', (ctx) => {
        ctx.response.body = 'Hello Deno 1';
    }).get('/2', (ctx) => {
        ctx.response.body = 'Hello Deno 2';
    });

    app.use(router.routes());
    app.use(router.allowedMethods());

    app.addEventListener('listen', () => {
        console.log(`Listening on localhost:${port}`);
    });
    
    await app.listen({ port });
}

main()
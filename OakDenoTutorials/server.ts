// @ts-ignore
import { Application, Context } from 'https://deno.land/x/oak/mod.ts';
 
const port = 8000;
const app = new Application();

const main = async () => {
    const logging = async (ctx: Context, next: Function) => {
        console.log(`HTTP ${ctx.request.method} on ${ctx.request.url}`);
        await next();
    };
       
    app.use(logging);
       
    app.use((ctx) => {
        console.log('returning a response ...');
        ctx.response.body = 'Hello Deno';
    });
    
    app.addEventListener('listen', () => {
        console.log(`Listening on localhost:${port}`);
    });
    
    await app.listen({ port });
}

main()
// @ts-ignore
import { Database } from "https://deno.land/x/mongo@v0.12.1/ts/database.ts";
// @ts-ignore
import { IContext, DeskSchema, ClientSchema } from "../types.ts"

export const postClient = async (ctx: IContext) => {
    try{
        const db: Database = ctx.status.db
        const deskCollection = db.collection<DeskSchema>("DeskCollection")
        const clientCollection = db.collection<ClientSchema>("ClientCollection")
        let appJson: boolean = false

        ctx.request.headers.get("Content-Type") === "application/json" ? appJson = true : appJson = false

        if(appJson){
            const body = await ctx.request.body()
            let data = await body.value

            const desk: Partial<DeskSchema> | null = await deskCollection.findOne({$and: [{seats: { $gte: data.people } }, {occupied: false}] })

            if(desk){
                await deskCollection.updateOne({id: desk.id}, {$set: { occupied: true}})

                const enter = await clientCollection.insertOne({
                    ...data,
                    desk: {
                        ...desk,
                        occupied: true
                    }
                })

                if(enter){
                    ctx.response.status = 202
                    ctx.response.body = "Accepted"
                }else{
                    ctx.response.status = 404
                    ctx.response.body = "There was a problem registering the client"
                }
            }else{
                ctx.response.status = 404
                ctx.response.body = "Not Found: There are no desks that satisfy the specified criteria"
            }
        }else{
            ctx.response.status = 400
            ctx.response.body = "The body of the Content-Type was not an application/json"
        }
    }catch(e){
        ctx.response.status = 500
        ctx.response.body = `Unexpected Error: ${e.message}`
    }
}
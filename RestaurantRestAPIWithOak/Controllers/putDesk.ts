// @ts-ignore
import { Database } from "https://deno.land/x/mongo@v0.12.1/ts/database.ts";
// @ts-ignore
import { IContext, DeskSchema } from "../types.ts"

export const putDesk = async (ctx: IContext) => {
    try{
        const db: Database = ctx.state.db
        const deskCollection = db.collection<DeskSchema>("DeskCollection")
        let appJson: boolean = false

        ctx.request.headers.get("Content-Type") === "application/json" ? appJson = true : appJson = false

        if(appJson){
            const body = await ctx.request.body()
            let data = await body.value

            for(const desk of data){
                if(desk.seats < 2 || desk.seats > 6){
                    ctx.response.status = 400
                    ctx.response.body = "Some of the desks dont have the appropiate data value"
                    return
                }
            }

            const deleted: number = await deskCollection.deleteMany({})

            if(deleted){
                const formatedData = data.map((desk: DeskSchema) => {
                    return {
                        ...desk,
                        occupied: false,
                    }
                })
    
                const inserted: any[] = await deskCollection.insertMany(formatedData)
    
                if(inserted.length === formatedData.length){
                    ctx.response.status = 200
                    ctx.response.body = "OK"
                }else{
                    ctx.response.status = 400
                    ctx.response.body = "There was a problem introducing the desks into the DDBB"
                }
            }else{
                ctx.response.status = 400
                ctx.response.body = "There was a problem deleting the desks from the DDBB"
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
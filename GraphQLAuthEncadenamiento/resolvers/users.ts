import { Collection, Database } from "https://deno.land/x/mongo@v0.12.1/mod.ts";
import { GQLError } from "https://deno.land/x/oak_graphql@0.6.2/mod.ts";
import { TaskSchema, UserSchema } from "../mongo/mongoTypes.ts";

interface IContext {
    db: Database,
}
export const users = {
    friends: async (parent: { friends: string[] }, args: any, context: IContext) => {
        const db: Database = context.db
        const userCollection: Collection<UserSchema> = db.collection<UserSchema>("UserCollection")
        
        const users: UserSchema[] = await userCollection.find({})
        
        return parent.friends.map(friend => users.find((usr: UserSchema) => usr.id === Number(friend)))
    },
    enemies: async (parent: { enemies: string[] }, args: any, context: IContext) => {
        const db: Database = context.db
        const userCollection: Collection<UserSchema> = db.collection<UserSchema>("UserCollection")
       
        const users: UserSchema[] = await userCollection.find({})
        
        return parent.enemies.map(enemies => users.find((usr: UserSchema) => usr.id === Number(enemies)))
    }
}
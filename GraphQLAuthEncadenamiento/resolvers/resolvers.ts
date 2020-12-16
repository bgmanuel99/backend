import { querys } from "./querys.ts"
import { mutations } from "./mutations.ts"
import { users } from "./users.ts"

export const resolvers = {
    User: users,
    Query: querys,
    Mutation: mutations
}
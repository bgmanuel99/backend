// @ts-ignore
import { Context } from "https://deno.land/x/oak@v6.3.1/mod.ts"

export interface DeskSchema{
    _id: { $oid: string },
    id: number,
    seats: number,
    occupied: boolean
}

export interface ClientSchema{
    _id: { $oid: string },
    id: number,
    people: number,
    desk: DeskSchema
}

// deno-lint-ignore no-explicit-any
export type IContext = Context<Record<string, any>>
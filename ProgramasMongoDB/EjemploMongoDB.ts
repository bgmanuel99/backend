// @ts-ignore
import { MongoClient } from "https://deno.land/x/mongo@v0.12.1/mod.ts"
import  "https://deno.land/x/dotenv/load.ts";

try{
    const DB_URL = Deno.env.get("DB_URL2");
    const DB_NAME = Deno.env.get("DB_NAME2");

    if(!DB_URL || !DB_NAME){
        throw Error("Please define DB_URL and DB_NAME on .env file");
    }

    const client = new MongoClient();
    client.connectWithUri(DB_URL);

    const db = client.database(DB_NAME);
    const courses = db.collection<CoursesSchema>("CoursesCollection")

    interface UserSchema {
        _id: {$oid: string}
        name: string,
        pwd: string
    }

    interface CoursesSchema {
        _id: {$oid: string}
        name: string,
        year: number
    }

    const course: Partial<CoursesSchema> = {
        name: "Estructuras de datos y algoritmos",
        year: 1
    }

    const insert = async() => {
        const insertCourse = await courses.insertOne(course)
    }
    
    insert()
}catch(e){
    console.log(e)
}
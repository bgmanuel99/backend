// @ts-ignore
import { MongoClient} from "https://deno.land/x/mongo@v0.12.1/mod.ts";
import  "https://deno.land/x/dotenv/load.ts";

interface UserSchema {
    _id: { $oid: string };
    name: string;
    age: number;
    email: string;
    password: string;
    signatures: string[];
}

try {
    const DB_URL = Deno.env.get("DB_URL");
    const DB_NAME = Deno.env.get("DB_NAME");

    if(!DB_URL || !DB_NAME){
        throw Error("Please define DB_URL and DB_NAME on .env file");
    }

    const client = new MongoClient();

    client.connectWithUri(DB_URL);
    const db = client.database(DB_NAME);
    const usersCollection = db.collection<UserSchema>("UsersCollection");

    let usersArray = []

    for(let i = 0; i < 50000; i++){
        usersArray.push({
            name: "Manuel Barrenechea Gonzalez",
            age: 21,
            email: "bgmanuel1999@gmail.com",
            password: "lfkDfsdj23iu23bui45@_saf",
            signatures: ["Programming", "English", "Mathematics", "Language", "History", "Physics", "Painting"]
        })
    }

    const insert = await usersCollection.insertMany(usersArray)

    if(insert) console.log("OK")
    else console.log("Problem")
} catch(e) {
    console.log(e.message)
}
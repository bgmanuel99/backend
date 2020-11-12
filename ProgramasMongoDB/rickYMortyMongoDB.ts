// @ts-ignore
import { MongoClient } from "https://deno.land/x/mongo@v0.12.1/mod.ts"
import  "https://deno.land/x/dotenv/load.ts";

const main = async () => { // Meto todo el codigo en una funcion asincrona para que no me de errores los await
    try{
        // Nos conectamos a la base de datos
        const DB_URL = Deno.env.get("DB_URL")
        const DB_NAME = Deno.env.get("DB_NAME")

        if(!DB_URL || !DB_NAME){
            throw Error("Please define DB_URL and DB_NAME on .env file")
        }

        const client = new MongoClient()
        client.connectWithUri(DB_URL)
    
        // Interfaces creadas para los datos de la api que se meteran dentro de la base de datos de mongo
        interface CharactersSchema{
            _id: {$oid: string}
            id: number,
            name: string,
            status: string,
            species: string,
            type: string,
            gender: string,
            origin: {name: string, url: string},
            location: {name: string, url: string},
            image: string,
            episode: string[],
            url: string,
            created: string
        }
    
        interface EpisodesSchema{
            _id: {$oid: string}
            id: number,
            name: string,
            air_date: string,
            episode: string,
            characters: string[],
            url: string,
            created: string
        }
    
        interface LocationsSchema{
            _id: {$oid: string}
            id: number,
            name: string,
            type: string,
            dimension: string,
            residents: string[],
            url: string,
            created: string
        }
    
        // Interfaces creadas para recoger los datos provenientes de las llamadas a la api
        interface IInfo{
            next: string
        }
        
        interface IEpisodesData{
            info: IInfo,
            results: EpisodesSchema[]
        }

        interface ICharactersData{
            info: IInfo,
            results: CharactersSchema[]
        }

        interface ILocationsData{
            info: IInfo,
            results: LocationsSchema[]
        }
    
        let url: string = "https://rickandmortyapi.com/api/episode/"
        let response = await fetch(url)
        let episodesData: IEpisodesData = await response.json()
        let episodes: Partial<EpisodesSchema>[] = episodesData.results

        while(episodesData.info.next){
            response = await fetch(episodesData.info.next)
            episodesData = await response.json()
            episodes.push(...episodesData.results)
        }

        url = "https://rickandmortyapi.com/api/character/"
        response = await fetch(url)
        let charactersData: ICharactersData = await response.json();
        let characters: Partial<CharactersSchema>[] = charactersData.results

        while(charactersData.info.next){
            response = await fetch(charactersData.info.next)
            charactersData = await response.json()
            characters.push(...charactersData.results)
        }

        url = "https://rickandmortyapi.com/api/location/"
        response = await fetch(url)
        let locationsData: ILocationsData = await response.json()
        let locations: Partial<LocationsSchema>[] = locationsData.results

        while(locationsData.info.next){
            response = await fetch(locationsData.info.next)
            locationsData = await response.json()
            locations.push(...locationsData.results)
        }
    
        const db = client.database(DB_NAME) // Conectamos con la base de datos para poder luego hacer referencia a las colecciones
        const character = db.collection<CharactersSchema>("CharactersCollection")
        const episode = db.collection<EpisodesSchema>("EpisodesCollection")
        const location = db.collection<LocationsSchema>("LocationsCollection")
        
        episodes.forEach(async (ep) => {
            await episode.insertOne(ep)
        })

        characters.forEach(async (charac) => {
            await character.insertOne(charac)
        })

        locations.forEach(async (loc) => {
            await location.insertOne(loc)
        })
    }catch(e){
        console.log(e)
    }
}

main()
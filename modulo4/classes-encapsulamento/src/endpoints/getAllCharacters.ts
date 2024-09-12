import { Request, Response } from "express"
import Character  from "../data/Character"
import CharacterDatabase from "../data/CharacterDatabase"

export default async function getAllCharacters(
   req: Request,
   res: Response
): Promise<void> {

   try {
      const characterDB = new CharacterDatabase()

      const characters = await characterDB.getAllCharacters()
           
      res.send(characters)
   } catch (error: any) {
      res.status(500).send(error.sqlMessage || error.message)
   }
}

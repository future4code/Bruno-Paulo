import { Request, Response } from "express"
import Character from "../data/Character"
import CharacterDatabase from "../data/CharacterDatabase"

export default async function createCharacter(
   req: Request,
   res: Response
): Promise<void> {

   try {
      const { name, movie } = req.body

      // criando um novo objeto character da class Character
      const character = new Character(name, movie)

      // criando um novo objecto characterDB da class CharacterDatabase()
      const characterDB = new CharacterDatabase()

      // chamando o método createCharacter do objeto characterDB
      await characterDB.createCharacter(character)

      res.status(201).end() 
   } catch (error) {
      res.status(500).end()
   }
}

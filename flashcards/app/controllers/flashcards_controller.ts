// import type { HttpContext } from '@adonisjs/core/http'
import Flashcard from '#models/flashcard'
import { HttpContext } from '@adonisjs/core/http'

export default class FlashcardsController {
  async update({ params, request }: HttpContext) {
    // Récupération des données
    const data = request.only(['question', 'reponse'])
    // Vérification de l'existence de
    const flashcard = await Flashcard.findOrFail(params.id)
    // Mise à jour des données de l'élève
    flashcard.merge(data)
    // Sauvegarde des modifications
    await flashcard.save()
    // Retourne le json de l'élève mis à jour
    return flashcard
  }
}

// import type { HttpContext } from '@adonisjs/core/http'
import Deck from '#models/deck'
import { HttpContext } from '@adonisjs/core/http'

export default class DecksController {
  async update({ params, request }: HttpContext) {
    // Récupération des données
    const data = request.only(['publishedDate', 'createdAt', 'updatedAt'])
    // Vérification de l'existence de l'élève
    const deck = await Deck.findOrFail(params.id)
    // Mise à jour des données de l'élève
    deck.merge(data)
    // Sauvegarde des modifications
    await deck.save()
    // Retour le json de l'élève mis à jour
    return deck
  }
}

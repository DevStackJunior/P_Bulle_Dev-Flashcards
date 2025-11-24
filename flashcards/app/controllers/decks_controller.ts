// import type { HttpContext } from '@adonisjs/core/http'
import Deck from '#models/deck'
import { HttpContext } from '@adonisjs/core/http'

export default class DecksController {
  /**
   * Display tous les decks par ordre de date de création
   */
  async show({ response }: HttpContext) {
    const decks = await Deck.query().orderBy('created_at')

    console.log(decks.length)
    return response.ok({
      message: 'Success',
      data: { decks },
    })
  }

  async create({}: HttpContext) {}

  //updating the datas over
  async update({ params, request }: HttpContext) {
    // Récupération des données

    // UPDATE | Request.only à enlever -> validateur s'en charge
    const data = request.only(['publishedDate']) //validateur
    // Vérification de l'existence du deck
    const deck = await Deck.findOrFail(params.id)
    // Mise à jour des données du deck
    deck.merge(data)
    // Sauvegarde des modifications
    await deck.save()
    // Retourne le json du deck mis à jour
    // UPDATER le retour en objet similaire à
    return deck
  }

  /**
   * Handle the form submission to delete a specific post by id.
   */
  async destroy({ params }: HttpContext) {}
}

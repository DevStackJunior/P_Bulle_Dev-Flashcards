import factory from '@adonisjs/lucid/factories'
import Deck from '#models/deck'

export const DeckFactory = factory
  .define(Deck, async ({ faker }) => {
    return {}
  })
  .build()
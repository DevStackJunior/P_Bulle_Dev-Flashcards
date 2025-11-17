import factory from '@adonisjs/lucid/factories'
import Deck from '#models/deck'
import { DateTime } from 'luxon'

export const DeckFactory = factory
  .define(Deck, () => {
    return {
      publishedDate: DateTime.now().minus({ days: Math.round(Math.random() * 365) }),
    }
  })
  .build()
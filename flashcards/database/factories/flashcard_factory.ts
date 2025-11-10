import factory from '@adonisjs/lucid/factories'
import Flashcard from '#models/flashcard'

export const FlashcardFactory = factory
  .define(Flashcard, async ({ faker }) => {
    return {}
  })
  .build()
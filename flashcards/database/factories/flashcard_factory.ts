import factory from '@adonisjs/lucid/factories'
import Flashcard from '#models/flashcard'
import { DateTime } from 'luxon'

export const FlashcardFactory = factory
  .define(Flashcard, ({ faker }) => {
    return {
      question: faker.lorem.sentence(),
      reponse: faker.lorem.sentence(),
    }
  })
  .build()
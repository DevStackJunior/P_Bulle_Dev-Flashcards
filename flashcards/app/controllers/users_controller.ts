// import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { HttpContext } from '@adonisjs/core/http'
import { errors } from '@adonisjs/session'

export default class UsersController {
  service: any
  /**
   * Display tous les decks par ordre de date de création
   */
  async show({ response }: HttpContext) {
    const users = await User.query().orderBy('created_at')

    console.log(users.length)
    return response.ok({
      message: 'Success',
      data: { users },
    })
  }

  // add one session
  async create(ctx: HttpContext) {
    const payload = ctx.request.body()
    try {
      const post = await this.service.create({
        userId: ctx.auth.user?.id!,
        payload,
      })

      try {
        await this.service.storeAttachments(ctx, post.id)
      } catch (error) {
        await post.delete()
        ctx.session.flash('errors', {
          images: 'Invalid file.',
        })
      }
    } catch (error) {
      if (error instanceof errors.E_SESSION_NOT_MUTABLE) {
        const reducedErrors = error.message
        ctx.session.flash('errors', reducedErrors)
      }
    }

    return ctx.response.redirect().back()
  }

  //updating the datas over user session
  async update({ params, request }: HttpContext) {
    // Récupération des données

    // UPDATE | Request.only à enlever -> validateur s'en charge
    const data = request.only(['pseudo', 'email', 'password']) //validateur
    // Vérification de l'existence de l'utilisateur
    const user = await User.findOrFail(params.id)
    // Mise à jour des données de l'utilisateur
    user.merge(data)
    // Sauvegarde des modifications
    await user.save()
    // Retour le json de l'utilisateur mis à jour
    // UPDATER le retour en objet similaire à
    return user
  }

  /**
   * Handle the form submission to delete a specific user by id.
   */
  async destroy(ctx: HttpContext) {
    const user = await User.findOrFail(ctx.params.id)
    await user.delete()

    return ctx.response.redirect().back()
  }
}

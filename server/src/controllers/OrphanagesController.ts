import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import * as Yup from 'yup'

import Orphanage from '../models/Orphanage'
import orphanages_view from '../views/orphanages_view'

export default {
  async index(req: Request, resp: Response) {
    const orphanagesRepository = getRepository(Orphanage)

    const orphanages = await orphanagesRepository.find({
      relations: ['images']
    })

    return resp.json(orphanages_view.renderMany(orphanages))
  },

  async show(req: Request, resp: Response) {
    const { id } = req.params
    const orphanagesRepository = getRepository(Orphanage)

    const orphanage = await orphanagesRepository.findOneOrFail(id, {
      relations: ['images']
    })

    return resp.json(orphanages_view.render(orphanage))
  },

  async create(req: Request, resp: Response) {
    const {
      name,
      latitude,
      logitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = req.body

    const requestImages = req.files as Express.Multer.File[]

    const images = requestImages.map(image => ({ path: image.filename }))

    const data = {
      name,
      latitude,
      logitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images,
    }

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      logitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required()
        })
      ),
    })
    await schema.validate(data, {
      abortEarly: false,
    })

    const orphanagesRepository = getRepository(Orphanage)
    const orphanage = orphanagesRepository.create(data)

    await orphanagesRepository.save(orphanage)

    return resp.status(201).json(orphanage)
  }
}
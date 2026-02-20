import fp from 'fastify-plugin'
import { FastifyPluginAsync } from 'fastify'
import fastifyJwt from '@fastify/jwt'

const jwtPlugin: FastifyPluginAsync = fp(async (fastify) => {
    const secret = process.env.JWT_SECRET
    if (!secret) {
      throw new Error('JWT_SECRET environment variable is required')
    }
    fastify.register(fastifyJwt, {
      secret,
    })
  })

export default jwtPlugin
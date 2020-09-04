import fp from 'fastify-plugin'
import Chance from 'chance'
export default fp((fastify, options, next) => {
    var chance = new Chance()
    fastify.decorate('chance', chance)
    next()
}, {
    fastify: '>=1.0.0',
    name: 'fastify-chance'
})
const Hapi = require('@hapi/hapi')

const bookRoutes = require('./routes/book.routes')

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  })

  server.route({
    method: 'GET',
    path: '/ping',
    handler: () => ({
      message: 'ping',
    }),
  })

  server.route(bookRoutes)

  await server.start()
  console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()

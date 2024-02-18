const express = require("express")

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  const htmlResponse = `
  <html>
    <head>
      <title>Servidor corriendo</title>
    </head>
    <body>
      <h1>Servidor corriendo</h1>
    </body>
  </html>
  `
  res.send(htmlResponse)
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})

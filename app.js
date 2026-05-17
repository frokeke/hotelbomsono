import express from 'express'

import publicRoutes from './routes/publicRoutes.js'
import userRoutes from './routes/userRoutes.js'

const app = express()

app.use(express.json())

app.use('/', publicRoutes)
app.use('/users', userRoutes)

export default app
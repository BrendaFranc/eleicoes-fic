import express from 'express'
import candidatoRouter from './src/routes/candidatoRouter.js'
import candidatoViewRouter from './src/routes/candidatoViewRouter.js'
import painelRouter from './src/routes/painelRouter.js'
import path from 'node:path'
import session from 'express-session'
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(path.resolve(), 'src', 'views'))
app.use(express.json())
app.use(express.json())
app.use(session({
  secret: '36A753431E98E502235CB7943075DBD6',
  resave: false,
  saveUninitialized: true
}))
app.use(express.urlencoded({ extended: true }))

//      chave base da url
app.use('/api', candidatoRouter)
app.use('/', candidatoViewRouter)
app.use('/painel', painelRouter)


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
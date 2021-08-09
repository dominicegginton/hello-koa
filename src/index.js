/* IMPORT MODULES */
import Koa from 'koa'

/* SETUP KOA */
const app = new Koa()

/* SERVER CONFIGURATION */
const PORT = process.env.PORT || 3000
app.use(ctx => { ctx.body = 'Hello Koa' })

/* START KOA SERVER */
app.listen(PORT, () => console.log(`> server started on port ${PORT}`))

/* IMPORT MODULES */
import Koa from 'koa'

/* SETUP KOA */
const app = new Koa()

/* SERVER CONFIGURATION */
const PORT = process.env.PORT || 3000

/* START KOA SERVER */
app.listen(PORT, () => console.log(`> server started on port ${PORT}`))

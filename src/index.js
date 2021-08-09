/* IMPORT MODULES */
import Koa from 'koa'

/* SETUP KOA */
const app = new Koa()

/* START KOA SERVER */
app.listen(3000, () => console.log('> server started on port 3000'))

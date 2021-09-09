const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
// const cors = require('koa2-cors');

const home = require('./route/home');
const page = require('./route/page');

// const isDev = process.env.NODE_ENV === 'development';
// 设置跨域 http://127.0.0.1:7001
// app.use(cors({ origin: (ctx) => '*' }));

// 使用ctx.body解析中间件
app.use(bodyParser())


// 装载所有子路由
let router = new Router()
router.use('/api', home.routes())
router.use('/api/page', page.routes(), page.allowedMethods())

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())

app.listen(7000, ()=>console.log('[demo] start-quick is starting at port 7000'));


const Router = require('koa-router')
const home = new Router()
const userController = require('../controller/t_user')

home.get('/user', userController.getQueryResults)

// 子路由1
home.post('/register', async(ctx)=>{
    // 当POST请求的时候，中间件koa-bodyparser解析POST表单里的数据，并显示出来
    let postData = ctx.request.body
    ctx.body = { code: 0, data: { code: 0, postData } };
})

home.get('/helloworld', async ( ctx )=>{
    let data=[1,2,3]

    ctx.body = { code: 0, data: { code: 0, data } };
  })

home.get('/', async ( ctx )=>{
    console.log(ctx)
  let html = `
    <ul>
      <li><a href="/api/page/register">api/page/register</a></li>
      <li><a href="/api/page/helloworld">api/page/helloworld</a></li>
      <li><a href="/api/page/404">api/page/404</a></li>
      <li><a href="/api/register">api/register</a></li>
    </ul>
  `
  ctx.body = html
})



module.exports = home
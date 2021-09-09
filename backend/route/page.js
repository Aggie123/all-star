const Router = require('koa-router')
// 子路由2
let page = new Router()
page.get('/404', async ( ctx )=>{
    console.log(ctx)
  ctx.body = '404 page!'
})
page.get('/helloworld', async ( ctx )=>{
  ctx.body = 'helloworld page!'
})
page.get('/register', async(ctx)=>{
    let html = `
      <h1>koa2 request post demo</h1>
      <form method="POST" action="/register">
        <p>userName</p>
        <input name="userName" /><br/>
        <p>nickName</p>
        <input name="nickName" /><br/>
        <p>email</p>
        <input name="email" /><br/>
        <button type="submit">submit</button>
      </form>
    `
    ctx.body = html;
})

module.exports = page
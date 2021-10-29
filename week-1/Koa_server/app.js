const koa = require("koa");
const koaRouter = require("koa-router"); // importing Koa-Router
const logger = require("koa-logger");

const app = new koa();
const router = new koaRouter();
const date = new Date();
//MiddleWare
 // registering routes to the application
app.use(logger((str) => {
    console.log(str, date.toDateString(), date.toLocaleTimeString());
  })
);
app.use(router.routes()).use(router.allowedMethods());
//Router
router.get("index", "/", (context) => {
  context.body = `<h1>Welcome to the index page</h1>
  <a href="/about">About</a>
  <a href="/contact">Contact</a>`;
});
router.get("about", "/About", (context) => {
  context.body = `<h1>Welcome to the about page</h1>
  <a href="/">Index</a>
  <a href="/contact">Contact</a>`;
});
router.get("contact", "/Contact", (context) => {
  context.body = `<h1>Welcome to the contact page</h1>
  <a href="/">Index</a>
  <a href="/about">About</a>`;
});

const port = 3000;
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
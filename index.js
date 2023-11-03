const express =require('express');
const { createProxyMiddleware, Filter, Options, RequestHandler } =require('http-proxy-middleware');

const app = express();
const port = 3000;
app.use('/authenticate', createProxyMiddleware({ target: ' http://localhost:8081/api/v1/CHANGETHIS', changeOrigin: true }));
app.use('/ping', createProxyMiddleware({ target: ' http://localhost:8082/api/v1/CHANGETHIS', changeOrigin: true }));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
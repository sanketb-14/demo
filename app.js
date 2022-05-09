//HTTP MODULE
const http = require('http');
const server = http.createServer((req,res) =>{
    if(req.url === '/'){
        res.end(`<h1>Welcome To Home</h1>`)
    }
    if(req.url === '/about'){
        res.end(`<h2>About usssss</h2>`)
    }
    else{
        res.end(`<p>sorry we have nothing here</p>`)
    }
    

})
server.listen(3000)



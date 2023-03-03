const http =require('http');

const server =http.createServer((req,res)=>{
    if(req.url === '/')
    {
    res.end('welcome hommie');}
    if(req.url=='/about')
        {
            res.end('here is history bois');
        }
        res.end(`
            <h1>oops</h1>
            <p>we can't seem to find the page </p>
            <a href ="/">back home</a>`
            )
})

server.listen(5000);
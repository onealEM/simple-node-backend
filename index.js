const http = require("http");
const fs = require("fs")

const PORT = 3500;

const server = http.createServer((req, res) => {
// request handler goes here 

// content with plain text format 
    if (req.url === "/"){
        res.writeHead(200, {
            "content-type": "text/plain"
        })
        res.end("ini adalah halaman utama dengan content text plain")
    }

    // content with JSON format 

    else if(req.url == "/contents") {
        res.writeHead(200, {
            "content-Type": "application/json"
        })

        let contents = JSON.stringify([
            {name:"oneal", phone:"09876967867"},
            {name:"jidan", phone:"098769676887"},
            {name:"dafa", phone:"098678599986"},
        ]);

        res.end(contents);
    }

    // content with HTML format 
    else if (req.url == "/about"){
        res.writeHead(200, {
            "Content-Type": "text/html"
        })

        res.end("<h1>Ini Halaman about, dengan type content html");
    }

    //content with HTML file

    else if (req.url === "/product"){
        fs.readFile("./public/index.html", (err, data) => {
            if(err){
                res.writeHead(404);
                res.write("halaman ini tidak ditemukan");
            } else {
                res.writeHead(200);
                res.end(data);
            }

        })

    }

});

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
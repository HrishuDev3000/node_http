const http = require("http");
const PORT = 3000;
const server = http.createServer((req, res) => {
    let chunks = [];

    req.on("data", (chunk) => {
        chunks.push(chunk);
    })

    req.on("end", () => {
        const body = Buffer.concat(chunks).toString();
        if (req.url == "/") {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write("<h1>Yo Gabba Gabba</h1><p> Yo Gabba Gabba is the greatest show to ever exist<p>");
        }
        else if (req.url == "/about") {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write("<h1>About Me</h1><p>I like dogs<p>");
        }
        else if (req.url == "/echo") {
            res.writeHead(200, { "Content-Type": "application/Json" });
            res.write(JSON.stringify({
                method: req.method,
                url: req.url
            }));
        } else {
            res.writeHead(400, { "Content-Type": "text/plain" });
            res.write("404 Not Found");
        }
        res.end();
    });

    

});

// Finish setting up the server
server.listen(PORT, () => {
    console.log("Server started on port" + PORT);
})
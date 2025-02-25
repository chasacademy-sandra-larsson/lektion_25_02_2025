import { createServer } from "node:http"

const port = 3000;
const host = "127.0.0.1";

const server = createServer((request, response) => {

    // En route i vanilla API
    if(request.url === "/hello" && request.method == "GET") {
        response.statusCode = 200;
        response.setHeader("Content-Type", "application/json");
        response.end(JSON.stringify({ message: "Hello world"}));
        return;
    }    

})

server.listen(port, host, ()=> {
    console.log(`Server is running on http://${host}:${port}`);
})
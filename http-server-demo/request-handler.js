
var fs = require('fs')
var path = require('path')
var url = require('url')
module.exports = (req, res) => {

    //console.log(req.method)
    // console.log(req.url);

    if (req.method === "GET") {
        //All get request
        handle_get(req, res)
    }
    else if (req.method === "POST") {
        handle_post(req, res)
    }
};

function handle_get(req, res) {

    var parsed_url = url.parse(req.url);

    // console.log(parsed_url.query);


    if (parsed_url.pathname === "/") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        var html = `<!doctype html>
                           <html>
                               <head>
                                <title>My home page</title>
                               </head>
                                <body>
                                <h2>Home page</h2>
                               </body>
                                </html>`
        res.end(html)

    }

    else if (parsed_url.pathname === "/login") {

        var filepath = path.resolve(__dirname, 'views/login.html')
        var login = fs.readFileSync(filepath, "utf8")
        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.end(login);
    }
    else if (parsed_url.pathname === "/submitlogin") {

        var filepath = path.resolve(__dirname, 'views/loginsuccess.html')
        var successPage = fs.readFileSync(filepath, "utf8")

        res.writeHead(200, { 'Content-Type': 'text/html' });
        var params = getQueryParams(parsed_url)

        successPage = successPage.replace("{name}", params.get("uname"))
        res.end(successPage)
    }
    else if (parsed_url.pathname === "/register") {

        var filepath = path.resolve(__dirname, 'views/register.html')
        var register = fs.readFileSync(filepath, "utf8")
        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.end(register);
        //         //res.end("Register page")
    }
}

function handle_post(req, res) {


    if (req.url === "/register") {

        var body = "";

        req.on('data', function (data) {

            body += data;
        })

        req.on("end", function () {

            if (body != "") {

                var postedData=getBodyParams(body)
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`<h3>${postedData.get('email')} is registered succesfully`)
                //console.log(body)
            }
        })





        //res.end("Received");

    }
}

function getQueryParams(url) {
    var data = url.query.split("&")
    var params = new Map();
    for (var item of data) {

        var info = item.split("=");
        params.set(info[0], info[1])
    }
    return params;
}

function getBodyParams(body){

    var data=body.split("&");
    var params=new Map();

    for(var item of data){
        var info=item.split("=");
        params.set(info[0],info[1]);
    }
    return params;
}



//     if (req.url === "/") {
//         res.writeHead(200, { 'Content-Type': 'application/html' });
//         var html = `<!doctype html>
//                     <html>
//                         <head>
//                         <title>My home page</title>
//                         </head>
//                         <body>
//                         <h2>Home page</h2>
//                         </body>
//                         </html>`
//         res.end(html)
//         //res.end("Home page");
//     }
//     else if (req.url === "/login" && req.method==="GET") {

//         var filepath=path.resolve(__dirname,'views/login.html')
//         var login=fs.readFileSync(filepath,"utf8")
//         res.writeHead(200, { 'Content-Type': 'text/html' });

//         res.end(login);
//     }
//     else if (req.url === "/login" && req.method==="POST") {
//         res.writeHead(200, { 'Content-Type': 'text/html' });

//         res.end("<h3>Login data received</h3>");
//     }        
//     else if (req.url === "/register" && req.method==="GET") {

//         var filepath=path.resolve(__dirname,'views/register.html')
//         var register=fs.readFileSync(filepath,"utf8")
//         res.writeHead(200, { 'Content-Type': 'text/html' });

//         res.end(register);
//         //res.end("Register page")
//     }else if (req.url === "/register" && req.method==="POST") {
//         res.writeHead(200, { 'Content-Type': 'text/html' });

//         res.end("Received");
//     }
//     else {
//         res.writeHead(404, { 'Content-Type': 'text/html' })
//         res.end()
//         // res.end("Invalid request")
//     }
// }
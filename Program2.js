var http=require('http')

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var science=60, maths=99 , english=80
    var Average=(science+maths+english)/3;
    Average1=Average.toString()
    res.end("Science:"+science+"</br>MAths:"+maths+"</br>English:"+english+"</br>Average:"+Average)

    
}).listen(3000);
console.log("Server Started ")

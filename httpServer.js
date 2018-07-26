const http=require('http');
http.createServer(function(reg,res){
    //相应并输出数据
    res.write('hello world');
    res.end();
}).listen(8080);
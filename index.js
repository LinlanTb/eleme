var express = require("express");
var app = express();
var fs = require("fs");

app.use(express.static("./public"));

app.get("/",function(req,res){
	fs.readFile("./views/index.html",function(err,data){
		if(err){
			return console.log(err);
		}
		res.end(data.toString());
	})
})
app.get("/mine",function(req,res){
	fs.readFile("./views/mine.html",function(err,data){
		if(err){
			return console.log(err);
		}
		res.end(data.toString());
	})
})
app.get("/book",function(req,res){
	fs.readFile("./views/book.html",function(err,data){
		if(err){
			return console.log(err);
		}
		res.end(data.toString());
	})
})
app.get("/eleme",function(req,res){
	fs.readFile("./views/eleme.html",function(err,data){
		if(err){
			return console.log(err);
		}
		res.end(data.toString());
	})
})
app.get("/find",function(req,res){
	fs.readFile("./views/find.html",function(err,data){
		if(err){
			return console.log(err);
		}
		res.end(data.toString());
	})
})
app.listen(3000);

var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var url = 'http://www.mercyhurst.edu/academics/undergraduate-programs';
var links = [];
request({url:url},function(error,response,body){
	var $ = cheerio.load(body);
	var a = $('h3 a');
	a.each(function(i,element){
		var href = $(element).attr('href');
		href = href.replace(/^(\/node\/\d+)/,'https://www.mercyhurst.edu$1');
		links.push(href);
	});
	fs.writeFile('links.json',JSON.stringify(links));
});

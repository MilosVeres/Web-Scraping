var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var json2csv = require('json2csv');
var links = require('./links');

var names = [];

function getNames(index){
	console.log(index);
	request({url: links[index]},function(error,response,body){
		var $ = cheerio.load(body);
		var a = $('span.field-content a');
		a.each(function(i,element){
			var text = $(element).text();
			if(i%2 != 0){
				text = text.replace(/^\W+/,'');
				names.push({name:text});
			}
		})
		if(index<27){
			getNames(index+1)
		}else{			
			json2csv({data:names},function(error,csv){
				fs.writeFile('names.csv',csv);
			});
		}
	});
}

getNames(0);

